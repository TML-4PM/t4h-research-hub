# SCRIBE RELEASE v1.0

Status: RELEASE CANDIDATE
Owner: TML-4PM
Runtime class: continuity, writeback, recovery, receipt, research registry support

## Purpose
This release turns Scribe from scattered protocol into a usable operating package for the T4H Research Hub.

## Included Artefacts

- `SCRIBE.md` — canonical mission and operating contract
- `SCRIBE_BOOTSTRAP.md` — load order and startup sequence
- `SCRIBE_RUNTIME.md` — runtime state machine and cycle contract
- `SCRIBE_TASKS.csv` — seed execution queue
- `SCRIBE_STATUS.json` — runtime heartbeat seed
- `SCRIBE_RECEIPTS.json` — receipt ledger seed
- `SCRIBE_GAP_REGISTER.csv` — unresolved gap ledger
- `SCRIBE_SCHEMA.sql` — Supabase runtime schema
- `BRIDGE_PAYLOAD_SCRIBE_ACTIVATE.json` — Bridge pickup payload

## Runtime Cycle

INGEST -> PARSE -> CLASSIFY -> ROUTE -> EXECUTE -> VERIFY -> WRITEBACK -> INDEX -> SWEEP -> SUMMARY -> REPEAT

## Definition of Done

Scribe work is DONE only when:

1. repo artefact exists
2. execution task exists
3. receipt exists
4. gap state is updated
5. runtime status is updated
6. next worker action is explicit

## Release State

REAL:
- Scribe artefacts committed to GitHub
- activation issue exists
- seed runtime status exists

PARTIAL:
- live worker heartbeat not returned
- Supabase runtime schema not proven deployed
- Command Centre widget not proven live

BLOCKED:
- 24/7 runtime cannot be claimed until worker heartbeat and receipt ingestion are returned.

## Next Worker Action

Bridge worker should consume `BRIDGE_PAYLOAD_SCRIBE_ACTIVATE.json`, deploy schema, initialise status heartbeat, and return receipt to the activation issue.
