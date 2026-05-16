# Session Notes — Sweeper, Integrity Stack, Domain/Document Library, MAAT/Supabase

## Status
PARTIAL. Notes captured from live session. Integrity Stack URL could not be fetched directly in current environment, so this file records the requirement and known architecture from the user-supplied text.

## Immediate user intent
The user asked for strong notes before session loss. The focus is not polished writing. The focus is preserving operational instructions for the Research OS, sweeper, document library, Integrity Stack, domain list, MAAT/Supabase search, and prior document count.

## What the user corrected
The user asked whether there was a question before the story interruption. Yes. The active thread before the story was the Chat History Sweeper and the Researcher search process.

The question being answered was effectively:
- How do we make sure the chat history is documented, searched, swept, and converted into research/data/evidence rather than lost?
- How does the researcher search LLM chats first, not just IT/system terms?
- How does the sweeper detect hidden value, surprise, novelty, reframing, business emergence, and research lineage?

## Current sweeper answer
The sweeper is not a passive archive. It is a conversion pipeline:

CHAT -> SIGNALS -> INTENTS -> CLAIMS -> ASSETS -> TASKS -> EVIDENCE -> RECEIPTS -> STUDY OBJECTS -> GAPS -> NEXT ACTIONS

### Sweeper stages
0. Signal Anthropology
   - detect surprise, tension, novelty, reframing, energy shifts, repeated returns, and future-value signals.

1. Intent Extraction
   - extract explicit asks, inferred asks, decisions, approvals, handoffs, and promised actions.

2. Research Archaeology
   - search LLM chats first for origins, pivots, aliases, split/merge events, study births, and abandoned work.

3. Study Binding
   - bind fragments to Research Stream, Research Effort, Study Instance, Asset, Evidence and Rule objects.

4. Obligation Audit
   - detect phrases such as send to bridge, hand over, deploy, get receipt, done, close.
   - verify if GitHub/Bridge/receipt exists.

5. Orphan Recovery
   - classify unclosed work as ORPHANED, DRIFTED, PARTIAL, BLOCKED, STALE, or REPLAY.

6. Chronology Update
   - convert important shifts into date/source/why/evidence rows.

7. Research OS Update
   - update matrix rows, question-bank boxes, maturity scores, study pages and next queue.

## LLM Chat First Doctrine
Priority order for research reconstruction:
1. LLM chat histories
2. GitHub commits/issues/receipts
3. Google Drive documents
4. Supabase/MAAT/system tables
5. Websites and deployed apps
6. Calendar/email and other corroborating systems

Reason:
- Chats contain intent, uncertainty, pivots, surprise, naming evolution, research emergence, decision reasoning, and early signals.
- Systems contain execution proof.
- Both are needed, but chats explain why.

## Search language correction
Researchers must not search only for IT terms. Many valuable objects are hidden under business, human, research and future-value terms.

### Required keyword families
Business / research terms:
- MAAT
- research
- grant
- R&D
- RDTI
- ATO
- AusIndustry
- participant
- support
- pathway
- agency
- cognition
- trust
- memory
- identity
- social media
- child protection
- signals
- sweet spots
- black spots
- inclusion
- caregiver
- autism
- ADHD
- neurodiversity
- work
- family
- learning
- wellbeing
- NDIS
- Outcome Ready
- WorkFamilyAI
- ConsentX
- LifeGraph
- MyNeuralSignal
- GC-BAT
- Integrity Stack

Emergence terms:
- became
- evolved
- split
- changed
- renamed
- extension
- pivot
- eventually
- originally
- later
- led to
- inspired
- spawned
- not about X anymore
- this changes everything

Human uncertainty / novelty terms:
- maybe
- not sure
- weird
- concern
- issue
- experiment
- trying
- hypothesis
- thought
- problem
- hang on
- wait
- I did not expect
- interesting
- surprising

Future value terms:
- reusable
- should become
- could sell
- framework
- template
- giveaway
- public
- standard
- governance
- public-good
- productised
- fundable
- commercialise

## Signal Anthropologist fields
Each chat or fragment should be scored for:
- surprise_score
- energy_shift
- repetition_score
- reframing_event
- novelty_claim
- business_signal
- science_signal
- agency_signal
- emotional_pattern
- trajectory_strength
- later_became_important
- worldview_bias
- ignored_signal
- local_truth_risk

## Important research observation to preserve
The user described perceived differences across sessions, models, server refreshes, connector availability and tool maturity. This should be treated as a research signal, not a complaint.

Candidate object:
RSR-Cognitive Drift and Signal Interpretation in Human + AI Systems

Hypothesis:
Different model states, retrieval sources, tool availability, partner layers, memory contexts and deployment conditions create different ways of hearing the same signal. This mirrors human organisational bias where each function hears what matters to them.

Links:
- AI Sweet Spots
- 10x10x10 organisational signal model
- IFADS
- WorkFamilyAI
- Memory Steward
- Signal Anthropologist

## Integrity Stack note
The user referenced: https://myneuralsignal.gcbat.org/integrity-stack

Direct fetch failed in current environment. Requirement: retrieve through GitHub/Supabase/Bridge if not accessible by public web.

Known user-supplied layer structure:
1. Universal Biological Integrity
   - biological truth baseline
   - EEG, HRV, EDA, cortisol, pupil dilation, biometric data

2. MyNeuralSignal
   - real-time signal integrity engine
   - signal capture -> neural feature extraction -> symbolic reasoning -> trust and action
   - sub-200ms processing target
   - explainability through knowledge graphs and symbolic rules

3. ID Exchange
   - identity and credentials
   - verified biological states into portable cryptographic identity proofs

4. ConsentX
   - multi-actor consent resolution
   - cross-system, cross-party, cross-jurisdiction consent validation

5. NEUROPAK
   - intent orchestration
   - cognitive intent validation before high-risk action
   - emotional readiness, decision capacity, context appropriateness

6. Tech 4 Humanity
   - ecosystem guidance
   - adoption and ethical alignment across business, government and civil society

7. GCBAT
   - governance and audit
   - oversight, transparency, accountability, compliance feedback

8. Validated Execution
   - ethical auditable action across autonomous systems, software and environments

## Important Integrity Stack instruction
The user says the work goes beyond the currently visible Integrity Stack. Some layers may look like make-believe to outsiders. That must be handled through research maturity, not overclaiming.

Rule:
- Visible/working layer = present as current.
- Speculative/future layer = mark as future, theory, design, or research direction.
- Never pretend a future layer is already real.

## National security / defence / police / public safety layer
Add as first-class research surfaces, not only product surfaces.

These connect in reverse sequence through:
- identity
- consent
- trust
- signal integrity
- memory continuity
- biological sovereignty
- auditability
- validated execution

Potential research stream:
RSR-High Trust Systems, Public Safety and Agency Preservation

Potential surfaces:
- ConsentX
- LifeGraph+
- MyNeuralSignal
- Integrity Stack
- GC-BAT
- NEUROPAK
- public safety scenarios
- national security / defence / police governance

## Domain list requirement
Need a full domain inventory, likely already present in GitHub/Supabase/master registry.

If not directly available, ask Bridge to retrieve:
- domains
- subdomains
- registrars
- expiry dates
- DNS providers
- Vercel mappings
- GitHub repos
- Supabase project refs
- S3/static pages
- Stripe/product links where applicable

Search locations:
- master_registry
- t4h_business_registry
- domain registry tables
- GitHub site lists
- Vercel project exports
- Supabase registry tables

## Document library / 121-document count
The user believes a prior count stopped at around 121 documents and that the 500-page plan may actually be made of roughly 121 document objects, not 500 independent pages.

Researcher task:
Search for existing tables/counts/numbers that already define:
- document library
- asset registry
- artifact registry
- master asset matrix
- evidence matrix
- 121 documents
- 64 research papers / 8 streams
- 100 evidence rows
- 15 R&D evidence matrix rows
- 8 R&D activity statements
- 4,073 LLM conversations
- 121 R&D-tagged chats
- 194 financial transactions
- 94 IP assets

Do not start from zero. Search first.

## MAAT / Supabase requirement
User says the MAAT system likely already has data set aside for this.

Known MAAT targets:
- maat_transactions
- maat_rd_projects
- maat_rd_project_rules
- maat_classification_rules
- R&D eligible transaction flags
- cost surface / apportionment logic
- financial linkage to activities

If Supabase is not directly accessible, route through Bridge.

Bridge instruction should request:
- table list for MAAT/RDTI/research/evidence/domain/artifact/product registries
- row counts
- schema summaries
- sample rows only where safe
- export as CSV/JSON/MD to GitHub

## Required Bridge ask
Create a Bridge handoff to inspect Supabase and return:
1. tables matching: maat, rd, rdt, evidence, claim, artifact, asset, domain, registry, chat, conversation, ip, product, pricing, stripe, business
2. row counts
3. schema columns
4. candidate tables for Research OS Express Shell
5. candidate tables for domain list
6. candidate tables for 121-document/document-library count
7. candidate tables for MAAT/RDTI finance linkage
8. candidate tables for LLM chat archaeology

## Research OS document types likely needed
1. Project Spine
2. Constitution
3. Research Atlas
4. Agency Map
5. Integrity Stack lineage page
6. Domain Inventory
7. Master Artifact Registry
8. Master Asset Matrix
9. Study Object Template
10. Question Bank
11. Rules Engine
12. ATO/DISR Rule Map
13. MAAT Finance Linkage
14. Evidence Register
15. Claim Boundary Matrix
16. Chronology / Maturity Timeline
17. Document Library Index
18. Chat History Sweeper Spec
19. LLM Chat Archaeology Index
20. Signal Anthropology Dictionary
21. Research Method Evolution Note
22. Public-Good / Reusable Asset Doctrine
23. National Security / Public Safety Research Surface
24. Identity / Consent / Trust Research Surface
25. Whiteboard-to-Atlas Visual Map
26. Appendix Store
27. Scratchpad / Intake Inbox
28. Failure -> Repair Table
29. Intent Fidelity Log
30. Bridge/Supabase Inspection Handoff

## Last active question before story interruption
The user asked: What are we doing with the sweeper?

Answer:
The sweeper is the mechanism that turns chat history and scattered research into structured rows, study objects, evidence, chronology and next actions. It must search chats first, detect surprise/reframing/novelty, extract intent, bind to studies, check receipts, recover orphans, and push updates into GitHub/Research OS.

## Reality Ledger
status: PARTIAL
result: Session notes captured and preserved as GitHub-backed continuity notes.
evidence: current user instructions and GitHub commit receipt.
gaps: Integrity Stack not fetched; Supabase/MAAT not inspected; domain list not retrieved; 121-document count not verified; Bridge handoff not yet executed.
next_action: create Bridge handoff for Supabase/MAAT/domain/document/library inspection and create seeded Express Shell HTML.
elevation: High
pressure_flags: session loss risk, audit pressure, chat-history gold not yet processed, Supabase dependency, document-count uncertainty.
score: 0.82
