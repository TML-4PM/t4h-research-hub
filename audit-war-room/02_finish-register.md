# Audit War Room — Finish Register

Status: PARTIAL
Last updated: 2026-05-18

## Definition of finished

The Audit War Room is finished only when it is live, versioned, evidence-linked, exportable, and usable by Troy, accountant/adviser, and auditor without relying on chat history.

## Current receipts

- HTML seed: c699f20ec6b51ec065cdc661cfe4752a963c74a0
- Evidence CSV seed: d664e317b8af17520d638f67c469f51ae8b43d8b
- Vercel routing: 48e95d35b59630dbb1522ef8d4e5b627b1683f72
- Hardened HTML surface: 93f5d234f0c4ee8e142f997c5df6c41c59c7e874

## Finish gates

### Gate 1 — Live deployment
Status: BLOCKED

Needs:
- Link GitHub repo `TML-4PM/t4h-research-hub` to Vercel project `t4h-research-hub`.
- Confirm production URL.
- Fetch deployed page successfully.
- Record deployment ID, URL, timestamp, and build logs.

Evidence required:
- Vercel deployment URL
- Deployment status = READY
- Runtime fetch of `/` and `/audit-war-room`

### Gate 2 — Evidence schema
Status: NOT STARTED

Needs:
- Supabase tables or CSV-compatible schemas for:
  - audit_evidence_items
  - audit_documents
  - audit_transactions
  - audit_labour
  - audit_chronology
  - audit_challenges
  - audit_defences
  - audit_hashes
  - audit_receipts

Evidence required:
- SQL migration file
- Table/view names
- Seed rows

### Gate 3 — Full 150-class load
Status: PARTIAL

Needs:
- Convert reconstructed 150 document classes into machine-readable CSV/JSON.
- Add columns: item_id, document_class, purpose, source_system, strength, owner, status, actual_path, hash, project_link, transaction_link, labour_link, challenge_link, defence_link.
- Preserve A/B/C strength grading.

Evidence required:
- Full CSV/JSON committed
- Row count >= 150

### Gate 4 — Actual evidence binding
Status: NOT STARTED

Needs:
- Attach real document paths from Drive/GitHub/Supabase/AWS/MAAT/accounting exports.
- Generate SHA256 for each attached file.
- Separate source-generated evidence from reconstructed evidence.

Evidence required:
- File path
- Source system
- Date range
- SHA256
- Evidence grade

### Gate 5 — Financial reconciliation
Status: NOT STARTED

Needs:
- GL -> bank -> invoices -> payments -> R&D activities.
- Labour: payroll/STP/PAYG/super -> project allocation -> activity.
- Related-party/constructive payment register.

Evidence required:
- Reconciliation workbook/export
- Variance register
- Exclusion schedule

### Gate 6 — Research activity narrative
Status: NOT STARTED

Needs:
- R&D activity statement per activity.
- Core activity eligibility memo.
- Supporting activity memo.
- Technical uncertainty register.
- Experiment/failure register.

Evidence required:
- Activity statements
- Hypothesis/test/result rows
- Failure evidence

### Gate 7 — Challenge and defence layer
Status: NOT STARTED

Needs:
- Challenge register for likely ATO/accountant attacks.
- Defence register mapped to evidence rows.
- Confidence score per defence.
- Weakness and remediation column.

Evidence required:
- challenge_id
- linked_evidence_id
- defence_text
- confidence

### Gate 8 — Export pack
Status: NOT STARTED

Needs:
- Accountant view.
- Auditor view.
- Internal working view.
- Download/export of current evidence pack.

Evidence required:
- Export files or generated route
- Manifest
- Hash register

### Gate 9 — Runtime update loop
Status: NOT STARTED

Needs:
- Update process so new evidence writes to CSV/Supabase then renders to HTML.
- Receipts written back to audit-war-room/receipts.
- Command Centre or MAAT link.

Evidence required:
- Update script/workflow
- Receipt log
- Repeatable run instructions

## Minimum next chain

1. Link/deploy to Vercel.
2. Commit full 150-row CSV.
3. Add schema/migration draft.
4. Add challenge/defence seed.
5. Add evidence ingestion manifest.
6. Record Vercel URL in this register.

## Reality state

PARTIAL until Gate 1 and Gate 3 pass.
REAL only after live URL + full 150-row control list + evidence binding begins.
