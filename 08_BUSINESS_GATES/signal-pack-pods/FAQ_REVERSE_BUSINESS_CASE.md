# FAQ — REVERSE BUSINESS CASE

> Twelve "what if X" questions, each producing a "then Y" decision rule. This is not a sales FAQ. This is a stress-test: if any of these conditions occur, the programme either pivots, kills, or doubles down — without re-debating from scratch.

---

## 1. What if no named partner says yes within 14 days?

**Then:** Partnership Pod is suspended. Investment redirects to direct customer acquisition for one vertical (default: tradies, since AI4Tradies landing page is the only one live). The white-label thesis is parked, not killed — re-opens when T4H has 10 direct paying customers in the chosen vertical, proving the pack matrix works on its own.

**Why:** distribution through partnership is a force multiplier, not a foundation. If no partner sees value at zero risk, the underlying pack offer needs more customer proof before it can carry a partner relationship.

**Falsifiable signal:** ≥1 partner says yes by 7 June 2026, OR ≥10 direct paying customers in any vertical by 28 July 2026.

---

## 2. What if a partner demands exclusivity in their vertical?

**Then:** reject the deal. Explain the platform thesis: non-exclusive distribution is the entire point. Offer a 12-month first-mover advantage instead (their tenant is on `pack_version 1.0.0`, anyone else in the same vertical lands on `pack_version 1.1.0` with feature parity but a different launch date).

**Why:** exclusivity in vertical A means we can never sell to vertical-A's adjacent partner, even if they're a better fit. Compounds against us.

**Exception:** an exclusivity deal worth ≥A$500K committed in year 1 may be considered, but only with Troy + adviser sign-off and a 12-month cap.

---

## 3. What if pricing pressure brings packs below the $49/mo floor?

**Then:** refuse. The $49 floor is set by `seos_offers.price_floor=49` and is documented in `reality_ledger.seos_platform.offers_seeded` as REAL. Below $49/mo, the unit economics inverts: support cost + Stripe fees + signal infrastructure cost exceed marginal revenue.

**Better path:** if a partner needs sub-$49 pricing, offer them a free tier (read-only pack, no signal escalation) backed by a paid upgrade path. Free tier becomes a lead-gen mechanism, not a margin destroyer.

**Falsifiable signal:** if margin floor analysis (Pricing Pod deliverable) shows even $49 is too low for vertical X, that vertical gets dropped from the pack matrix, not re-priced down.

---

## 4. What if `content_signal_os` ingestion isn't live within 60 days?

**Then:** the signal escalation engine cannot produce REAL trend reports. The "$18,200/week cost leakage" style outputs ChatGPT generated remain simulated. Pricing Pod's Model C (value-share) cannot be honestly sold because there's no value measurement.

**Consequence:** strip Model C from the pricing deck until ingestion is live. Sell on Model A (subscription) and Model B (diagnostic) only.

**Decision rule:** if the first ingestion daemon (LinkedIn export OR LLM library OR one SaaS API) isn't producing rows in `content_signal_os` by 24 July 2026, the Product Pod surfaces this as a blocker on `customer_gate.json` and Troy decides whether to fund external engineering help.

---

## 5. What if a customer signs up for value-share (Model C) and then refuses to share telemetry?

**Then:** value-share is unenforceable. Without telemetry access, T4H cannot measure the savings or revenue uplift the pack is delivering, so the variable component of pricing has no input.

**Contract clause required (Pricing Pod owns drafting):**

> "Customer grants T4H read-only telemetry access to the subset of customer's systems required to compute Pack Value (as defined in Schedule 2). If customer revokes or restricts this access, the variable component of pricing converts to a fixed uplift of 1.5× the base subscription, calculated monthly, for the remainder of the term."

This makes refusal expensive without being punitive. Without this clause: don't sell Model C.

---

## 6. What if Celonis / Drata / Vanta launch a horizontal pack-matrix substrate in 6 months?

**Then:** the wedge collapses. T4H still has a small-vertical AU-jurisdiction position (which they won't match quickly), but the platform thesis is harder.

**Pre-emptive moves available now:**

1. Publish the Customer Centricity Gate as open methodology (raises T4H's profile without leaking runtime).
2. Lock in 3 partner LOIs before month 6.
3. Get `content_signal_os` ingestion live as a defensible signal-engine moat.

**Decision rule:** monitor monthly for category moves. If two of the named competitors announce horizontal-pack moves: accelerate or sell.

---

## 7. What if Troy is unavailable for 30 days (illness, paddle-around-Australia kayak trip, etc.)?

**Then:** the pods must continue to a holding pattern, not collapse. Partnership Pod pauses outbound; Product Pod continues hardening per `WHITE_LABEL_ASSESSMENT.md` backlog; Pricing Pod is paused (it's Troy-led).

**Decision rule:** if Troy unavailability exceeds 14 days and no second decision-maker is named, all pods auto-pause. This is per the kernel's `human_control.purpose=preserve_sovereignty`.

**Pre-emptive:** name one trusted person (proposed: Andrew Douglas at Hales Redden, in his commercial-adviser capacity, not as auditor) with read-only governance access and a kill-switch on running pods.

---

## 8. What if the ATO review (10 June 2026) goes badly and consumes Q3 attention?

**Then:** Partnership Pod and Pricing Pod auto-pause until ATO matter is closed. Product Pod continues hardening (it doesn't compete for Troy's attention). White-label launch slips by however long the ATO review takes to resolve.

**Decision rule:** ATO review is the dominant constraint until closed. Per `customer_gate.json`, no commercial commitments to partners while ATO is unresolved.

**Mitigation:** the pod work is structured so 90% of the Product hardening sprint can complete with no Troy involvement. Partnership and Pricing wait.

---

## 9. What if a partner asks for source code or schema control?

**Then:** decline. Offer instead:

1. **Code escrow** — independent third party holds a copy of pack-config code only (not schemas, not runtime).
2. **24-hour failover commitment** — if T4H runtime is down >24 hours, partner gets read-only export of their tenant's data + a hosted-elsewhere migration path.
3. **Schema pinning** — partner is locked to a specific `pack_version` for 12 months; T4H pays migration cost when partner chooses to upgrade.

This addresses the real concern (continuity risk) without giving away the platform.

---

## 10. What if no customer engages with the diagnostic offer (Model B)?

**Then:** Model B is dead. The diagnostic-to-subscription funnel doesn't work for this audience. Revert to Model A (pure subscription) as the only on-ramp, and let the Partnership Pod compensate via partner-led trust.

**Falsifiable signal:** zero paid diagnostics by day 28 from three named prospects. If two of three converted, Model B is alive. If one of three, evaluate. If zero, kill cleanly.

---

## 11. What if `MyNeuralSignal` DNS stays BLOCKED?

**Then:** the brand name "MyNeuralSignal" is not usable for any external surface until the apex NS corruption is fixed (per `reality_ledger.portfolio.r53.myneuralsignal_com.apex_NS_corrupted_by_executor`, BLOCKED since 20 May 2026).

**Decision rule:** all white-label and partner-facing communications use either partner brand (for white-label) or `seos.*` taxonomy (for direct sales). MyNeuralSignal is parked until DNS resolves.

---

## 12. What if a competitor offers to acquire T4H during this window?

**Then:** Troy decides; this document does not pre-commit. But it does pre-decide on the framing:

1. T4H is not a product company — it's a portfolio of 28+ canonical businesses on shared infrastructure. An acquirer should be valuing the substrate (`seos_platform` + `content_signal_os` + `Customer Centricity Gate` + `ConsentX`), not any single product.
2. RDTI position FY24-25 (~A$929K refund pending) is part of the financial picture; ATO review must close cleanly first.
3. Drug Resilience Atlas, AI Sweet Spots, and the GC-BAT vignettes are separate programmes — acquirer cannot assume they're included.

**Decision rule:** any inbound interest goes through Troy → Hales Redden → external counsel, not the pods.

---

## Meta-FAQ — why a reverse business case?

Conventional business cases say "if we do this, we get X". A reverse business case says "if X is true, what should we do?" — it's cheaper to discover bad assumptions this way.

Each of the 12 conditions above is a real-world signal that can be observed in <60 days. None of them require Troy's intuition; all of them route to a pre-decided action. That keeps the system **self-governing** per the kernel's `autonomous_continuity_over_hitl` rule.

---

## Sign-off needed

Troy: do these 12 decision rules represent your actual decision logic, or are any of them wrong? Mark with ✅ / 🔁 (change) / ❌ (reject) and Pod execution proceeds against the signed version.

Default: silence = consent at 7 days from this document being available in the repo.
