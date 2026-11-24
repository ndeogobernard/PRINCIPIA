# PRINCIPIA website

A static website based on the fiberq.net mirror, with the same pages, layout and assets, rebranded to PRINCIPIA.

Live site: https://ndeogobernard.github.io/PRINCIPIA/ (deployed automatically from `main` by `.github/workflows/pages.yml`).

To preview locally, open `index.html` in a browser or run:

```bash
python3 -m http.server -d site 8000
```

## What has been changed

- The brand name "FiberQ" has been replaced with **PRINCIPIA** in all visible text, page titles and meta tags.
- There is a new placeholder logo and favicon in `wp-content/uploads/principia/`, and the old FiberQ logo and icons have been removed.
- The FiberQ domain, contact email and the original author's personal LinkedIn, GitHub, Reddit and sponsor links have been replaced with placeholders.
- The newsletter form no longer sends signups to FiberQ's server.
- WordPress-only head links (xmlrpc, wp-json, feeds, oEmbed) have been removed.

## Placeholders to fill in

| Placeholder | Where | Replace with |
|---|---|---|
| `https://www.principia.example` | canonical/meta URLs, newsletter `ajax_url` | PRINCIPIA's real domain |
| `info@principia.example` | contact `mailto:` links | PRINCIPIA's contact email |
| `href="#"` (social / GitHub / sponsor links) | footer, hero buttons, About and Donate pages | real profile URLs, or remove them |
| `wp-content/uploads/principia/*` | header logo, favicon | the real logo files (keep the same file names) |

## Still FiberQ content (replace before going live)

The text still describes FiberQ's fiber-network products (QGIS plugin, Schematics, CAD, Designer), with only the name swapped.
These all need PRINCIPIA's own content:

- Body copy on all pages
- Product screenshots in `wp-content/uploads/2025/12`, `2026/08`
- PDFs and QA reports in `wp-content/uploads/2026/*`
- The contributor certificate image
- The `download/fiberq/` archive
- Third-party links (NLnet, QGIS plugins, Autodesk Marketplace)
- Page folder names such as `fiberq-qgis-plugin/` (renaming these means updating links)
