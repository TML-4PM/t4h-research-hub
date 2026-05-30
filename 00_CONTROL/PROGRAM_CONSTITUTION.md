# T4H Research Hub — Program Constitution v1.0

Status: PARTIAL
Owner: TML-4PM
Repository: TML-4PM/t4h-research-hub
Date: 2026-05-30

## Purpose

This repository is the canonical research operating library for Tech 4 Humanity. It exists to turn scattered research, R&D tax evidence, study ideas, artefacts, products, and audit material into one auditable, reusable, monetisable research system.

## Operating Principle

Research is the source of truth. Products, courses, dashboards, campaigns, books, and commercial offers are packaged interpretations of research. They must reference research records rather than duplicate or distort them.

## Canonical Object Model

Everything is a Research Object.

Valid object types:

- research_program
- research_theme
- research_cell
- study
- novel_direction
- applied_hypothesis
- dataset
- survey
- article
- book
- course
- poster
- whitepaper
- dashboard
- tool
- calculator
- product
- ip_asset
- rdti_project
- audit_evidence

## Naming Doctrine

Banned operational labels:

- spare
- orphan
- pipeline
- backlog

Preferred labels:

- Novel Research Direction
- Applied Hypothesis
- Research Extension
- Research Asset
- Research Program

## Truth States

Every object must carry one of:

- REAL: executed and evidenced
- PARTIAL: structured but missing execution, evidence, or linkage
- PRETEND: claimed without proof and not acceptable for operational use
- BLOCKED: cannot progress due to bounded external dependency

## Mandatory Linkage

A research object is not complete unless linked, where applicable, to:

- hypothesis
- technical uncertainty
- evidence artefacts
- dataset or source location
- owner
- business alignment
- IP status
- monetisation path
- RDTI eligibility
- cost linkage
- next action

## Business Alignment

Research objects may support multiple businesses. Do not force one-to-one ownership.

Primary alignment targets:

- Tech 4 Humanity
- AI Sweet Spots
- WorkFamilyAI
- HoloOrg
- GC-BAT
- ConsentX
- NeuroPAK
- RATPAK
- Outcome Ready
- Augmented Humanity Coach
- Drug Resilience Atlas
- SM Ban / Child Digital Protection
- Public Systems / AI Sludge
- Creative Intelligence / Rhythm Method

## Repository Done State

This repository reaches v1.0 operational baseline when it contains:

1. Research object model
2. Master research registry schema
3. Seed registry rows
4. Business alignment matrix
5. RDTI action register structure
6. Audit defence summary
7. Bridge-ready deployment payload
8. Execution ledger with receipts

## Current Classification

Status: PARTIAL
Reason: control layer is being created and pushed, but live Supabase deployment and runtime proof require Bridge execution receipt.

## Next Action

Run Bridge deployment payload, capture receipt, update EXECUTION_LEDGER.md.
