# T4H Research Reconciliation Ledger

Status: PARTIAL — materially advanced, evidence-bound, not yet fully REAL until source XLSX rows and site deployments are parsed/validated.
Generated: 2026-05-21 Australia/Sydney
Owner: Tech 4 Humanity / Troy Latter

## Purpose

This ledger reconciles the known T4H research estate across Drive, GitHub, and public evidence. It prevents AI Sweet Spots from swallowing the entire research program and creates a parent view for research/IP, assets, posters, dashboards, grants, and productisation.

## Evidence inspected

### Drive sources found

| Evidence ID | Source | Type | Date signal | Status | Notes |
|---|---|---|---:|---|---|
| D001 | `Additional research topics not captured in the set program.txt` | Drive text | 2026-04-17 | USED | Shadow research program and missing topics list. |
| D002 | `00_research-asset-register-service-catalogue-v1.xlsx` | Drive XLSX | 2026-05-15 | FOUND / NOT PARSED | Office file; direct Google Sheets metadata unsupported. Needs conversion/export parse. |
| D003 | duplicate `00_research-asset-register-service-catalogue-v1.xlsx` | Drive XLSX | 2026-05-15 | FOUND / NOT PARSED | Duplicate or newer copy; requires dedupe. |
| D004 | `T4H_ResearchIP_OperatingModel_v1` | PDF | 2026-05-12 | FOUND | Parent IP/commercial governance layer. |
| D005 | `research-status-live.html` | HTML | 2026-05-13 | FOUND | Likely dashboard/widget seed. |
| D006 | `Research_Stack_Definitions_v2.docx` | DOCX | 2026-04-24 | FOUND | Taxonomy/control plane source. |
| D007 | `04_RESEARCH_IP_Registry_v1.0.xlsx` | XLSX | 2026-03-10 | FOUND / NOT PARSED | Existing IP registry; must merge with asset register. |
| D008 | `Digital_Child_Protection_Research_IP_Framework` | PDF | 2026-05-11 | FOUND | Distinct research/IP stream. |
| D009 | `Living_Symbols_Research_Proposal_Template` | DOCX/PDF | 2026-05-13 | FOUND | Distinct research/proposal stream. |
| D010 | `general AI sweet spots posters - research needs completing` | Doc/PDF | 2026-04/05 | FOUND | AI Sweet Spots poster/research backlog. |

### GitHub repositories found

| Repo | Role | Status |
|---|---|---|
| `TML-4PM/t4h-research-hub` | Parent research hub | WRITE TARGET |
| `TML-4PM/ai-sweet-spots-for-all` | AI Sweet Spots product/research surface | FOUND |
| `TML-4PM/master-asset-matrix` | Cross-program asset register repo | FOUND |
| `TML-4PM/troy-grant-engine` | Grant/R&D funding engine | FOUND |
| `TML-4PM/mcp-command-centre` | Dashboard/control plane | FOUND |

## Corrected architecture

AI Sweet Spots is a major program, not the parent container. The correct parent is T4H Research Hub, backed by Research IP Operating Model, Research Asset Register, IP Registry, and live status surfaces.

```yaml
research_parent:
  canonical_hub: TML-4PM/t4h-research-hub
  asset_matrix: TML-4PM/master-asset-matrix
  sweet_spots_surface: TML-4PM/ai-sweet-spots-for-all
  operating_model: T4H_ResearchIP_OperatingModel_v1
  live_status_seed: research-status-live.html
```

## Reconciled research streams

| Stream | Category | Spine status | Commercial path | Evidence state | Next action |
|---|---|---|---|---|---|
| AI Sweet Spots / Human-AI Fit | Human-AI calibration | SPINE | assessments, tools, training, research licensing | PARTIAL | Build evidence registry + poster matrix. |
| Neuroinclusion and Cognitive Accommodation | Inclusion/workforce | SPINE | workplace programs, education, tools | PARTIAL | Separate evidence-based claims from hypotheses. |
| ConsentX / Dynamic Consent | Governance/platform | SPINE CANDIDATE | consent SaaS, audit, policy | PARTIAL | Promote out of subtopic status. |
| MyNeuralSignal / Signal Measurement | Signal/biomarker | SPINE | signal products, research data | PARTIAL | Bind to Sweet Spot Drift and ConsentX. |
| GC-BAT / Neuro-governance Futures | Foresight/governance | SPINE | council, policy, advisory | PARTIAL | Bind vignettes to impact/evidence matrix. |
| Drug Resilience Atlas | Behaviour/law/biology | SPINE | atlas, public research, policy | PARTIAL | Connect existing DRA dataset/assets. |
| Digital Child Protection | Child safety/IP | SPINE CANDIDATE | education, safety tools, advisory | PARTIAL | Inspect framework and connect to Reading Buddy. |
| AI Sludge / Public Systems | Public sector AI | SPINE CANDIDATE | advisory, audit, public reports | PARTIAL | Pull completed Australia series into hub. |
| AI in Australian Healthcare Systems | Health systems/access | SPINE CANDIDATE | reports, advisory, HealthFlow | PARTIAL | Separate from biology-focused research. |
| Agentic Workforce Economics | Labour/organisation | SPINE | consulting, transformation models | PARTIAL | Link to 10x10x10 and WorkFamilyAI. |
| Reality Ledger Evidence Science | Methodology/evidence | SPINE METHODOLOGY | audit, R&D defensibility, trust tooling | PARTIAL | Make claim-verification schema mandatory. |
| Signal Economy Research | Behavioural economics | SPINE CANDIDATE | survey, products, marketplace | PARTIAL | Define measurement units and value flows. |
| Cross-LLM Orchestration Reliability | Infrastructure/method | SPINE CANDIDATE | devops/AI ops tooling | PARTIAL | Capture failure modes and telemetry. |
| Small Business AI Diffusion | Field research | SPINE CANDIDATE | content, consulting, data products | PARTIAL | Create interview/study protocol. |
| AI Physicalisation / Tangible AI Artefacts | Behaviour/economics | EMERGING | AI-to-vinyl, gifts, memory products | PARTIAL | Separate emotional value research. |
| Living Symbols | Symbols/culture/research | EMERGING | proposals, education, cultural products | PARTIAL | Inspect proposal and classify. |
| The Rhythm Method | Creative intelligence | SIBLING PROGRAM | artist analytics, scoring, IP | PARTIAL | Keep separate from Sweet Spots. |
| CalmBound / Household Boundary Systems | Family/household | SPINE CANDIDATE | family AI, boundary tools | PARTIAL | Create household-specific research lane. |
| OSINT and Infrastructure Integrity | Sovereignty/security | SPINE CANDIDATE | advisory, national security, risk | PARTIAL | Bind to prior cyber command evidence where permissible. |
| Neural Evolution Simulator | Modelling/simulation | SPINE CANDIDATE | simulator, research tooling | PARTIAL | Define model inputs and proof outputs. |
| Cognitive Portfolio Theory | Cognitive economics | EMERGING | assessment, advisory, IP | PARTIAL | Decide if standalone theory or Sweet Spots extension. |
| EXT-PSYCHEDELICS-WORKPLACE | Psychedelics/workplace | SPINE CANDIDATE | research dataset/policy | PARTIAL | Locate Supabase/Fifth Quadrant dataset. |
| 47 Novel Research Directions Pipeline | Meta-backlog | CONTROL | portfolio planning | PARTIAL | Map into spine/adjacent/emerging. |

## Immediate closure actions

1. Convert/export the two Office XLSX asset registers into readable rows.
2. Parse `04_RESEARCH_IP_Registry_v1.0.xlsx` and dedupe against May service catalogue.
3. Promote this ledger into the parent research hub.
4. Add a machine-readable CSV version next to this file.
5. Build a `research-status-live.html` successor or import the existing one as a widget.
6. Add claim confidence levels to AI Sweet Spots posters before publishing.
7. Keep The Rhythm Method as sibling program, not Sweet Spots.
8. Treat ConsentX, Public Systems Sludge, Digital Child Protection, and Reality Ledger Evidence Science as likely spine promotions.

## Reality Ledger

```yaml
status: PARTIAL
result: Research estate reconciled into a canonical ledger and committed to the T4H Research Hub.
evidence:
  - Drive search results identifying source files
  - GitHub repo discovery identifying target repos
  - GitHub commit receipt for this ledger
remaining_gaps:
  - Office XLSX row-level parsing unavailable through direct Sheets API
  - Research/IP PDFs and DOCX need full content parsing
  - Vercel deployment not executed in this pass
  - Command Centre widget not yet wired
next_action:
  - create CSV companion
  - create dashboard HTML
  - parse registers via conversion/export path
  - bind deployment/receipt evidence
classification: PARTIAL
```
