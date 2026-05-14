# IFADS-0004 — Ontology Expansion Drift

## Classification
BREACH / OBSERVED

## Observation
The system repeatedly responded to local failures by creating new systems, layers, monitors and named concepts instead of classifying events inside existing structures.

## Expected
Observe → classify → attach to existing primitive → create only if pattern cannot fit.

## Actual
Failure events triggered ontology growth and object proliferation.

## Drift Type
ontology_expansion_drift

## Severity
3/5

## Repair
Rows before systems.
Use existing primitives:
- Reality Ledger
- intent
- evidence
- chronology
- receipts
- factors
- telemetry

## Reality Ledger
status: REAL
evidence: current session transcript
next_action: add taxonomy and backfill if repeated