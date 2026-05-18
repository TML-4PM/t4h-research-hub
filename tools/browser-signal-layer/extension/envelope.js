// envelope.js — turns a scrubbed signal into a spine-shaped envelope.
// It deliberately classifies as PARTIAL. It does NOT classify REAL, because
// REAL requires a receipt the extension cannot produce by itself.
// This matches the kernel's own rule: no_receipt_no_REAL.

async function sha256(str) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
}

function uuid() {
  return crypto.randomUUID ? crypto.randomUUID()
    : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
        const r = (Math.random() * 16) | 0;
        return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
      });
}

export async function buildEnvelope(scrubbedSignal, ctx) {
  const payload = {
    actor_id: ctx.actor_id || "troy",
    tenant_id: ctx.tenant_id || "t4h",
    runtime_id: "browser-signal-layer",
    execution_id: uuid(),
    session_id: ctx.session_id || uuid(),
    execution_nonce: uuid(),
    captured_at: scrubbedSignal.captured_at,
    source: "browser",
    page_type: scrubbedSignal.page_type,
    signal: scrubbedSignal,
    redaction: ctx.redaction,         // hit counts so leakage is auditable
    classification: "PARTIAL",        // never REAL from here — no receipt yet
    evidence: [{ type: "runtime_hash", value: null }],
    next_action: "manual_handoff_required"
  };
  payload.evidence[0].value = await sha256(JSON.stringify(payload.signal));
  payload.envelope_hash = await sha256(JSON.stringify(payload));
  return payload;
}
