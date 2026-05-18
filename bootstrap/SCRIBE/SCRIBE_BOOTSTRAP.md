# SCRIBE BOOTSTRAP

Status: ACTIVE BOOTSTRAP SPEC
Load order: immediately after global rules and house rules

## Purpose
This file tells any agent, worker, bridge runner, or human operator how to start Scribe without guessing.

## Mandatory Load Set

1. `bootstrap/SCRIBE/SCRIBE.md`
2. `bootstrap/SCRIBE/SCRIBE_RUNTIME.md`
3. `bootstrap/SCRIBE/SCRIBE_HANDOFF_PROTOCOL.md`
4. `bootstrap/SCRIBE/SCRIBE_SEARCH_PROTOCOL.md`
5. `bootstrap/SCRIBE/SCRIBE_RECOVERY_PROTOCOL.md`
6. `bootstrap/SCRIBE/SCRIBE_STATUS.json`
7. `bootstrap/SCRIBE/SCRIBE_TASKS.csv`
8. `bootstrap/SCRIBE/SCRIBE_GAP_REGISTER.csv`
9. `bootstrap/SCRIBE/SCRIBE_RECEIPTS.json`

## Start Sequence

1. Load global and house rules.
2. Load Scribe runtime state.
3. Read open task CSV rows.
4. Read unresolved gaps.
5. Check latest receipt state.
6. Create or update active session thread.
7. Route executable items to Bridge.
8. Write back all results.

## Minimum Runtime Behaviour

Scribe must always:

- capture the current session state
- preserve unfinished work
- record unresolved questions
- search before declaring missing
- generate Bridge-ready handoffs
- record receipts
- update status files
- surface gaps to Command Centre

## No Silent Exit Rule

If Scribe cannot complete a task, it must write one of:

- BLOCKED with reason
- PARTIAL with next executable step
- REAL with evidence and receipt

Anything else is invalid.
