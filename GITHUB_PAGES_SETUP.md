# GITHUB PAGES DEPLOYMENT PLAN
## IP Portfolio Matrix - Public Web App

## Setup Instructions

### Step 1: Enable GitHub Pages

1. Go to: https://github.com/TML-4PM/t4h-research-hub/settings/pages
2. Source: **Deploy from a branch**
3. Branch: **main**
4. Folder: **/ (root)**
5. Click **Save**

### Step 2: Create index.html (Already Done)

File exists at: `research/ip-portfolio-matrix.html`

To make it the landing page:
- Option A: Rename to `index.html` in root
- Option B: Access via: `https://tml-4pm.github.io/t4h-research-hub/research/ip-portfolio-matrix.html`

### Step 3: Configure Custom Domain (Optional)

If you want: `ip.tech4humanity.com.au`

1. Add CNAME record in DNS:
   ```
   ip.tech4humanity.com.au -> tml-4pm.github.io
   ```

2. Create file `CNAME` in repo root:
   ```
   ip.tech4humanity.com.au
   ```

3. GitHub will auto-configure HTTPS

### Step 4: Access URLs

**Current (after enabling Pages):**
- Main site: `https://tml-4pm.github.io/t4h-research-hub/`
- IP Matrix: `https://tml-4pm.github.io/t4h-research-hub/research/ip-portfolio-matrix.html`

**After custom domain:**
- `https://ip.tech4humanity.com.au/`

---

## File Structure

```
t4h-research-hub/
├── index.html (landing page - create this)
├── CNAME (custom domain - optional)
├── research/
│   ├── ip-portfolio-matrix.html (interactive app)
│   ├── IP_INVENTORY_COMPLETE.md
│   ├── BIOMETRIC_INSURANCE_EXEC_SUMMARY.md
│   └── ip-portfolio-full-156.json (all innovations data)
├── presentations/
│   └── IP_PORTFOLIO_INVESTOR_DECK.md
└── patents/
    └── PROVISIONAL_PATENT_OUTLINES.md
```

---

## Landing Page Recommendation

Create `index.html` in repo root:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Tech 4 Humanity - Research Hub</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
        }
        h1 { color: #667eea; }
        .card {
            border: 2px solid #e2e8f0;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }
        a { color: #667eea; text-decoration: none; }
        a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <h1>Tech 4 Humanity - Research Hub</h1>
    <p>Innovation portfolio documentation and interactive tools</p>

    <div class="card">
        <h2>🎯 Interactive IP Portfolio Matrix</h2>
        <p>156 innovations scored, weighted, and ranked</p>
        <a href="research/ip-portfolio-matrix.html">Launch App →</a>
    </div>

    <div class="card">
        <h2>📄 Complete IP Inventory</h2>
        <p>Comprehensive audit with $350M-500M valuation</p>
        <a href="research/IP_INVENTORY_COMPLETE.md">View Document →</a>
    </div>

    <div class="card">
        <h2>📊 Investor Presentation</h2>
        <p>18-slide deck for fundraising and ATO meetings</p>
        <a href="presentations/IP_PORTFOLIO_INVESTOR_DECK.md">View Deck →</a>
    </div>

    <div class="card">
        <h2>📜 Patent Outlines</h2>
        <p>Provisional application drafts (82+ claims)</p>
        <a href="patents/PROVISIONAL_PATENT_OUTLINES.md">View Outlines →</a>
    </div>

    <footer style="margin-top: 50px; text-align: center; color: #718096;">
        <p>Tech 4 Humanity Pty Ltd (ABN 70 666 271 272)</p>
        <p><a href="https://tech4humanity.com.au">tech4humanity.com.au</a></p>
    </footer>
</body>
</html>
```

---

## Security & Privacy

**Public Access:** GitHub Pages is PUBLIC by default

**What to make public:**
- ✅ IP Portfolio Matrix (interactive tool)
- ✅ Investor deck (public facing)
- ❌ Complete inventory (too detailed - keep in private repo or auth-protect)
- ❌ Patent outlines (attorney-client privileged)

**Recommendation:**
- Keep `t4h-research-hub` repo **PRIVATE**
- Create separate **PUBLIC** repo: `t4h-ip-portfolio-public`
- Copy only: `ip-portfolio-matrix.html` + `index.html`
- Deploy Pages from public repo

---

## Performance Optimization

### Current Matrix App:
- Size: ~50KB HTML
- Load time: <1 second
- Works offline: Yes
- Mobile responsive: Yes

### With Full 156 Innovations:
- Size: ~200KB HTML (manageable)
- Load time: <2 seconds
- Recommendation: Lazy load details (only expand on click)

---

## Next Steps

1. **Enable GitHub Pages** (5 minutes)
   - Settings → Pages → Enable

2. **Create index.html landing page** (optional)
   - Copy template above
   - Commit to repo root

3. **Test deployment** (wait 2-3 minutes)
   - Visit: `https://tml-4pm.github.io/t4h-research-hub/`

4. **Configure custom domain** (optional)
   - Add CNAME DNS record
   - Add CNAME file to repo

5. **Share URL** with investors/attorneys

---

## Maintenance

**Auto-Deploy:** Every push to `main` branch triggers rebuild (2-3 min)

**Update Matrix:**
1. Edit `research/ip-portfolio-matrix.html`
2. Commit + push
3. GitHub auto-deploys

**Analytics (Optional):**
Add Google Analytics to track visitors:
```html
<!-- Add to <head> of index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

**STATUS:** Configuration documented, ready to enable

**ACTION REQUIRED:** Troy to enable GitHub Pages in repo settings
