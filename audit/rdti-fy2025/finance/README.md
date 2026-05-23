# RDTI FY2025 Finance Evidence Factory

Canonical issue: [#1](https://github.com/TML-4PM/t4h-research-hub/issues/1)
Status: PARTIAL (awaiting source binding)
Target: 78-86/100 audit survivability post-source-bind

## Runtime spine

The authoritative event queue and evidence store live in Supabase schema `rdti`:

| Object | What it holds |
|---|---|
| `rdti.queue` | Event-driven queue items across Q0_CRITICAL → Q6_PACKAGE lanes |
| `rdti.evidence` | Extracted evidence rows (every bank line, GL row, invoice, etc.) |
| `rdti.variance_register` | Detected amount/category variances between sources |
| `rdti.v_confidence_heatmap` | Aggregate confidence by classification × source |
| `rdti.v_murder_board` | Open variances + low-confidence evidence |
| `rdti.v_queue_status` | Queue counts by lane/status/priority |

A trigger on `rdti.evidence` auto-fans-out: every insert queues Q3_CLASSIFY (if unclassified) and Q4_ATTACK (if confidence < 60), creating a non-linear runtime where downstream work is queued by upstream signals.

## File-side registers (sync from Supabase as needed)

```
audit/rdti-fy2025/finance/
  README.md                                    # this file
  00_financial-reconciliation-control.md      # existing
  01_financial-variance-register.csv          # ← rdti.variance_register
  02_labour-evidence-register.csv             # founder/director treatment
  03_contractor-evidence-register.csv         # vendor substantiation
  04_mixed-spend-exception-register.csv       # personal/business mix
  05_official-claim-narrative-map.md          # lodged-claim ↔ evidence map
  06_evidence-twin-register.csv               # destroyer challenge pairings
  07_confidence-heatmap.csv                   # ← rdti.v_confidence_heatmap snapshot
  08_murder-board.csv                         # ← rdti.v_murder_board snapshot
  09_chronology-register.csv                  # claim-period timeline
  10_knowledge-generated-register.csv         # R&D knowledge proof per project
```

Files 01, 03, 04, 06, 07, 08, 09, 10 are CSV with header-only initial state and grow as sources bind.
Files 05 and the README are markdown narrative.

## Source binding (Q1_SOURCE)

19 source tasks seeded in `rdti.queue` lane `Q1_SOURCE`. Each represents a Troy-provided artefact (Xero exports, bank CSVs, payroll, contractor invoices, etc.) or an automated extraction (Google Drive scan, Supabase MAAT extract).

Query open sources:
```sql
SELECT queue_id, priority, result_required
FROM rdti.queue
WHERE queue_lane='Q1_SOURCE' AND status='OPEN'
ORDER BY array_position(ARRAY['CRITICAL','HIGH','MEDIUM','LOW'], priority), queue_id;
```

## Q0_CRITICAL blockers (10)

Seeded into the queue. None can sink the claim alone, but unresolved by 3 June 2026 risks delaying the 10 June 2026 ATO review.

```sql
SELECT queue_id, result_required FROM rdti.queue WHERE queue_lane='Q0_CRITICAL' AND status!='DONE';
```
