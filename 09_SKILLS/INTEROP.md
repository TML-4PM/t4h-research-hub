# Interop Wiring

How `09_SKILLS/` components plug into the T4H runtime.

## Bridge execution

All write operations route through the bridge at `zdgnab3py0.execute-api.ap-southeast-2.amazonaws.com`.

**SQL writes** (schema deploys, integrity_finding inserts):
```json
{"fn":"troy-sql-executor","payload":{"sql":"INSERT INTO research.integrity_finding ..."}}
```

- Envelope key MUST be `fn`
- Payload MUST be nested under `payload`
- NO extra fields (causes 400)
- NO trailing semicolons (returns rows:[])
- NO multi-statement SQL or BEGIN/COMMIT (split DDL atomic)
- PL/pgSQL via `run_sql` RPC with `$$`-quoted body

**GitHub writes** (skill docs, schema files):
- Via `T4H Remote MCP Clean:github_bulk_dispatch`
- `allowWrite=true`, `dryRun=false`
- Per-job evidence auto-returned, log to reality_ledger

**Lambda/AWS operations**: bridge function `troy-lambda-deploy` for new functions, `troy-code-pusher` for UPDATE-only existing.

## reality_ledger contract

Every integrity_finding INSERT must also write a reality_ledger row. Per **TRAPS-A #6**:

> The trigger `trg_real_requires_evidence` silently demotes REAL→PARTIAL unless evidence has a TOP-LEVEL key in {commit_sha, api_response, execution_trace, evidence_hash, cli_output, receipt_id, commit_id, pen_receipt_url, evidence_hashes, runtime_hash, telemetry_snapshot, recovery_log}.

Values nested inside `evidence_type` arrays FAIL. Top-level required.

**Reference pattern**:
```sql
INSERT INTO public.reality_ledger
  (capability, status, evidence, last_verified)
VALUES
  ('research.integrity_verify.phase_a',
   'REAL',
   jsonb_build_object(
     'commit_sha', 'abc123...',
     'finding_count', 7,
     'artifact_id', 'uuid...'
   ),
   now());
```

## cap_secrets

New capstone keys required (D+2 onwards):

| Key | Purpose | Rotation rule |
|---|---|---|
| `CROSSREF_API` | DOI metadata lookup for citation verification | Capstone + perimeter both, no queued half-state |
| `OPENALEX_API` | Open scholarship metadata | Capstone + perimeter both |
| `GITHUB_PAT_AUDIT` | Workflow audit access (currently EMPTY — pre-existing gap) | Capstone + perimeter |

Rotation rule per session memory: capstone (cap_secrets) ≠ perimeter (Lambda/Vercel env). Rotation MUST touch both layers or push fails. `v_secrets_reality` shows STALE if `last_rotation_status=queued` — never trust until direct curl verifies.

## Telemetry streams

Stage metrics emit to `cc.factory_health_daily` with new series:

- `research_integrity_findings_open` — counter
- `research_artifacts_verified` — counter
- `research_adversarial_challenges_unresolved` — gauge
- `research_review_round_count` — counter per artifact

## Telegram broadcast

Review reports (Phase E summary, adversarial findings) broadcast to chat 6972032328 via the existing `llm_scratchpad → t4h_canonical_changes → Telegram` pipeline. Insert into `llm_scratchpad` with `category='research_review'`.

## Business registry binding

Graph_cognition rule: no orphan nodes. Every `research.artifact` row carries `source_business` FK to `t4h_business_registry`. Phase A enforces — orphan artifact INSERT is rejected.

Canonical business count read live from `t4h_business_registry`, never hardcoded.

## Wave10 spine

Skills register against the 8 Wave10 components:
- **runtime**: agent invocation
- **value-loop**: integrity findings → revision → re-verification
- **revenue**: bound to RDTI refund preservation + ConsentX/Westpac upside
- **distribution**: Telegram broadcast + GitHub artifact
- **observability**: factory_health_daily extensions
- **recovery**: replay from reality_ledger entries
- **evidence**: reality_ledger top-level keys
- **lifecycle**: artifact versioning via `supersedes` edge
