-- Audit War Room schema v1
-- Purpose: structured evidence operating system for R&D tax audit preparation.

create schema if not exists audit_war_room;

create table if not exists audit_war_room.evidence_items (
  evidence_id text primary key,
  document_class text not null,
  purpose text,
  source_system text,
  strength text check (strength in ('A','A/B','B','B/C','C','D')),
  status text default 'MISSING',
  owner text,
  actual_path text,
  date_range text,
  sha256 text,
  project_link text,
  transaction_link text,
  labour_link text,
  challenge_link text,
  defence_link text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists audit_war_room.chronology (
  event_id text primary key,
  event_date date,
  event_type text,
  project_ref text,
  description text,
  evidence_id text references audit_war_room.evidence_items(evidence_id),
  actor text,
  confidence numeric,
  created_at timestamptz default now()
);

create table if not exists audit_war_room.transactions (
  transaction_id text primary key,
  transaction_date date,
  counterparty text,
  amount numeric,
  currency text default 'AUD',
  account_ref text,
  project_ref text,
  rdt_claim_component text,
  evidence_id text references audit_war_room.evidence_items(evidence_id),
  reconciliation_status text default 'UNMAPPED',
  created_at timestamptz default now()
);

create table if not exists audit_war_room.labour (
  labour_id text primary key,
  person_or_role text,
  period_start date,
  period_end date,
  hours numeric,
  allocation_pct numeric,
  project_ref text,
  activity_ref text,
  payroll_evidence_id text references audit_war_room.evidence_items(evidence_id),
  corroboration_evidence_id text references audit_war_room.evidence_items(evidence_id),
  status text default 'UNMAPPED',
  created_at timestamptz default now()
);

create table if not exists audit_war_room.challenges (
  challenge_id text primary key,
  challenge_area text,
  likely_attack text,
  weakness text,
  severity text,
  linked_evidence_id text references audit_war_room.evidence_items(evidence_id),
  status text default 'OPEN',
  created_at timestamptz default now()
);

create table if not exists audit_war_room.defences (
  defence_id text primary key,
  challenge_id text references audit_war_room.challenges(challenge_id),
  defence_text text,
  evidence_ids text,
  confidence numeric,
  residual_gap text,
  next_action text,
  status text default 'DRAFT',
  created_at timestamptz default now()
);

create table if not exists audit_war_room.receipts (
  receipt_id text primary key,
  receipt_type text,
  system text,
  reference text,
  url text,
  hash text,
  status text,
  created_at timestamptz default now()
);

create or replace view audit_war_room.v_evidence_status as
select
  strength,
  status,
  count(*) as item_count
from audit_war_room.evidence_items
group by strength, status;
