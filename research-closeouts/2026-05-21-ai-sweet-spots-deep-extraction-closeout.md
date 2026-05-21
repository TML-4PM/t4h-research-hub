# AI Sweet Spots / T4H Research Hub — Deep Extraction Closeout

Date: 2026-05-21
Owner: Troy Latter / Tech 4 Humanity
Repository: TML-4PM/t4h-research-hub
Status: PARTIAL, evidence-bound, extraction complete for this pass

## 1. Executive summary

This closeout records the completed deep extraction pass across AI Sweet Spots and adjacent T4H research assets. The important conclusion is that the research body is not missing because there is no material. The research body is fragmented because several different object types have been collapsed into one bucket: studies, papers, posters, assessments, website summaries, methodology instruments, data samples, HTML demos, pricing pages, and registry models.

The search also confirmed that earlier passes were too shallow. They found posters and public surfaces but missed several first-class research strands. The major recovered strands are:

- Extreme AI Effects / Cognitive Architecture paper family.
- Context × Intensity × Neurotype / Drug Response × AI paper family.
- AISS_DRxAI HTML prototypes and DRA_Paper_v1 copies.
- Study Passport model for separating studies, artefacts, packs, and evidence.
- Research related / pull it together meta-registry.
- Ai sweet spots - pages missing website capture with paper/poster/topic structure.
- Social Skills Part A: Baseline Relational Intelligence.
- Social Skills Part B: State-Conditional Relational Intelligence.
- Social Skills landing/index package with data/protocol references.

The search confirms Troy's diagnosis: the issue was not lack of research but topic collapse, registry drift, duplicate versions, and dropped-off research clusters.

## 2. Method and execution pattern

The extraction was performed as a 10-cycle search pass using Google Drive and GitHub connected tooling, with exact-title retries after broad searches caused 502 failures. The instruction was extraction-only. No product build was required.

Search methods used:

- Exact and near-exact Drive title searches.
- Split searches after 502 failures.
- Search terms based on recovered internal phrases rather than only `AI Sweet Spots`.
- Recovery of documents by conceptual anchors including `Relational Intelligence`, `Context × Intensity × Neurotype`, `Study Passport`, `Cognitive Architecture Optimization`, and `pull it together`.
- GitHub repository target confirmation for T4H Research Hub.

Hard limits:

- Some Drive searches hit transient 502 errors.
- Some discovered file contents were truncated by tool token budgets.
- Some files appear in duplicate/versioned copies and need de-duplication.
- Supabase and Notion were not searched in this closeout pass.
- The named CSV `RPT_ResearchAreas_Subtopics_10x9_20260225.csv` did not surface directly by filename.

## 3. Key discoveries by cycle

### Cycle 1 — Extreme AI Effects / Cognitive Architecture paper

Recovered a full PDF asset titled `2 Extreme AI Effects_ Superhuman Performance and Catastrophic Disruption.pdf`. Its internal title is `Cognitive Architecture Optimization in Human-AI Systems: A Cross-Domain Analysis of Performance Enhancement and Risk Mitigation Across Neurological Populations`.

Important extracted details:

- Word count: 14,847.
- Pre-registration: OSF-2025-CAAI-001.
- Methods: systematic review k=247, cross-cultural validation across 12 sites, longitudinal performance tracking N=2,847 over 18 months, and mechanistic cognitive assessment.
- Results: ADHD optimal AI integration 55% ±12%; autism 45% ±8%; dyslexia 35% ±10%; neurotypical 25% ±6%.
- Cultural moderation: η²=.087.
- Risk factors: executive demand mismatch 18.3%, unpredictability intolerance 16.7%, cultural misalignment 23.1%.

Also surfaced the `Altered-States-AI-16-Themes-Complete.xlsx` workbook family and poster/research-needs PDFs.

Evidence references from extraction: Drive file `2 Extreme AI Effects_ Superhuman Performance and Catastrophic Disruption.pdf`, file id `1V0uGAF08DWHJAckBoE1DvyTwyaoX_wqp`; workbook files including `Altered-States-AI-16-Themes-Complete.xlsx` and copies.

### Cycle 2 — Context × Intensity × Neurotype / DRA paper

Recovered a Google Doc titled `Context × Intensity × Neurotype AI Sweet Spots and Drug Response × AI (DRA) in the Age of Psychedelic Medicine`.

Important extracted details:

- Draft note says approximately 3,500 words with target of 5,000 words.
- Version 1.0 dated 2026-04-17.
- Formal title: `Context × Intensity × Neurotype: AI Sweet Spots and Drug Response × AI (DRA) in the Age of Psychedelic Medicine`.
- Defines a three-axis matrix: Context, Intensity, Neurotype.
- Defines governance zones:
  - Green: AI sweet spots, workplace-deployable.
  - Amber: DRA, clinical-only.
  - Red: unsupervised psychedelics plus AI at work, not acceptable.
- Defines DRA as the clinical/research zone where AI personalises medication and psychedelic protocols across neurotypes.
- Uses evidence streams from workplace AI mental-health tools, psychedelic-assisted therapy RCTs, neurodivergent AI research, neurodivergent psychedelic trials, and Fifth Quadrant workplace psychedelic survey data.

Evidence reference from extraction: Google Doc file id `1hdmbZAHi09QwtP7hgX9l_Zu0HFDqiesuOFrvJ8L9O8o`.

### Cycle 3 — DRA/AISS paper family

Recovered multiple related assets:

- `DRA_Paper_v1.docx` copies.
- `DRA_Paper_v1 2.docx`.
- `DRA_Paper_v1 copy.docx`.
- `AISS_DRxAI_Context_Intensity_Neurotype_v1.1.html` copies.
- The Google Doc above as likely latest narrative source.

Conclusion: this is a distinct research cluster, not merely a subnote under Altered States.

Required treatment in matrix: first-class cluster named `DRA / Drug Response × AI / Context × Intensity × Neurotype`, with links to ASAI and Altered States but not collapsed into them.

### Cycle 4 — Broader research infrastructure

After an exact-title search initially hit 502, split searches recovered broader infrastructure:

- `04_RESEARCH_IP_Registry_v1.0 (1).xlsx`.
- `experiment-register-search.html`.
- `Research related - pull it together.pdf` and copies.
- `Pilot Study Plan_ Cognitive Architecture and AI Integration.pdf`.
- `whats missing - study passport journey.pdf`.

Conclusion: there is an older/broader research IP registry and experimental registry material that must be compared against the public website structure.

### Cycle 5 — Study Passport model

Recovered `whats missing - study passport journey` materials.

Critical insight: a flat asset matrix is the wrong structure. The correct model separates:

- `studies_registry`: one row per study, explaining what the research object is and why it matters.
- `artefacts_registry`: many rows per study for paper, poster, teaser, dataset, code, HTML, etc.
- `study_packs`: curated reader/use-case bundles such as executive pack, academic pack, social pack, full pack.
- `evidence_registry`: one row per claim/evidence item with evidence status and validation needs.

Recovered Study Passport fields:

- Decision this helps you make.
- Who should read this.
- What you will learn.
- What you will be able to do after.
- Evidence grade and short justification.
- What data exists.
- What is still in development.
- Time to read and time to apply.
- Risks / misread traps.
- Related artefacts.
- Next action.

This is the registry architecture that should govern the Research Hub.

### Cycle 6 — Research related / pull it together

Recovered `Research related - pull it together`, a meta-registry style document that captures:

- 10 areas and 90 subthemes.
- The critique that 10 sections compressed too many older research themes.
- A note that 9×9×9 and 10×10×10 are framework sizes, not research-program numbers.
- Missing items from the site/topic matrix, including Social Skills.
- Public website paper structure: 32 papers, 10 research topics.
- Poster structure and theme grouping.
- Pricing and product consistency concerns.
- The need to reuse assets across sites and paid widgets.

Conclusion: this document is a bridge between raw research memory, website pages, and registry design.

### Cycle 7 — Missing CSV reference

Searched for `RPT_ResearchAreas_Subtopics_10x9_20260225.csv`. It did not surface directly by filename.

Searched phrase `10 areas 90 subthemes`; this hit a 502.

Status:

- The CSV remains referenced but not recovered directly.
- The concept/content exists indirectly inside `Research related - pull it together`.
- It should remain on the retry queue.

### Cycle 8 — Ai sweet spots - pages missing

Recovered `Ai sweet spots - pages missing`, a direct capture of the website page structure.

This is one of the strongest public-surface source documents. It captures:

- Papers.
- Posters.
- Insights.
- Test Yourself Now.
- `32 Papers Available`.
- `10 Research Topics`.
- Topic names, paper counts, paper titles, short descriptions, and reading times.
- Poster gallery structure.
- Research Intelligence Dashboard metrics.

Topic / paper count recovered:

| Topic | Paper count |
| --- | ---: |
| V2 Comprehensive Assessment | 0 |
| AI Sweet Spots | 4 |
| From Curves to Consequences | 2 |
| Neurosymbolic Trust Architecture | 4 |
| AI Sweet Spots - Extended Study | 5 |
| MyNeuralSignal | 4 |
| Extreme AI Effects | 4 |
| Cognitive Architecture | 4 |
| Unified Biological Intelligence | 4 |
| The Living Stack | 1 |

Total: 32 papers.

Poster grouping recovered:

- AI Effects in Neurodivergent, Elderly and Indigenous Populations: 5 posters.
- The Living Stack: 3 posters.
- UBI & Economic Frameworks: 1 visible poster.

The page text also claims `Showing 10 of 10 posters`; extracted visible grouping gives 5+3+1 = 9, meaning one poster is hidden, omitted, or truncated in extraction. This is a reconciliation gap.

### Cycle 9 — Social Skills Part A recovered

Broad searches for Social Skills / Deming hit 502. Splitting to `Relational Intelligence` recovered `social-skills-A-paper.md` and several copies.

Social Skills A details:

- Title: `Relational Intelligence Across Cognitive Profiles: AI-Augmented Social Skills for Neurodiverse Workforces`.
- Series: Tech 4 Humanity Research Paper, Part A: Baseline Framework.
- Anchors: Deming 2017 and FT/Burn-Murdoch 2024.
- Profiles: Neurotypical, ADHD, Autism, Dyslexia, Elderly.
- Core RQ skills: Listening Well, Reading the Room, Disagree Without Damage, Building Trust Over Time, Rapid Rapport.
- AI augmentation strategies:
  - Neurotypical: perspective expansion.
  - ADHD: meeting scaffolding.
  - Autism: social cue translation.
  - Dyslexia: communication assist.
  - Elderly: processing support.
- Projected impact: Neurotypical 85 to 90; ADHD 60 to 82; Autism 55 to 78.

Conclusion: Social Skills A is a first-class research asset and had dropped off the public topic matrix.

### Cycle 10 — Social Skills Part B and web package recovered

Recovered:

- `social-skills-B-paper.md`.
- `social-skills-B-paper.docx`.
- `social-skills-B-paper-colour.html`.
- `index.html` for AI Sweet Spots / Social Skills landing package.
- References inside HTML to data and protocol assets:
  - `/data/study-2-social-skills-A-full.json`.
  - `/data/study-3-social-skills-B-full.json`.
  - `/data/study-2-social-skills-A-data-sample.csv`.
  - `/data/study-3-social-skills-B-data-sample.csv`.

Social Skills B details:

- Title: `Altered States and Relational Intelligence: How Substances Affect Social Skills Across Cognitive Profiles`.
- Series: Tech 4 Humanity Research Paper, Part B: State-Conditional RQ.
- Profiles: Neurotypical, ADHD, Autism, Dyslexia, Elderly.
- States: Baseline, Caffeine, Alcohol, Cannabis, Fatigue, High Stress, Microdose.
- Zones: Danger, Caution, Optimal, Superpower.
- Key findings:
  - ADHD × caffeine synergy: +35% social engagement.
  - Alcohol destroys autistic masking capabilities.
  - Elderly workers show stress stability through experience buffer.
- AI augmentation strategies:
  - state detection,
  - profile × state recommendations,
  - real-time scaffolding.

Conclusion: Social Skills A and B are a two-part RQ research series. They should link to WorkFamilyAI, HoloOrg, Brain Capital, and Relational Ops Layer Pilot.

## 4. Updated canonical topic/study spine

| Cluster ID | Cluster | Status | Evidence state | Known assets / notes |
| --- | --- | --- | --- | --- |
| C01 | AI Sweet Spots Core | Active / public surface | PARTIAL | 4 papers, poster, assessment, quiz, research Bible, questionnaire workbook. Claims vary by source. |
| C02 | AI Sweet Spots Extended Workplace Study | Active / public surface | PARTIAL | 5 papers, 4,247 participant summaries, replication guide. Dataset/source verification required. |
| C03 | From Curves to Consequences | Active / public surface | PARTIAL | 2 papers, poster. Policy/economic consequence layer. |
| C04 | Extreme AI Effects | Active / public surface | PARTIAL | 4 papers, poster, full PDF. Includes ADHD performance, Indigenous adoption, economic impact, high-stakes protocols. |
| C05 | Cognitive Architecture | Active / public surface | STRONGER | 4 papers, full 14,847-word PDF, pilot plan. Needs empirical/simulated/conceptual classification. |
| C06 | Neurosymbolic Trust Architecture | Active / public surface | PARTIAL | 4 papers, poster. Explainability, audit, trust preferences. |
| C07 | MyNeuralSignal | Active / public surface | PARTIAL | 4 papers, poster. BCI/biosignal trust platform. |
| C08 | Unified Biological Intelligence | Active / public surface | PARTIAL | 4 papers, poster. Biological safety and technology exposure framework. |
| C09 | The Living Stack | Active / public surface | PARTIAL | 1 paper, poster. Cognitive reef architecture. |
| C10 | DRA / Drug Response × AI / Context × Intensity × Neurotype | Active draft family | STRONG | Google Doc, DRA_Paper_v1 copies, AISS_DRxAI HTML, Altered States workbook. Distinct clinical/workplace governance cluster. |
| C11 | ASAI / Altered States × AI | Active | PARTIAL | Methodology instrument, Altered States workbook, DRA overlap. Must be separated from DRA and Social Skills B. |
| C12 | CARE / Indigenous Cultural Safety | Planned / claimed validated conflict | PARTIAL / CONFLICT | Research Bible instrument, methodology card, poster/site claims. Status conflict: planning/current N=0 vs validated/adoption claims. |
| C13 | Thriving Kids / Child AI Development | Planned | PARTIAL | KIDS-SR instrument, Thriving Kids concept brief, products/pricing notes. Adult-system-around-child framing must be preserved. |
| C14 | GAIN / Gamified AI Natural Assessment | Active platform | PARTIAL | GAIN-CH instrument, ru-good-at-ai references, Chatter Index. Behavioural platform not survey. |
| C15 | AI Olympics | Planned | PARTIAL | OLYM-EN instrument, competition concept. Needs product/research separation. |
| C16 | RCT-2026 | Planned | PARTIAL | RCT-EL/RCT-FU and design spec aliases. Needs pre-registration and naming cleanup. |
| C17 | Social Skills A / Baseline RQ | Found dropped-off | STRONG | social-skills-A-paper.md, copies, web index references. Must be first-class. |
| C18 | Social Skills B / State-Conditional RQ | Found dropped-off | STRONG | social-skills-B-paper.md, DOCX, colour HTML, data/protocol references. Not the same study as A. |
| C19 | Study Passport / Registry Architecture | Found meta layer | STRONG | study passport docs, pull-it-together, pages missing. Governs final matrix design. |

## 5. Corrections to prior working assumptions

| Prior issue | Correction |
| --- | --- |
| Search was finding topics rather than assets | Actual assets were recovered: MD, DOCX, HTML, PDF, Google Docs, XLSX workbook families. |
| Social Skills had dropped off | Social Skills A and B were recovered and must be treated as first-class research. |
| DRA was treated too narrowly | DRA is a Context × Intensity × Neurotype / psychedelic medicine / clinical governance paper family. |
| Asset matrix kept collapsing | Study Passport explains correct architecture: studies, artefacts, packs, evidence. |
| 10-topic website looked complete | 10-topic website is one public surface, not the whole research canon. |
| Posters were treated as source of truth | Posters are artefacts. Papers, methodology, registries, and data/protocol files govern study content. |

## 6. Evidence-grade caution

Some recovered assets contain strong empirical claims. These must be labelled rather than accepted blindly.

| Claim family | Current label | Reason |
| --- | --- | --- |
| Methodology pack study plans | REAL as documented plans | Documents exist and describe methods. |
| Website paper summaries | REAL as website copy | Summaries exist; underlying data still needs validation. |
| 4,247 workplace participant claims | PARTIAL | Repeated across assets; dataset/source verification required. |
| 11,241 / 15,874 / 80K combined claims | PARTIAL | Appears in assets; needs canonical reconciliation. |
| CARE N=1,243 / OR=29.4 | CONFLICT | Some sources imply validated; methodology assets imply planning/current N=0. |
| Social Skills A/B existence | REAL | Markdown, DOCX, HTML and index references found. |
| DRA paper family existence | REAL | Google Doc, DOCX copies and HTML prototypes found. |
| Standalone INSTRUMENT_*.docx bundle | REFERENCED_NOT_FOUND | Still not found directly. |

## 7. Immediate extraction queue

| Priority | Next search / extraction | Why |
| ---: | --- | --- |
| 1 | `study-2-social-skills-A-full.json` and `study-2-social-skills-A-data-sample.csv` | Recover Social Skills A protocol/data files referenced by HTML. |
| 2 | `study-3-social-skills-B-full.json` and `study-3-social-skills-B-data-sample.csv` | Recover Social Skills B protocol/data files referenced by HTML. |
| 3 | Latest `DRA_Paper_v1` by updated_at and content | De-duplicate DRA paper copies. |
| 4 | Latest `AISS_DRxAI_Context_Intensity_Neurotype_v1.1.html` | Identify canonical HTML prototype. |
| 5 | `experiment-register-search.html` | Extract experiment registry UI/topic list. |
| 6 | `04_RESEARCH_IP_Registry_v1.0 (1).xlsx` | Compare older IP registry with v3/newer study registry. |
| 7 | `Ai sweet spots - pages missing` full extraction | Build public website paper/poster/insights manifest. |
| 8 | `RPT_ResearchAreas_Subtopics_10x9_20260225.csv` by content terms | Recover missing 10x9 subtheme CSV. |
| 9 | `Study 1 Brain Capital Data Sample` | Reconnect Brain Capital to Social Skills A/B and WorkFamilyAI. |
| 10 | `Relational Ops Layer Pilot` | Recover dropped business/pilot concept. |

## 8. Research Hub registry structure to implement next

The Research Hub should now use four linked tables or CSVs.

### 8.1 studies_registry

One row per study or research object.

Suggested columns:

```csv
study_id,canonical_title,short_title,cluster_id,theme_group,study_type,status,evidence_state,study_tagline,decision_this_helps_make,who_should_read,what_you_learn,what_you_can_do_after,evidence_grade,evidence_grade_reason,data_exists_summary,what_is_in_development,time_to_read,time_to_apply,risks_misread_traps,canonical_landing_url,primary_assets,next_action,notes
```

### 8.2 artefacts_registry

One row per asset/file/output.

Suggested columns:

```csv
artefact_id,study_id,artefact_role,asset_type,format,variant,status,source_system,source_locator,canonical_url,file_name,created_at,updated_at,version,checksum_sha256,access_level,license,owner,notes
```

Recommended `artefact_role` enum:

```text
one_pager,poster_main,poster_mini,paper_academic,paper_practitioner,methods_appendix,dataset_card,code_repo,teaser_linkedin,teaser_x,slides_talk,faq,press_kit,policy_brief,partner_playbook,html_demo,assessment,questionnaire,protocol_json,data_sample_csv
```

### 8.3 study_packs

One row per reader/use-case bundle.

Suggested columns:

```csv
pack_id,study_id,pack_name,intended_reader,pack_goal,min_read_path,asset_count,pack_completeness_score,missing_assets,notes
```

### 8.4 evidence_registry

One row per claim/evidence item.

Suggested columns:

```csv
evidence_id,study_id,claim_text,claim_type,evidence_state,source_asset_id,source_locator,validation_needed,conflict_flag,conflict_notes,next_action
```

## 9. Recovered website topic manifest from pages-missing

| Public topic | Papers | Notes |
| --- | ---: | --- |
| V2 Comprehensive Assessment | 0 | Product/assessment surface, not yet paper-backed in page capture. |
| AI Sweet Spots | 4 | Core discovery, population curves, performance crossovers, adaptive architecture. |
| From Curves to Consequences | 2 | Consequence and metrics layer. |
| Neurosymbolic Trust Architecture | 4 | Trust, explainability, audit, implementation. |
| AI Sweet Spots - Extended Study | 5 | Workplace longitudinal study and replication guide. |
| MyNeuralSignal | 4 | Neurosymbolic BCI and regulatory/compliance trust platform. |
| Extreme AI Effects | 4 | ADHD performance, Indigenous adoption, economic implications, high-stakes protocols. |
| Cognitive Architecture | 4 | Cognitive architecture optimisation, cultural frameworks, executive matching, implementation. |
| Unified Biological Intelligence | 4 | UBI framework, neurobiological protocols, EMF thresholds, tech safety certification. |
| The Living Stack | 1 | Cognitive reef architecture thesis. |

Total: 32 public-surface papers.

## 10. Social Skills recovery note

Social Skills must be restored as a first-class research cluster. It is not merely a subtopic of AI Sweet Spots.

Recommended treatment:

- C17 Social Skills A: Baseline Relational Intelligence.
- C18 Social Skills B: State-Conditional Relational Intelligence.
- C20 Brain Capital / Social Skills Economic Layer, pending recovery of `Study 1 Brain Capital Data Sample`.
- Product link: WorkFamilyAI / HoloOrg / Relational Ops Layer Pilot.
- Research link: Deming / FT social skills wage premium, cognitive profiles, RQ friction, AI scaffolding.

The Social Skills package also contains an HTML landing page and explicit links to JSON protocols and CSV sample data. Those referenced assets are high-priority for the next extraction cycle.

## 11. DRA/AISS recovery note

DRA should be handled as a full research branch:

- DRA / Drug Response × AI.
- Context × Intensity × Neurotype matrix.
- AI Sweet Spots workplace Green zone.
- Clinical/research Amber zone.
- Explicit Red zone for unacceptable workplace psychedelic + AI combinations.
- Links to ASAI / Altered States × AI and Social Skills B, but not collapsed into either.

This cluster has strategic value because it defines governance boundaries between scalable workplace AI supports and clinical-only pharmacological/psychedelic interventions.

## 12. Final closeout position

Search is complete enough for this pass. It should not be treated as full universe closure because Supabase, Notion, and some Drive folder listings remain unsearched. But the pass materially changed the research map.

The strongest current truth is:

- There is a substantial research corpus.
- It is fragmented across Drive, public site captures, HTML demos, DOCX/MD/PDF papers, workbook families, and earlier registries.
- The Research Hub needs registry architecture before more public-facing build work.
- Social Skills A/B and DRA/AISS are the most important recovered dropped-off clusters.
- Study Passport is the governing model for preventing future collapse.

## 13. Reality Ledger

```yaml
status: PARTIAL
result: "Deep extraction closeout written and stored in T4H Research Hub."
evidence:
  - type: github_commit
    value: "PENDING_COMMIT_SHA_AT_WRITE_TIME"
  - type: drive_search_results
    value: "10-cycle extraction results recorded from connected Drive searches"
gaps:
  - "Supabase not searched in this pass"
  - "Notion not searched in this pass"
  - "Some Drive searches hit 502"
  - "RPT_ResearchAreas_Subtopics_10x9_20260225.csv not recovered directly"
  - "Several data/protocol files referenced but not yet extracted"
next_action:
  - "Extract Social Skills A/B JSON and CSV data assets"
  - "De-duplicate DRA and AISS files"
  - "Compare 04_RESEARCH_IP_Registry_v1.0 with public website manifest"
  - "Implement studies_registry, artefacts_registry, study_packs, evidence_registry"
elevation:
  - "Do not flatten research into posters or public site topics. Preserve study/artefact/pack/evidence separation."
pressure_flags:
  - "Avoid shorthand summaries"
  - "Avoid treating public claims as validated data without source reconciliation"
  - "Avoid dropping Social Skills and DRA again"
score: 0.96
```
