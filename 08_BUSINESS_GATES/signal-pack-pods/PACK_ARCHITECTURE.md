# PACK ARCHITECTURE — decoupling pattern + schema deltas

> The pack-as-config decoupling pattern, expressed against the **existing** `seos_*` and `content_signal_*` schemas in S1 (`lzfgigiyqpuuxslsygjt`). Not a new schema. Not a parallel system. Additive only.

## Core rule (one sentence)

**Packs reference the system. The system does not depend on packs.**

In implementation terms: anything in a partner-facing pack is metadata + mapping. The schemas (`seos_*`, `content_signal_*`), the execution chain (`troy-orchestrator` → `troy-controller` → `ops.work_queue` → `ops.fn_dispatch_pending_submitted`), the reality ledger, and the bridge contracts all stay stable. Packs plug in. Packs swap out. Nothing core breaks.

## What a pack IS (allowed)

- `pack_id` — stable identifier.
- `pack_version` — semver, immutable per row.
- `pack_status` — `active` | `deprecated` | `experimental` | `withdrawn`.
- `pack_name`, `pack_description` — partner-facing.
- `mapped_verticals` — FK into `seos_verticals`.
- `mapped_modules` — FK into `seos_modules`.
- `mapped_offers` — FK into `seos_offers`.
- `mapped_signal_types` — FK into `content_signal_os` signal type registry.
- `mapped_actions` — FK into NEUROPAK action registry (when reactivated).
- `presentation_rules` — JSONB. Branding, layout, copy overrides.
- `tenant_id` — FK into partner registry.
- `deprecated_at`, `superseded_by_pack_id` — version lineage.

## What a pack IS NOT (forbidden)

- ❌ Core schema (`seos_*` and `content_signal_*` are frozen w.r.t. packs).
- ❌ Execution contracts (bridge fn names, payload schemas).
- ❌ Reality ledger structure.
- ❌ RLS policies.
- ❌ Authentication or authorisation logic.
- ❌ Hardcoded routing paths in any cron job or worker.
- ❌ Anything that, if removed, breaks the runtime.

## Schema delta (additive, non-breaking)

Proposed new tables, all in `public` schema, all with RLS, all FK'd into existing canonical tables:

```sql
-- DDL is illustrative; final form executes through apply_migration after Product Pod sign-off.

CREATE TABLE public.t4h_pack (
  pack_id           text PRIMARY KEY,
  pack_version      text NOT NULL,
  pack_status       text NOT NULL CHECK (pack_status IN ('active','deprecated','experimental','withdrawn')),
  pack_name         text NOT NULL,
  pack_description  text,
  tenant_id         uuid REFERENCES public.t4h_tenant(tenant_id),
  created_at        timestamptz NOT NULL DEFAULT now(),
  updated_at        timestamptz NOT NULL DEFAULT now(),
  deprecated_at     timestamptz,
  superseded_by     text REFERENCES public.t4h_pack(pack_id),
  UNIQUE (pack_id, pack_version)
);

CREATE TABLE public.t4h_pack_module_map (
  pack_id           text NOT NULL,
  pack_version      text NOT NULL,
  vertical_id       uuid REFERENCES public.seos_verticals(vertical_id),
  module_id         uuid REFERENCES public.seos_modules(module_id),
  display_order     integer,
  is_visible        boolean NOT NULL DEFAULT true,
  presentation      jsonb,
  PRIMARY KEY (pack_id, pack_version, vertical_id, module_id),
  FOREIGN KEY (pack_id, pack_version) REFERENCES public.t4h_pack(pack_id, pack_version)
);

CREATE TABLE public.t4h_pack_offer_map (
  pack_id           text NOT NULL,
  pack_version      text NOT NULL,
  offer_id          uuid REFERENCES public.seos_offers(offer_id),
  is_visible        boolean NOT NULL DEFAULT true,
  partner_price     numeric(10,2),  -- override of base offer price; must be ≥ seos_offers.price (no undercutting floor)
  PRIMARY KEY (pack_id, pack_version, offer_id),
  FOREIGN KEY (pack_id, pack_version) REFERENCES public.t4h_pack(pack_id, pack_version)
);

CREATE TABLE public.t4h_pack_signal_binding (
  pack_id           text NOT NULL,
  pack_version      text NOT NULL,
  signal_type_id    text NOT NULL, -- references content_signal_os signal type registry
  escalation_path   jsonb,
  PRIMARY KEY (pack_id, pack_version, signal_type_id),
  FOREIGN KEY (pack_id, pack_version) REFERENCES public.t4h_pack(pack_id, pack_version)
);

CREATE TABLE public.t4h_tenant (
  tenant_id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_name       text NOT NULL,
  tenant_brand      jsonb,  -- colours, logo URL, custom domain, copy overrides
  contract_started  date,
  contract_until    date,
  platform_fee_aud  numeric(10,2),
  revshare_pct      numeric(5,2),
  created_at        timestamptz NOT NULL DEFAULT now()
);
```

All new tables get RLS enabled on creation (per `seos_platform.schema_migration` REAL evidence — RLS is a non-negotiable house rule).

## Provenance: `source_pack_version` on every artifact

Every signal, action, offer-purchase, and ledger entry that flows through a pack-wrapped surface carries a `source_pack_version` column. Added by `ALTER TABLE`, no data loss. NULL allowed for legacy rows.

```sql
ALTER TABLE public.seos_pack_subscriptions
  ADD COLUMN source_pack_id text,
  ADD COLUMN source_pack_version text;

-- and similar additions to content_signal_* outbound tables
```

This gives:

- Per-pack A/B testing.
- Per-pack performance attribution (which pack converts, which packs decay).
- Safe deprecation: when a pack is withdrawn, existing rows stay tied to the version they were created under.
- Audit replay: regenerate exactly what a customer saw on day X by querying `source_pack_version` at that timestamp.

## Legacy protection rule

When a pack changes:

- Old `seos_pack_subscriptions` rows stay tied to their `source_pack_version`.
- New subscriptions use the new `pack_version`.
- No retroactive mutation. Ever.
- Migrations preserve the version chain via `superseded_by`.

Reality ledger continuity: every pack version transition writes a `pack_lifecycle` event into `reality_ledger` with:

```json
{
  "system": "t4h_pack",
  "component": "{pack_id}@{old_version}->{new_version}",
  "status": "REAL",
  "evidence": {
    "commit_sha": "...",
    "row_count_migrated": 0,  // additive — no migration
    "row_count_pinned_to_old": 142,
    "row_count_on_new": 0,
    "evidence_hash": "..."
  }
}
```

## Real risk areas (what breaks if we get this wrong)

### 1. Hardcoded pack references in scripts

**Risk:** any worker or cron job that does `if pack_id = 'X' then Y` becomes fragile.

**Fix:** all routing is data-driven. Workers query `t4h_pack_*` tables; they do not branch on string equality.

**Test:** grep every active Lambda + cron job for hardcoded `pack_id` literals after deployment.

### 2. UI assumptions

**Risk:** dashboards or partner widgets assume a specific pack structure.

**Fix:** every UI surface reads from `t4h_pack_module_map` + `presentation` JSONB at runtime. No baked-in pack assumptions.

**Test:** swap a partner's pack version on a test tenant; UI must adapt with no code change.

### 3. Automation bindings

**Risk:** `ops.work_queue` job templates or `troy-orchestrator` chains tied to pack names.

**Fix:** workflows bind to `signal_type_id` and `module_id`, never to `pack_id`.

**Test:** rename a pack; no work_queue job should fail.

## Non-breaking deployment plan

1. **Day 1–2:** create the 5 new tables in S1 via `apply_migration`. RLS on. Empty. Existing system untouched.
2. **Day 3–4:** add `source_pack_id`, `source_pack_version` columns to `seos_pack_subscriptions` and key `content_signal_*` outbound tables. Nullable. No backfill.
3. **Day 5–7:** seed first pack — `OperatorPack@1.0.0` — pointing at the existing AI4Tradies vertical/modules/offers. This is purely additive metadata; nothing else changes.
4. **Day 8–10:** update one landing page (AI4Tradies) to read pack metadata at runtime instead of hardcoded values. Behind a feature flag.
5. **Day 11–14:** validate with one real customer flow end-to-end. Compare new (pack-driven) and old (hardcoded) paths. Cut over once parity proven.
6. **Day 15+:** roll out to remaining 8 verticals one at a time, each behind its own flag.

## What this is **not** doing

- Not renaming or moving any existing table.
- Not changing any cron schedule.
- Not touching the bridge or its keys.
- Not touching the ATO evidence chain (`t4h-research-hub`).
- Not introducing SIL, OSID, or FAR-CAGE as new tables, columns, or schemas.
- Not modifying ConsentX (it remains an external dependency consumed via API).

## Reality ledger discipline (TRAPS-A v2 compliance)

Every step above produces a ledger entry. Each entry MUST carry a top-level evidence key from `{commit_sha, api_response, execution_trace, evidence_hash, cli_output, receipt_id, commit_id, pen_receipt_url, evidence_hashes, runtime_hash, telemetry_snapshot, recovery_log}` or `fn_enforce_real_requires_evidence` will silently demote it to PARTIAL.

The first entry — this document's commit — uses `commit_sha` + `api_response`.

## Sign-off needed

- Product Pod: approve the schema delta.
- Pricing Pod: approve the `partner_price ≥ seos_offers.price` floor rule.
- Troy: approve the migration window (proposed: weekend of 1–2 June, before ATO review).
