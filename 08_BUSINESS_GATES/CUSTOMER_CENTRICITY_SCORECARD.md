# Customer Centricity Business Gate

## Purpose

This gate prevents the research hub, ATO investigation command centre, and related execution systems from becoming technically impressive but commercially weak.

Code quality is assumed. This gate tests whether the business is good, whether the customer value is clear, and whether the system can prove that customer value with evidence.

## Gate Rule

A system cannot be marked REAL on execution quality alone.

To reach 1.0, each initiative must prove:

1. A named customer or stakeholder suffers a real pain.
2. The pain is expressed in the customer's language, not internal architecture language.
3. The first value moment is obvious within 30 seconds.
4. The 30-day value path is measurable.
5. The payer is named.
6. The proof object exists or is explicitly missing.
7. Revenue, risk reduction, compliance defence, or operational savings are linked.
8. Internal infrastructure names do not leak into customer-facing promises unless the customer already understands and values them.

## Scoring Model

| Dimension | Weight | Test |
|---|---:|---|
| Pain clarity | 0.15 | Can the target user describe the pain without explanation? |
| Customer language | 0.15 | Does the page speak in outcome language rather than system language? |
| First value | 0.15 | Can a user understand the benefit within 30 seconds? |
| Proof | 0.15 | Is there evidence, receipt, case material, or artefact binding? |
| Commercial path | 0.15 | Is the payer and payment trigger clear? |
| Retention path | 0.10 | Is there a repeat-use or ongoing-value reason? |
| Trust/risk | 0.10 | Are risks, consent, audit, and governance handled? |
| Infrastructure discipline | 0.05 | Are Bridge, Ledger, Synal, etc. hidden unless needed? |

Maximum score: 1.00.

## Classification

| Score | State | Meaning |
|---:|---|---|
| 0.90-1.00 | REAL | Customer value, business path, proof, and runtime evidence align. |
| 0.70-0.89 | PARTIAL | Good idea or system, but customer proof or commercial clarity is incomplete. |
| 0.40-0.69 | WEAK | Mostly internal language, unclear buyer, or weak first-value path. |
| <0.40 | BLOCKED | Do not promote. Rework customer/payer/problem definition first. |

## Customer-First Rewrite Pattern

Replace this:

> Bridge executes autonomous evidence-led runtime orchestration.

With this:

> Your audit evidence is found, checked, packaged, and tracked before the deadline.

Replace this:

> Reality Ledger classifies artefacts as REAL, PARTIAL, or BLOCKED.

With this:

> Every claim shows what proof exists, what is missing, and what still needs fixing.

Replace this:

> Command Centre telemetry provides operational truth.

With this:

> You can see what is ready, what is risky, and what must happen next.

## ATO Investigation 2024/2025 Application

Customer-facing promise:

> Help Troy defend the 2024/2025 ATO/RDTI position by turning scattered finance, payroll, technical, GitHub, cloud, chat, and document evidence into a challenge-ready evidence operating system.

Primary customer:

- Troy / Tech 4 Humanity leadership
- Accountant or R&D adviser
- Future auditor-facing evidence pack consumer

Pain:

- Evidence exists but is scattered.
- Evidence without indexing is weak under audit pressure.
- Technical work, labour, transactions, and contemporaneous proof must be connected.
- Chat and reconstructed memory are not enough unless corroborated by source records.

First value in 30 seconds:

- Show investigation status.
- Show evidence count by grade.
- Show missing critical artefacts.
- Show top audit challenges and defences.
- Show what must happen before deadline.

30-day value:

- Evidence graph populated.
- Transactions bound to projects and evidence.
- Labour allocations reconciled.
- GitHub, CloudWatch, MAAT, bank, payroll, Drive, and chat extracts indexed.
- Challenge register maintained.
- Adviser-ready pack exported.

Payer / economic path:

- Direct value: audit defence, claim protection, time saved, adviser cost reduction, reduced penalty exposure.
- Reusable value: packaged ATO/RDTI evidence operating system for other founders and SMEs.
- Commercial path: fixed-fee evidence reconstruction pack, monthly audit-readiness subscription, adviser partner licence.

## 1.0 Gate Checklist

- [ ] Customer pain written in plain language.
- [ ] First-value screen/page exists.
- [ ] Customer-facing promise separated from internal architecture.
- [ ] Payer named.
- [ ] Economic value path named.
- [ ] Evidence object exists.
- [ ] Missing proof is shown openly.
- [ ] Trust, consent, and audit risks are stated.
- [ ] Repeat-use pathway exists.
- [ ] Command Centre section shows customer outcome, not only system status.

## Runtime Enforcement

Any initiative promoted through this repo must include a `customer_gate` object in its receipt:

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

## Current Assessment

Status: PARTIAL

Result: Technical execution spine is strong, but business/customer proof must be applied as a mandatory promotion gate.

Evidence:

- Repository already tracks ATO/RDTI evidence structure, audit pack, gaps, execution, and receipts.
- GitHub authority confirmed with admin and push access.
- No prior customer/business scorecard was found in repository search.

Gaps:

- No live conversion evidence yet.
- No customer interview evidence yet.
- No pricing experiment evidence yet.
- No reusable customer-facing package page yet.
- No Command Centre widget bound to this scorecard yet.

Next action:

Add the customer gate to the ATO Investigation Command Centre view and require every future promoted artefact to carry a customer_gate score.

Elevation: High

Pressure flags:

- infrastructure-leakage
- inside-out-language
- weak-commercial-proof
- customer-telemetry-gap

Score: 0.86 until attached to live Command Centre and evidence ledger.
