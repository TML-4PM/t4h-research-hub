---
name: t4h-integrity-verify
version: 0.1.0-skeleton
licence: Apache-2.0
status: PARTIAL
last_updated: 2026-05-24
---

# T4H Integrity Verification Skill

Phase A-E reference and claim verification for research artifacts. Catches fabricated citations, statistical errors, claim-evidence drift before artifacts reach the ATO, RDTI, or external review.

## Activation

**Intent-based** (any language): trigger when the user is about to submit, send, or publish a document containing claims with citations or quantitative assertions.

**Keyword triggers** (EN): verify references, check citations, audit claims, integrity check, fact-check this draft.

## Phases

### Phase A — Reference Audit
- Every citation has a real DOI / OpenAlex ID / URL
- Every reference matches a real publication (no hallucination)
- Author names, years, titles match the source
- Evidence type: `api_response` (Crossref / OpenAlex lookup)

### Phase B — Data Audit
- Every quantitative claim traces to a source table or dataset
- Statistics recompute correctly from raw data
- Sample sizes, p-values, effect sizes internally consistent
- Evidence type: `execution_trace` (recompute receipt)

### Phase C — Methodology Coherence
- Method described matches method executed
- Limitations declared cover known weaknesses
- Evidence type: `cli_output` (review checklist run)

### Phase D — Cross-reference Coherence
- In-text claims match abstract claims
- Figures match described findings
- Tables match prose descriptions
- Evidence type: `evidence_hash` (artifact diff)

### Phase E — Claim Provenance
- Every load-bearing claim traces back to a verified Phase A reference OR a Phase B data point
- No orphan claims (graph_cognition rule)
- Evidence type: `execution_trace` (provenance graph dump)

## Output contract

Each phase produces zero or more `research.integrity_finding` rows. Each row writes to `reality_ledger` with top-level evidence key per TRAPS-A #6.

```
finding {
  phase: A|B|C|D|E
  severity: CRITICAL|MAJOR|MINOR|INFO
  finding_type: fabricated_ref | stat_error | method_drift | claim_orphan | ...
  description: human-readable
  evidence: jsonb with at least one of {commit_sha, api_response, execution_trace, evidence_hash, ...}
}
```

## Gates

- **CRITICAL findings open** → artifact CANNOT promote to REAL
- **MAJOR findings open** → artifact stays PARTIAL until resolved or acknowledged
- **MINOR / INFO** → log only, no gate

## Implementation status

- [ ] Phase A agent (D+2)
- [ ] Phase B agent (D+3)
- [ ] Phase E agent (D+3)
- [ ] Phase C agent (deferred)
- [ ] Phase D agent (deferred)
- [ ] CROSSREF_API capstone key (D+2)
- [ ] OPENALEX_API capstone key (D+2)
- [ ] First end-to-end run on Westpac CV references (D+2)

## Interop

See `../INTEROP.md` for bridge, reality_ledger, cap_secrets, telemetry wiring.
