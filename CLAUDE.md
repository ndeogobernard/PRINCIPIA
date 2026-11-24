# Instructions for AI assistants

## Design system: required for all UI work

Before you create or change any user interface (HTML, CSS, components, pages, emails, images of UI), read **`design-system/DESIGN_SYSTEM.md`** in full and follow it exactly.

1. **Use only tokens.** Every colour, font, size, line height, letter-spacing, space, radius, border, shadow, duration, easing, z-index and breakpoint must come from `design-system/tokens.json`. In code, use them through `design-system/tokens.css` (`var(--color-text-primary)`, `.type-h1`) or `design-system/tailwind.preset.js` (`text-primary`, `text-h1`, `rounded-pill`). Never hard-code a raw value such as `#23233c` or `17px` in a component.
2. **Use semantic colour roles**, such as `text.primary`, `bg.surface` and `action.primary.bg`. Do not use primitives such as `color.blue.600` in components.
3. **Build from the components in §10** of the design system, with every state they define (hover, focus, active, disabled, loading, error).
4. **Check accessibility**: only use text and background pairs listed in §2.5, show the 4px mint focus ring on `:focus-visible`, and respect `prefers-reduced-motion`.
5. **Run the review checklist in §15** before you call UI work done.

## Changing the design system

- Edit `design-system/tokens.json`. Never edit `tokens.css` or `tailwind.preset.js` by hand; they are generated.
- Then run:
  ```bash
  node design-system/scripts/build.mjs
  ```
  ```bash
  node design-system/scripts/check.mjs
  ```
- Update `DESIGN_SYSTEM.md` so it documents every new or changed value with its reasoning. The check fails if the document and the tokens disagree.
- Bump the version and add a changelog entry (§16).
- If a design needs a value that is not a token, add the token and document it. Do not use a one-off value.

## This repository

- The PRINCIPIA website lives in `site/` and is deployed to GitHub Pages from `main`. Site notes are in `notes/site-notes.md`.
- Work on the `main` branch.
- Commits and all content are attributed to the repository owner. Do not add AI attribution or co-author lines anywhere.
