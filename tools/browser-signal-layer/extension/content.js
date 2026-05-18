// content.js — injected on demand via chrome.scripting on user click ONLY.
// Pulls a structured "work signal" from the page. Never auto-runs.

function inferPageType(url, title) {
  const u = url.toLowerCase();
  if (u.includes("github.com")) {
    if (u.includes("/issues/")) return "github_issue";
    if (u.includes("/pull/")) return "github_pr";
    if (u.includes("/commit/")) return "github_commit";
    if (u.includes("/actions")) return "github_ci";
    return "github_repo";
  }
  if (u.includes("supabase")) return "supabase_console";
  if (u.includes("vercel.com")) return "vercel_deploy";
  if (u.includes("docs.") || u.includes("/docs")) return "documentation";
  if (u.includes("claude.ai") || u.includes("chatgpt") || u.includes("openai.com")) return "llm_session";
  if (u.includes("stackoverflow") || u.includes("stackexchange")) return "qa_thread";
  return "generic";
}

(() => {
  const sel = (window.getSelection && window.getSelection().toString()) || "";
  const h1 = document.querySelector("h1");
  const signal = {
    url: location.href,
    title: document.title || "",
    page_type: inferPageType(location.href, document.title || ""),
    heading: h1 ? h1.innerText.slice(0, 200) : "",
    selection: sel.slice(0, 2000),
    visible_text_sample: (document.body ? document.body.innerText : "").slice(0, 3000),
    captured_at: new Date().toISOString()
  };
  // hand back via return value of executeScript
  return signal;
})();
