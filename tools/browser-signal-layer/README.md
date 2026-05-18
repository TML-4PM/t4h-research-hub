# Browser Signal Layer (owned) — MVP

The browser as the missing sensor between intent and execution — but owned, local-first, consent-gated. Captures the work, not the worker.

## Does
- Click-activated capture only. No `history` permission. No host permissions. No background scanning.
- Redaction BEFORE storage: stripe/bridge/PAT/AWS/JWT/Slack/Telegram key shapes, Authorization lines, PEM blocks, token query params, emails. Deny-list covers console/SSO/auth surfaces.
- Deterministic hashed envelope (actor/tenant/execution/session/nonce). Stamped PARTIAL. Never REAL from the browser — no receipt there.
- Local-only `chrome.storage.local`, bounded ring of 500. JSON export.

## Does NOT, by design
Sends nothing anywhere. The runner (`runner/runner.js`) is a separate script you invoke: dry-run by default, no embedded credential, processes one file and exits, no loop/cron/self-retrigger.

## Install
1. Review every file (~7 short files, by intent).
2. chrome://extensions -> Developer mode -> Load unpacked -> `extension/`.
3. Use it, export, then `node runner/runner.js exported.json` (dry-run). Real send: `BRIDGE_URL=... BRIDGE_KEY=... node runner/runner.js f.json --send`.

Classification stays PARTIAL until your spine returns a receipt. Receipt-driven REAL is your ledger's call, not the tool's.
