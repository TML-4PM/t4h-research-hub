# DOCUMENT_INDEX.md — T4H Research Hub Document Registry

**Maintained by:** DOC_LIBRARIAN  
**Repository:** TML-4PM/t4h-research-hub  
**Last Updated:** 2026-05-18  
**Index Version:** v1

---

## Overview

This is the canonical registry of all official documents within the T4H Research Hub. Every document must be registered here. The Scribe is responsible for updating this index on every document event.

---

## Registry

| ID | Title | Path | Category | Status | Version | Owner | Scribe | Project | Created | Updated |
|----|-------|------|----------|--------|---------|-------|--------|---------|---------|----------|
| DOC-001 | Master Document Librarian Charter | `docs/LIBRARIAN.md` | DOCS | ACTIVE | v1 | TML-4PM | Perplexity | Hub Governance | 2026-05-18 | 2026-05-18 |
| DOC-002 | Document Index | `docs/DOCUMENT_INDEX.md` | DOCS | ACTIVE | v1 | TML-4PM | Perplexity | Hub Governance | 2026-05-18 | 2026-05-18 |
| DOC-003 | Scribe Protocol | `docs/SCRIBE_PROTOCOL.md` | DOCS | ACTIVE | v1 | TML-4PM | Perplexity | Hub Governance | 2026-05-18 | 2026-05-18 |
| DOC-004 | Documentation Changelog | `docs/CHANGELOG.md` | DOCS | ACTIVE | v1 | TML-4PM | Perplexity | Hub Governance | 2026-05-18 | 2026-05-18 |

---

## ID Allocation

Document IDs are assigned sequentially. Format: `DOC-NNN`

- **DOC-001 to DOC-099:** Hub governance and meta-documentation
- **DOC-100 to DOC-299:** Research outputs and findings
- **DOC-300 to DOC-499:** Audit and compliance records
- **DOC-500 to DOC-699:** Project-specific documentation
- **DOC-700+:** Archived documents

---

## Status Summary

| Status | Count |
|--------|-------|
| ACTIVE | 4 |
| DRAFT | 0 |
| IN_REVIEW | 0 |
| ARCHIVED | 0 |
| **TOTAL** | **4** |

---

## How to Register a New Document

1. Assign the next available `DOC-NNN` ID
2. Add a row to the Registry table above
3. Ensure the document contains the required metadata block (see `LIBRARIAN.md`)
4. Log the event in `CHANGELOG.md`
5. Commit with message: `docs(index): register [DOC-NNN] [title]`
