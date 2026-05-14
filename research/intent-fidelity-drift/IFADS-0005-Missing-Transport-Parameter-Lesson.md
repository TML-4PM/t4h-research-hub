# IFADS-0005 — Missing Transport Parameter Lesson

## Classification
LESSON / OBSERVED

## Observation
A GitHub connector operation failed because a required transport field (`message`) was omitted from the payload.

Content was complete.
Execution intent was correct.
Transport packaging failed.

## Drift Type
execution_transport_failure

## Severity
2/5

## Lesson
Generated ≠ Dispatched ≠ Committed.

Completion requires:
1. Content generated
2. Payload valid
3. Transport accepted
4. Commit created
5. Destination verified
6. Receipt linked back to intent

## Repair
Validate transport schema before dispatch.

Rule:
Do not collapse content completion into delivery completion.

## Reality Ledger
status: REAL
evidence: connector failure and successful retry in current session
next_action: add transport validation check to IFADS lessons and telemetry