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
| Logo and favicon | `wp-content/uploads/2026/04/` (header logo) and `wp-content/uploads/2025/12/principia_site_icon_*` (favicon); keep the same file names |

## Still to do

- Connect the newsletter signup to a mailing service.
- Add publications to the Research page and guides to Documentation.
- Have the Privacy Policy reviewed.
- Replace the Reddit social icon in the footer, or remove it.
