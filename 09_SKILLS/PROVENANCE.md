# Provenance & Clean-Room Methodology

## Inspiration source

Design patterns in this directory were inspired by reading the public SKILL.md specification files in `Imbad0202/academic-research-skills` (CC-BY-NC 4.0, author: Cheng-I Wu, 吳政宜). No code, prose, prompts, or templates have been copied from that repository into this one.

## Clean-room methodology

1. **Specification reading only**: SKILL.md files were read as architectural reference, not source material.
2. **No copy-paste**: Every prompt, agent definition, schema, and template in `09_SKILLS/` was written fresh against T4H operational requirements (RDTI, ATO, Wave10 spine).
3. **Independent expression**: Pattern names where adopted (e.g., "Phase A reference audit", "devil's advocate") describe well-understood concepts in academic peer-review literature. Implementation is original.
4. **Schema divergence**: T4H schema is bound to `reality_ledger`, `cc.graph_edges`, and `t4h_business_registry` — surfaces that do not exist in the upstream repo.
5. **Output divergence**: Upstream targets APA 7.0 academic papers. T4H targets RDTI activity narratives and ATO evidence packs. Different formatting, different governance, different consumers.

## Courtesy attribution (not legally required)

Design-pattern inspiration: Cheng-I Wu's `academic-research-skills` repository. We acknowledge the conceptual lineage of the integrity-verification and devil's-advocate patterns as applied to multi-agent research pipelines.

We are not redistributing, adapting, or building upon the licensed work.

## Customer Gate block

Per `08_BUSINESS_GATES/README.md` promotion rule, every REAL asset in this repo must carry a customer_gate.

```yaml
customer_gate:
  customer_pain:
    who: "T4H Pty Ltd (director: Troy Latter)"
    pain: "ATO/RDTI rejection risk on FY24-25 R&D claim ($929,504 estimated refund). Manual evidence narrative production is too slow and inconsistent for the 10 Jun 2026 review window."
    severity: "CRITICAL — direct cash defence"
  first_value:
    artifact: "First Phase A integrity verification run against an existing RDTI activity narrative draft, producing a typed finding list"
    target_date: "D+2 (2026-05-26)"
  payer:
    primary: "T4H Pty Ltd (internal R&D investment)"
    derivative: "ATO refund preservation ($929,504) on successful claim defence"
  economic_path:
    direct: "Reduce ATO rejection probability by raising evidence quality to peer-review standard"
    indirect: "Skill layer reusable across Westpac proposal, ConsentX positioning, ASS/DRA publications"
  evidence_when_real:
    - "Phase A run completes with non-empty findings list against real RDTI draft"
    - "reality_ledger entry with top-level evidence key (commit_sha or execution_trace)"
    - "At least one finding catches a real defect that would have weakened the ATO submission"
```

## Status

**PARTIAL** — customer_gate block defined, first-value artifact not yet produced. Promotes to REAL on D+2 deliverable.
