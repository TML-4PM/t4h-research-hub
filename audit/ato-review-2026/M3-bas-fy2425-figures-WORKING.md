# M3 — BAS FY24-25 Figures (WORKING — NOT LOCKED)

- **Milestone:** M3 (cluster ato-review-2026) — **status: BLOCKED**
- **Run:** 2026-05-17 by claude-opus-4-7
- **Source:** public.v_bas_quarterly_summary WHERE fy_start=2024

## Computed quarterly figures

| Qtr | G3 GST-free sales | G11 net | 1B GST credit | W1 wages | W1 "GST" col |
|-----|-------------------|---------|---------------|----------|--------------|
| Q1 | 268,083.40 | 78,712.09 | 7,296.81 | 53,944.67 | 3,543.60 |
| Q2 | 396,692.14 | 63,779.86 | 5,894.15 | 75,114.67 | 5,468.17 |
| Q3 | 217,024.96 | 70,659.74 | 7,250.24 | 83,971.63 | 6,047.29 |
| Q4 | 318,812.61 | 67,205.60 | 7,441.49 | 83,872.16 | 7,575.02 |
| **FY** | **1,200,613.11** | **280,357.29** | **27,882.69** | **296,903.13** | **22,634.08** |

## BLOCKER — figures do not reconcile

| Candidate FY24-25 refund | Basis |
|--------------------------|-------|
| $27,882.69 | Pure 1B GST credit, no 1A (all sales G3 GST-free) |
| ~$5,248.61 | 1B credit minus W1-column amount, if that column is PAYG-W payable |
| $22,797.00 | Figure in supervisor_deadlines / memory — basis unknown |

**None of the three reconcile.** Root cause = unresolved W1 classification:
- W1 (wages) carries $22,634.08 in a GST column. Wages do not attract GST.
- If that column is actually **PAYG withholding (W2)**, it is a *payable* that nets against the 1B credit → net refund collapses to ~$5,249.
- If it is a tagging artefact (GST wrongly populated on W1 rows), it must be zeroed before lodgement → refund ≈ $27,883.
- Neither yields $22,797. The $22,797 in the register has no derivable basis from current data.

## Required adjudication (accountant — Hales Redden)

1. Confirm W1 GST-column meaning: PAYG-W payable, or tagging error?
2. Confirm correct FY24-25 net BAS position and the origin of the $22,797 figure.
3. Confirm G3 $1.2M GST-free sales classification (vs G1 total sales).

M3 cannot be LOCKED until 1–2 resolved. Downstream M4 (evidence pack) and M5 (lodgement) are dependency-blocked. This is a financial-authority / regulatory-submission boundary — correctly escalated, not auto-resolved.
