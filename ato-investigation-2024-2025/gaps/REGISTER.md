# Gap Register — ATO Investigation 2024/2025

**Rule (V6):** unresolved dependencies must surface. orphan nodes forbidden. graph_cognition requires all entities connected.

This register lists every known gap. Closing a gap requires moving it to `evidence/INDEX.md` with verified `last_verified_utc` and typed evidence.

## Open gaps

| gap_id | category | description | blocks | severity | proposed_resolution | owner |
|--------|----------|-------------|--------|----------|---------------------|-------|
| gap-001 | evidence_link | Drive file IDs for ev-001..ev-009 unresolved | evidence_index | HIGH | Drive search + register fileId in INDEX.md | t4h.runtime |
| gap-002 | period_mapping | Period boundary mapping from MAAT not yet linked to investigation spine step 3 | response_pack | HIGH | maat.financial_intelligence → ato_investigation join view | t4h.runtime |
| gap-003 | rdti_proof | RDTI activity → evidence linkage per project (13 projects) needs row-level proof | financial_reconciliation | HIGH | research schema → audit.log replay | t4h.runtime |
| gap-004 | timeline | Decision logs for FY2425 R&D activities need extraction from stamp.lifecycle_log + audit.log | research_activity_mapping | MEDIUM | sql_read scan + assemble | t4h.runtime |
| gap-005 | accountant_chain | Hales Redden correspondence chain not indexed | response_pack_assembly | MEDIUM | Gmail search adouglas@halesredden.com.au; index | t4h.runtime |
| gap-006 | asset_ip_linkage | research_assets - May 2026 not joined to project ledger | asset_ip_linkage | MEDIUM | view: v_asset_to_project | t4h.runtime |
| gap-007 | command_centre | No command-centre surface yet for ATO Investigation status | command_centre_reporting | LOW | route in t4h-research-hub static portal | t4h.runtime |
| gap-008 | meac_isolation_verification | Need verified proof MEAC freeze respected (no bleed) | governance_integrity | LOW | audit.log search action=meac.* with confirm null | t4h.runtime |

## Closed gaps

(none yet)

## Pressure flags

- `duplicate-build-risk`: continued absence of object registry across full repo invites duplication
- `taxonomy-drift`: ATO/RDTI/MAAT vocabularies overlap; lock canonical names in manifest.yaml
- `hidden-assets`: Drive contains files not yet registered; existence audit required
- `authority-boundary`: some upstream signals require accountant/legal sign-off and remain HITL-permitted per kernel autonomy_boundary
