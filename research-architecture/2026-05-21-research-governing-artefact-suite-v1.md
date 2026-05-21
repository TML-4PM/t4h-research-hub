# Research Governing Artefact Suite v1

Date: 2026-05-21
Owner: Troy Latter / Tech 4 Humanity
Repository: TML-4PM/t4h-research-hub
Status: PARTIAL, governing architecture proposed and ready for implementation

## 1. Purpose

This document defines the governing artefact suite for the T4H Research Hub and AI Sweet Spots research ecosystem.

The Study Passport is not the whole system. It is the one-page control card for a study. Around it sits a suite of governing artefacts that control:

- what the study is,
- what evidence exists,
- what artefacts belong to it,
- what claims can be made,
- what public surfaces are allowed,
- what product packs are derived from it,
- what still needs to be researched,
- what is safe to publish, sell, or cite.

The goal is to stop research collapse: papers, posters, site pages, demos, datasets, protocols, product offers, claims, and half-finished assets must not be treated as the same object.

## 2. Core principle

A research programme is not one file.

A research programme is a controlled asset system:

```text
Topic → Study → Evidence → Artefacts → Packs → Surfaces → Products → Receipts
```

Each layer has a different job and a different source-of-truth rule.

## 3. The governing artefact suite

| Artefact | Grain | Purpose | Owner use | Status |
| --- | --- | --- | --- | --- |
| Research Topic Card | One row/page per topic | Defines the research area and why it exists | Portfolio control | Required |
| Study Passport | One page per study | Executive summary and control card | Navigation and decision-making | Required |
| Evidence Card | One card per major claim | Separates validated, partial, conceptual, simulated and planned claims | Truth control | Required |
| Artefact Manifest | One row per asset | Tracks papers, posters, datasets, HTML, protocols, decks, briefs, code, demos | Asset control | Required |
| Study Pack Manifest | One row per pack | Bundles assets for a reader/use case | Distribution control | Required |
| Publication Readiness Gate | One checklist per public release | Controls what can be published | Risk/public control | Required |
| Productisation Gate | One checklist per product/pilot | Controls what can be sold or piloted | Commercial control | Required |
| Research Gap Ledger | One row per missing item | Tracks missing research, missing evidence, missing assets, stale claims | Continuity control | Required |
| Claim Ledger | One row per quantified/public claim | Prevents unsupported numbers spreading | Evidence governance | Required |
| Surface Registry | One row per website/page/widget | Tracks public/internal surfaces and what they are allowed to say | Website/control plane | Required |
| Source-of-Truth Map | One record per domain/entity | Defines what source wins when files conflict | Drift prevention | Required |
| Version and Duplicate Register | One row per duplicate/version | Identifies latest canonical vs copy | Cleanup | Required |
| Partner / Audience Pack | One row per audience | Converts study into buyer/partner/research/policy language | GTM control | Recommended |
| Risk and Safeguard Card | One card per sensitive study | Child, health, neuro, Indigenous, altered-state, workplace risk controls | Safety governance | Required for sensitive work |
| Receipt / Reality Ledger Entry | One row per action | Proves what was written, pushed, published, extracted, or validated | Execution proof | Required |

## 4. Where Study Passport fits

The Study Passport is the front door. It is the one-page summary that lets someone understand a study without opening every supporting asset.

It should answer:

- What is the study?
- Why does it matter?
- What decision does it support?
- Who should read it?
- What evidence does it have?
- What assets exist?
- What is missing?
- What risks exist if it is misread?
- What is the next action?

It should not try to contain all assets. It should point to the artefact manifest, evidence card, study pack manifest and surface registry.

## 5. Object model

### 5.1 Topic

A topic is a broad research area.

Examples:

- AI Sweet Spots Core.
- Extreme AI Effects.
- Cognitive Architecture.
- DRA / Context × Intensity × Neurotype.
- Social Skills / Relational Intelligence.
- Brain Capital.
- CARE / Indigenous Cultural Safety.
- Thriving Kids.
- MyNeuralSignal.
- The Living Stack.

Topic-level artefact: Research Topic Card.

### 5.2 Study

A study is a distinct research object with a claim, method, population, question, or framework.

Examples:

- Social Skills A — Baseline RQ.
- Social Skills B — State-Conditional RQ.
- Cognitive Architecture Optimization.
- Context × Intensity × Neurotype / DRA.
- AI Sweet Spots Extended Workplace Study.

Study-level artefact: Study Passport.

### 5.3 Evidence

Evidence is a claim and its proof state.

Examples:

- `ADHD +44% productivity at 48% AI intensity`.
- `Indigenous CARE 87% adoption vs 19% generic`.
- `Neurotypical harm risk 3.89× above 50% AI`.
- `Social Skills A paper exists`.
- `study-2-social-skills-A-data-sample.csv is referenced but not extracted`.

Evidence-level artefact: Evidence Card / Claim Ledger.

### 5.4 Artefact

An artefact is a file, page, dataset, demo, poster, protocol, or output belonging to a study.

Examples:

- Markdown paper.
- DOCX paper.
- PDF poster.
- HTML demo.
- CSV data sample.
- JSON protocol.
- Google Sheet register.
- Research Bible.
- Questionnaire workbook.
- Executive brief.
- Product pack.

Artefact-level artefact: Artefact Manifest.

### 5.5 Pack

A pack is a curated bundle for an audience or action.

Examples:

- Executive pack.
- Academic pack.
- Partner pack.
- Policy pack.
- Sales pack.
- Pilot pack.
- Website pack.
- Conference/poster pack.
- Internal evidence pack.

Pack-level artefact: Study Pack Manifest.

### 5.6 Surface

A surface is where the work appears.

Examples:

- aisweetspots.com.
- sweetspots.workfamilyai.org.
- T4H Research Hub.
- Vercel prototype.
- Command Centre widget.
- LinkedIn article.
- PDF download.
- Google Drive public kit.

Surface-level artefact: Surface Registry.

### 5.7 Product

A product is a sellable or deployable version of the research.

Examples:

- Relational Ops Layer Pilot.
- SweetSpot Assessment Engine.
- Thriving Kids Navigation + Research Kit.
- WorkFamilyAI RQ Copilot.
- DRA Atlas.
- Cognitive Ecology Assessment.

Product-level artefact: Productisation Gate.

## 6. Required registry tables

The suite should be implemented as linked CSV/Sheets/DB tables.

### 6.1 research_topics_registry

```csv
topic_id,canonical_topic,short_name,theme_group,status,public_surface,internal_surface,priority,owner,description,related_topics,next_action
```

### 6.2 studies_registry

```csv
study_id,topic_id,canonical_title,short_title,study_type,status,evidence_state,evidence_grade,decision_this_supports,who_should_read,summary,methods_summary,population_or_domain,key_metrics,known_limits,canonical_passport_path,next_action
```

### 6.3 evidence_registry

```csv
evidence_id,study_id,claim_text,claim_type,metric_value,evidence_state,source_asset_id,source_location,validation_needed,conflict_flag,conflict_notes,allowed_public_claim,next_action
```

### 6.4 artefacts_registry

```csv
artefact_id,study_id,topic_id,artefact_role,asset_type,format,file_name,source_system,source_location,status,version,canonical_flag,public_flag,required_for_publication,required_for_sales,required_for_research,owner,notes
```

### 6.5 study_packs_registry

```csv
pack_id,study_id,pack_name,audience,pack_goal,required_artefacts,available_artefacts,missing_artefacts,readiness_score,publication_allowed,next_action
```

### 6.6 surfaces_registry

```csv
surface_id,surface_name,url,platform,owner,status,audience,source_study_ids,source_pack_ids,allowed_claims,blocked_claims,last_reviewed,next_review,next_action
```

### 6.7 products_registry

```csv
product_id,product_name,source_studies,source_packs,buyer,audience,offer,pricing_status,distribution_channel,required_evidence,readiness_state,risks,next_action
```

### 6.8 gap_ledger

```csv
gap_id,object_type,object_id,gap_type,description,severity,owner,status,next_action,created_at,last_checked_at
```

### 6.9 receipt_ledger

```csv
receipt_id,action_type,object_type,object_id,system,commit_sha,url,timestamp,status,evidence,next_action
```

## 7. Artefact role taxonomy

Use a controlled list. Do not allow arbitrary labels like `file`, `doc`, `thing`, or `asset`.

```text
paper_academic
paper_practitioner
paper_markdown
paper_docx
paper_pdf
methods_appendix
protocol_json
data_sample_csv
dataset_full
dataset_card
poster_main
poster_mini
poster_print
poster_html
landing_page
html_demo
assessment
questionnaire
scoring_model
research_bible
registry_sheet
executive_brief
policy_brief
partner_brief
sales_pack
pilot_pack
product_pack
pricing_sheet
slide_deck
press_release
social_teaser
faq
code_repo
notebook
api_schema
evidence_card
risk_card
receipt
```

## 8. Evidence state taxonomy

Use a strict evidence state so public claims are not accidentally promoted.

```text
REAL_ASSET_EXISTS
REAL_EXECUTED
REAL_VALIDATED_DATA
PARTIAL_REFERENCED_NOT_EXTRACTED
PARTIAL_DRAFT
PARTIAL_METHOD_ONLY
PARTIAL_SITE_COPY_ONLY
PARTIAL_CONFLICTING_SOURCES
CONCEPTUAL
SIMULATED
PLANNED
BLOCKED_MISSING_SOURCE
BLOCKED_PERMISSION
RETIRED
```

## 9. Publication readiness gate

A study can be public only when this minimum gate is satisfied:

```yaml
publication_readiness_gate:
  required:
    - study_passport_exists
    - artefact_manifest_exists
    - evidence_card_exists
    - public_claims_reviewed
    - source_of_truth_declared
    - risk_card_exists_if_sensitive
    - surface_registry_entry_exists
    - gaps_logged
  block_publication_if:
    - quantified_claim_without_evidence_state
    - public_surface_claim_conflicts_with_registry
    - child_or_health_claim_without_safeguard_card
    - Indigenous_claim_without_governance_note
    - altered_state_claim_without_red_line_note
    - no owner
```

## 10. Productisation readiness gate

A study can become a product or paid pilot only when this minimum gate is satisfied:

```yaml
productisation_gate:
  required:
    - study_passport_exists
    - product_registry_entry_exists
    - target_buyer_defined
    - offer_defined
    - pricing_status_declared
    - pilot_kpis_defined
    - evidence_state_declared
    - risk_and_safeguard_card_exists
    - implementation_assets_listed
    - receipt_path_defined
  block_sales_if:
    - empirical_claims_unvalidated_but_sold_as_proven
    - no implementation pathway
    - no buyer or distribution channel
    - no support or governance model
```

## 11. Sensitive research safeguard triggers

A Risk and Safeguard Card is mandatory when any study touches:

- children,
- disability,
- neurodivergence,
- Indigenous communities,
- health or mental health,
- BCI / biosignals,
- drugs, psychedelics, medication, or altered states,
- workplace surveillance,
- hiring or performance scoring,
- identity, consent, or data rights.

## 12. Source-of-truth rules

Recommended hierarchy:

1. Reality Ledger / receipt ledger for execution truth.
2. Canonical GitHub registry documents for architecture and governance.
3. Research Hub registry tables for current object state.
4. Source files in Drive/GitHub for content detail.
5. Public websites for presentation state only.
6. Posters and social assets for communication only.
7. Chat history for discovery leads, not final source of truth.

Notion may support planning but is not canonical source of truth unless explicitly promoted and mirrored into the Research Hub registry.

## 13. How the suite controls asset chaos

| Problem | Governing artefact that fixes it |
| --- | --- |
| Poster confused with study | Study Passport + Artefact Manifest |
| Public website claims not matching research | Surface Registry + Claim Ledger |
| Duplicate DOCX/PDF/HTML copies | Version and Duplicate Register |
| Strong metrics repeated without source | Evidence Card + Claim Ledger |
| Social Skills A/B dropped off | Topic Card + Studies Registry |
| DRA collapsed into Altered States | Topic Card + Related Studies field |
| Missing CSV/JSON files forgotten | Gap Ledger |
| Product offers disconnected from evidence | Productisation Gate |
| Sensitive claims published too early | Risk and Safeguard Card |
| Work gets done but not provable | Receipt Ledger |

## 14. Implementation plan

### Phase 1 — Stabilise governance spine

Create these governing files in GitHub:

- `research-architecture/study-passport-template-v1.md`
- `research-architecture/evidence-card-template-v1.md`
- `research-architecture/artefact-manifest-schema-v1.csv`
- `research-architecture/study-pack-manifest-schema-v1.csv`
- `research-architecture/surface-registry-schema-v1.csv`
- `research-architecture/productisation-gate-v1.md`
- `research-architecture/publication-readiness-gate-v1.md`
- `research-architecture/risk-and-safeguard-card-template-v1.md`

### Phase 2 — Apply to recovered research clusters

Create Study Passports for:

1. AI Sweet Spots Core.
2. AI Sweet Spots Extended Workplace Study.
3. Cognitive Architecture Optimization.
4. Extreme AI Effects.
5. DRA / Context × Intensity × Neurotype.
6. ASAI / Altered States × AI.
7. Social Skills A — Baseline RQ.
8. Social Skills B — State-Conditional RQ.
9. Brain Capital.
10. CARE / Indigenous Cultural Safety.
11. Thriving Kids.
12. MyNeuralSignal.
13. The Living Stack.

### Phase 3 — Build linked registry tables

Create CSVs or Google Sheets for:

- topics,
- studies,
- artefacts,
- evidence,
- packs,
- surfaces,
- products,
- gaps,
- receipts.

### Phase 4 — De-duplicate and reconcile

For every file family:

- identify canonical file,
- mark copies,
- preserve version metadata,
- attach source system,
- attach evidence state,
- attach publication permission state.

### Phase 5 — Wire to Research Hub and public surfaces

Only public surfaces should read from approved Study Passports, packs, and allowed claims.

Websites must not invent metrics. Public pages must declare their source study and evidence state.

## 15. Sample asset control flow

Example: Social Skills A.

```text
Topic Card: Social Skills / Relational Intelligence
  ↓
Study Passport: Social Skills A — Baseline RQ
  ↓
Evidence Cards:
  - paper exists
  - Deming wage premium source exists
  - profile uplift projections need validation
  ↓
Artefact Manifest:
  - social-skills-A-paper.md
  - social-skills-A-paper.docx
  - index.html
  - study-2-social-skills-A-full.json
  - study-2-social-skills-A-data-sample.csv
  - poster needed
  - executive brief needed
  ↓
Study Packs:
  - Executive RQ pack
  - WorkFamilyAI pilot pack
  - Academic appendix pack
  ↓
Surface Registry:
  - sweetspots.workfamilyai.org
  - T4H Research Hub
  ↓
Product Registry:
  - Relational Ops Layer Pilot
  ↓
Receipt Ledger:
  - extraction receipt
  - file creation receipt
  - publication receipt
```

## 16. Operating rules

1. Every study gets a Study Passport.
2. Every quantified claim gets an Evidence Card.
3. Every file gets an Artefact Manifest row.
4. Every website/page/widget gets a Surface Registry row.
5. Every saleable pilot gets a Productisation Gate.
6. Every sensitive study gets a Risk and Safeguard Card.
7. Every missing file or unresolved question gets a Gap Ledger row.
8. Every write/push/publish gets a Receipt Ledger row.
9. Posters are never source of truth.
10. Public websites are presentation surfaces, not research truth.
11. Chat history is a discovery trail, not canonical evidence.
12. Study Passport is the one-page summary, not the whole system.

## 17. Next action

Create the first complete template pack:

- Study Passport template.
- Evidence Card template.
- Artefact Manifest CSV schema.
- Study Pack Manifest CSV schema.
- Publication Readiness Gate.
- Productisation Gate.
- Risk and Safeguard Card template.

Then apply the suite to Social Skills A and DRA first because those were the clearest recovered/drop-off clusters.

## 18. Reality Ledger

```yaml
status: PARTIAL
result: "Research governing artefact suite proposed and committed as architecture plan."
evidence:
  - type: github_file
    value: "research-architecture/2026-05-21-research-governing-artefact-suite-v1.md"
gaps:
  - "Templates not yet split into separate files"
  - "CSV registry files not yet created"
  - "First Study Passports not yet instantiated"
  - "No automated validation yet"
next_action:
  - "Create template pack files"
  - "Create Social Skills A Study Passport"
  - "Create DRA Study Passport"
  - "Create artefact/evidence registry CSV schemas"
elevation:
  - "Study Passport is a one-page control card inside a broader governing artefact suite."
pressure_flags:
  - "Do not let posters or public pages become source of truth"
  - "Do not flatten studies, artefacts, packs, claims, and surfaces"
score: 0.94
```
