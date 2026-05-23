# Fork Plan: academic-research-skills → 09_SKILLS

**Source**: `Imbad0202/academic-research-skills` (CC-BY-NC 4.0, 5★, single maintainer)
**Target**: `TML-4PM/t4h-research-hub/09_SKILLS/` (Apache-2.0)
**Posture**: Clean-room reimplementation, no copied code or text
**Date**: 2026-05-24
**Aligned to**: ATO review 10 Jun 2026 (internal target 3 Jun)

## 1. Why clean-room

CC-BY-NC blocks every commercial T4H surface: RDTI ($929,504 estimated refund), ATO compliance, Westpac Future Lab, ConsentX, RETAIL group. Reading SKILL.md specs as design reference is fair use; reimplementing fresh under Apache-2.0 inside TML-4PM gives patent grant and commercial defensibility.

## 2. Patterns ranked by value-per-compute

### Tier 1 — direct $ defence
- **P1 integrity_verification** (Phase A-E, 100% claim/reference verify) → RDTI/ATO narrative defence
- **P2 devils_advocate** (8-dim thesis challenger) → ConsentX + Westpac + RDTI claim hardening

### Tier 2 — academic credibility
- **P3 PRISMA / systematic-review** → AI Sweet Spots (n=11,241+) + DRA writeups
- **P4 apa7 LaTeX hardening** → regulator-grade PDF output

### Tier 3 — defer
- **P5 Collaboration Quality Evaluation** (Stage 6) → feeds economic_self_regulation
- **P6 Material passport** → REJECTED (redundant with t4h_canonical_changes)

## 3. Schema additions (graph_cognition)

New tables in `research.*` schema (Supabase S1: lzfgigiyqpuuxslsygjt):
- `research.artifact` — papers, claims, citations, datasets
- `research.integrity_finding` — Phase A-E results, must carry top-level evidence key (TRAPS-A #6)
- `research.adversarial_finding` — devil's advocate output
- `research.review_round` — peer review instances with 0-100 scoring

Extension to existing infra:
- `reality_ledger.claim_provenance` JSONB column for claim-level evidence binding
- New edges in `cc.graph_edges`: `verifies`, `challenges`, `cites`, `supersedes`, `monetises`

## 4. Critical path (7 days)

| Day | Deliverable | Gate |
|---|---|---|
| D+0 | This scaffold + customer_gate in PROVENANCE.md | bridge push ✓ |
| D+1 | Schemas 001-006 deployed to S1 | troy-sql-executor REAL |
| D+2 | t4h-integrity-verify Phase A agent | first run on Westpac CV refs |
| D+3 | Phase B + E agents | run against RDTI narrative draft |
| D+4 | t4h-devils-advocate complete | run against ConsentX positioning |
| D+5 | apa7 LaTeX template + tectonic test | RDTI pack PDF |
| D+6 | RDTI evidence pack pipeline end-to-end | feeds ATO 3 Jun deliverable |
| D+7 | All docs reviewed for clean-room defensibility | promotion to REAL |

## 5. Interop

| Surface | Wiring |
|---|---|
| Bridge | `troy-sql-executor` envelope `{"fn":...,"payload":{"sql":"..."}}` |
| reality_ledger | Every integrity_finding requires top-level evidence key per TRAPS-A #6 |
| cap_secrets | New keys: `CROSSREF_API`, `OPENALEX_API` (rotate capstone + perimeter) |
| Telemetry | Stage metrics → `cc.factory_health_daily` extension |
| Telegram | Review reports → 6972032328 via canonical_changes |
| Business registry | Every artifact bound to `t4h_business_registry` row |

## 6. Out of scope

- Direct fork (blocked by CC-BY-NC)
- Notion mirror (research hub is GitHub canonical)
- HoloWall integration (not canonical)
- PRAX reference (fabrication, deprecated)
- Stage 6 collab eval in v1 (defer)
- Material passport (redundant)
- Cowork desktop integration (skills surfaced via bridge)

## 7. Defaults applied

From prior session open questions:
- **Licence**: Apache-2.0 (patent grant for ConsentX defensibility)
- **PRISMA**: deferred to post-ATO-review window
- **Attribution**: silent clean-room with PROVENANCE.md courtesy

See `PROVENANCE.md` for clean-room methodology and customer gate.
See `LICENSING.md` for Apache-2.0 rationale.
See `INTEROP.md` for bridge/ledger wiring.
