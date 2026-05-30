# Response to Statement of Issues — DRAFT SKELETON
**R&D Tax Incentive Examination — Income Year 2024-25**

| Field | Value |
|---|---|
| Company | TECH 4 HUMANITY PTY LTD |
| ABN | 70 666 271 272 |
| ACN | 666 271 272 |
| Reference | 2425-AP00-063-843 |
| Income year | 2024-2025 |
| Activity examined | CA1 — Multi-Agent AI Orchestration (Core R&D Activity) |
| Response due | 10 June 2026 |
| Status | DRAFT for review by T4H + Hales Redden (G. McKirdy / A. Douglas) |

> **DRAFTING NOTE.** Structural skeleton, not a finished submission. Each section states the test, the intended argument, and the contemporaneous records to attach. Anywhere marked **[CONFIRM]** needs Troy or the accountants to verify a record genuinely exists and is dated to the activity period. Do **not** submit any section whose [CONFIRM] records cannot be produced — the examiner is explicitly testing for contemporaneous (made-at-the-time) evidence.

## Preliminary — decisions required before filing
1. **Respond vs withdraw/vary.** The Statement of Issues offers both. Withdrawing/varying has income-tax consequences notifiable to the ATO. Agent-led decision (Hales Redden).
2. **Contemporaneous evidence test.** Every record cited must have been created during FY24-25 and used to self-assess eligibility — not reconstructed. Where genuine dated records do not exist, reconsider that strand rather than defend it.

## Question 1 — Project control and direction (beneficiary test)
*Test: does the Company (a) own the know-how/IP/results, (b) control direction and conduct, (c) bear the financial burden?*

- **Ownership/IP:** all IP from CA1 owned by T4H; no assignment/licence-out transfers know-how. **[CONFIRM: no contract assigns IP elsewhere.]**
- **Control:** T4H, through its sole director, set hypotheses, designed experiments, directed all build/test. No external direction.
- **Financial burden:** T4H bore the cost — director R&D labour @ $500/hr + cloud/infra spend — not reimbursed by a third party. **[CONFIRM via timesheets + ledger.]**

| Record | Location | Proves |
|---|---|---|
| Company records | ASIC extract; T4H registered owner | Sole-director control |
| R&D labour | maat_timesheets (hours_worked); v_rdti_by_fy @ $500/hr | Company bore labour cost |
| Infra spend | maat_transactions (is_rd=true) | Company bore financial burden |
| No-assignment | **[CONFIRM]** absence of IP-assignment / paid-to-perform contract | IP/results remain with Company |

## Question 2 — Outcome could not be known in advance
*Test: why couldn't the outcome be known? State-of-the-art at commencement + evidence of SOA investigation.*

**Technical unknown:** at commencement it was not known whether a large hierarchical population of heterogeneous AI agents could be coordinated at production scale without non-linear latency degradation, deadlock, or loss of state coherence. Determinable only by building and testing.

**State of the art at start:**
- AutoGen / CrewAI / LangGraph demonstrated only at small scale (<50 agents), homogeneous single-provider models.
- No published/commercial system combined (a) cross-provider operation, (b) deep multi-tier hierarchy with bidirectional routing, (c) persistent cross-session state. The combination was the unknown.

| Record | Location | Proves |
|---|---|---|
| State-of-art search | **[CONFIRM]** dated literature/web/patent notes at start | SOA investigation performed |
| Framework comparison | Notes on AutoGen/CrewAI/LangGraph limits | Existing art did not solve it |
| Technical Uncertainty Statement | Existing TUS (R02) | Outcome genuinely unknown |

> **[CONFIRM] critical:** Q2 is where examiners look hardest for a *dated* SOA search. Attach as-is if contemporaneous; never back-date.

## Question 3 — Systematic progression of work (the experiment)
CA1 = a set of related experiments. Strongest core demonstration = agent-architecture strand (R02).

### R02 — Hierarchical 729-agent coordination (Neural Ennead)
| | |
|---|---|
| Scientific principles | Distributed-systems coordination; queueing/latency under concurrency; hierarchical control; constraint propagation |
| Hypothesis | A 9×9×9 (729-agent) hierarchy maintains coherence + sub-second routing without exponential latency degradation |
| Method | Iterative builds 9 → 81 → 729; latency benchmarking per tier; A/B routing tests; circuit-breaker isolation; personality-persistence validation |
| Result | Reached 729 agents; sub-500ms routing @ 81-tier; failure mode >27 concurrent agents resolved via tier-level constraint caching (not predictable in advance) |
| Conclusion | Hypothesis supported with qualification (concurrency limit + caching resolution). Failure-then-resolution is itself evidence outcome was unknowable |

Records: existing TUS (R02); GitHub `TML-4PM/t4h-orchestrator` (67 files, dated commits); Supabase `autonomy_execution_run`, `platform_job_run`; **[CONFIRM]** dated >27-agent failure + caching-fix record.

### R01 — AI Sweet Spots (cognitive-profile × AI dose-response)
Hypothesis: ADHD-pattern workers under moderate AI scaffolding gain more than neurotypical (non-linear dose-response). Method: multi-site longitudinal; gamified modules; profile clustering; EEG subsample; effect-size analysis. Result: quadratic dose-response; 9 clusters; per-profile effect sizes; novel "Chatter Index". Conclusion: optimal AI intensity varies by profile — new knowledge.
Records: `maat_transactions` (is_rd=true, rd_code=R01); `ai-sweet-spots.vercel.app` (1 Feb 2026); GitHub `TML-4PM/ai-sweet-spots`; **[CONFIRM]** dated results/effect-size notes.

### R03 — Cross-LLM MCP bridge orchestration
Hypothesis: a single gateway orchestrates tool execution across heterogeneous providers with consistent auth/error handling, state maintained without lock-in or leakage. Method: cross-provider patterns; latency/reliability/integrity testing; Lambda bridge + SQL-executor. Result: operational bridge; novel standardised auth pattern; documented auth-failure events confirming real uncertainty.
Records: dated commits; `reality_ledger`/`t4h_canonical_changes`/bridge receipts; **[CONFIRM]** dated auth-failure incident records.

## Question 4 — New knowledge generated
- New practical understanding of large-scale heterogeneous agent coordination — concurrency threshold + tier-level caching resolution (R02).
- New empirical knowledge that optimal AI-assistance intensity is a non-linear function of cognitive profile, with a quantified metric (R01).
- New practical method for cross-provider tool orchestration/auth without vendor lock-in (R03).

| Record | Location | Proves |
|---|---|---|
| Findings | TUS conclusions; results notes; metric defs | The new knowledge |
| Published/external | **[CONFIRM]** LinkedIn series; any preprint | Generated + disseminated |
| Runtime/data | autonomy_execution_run; maat_transactions; reality_ledger | Knowledge is real |

## Question 5 — Comparison with existing products/processes worldwide
| Existing art | How CA1 differs |
|---|---|
| AutoGen | Small agent counts, homogeneous models; CA1 = 729-agent hierarchy across providers |
| CrewAI | Role-based small-team; no deep hierarchy or cross-provider state persistence |
| LangGraph | Graph orchestration, usually single-provider; CA1 adds cross-provider auth standardisation + persistent state |
| Prior T4H versions | **[CONFIRM]** earlier builds + how the activity advanced beyond them |

## Question 6 — Why CA1 is NOT an excluded activity (s355-25(2)) — MAKE-OR-BREAK
*Dept provisional view: CA1 appears excluded under s355-25(2)(a)(c)(d) and/or (h).*

### (h) Internal-administration software exclusion — PRIMARY rebuttal
s355-25(2)(h) excludes software developed for the **dominant purpose** of the entity's (or a connected/affiliated entity's) **internal administration**. CA1 is not within it:
1. **Dominant purpose was experimentation to generate new knowledge** — structured hypothesis → experiment → observation → conclusion (Q3). Software artefacts are the apparatus, not the purpose.
2. **Outputs power external, customer-facing products** — not T4H's internal admin:
   - **WorkFamilyAI** — product for split-attention / neurodivergent workers (external users).
   - **AI Sweet Spots** — research programme + public platform (ai-sweet-spots.vercel.app) producing citable findings.
   - **Social-media / translation / signal products** — outward-facing services to users.
3. **"Internal administration" is narrow** — running the entity's own business functions (own HR/finance/records). The orchestration is not T4H's payroll/bookkeeping; it is the engine of products/research offered beyond the entity.
4. **Running on own infrastructure ≠ internal-admin purpose** — a research platform tested on the developer's own systems is still aimed at external products and new knowledge.

| Record | Location | Proves |
|---|---|---|
| Product evidence | WorkFamilyAI; ai-sweet-spots.vercel.app; signal/translation services | Outputs are external products |
| Purpose evidence | TUS + experiment records (Q3) | Dominant purpose = experimentation |
| Usage evidence | **[CONFIRM]** orchestration NOT used for T4H payroll/finance/internal admin | Outside (h) |

### (a) Market research / sales promotion — not applicable
CA1 is technical experimentation on agent-coordination architecture (Q3), not market research/testing/development or sales promotion. Commercialisation is downstream of and separate from the core experiment.

### (c) Management studies / efficiency surveys — not applicable
CA1 is not a study/survey of the Company's operations; it is experimental development of a technical system with an unknown outcome.

### (d) Research in social sciences, arts or humanities — not applicable
CA1 is grounded in computer science / distributed-systems engineering (Q3). R01 uses quantitative experimental method directed at a technical/computational question — the eligible core is the engineering/computational experimentation, not social-science inquiry. **[CONFIRM scope framing with agent.]**

> **[CONFIRM] (d) caution:** frame the eligible core as computational/architecture experimentation. If any strand is genuinely social-science research, accountants may prefer to scope it out rather than defend under (d).

## Master contemporaneous-records index
| Record / artefact | Location | Supports |
|---|---|---|
| Technical Uncertainty Statement (R02) | Existing draft | Q2, Q3, Q4, Q6 |
| GitHub TML-4PM/t4h-orchestrator | 67 files, dated commits | Q3 (R02) |
| GitHub TML-4PM/ai-sweet-spots | Repo + commits | Q3 (R01) |
| ai-sweet-spots.vercel.app | Live platform, 1 Feb 2026 | Q3/Q4/Q6 |
| Supabase autonomy_execution_run | S1 lzfgigiyqpuuxslsygjt | Q3 trial runs |
| maat_transactions (is_rd=true) | S1; rd_code tagging | Q1 cost; Q3 linkage |
| maat_timesheets | S1; hours_worked @ $500/hr | Q1 labour |
| reality_ledger / t4h_canonical_changes | S1 | Q3/Q4 runtime evidence |
| State-of-the-art search notes | **[CONFIRM]** dated | Q2 — critical |
| >27-agent failure + caching fix | **[CONFIRM]** dated | Q3 — genuine unknown |
| LinkedIn article series | **[CONFIRM]** | Q4 dissemination |

> **Final reminder before filing:** every [CONFIRM] line must resolve to a real FY24-25 record. Where one cannot be produced, raise it with Hales Redden as part of the respond-vs-vary decision rather than filing an unsupported claim.

---
*Generated 2026-05-30. Word version (T4H_RDTI_Response_Skeleton_DRAFT.docx) is the accountant/human artefact; this Markdown twin is the LLM/version-controlled copy. Scratchpad: llm_scratchpad #18380, thread rdti-exam-2425.*
