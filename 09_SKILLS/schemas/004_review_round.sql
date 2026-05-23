-- 004_review_round.sql
-- Atomic DDL: research.review_round table
-- Peer review instances with 0-100 scoring per academic-paper-reviewer v1.4 pattern

CREATE TABLE IF NOT EXISTS research.review_round (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  artifact_id uuid NOT NULL REFERENCES research.artifact(id) ON DELETE CASCADE,
  round_number int NOT NULL CHECK (round_number > 0),
  reviewer_role text NOT NULL CHECK (reviewer_role IN (
    'EIC','R1','R2','R3','DA','SELF'
  )),
  score int CHECK (score BETWEEN 0 AND 100),
  decision text CHECK (decision IN (
    'accept','minor_revise','major_revise','reject','no_decision'
  )),
  report jsonb NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (artifact_id, round_number, reviewer_role)
)

-- Statement boundary

CREATE INDEX IF NOT EXISTS idx_review_round_artifact
  ON research.review_round(artifact_id, round_number)

-- Decision mapping per upstream pattern:
--   ≥80 accept, 65-79 minor_revise, 50-64 major_revise, <50 reject
-- Enforced in agent logic, not constraint, since reviewers may disagree with the score.
