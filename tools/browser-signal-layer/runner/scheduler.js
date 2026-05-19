#!/usr/bin/env node
// scheduler.js — the component that makes BSL a closed loop instead of a dead end.
//
// WITHOUT THIS FILE the system is not valid: capture -> export -> (nothing).
// runner.js alone is dry-run-only and can never close the loop unattended,
// so the project is PARTIAL by construction. This file is what lets the
// loop actually close. It is REQUIRED, not optional.
//
// It runs unattended (kernel: hitl forbidden, 72h unattended target) but is
// deliberately bounded the way the same kernel demands:
//   * KILL SWITCH: presence of ./BSL_STOP halts every cycle. Global, instant.
//     (kernel: emergency_stop_must_be_global, human_override_supersedes_agent)
//   * CEILING: --max-cycles caps total runs; default 288 (~24h at 5min). No
//     infinite zombie. (kernel: zombie_agents_forbidden, orphan_timeout)
//   * IDEMPOTENCY: every envelope_hash sent once, ever, tracked in a state
//     file. Re-runs cannot double-send. (kernel: no_parallel_state_conflicts)
//   * DECAY: if N consecutive cycles send zero items, it self-terminates.
//     (kernel: low_value_execution_must_decay, compute_without_value_shutdown)
//   * NO SELF-PROMOTION: it records receipts; it never writes REAL. Your
//     ledger classifies. (kernel: no_receipt_no_REAL, PRETEND forbidden)
//   * NO EMBEDDED CREDENTIAL: BRIDGE_URL/BRIDGE_KEY come from the daemon's
//     environment. Refuses to start without them — fails loud, not silent.
//
// Usage:
//   BRIDGE_URL=https://... BRIDGE_KEY=... \
//   node scheduler.js --watch ./exports --interval 300 --max-cycles 288
//
// Stop it any time, from anywhere:  touch ./BSL_STOP
//
import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };

const WATCH    = opt("--watch", "./exports");
const INTERVAL = parseInt(opt("--interval", "300"), 10) * 1000;
const MAXCYC   = parseInt(opt("--max-cycles", "288"), 10);
const IDLEKILL = parseInt(opt("--idle-cycles", "12"), 10); // self-terminate after this many empty cycles
const STOPFILE = "./BSL_STOP";
const STATE    = "./.bsl_scheduler_state.json";

const URL_ = process.env.BRIDGE_URL;
const KEY  = process.env.BRIDGE_KEY;
if (!URL_ || !KEY) {
  console.error("FATAL: scheduler refuses to start without BRIDGE_URL and BRIDGE_KEY in env.");
  console.error("This is not a HITL gate — it is where the credential correctly lives.");
  process.exit(2);
}

function loadState() {
  try { return JSON.parse(readFileSync(STATE, "utf8")); }
  catch { return { sent_hashes: [], cycles: 0, started_at: new Date().toISOString() }; }
}
function saveState(s) { writeFileSync(STATE, JSON.stringify(s, null, 2)); }

function looksUnsafe(env) {
  const blob = JSON.stringify(env.signal || {});
  return /(?:sk|pk|rk|bk|ghp)_[A-Za-z0-9_]{10,}|github_pat_[A-Za-z0-9_]{20,}|A[KS]IA[0-9A-Z]{16}|eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.|xox[baprs]-[A-Za-z0-9-]{10,}/.test(blob);
}

function collectEnvelopes() {
  if (!existsSync(WATCH)) return [];
  const out = [];
  for (const f of readdirSync(WATCH)) {
    if (!f.endsWith(".json")) continue;
    try {
      let j = JSON.parse(readFileSync(join(WATCH, f), "utf8"));
      if (!Array.isArray(j)) j = [j];
      out.push(...j);
    } catch { /* skip unparseable, do not crash the loop */ }
  }
  return out;
}

async function cycle(state) {
  if (existsSync(STOPFILE)) { console.log("STOP file present — halting. (global kill)"); return "stop"; }
  if (state.cycles >= MAXCYC) { console.log(`max-cycles ${MAXCYC} reached — terminating cleanly.`); return "stop"; }

  state.cycles++;
  const seen = new Set(state.sent_hashes);
  const envs = collectEnvelopes().filter(e => e.envelope_hash && !seen.has(e.envelope_hash));

  let sent = 0, held = 0, skipped = 0;
  for (const env of envs) {
    if (looksUnsafe(env)) { console.log(`SKIP ${env.envelope_hash.slice(0,12)} residual secret — not forwarding`); skipped++; continue; }
    try {
      const res = await fetch(URL_, {
        method: "POST",
        headers: { "content-type": "application/json", "x-api-key": KEY },
        body: JSON.stringify(env)
      });
      const body = await res.text();
      if (res.ok) {
        state.sent_hashes.push(env.envelope_hash);          // idempotency: never again
        console.log(`SENT ${env.envelope_hash.slice(0,12)} receipt:${body.slice(0,80)} [ledger promotes to REAL, not me]`);
        sent++;
      } else {
        console.log(`HELD ${env.envelope_hash.slice(0,12)} HTTP ${res.status} [stays PARTIAL]`);
        held++;
      }
    } catch (e) {
      console.log(`HELD ${env.envelope_hash.slice(0,12)} ${e.message} [stays PARTIAL]`);
      held++;
    }
  }

  state.idle = sent === 0 ? (state.idle || 0) + 1 : 0;
  saveState(state);
  console.log(`cycle ${state.cycles}/${MAXCYC}: sent=${sent} held=${held} skipped=${skipped} idle_streak=${state.idle}`);

  if (state.idle >= IDLEKILL) { console.log(`${IDLEKILL} empty cycles — decaying to shutdown (no value, per kernel).`); return "stop"; }
  return "continue";
}

(async () => {
  const state = loadState();
  console.log(`BSL scheduler up. watch=${WATCH} interval=${INTERVAL/1000}s max=${MAXCYC} kill=touch ${STOPFILE}`);
  while (true) {
    const r = await cycle(state);
    if (r === "stop") break;
    await new Promise(res => setTimeout(res, INTERVAL));
  }
  console.log("scheduler exited cleanly. state preserved in", STATE);
})();
