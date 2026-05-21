# One Rollup / Novel Research Workbook Update

Date: 2026-05-21
Owner: Troy Latter / Tech 4 Humanity
Status: PARTIAL, workbook artifact updated and rollup documented
Workbook artifact: `RPT_AISweetSpots_ResearchWorkbook_OneRollupNovelResearch_20260521.xlsx`

## 1. What was requested

Create one roll-up to GitHub and update the workbook so all novel research directions can sit in the back of the workbook as one operating format.

The instruction was not to worry about whether the count is 43, 47, 48 or 50. The important thing is that all items are listed, directed, classifiable, mappable visually, and resource-plannable.

The workbook should support:

- research,
- possible research,
- dev research,
- novel research directions,
- maturity movement,
- business alignment,
- resource planning,
- IP and asset linkage,
- discard/bin handling without deletion.

## 2. What was done

Created a new workbook artifact based on the existing governance workbook and added back-of-workbook control tabs:

- `ONE_ROLLUP`
- `NOVEL_RESEARCH_REGISTER`
- `BUSINESS_ALIGNMENT`
- `RESEARCH_STAGE_GATES`
- `DISCARDED_RESEARCH_BIN`
- `ROLLUP_CHANGE_NOTE`

The existing workbook governance tabs remain intact:

- `STUDY_ON_A_PAGE`
- `ARTEFACT_MANIFEST`
- `CLAIM_LEDGER`
- `SURFACE_REGISTRY`
- `RISK_SAFEGUARD_REGISTER`
- `SOURCE_OF_TRUTH_MAP`
- `NAMING_CONVENTIONS`
- `RECEIPT_LEDGER`
- `CHANGE_LOG_PASSBOOK_UPDATES`

## 3. New workbook tabs

### ONE_ROLLUP

Purpose: a single executive count and direction view.

Captured rough operating counts:

- Core 9x9x9 / front-page subtopics: approximately 90-100.
- Novel Research Directions observed: approximately 43 visible / 47 declared.
- Additional novel items: approximately 16 distinct.
- Total research objects to govern: approximately 59+.

Important interpretation:

The 9x9x9 is the terrain / capability map. Novel Research Directions are the expeditions / research bets. They should be linked, not collapsed.

### NOVEL_RESEARCH_REGISTER

Purpose: one row per Novel Research Direction or related research object.

It includes known recovered items such as:

- CalmBound — Family Boundary Enforcement Research.
- The Rhythm Method — Artist Intelligence & Comparison System.
- AI Sludge in Public Systems — Australia Series.
- AI in Australian Healthcare Systems.
- ConsentX / Dynamic Consent.
- Neural Evolution Simulator.
- GC-BAT Foresight & Neuro-Governance.
- Cognitive Portfolio Theory.
- Sweet Spot Drift as Biomarker.
- EXT-PSYCHEDELICS-WORKPLACE.
- Forty-Seven / Forty-Three Novel Research Directions.
- Brain Capital Economic Model.
- Social Skills A — Baseline Relational Intelligence.
- Social Skills B — State-Conditional Relational Intelligence.
- Thriving Kids Sweet Spot Support Layer.
- Relational Ops Layer Pilot.

It also includes 43 visible pipeline placeholders using the visible domain count structure:

- BIO-1..8 = 8.
- ARCH-1..5 = 5.
- TEMP-1..5 = 5.
- SOC-1..4 = 4.
- CLIN-1..6 = 6.
- ALT-1..4 = 4.
- THEO-1..5 = 5.
- COM-1..6 = 6.

Total visible placeholder count: 43.

Fields include:

- `nrd_id`
- `canonical_name`
- `object_grain`
- `novelty_stage`
- `research_status`
- `hypothesis`
- `research_question`
- `primary_business`
- `secondary_businesses`
- `target_population`
- `outcome_measures`
- `evidence_status`
- `score_basis`
- maturity dimensions
- `maturity_score`
- `signal_score`
- `multi_business_impact`
- `monetisation_model`
- `price_band_aud`
- `readiness_gate`
- `public_safe_status`
- `ip_status`
- `source_of_truth`
- declared/observed count fields
- `lifecycle_status`
- `discard_reason`
- `revival_conditions`
- `notes_next_direction`

### BUSINESS_ALIGNMENT

Purpose: show how Novel Research Directions map across the T4H ecosystem.

The first alignment pass maps high-leverage items to businesses such as:

- AI Sweet Spots.
- WorkFamilyAI.
- Outcome Ready.
- Reading Buddy.
- ConsentX.
- GC-BAT.
- MyNeuralSignal.
- DRA.
- HoloOrg.
- Tech4Humanity.
- HealthFlow.

This is the start of the visual/resource mapping layer.

### RESEARCH_STAGE_GATES

Purpose: define how research moves without disappearing.

Gates added:

- Problem defined.
- Hypothesis written.
- Measure defined.
- Data ready.
- Method chosen.
- MVP / artefact built.
- Pilot running.
- Results recorded.
- Reproducible.
- Publishable.
- Productisable.
- Discard / Bin.

### DISCARDED_RESEARCH_BIN

Purpose: preserve discarded research as evidence of research discipline.

Rule: do not delete. Mark as `DISCARDED`, capture reason, discarded date, discarded by, and revival conditions.

### ROLLUP_CHANGE_NOTE

Purpose: brief workbook-internal explanation of what changed.

## 4. Design decisions

### Rename spares/pipeline

Old words avoided:

- spare,
- pipeline,
- orphan,
- leftover.

Preferred object:

- **Novel Research Direction**.

Maturity is handled through stage, not identity:

- `NOVEL`
- `EXTENSION`
- `APPLIED_HYPOTHESIS`

Research state is separate:

- `research`
- `possible research`
- `dev research`

### Preserve uncertainty

Counts are not treated as sacred. Completeness and direction matter more than whether the visible count is 43, 47, 48 or 50.

The workbook now records declared, observed and variance fields so contradictions become visible rather than blocking progress.

### One workbook format, not one flat truth table

The workbook is allowed to contain everything as a format, but the control model still separates:

- study rows,
- artefacts,
- claims,
- surfaces,
- risks,
- receipts,
- business alignment,
- discarded rows.

This prevents the one-table runaway pattern.

## 5. Runaway controls applied

The workbook update responds to the runaway risks found in the Decision Record review:

| Risk | Workbook control added |
| --- | --- |
| One table absorbs everything | Separate tabs for register, claims, artefacts, surfaces, risks, receipts and alignment |
| Pipeline/spare terminology drift | Standardised as Novel Research Directions |
| Count mismatch 43 vs 47 | Added declared/observed/variance count fields |
| False precision in scoring | Added `score_basis` field |
| Mixed grain objects | Added `object_grain` field |
| Business alignment becomes unbounded | Added `primary_business`, `secondary_businesses` and `BUSINESS_ALIGNMENT` |
| Discarded research disappears | Added `DISCARDED_RESEARCH_BIN` |
| IP/resource planning missing | Added IP status, source of truth, monetisation, price band and readiness fields |

## 6. What still needs doing

The workbook now has the right operating format, but the content is not fully complete.

Next work:

1. Replace the 43 pipeline placeholders with exact titles, hypotheses and evidence pulled from the source page.
2. Populate source URLs / Drive IDs / GitHub paths for all known directions.
3. Link each Novel Research Direction to the IP ledger.
4. Add artefact IDs where papers, posters, demos, datasets or protocols exist.
5. Populate actual maturity scores from evidence, not estimates.
6. Add resource assumptions per direction: effort weeks, owner, budget, dependencies.
7. Create a visual portfolio map from `BUSINESS_ALIGNMENT`.
8. Reconcile Novel Research Directions against the 9x9x9 terrain map.
9. Mark discard candidates only after review, with reason and revival conditions.

## 7. Reality Ledger

```yaml
status: PARTIAL
result: "One-rollup novel research workbook update created. Workbook now includes Novel Research Register, business alignment, stage gates, discard/bin, and executive rollup."
evidence:
  - type: workbook_artifact
    value: "RPT_AISweetSpots_ResearchWorkbook_OneRollupNovelResearch_20260521.xlsx"
  - type: github_file
    value: "research-closeouts/2026-05-21-one-rollup-novel-research-workbook-update.md"
gaps:
  - "Workbook file itself is attached in chat, not committed to GitHub as binary in this step"
  - "43 visible pipeline items are placeholders pending exact extraction"
  - "Real IP ledger, artefact IDs, Drive IDs and source URLs remain to populate"
  - "Maturity scores are estimated/inferred until evidence is bound"
next_action:
  - "Extract exact Novel Research Direction titles from source page"
  - "Populate artefact/source/IP fields"
  - "Build business/resource visual map"
  - "Create final registry import schema after workbook review"
elevation:
  - "Novel Research Directions are the research bets; 9x9x9 is the map. Keep both in one workbook format without collapsing their meaning."
pressure_flags:
  - "Do not obsess over 43 vs 47 counts before preserving the items"
  - "Do not delete discarded studies"
  - "Do not let estimated maturity scores masquerade as measured evidence"
score: 0.94
```
