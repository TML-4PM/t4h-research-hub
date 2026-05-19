# T4H Research Hub — System Map

Status: ACTIVE
Repo: TML-4PM/t4h-research-hub
Purpose: canonical research, RDTI, ATO, audit, evidence-factory, and research-intelligence documentation.

## Repo role

`t4h-research-hub` is the canonical library for research and evidence work.

It is not the execution queue. It is not the global rules repo. It is the place where research/audit material becomes findable, indexed, defensible, and reusable.

## Boundary with other repos

| Repo / system | Role | Do not confuse with |
|---|---|---|
| TML-4PM/t4h-research-hub | Research, audit, RDTI, evidence-factory docs and static portal | Execution queue |
| TML-4PM/the-pen | Canonical rules, execution contracts, task compiler / handoff surface | Research library |
| Bridge / MCP / Lambda | Runtime execution and receipts | Documentation store |
| Supabase | Structured registries, evidence ledgers, metrics, runtime state | Human-readable source docs |
| Google Drive | Raw source artefacts, exports, invoices, evidence objects before indexing | Canonical GitHub index |

## Canonical folders

| Path | Purpose | Status |
|---|---|---|
| `/audit/rdti-fy2025/` | RDTI / ATO / FY2025 audit survival stream | ACTIVE |
| `/audit/rdti-fy2025/session-notes/` | Session records and sweep notes | ACTIVE |
| `/audit/rdti-fy2025/finance/` | Finance reconciliation controls and source-pack requirements | ACTIVE |
| `/docs/` | General research hub documentation | TO CREATE / POPULATE |
| `/assets/` | Asset indexes and register exports | TO CREATE / POPULATE |
| `/registers/` | CSV/MD registers for gaps, evidence, decisions, chronology | TO CREATE / POPULATE |
| `/plans/` | Operating plans and cycle plans | TO CREATE / POPULATE |

## Operating rule

If research/audit/evidence knowledge is created in chat, Drive, email, Supabase, GitHub, or Bridge, it must be written back here or linked from here.

If a doc cannot be found in under 60 seconds, create or update an index entry.

## Evidence states

| State | Meaning |
|---|---|
| REAL | Verified with live receipt, file path, source export, hash, URL, API response, or commit |
| PARTIAL | Useful and structured, but missing source proof, runtime receipt, or complete evidence chain |
| BLOCKED | Cannot proceed because required source, credential, authority, or external dependency is missing |

## Current highest-priority stream

RDTI FY2025 / ATO audit survival.

Current canonical stream root:

`audit/rdti-fy2025/`

## Immediate gaps

1. README is too thin.
2. No top-level docs index existed before this map.
3. Evidence registers need to be visible from repo root.
4. Source-pack dependency is still not resolved.
5. Drive/Supabase/Bridge extraction receipts must be linked when available.

## Next action

Maintain `DOCS_INDEX.md`, `GAP_REGISTER.md`, and `NEXT_CYCLES.md` as the three working surfaces for new sessions.
