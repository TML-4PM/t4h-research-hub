# Receipts

All execution receipts are stored here.

## Receipt Chain

| receipt_id | cycle | status | commit_sha | date |
|---|---|---|---|---|
| RCP-001 | Cycle 1 — Canonical repo correction | REAL | (see commit) | 2026-05-19 |

## Receipt Schema

```json
{
  "receipt_id": "string",
  "cycle_id": "string",
  "status": "REAL|PARTIAL|BLOCKED",
  "result": "string",
  "evidence": [{"type": "string", "value": "string", "uri": "string"}],
  "gaps": ["string"],
  "next_actions": ["string"],
  "score": 0.0,
  "committed_at": "iso8601"
}
```

## How to Add a Receipt
1. Write receipt JSON to this folder: `RCP-NNN.json`
2. Update the table above
3. Link receipt to the GitHub issue it closes
