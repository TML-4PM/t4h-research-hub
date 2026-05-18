# M1 — Bank Reconciliation Report (ANZ / Amex / CBA)

- **Milestone:** M1 (cluster ato-review-2026)
- **Run:** 2026-05-17 by claude-opus-4-7
- **Method:** SHA256 fingerprint = sha256(account_id | posted_at | amount | norm(description))
- **Scope:** public.maat_transactions, posted 2024-07-01 .. 2026-06-30

## Result

| Metric | Value |
|--------|-------|
| In-scope rows | 3,740 |
| Distinct fingerprints | 3,739 |
| Duplicate pairs | 1 |
| Rows archived | 0 (archive-never-delete + judged non-dup) |

## Duplicate adjudication

Pair `12017fe2-5fb8-4e0e-ad04-e0f11c102777` / `30c11cd1-ce49-4e9a-ab67-58b9b87c1a8d`:
- Both 2026-01-05, -$1,000.00, CBA Home Loan 880738563
- Descriptions differ: "Repayment NetBank" vs "Repayment NetBank #2"
- **Judgement:** genuine second same-day principal repayment, NOT an ingest duplicate. The "#2" marker indicates a distinct manual payment.
- **BAS/GST impact:** none — loan principal, no GST, no BAS label.
- **Action:** retained both; flagged for Troy confirmation. Zero effect on FY24-25 or FY25-26 BAS figures.

## Conclusion

Transaction set is reconciliation-clean for BAS purposes. No ingest duplicates affecting GST/BAS. M1 receipt = this document's commit SHA.
