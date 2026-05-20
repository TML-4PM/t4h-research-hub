// Customer Centricity Gate — deterministic scorer.
// Used by the workflow to recompute customer_gate.json on each push.
// No network calls. Pure function. Replayable.

'use strict';

const WEIGHTS = Object.freeze({
  pain_clarity: 0.15,
  customer_language: 0.15,
  first_value: 0.15,
  proof: 0.15,
  commercial_path: 0.15,
  retention_path: 0.10,
  trust_risk: 0.10,
  infrastructure_discipline: 0.05
});

const THRESHOLDS = Object.freeze({
  REAL: 0.90,
  PARTIAL: 0.70,
  WEAK: 0.40
});

function classify(score) {
  if (score >= THRESHOLDS.REAL) return 'REAL';
  if (score >= THRESHOLDS.PARTIAL) return 'PARTIAL';
  if (score >= THRESHOLDS.WEAK) return 'WEAK';
  return 'BLOCKED';
}

function weightedScore(scores) {
  let total = 0;
  let weightSum = 0;
  for (const [k, w] of Object.entries(WEIGHTS)) {
    if (typeof scores[k] !== 'number') {
      throw new Error(`Missing or non-numeric dimension: ${k}`);
    }
    if (scores[k] < 0 || scores[k] > 1) {
      throw new Error(`Out-of-range dimension ${k}=${scores[k]} (must be 0..1)`);
    }
    total += scores[k] * w;
    weightSum += w;
  }
  // weightSum should equal 1.0; defensive normalisation:
  return Math.round((total / weightSum) * 1000) / 1000;
}

function evaluate(gate) {
  const a = gate.current_assessment;
  const score = weightedScore(a.scores);
  return {
    ...gate,
    current_assessment: {
      ...a,
      weighted_score: score,
      state: classify(score)
    }
  };
}

module.exports = { WEIGHTS, THRESHOLDS, classify, weightedScore, evaluate };

// Selftest when run directly: `node score.js`
if (require.main === module) {
  const fs = require('fs');
  const path = require('path');
  const file = path.join(__dirname, 'customer_gate.json');
  const gate = JSON.parse(fs.readFileSync(file, 'utf8'));
  const updated = evaluate(gate);
  updated.generated_at = new Date().toISOString();
  updated.generated_by = process.env.GITHUB_WORKFLOW || 'score.js-cli';
  if (process.env.GITHUB_SHA) {
    updated.receipt_chain = (updated.receipt_chain || []).concat(['commit:' + process.env.GITHUB_SHA]);
  }
  fs.writeFileSync(file, JSON.stringify(updated, null, 2) + '\n');
  console.log(`gate=${updated.gate} score=${updated.current_assessment.weighted_score} state=${updated.current_assessment.state}`);
  // Exit 1 if score drops below PARTIAL threshold — fails the CI run.
  if (updated.current_assessment.weighted_score < THRESHOLDS.PARTIAL) {
    console.error('Gate failed: below PARTIAL threshold.');
    process.exit(1);
  }
}
