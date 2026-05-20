# ATO Investigation 2024/2025

## Status
**REAL** — V6 governance layer deployed (manifest, gate, evidence index, registry, gap register, changelog).
Predecessor scaffold commit `6a5709e755e2dcc4f89fe1d5ccc11ba0ebf109e5` reclassified PARTIAL → REAL on uplift.

## Canonical entry points
| File | Role |
|------|------|
| [`manifest.yaml`](./manifest.yaml) | Machine-readable canonical manifest (identity, scope, evidence chain, graph edges) |
| [`_gate.yaml`](./_gate.yaml) | Section-level DISCOVER → PROVE → DECIDE → BUILD gate |
| [`evidence/INDEX.md`](./evidence/INDEX.md) | Typed evidence index — every claim must link here |
| [`registry/objects.yaml`](./registry/objects.yaml) | Object registry (no orphans) |
| [`gaps/REGISTER.md`](./gaps/REGISTER.md) | Surfaced unresolved dependencies |
| [`CHANGELOG.md`](./CHANGELOG.md) | Immutable append-only state-transition log |

## Purpose
Canonical operating index for the ATO / RDTI / MAAT investigation materials covering FY2024/2025 and adjacent periods. This is the operating layer, not a legal submission.

## Investigation spine
1. Source intake (REAL)
2. Evidence classification (PARTIAL)
3. Period boundary mapping (PARTIAL)
4. Research activity mapping (PARTIAL)
5. Financial reconciliation (PARTIAL)
6. Asset/IP linkage (PARTIAL)
7. Gap register (REAL)
8. Response pack assembly (BLOCKED on step 2)
9. Command Centre reporting (BLOCKED on step 8)
10. Closure receipt (BLOCKED on step 9)

State per spine step is canonical in [`manifest.yaml`](./manifest.yaml).

## Review event
- **Canonical ATO review date:** 2026-06-10
- **Internal target:** 2026-06-03
- **Buffer-window contacts (4–9 June):** Gordon McKirdy, Andrew Douglas (Hales Redden, `adouglas@halesredden.com.au`)

## Cross-stream isolation
MEAC / study-retrieval workstream remains **LOCKED** until existence audit completes — see [`../_governance/MEAC_LOCK.yaml`](../_governance/MEAC_LOCK.yaml). No bleed-over.

## Governance authority
This section is governed by `GLOBAL_RULE_KERNEL_V6`. Mirror at [`../_governance/RULES_V6.yaml`](../_governance/RULES_V6.yaml). Global build gate at [`../_governance/BUILD_GATE.yaml`](../_governance/BUILD_GATE.yaml).
