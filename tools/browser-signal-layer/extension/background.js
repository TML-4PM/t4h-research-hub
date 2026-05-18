// background.js — service worker. Local-first. Makes NO network requests.
import { domainAllowed, scrubText, scrubUrl } from "./redact.js";
import { buildEnvelope } from "./envelope.js";

const KEY = "bsl_captures";

async function getCaptures() {
  const r = await chrome.storage.local.get(KEY);
  return r[KEY] || [];
}
async function saveCapture(env) {
  const list = await getCaptures();
  list.unshift(env);
  await chrome.storage.local.set({ [KEY]: list.slice(0, 500) }); // bounded ring
}

chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  (async () => {
    if (msg.type === "CAPTURE") {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (!tab || !tab.url) return sendResponse({ ok: false, error: "no_active_tab" });

      const gate = domainAllowed(tab.url);
      if (!gate.ok) return sendResponse({ ok: false, error: "domain_blocked", reason: gate.reason });

      let injected;
      try {
        const res = await chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["content.js"]
        });
        injected = res && res[0] && res[0].result;
      } catch (e) {
        return sendResponse({ ok: false, error: "inject_failed", detail: String(e) });
      }
      if (!injected) return sendResponse({ ok: false, error: "no_signal" });

      const urlR = scrubUrl(injected.url);
      const selR = scrubText(injected.selection);
      const txtR = scrubText(injected.visible_text_sample);
      const ttlR = scrubText(injected.title);

      const scrubbed = {
        ...injected,
        url: urlR.clean,
        title: ttlR.clean,
        selection: selR.clean,
        visible_text_sample: txtR.clean
      };
      const redaction = {
        url_params_stripped: urlR.stripped,
        secret_hits: selR.hits + txtR.hits + ttlR.hits
      };

      const env = await buildEnvelope(scrubbed, { redaction });
      await saveCapture(env);
      return sendResponse({ ok: true, envelope: env });
    }

    if (msg.type === "LIST") return sendResponse({ ok: true, list: await getCaptures() });
    if (msg.type === "CLEAR") { await chrome.storage.local.set({ [KEY]: [] }); return sendResponse({ ok: true }); }
    if (msg.type === "EXPORT") return sendResponse({ ok: true, list: await getCaptures() });

    return sendResponse({ ok: false, error: "unknown_message" });
  })();
  return true; // async
});
