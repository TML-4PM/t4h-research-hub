// redact.js — defensive scrubbing. This is the most important file in the project.
// Troy's own risk model: secret leakage is the failure mode that burns keys.
// Strategy: deny by default at the domain layer, then strip aggressively at the content layer.

export const DENY_DOMAINS = [
  // never capture anything on these, even on explicit click
  "accounts.google.com",
  "console.aws.amazon.com",       // signed console URLs leak session tokens
  "signin.aws.amazon.com",
  "supabase.com/dashboard",
  "vercel.com/account",
  "github.com/settings",
  "*/login", "*/signin", "*/sso", "*/oauth", "*/auth/callback"
];

// If non-empty, ONLY these domains may be captured (project-scoped capture).
// Empty = allow any domain that is not denied.
export const ALLOW_DOMAINS = [];

const SECRET_PATTERNS = [
  /\b(?:sk|pk|rk|bk)_[A-Za-z0-9]{12,}\b/g,            // stripe / bridge style keys
  /\bghp_[A-Za-z0-9]{36,}\b/g,                         // github PAT
  /\bgithub_pat_[A-Za-z0-9_]{20,}\b/g,
  /\bAKIA[0-9A-Z]{16}\b/g,                             // aws access key id
  /\bASIA[0-9A-Z]{16}\b/g,                             // aws temp key id
  /\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/g, // jwt / supabase
  /\bxox[baprs]-[A-Za-z0-9-]{10,}\b/g,                 // slack tokens
  /\b[0-9]{6,10}:[A-Za-z0-9_-]{30,}\b/g,               // telegram bot token
  /(?:authorization|api[-_ ]?key|secret|token|password|bearer)\s*[:=]\s*\S+/gi,
  /-----BEGIN [A-Z ]*PRIVATE KEY-----[\s\S]*?-----END [A-Z ]*PRIVATE KEY-----/g
];

const EMAIL = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g;

function globMatch(host, path, pattern) {
  const target = host + path;
  if (pattern.includes("*")) {
    const re = new RegExp("^" + pattern.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*") + "$");
    return re.test(target) || re.test(host);
  }
  return host.includes(pattern) || target.includes(pattern);
}

export function domainAllowed(urlStr) {
  let u;
  try { u = new URL(urlStr); } catch { return { ok: false, reason: "unparseable_url" }; }
  const host = u.hostname, path = u.pathname;
  for (const d of DENY_DOMAINS) {
    if (globMatch(host, path, d)) return { ok: false, reason: "deny_domain:" + d };
  }
  if (ALLOW_DOMAINS.length > 0) {
    const hit = ALLOW_DOMAINS.some(d => globMatch(host, path, d));
    if (!hit) return { ok: false, reason: "not_in_allowlist" };
  }
  return { ok: true, reason: "ok" };
}

export function scrubText(text, { dropEmails = true } = {}) {
  if (!text) return { clean: "", hits: 0 };
  let hits = 0, out = text;
  for (const re of SECRET_PATTERNS) {
    out = out.replace(re, m => { hits++; return "[REDACTED:secret]"; });
  }
  if (dropEmails) out = out.replace(EMAIL, () => { hits++; return "[REDACTED:email]"; });
  // strip query strings that look like they carry tokens
  out = out.replace(/([?&](?:access_token|token|code|key|sig|signature|session)=)[^&\s]+/gi,
    (_, p) => { hits++; return p + "[REDACTED:qs]"; });
  return { clean: out, hits };
}

export function scrubUrl(urlStr) {
  try {
    const u = new URL(urlStr);
    const drop = ["access_token","token","code","key","sig","signature","session","id_token","client_secret"];
    let stripped = 0;
    for (const k of drop) if (u.searchParams.has(k)) { u.searchParams.set(k, "[REDACTED]"); stripped++; }
    return { clean: u.toString(), stripped };
  } catch {
    return { clean: "[unparseable]", stripped: 0 };
  }
}
