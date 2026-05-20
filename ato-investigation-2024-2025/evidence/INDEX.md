# Evidence Index — ATO Investigation 2024/2025

**Rule:** No claim in this section is REAL unless it links to a row in this index, and that row links to typed evidence (commit, URL, receipt, runtime hash, API response, database result, or correspondence file ID).

## Seed rows (uploaded base files — re-link required)

| ev_id | class | title | canonical_source | source_ref | period | evidence_status | confidence | last_verified_utc |
|-------|-------|-------|------------------|------------|--------|-----------------|------------|-------------------|
| ev-001 | ato_correspondence | Statement of Issues | Drive | TBD-fileid | FY2425 | REAL | 1.00 | pending |
| ev-002 | ato_correspondence | Notice of Examination | Drive | TBD-fileid | FY2425 | REAL | 1.00 | pending |
| ev-003 | rdti_register | T4H_RDTI_Action_Register_FY2425 | Drive | TBD-fileid | FY2425 | REAL | 1.00 | pending |
| ev-004 | asset_register | research_assets - May 2026 | Drive | TBD-fileid | rolling | REAL | 1.00 | pending |
| ev-005 | infrastructure_evidence | T4H Supabase schema | Drive | TBD-fileid | snapshot | PARTIAL | 0.80 | pending |
| ev-006 | commercial_evidence | products and prices (1) | Drive | TBD-fileid | rolling | REAL | 1.00 | pending |
| ev-007 | governance_evidence | HOUSE RULES ENGINE | Drive | TBD-fileid | rolling | REAL | 1.00 | pending |
| ev-008 | portfolio_evidence | T4H_Portfolio_Roadmap_Current_Next_Status | Drive | TBD-fileid | rolling | REAL | 1.00 | pending |
| ev-009 | study_index | Study Regstery - Locations of files | Drive | TBD-fileid | rolling | PARTIAL | 0.85 | pending |

## Required for closure

Each row above must be promoted from `pending` to a verified `last_verified_utc` by either:
- Drive file ID resolution + `read_file_content` evidence call
- Supabase row reference in `audit.log` or relevant schema table
- GitHub commit SHA where the artefact lives in repo

## Telemetry hook

When a row is verified, write to `audit.log`:
```
action = "ato_investigation.evidence_verified"
payload = { ev_id, source_ref, confidence, verified_by_runtime }
```
