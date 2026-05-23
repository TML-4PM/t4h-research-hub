-- 003_adversarial_finding.sql
-- Atomic DDL: research.adversarial_finding table
-- 8-dimension devil's advocate output

CREATE TABLE IF NOT EXISTS research.adversarial_finding (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  artifact_id uuid NOT NULL REFERENCES research.artifact(id) ON DELETE CASCADE,
  dimension text NOT NULL CHECK (dimension IN (
    'thesis','methodology','evidence','scope','bias','reproducibility','ethics','economics'
  )),
  challenge text NOT NULL,
  counter_evidence jsonb DEFAULT '{}'::jsonb,
  acknowledged boolean NOT NULL DEFAULT false,
  acknowledged_at timestamptz,
  acknowledgement_note text,
  resolved_by_artifact uuid REFERENCES research.artifact(id),
  created_at timestamptz NOT NULL DEFAULT now()
)

-- Statement boundary

CREATE INDEX IF NOT EXISTS idx_adversarial_finding_artifact
  ON research.adversarial_finding(artifact_id)

-- Statement boundary

CREATE INDEX IF NOT EXISTS idx_adversarial_finding_unack
  ON research.adversarial_finding(artifact_id)
  WHERE acknowledged = false
