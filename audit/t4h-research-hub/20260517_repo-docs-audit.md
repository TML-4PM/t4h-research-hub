# t4h-research-hub — Repository Docs Audit

- **Date:** 2026-05-17
- **Auditor:** claude-opus-4-7
- **Scope:** 14 files, 15 commits, dirs audit/ + research/
- **Standard:** V6 kernel + repo's own Constitution v1.5 doctrine
- **Verdict:** PARTIAL — doctrine quality HIGH, execution integrity LOW
- **Ledger:** public.reality_ledger maat.research_hub/repo_docs_audit_20260517 (cluster research-hub-hygiene)

## CRITICAL

1. **Ghost canonical structure.** Constitution v1.5 lists 10 "Current Canonical Documents"; only 2 exist (itself + ATO_EVIDENCE_REGISTER_100ROW_V1). Missing: ATO_RESEARCH_CHRONOLOGY_V1, ATO_CLAIM_BOUNDARY_MATRIX, ATO_ACCOUNTANT_PACK_V1, ATO_EVIDENCE_BINDING_TOP25, ATO_FAQ, BREACH_REGISTER, DECISION_REGISTER, ASSUMPTION_REGISTER. Hallucinated structure / ghost completion (anti-pattern named in the Constitution + IFADS-0004).
2. **REAL on Grade-D evidence.** Constitution v1.5, IFADS-0004, IFADS-0005 declare status: REAL with evidence = session transcript / user critique only. Repo's own grades say D cannot prove a claim. Should be PARTIAL.
3. **Broken provenance.** 100-row register cites SRC-011/012/014 but only SRC-001..010 are defined; zero hashes/dates. Fails the Constitution Provenance Rule.

## HIGH

4. **Document library, not evidence factory.** Finance control doc forbids being a document library; 13 of 14 files are static md with no ledger/receipt linkage. Only audit/ato-review-2026/SCHEDULE.md is spine-wired. Violates kernel every_state_must_be_traceable.
5. **README stub vs portal claim.** 74-byte README; "unified static portal" has no index.html/nav/data files. Express-shell plan lists them as to-build. PRETEND-class.
6. **Unverified RDTI spine.** Registration PYV4R3VPW / project PTPKCR0JN / activity PKK0VJBBH / MAO-001..008 unbound to lodged AusIndustry source in-repo.
7. **holo-org duplicate-truth.** Same finance file paths still exist in deprecated TML-4PM/holo-org; two canonical claims, unresolved.

## MEDIUM

8. No entity/ABN stamp anywhere in audit/RDTI docs.
9. Stale-detection (7/14/30d) + event queue specified but no runtime enforces them.
10. 9-line cross-portfolio thesis duplicated verbatim across 3+ files (ontology-expansion, the IFADS-0004 anti-pattern); IFADS baseline is partly raw chat paste; inconsistent version naming.

## Strengths

Honest PARTIAL discipline (only 3 false REALs). Doctrine internally coherent and strong. 100-row register is a real inventory with a clear binding path. audit/ vs research/ split sound. Deprecated-entity scan CLEAN (0 HoloWall/PRAX/old-ABN/consentx.com.au).

## Remediation queue (priority order)

1. Fix Constitution canonical-docs list: either create the 8 missing files as stubs marked BLOCKED/PARTIAL, or remove them from the list. No phantom index entries.
2. Downgrade Constitution/IFADS-0004/0005 REAL -> PARTIAL until typed receipts (commit SHA + ledger id) are bound.
3. Define SRC-011/012/014 (and any other) in the 100-row register; begin hash/date binding top 25.
4. Add 00_PROJECT_SPINE.md linking every doc to its reality_ledger row / canonical_change id.
5. Build the README into a real index (or drop the "portal" claim until the shell exists).
6. Bind the RDTI registration spine to the lodged AusIndustry export.
7. Resolve holo-org duplicates: archive-mark the holo-org copies, declare research-hub canonical in one place.
8. Entity-stamp all audit registers (ABN 70 666 271 272).

## Reality Ledger

status: PARTIAL
result: Full 14-file docs audit executed; findings classified CRITICAL/HIGH/MEDIUM; logged to canonical ledger + pushed to repo.
evidence: git clone receipt, per-file read, reality_ledger row repo_docs_audit_20260517, this commit.
gaps: remediations 1-8 not yet executed.
next_action: execute remediation queue items 1-4 (highest integrity impact).
score: 0.90 (audit completeness), repo subject score PARTIAL.
