# POD BRIEFS — Partnership · Product · Pricing

> Three pods, one combined outcome email. Each pod has a charter, a 14-day clock, and a single deliverable that lands in Troy's inbox. No pod is allowed to redesign the substrate (`seos_platform` + `content_signal_os` are out of scope for modification).

## Operating model

- **Director:** Troy Latter (sole authority on commercial direction, partner selection, pricing floor).
- **Pod executor:** Claude instance with explicit pod scope. Each pod is one work_queue parent job; sub-tasks fan out only with receipted evidence.
- **Gate:** Customer Centricity Gate (`08_BUSINESS_GATES/score.js`). No pod reaches REAL without `payer`, `pain`, `first_value`, `economic_path`, `proof`.
- **Cadence:** weekly written check-in, fortnightly decision point, 28-day total horizon to first paying customer or kill.
- **Anti-zombie rule:** if a pod produces no external-signal evidence in 14 days (named person, signed NDA, paid pilot, or refusal), it auto-decays. No quiet rollover.

---

## Pod 1 — Partnership

### Charter

Identify and engage three partner archetypes that can either (a) white-label the `seos_platform` pack matrix into their own customer base, or (b) provide distribution into a vertical T4H cannot reach efficiently as a one-director firm.

### Out of scope

- Reselling `t4h-research-hub` evidence chain — that's ATO-bound, not partnerable.
- Partnerships that require exclusivity. The pack matrix thesis depends on multi-tenant.
- Any deal that touches Drug Resilience Atlas data licensing — separate programme, separate counsel.

### Three target archetypes

**Archetype A: Accounting / advisory practice with SME compliance load.**
- Real candidate already in registry: `hales-redden` (group=SIGNAL, *Hales Redden Business Intelligence*) — adviser relationship already active for ATO work.
- Pitch: white-label the `seos.comply` layer for their client base. They become the trusted brand; T4H becomes the engine.
- Test: does Andrew Douglas (or equivalent partner) see this as a service expansion or a distraction from core audit work?

**Archetype B: NDIS / disability services peak body or large provider chain.**
- No registry entry yet — discovery work.
- Pitch: NDIS-specific pack containing the 9 verticals × 5 layers, with compliance escalation when provider behaviour drifts from scheme rules.
- Test: there are ~17,000 registered NDIS providers in Australia; one peak body relationship would compound.

**Archetype C: AI tooling reseller / SI with sub-$50M revenue ceiling.**
- Existing infrastructure already exposed as `ai4tradies` Vercel project (per `seos_platform.landing_pages` PARTIAL).
- Pitch: bring-your-own-customer; T4H provides the runtime, partner brings the relationship.
- Test: is the margin floor ($49 minimum offer per `seos_offers`) enough for them after their cut?

### Deliverable (email to Troy by day 14)

A single 1-page Markdown emailed as inline HTML containing:

1. Three named contacts, dated and channel-stamped (LinkedIn message, email, phone — recorded with timestamp).
2. For each: explicit yes / no / conditional with the condition stated.
3. The economic ask: revenue share %, MDF, exclusivity demands.
4. A single recommendation: which archetype to double down on, which to drop, which to keep warm.

### Pod KPIs

| Metric | Day 7 | Day 14 | Day 28 |
|---|---:|---:|---:|
| Named contacts engaged | 3 | 5 | 8 |
| Signed NDA or LOI | 0 | 1 | 2 |
| Paid pilot scoped | 0 | 0 | 1 |
| Killed prospects (cleanly) | — | 2 | 4 |

### Failure modes (kill criteria)

- All three archetypes return "interesting but not now" → pod kills; redirect investment to direct customer acquisition.
- One archetype demands exclusivity that breaks the pack thesis → reject the deal, keep the pod warm.
- Partner asks for source code or non-anonymised data → escalate to Troy + Hales Redden before any further conversation.

---

## Pod 2 — Product

### Charter

Define what is shippable today, what needs hardening, and what is still concept — with a one-page packaging matrix that lets a non-engineer choose what to sell.

### Out of scope

- Schema redesign (`seos_*` and `content_signal_*` schemas are frozen for the duration of this pod).
- Production deployment changes (handled separately).
- Any feature beyond the 5 existing layers (`learn`, `operate`, `comply`, `grow`, `scale`).

### Method

For each of the 9 verticals × 5 layers (= 45 cells), score on three axes:

| Axis | Scoring |
|---|---|
| **Ship-ready** | 0 = concept, 1 = wireframe, 2 = built, 3 = deployed |
| **Customer-proof** | 0 = none, 1 = anecdote, 2 = paid pilot, 3 = repeat customer |
| **Margin clear** | 0 = unknown, 1 = floor only, 2 = floor + value capture, 3 = both validated |

Only cells with `ship_ready ≥ 2` AND `customer_proof ≥ 1` go into the shippable surface. The rest go into a hardening backlog.

### Deliverable

A 45-cell heat map (rendered HTML, fits one screen) + a hardening backlog list ordered by `(margin_clear × customer_proof) / ship_gap`.

### What we already know is REAL

From `reality_ledger.seos_platform`:

- Schema migration REAL (8 tables, RLS enabled, `v_seos_pack_summary` view).
- Modules seeded REAL (5 layers × 12 modules).
- Pack matrix bound REAL (9 verticals × 8 modules average = 72 rows).
- Qualifications seeded REAL (26 AU jurisdiction).
- Offers seeded REAL (45 offers, $49–$1999, 5 tiers per vertical).

What is **PARTIAL**:
- Stripe products for non-tradies verticals (36 pending).
- Landing pages for 8 of 9 verticals (only AI4Tradies deployed).
- Qualification renewal engine (pg_cron not wired).

### Pod KPIs

| Metric | Day 7 | Day 14 | Day 28 |
|---|---:|---:|---:|
| 45-cell scored | 100% | 100% | — |
| Shippable surface (`ship_ready ≥ 2` × `customer_proof ≥ 1`) | — | ≥ 8 cells | ≥ 12 cells |
| Hardening backlog ordered | yes | yes | yes |
| Landing pages live | 2 of 9 | 4 of 9 | 6 of 9 |

---

## Pod 3 — Pricing

### Charter

Stress-test the existing $49–$1999 pack pricing against three monetisation models, and recommend one primary model with two secondary patterns.

### Out of scope

- Free-tier design (decided: there is no free tier, only diagnostic).
- Stripe integration (Product Pod owns that).
- Any pricing below the existing $49 floor.

### Three models to stress-test

**Model A — Fixed pack subscription (current baseline).**
- 5 tiers per vertical, $49 / $199 / $499 / $999 / $1999.
- Strength: predictable, simple to sell, matches existing schema.
- Weakness: no upside capture when the pack delivers $18K/week in measured cost savings to a customer.

**Model B — Diagnostic-then-subscription.**
- One-off diagnostic: $5K–$25K (depending vertical), produces a `content_signal_os` trend report.
- Followed by monthly pack subscription at the existing tier prices.
- Strength: fast revenue, qualifies customer, generates real signals that improve the engine.
- Weakness: requires a delivery person (Troy or partner) for the diagnostic conversation.

**Model C — Value-share overlay on top of Model A.**
- Base subscription as Model A.
- Plus: % of measurable savings or revenue uplift attributable to the pack, capped at 2× the annual subscription.
- Strength: aligns incentives, captures the upside when the pack actually works.
- Weakness: attribution is hard; needs contract clauses for telemetry access; legally complex.

### Deliverable

A one-page decision document containing:

1. Recommended primary model + two secondary patterns.
2. Margin floor by vertical (the price below which the pack is not worth selling).
3. Three willingness-to-pay tests, each scoped to one named potential customer (or one named refusal).
4. A kill-switch condition: at what observable signal do we drop Model B or Model C.

### Pricing reference points (research baseline)

- Vanta (compliance): SOC 2 starter ~A$11K/yr.
- Drata (compliance): comparable.
- WalkMe (digital adoption): six-figure enterprise floor.
- Celonis (process mining): six-figure enterprise floor.
- Glean (work signals): per-seat enterprise pricing.
- Pendo / Mixpanel (analytics): per-seat tiered, free tier.

The existing T4H pack pricing ($49 floor) sits below all of these. That is intentional for the SME / tradie / NDIS-provider segment, but it means Model C (value-share) is where the upside lives for enterprise-style deployments.

### Pod KPIs

| Metric | Day 7 | Day 14 | Day 28 |
|---|---:|---:|---:|
| WTP tests scoped | 3 | 3 | 3 |
| WTP tests delivered (yes/no/conditional from a named customer) | 0 | 2 | 3 |
| Primary model selected | — | yes | yes |
| Margin floors documented (9 verticals) | 3 | 9 | 9 |

---

## Combined outcome — what lands in Troy's inbox

**Single email, day 28.** Subject: *Signal + Pack Pods — Decision Pack [28 May 2026 → 21 Jun 2026]*

Body (max 500 words):

1. **30-second summary:** what to do next week.
2. **Partnership Pod outcome:** 1 archetype to double-down, 1 to drop, 1 warm.
3. **Product Pod outcome:** shippable surface (n cells), hardening backlog top 5.
4. **Pricing Pod outcome:** primary model + 2 secondary, margin floors, WTP receipts.
5. **Three named customers / partners** with dated evidence of engagement.
6. **One kill-criterion** for the whole programme at day 56.

Attachments: this folder, sealed at the timestamp of email send.

---

## Governance

- All three pods file into `customer_gate.json` weekly.
- Each pod produces a typed-evidence receipt (named contact, dated interaction, channel) for every external claim.
- Pod-on-pod conflict resolution: Pricing has veto on commercial terms, Partnership has veto on external commitments, Product has veto on what counts as "shippable". Troy resolves all three-way ties.
