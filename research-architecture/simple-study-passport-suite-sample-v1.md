# Simple Study Passport Suite — Sample v1

Date: 2026-05-21
Purpose: show what the research governance suite looks like in practice.

This is the simple version.

A study is not just a paper. A study has a one-page card, evidence, assets, packs, public surfaces, gaps, and receipts.

## 1. The suite at a glance

| Layer | Simple name | What it answers |
|---|---|---|
| 1 | Topic Card | What broad research area is this? |
| 2 | Study Passport | What is this specific study, in one page? |
| 3 | Evidence Card | What can we safely claim? |
| 4 | Artefact List | What files/assets exist? |
| 5 | Pack List | What bundle goes to which audience? |
| 6 | Surface List | Where does this show up publicly or internally? |
| 7 | Product Gate | Can this become a pilot/product? |
| 8 | Gap List | What is missing? |
| 9 | Receipt | What actually happened and where is the proof? |

Simple flow:

```text
Topic → Study Passport → Evidence → Artefacts → Packs → Surfaces → Product → Gaps → Receipts
```

## 2. Sample Topic Card

```yaml
topic_id: TOPIC-SOCIAL-SKILLS
topic_name: Social Skills / Relational Intelligence
why_it_exists: >
  AI is making routine cognitive work cheaper, which makes relational intelligence more valuable.
  But relational intelligence is not one-size-fits-all. It shows up differently across ADHD,
  autism, dyslexia, elderly workers and neurotypical workers.
related_products:
  - WorkFamilyAI
  - HoloOrg
  - Relational Ops Layer Pilot
  - AI Sweet Spots
status: active_recovered
next_action: create full Study Passports for Social Skills A and B
```

## 3. Sample Study Passport — one-page card

```yaml
study_id: STUDY-SS-A
short_title: Social Skills A — Baseline RQ
canonical_title: Relational Intelligence Across Cognitive Profiles
status: found_dropped_off
evidence_state: PARTIAL_RESEARCH_REAL_ASSETS
one_line_summary: >
  Social skills are becoming more valuable in the labour market, but standard social-skills
  training assumes neurotypical norms. This study maps relational strengths and friction points
  across cognitive profiles and identifies where AI should scaffold communication.
```

### Decision this helps make

Should WorkFamilyAI / HoloOrg treat relational intelligence as a measurable capability layer across roles and cognitive profiles?

### Who should read it

| Reader | Why |
|---|---|
| CEO / Founder | Understand the commercial moat around relational operations |
| CHRO / People Leader | Improve inclusion, retention, onboarding and team design |
| Product Lead | Convert RQ skills into WorkFamilyAI features |
| Research Lead | Validate RQ as a measurable cognitive-diversity domain |
| Marketing / PR | Explain why AI makes human relational skill more valuable |

### Core idea

| Cognitive profile | Strength | Friction | AI scaffold |
|---|---|---|---|
| Neurotypical | Reads cues easily | Can miss unconventional perspectives | Perspective expansion |
| ADHD | High-energy rapport | Sustained attention and sequencing | Meeting scaffolding |
| Autism | Deep content listening | Implicit cue reading | Social cue translation |
| Dyslexia | Storytelling and persuasion | Written communication speed | Communication assist |
| Elderly | Wisdom and de-escalation | Processing speed | Pre-digestion and extended response windows |

### What you can do after reading

| Action | Output |
|---|---|
| Map roles by RQ demand | Identify jobs needing listening, disagreement, rapport and trust skills |
| Map cognitive profile strengths | Show where neurodivergent workers may outperform conventional expectations |
| Design AI scaffolds | Build meeting, message, disagreement and trust-building tools |
| Build pilot | Run a 6-8 week Relational Ops Layer pilot |
| Create product modules | Turn RQ skills into WorkFamilyAI / HoloOrg widgets |

## 4. Evidence Card — simple sample

| Claim | Evidence state | Can say publicly? | Notes |
|---|---|---|---|
| Social Skills A paper exists | REAL_ASSET_EXISTS | Yes | Markdown / landing package found in extraction |
| Social skills wage premium matters | PARTIAL_SOURCE_LINKED | Yes, with Deming/FT citation | Needs clean citation card |
| AI can scaffold RQ by cognitive profile | PARTIAL_RESEARCH | Yes, as thesis | Needs pilot evidence before strong quantified claims |
| RQ pilot can reduce meeting friction | PLANNED | Not as proven | Can present as pilot hypothesis |
| Social Skills A has JSON/CSV data sample | REFERENCED_NOT_EXTRACTED | No | Referenced in HTML, still needs extraction |

## 5. Artefact List — simple sample

| Artefact | Type | Status | What it is for |
|---|---|---|---|
| social-skills-A-paper.md | Paper | Found | Main research narrative |
| social-skills-A-paper.docx | Paper editable | To verify | Editable version |
| Social Skills landing index.html | Website/demo | Found | Public/internal landing page |
| study-2-social-skills-A-full.json | Protocol/data | Referenced, not extracted | Structured study object |
| study-2-social-skills-A-data-sample.csv | Data sample | Referenced, not extracted | Sample dataset |
| Social Skills A poster | Poster | Needed | Visual summary |
| Executive one-pager | Brief | Needed | Board/partner summary |
| Relational Ops Layer pilot pack | Product pack | Needed | Commercial pilot package |

## 6. Pack List — simple sample

| Pack | Audience | Includes | Status |
|---|---|---|---|
| Executive Pack | CEO / Board / Partner | Study Passport, one-pager, poster, product pilot summary | Needed |
| Research Pack | Academic / evaluator | Paper, method note, evidence card, dataset card | Partial |
| Product Pack | WorkFamilyAI / HoloOrg | Pilot scope, KPI set, feature map, pricing | Needed |
| Website Pack | Public Research Hub | Short page, poster, allowed claims, references | Needed |

## 7. Surface List — simple sample

| Surface | URL / location | Allowed role | Status |
|---|---|---|---|
| T4H Research Hub | GitHub / Research Hub | Canonical registry and governance | Active |
| sweetspots.workfamilyai.org | Public/demo site | Presentation only | Needs repair/review |
| aisweetspots.com | Public brand/site | Public communication | Needs source alignment |
| Google Drive Public Kit | Drive folder | Raw/public kit storage | Needs manifest |
| LinkedIn article | LinkedIn | Storytelling and demand creation | Optional |

## 8. Product Gate — simple sample

Product candidate: Relational Ops Layer Pilot.

| Gate question | Current answer |
|---|---|
| Buyer defined? | Yes: HR, transformation, workforce, enterprise ops |
| Problem defined? | Yes: RQ friction, retention risk, meeting inefficiency |
| Evidence sufficient to pilot? | Yes, as research-backed pilot hypothesis |
| Evidence sufficient to sell as proven? | No |
| KPIs defined? | Partially: meeting friction, retention risk, admin load, trust signals |
| Risks listed? | Partially: surveillance, neurotype stereotyping, overclaiming |
| Next action | Create pilot pack and KPI sheet |

## 9. Gap List — simple sample

| Gap | Severity | Next action |
|---|---|---|
| JSON protocol referenced but not extracted | High | Find and extract study-2-social-skills-A-full.json |
| CSV sample referenced but not extracted | High | Find and extract study-2-social-skills-A-data-sample.csv |
| Evidence claims not fully source-carded | High | Create Evidence Card v1 |
| Poster missing | Medium | Create poster from Study Passport |
| Pilot pack missing | High | Create Relational Ops Layer Pilot pack |
| Website surface broken / misaligned | High | Repair after registry is stable |

## 10. Receipt — simple sample

```yaml
receipt_id: RECEIPT-SS-A-SAMPLE-20260521
action: created_simple_suite_sample
status: REAL
system: GitHub
repo: TML-4PM/t4h-research-hub
path: research-architecture/simple-study-passport-suite-sample-v1.md
next_action:
  - create full Study Passport template
  - instantiate Social Skills A passport
  - instantiate DRA passport
```

## 11. What this looks like operationally

For every study, we should be able to open one page and see:

1. What it is.
2. Why it matters.
3. What evidence exists.
4. What assets exist.
5. What packs exist.
6. Where it is published.
7. Whether it can become a product.
8. What is missing.
9. What proof exists that work happened.

That is the simple operating model.
