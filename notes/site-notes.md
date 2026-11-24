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

## Design system

The styles live in `site/wp-content/themes/principia/principia.css`, and the motion script in `principia.js`. Every page loads both after the WordPress styles. Change a design token there and it applies across the whole site.

| Token | Value |
|---|---|
| Typeface | DM Sans (self-hosted, SIL Open Font License); labels use IBM Plex Mono |
| Text colours | ink `#23233c`, secondary `#5f6575` |
| Accents | blue `#0077ff` (links), `#006fee` (buttons), green `#00e89d` (highlight) |
| Surfaces | white, light grey `#f2f2f2` (cards, footer), navy `#061e4d` and `#050f1e` (dark panels) |
| Type scale | H1 up to 72px, H2 up to 50px, H3 24px, body 16px/24px; tight negative letter-spacing on headings |
| Labels | 12px mono uppercase with 0.1em letter-spacing |
| Radii | 16px cards, 20px panels, full-pill buttons |
| Shadows | none (flat surfaces, hairline dividers) |
| Buttons | blue pill (primary), ink-outline pill (secondary), slight scale on hover |
| Links | blue; underline slides in on hover |
| Motion | sections fade and rise on scroll (0.6–0.8s, `cubic-bezier(.17,.17,.34,1)`); turned off for visitors who prefer reduced motion |

## Logo and favicon

- The brand kit is stored in `brand/` (guidelines PDF, logo files, app icon and favicon, colours, fonts).
- The header and footer use `site/wp-content/themes/principia/brand/PRINCIPIA-logo-color.svg`, copied from `brand/01-Logo/Primary-Logo/SVG/`. The reversed and white versions are in the same folder.
- The favicon and app icons (`favicon.ico`, `favicon.svg`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `site.webmanifest`) are in `site/`, copied from `brand/02-App-Icon-and-Favicon/`.
- Only the logo and favicon come from the brand kit; the site's fonts and colours are unchanged.
