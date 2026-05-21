# ResearchOS Open Items Status

Generated: 2026-05-21 Australia/Sydney

## Correction applied

Notion is not a source of truth for this operating model. It is only a convenience/search layer. Missing or blocked Notion searches are not material evidence gaps.

Primary truth hierarchy:

1. Live domains and runtime surfaces
2. GitHub repos and committed artifacts
3. Runtime data stores
4. Bridge receipts and Reality Ledger receipts
5. Google Drive source assets and exported documents
6. Notion only as convenience/search, never canonical truth

## Product bundle validation

Status: PARTIAL, evidence-backed, live validation still required.

Evidence found in `TML-4PM/holo-org`:

- `src/hooks/useStripeProductsCatalog.tsx`
- `src/hooks/useVPDomainProducts.tsx`
- `src/hooks/useVPAgentMapping.tsx`
- `src/hooks/useStripeProducts.tsx`
- `src/hooks/useGaceProducts.tsx`
- `supabase/functions/gace-products/index.ts`
- `supabase/functions/seed-gace-products/index.ts`

Confirmed product catalogue concepts:

- product IDs and price IDs
- product name and description
- category and subcategory
- price and currency
- billing interval
- partner tier
- revenue share
- agent count
- agent codes
- capacity hours
- function cluster
- service level
- bundle name
- bundle type
- included products
- target market
- compliance level
- industry focus
- markup
- cost basis
- active and featured flags
- sort order

Confirmed bundle families:

- capacity products
- bundle products
- subscription products
- enterprise products
- SME products
- featured products
- VP-domain bundles
- function-cluster bundles

Needed next:

- live row counts
- active bundle export
- price consistency check
- missing agent code check
- bundle-to-roster reconciliation

## Command Centre widget

Status: NOT UPDATED.

Evidence found:

- `TML-4PM/mcp-command-centre/docs/BRIDGE_CONTRACT.md`
- Command Centre browser flow is documented.
- Current helpers include SQL, count, query-key, and lambda-style helper patterns.
- Command Centre depends on a query registry.
- Data dependencies include product catalogue, asset catalogue, site registry, portfolio views, worker state, and query registry.

Search for widget/snippet patterns returned no indexed existing ResearchOS widget material in checked repos.

Needed next:

- ResearchOS Runtime Status widget definition
- query registry entries
- status card covering product bundles, agent roster, live domains, receipt state, and blockers

## Bridge receipt

Status: NOT CAPTURED.

Evidence found:

- Bridge contract exists in Command Centre docs.
- Execution route and response assumptions are documented.
- Previous direct issue/handoff creation was blocked by connector safety layer.
- No runtime receipt ID was returned in this session.

Needed next:

- safe handoff payload file
- execution through Bridge path when available
- returned receipt attached to ResearchOS ledger

## Uploaded roster evidence

### 1000 agents enriched CSV

Local uploaded file inspected.

Shape:

- 1000 rows
- 20 columns

Strategic value:

This file contains roster, persona, value, role gap, organisation gap, brand connection, economic signal, research relevance, data asset opportunity, urgency, and next-ask fields. It should become a major enrichment source for `agent_registry_v1`.

### 727 WorkFamilyAI staff roles PDF

Uploaded PDF parsed.

Key evidence:

- Holo-Org Framework Inventory
- 9 business functions
- 81 main agents
- 729 specialised sub-agents
- full 9x9x9 framework
- functions include Product Development, Marketing, HR, Finance and Operations, Customer Support, Innovation and R&D, Sales, Governance and Compliance, External Relations

Strategic value:

This is the canonical human-readable WorkFamilyAI / Holo-Org 9x9x9 role map and should be reconciled against the 1000-agent enriched CSV, active roster, and product catalogue.

## Final classification

```yaml
status: PARTIAL
product_bundle_validation: PARTIAL_LIVE_VALIDATION_REQUIRED
command_centre_widget: NOT_UPDATED
bridge_receipt: NOT_CAPTURED
notion: NOT_SOURCE_OF_TRUTH
next_action:
  - create safe handoff file
  - create command-centre widget/query pack
  - run live validation through execution path
  - export row counts and samples
  - reconcile 727 PDF with 1000-agent CSV and active roster
```
