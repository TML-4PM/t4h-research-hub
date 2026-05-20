# 08_BUSINESS_GATES

Promotion gates that sit between technical success and business success.

> Nothing becomes REAL merely because it executes. It must also prove customer value.

## Files

| File | Purpose |
|---|---|
| `CUSTOMER_CENTRICITY_SCORECARD.md` | Human-readable rule + dimensions + thresholds |
| `customer_gate.json` | Machine-readable scores + assessment + deadlines |
| `widget.html` | Standalone Command Centre widget bound to `customer_gate.json` |
| `score.js` | Deterministic weighted scorer; CLI selftest exits non-zero if below PARTIAL |
| `RECEIPT.json` | Latest run receipt — commit, score, state, binds_to, run URL |
| `../.github/workflows/customer-gate.yml` | CI: recompute on push + daily, emit receipt, self-commit |

## Execution Chain

```
push to 08_BUSINESS_GATES/**
   ↓
GitHub Action: customer-gate
   ↓
node score.js  (recompute weighted_score + state)
   ↓
emit RECEIPT.json
   ↓
self-commit [skip ci]
   ↓
widget.html fetches customer_gate.json (no cache)
   ↓
Command Centre displays score + state + countdown
```

## Promotion Rule

Every initiative promoted through this repo must carry a `customer_gate` block in its receipt:

```json
{
  "customer_gate": {
    "score": 0.0,
    "state": "PARTIAL",
    "customer": "",
    "pain": "",
    "first_value": "",
    "payer": "",
    "economic_path": "",
    "proof": [],
    "gaps": [],
    "next_action": ""
  }
}
```

## State Thresholds

| Score | State |
|---:|---|
| ≥ 0.90 | REAL |
| 0.70–0.89 | PARTIAL |
| 0.40–0.69 | WEAK |
| < 0.40 | BLOCKED |

Current: see `customer_gate.json` (live) or `widget.html` (rendered).

## Path to 1.0

The gate cannot reach 1.0 from code alone. It requires:

1. A real user event hits the gate.
2. A conversion or willingness-to-pay signal is recorded.
3. A retention proof exists.
4. Infrastructure language stays out of customer surfaces.

Until then: PARTIAL is honest.
