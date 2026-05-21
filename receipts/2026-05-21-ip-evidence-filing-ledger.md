# IP Evidence & Filing Ledger

Generated: 2026-05-21 Australia/Sydney

## Purpose

This ledger captures the current proof state for IP/RDTI/evidence artefacts found during the deep search cycle. It prevents generated summaries, indexes, and direct artefact files from being treated as the same level of proof.

## Evidence status definitions

| Status | Meaning |
|---|---|
| DIRECT_FILE_FOUND | A standalone source file was directly found. Still may require review. |
| GENERATED_SOURCE_FOUND | Source exists as code/generated document logic, but underlying standalone artefact may not be separately found. |
| INDEXED_ONLY | Artefact appears in index/path/evidence map but direct file not found. |
| SUMMARY_ONLY | Mentioned in summary, claim matrix, paper, or generated document, without direct source proof yet. |
| DIRECT_FILE_NOT_FOUND | Searched by exact terms and no standalone file found yet. |
| BLOCKED_NEEDS_SUPABASE_PULL | Requires live table pull or backend query to validate. |
| DEPLOYMENT_METADATA_FOUND | Found in Vercel/GitHub deployment metadata. |

## Strongest technical evidence found

### RDTI generation scripts README

Repository: `TML-4PM/mcp-command-centre`  
Path: `scripts/rdti/README.md`  
Commit inspected: `e9223565d9dcbcc3a34316f6b6a17d3657096214`

Key facts from README:

- RDTI FY2024-25 substantiation pack exists as generated artefact suite.
- Registration: `PYV4R3VPW`
- Submitted: 20 March 2026
- Deadline: 30 April 2026
- Estimated refund: `$929,504`, calculated as 43.5% × `$2,136,791`
- S3 pack path: `s3://troylatter-sydney-downloads/rdti/fy2425-substantiation-pack/`
- Total docs: 134
- Complete: 133 / 134, or 99%
- Waves covered: W0 to W10
- Generation scripts: 4
- Last generated: 2026-03-23 by Claude Sonnet 4.6 via T4H Autonomous OS bridge

Generation scripts:

- `gen_rdti_docs.js`
- `gen_rdti_docs2.js`
- `gen_rdti_w6_w10.js`
- `gen_rdti_gaps.js`

Declared live data sources:

- `maat_rd_projects`: 13 R&D project records
- `maat_timesheets`: 299 timesheet entries
- `maat_transactions`: 6,038 transactions
- `ip_assets`: 251 IP assets
- `maat_fixed_asset_register`: 4 fixed assets
- `maat_div7a_rates`: Div7A benchmark rates
- `rdti_evidence_register`: 65 evidence items
- `research_publication_register`: 645 publications
- `maat_doc_matrix`: DocMatrix completion tracking

Declared Command Centre queries/pages:

- page `rd`: `rdti_docmatrix_wave_status`, `rdti_docmatrix_s3_registry`, `rdti_docmatrix_missing`
- page `accountant`: `rdti_pack_summary`, `rdti_pack_s3_accountant`

Interpretation:

This is currently the strongest evidence that the RDTI/IP evidence process is not merely document brainstorming. It is a generated document matrix backed by Supabase tables, S3 storage, Command Centre query keys, and generation scripts. It still requires live pulls to verify row counts and S3 artefact existence.

## Artefact classification table

| Artefact / family | Best evidence found | Current classification | Required next proof |
|---|---|---|---|
| RDTI FY2024-25 substantiation pack | `scripts/rdti/README.md` with pack stats, S3 path, wave coverage, scripts and table sources | GENERATED_SOURCE_FOUND | Pull S3 listing and DocMatrix rows. |
| RDTI registration `PYV4R3VPW` | RDTI README | SUMMARY_ONLY / GENERATED_SOURCE_FOUND | Verify against lodgement receipt. |
| 134 generated docs | RDTI README | GENERATED_SOURCE_FOUND | Pull S3 manifest and compare against `maat_doc_matrix`. |
| 133 complete docs | RDTI README | GENERATED_SOURCE_FOUND | Verify `maat_doc_matrix` completion status. |
| `maat_rd_projects` | RDTI README data-source list | BLOCKED_NEEDS_SUPABASE_PULL | Pull table schema and 13 records. |
| `maat_timesheets` | RDTI README data-source list | BLOCKED_NEEDS_SUPABASE_PULL | Pull count and date/project coverage. |
| `maat_transactions` | RDTI README data-source list | BLOCKED_NEEDS_SUPABASE_PULL | Pull count, total, source file, project allocation. |
| `ip_assets` | RDTI README data-source list | BLOCKED_NEEDS_SUPABASE_PULL | Pull count and reconcile 251 vs 241 vs 226 vs 23 claims. |
| `rdti_evidence_register` | RDTI README data-source list | BLOCKED_NEEDS_SUPABASE_PULL | Pull 65 evidence items and evidence types. |
| `research_publication_register` | RDTI README data-source list | BLOCKED_NEEDS_SUPABASE_PULL | Pull 645 publications and classify direct/source/generated. |
| `maat_doc_matrix` | RDTI README | BLOCKED_NEEDS_SUPABASE_PULL | Pull wave completion, missing docs, S3 registry. |
| `W3_IP_Assignment_Deed.docx` | LLM IP audit says direct Drive file found | DIRECT_FILE_FOUND, UNREVIEWED | Open/review direct file and confirm scope/signature status. |
| R04 simulation models | Evidence Index / Experiment Log / generator reference | INDEXED_ONLY + GENERATED_SOURCE_FOUND | Locate actual files/folder or mark missing. |
| R04 82 claims | W10 summary + IP protection + generator reference | SUMMARY_ONLY + GENERATED_SOURCE_FOUND | Find underlying claim ledger. |
| R05 Signal Economy / BRS | Experiment log + generator reference | SUMMARY_ONLY + GENERATED_SOURCE_FOUND | Find algorithm/spec/code and validation data. |
| R05 signal verification protocol spec | Evidence index + generator reference | INDEXED_ONLY + GENERATED_SOURCE_FOUND | Locate standalone protocol file. |
| R10 NEUROPAK packaging standard | Evidence index + generator reference | INDEXED_ONLY + GENERATED_SOURCE_FOUND | Locate standalone packaging-standard artefact. |
| R11 Far Cage | Generator / repo / deployment evidence | GENERATED_SOURCE_FOUND + REPO/DEPLOYMENT-BACKED PARTIAL | Pull repo files and filing/IP docs. |
| R12 RATPAK | Generator / repo / prior Drive evidence | GENERATED_SOURCE_FOUND + REPO-BACKED PARTIAL | Pull architecture/spec docs and evidence files. |
| R13 Artefact Pack | Generator reference | GENERATED_SOURCE_FOUND | Pull pack manifest and artefact files. |
| ConsentX 47-requirement matrix | Summary and generated references | SUMMARY_ONLY / POSSIBLE_LABEL_CONTAMINATION | Locate direct matrix or reconstruct from source. |
| HoloOrg coherence metrics | Summary and generated references | SUMMARY_ONLY / POSSIBLE_LABEL_CONTAMINATION | Locate metrics definition and runtime data. |
| GC-BAT 665k corpus | Summary / website claim / generated references | SUMMARY_ONLY | Locate corpus storage, index, hash, or row counts. |
| GAIN 32 challenges | R&D matrix/log + generator reference | SUMMARY_ONLY + GENERATED_SOURCE_FOUND | Locate challenge set/platform proof. |
| Command Centre security/config debt | Vercel deployment metadata commit messages | DEPLOYMENT_METADATA_FOUND | Audit current environment and remove hardcoded/secrets/wrong ABN. |
| Research Asset Register + Service Catalogue Control Plane | Drive XLSX content | DIRECT_FILE_FOUND / PARTIAL | Parse full workbook and seed canonical registry. |
| Experiment Register Search UI | Drive HTML with 32 experiments | DIRECT_FILE_FOUND / PARTIAL | Extract rows to CSV and evidence-bind claims. |
| Master Asset Matrix duplicates | Drive search results | DIRECT_FILE_FOUND / DUPLICATE_ENTROPY | Build canonical duplicate map and choose current source. |

## Hard truth

The evidence stack now proves that many artefacts were named, indexed, and generated into RDTI/IP documentation. It does not yet prove that every underlying standalone artefact file exists as a separate Drive/GitHub file.

The strongest current proof chain is:

```yaml
proof_chain:
  generated_docs: scripts/rdti README + generation scripts
  data_sources: Supabase table names and counts listed in README
  storage_target: S3 substantiation-pack path
  command_centre: DocMatrix query keys and accountant page query keys
  deployment_receipts: Vercel READY deployments for Command Centre and Research Hub
```

## Required execution to move from PARTIAL to REAL

1. Pull `maat_doc_matrix` rows and compare against 134-doc claim.
2. List S3 path `s3://troylatter-sydney-downloads/rdti/fy2425-substantiation-pack/` and produce manifest.
3. Pull Supabase counts for `maat_rd_projects`, `maat_timesheets`, `maat_transactions`, `ip_assets`, `rdti_evidence_register`, and `research_publication_register`.
4. Open/review direct W3 IP assignment file.
5. Create missing/direct-proof search for R04/R05/R10/R11/R12/R13 folders rather than only text search.
6. Reconcile IP asset count claims: 251, 241, 226, and 23.
7. Audit Command Centre metadata warnings: hardcoded service-role JWT, hardcoded bridge key, wrong ABN, static business array.
8. Attach Bridge/Reality Ledger receipt after live execution.

## Reality Ledger

```yaml
status: PARTIAL
result: IP Evidence & Filing Ledger created from Drive/GitHub/Vercel search and RDTI README proof.
evidence:
  - LLM IP audit document
  - GitHub scripts/rdti README
  - Vercel deployment metadata from Command Centre and Research Hub
  - Drive asset-register and experiment-register findings
remaining_gaps:
  - Supabase live pulls
  - S3 manifest
  - direct file review for W3 IP assignment
  - direct artifact location for several R04/R05/R10/R11/R12/R13 items
  - Bridge receipt
classification: PARTIAL
```
