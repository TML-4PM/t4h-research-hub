# Section Changelog — ATO Investigation 2024/2025

Append-only. Every state transition recorded. V6: `all_state_changes_must_be_logged`.

---

## 2026-05-20T01:27:18Z — V6 uplift package deployed
- **Actor:** claude_opus_4_7 via claude.ai session
- **Runtime:** t4h-research-hub@main
- **Action:** validate → uplift → deploy
- **Files added:**
  - `manifest.yaml` (machine-readable canonical manifest)
  - `_gate.yaml` (section build gate)
  - `evidence/INDEX.md` (evidence index scaffold)
  - `registry/objects.yaml` (object registry seed)
  - `gaps/REGISTER.md` (gap register)
  - `CHANGELOG.md` (this file)
  - `../_governance/MEAC_LOCK.yaml` (cross-stream isolation contract)
  - `../_governance/BUILD_GATE.yaml` (global discover-before-build gate)
  - `../_governance/RULES_V6.yaml` (kernel mirror)
- **State emitted:** REAL (with full V6 evidence chain — receipt + ledger + manifest + graph linkage)
- **Predecessor commit:** `6a5709e755e2dcc4f89fe1d5ccc11ba0ebf109e5` (ChatGPT section scaffold)
- **Predecessor reclassification:** REAL → PARTIAL (under V6 strict definition; receipt-only without ledger/telemetry/graph)
- **Audit log target:** `audit.log` action=`ato_investigation.v6_uplift`

---

## earlier session — Section scaffolded
- **Actor:** chatgpt_agent (external LLM)
- **Action:** create README.md
- **Commit:** `6a5709e755e2dcc4f89fe1d5ccc11ba0ebf109e5`
- **State emitted:** REAL
- **State reclassified by V6 audit:** PARTIAL (no ledger, no telemetry, no graph)
- **Note:** Under V6 `governance_classification`, REAL requires executed + replayable + receipted + ledger_written + telemetry_verified + runtime_observed + economically_validated. Receipt alone is necessary but not sufficient.
