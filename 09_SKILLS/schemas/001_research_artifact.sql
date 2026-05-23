-- 001_research_artifact.sql
-- Atomic DDL: research.artifact table
-- Apply via: troy-sql-executor bridge envelope {"fn":...,"payload":{"sql":"..."}}
-- NO trailing semicolon when sent via bridge (rows:[] symptom)
-- Keep statements atomic — split if multiple

CREATE SCHEMA IF NOT EXISTS research

-- Statement boundary — apply above first, then below

CREATE TABLE IF NOT EXISTS research.artifact (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  artifact_type text NOT NULL CHECK (artifact_type IN (
    'paper','claim','citation','dataset','figure','table','narrative','pitch'
  )),
  title text NOT NULL,
  parent_artifact_id uuid REFERENCES research.artifact(id),
  source_business text NOT NULL,
  status text NOT NULL DEFAULT 'DRAFT' CHECK (status IN (
    'DRAFT','UNDER_REVIEW','REAL','PARTIAL','BLOCKED','RETIRED'
  )),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb
)

-- Statement boundary

CREATE INDEX IF NOT EXISTS idx_research_artifact_business
  ON research.artifact(source_business)

-- Statement boundary

CREATE INDEX IF NOT EXISTS idx_research_artifact_status
  ON research.artifact(status) WHERE status != 'RETIRED'

-- RLS enable (deploy in 005 with policies)
