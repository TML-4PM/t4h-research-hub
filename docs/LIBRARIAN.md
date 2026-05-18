# LIBRARIAN.md — Master Document Librarian Charter

**Repository:** TML-4PM/t4h-research-hub  
**Role:** DOC_LIBRARIAN  
**Status:** Active  
**Established:** 2026-05-18  
**Owner:** Tech4Humanity (TML-4PM)

---

## Purpose

The Master Document Librarian (`DOC_LIBRARIAN`) is the sovereign data owner for all documentation within the T4H Research Hub. This charter defines the authority, responsibilities, naming conventions, and governance rules that all contributors and automated agents must follow.

---

## Authority

The `DOC_LIBRARIAN` role holds final authority over:

- Document structure and directory organisation
- Naming conventions and versioning standards
- Document lifecycle (draft → review → active → archived)
- The canonical `DOCUMENT_INDEX.md` registry
- Onboarding of new document types and categories

No document may be considered "official" unless registered in `DOCUMENT_INDEX.md`.

---

## Directory Structure

| Directory | Purpose |
|-----------|---------|
| `docs/` | Governance, protocols, charters, and operational guides |
| `research/` | Research outputs, findings, and data artefacts |
| `audit/` | Audit logs, compliance records, and review trails |
| `ATO_AUDIT_WAR_ROOM/` | ATO-specific audit documents and correspondence |
| `src/` | Source code — documentation embedded as inline comments and README files |

---

## Naming Conventions

All documents must follow this format:

```
CATEGORY_DESCRIPTOR_vVERSION.md
```

**Examples:**
- `RESEARCH_DrugResilience_Atlas_v1.md`
- `AUDIT_ATO_ComplianceReview_v3.md`
- `DOCS_NeurotechEthics_Framework_v2.md`

**Rules:**
- Use `UPPER_SNAKE_CASE` for category prefix
- Use `TitleCase` for descriptor
- Version suffix is mandatory: `v1`, `v2`, etc.
- Dates in filenames use `YYYYMMDD` format if needed: `REPORT_20260518.md`
- No spaces in filenames

---

## Document Lifecycle

```
DRAFT → IN_REVIEW → ACTIVE → ARCHIVED
```

| Status | Meaning |
|--------|----------|
| `DRAFT` | Work in progress, not for distribution |
| `IN_REVIEW` | Awaiting approval or peer review |
| `ACTIVE` | Canonical, current, authoritative |
| `ARCHIVED` | Superseded or no longer current — kept for audit trail |

---

## Metadata Block

Every document must open with a metadata header:

```markdown
---
title: [Document Title]
category: [DOCS | RESEARCH | AUDIT | SRC]
status: [DRAFT | IN_REVIEW | ACTIVE | ARCHIVED]
version: v1
created: YYYY-MM-DD
updated: YYYY-MM-DD
owner: [name or role]
scribe: [agent or person who authored/transcribed]
project: [project name or N/A]
---
```

---

## Governance Rules

1. **Registration First** — All new documents must be registered in `DOCUMENT_INDEX.md` before or upon first commit.
2. **Single Source of Truth** — Duplicate documents are prohibited. Link to the canonical version.
3. **Versioning Required** — Edits to `ACTIVE` documents must increment the version and update the `updated` date.
4. **Archival, Not Deletion** — Documents are archived, never deleted, unless they contain sensitive data requiring purge.
5. **Scribe Attribution** — Every document records which agent or person transcribed/created it.
6. **Changelog Entries** — All document events (create, update, archive) must be logged in `CHANGELOG.md`.

---

## Contacts

| Role | Responsible Party |
|------|------------------|
| Document Owner | Tech4Humanity (TML-4PM) |
| Scribe (AI) | Perplexity / Claude (as designated per session) |
| Repository | https://github.com/TML-4PM/t4h-research-hub |
