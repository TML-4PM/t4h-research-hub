# SCRIBE RUNTIME

Status: RUNTIME SPEC SEEDED
Runtime proof level: PARTIAL until worker heartbeat is returned

## Runtime Objective
Run Scribe as a continuous continuity and recovery loop.

## Cycle Contract

Each Scribe cycle must execute:

1. read status
2. read task registry
3. read gap register
4. read receipts
5. detect stale tasks
6. prepare Bridge pickup payloads
7. post/update receipts
8. write status update
9. emit cycle summary

## Runtime State Machine

QUEUED -> ACTIVE -> VERIFYING -> COMPLETE
QUEUED -> ACTIVE -> BLOCKED -> RECOVERY -> ACTIVE
QUEUED -> ACTIVE -> PARTIAL -> SWEEP -> ACTIVE

## Runtime Receipt Requirements

A valid runtime receipt must include:

- cycle_id
- timestamp_utc
- repo
- files_checked
- open_tasks
- blocked_tasks
- receipts_seen
- next_action
- status

## Heartbeat Requirement

Heartbeat file target:

`bootstrap/SCRIBE/SCRIBE_STATUS.json`

Heartbeat must update on every cycle.

## Runtime Truth

REAL only if:

- heartbeat exists
- latest cycle timestamp exists
- task scan completed
- receipt ledger updated
- Bridge issue updated

Without those, status remains PARTIAL.
