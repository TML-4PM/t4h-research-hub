# Future Frontiers Pitch — 2026-07

**Status:** scaffold landed; content paste pending
**Cluster:** AMR-CLOSEOUT-2026-05-22

## Expected layout

| File | Approx size | Purpose |
|---|---|---|
| `01-future-frontiers.html` | 452 KB | Section 1 of pitch |
| `02-other-topics.html` | 1.07 MB | Section 2 |
| `03-format-menu.html` | 41 KB | Format/agenda menu |
| `04-about.html` | 475 KB | About / closing |
| `index.html` | — | Entry point linking the 4 sections |
| `README.md` | (this) | Folder index |

## How to drop content

For each of the 4 HTML files, call (from any SQL client connected to S1):

```sql
SELECT public.fn_stage_file(
  p_target_repo  := 'TML-4PM/t4h-research-hub',
  p_target_path  := 'frontiers/2026-07-future-frontiers-pitch/01-future-frontiers.html',
  p_content_text := <paste HTML as E-string>,
  p_mime_type    := 'text/html',
  p_cluster_id   := 'AMR-CLOSEOUT-2026-05-22'
);
```

Then ping the bridge — it drains `v_t4h_file_staging_pending`, pushes via `github_bulk_dispatch`, calls `fn_mark_file_pushed`, and auto-writes the `reality_ledger` receipt.

## Path C alternative

If you prefer to `git clone` and push directly from your Mac, that also works — perimeter is verified (commit `d27857ba` on `the-pen` proved it).
