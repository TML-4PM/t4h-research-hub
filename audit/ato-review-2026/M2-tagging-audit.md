# M2 — BAS Tagging Audit (W1 / G3 / G11)

- **Milestone:** M2 (cluster ato-review-2026)
- **Run:** 2026-05-17 by claude-opus-4-7
- **Scope:** public.maat_transactions FY24-25 (2024-07-01 .. 2025-06-30)

## Coverage result — PASS

| Check | Value |
|-------|-------|
| FY24-25 rows | 2,522 |
| Rows with BAS label | 2,522 (100%) |
| GST-bearing rows missing BAS label | **0** |
| Distinct labels | W1, G3, G11, G13, G14 (all valid) |

## Label breakdown

| Label | Rows | Total amount | Total GST |
|-------|------|--------------|-----------|
| G3 (GST-free sales) | 1,936 | $1,200,613.11 | $0.00 |
| G11 (non-cap purchases) | 179 | $280,357.29 | $27,882.69 |
| W1 (wages) | 167 | $296,903.13 | $22,634.08 |
| G14 (GST-free purchases) | 238 | -$195,162.32 | $0.00 |
| G13 (input-taxed) | 2 | $2,138.45 | $0.00 |

## Data-quality flags for Troy review (not blocking M2 — coverage is complete)

1. **G3 volume**: 1,936 rows / $1.2M tagged GST-free sales. Confirm this is correct vs G1 (total sales). High row count for GST-free.
2. **W1 GST**: W1 (wages) shows $22,634 GST — wages should not carry GST. Likely mixed-label rows needing reclass before lodgement (figures-lock stage M3).

## Conclusion

Tagging **coverage** is complete and audit-clean: every GST-bearing transaction is labelled. The two flags above are figure-accuracy items resolved at M3 (figures lock), not coverage gaps. M2 receipt = this commit SHA.
