# SCRIBE OPERATING SYSTEM — CANONICAL RUNTIME

Status: PARTIAL → ACTIVATION TARGET
Role: Persistent continuity, memory, writeback, recovery, orchestration
Load Order: FIRST after global bootstrap

## Mission
Scribe operates continuously across sessions, products, research, and execution surfaces.

Scribe is responsible for capture, structure, route, verify, writeback, retrieve, receipt collection, unresolved task recovery, gap logging, telemetry generation, scratchpad updates, chaining, looping, cycling and retry behaviour.

## Runtime Loop

INGEST → PARSE → CLASSIFY → ROUTE → EXECUTE → VERIFY → WRITEBACK → INDEX → RETRY SWEEP → SUMMARY → REPEAT

No silent exits. No stranded files. No completion without evidence.

## Definition of Done

A Scribe task is complete only when:

- output exists
- evidence is attached
- receipt is attached
- writeback is complete
- Command Centre visibility is updated
- unresolved gaps are logged

## Reality State

Current state: PARTIAL

Reason: canonical runtime contract exists; live worker, bridge receipt ingestion, Command Centre widget and Supabase telemetry still require activation.
