# PRINCIPIA website notes

The site source is in `site/`. Live site: https://ndeogobernard.github.io/PRINCIPIA/
GitHub Pages deploys it automatically from `main` (`.github/workflows/pages.yml`).

To preview it locally, run this from the repo root:

```bash
python3 -m http.server -d site 8000
```

## Pages

| Page | Folder |
|---|---|
| Home | `site/index.html` |
| OpenFiberPlus | `site/openfiberplus/` |
| Civil Intel | `site/civil-intel/` |
| PRINCIPIA Connect | `site/connect/` |
| PRINCIPIA Convert | `site/convert/` |
| Industries | `site/industries/` |
| Services | `site/services/` |
| Research | `site/research/` |
| Documentation | `site/documentation/` |
| Open Source | `site/open-source/` |
| Support | `site/support/` |
| About | `site/about/` |
| Contact | `site/contact/` |
| Privacy Policy | `site/privacy/` |

## Placeholders to fill in

| Placeholder | Replace with |
|---|---|
| `info@principia.example` | the real contact email |
| `https://www.principia.example` | the real domain (used in meta tags and the newsletter form) |
| `href="#"` links | GitHub, LinkedIn, bug reports, "Get OpenFiberPlus", "Become a sponsor" |

## Still to do

- Connect the newsletter signup to a mailing service.
- Add publications to the Research page and guides to Documentation.
- Have the Privacy Policy reviewed.

## Files kept for repurposing

These came from the original site. No page links to them yet; they are kept so they can be reworked for PRINCIPIA and linked again.

| What | Where |
|---|---|
| Product screenshots (map, schematic, splice manager, manhole editor) | `site/wp-content/uploads/2026/08/principia-designer-*.webp` |
| CAD feature images (ribbon, schematic, cabinet splitter, bill of materials, loss budget, element data) | `site/wp-content/uploads/2026/08/1-ribbon*.png` to `6-element-data*.png` |
| Screenshots (project, preview map, screen capture) | `site/wp-content/uploads/2025/12/` |
| Contributor certificate | `site/wp-content/uploads/2025/12/principia_contributor_certificate_*` |
| PDF guides (help, validation, interchange format, schema, versioning, workflow, user guides) | `site/wp-content/uploads/2026/01` to `2026/11` |
| QA-test reports | `site/wp-content/uploads/2026/11/principia-1.6.0-QA-Tests-*.html` |
| Add-in download package | `site/download/principia-addin.zip` |

Their contents still show the original FiberQ material until they are reworked.

## Brand and design system

- **Brand kit:** `brand/` holds the guidelines PDF, logos, app icon and favicon, colours and fonts. Treat it as read-only source material.
- **Design system:** `design-system/DESIGN_SYSTEM.md` (v2.0.0) applies the brand. `tokens.json` is the source of truth; `tokens.css` and `tailwind.preset.js` are generated from it.
- **How the site uses them:**
  - `site/wp-content/themes/principia/tokens.css` is a copy of `design-system/tokens.css`. The deploy workflow refreshes it automatically; for local previews, copy it again after rebuilding the tokens.
  - `principia.css` (same folder) styles the site using only token variables. `principia.js` adds the scroll reveal and the header shadow.
  - Fonts: Space Grotesk and Inter as WOFF2 in `site/wp-content/themes/principia/fonts/`, converted from `brand/04-Fonts/`.
  - Logo: `site/wp-content/themes/principia/brand/PRINCIPIA-logo-*.svg`, copied from `brand/01-Logo/Primary-Logo/SVG/`.
  - Favicon and app icons: `favicon.ico`, `favicon.svg`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png` and `site.webmanifest` in `site/`, copied from `brand/02-App-Icon-and-Favicon/`.
