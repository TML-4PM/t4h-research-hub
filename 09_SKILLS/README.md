# 09_SKILLS — Research Skills Capability Layer

Clean-room reimplementation of pattern library inspired by `Imbad0202/academic-research-skills` (CC-BY-NC 4.0), rewritten under **Apache-2.0** for T4H commercial use.

This directory holds the **capability layer** that serves the evidence factory in `01_PLANS/` through `08_BUSINESS_GATES/`. Skills here are programmatic agents that produce or verify content for the ATO/RDTI evidence chain.

## Why this exists

The ATO review (10 Jun 2026) and the FY25-26 RDTI lodgement (30 Apr 2027) both require defensible, peer-review-quality narrative evidence. Hand-writing this at the volume T4H needs is not viable. A skills layer encoding integrity verification + adversarial review patterns brings publication-grade rigour to evidence production at machine speed.

## Structure

| Path | Purpose |
|---|---|
| `FORK_PLAN.md` | 7-day critical path to operational state |
| `PROVENANCE.md` | Clean-room attribution, customer_gate block |
| `LICENSING.md` | Apache-2.0 rationale + CC-BY-NC divergence |
| `INTEROP.md` | Bridge / reality_ledger / cap_secrets wiring |
| `t4h-integrity-verify/` | Phase A-E reference + claim verification |
| `t4h-devils-advocate/` | 8-dimension adversarial review |
| `schemas/` | Atomic DDL for research.* tables |

## Status

**PARTIAL** — scaffold committed D+0 (2026-05-24). Customer gate block present in PROVENANCE.md but not yet validated against payer evidence. Promotion to REAL requires:

1. First end-to-end Phase A run against Westpac CV references (D+2)
2. Reality ledger entry with top-level evidence key per TRAPS-A #6
3. Customer gate validation: "Does this skill demonstrably reduce ATO/RDTI rejection risk on a real artifact?"

## Cross-references

- Promotion rule: [`08_BUSINESS_GATES/README.md`](../08_BUSINESS_GATES/README.md)
- Evidence operating system: [`03_EVIDENCE/`](../03_EVIDENCE/)
- Audit command centre: [`04_AUDIT/COMMAND_CENTRE.html`](../04_AUDIT/COMMAND_CENTRE.html)
