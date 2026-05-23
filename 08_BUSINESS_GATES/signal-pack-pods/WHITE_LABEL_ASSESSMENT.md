# WHITE-LABEL ASSESSMENT

> Whether T4H's existing `seos_platform` pack matrix and `content_signal_os` signal engine can be exposed as a **white-label offer** — under a partner's brand, with their colours, their domain, their customer relationship, and T4H invisibly behind the surface.

## TL;DR (one paragraph)

Roughly **60% of what's needed for white-label is REAL** today. The pack matrix substrate is fine — 72 rows × 9 verticals × 5 layers, RLS already on, evidence-hashed. The signal escalation engine substrate is partly fine — schema and engine are deployed, ingestion isn't. Three things block a clean white-label launch: (1) **multi-tenant identity isolation** (tenant_id present on some tables, not all), (2) **brandable surfaces** (8 of 9 vertical landing pages not deployed, AI4Tradies the only exception), and (3) **neutral evidence chain** (current `customer_gate.json` and `RECEIPT.json` carry T4H branding and ATO context). A targeted hardening sprint of roughly 21 engineering days closes the gap. The pricing pod's Model B (diagnostic → subscription) can ship under white-label **today** if the partner is willing to do the diagnostic delivery; subscription tier rollout follows.

## Definition we are using

**White-label** means:

- Partner brand front-and-centre on customer-facing surfaces.
- Partner owns the customer relationship and billing.
- Partner gets a configurable subset of `seos_modules` and `seos_offers` to expose.
- T4H runs the backend, gets a fixed fee per tenant + variable per seat / per pack subscription.
- No T4H branding visible to the partner's end customer.
- All telemetry flows back to T4H for the signal engine to learn (with explicit consent — ConsentX wraps this).

What white-label **does not** mean here:

- Source code release.
- Schema control transferred to partner.
- Drug Resilience Atlas data (separate programme, separate licensing).
- ATO evidence chain access.

## What's REAL today (shippable substrate)

| Asset | Status | Where | Evidence |
|---|---|---|---|
| Pack matrix (9 verticals × 5 layers) | REAL | `seos_platform.pack_matrix_bound` | 72 rows, hash `afcb44a7...` |
| Module catalogue (5 layers × 12 modules) | REAL | `seos_platform.modules_seeded` | hash `a9ec14f0...` |
| Offer catalogue (45 priced offers) | REAL | `seos_platform.offers_seeded` | 45 rows, $49–$1999, 5 tiers/vertical |
| Qualification catalogue (AU) | REAL | `seos_platform.qualifications_seeded` | 26 rows, jurisdiction=AU |
| RLS + view layer | REAL | `seos_platform.schema_migration` | `v_seos_pack_summary` view, RLS on 8 tables |
| AI4Tradies landing page (1 of 9) | REAL | Vercel | Existing deployment |
| ConsentX consent layer | live | `consentx.org` | Pluggable into pack onboarding |
| Stripe (tradies only) | live | partial | 1 of 9 verticals; 36 products pending |

## What's PARTIAL (needs hardening before white-label)

| Asset | Status | Gap | Effort |
|---|---|---|---|
| Multi-tenant `tenant_id` on all surfaces | PARTIAL | Tenant column present on `seos_pack_subscriptions` and `seos_operators`; not present on signal tables yet | 3 eng-days |
| Branded landing pages | PARTIAL | 1 of 9 deployed | 8 eng-days (1 per vertical) |
| Stripe products for non-tradies | PARTIAL | 36 pending in Stripe | 4 eng-days |
| Qualification renewal engine | PARTIAL | pg_cron not wired | 1 eng-day |
| Neutral evidence chain (strip T4H branding from partner-facing receipts) | PARTIAL | `customer_gate.json` and `RECEIPT.json` mention T4H, ATO, etc. | 3 eng-days for branding abstraction |
| `content_signal_os` ingestion (LinkedIn / LLM library export / SaaS API) | PARTIAL | Schema deployed, daemon not running | 8 eng-days for first ingestor |

Total: ~27 engineering days. Compressible to **21 days** with parallel execution if the Product Pod prioritises ruthlessly.

## What's RED (not shippable as white-label any time soon)

| Asset | Why | Recommended path |
|---|---|---|
| FAR-CAGE as "execution layer" | `is_active=false`, narrative entity in GC-BAT group | Do not productise. Re-litigate later if Product Pod wants. |
| NEUROPAK as "orchestration" | `is_active=false`, dormant | Do not productise. |
| "SIL" / "OSID" / "Signal Presence Layer" branding | Fabricated labels | Strip from all customer-facing surfaces. Use `seos` + `content_signal_os` only, or partner brand. |
| Multi-INT (OSINT/SIGINT/HUMINT/MASINT/FININT/CYBINT) framing as customer surface | Internal jargon, no customer-tested resonance | Keep as internal taxonomy. Customer surface speaks plain English. |
| MyNeuralSignal apex domain | DNS `BLOCKED` in `reality_ledger.portfolio.r53.myneuralsignal_com.apex_NS_corrupted_by_executor` since 20 May | Resolve DNS before any white-label uses this brand |
| Drug Resilience Atlas data | Separate programme | Out of scope |

## White-label-ready offer (what we can sell today)

**Pack name (internal):** *Operator Pack — single vertical, single layer.*

**What's in it:**

1. One vertical (one of 9: tradies, NDIS, healthcare, accounting, hospitality, retail, professional services, education, transport).
2. One starting layer (`learn`, `operate`, `comply`, `grow`, or `scale`).
3. A branded landing page (8 eng-days to build per partner).
4. Tier choice: $49 / $199 / $499 / $999 / $1999 per seat per month.
5. Qualifications catalogue scoped to the vertical.
6. ConsentX-wrapped onboarding.
7. T4H runs the backend, partner is the brand.

**What's not in it (yet):**

- Live signal escalation reports (needs ingestion).
- Cross-layer trend reports (needs multiple layers + ingestion).
- Value-share pricing overlay (Pricing Pod Model C — needs telemetry contract).

**Revenue model:**

- T4H takes: $49 per tenant per month (platform fee) + 20% of partner's monthly revenue from the pack, OR
- Flat $5K/month platform fee for unlimited seats, no revenue share.
- Partner chooses, locked for 12 months.

## White-label decision tree

```
Can we name a partner who:
├── has an existing SME customer base in one of the 9 verticals?
│   ├── Yes → can they deliver a paid diagnostic conversation (Pricing Model B) themselves?
│   │   ├── Yes → ship Operator Pack under their brand within 30 days
│   │   └── No → T4H delivers diagnostic, partner takes subscription handoff
│   └── No → de-prioritise this partner, find one who does
└── No → defer white-label, build direct customer count first
```

## Risk register

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Partner asks for exclusivity in their vertical | High | Breaks pack thesis | Reject; explain non-exclusive economics |
| Partner asks for source code or schema control | Medium | Kills white-label model | Reject; offer escrow + 24-hour failover instead |
| Partner customers churn at >5%/mo | Medium | Margin erosion | Diagnostic-led qualification (Model B) reduces this |
| Telemetry refused by partner customers | High | Breaks signal engine learning loop | ConsentX consent layer + opt-out price uplift |
| Partner rebrands and ghosts T4H | Low | Loss of distribution | Contract clauses + dead-man-switch on platform fee |
| Underlying schema changes break partner deployment | Medium | Trust loss | Frozen-version contract: partner pinned to `pack_version`, T4H pays migration cost |

## Decision required from Troy

Three binary questions:

1. **Approve the Operator Pack as the first white-label offer?** Yes / No / Maybe-after-pricing-pod.
2. **Allocate 21 engineering days to the hardening sprint?** Yes / No.
3. **Authorise the Partnership Pod to approach the three target archetypes under a white-label framing?** Yes / No.

If yes to 1+2+3: white-label is in execution by 14 June 2026. If no to any: clarify reason, route to a different pod.
