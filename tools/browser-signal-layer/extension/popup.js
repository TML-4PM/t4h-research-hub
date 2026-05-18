const send = m => new Promise(r => chrome.runtime.sendMessage(m, r));
const $ = s => document.querySelector(s);
let mode = "click";

document.querySelectorAll(".modes button").forEach(b => {
  b.onclick = () => {
    document.querySelectorAll(".modes button").forEach(x => x.classList.remove("on"));
    b.classList.add("on");
    mode = b.dataset.mode;
    $("#cap").disabled = (mode === "off");
    $("#cap").style.opacity = (mode === "off") ? .4 : 1;
    $("#status").textContent = mode === "off"
      ? "Capture disabled."
      : mode === "project"
        ? "Project mode: only allow-listed domains (edit ALLOW_DOMAINS in redact.js)."
        : "Click mode: captures the current page on demand only.";
  };
});

$("#cap").onclick = async () => {
  $("#status").textContent = "Capturing…";
  const r = await send({ type: "CAPTURE" });
  if (!r || !r.ok) {
    $("#status").innerHTML = `<span class="tag t-blocked">BLOCKED</span> ${r ? (r.error + (r.reason ? " — " + r.reason : "")) : "no response"}`;
  } else {
    const e = r.envelope;
    const leak = e.redaction.secret_hits;
    $("#status").innerHTML =
      `<span class="tag t-partial">PARTIAL</span> captured ${e.page_type}\n` +
      `hash ${e.envelope_hash.slice(0, 16)}…\n` +
      `redaction: ${leak} secret hit(s) stripped, ${e.redaction.url_params_stripped} url param(s)\n` +
      `next: manual handoff (runner) — nothing sent.`;
  }
  refresh();
};

$("#export").onclick = async () => {
  const r = await send({ type: "EXPORT" });
  const blob = new Blob([JSON.stringify(r.list, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = `bsl-envelopes-${Date.now()}.json`; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
};

$("#clear").onclick = async () => {
  if (!confirm("Clear all locally stored envelopes?")) return;
  await send({ type: "CLEAR" }); refresh();
};

async function refresh() {
  const r = await send({ type: "LIST" });
  const log = $("#log");
  log.innerHTML = "";
  (r.list || []).slice(0, 12).forEach(e => {
    const d = document.createElement("div");
    d.className = "item";
    d.innerHTML = `<b>${e.page_type}</b> · ${new Date(e.captured_at).toLocaleTimeString()} · ${e.envelope_hash.slice(0,10)} · ${e.classification}`;
    log.appendChild(d);
  });
}
refresh();
