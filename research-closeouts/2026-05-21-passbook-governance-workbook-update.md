# Passbook / Study-on-a-Page Governance Workbook Update

Date: 2026-05-21
Owner: Troy Latter / Tech 4 Humanity
Status: PARTIAL, workbook update prepared and governance deltas documented
Related workbook: `RPT_AISweetSpots_ResearchWorkbook_GovernancePassbookUpdates_20260521.xlsx`

## 1. What was read

Reviewed the uploaded AI Sweet Spots research workbook structure. The workbook is already strong as a research/finance/activity workbook. It contains the main research activities and operational tabs for:

- START_HERE.
- RESEARCH_ACTIVITY_INDEX.
- Individual research activity worksheets, including ASS Core, DRA, Brain Capital, Social Skills/RQ, Thriving Kids/Reading Buddy and Longitudinal Follow-up.
- MASTER_QUESTION_BANK.
- SCORING_ENGINE.
- OVERALL_ROLLUP.
- FINANCE_BUSINESS_MODEL.
- PARTICIPANTS_LOCATIONS_TOOLS.
- DATA_RETENTION_OPTIONS.
- EXTERNAL_ASSETS.
- DERIVATIVE_ASSET_FACTORY.
- METHODOLOGIES.
- SCIENTIFIC_VALIDATION.
- PUBLICATION_PLAN.
- STUDY_ASSETS_CHECKLIST.
- READINESS_LEDGER.

Conclusion: the workbook is not weak. It already captures research activity, finance, questions, scoring, validation, retention, publication and asset checklists. What was missing was the governance/IP/control layer that connects research studies to artefacts, public claims, source systems, surfaces, products, naming rules and receipts.

## 2. What was missing from the workbook

The missing fields and control structures came from the Study Passport / governing artefact suite work.

Missing or under-represented fields:

- Study Passport ID.
- Stable Study ID linked to IP Ledger.
- Decision this study helps make.
- Who should read this.
- What you can do after reading.
- Evidence state.
- Evidence grade reason.
- Allowed public claims.
- Blocked claims.
- Claim source asset.
- Conflict flag.
- Artefact ID.
- Artefact role.
- Source system.
- Source locator / URL.
- Canonical flag.
- Version / duplicate status.
- Surface registry.
- Study pack name.
- Pack audience.
- Pack completeness score.
- Productisation gate.
- Buyer / use case.
- Pilot KPI set.
- Risk and safeguard card.
- Misread traps.
- Source-of-truth hierarchy.
- Receipt ID.
- Commit SHA / URL.
- Drive file ID.
- Public-safe status.
- IP ledger link.
- Naming convention.

These are not decorative fields. They are the fields that stop public websites, posters, copied documents and workbook claims from drifting apart.

## 3. What was done

Created an updated workbook artifact with new governance/control tabs added:

- `STUDY_ON_A_PAGE`.
- `ARTEFACT_MANIFEST`.
- `CLAIM_LEDGER`.
- `SURFACE_REGISTRY`.
- `RISK_SAFEGUARD_REGISTER`.
- `SOURCE_OF_TRUTH_MAP`.
- `NAMING_CONVENTIONS`.
- `RECEIPT_LEDGER`.
- `CHANGE_LOG_PASSBOOK_UPDATES`.

The updated workbook is intended as the bridge between the research activity workbook and the Research Hub control architecture.

## 4. Why these tabs matter

### STUDY_ON_A_PAGE

Purpose: one-row/control-card view of a study.

This is the human-facing Study on a Page. It provides the short, visual dashboard layer: study ID, study name, decision supported, who should read it, evidence grade, public claim status, control links and next action.

It leaves room for the required link panel:

- IP Ledger.
- Artefact Manifest.
- Claim Ledger.
- Evidence Card.
- Drive.
- GitHub.
- Website surface.
- Product/pilot pack.
- Risk card.
- Receipt.
- Naming convention.

### ARTEFACT_MANIFEST

Purpose: one row per paper, poster, CSV, JSON, HTML, DOCX, PDF, prototype, deck or data object.

This is the asset control layer. It records artefact role, asset type, format, source system, locator, status, canonical flag, public flag, IP ledger link and notes.

This prevents a poster, website or copied DOCX from being treated as the study.

### CLAIM_LEDGER

Purpose: one row per metric or claim.

This controls public language. It records claim text, claim type, evidence state, source asset, whether it can be used publicly, conflict flags and validation needed.

This is critical because the AI Sweet Spots corpus contains conflicting or unreconciled numbers across public pages, posters, methodology workbooks and research documents.

### SURFACE_REGISTRY

Purpose: one row per public or internal surface.

This tracks where studies and claims appear: Research Hub, aisweetspots.com, sweetspots.workfamilyai.org, Vercel apps, Drive public kits, LinkedIn posts, widgets and future dashboards.

It defines allowed and blocked claims for each surface.

### RISK_SAFEGUARD_REGISTER

Purpose: one row per sensitive study trigger.

Mandatory for children, disability, neurodivergence, Indigenous data, health, drugs, psychedelics, workplace scoring, hiring, BCI, identity or consent.

This protects DRA, Thriving Kids, CARE, Social Skills/RQ and workplace pilots from being over-positioned or misused.

### SOURCE_OF_TRUTH_MAP

Purpose: define what source wins when assets conflict.

Rules captured:

- Receipt Ledger / GitHub commit wins for execution truth.
- Research Hub registry wins for current study state.
- Claim Ledger wins for public claims.
- Artefact Manifest wins for file identity.
- Surface Registry wins for website/public surface language.
- IP Ledger wins for ownership and commercial rights.
- Posters and public pages are presentation surfaces, not sources of truth.
- Chat history is a discovery trail, not canonical evidence.

### NAMING_CONVENTIONS

Purpose: connect file naming to study IDs, artefact IDs, claim IDs, surface IDs and receipts.

This creates a bridge to the IP ledger and prevents loose files from becoming orphaned.

### RECEIPT_LEDGER

Purpose: prove what happened.

Includes prior GitHub receipts for the governing artefact suite and simple Study Passport sample, and a workbook update receipt placeholder for this pass.

### CHANGE_LOG_PASSBOOK_UPDATES

Purpose: record what changed, why it changed and which passbook variation it relates to.

This is the audit trail for the change itself.

## 5. Variations of the passbook / passport concept

The work now has several related but distinct forms. They should not be confused.

| Name | Best use | Description |
| --- | --- | --- |
| Study on a Page | Human / executive view | A one-page dashboard/control card for a study. Best public/internal summary format. |
| Study Passport | Machine-readable study object | Underlying structured object with fields, evidence, artefacts, risks and next actions. |
| Research Control Card | Governance view | Stronger language for audit/IP/control environments. |
| Study Passbook | Collection view | A bundle of passports, receipts and stamps across a study lifecycle. Useful when tracking many assets over time. |
| Evidence Card | Claim-level view | One card per major claim or metric. Controls public-safe language. |
| Artefact Manifest | Asset-level view | One row per file/asset. Controls document chaos and version drift. |
| Study Pack | Audience bundle | Executive pack, research pack, product pack, website pack, policy pack, etc. |
| Surface Registry | Publication/control view | Tracks websites, pages, widgets and public locations. |
| Productisation Gate | Commercial view | Determines whether a study can become a pilot, product or offer. |

Recommended naming:

- Use **Study on a Page** for the visual one-page human document.
- Use **Study Passport** for the structured object behind it.
- Use **Study Passbook** for a lifecycle bundle of passports, evidence cards, artefacts and receipts.
- Use **Research Control Card** when presenting to audit, IP, governance or board audiences.

## 6. What still needs doing

The workbook update creates the missing tabs and representative rows. It does not yet fully operationalise the system.

Open work:

- Populate all new tabs with real IDs, links, owners and source locators.
- Connect each research activity row to a Study Passport ID.
- Connect each study to an IP Ledger ID.
- Add real Drive file IDs and GitHub paths to the Artefact Manifest.
- Add real allowed/blocked claims to the Claim Ledger.
- Add risk cards for DRA, CARE, Thriving Kids, Social Skills/RQ and workplace scoring.
- Create first complete Study on a Page for Social Skills A.
- Create first complete Study on a Page for DRA / Context × Intensity × Neurotype.
- Build the final one-page visual template using the workbook fields.
- Reconcile public website claims against the Claim Ledger.
- Add data/protocol files when extracted, especially Social Skills A/B JSON and CSV references.

## 7. Change summary

| Area | Before | After |
| --- | --- | --- |
| Workbook role | Research/finance/activity workbook | Research workbook plus governance/IP control layer |
| Study summary | Spread across activity tabs | `STUDY_ON_A_PAGE` control card tab added |
| Asset tracking | Checklist style | `ARTEFACT_MANIFEST` with IDs, roles, source system, canonical/public flags |
| Claim control | Implicit in validation/readiness | `CLAIM_LEDGER` with allowed/blocked public claims |
| Website/public control | Not explicit | `SURFACE_REGISTRY` added |
| Risk/safeguards | Present in places but not central | `RISK_SAFEGUARD_REGISTER` added |
| Source-of-truth | Informal | `SOURCE_OF_TRUTH_MAP` added |
| Naming | Not central | `NAMING_CONVENTIONS` added |
| Execution proof | Not a dedicated layer | `RECEIPT_LEDGER` added |
| Change history | Not specific to passbook | `CHANGE_LOG_PASSBOOK_UPDATES` added |

## 8. Reality Ledger

```yaml
status: PARTIAL
result: "Workbook governance/passbook update prepared; missing fields and passbook variations documented."
evidence:
  - type: workbook_artifact
    value: "RPT_AISweetSpots_ResearchWorkbook_GovernancePassbookUpdates_20260521.xlsx"
  - type: github_file
    value: "research-closeouts/2026-05-21-passbook-governance-workbook-update.md"
gaps:
  - "Updated workbook is a local artifact and needs optional upload/commit path if required"
  - "New tabs contain representative rows, not full production data"
  - "Real IP ledger links, Drive IDs, GitHub paths and source locators still need population"
  - "Final visual one-page template still needs creation from these fields"
next_action:
  - "Use updated workbook as the control schema"
  - "Create full Study on a Page for Social Skills A"
  - "Create full Study on a Page for DRA"
  - "Populate Artefact Manifest and Claim Ledger from extraction results"
elevation:
  - "This update folds Study Passport governance into the research/finance workbook without replacing the existing research activity structure."
pressure_flags:
  - "Do not flatten study, artefact, claim, surface, product and receipt objects into one tab"
  - "Do not publish unreconciled claims from public pages/posters"
score: 0.95
```
