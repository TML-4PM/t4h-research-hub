# RDTI FY2025 Finance Evidence Factory — Session Notes

Date: 2026-05-16
Repo: TML-4PM/t4h-research-hub
Stream: RDTI FY2025 / Finance Reconciliation / Evidence Factory
Status: PARTIAL

## Executive summary
This session moved the RDTI finance stream from conversational planning into a canonical evidence-factory operating model inside the correct research hub.

The user corrected the canonical location from the temporary `TML-4PM/holo-org` coordination surface to `TML-4PM/t4h-research-hub`. The finance control file and canonical intake queue now live in the research hub.

The major architecture shift was from a static document library to an event-driven evidence factory:

Raw source -> extraction -> classification -> linkage -> challenge scoring -> chronology -> package generation.

Documents are outputs. Evidence objects are the asset.

## Key decisions locked

1. Use `TML-4PM/t4h-research-hub` as the canonical repo for research/audit/evidence-factory material.
2. Treat earlier `TML-4PM/holo-org` work as temporary coordination traces only.
3. Finance stream operates as an evidence factory, not a document library.
4. The finance stream must not wait silently. Missing access becomes NEED_SOURCE, NEED_SCRIPT, NEED_BRIDGE, or BLOCKED.
5. Cycles are event-driven and overlapping, not sequential.
6. Halfway outputs are valid if they create new evidence value.
7. Destroyer/red-team challenge starts from day one.
8. Confidence heatmaps and murder-board items drive effort, not folder counts.
9. Context/vignettes may explain new-world operating model, but they do not replace financial evidence.
10. No AI invention, no silent bridging, no pretending incomplete evidence is REAL.
11. Notes and session state must be committed to GitHub before close where possible.
12. Future sweeper/notes systems should capture full session state and use this note as anchor if available.

## Canonical audit-facing spine
Use the official lodged structure as the audit-facing spine unless source documents prove otherwise:

- Registration: PYV4R3VPW
- Project: AI-Orchestrated Multi-Agent Systems for Human-AI Performance Optimisation
- Project ref: PTPKCR0JN
- Core activity: Multi-Agent AI Orchestration
- Activity ref: PKK0VJBBH
- Work package map: MAO-001 to MAO-008

Internal streams such as AI Sweet Spots, MCP Bridge, Neural Ennead, HoloOrg, ConsentX, WorkFamilyAI, AHC, and related streams are evidence/work-package streams only unless official registration materials say otherwise.

## Current score
Audit survivability: 38/100 PARTIAL.

Reason: strong likely evidence base and strong operating narrative, but source-bound financial spine is not yet proven.

Target after source binding and register completion: 78-86/100.

Target after repeated red-team/accountant review: 82-90/100.

Not REAL until exports, invoices, payroll/director records, claim versions, and evidence chains are bound.

## Critical risk map

| Area | Risk |
|---|---:|
| Founder/director labour treatment | CRITICAL |
| Official claim amount/category reconciliation | CRITICAL |
| Source-of-truth accounting spine | CRITICAL |
| Research vs ordinary software/build boundary | CRITICAL |
| Mixed personal/business/entity spend | CRITICAL |
| Adviser/accountant version mismatch | HIGH |
| Contractor/vendor substantiation | HIGH |
| Cloud/SaaS/AI allocation | HIGH |
| One-person / multi-company operating model translation | HIGH |
| Knowledge-generated proof | HIGH |

## Evidence factory roles

| Role | Function |
|---|---|
| Hunters | find raw source evidence from Drive, email, chat exports, Supabase, bank files, repos, cloud systems |
| Reconstructors | rebuild missing chains: bank to project, hours to activity, meeting to outcome, invoice to experiment |
| Destroyers | attack every assumption from examiner/accountant perspective |
| Defenders | build reasoned response and source-bound narrative |
| Archivists | naming, hashes, versions, status, ownership, canonical links |
| Command | asks what scares us, what changed, what is still not proven |

## Event-driven queue model

| Event | Auto-queue |
|---|---|
| New bank CSV arrives | extract transactions; classify vendors; create variance rows; update mixed spend queue; create chronology candidates |
| New Xero GL arrives | create accounting spine; compare to bank; map accounts; flag journals; update variance register |
| New payroll/STP file arrives | update labour evidence register; flag director/associate risk; compare timesheets; update murder board |
| New invoice found | create evidence object; map vendor; create payment-proof request; update contractor/SaaS/cloud register |
| New Google Drive scan row arrives | create evidence object; classify likely register; queue extraction; queue challenge twin |
| New Supabase/MAAT extract arrives | map table schema; row counts; totals; duplicate checks; compare against lodged figures |
| New conflicting amount found | create Financial Variance Register row; queue Destroyer challenge; freeze claim-use until explained |
| Confidence <60 | update Confidence Heatmap and Murder Board |
| Confidence <40 | escalate CRITICAL blocker |

## Active canonical assets created

- `audit/rdti-fy2025/finance/00_financial-reconciliation-control.md`
- Canonical issue: `RDTI FY2025 Finance Evidence Factory — canonical intake queue`

## Prior temporary assets in holo-org
These were created before canonical repo correction and should be treated as coordination traces only:

- `audit/rdti-fy2025/finance/00_financial-reconciliation-control.md`
- `audit/rdti-fy2025/finance/01_scan-and-access-spec.md`
- `audit/rdti-fy2025/finance/02_continuous-cycle-runtime.md`
- issue `RDTI FY2025 Finance Evidence Factory — event-driven command queue`

## Products / broader relevance noted
The same pattern is relevant to internal product development: human-agent translation, institution-reality translation, event-driven work queues, evidence intelligence, Doolittle-style machine/human communication compression, MAAT/factors, and research-operating models.

Audit use remains conservative: these ideas explain context and operating reality but do not replace source-bound financial evidence.

## Required source pack before next serious reconciliation cycle

### Priority 0 — claim/accounting spine
- lodged RDTI application/export and financial category totals
- accountant/adviser workpapers or claim versions
- Xero General Ledger FY2024-25
- Xero P&L FY2024-25
- Xero Balance Sheet FY2024-25
- Xero Trial Balance FY2024-25
- Xero Chart of Accounts
- Xero Journal Report

### Priority 1 — money truth
- business bank CSVs FY2024-25
- business card CSVs FY2024-25
- personal card/account CSVs if used for business/R&D
- reimbursement records if personal funds were used

### Priority 2 — labour truth
- payroll/STP summary FY2024-25
- super payment records
- director/founder labour basis
- employment/director agreements if available
- timesheet source and reconstruction labels

### Priority 3 — vendor/contractor/cloud
- contractor/vendor invoice set
- statements of work if available
- AWS invoices/usage
- Supabase invoices/usage
- Vercel invoices/usage
- OpenAI/Anthropic/Claude/Lovable/other AI tool invoices

### Priority 4 — automation extracts
- Google Drive scan CSV/JSONL for T4H Research Hub and related folders
- Supabase MAAT/factors/evidence table extraction
- Gmail search/export for accountant, invoices, RDTI, MAAT, evidence packs
- GitHub scan of relevant repos for RDTI/MAAT/research references

## Registers to create/populate next

- `01_financial-variance-register.csv`
- `02_labour-evidence-register.csv`
- `03_contractor-evidence-register.csv`
- `04_mixed-spend-exception-register.csv`
- `05_official-claim-narrative-map.md`
- `06_evidence-twin-register.csv`
- `07_confidence-heatmap.csv`
- `08_murder-board.csv`
- `09_chronology-register.csv`
- `10_knowledge-generated-register.csv`

## Current blockers

| Blocker | Type | Required action |
|---|---|---|
| Xero/accounting exports | NEED_SOURCE | user/accountant export |
| Bank/card CSVs | NEED_SOURCE | user/accountant export |
| Payroll/STP/super | NEED_SOURCE | user/accountant export |
| Claim/adviser version history | NEED_SOURCE | user/adviser/accountant export |
| Google Drive extraction | NEED_SCRIPT | Apps Script scan/export |
| Supabase MAAT/factors access | NEED_BRIDGE | Bridge extraction |
| Gmail invoice/RDTI search | NEED_TOOL_OR_EXPORT | connector/export path |

## Sweeper note
A future sweeper should collect fuller chat/session context and append or cross-link it here rather than relying only on this condensed human-authored note.

Preferred sweeper output:

- raw session transcript pointer if available
- extracted decisions
- extracted blockers
- extracted claims/figures
- extracted source requests
- extracted evidence references
- updated murder board
- updated queue issue comment

## Session close checkpoint

```yaml
status: PARTIAL
cycle_id: SESSION-NOTES-20260516
result: session notes committed to canonical research hub
evidence:
  - repo: TML-4PM/t4h-research-hub
  - path: audit/rdti-fy2025/session-notes/20260516_finance-evidence-factory-session-notes.md
gaps:
  - source exports not yet received
  - Apps Script scan not yet active
  - Supabase/MAAT extraction not yet received
next_actions:
  - receive source pack
  - ingest documents as events
  - populate first finance registers
  - post update comments to canonical issue
pressure_flags:
  - money/tax exposure
  - founder labour
  - mixed spend
  - claim drift
  - research/build boundary
score: 0.89
```
