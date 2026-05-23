-- 002_integrity_finding.sql
-- Atomic DDL: research.integrity_finding table
-- Phase A-E findings, each row must back to a reality_ledger entry with top-level evidence key (TRAPS-A #6)

CREATE TABLE IF NOT EXISTS research.integrity_finding (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  artifact_id uuid NOT NULL REFERENCES research.artifact(id) ON DELETE CASCADE,
  phase text NOT NULL CHECK (phase IN ('A','B','C','D','E')),
  severity text NOT NULL CHECK (severity IN ('CRITICAL','MAJOR','MINOR','INFO')),
  finding_type text NOT NULL,
  description text NOT NULL,
  evidence jsonb NOT NULL,
  evidence_top_level_key text GENERATED ALWAYS AS (
    CASE
      WHEN evidence ? 'commit_sha' THEN 'commit_sha'
      WHEN evidence ? 'api_response' THEN 'api_response'
      WHEN evidence ? 'execution_trace' THEN 'execution_trace'
      WHEN evidence ? 'evidence_hash' THEN 'evidence_hash'
      WHEN evidence ? 'cli_output' THEN 'cli_output'
      WHEN evidence ? 'receipt_id' THEN 'receipt_id'
      WHEN evidence ? 'commit_id' THEN 'commit_id'
      WHEN evidence ? 'pen_receipt_url' THEN 'pen_receipt_url'
      WHEN evidence ? 'evidence_hashes' THEN 'evidence_hashes'
      WHEN evidence ? 'runtime_hash' THEN 'runtime_hash'
      WHEN evidence ? 'telemetry_snapshot' THEN 'telemetry_snapshot'
      WHEN evidence ? 'recovery_log' THEN 'recovery_log'
      ELSE NULL
    END
  ) STORED,
  resolved boolean NOT NULL DEFAULT false,
  resolved_at timestamptz,
  resolved_by_artifact uuid REFERENCES research.artifact(id),
  created_at timestamptz NOT NULL DEFAULT now()
)

-- Statement boundary

CREATE INDEX IF NOT EXISTS idx_integrity_finding_artifact
  ON research.integrity_finding(artifact_id)

-- Statement boundary

CREATE INDEX IF NOT EXISTS idx_integrity_finding_open_critical
  ON research.integrity_finding(artifact_id)
  WHERE resolved = false AND severity IN ('CRITICAL','MAJOR')

-- Statement boundary

CREATE INDEX IF NOT EXISTS idx_integrity_finding_evidence_key
  ON research.integrity_finding(evidence_top_level_key)
  WHERE evidence_top_level_key IS NULL
  -- partial index surfaces evidence-key violations for cleanup

-- NOTE: evidence_top_level_key=NULL means the evidence JSONB did NOT have a top-level key from TRAPS-A #6.
-- These rows correspond to reality_ledger entries that will silently demote REAL→PARTIAL.
-- Phase A agent must REJECT inserts where this would be NULL.
