# Schemas

Atomic DDL for research.* tables. Each file contains one or more statements separated by `-- Statement boundary` markers. The bridge envelope (`troy-sql-executor`) does not accept multi-statement SQL, so each statement deploys individually.

## Files

| File | Table | Notes |
|---|---|---|
| 001_research_artifact.sql | research.artifact | Root entity |
| 002_integrity_finding.sql | research.integrity_finding | Phase A-E findings, evidence_top_level_key enforces TRAPS-A #6 |
| 003_adversarial_finding.sql | research.adversarial_finding | 8-dim devil's advocate |
| 004_review_round.sql | research.review_round | Peer review with 0-100 scoring |
| 005_reality_ledger_ext.sql | (extension) | Adds `claim_provenance` JSONB column — TBD |
| 006_graph_edges_research.sql | (extension) | New edge types in cc.graph_edges — TBD |

## Deploy order

1. 001 (artifact must exist first — FK target)
2. 002, 003, 004 (in parallel — all FK to artifact)
3. 005 (extension to existing public.reality_ledger)
4. 006 (extension to existing cc.graph_edges)

## RLS

All tables: enable RLS, policies TBD. Default deny.

T4H rule: RLS on all tables, archive never delete.

## Reality ledger entries

Each successful schema deploy must write a reality_ledger row with top-level evidence key. Reference pattern in INTEROP.md.
