# Browser Signal Layer (owned) — MVP

The browser as the missing sensor between intent and execution — owned, local-first, consent-gated. Captures the work, not the worker.

## VALIDITY NOTICE
This system is NOT valid or working with the extension + runner.js alone.
runner.js is dry-run-only with no embedded credential; the loop
(capture -> export -> send -> receipt) physically cannot close unattended
with just those parts. That configuration is PARTIAL by construction and
must not be classified REAL.

`runner/scheduler.js` is a REQUIRED component, not optional. It is the only
thing that closes the loop. Treat the system as incomplete and non-functional
until the scheduler is deployed against a real BRIDGE_URL and returns receipts.

## Closed loop (valid configuration)
extension (click capture, redact) -> export JSON -> scheduler.js (unattended
sender) -> spine receipt -> your ledger promotes PARTIAL -> REAL.

## Why the scheduler is safe to run unattended
It runs without a human (kernel: hitl forbidden, 72h unattended target) but is
bounded exactly as the same kernel demands:
- KILL SWITCH: `touch ./BSL_STOP` halts every cycle, instantly, globally.
- CEILING: --max-cycles caps total runs (default 288). No infinite zombie.
- IDEMPOTENCY: every envelope_hash sent at most once, ever (state file).
- DECAY: self-terminates after N empty cycles (no value -> shutdown).
- NO SELF-PROMOTION: records receipts; never writes REAL. Ledger decides.
- NO EMBEDDED CREDENTIAL: reads BRIDGE_URL/BRIDGE_KEY from its environment;
  refuses to start without them, failing loud not silent.

## Run
```
BRIDGE_URL=https://... BRIDGE_KEY=... \
node tools/browser-signal-layer/runner/scheduler.js \
  --watch ./exports --interval 300 --max-cycles 288
```
Stop from anywhere: `touch ./BSL_STOP`

## Install
1. Review every file (~10 short files, by intent).
2. chrome://extensions -> Developer mode -> Load unpacked -> `extension/`.
3. Capture, export to ./exports, start scheduler as above.

## Honest state
Bytes-in-repo = confirmed (SHAs returned). System REAL requires the scheduler
running against your real spine and receipts coming back. Until then: PARTIAL.
