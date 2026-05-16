# ATO Review Prep Schedule

- **Locked:** 2026-05-17 by claude-opus-4-7
- **ATO review:** Wed 10 Jun 2026
- **Internal completion target:** Wed 3 Jun 2026 (T-7 buffer)
- **Cluster:** `ato-review-2026` (P0)
- **Canonical change:** t4h_canonical_changes #3855
- **Slip-watch cron:** jobid 325 (daily 08:00 AEST)

## Critical path

| # | Milestone | Due | Receipt |
|---|-----------|-----|---------|
| M1 | Bank recon ANZ/Amex/CBA (SHA256 dedup, 6,070 txns) | 18 May | recon_report |
| M2 | MAAT W1/G3/G11 tagging audit | 19 May | — |
| M3 | BAS FY24-25 figures locked | 20 May | — |
| M4 | BAS FY24-25 reconciliation evidence pack | 21 May | — |
| M5 | **BAS FY24-25 LODGED — refund $22,797** | 22 May | ATO ARN |
| M6 | BAS Q1 FY25-26 LODGED (Jul–Sep 25) | 25 May | ATO ARN |
| M7 | BAS Q2 + Q3 FY25-26 LODGED (Q3 statutory) | 26 May | ATO ARN x2 |
| M8 | FY25-26 ARNs + payment refs captured | 27 May | — |
| M9 | Cross-quarter GST control reconciliation | 28 May | — |
| M10 | BAS portfolio sealed | 29 May | — |
| M11 | RDTI evidence register snapshot | 1 Jun | — |
| M12 | Div7A FY24-25 position paper + MYR $72,299 plan | 2 Jun | — |
| M13 | **Evidence pack assembled / SEAL — internal complete** | 3 Jun | seal_hash |
| M14 | **ATO REVIEW** | 10 Jun | — |

## Buffer window

4–9 Jun: accountant review (Gordon McKirdy / Andrew Douglas, Hales Redden) + ATO query rehearsal + final binder.

## Risks

- Q3 FY25-26 statutory date is 26 May — any Week 1 slip compresses Week 2. Zero float 18–26 May.
- Div7A MYR $72,299 due 30 Jun 2026 (outside window, must be in pack).
- MAAT ingest = CSV (BASIQ CFN on hold) — reconciliation is manual.

## Canonical state

- `t4h_canonical_changes` #3855 — DECISION, Telegram broadcast, auto-ledger
- `reality_ledger` x14 milestone rows, status PARTIAL, cluster `ato-review-2026`
- `core.cluster_registry` — `ato-review-2026` P0
- `supervisor_deadlines` x15 (14 milestones + `bas-fy2425-unlodged` $22,797 obligation)
- `maat_gap_tasks` x14 — `ATO-REV-01..14`
- `fn_ato_review_deadline_watch()` + cron jobid 325 (daily 08:00 AEST; slip -> PARTIAL->BLOCKED + Telegram BLOCKER)
- `arch_wave_validation` — `maat.ato_review_2026` wave=6/8
- Bridge audit evt `bdb65e4e-a7dd-4832-bbe8-929530ad4e00`, evidence hash `7cc28db60ea55a68...`

## Lifecycle rule

Each milestone stays PARTIAL until its receipt lands; receipt flips it to REAL. Any milestone past due without a receipt is auto-reclassified BLOCKED by the daily cron and broadcast to Telegram. Cluster closes when all 14 are REAL by 2026-06-03.
