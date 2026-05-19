#!/usr/bin/env node
// runner.js — the "hand bridge". You run this. It does not run itself.
//
// Deliberate design choices, stated plainly:
//   * Dry-run is the DEFAULT. A real POST needs --send AND a credential
//     you supply at call time. There is no embedded key.
//   * It processes one exported file and exits. There is no daemon,
//     no cron, no self-retrigger, no "cycle/loop/evolve". If you want
//     it on a schedule, you wire that yourself, deliberately, with eyes open.
//   * It expects a receipt back. If no receipt, it prints PARTIAL and
//     does not pretend the item shipped. This mirrors your own kernel:
//     no_receipt_no_REAL, PRETEND is a forbidden state.
//
// Usage:
//   node runner.js ./bsl-envelopes-XXXX.json                 # dry-run, prints what WOULD send
//   BRIDGE_URL=https://... BRIDGE_KEY=... node runner.js f.json --send
//
import { readFileSync } from "node:fs";

const file = process.argv[2];
const SEND = process.argv.includes("--send");
const URL_ = process.env.BRIDGE_URL;
const KEY  = process.env.BRIDGE_KEY;

if (!file) { console.error("usage: node runner.js <envelopes.json> [--send]"); process.exit(1); }

let items;
try { items = JSON.parse(readFileSync(file, "utf8")); }
catch (e) { console.error("cannot read/parse file:", e.message); process.exit(1); }
if (!Array.isArray(items)) items = [items];

function looksUnsafe(env) {
  // last-line defence: refuse to forward anything that still smells of a secret
  const blob = JSON.stringify(env.signal || {});
  return /(?:sk|pk|rk|bk|ghp)_[A-Za-z0-9_]{10,}|github_pat_[A-Za-z0-9_]{20,}|A[KS]IA[0-9A-Z]{16}|eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.|xox[baprs]-[A-Za-z0-9-]{10,}/.test(blob);
}

(async () => {
  let sent = 0, held = 0, skipped = 0;
  for (const env of items) {
    if (looksUnsafe(env)) { console.log(`SKIP  ${env.envelope_hash?.slice(0,12)} — residual secret signature, not forwarding`); skipped++; continue; }

    if (!SEND) {
      console.log(`DRY   ${env.envelope_hash?.slice(0,12)} ${env.page_type} → would POST to BRIDGE_URL  [classification stays PARTIAL until receipt]`);
      held++; continue;
    }
    if (!URL_ || !KEY) { console.error("--send requires BRIDGE_URL and BRIDGE_KEY env vars"); process.exit(2); }

    try {
      const res = await fetch(URL_, {
        method: "POST",
        headers: { "content-type": "application/json", "x-api-key": KEY },
        body: JSON.stringify(env)
      });
      const body = await res.text();
      if (res.ok) {
        console.log(`SENT  ${env.envelope_hash?.slice(0,12)} → receipt: ${body.slice(0,120)}  [now upgradeable to REAL by your ledger, not by me]`);
        sent++;
      } else {
        console.log(`HELD  ${env.envelope_hash?.slice(0,12)} → HTTP ${res.status} ${body.slice(0,120)}  [stays PARTIAL]`);
        held++;
      }
    } catch (e) {
      console.log(`HELD  ${env.envelope_hash?.slice(0,12)} → ${e.message}  [stays PARTIAL]`);
      held++;
    }
  }
  console.log(`\nsummary: sent=${sent} held(PARTIAL)=${held} skipped(unsafe)=${skipped}  send_mode=${SEND}`);
})();
