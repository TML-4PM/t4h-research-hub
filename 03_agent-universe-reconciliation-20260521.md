# Agent Universe Reconciliation Note

Generated: 2026-05-21 Australia/Sydney

## Inputs inspected

1. `727 WorkfamilyAI - staff roles.pdf`
2. `1000_agents_enriched(2).csv`
3. `10k_agents_full(7).csv`
4. Holo-Org runtime code references already recorded in prior artifacts

## 727 WorkFamilyAI PDF

Classification: CANONICAL HUMAN-READABLE ORGANISATIONAL GRAMMAR

Key facts:

- Holo-Org Framework Inventory
- 9 business functions
- 81 main agents
- 729 specialised sub-agents
- full 9x9x9 framework
- functions include Product Development, Marketing, Human Resources, Finance and Operations, Customer Support, Innovation and R&D, Sales, Governance and Compliance, External Relations

Use:

- role taxonomy
- human-readable model
- organisational grammar
- product and narrative structure

## 1000 agents enriched CSV

Classification: ENRICHED AGENT INTELLIGENCE LAYER

Shape:

- 1000 rows
- 20 columns

Columns include:

- Agent Code
- Agent Name
- Pillar
- Complexity
- Human Equivalent Role
- Agent Persona Name
- Human Equivalent Role Detail
- Value Score
- Priority Order
- Pillar Persona Title
- Persona Perspective
- Role-Level Gap
- Org-Level Gap
- Portfolio Brand Connection
- Economic Signal
- RDTI / R&D Relevance
- Data Asset Opportunity
- Urgency
- Recommended Next Ask
- Portfolio-Wide Gaps

Use:

- enrichment
- economics
- RDTI and portfolio mapping
- prioritisation
- data asset opportunity mapping
- next-action planning

## 10k agents full CSV

Classification: RAW AGENT UNIVERSE / RECOVERY SOURCE

Shape:

- 10000 rows
- 23 columns

Columns:

- agent_id
- agent_code
- agent_name
- persona
- primary_function
- problem_statement
- industry
- domain
- sfia_level
- sfia_category
- tech_stack_primary
- tech_stack_secondary
- setup_cost_usd
- monthly_cost_usd
- roi_statement
- roi_metric
- skills
- certifications
- common_agent
- source_file
- source_confidence
- is_clean
- validation_issues

Quality results:

- duplicate agent_id: 0
- duplicate agent_code: 0
- is_clean = 1: 3000
- is_clean = 0: 7000

Validation issue distribution:

- OK: 3000
- missing_persona;missing_sfia_level: 1861
- missing_persona;missing_sfia_level;domain_has_roi: 1589
- tech_stack_is_cost: 1419
- industry_concat;tech_stack_is_cost: 1081
- industry_concat;missing_persona;missing_sfia_level;domain_has_roi: 687
- industry_concat;missing_persona;missing_sfia_level: 363

Interpretation:

The 10k file is not clean enough to be the operational source of truth. It has 10,000 unique agent IDs and codes, but only 3,000 rows are currently marked clean. Several non-clean sections appear column-shifted or semantically polluted, with ROI metrics appearing in domain/function fields and placeholder strings such as `agent_code_T persona_T function_TBD`.

Use the 10k file as:

- broad agent universe
- recovery source
- enrichment input
- candidate source for clean subset

Do not use it directly as the live operational registry without repair.

## Layer model

```yaml
agent_layers:
  727_pdf:
    role: canonical organisational grammar
    quality: human readable and structurally strong
  1000_enriched_csv:
    role: enriched intelligence and economics layer
    quality: strong candidate for registry enrichment
  10k_full_csv:
    role: raw universe and recovery source
    quality: mixed; 3000 clean / 7000 not clean
  live_runtime_tables:
    role: operational execution and product linkage
    quality: requires live validation
```

## Required reconciliation flow

1. Use 727 PDF to define the canonical 9x9x9 taxonomy.
2. Use 1000 enriched CSV to add economic, RDTI, portfolio, urgency, and gap intelligence.
3. Use 10k CSV only after splitting clean and repair queues.
4. Match all rows to live runtime roster and product catalogue.
5. Produce `agent_registry_v1` with evidence flags.
6. Keep invalid or polluted 10k rows in a quarantine queue until repaired.

## Proposed statuses

```yaml
727_pdf: REAL_AS_DOCUMENTED_GRAMMAR
1000_enriched_csv: PARTIAL_ENRICHMENT_SOURCE
10k_full_csv: PARTIAL_RAW_UNIVERSE
live_runtime_tables: PARTIAL_PENDING_EXECUTION
agent_registry_v1: NOT_YET_CREATED
```
