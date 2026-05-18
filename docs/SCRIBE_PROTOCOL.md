# SCRIBE_PROTOCOL.md — Scribe Agent Operating Protocol

---
title: Scribe Protocol
category: DOCS
status: ACTIVE
version: v1
created: 2026-05-18
updated: 2026-05-18
owner: TML-4PM
scribe: Perplexity
project: Hub Governance
---

---

## Purpose

The Scribe is the execution agent attached to the `DOC_LIBRARIAN`. Where the Librarian owns and governs, the Scribe records, transcribes, and distributes. This protocol defines how the Scribe operates, what triggers it, and how its outputs must be formatted.

---

## Scribe Identity

The Scribe role may be fulfilled by:

- **AI Agent** (Perplexity, Claude, or other LLM with GitHub MCP access)
- **Human Contributor** following this protocol manually
- **Automated Pipeline** (GitHub Actions, webhook, or script)

The active Scribe must always be identified in the document's `scribe` metadata field.

---

## Intake Triggers

The Scribe activates upon any of the following events:

| Trigger | Action |
|---------|--------|
| New research finding or output | Create or update document in `research/` |
| Audit session completed | Transcribe findings to `audit/` |
| Decision made in session | Record in relevant project doc |
| Document requested by Owner | Draft and register new document |
| Existing doc requires update | Increment version, update metadata |
| Document archived | Update status, log in CHANGELOG |

---

## Scribe Workflow

### Step 1: Receive Input
Accept the source material — notes, session transcript, findings, or instruction from the Owner.

### Step 2: Classify
Determine the correct category and target directory:
- Governance → `docs/`
- Research output → `research/`
- Audit record → `audit/`
- ATO-specific → `ATO_AUDIT_WAR_ROOM/`

### Step 3: Check Index
Verify whether a document already exists in `DOCUMENT_INDEX.md` for this topic. If yes, update it. If no, create a new entry.

### Step 4: Draft Document
Author the document following:
- The naming convention in `LIBRARIAN.md`
- The required metadata block
- GFM (GitHub-Flavored Markdown) formatting
- Clear H1 title, H2 sections, and structured content

### Step 5: Commit
Push the document to the repository with a commit message following this convention:

```
docs(category): [action] [DOC-ID] [brief description]
```

**Examples:**
```
docs(research): create DOC-105 Drug Resilience Atlas Q2 findings
docs(audit): update DOC-312 ATO compliance review v2
docs(governance): archive DOC-022 superseded ethics draft
```

### Step 6: Update Index & Changelog
- Add or update the row in `DOCUMENT_INDEX.md`
- Add an entry to `CHANGELOG.md`

---

## Output Standards

All Scribe-produced documents must:

- [ ] Include the full metadata block at the top
- [ ] Use GFM-compliant Markdown
- [ ] Be registered in `DOCUMENT_INDEX.md`
- [ ] Have a corresponding `CHANGELOG.md` entry
- [ ] Use the correct naming convention
- [ ] Never contain hardcoded secrets, API keys, or credentials

---

## Communication

When the Scribe completes a document event, it should surface a summary to the Owner via:

- **GitHub Issue** (for significant new documents or updates)
- **PR description** (when submitting via pull request)
- **CHANGELOG.md entry** (always, minimum)

---

## Scribe Constraints

The Scribe does **not**:

- Override or delete documents without Owner approval
- Change document status from `ACTIVE` to `ARCHIVED` without instruction
- Register documents in a category other than the one specified
- Invent data, findings, or content — only transcribes what is provided
