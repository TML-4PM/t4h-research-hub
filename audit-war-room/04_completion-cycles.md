# Audit War Room — Completion Cycles

Status: ACTIVE
Purpose: turn the Audit War Room from scaffold into live audit operating system.

## Cycle operating rule

Each cycle must end with:
- changed artefact or live system state
- receipt
- gap update
- next cycle trigger

No cycle closes on intent alone.

---

## Cycle 1 — Deployment Cycle

Goal: make the Audit War Room live on Vercel or a fallback static host.

Entry state:
- GitHub repo contains audit-war-room/index.html
- vercel.json exists

Actions:
1. Link `TML-4PM/t4h-research-hub` to Vercel project `t4h-research-hub`.
2. Deploy from main branch.
3. Validate `/` and `/audit-war-room` routes.
4. Record deployment ID, URL, timestamp, and build status.

Exit criteria:
- public/protected URL loads
- deployment status READY
- URL written into `02_finish-register.md`

Receipts:
- Vercel deployment URL
- Vercel deployment ID
- runtime fetch result

Status: BLOCKED_EXTERNAL
Blocker: Vercel project link not available from current GitHub repo state.

---

## Cycle 2 — Evidence Class Load Cycle

Goal: replace seed 5-row CSV with full 150-class evidence control list.

Actions:
1. Convert reconstructed list into `01_audit-evidence-control-list.csv`.
2. Add JSON mirror `01_audit-evidence-control-list.json`.
3. Update HTML to display count and source grading.

Exit criteria:
- row count >= 150
- all rows include item_id, document_class, purpose, source_system, strength, status

Receipts:
- commit SHA
- row count proof

Status: READY

---

## Cycle 3 — Evidence Binding Cycle

Goal: attach actual evidence locations and hashes.

Actions:
1. Add actual_path for each known evidence file.
2. Add source system and owner.
3. Generate SHA256 where file is available.
4. Mark evidence grade A/B/C/D.

Exit criteria:
- at least Top 25 evidence rows contain actual_path or explicit missing reason
- SHA256 present where file is accessible

Receipts:
- hash register
- evidence manifest commit

Status: READY_AFTER_CYCLE_2

---

## Cycle 4 — Financial Reconciliation Cycle

Goal: connect dollars to evidence and R&D activities.

Actions:
1. Create transaction register.
2. Map GL, bank, invoices, payments, and exclusions.
3. Create related-party/constructive payment notes.
4. Create variance register.

Exit criteria:
- every claimed cost class has transaction mapping state
- unmapped items have variance reason

Receipts:
- transaction CSV
- variance CSV
- reconciliation status summary

Status: READY_AFTER_EVIDENCE_BINDING

---

## Cycle 5 — Labour Allocation Cycle

Goal: defend labour and time claims.

Actions:
1. Load payroll/STP/PAYG/super evidence rows.
2. Create labour allocation register.
3. Link GitHub/calendar/email corroboration.
4. Create timesheet weakness notes where reconstructed.

Exit criteria:
- every labour claim has source payment proof and activity allocation

Receipts:
- labour CSV
- corroboration map

Status: READY_AFTER_EVIDENCE_BINDING

---

## Cycle 6 — R&D Activity Narrative Cycle

Goal: produce activity-level RDTI defence rows.

Actions:
1. Create technical uncertainty register.
2. Create experiment register.
3. Create failure register.
4. Create activity statements.

Exit criteria:
- each R&D activity has uncertainty, hypothesis, experiment, result, learning, evidence links

Receipts:
- activity register
- experiment register
- failure register

Status: READY_AFTER_CYCLE_2

---

## Cycle 7 — Challenge / Defence Cycle

Goal: make the audit attack path explicit before the auditor does.

Actions:
1. Create challenge register.
2. Create defence register.
3. Link every high-risk evidence weakness.
4. Score confidence and remediation.

Exit criteria:
- all C-grade or reconstructed evidence has a defence entry
- all Top 25 gaps have a challenge row

Receipts:
- challenge CSV
- defence CSV

Status: READY_AFTER_CYCLE_2

---

## Cycle 8 — Export Cycle

Goal: create usable packs for accountant, auditor, and internal control.

Actions:
1. Generate accountant view.
2. Generate auditor view.
3. Generate internal working view.
4. Generate manifest and hash register.

Exit criteria:
- export folder exists with views and manifest

Receipts:
- export manifest
- commit SHA

Status: READY_AFTER_CYCLES_3_TO_7

---

## Cycle 9 — Runtime Loop Cycle

Goal: stop manual updating.

Actions:
1. Build ingest script/workflow.
2. Write receipts to audit-war-room/receipts.
3. Render HTML from CSV/JSON.
4. Add Command Centre or MAAT link.

Exit criteria:
- repeatable update command exists
- new evidence can update data and page

Receipts:
- script/workflow commit
- successful test update

Status: READY_AFTER_CYCLE_8

---

## Cycle 10 — Closure Cycle

Goal: declare REAL or bounded PARTIAL honestly.

Actions:
1. Check all gates.
2. Update Reality Ledger state.
3. Close completion issue only if live URL + full rows + evidence binding exist.
4. Otherwise leave open with blocker state.

Exit criteria:
- REAL only with runtime URL and bound evidence
- BLOCKED only with bounded external reason

Receipts:
- closure register update
- issue state update

Status: FINAL
