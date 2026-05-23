---
name: t4h-devils-advocate
version: 0.1.0-skeleton
licence: Apache-2.0
status: PARTIAL
last_updated: 2026-05-24
---

# T4H Devil's Advocate Skill

Adversarial 8-dimension review of any T4H artifact that makes a claim, defends a position, or asks an external party (ATO, regulator, customer, investor) to believe something.

## Activation

**Intent-based**: trigger when an artifact is about to be submitted to an adversarial reader — ATO auditor, hostile reviewer, sceptical buyer, opposing counsel.

**Keyword triggers** (EN): challenge this, devil's advocate, pre-mortem, what would an auditor say, find the weakness, red team this.

## Eight dimensions

| # | Dimension | Probe |
|---|---|---|
| 1 | Thesis | What is the load-bearing claim? Is it actually defensible, or just well-phrased? |
| 2 | Methodology | What method choice would a sceptic attack first? |
| 3 | Evidence | Where is the evidence thinnest? Which citation could be dismissed as cherry-picked? |
| 4 | Scope | What was excluded that should have been included? |
| 5 | Bias | Whose perspective is missing? Who benefits from this framing? |
| 6 | Reproducibility | Could a third party reach the same conclusion from the same inputs? |
| 7 | Ethics | Who could be harmed by adoption / deployment / wide reading? |
| 8 | Economics | Does the claim survive if the underlying economics are stress-tested? |

## Output contract

Each dimension produces zero or more `research.adversarial_finding` rows.

```
adversarial_finding {
  dimension: thesis|methodology|evidence|scope|bias|reproducibility|ethics|economics
  challenge: the strongest counter-argument the artifact must survive
  counter_evidence: jsonb if the challenger has supporting evidence
  acknowledged: boolean — has the author addressed this in revision?
}
```

## Gates

Unlike integrity findings, adversarial findings do NOT automatically block REAL promotion. They REQUIRE acknowledgement:

- Each finding must be either `acknowledged=true` (with a revision pointer or explicit accepted-risk note) OR `resolved` (revised to address)
- Unacknowledged adversarial findings demote artifact to PARTIAL

## Specific T4H use cases

- **RDTI activity narratives**: pre-flight against likely ATO challenge before lodgement
- **ConsentX positioning**: stress-test against "why isn't this just GDPR consent banners" critique
- **Westpac Future Lab proposal**: red-team against "another AI demo" dismissal
- **AI Sweet Spots writeups**: pre-empt peer-review rejection grounds
- **Drug Resilience Atlas**: surface ethical and methodological challenges before publication

## Implementation status

- [ ] Dimension 1-8 prompt cards (D+4)
- [ ] First run against ConsentX positioning draft (D+4)
- [ ] Acknowledgement workflow in `research.adversarial_finding` (D+4)

## Interop

See `../INTEROP.md`. Reviews broadcast to Telegram 6972032328 via canonical_changes.
