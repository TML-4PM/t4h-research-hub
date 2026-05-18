# GOVERNANCE

Canonical governance artifacts for Tech 4 Humanity Pty Ltd. Governance is platform-independent and supersedes implementation.

## Canonical documents

| Document | Form | Purpose |
|---|---|---|
| [`GLOBAL_RULE_KERNEL_V6.md`](./GLOBAL_RULE_KERNEL_V6.md) | Human-readable + embedded YAML | The operational constitution. Authoritative. |
| [`GLOBAL_RULE_KERNEL_V6.yaml`](./GLOBAL_RULE_KERNEL_V6.yaml) | Machine-canonical | Same content, parser target. Validated `yaml.safe_load` OK, 27 sections. |

## Precedence

`GLOBAL_RULE_KERNEL_V6` supersedes any `GLOBAL_RULE_KERNEL_V<6` and any narrower governance text wherever it is found in the portfolio. Where a conflict exists, this kernel wins and the conflicting artifact must be reconciled or archived (never deleted) per `runtime_truth_layer` and `drift_management`.

## Known open edges (honest state)

- The repository root `README.md` structure table does **not** yet link `GOVERNANCE/`. Until it does, this directory is reachable only by direct path — a residual orphan edge under the kernel's own `orphan_nodes_forbidden` rule. Wiring the root index is a pending follow-up, not a completed claim.
- This is the canonical home **pending a dedicated governance repository**. The write tool available could not create a new repo, only files in existing ones.

## Provenance

Ingested 2026-05-19T08:51:52+10:00 via Claude (Anthropic) session under the authority of the sole director. One corrupted citation token in the source paste (`meta.source_context`) was normalised; no other content altered.
