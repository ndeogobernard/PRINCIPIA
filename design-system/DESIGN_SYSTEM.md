# Design System

**Version 1.0.0** · Token source: [`tokens.json`](tokens.json) · Generated outputs: [`tokens.css`](tokens.css), [`tailwind.preset.js`](tailwind.preset.js)

This document is the single source of truth for the visual language of every website and product built under this system: landing pages, web apps, dashboards, e-commerce and documentation. It describes a **visual language**. It does not describe any particular page layout or content.

**How to read this document**

- Every value is exact. Use it as written; do not round it or approximate it.
- Values measured directly from the reference implementation's CSS or rendered pages are unmarked.
- Values derived because the reference does not define them are marked **(inferred)**, with the reasoning given.
- Pixel values assume a 16px root, so `1rem = 16px`. Letter-spacing is in `em`, so it scales with font size.
- Every value here exists in `tokens.json`, and every token in `tokens.json` appears here. `node design-system/scripts/check.mjs` verifies this.
- In code, **always use the token, never the raw value**. Write `var(--color-text-primary)` or the Tailwind class `text-primary`, not `#23233c`.

**Contents**

1. [Overview](#1-overview)
2. [Color](#2-color)
3. [Typography](#3-typography)
4. [Visual hierarchy](#4-visual-hierarchy)
5. [Layout and grid](#5-layout-and-grid)
6. [Spacing](#6-spacing)
7. [Shape and elevation](#7-shape-and-elevation)
8. [Imagery and iconography](#8-imagery-and-iconography)
9. [Motion](#9-motion)
10. [Components](#10-components)
11. [Accessibility](#11-accessibility)
12. [Responsive behavior](#12-responsive-behavior)
13. [Do / Don't](#13-do--dont)
14. [Applying the system to a new project](#14-applying-the-system-to-a-new-project)
15. [Review checklist](#15-review-checklist)
16. [Versioning](#16-versioning)

---

## 1. Overview

### Philosophy

This is a system of **quiet confidence**. Pages are mostly white space and calm, cool neutrals, with a single electric blue for action. Hierarchy comes from **scale, not weight**: almost everything is set in one regular (400) weight, and importance is shown by making type dramatically larger and tracking it tighter, never by making it bolder. Surfaces are flat. Depth comes from contrast between light and dark bands and from full-bleed imagery, not from drop shadows. Interactive things are unmistakable: actions are pill-shaped, and keyboard focus is a thick mint ring that cannot be missed. Motion is short and physical, and it confirms what the user did rather than decorating the page. The result should feel precise, trustworthy and technically advanced, without ever shouting.

### Core principles

| # | Principle | Rationale |
|---|---|---|
| 1 | **One weight, many sizes.** Regular (400) is the default for everything, headlines included. 500 is for small labels; 700 appears only inside running text for emphasis. | Size contrast reads as confident. Bold reads as loud. A single weight also keeps the page visually even. |
| 2 | **Tighter tracking as type gets larger.** Body text is −0.02em, headings are −0.04em and the largest display type is −0.05em. | Large type set at default spacing looks loose. Progressive tightening keeps word shapes compact and deliberate. |
| 3 | **Calm neutrals, one action colour.** Cool slate neutrals do the work. Blue is reserved for things you can click or act on. | When colour appears only where an action is possible, the user never has to guess what is interactive. |
| 4 | **Flat surfaces, no decorative shadows.** Separate areas with surface colour, hairline dividers and light and dark bands. Shadows are only for things that float above the page (menus, toasts, modals). | Shadows on static content add noise and imply false physicality. Flat planes look precise and engineered. |
| 5 | **Pills for actions, soft corners for containers.** Buttons and chips are fully rounded. Cards and media use 16–20px corners. Form fields use 3–4px. | Shape is a signal. Round means "press me", softly rounded means "a group of content" and nearly square means "type here". |
| 6 | **Generous, fixed rhythm.** Wide outer margins (108px on desktop) and large vertical gaps (72–140px) between sections. | White space makes each idea feel important. Fixed steps keep pages consistent no matter who builds them. |
| 7 | **Focus you cannot miss.** Keyboard focus is a 4px mint (`#00e89d`) outline, offset 2px, on every interactive element. | Accessibility is part of the brand. A distinctive ring helps keyboard users and signals care. |
| 8 | **Motion confirms, it does not decorate.** UI responses take 150–200ms. Content reveals take 600–800ms on a soft ease-out. Hover on actions is a 3–5% scale. | Short, physical motion makes the interface feel responsive. Anything longer or showier slows people down. |
| 9 | **Let media carry the story.** Real photography and video, full-bleed or in large rounded frames, often on black. | Imagery builds trust faster than decoration. Large frames give it authority. |
| 10 | **Colour by role, not by name.** Components reference roles (`text.primary`, `action.primary.bg`), never raw hex values. | A new brand colour can then be swapped in without touching a single component. |

---

## 2. Color

### 2.1 Primitive palette

These are the raw colours (`color.*` in `tokens.json`). **Components must never use primitives directly.** They use the semantic roles in §2.2.

#### Neutrals: ink and slate (cool blue-grey ramp)

| Token | Hex | Notes |
|---|---|---|
| `color.ink.900` | `#23233c` | Primary text. A deep blue-violet, softer than black. |
| `color.ink.600` | `#5f6575` | Secondary text |
| `color.slate.950` | `#050f1e` | Darkest surface ("night") |
| `color.slate.900` | `#132237` | Dark raised surface |
| `color.slate.850` | `#1f2a39` | Dark raised surface, level 2 |
| `color.slate.800` | `#2e3d4f` | Dark-mode border |
| `color.slate.700` | `#43546a` | Dark-mode strong border |
| `color.slate.600` | `#5d6e83` | Metadata text and checkbox borders on light backgrounds |
| `color.slate.500` | `#7c899a` | Form-field borders on light backgrounds, and tertiary text in dark mode |
| `color.slate.450` | `#949a9f` | Decorative dividers and disabled text |
| `color.slate.400` | `#a2abb9` | Secondary text in dark mode |
| `color.slate.300` | `#ccd3dc` | Light borders, toggle track (off) and progress tracks |
| `color.slate.200` | `#e5e9f0` | Default divider |
| `color.slate.100` | `#f4f6f9` | Subtle surface, hover tint |
| `color.slate.50` | `#fafafb` | Faintest surface (zebra rows in dense tables) |
| `color.gray.100` | `#f2f2f2` | Muted surface: footers and cards |
| `color.white` | `#ffffff` | Canvas |
| `color.black` | `#000000` | Media backgrounds only (behind photos and video) |

#### Accent: blue

| Token | Hex | Notes |
|---|---|---|
| `color.blue.50` | `#eaf3ff` | **(inferred)** Tinted background for info messages |
| `color.blue.400` | `#4da0ff` | **(inferred)** Accent text in dark mode. Lightened from `blue.500` until it reaches 7:1 on `slate.950`. |
| `color.blue.500` | `#0077ff` | Brand blue. Use for large text (24px and up), icons and on dark backgrounds only. |
| `color.blue.600` | `#006fee` | Action blue: primary buttons and accent text on light backgrounds |
| `color.blue.800` | `#033098` | Deep blue: pressed states, data visualisation and markers |
| `color.blue.850` | `#003366` | Deep-blue surface |
| `color.blue.900` | `#061e4d` | Navy surface for callout panels |

#### Highlight: green and teal

| Token | Hex | Notes |
|---|---|---|
| `color.green.400` | `#00e89d` | Mint. Focus ring and data highlights. **Never for text on light backgrounds** (1.61:1). |
| `color.green.300` | `#34d399` | **(inferred)** Success text in dark mode |
| `color.green.700` | `#00704a` | **(inferred)** Success text on light backgrounds. A darkened mint that meets AA. |
| `color.green.50` | `#e6fcf5` | **(inferred)** Tinted background for success messages |
| `color.teal.600` | `#00929d` | Secondary highlight for charts and illustration |

#### Status: red and amber

| Token | Hex | Notes |
|---|---|---|
| `color.red.600` | `#ea0000` | Error text, error borders and invalid fields |
| `color.red.700` | `#c40000` | **(inferred)** Hover and pressed state for destructive buttons, and error text on tinted backgrounds |
| `color.red.300` | `#ff5c5c` | **(inferred)** Error in dark mode |
| `color.red.50` | `#fdecec` | **(inferred)** Tinted background for error messages |
| `color.amber.700` | `#8f4b00` | **(inferred)** Warning text. The reference has no warning colour, so a warm amber was chosen that meets AA on white and on `amber.50`. |
| `color.amber.300` | `#ffb547` | **(inferred)** Warning in dark mode |
| `color.amber.50` | `#fff4e5` | **(inferred)** Tinted background for warning messages |

#### Alpha colours

| Token | Hex (with alpha) | Notes |
|---|---|---|
| `color.alpha.overlay` | `#00000080` | Black at 50%. Modal backdrop, and the glass button over video. |
| `color.alpha.shadow-1` | `#0000000a` | Black at 4%. Colour of shadow level 1. |
| `color.alpha.shadow-2` | `#050f1e1a` | Night at 10%. Colour of shadow level 2. |
| `color.alpha.shadow-3` | `#00000066` | Black at 40%. Colour of shadow level 3. |

### 2.2 Semantic roles

Components use only these (`semantic.light.*` and `semantic.dark.*` in `tokens.json`; `--color-*` in CSS). To rebrand, change which primitive a role points to (see §14), never the components.

| Role | Light mode | Dark mode | Use |
|---|---|---|---|
| `bg.canvas` | `white` `#ffffff` | `slate.950` `#050f1e` | Page background |
| `bg.surface` | `gray.100` `#f2f2f2` | `slate.900` `#132237` | Cards, footer and grouped content |
| `bg.subtle` | `slate.100` `#f4f6f9` | `slate.850` `#1f2a39` | Hover tints, table stripes, disabled inputs |
| `bg.inverse` | `slate.950` `#050f1e` | `white` `#ffffff` | Contrast bands, such as a dark section on a light page |
| `bg.brand` | `blue.900` `#061e4d` | `blue.900` `#061e4d` | Callout panels and promotional banners |
| `bg.media` | `black` `#000000` | `black` `#000000` | Behind images and video |
| `bg.overlay` | `alpha.overlay` `#00000080` | `alpha.overlay` `#00000080` | Modal backdrop |
| `text.primary` | `ink.900` `#23233c` | `white` `#ffffff` | Body copy and headings |
| `text.secondary` | `ink.600` `#5f6575` | `slate.400` `#a2abb9` | Supporting copy, descriptions and labels |
| `text.tertiary` | `slate.600` `#5d6e83` | `slate.500` `#7c899a` | Metadata, timestamps, footnotes and placeholders |
| `text.disabled` | `slate.450` `#949a9f` | `slate.600` `#5d6e83` | Disabled controls only (exempt from contrast minimums) |
| `text.inverse` | `white` `#ffffff` | `ink.900` `#23233c` | Text on `bg.inverse` |
| `text.accent` | `blue.600` `#006fee` | `blue.400` `#4da0ff` | Link hover and accent words |
| `text.on-action` | `white` `#ffffff` | `white` `#ffffff` | Text on primary and destructive buttons |
| `action.primary.bg` | `blue.600` `#006fee` | `blue.600` `#006fee` | Primary button fill |
| `action.primary.bg-hover` | `white` `#ffffff` | `slate.950` `#050f1e` | Primary button on hover (the fill inverts; see §2.4) |
| `action.primary.fg-hover` | `blue.600` `#006fee` | `blue.400` `#4da0ff` | Primary button text on hover |
| `action.primary.bg-pressed` | `blue.800` `#033098` | `blue.800` `#033098` | **(inferred)** Primary button while pressed |
| `action.secondary.border` | `ink.900` `#23233c` | `white` `#ffffff` | Outline button stroke and text |
| `action.destructive.bg` | `red.600` `#ea0000` | `red.600` `#ea0000` | **(inferred)** Destructive button fill |
| `action.destructive.bg-hover` | `red.700` `#c40000` | `red.700` `#c40000` | **(inferred)** Destructive button on hover and press |
| `border.default` | `slate.200` `#e5e9f0` | `slate.800` `#2e3d4f` | Dividers and card outlines |
| `border.strong` | `slate.450` `#949a9f` | `slate.700` `#43546a` | Emphasised decorative rules (not form controls) |
| `border.input` | `slate.500` `#7c899a` | `slate.500` `#7c899a` | Text inputs and selects (meets 3:1 for non-text contrast) |
| `border.input-hover` | `slate.600` `#5d6e83` | `slate.400` `#a2abb9` | **(inferred)** Input border on hover |
| `border.control` | `slate.600` `#5d6e83` | `slate.400` `#a2abb9` | Checkboxes and radio buttons |
| `focus.ring` | `green.400` `#00e89d` | `green.400` `#00e89d` | Keyboard focus outline on every interactive element |
| `highlight` | `green.400` `#00e89d` | `green.400` `#00e89d` | Data highlights, active markers and the toggle "on" track |
| `status.success.fg` / `.bg` | `green.700` / `green.50` | `green.300` / `slate.900` | **(inferred)** Success |
| `status.warning.fg` / `.bg` | `amber.700` / `amber.50` | `amber.300` / `slate.900` | **(inferred)** Warning |
| `status.error.fg` / `.bg` | `red.600` / `red.50` | `red.300` / `slate.900` | Error (light foreground measured; the rest inferred) |
| `status.error.fg-strong` | `red.700` `#c40000` | `red.300` `#ff5c5c` | **(inferred)** Error text inside a tinted error alert |
| `status.info.fg` / `.bg` | `blue.600` / `blue.50` | `blue.400` / `slate.900` | **(inferred)** Info |

**Dark mode (inferred).** The reference has no dark-mode switch. It does have many dark sections, built from `slate.950`, `blue.900` and `black` with white and `slate.400` text. The dark column above uses those same colours, so dark mode looks like one of the reference's own dark sections stretched across the whole page. Only text-accent and status colours had to be lightened to keep AA contrast. Turn it on with `data-theme="dark"` on `<html>`. Without a `data-theme` attribute, the page follows the operating-system setting.

### 2.3 Usage ratio: 70 / 20 / 8 / 2 (inferred from an element-colour count of the reference)

| Share | What | Why |
|---|---|---|
| **70%** | Light neutral surfaces: `bg.canvas` and `bg.surface`, mostly white space | Calm, open and premium |
| **20%** | Ink and dark surfaces: text, `bg.inverse` bands and media | Gives the page weight and rhythm, and alternating light and dark bands replace shadows |
| **8%** | Action blue | Buttons, accent text and selected states. Scarcity is what makes blue mean "act here". |
| **2%** | Mint highlight | Focus rings and one-off data highlights. Never for decoration. |

A screen that is noticeably more than 10% blue is over-using the accent. Use outline buttons or text links for secondary actions instead.

### 2.4 Interactive states

| Element | Default | Hover | Focus-visible | Active / pressed | Disabled |
|---|---|---|---|---|---|
| Primary button | bg `#006fee`, text `#ffffff`, 1px border `#006fee` | bg `#ffffff`, text `#006fee`, border `#006fee` (inverts), scale 1.05 | 4px `#00e89d` outline, 2px offset | scale 0.98, bg `#033098` **(inferred)** | opacity 0.5, `cursor: not-allowed` |
| Secondary (outline) button | transparent, text and 1px border `#23233c` | bg `#23233c`, text `#ffffff`, scale 1.05 **(inferred, mirrors primary)** | as above | scale 0.98 | opacity 0.5 |
| Destructive button **(inferred)** | bg `#ea0000`, text `#ffffff` | bg `#c40000`, scale 1.05 | as above | scale 0.98, bg `#c40000` | opacity 0.5 |
| Text link (in body copy) | inherits text colour, no underline | colour `#006fee` | as above | colour `#033098` **(inferred)** | `#949a9f` |
| Navigation link | `#23233c` | `#006fee` | as above | n/a | n/a |
| Text input | border 1px `#7c899a`, bg `#ffffff` | border `#5d6e83` **(inferred)** | as above | n/a | bg `#f4f6f9`, text `#949a9f` |
| Invalid input | border 1px `#ea0000`, text `#ea0000` | n/a | as above | n/a | n/a |

**Deviation from the reference (on purpose).** The reference turns links `#0077ff` on hover. On white that is **4.13:1**, which fails WCAG AA for normal-size text. This system uses `#006fee` (**4.66:1**) for accent text on light backgrounds. `#0077ff` stays available for large text (24px and up), icons and dark backgrounds, where it passes.

### 2.5 Contrast ratios (WCAG 2.2)

Thresholds: **AA** needs 4.5:1 for normal text and 3:1 for large text (24px and up, or 18.66px bold) and for UI components. **AAA** needs 7:1.

| Foreground | Background | Ratio | Result | Allowed use |
|---|---|---|---|---|
| `#23233c` text.primary | `#ffffff` canvas | **15.25** | AAA | All text |
| `#23233c` | `#f2f2f2` surface | **13.62** | AAA | All text |
| `#23233c` | `#f4f6f9` subtle | **14.09** | AAA | All text |
| `#23233c` | `#e5e9f0` | **12.52** | AAA | All text |
| `#5f6575` text.secondary | `#ffffff` | **5.83** | AA | All text |
| `#5f6575` | `#f2f2f2` | **5.20** | AA | All text |
| `#5f6575` | `#f4f6f9` | **5.38** | AA | All text |
| `#5d6e83` text.tertiary | `#ffffff` | **5.22** | AA | All text |
| `#5d6e83` | `#f2f2f2` | **4.66** | AA | All text |
| `#7c899a` border.input | `#ffffff` | **3.56** | AA (non-text) | Borders and icons, or large text only |
| `#949a9f` | `#ffffff` | **2.84** | Fails | Disabled text and decorative dividers only |
| `#ccd3dc` | `#ffffff` | **1.51** | Fails | Decorative tracks only |
| `#ffffff` text.on-action | `#006fee` action | **4.66** | AA | Button labels |
| `#006fee` text.accent | `#ffffff` | **4.66** | AA | Links and accent text |
| `#0077ff` brand blue | `#ffffff` | **4.13** | AA large only | 24px and up, icons |
| `#0077ff` | `#f2f2f2` | **3.69** | AA large only | 24px and up, icons |
| `#ffffff` | `#033098` | **11.17** | AAA | All text |
| `#ffffff` | `#061e4d` bg.brand | **16.15** | AAA | All text |
| `#ffffff` | `#003366` | **12.61** | AAA | All text |
| `#ea0000` error | `#ffffff` | **4.67** | AA | Error text and borders |
| `#ffffff` | `#ea0000` | **4.67** | AA | Destructive button label |
| `#c40000` | `#fdecec` error bg | **5.49** | AA | Error text in alerts |
| `#00704a` success | `#ffffff` | **6.15** | AA | Success text |
| `#00704a` | `#e6fcf5` success bg | **5.74** | AA | Success text in alerts |
| `#8f4b00` warning | `#ffffff` | **6.62** | AA | Warning text |
| `#8f4b00` | `#fff4e5` warning bg | **6.09** | AA | Warning text in alerts |
| `#006fee` info | `#eaf3ff` info bg | **4.16** | AA large / non-text | Icons and titles of 24px and up. Use `#23233c` for body text in info alerts. |
| `#00e89d` focus | `#ffffff` | **1.61** | Fails as text | Never text. As a 4px ring it relies on its thickness and offset against the element. |
| `#00e89d` | `#23233c` | **9.46** | AAA | Highlight text on ink |
| `#00e89d` | `#050f1e` | **11.92** | AAA | Highlight text and focus ring in dark mode |
| `#00929d` teal | `#ffffff` | **3.75** | AA large only | Charts and icons |
| **Dark mode** | | | | |
| `#ffffff` | `#050f1e` canvas | **19.20** | AAA | All text |
| `#ffffff` | `#132237` surface | **16.01** | AAA | All text |
| `#ffffff` | `#1f2a39` subtle | **14.50** | AAA | All text |
| `#a2abb9` secondary | `#050f1e` | **8.29** | AAA | All text |
| `#a2abb9` | `#132237` | **6.91** | AA | All text |
| `#ccd3dc` | `#050f1e` | **12.73** | AAA | All text |
| `#7c899a` tertiary | `#050f1e` | **5.40** | AA | All text |
| `#5d6e83` disabled | `#050f1e` | **3.68** | n/a | Disabled only |
| `#4da0ff` accent | `#050f1e` | **7.12** | AAA | Links and accent text |
| `#4da0ff` | `#132237` | **5.94** | AA | Links and accent text |
| `#0077ff` | `#050f1e` | **4.65** | AA | All text |
| `#ff5c5c` error | `#050f1e` | **6.34** | AA | Error |
| `#34d399` success | `#050f1e` | **9.99** | AAA | Success |
| `#ffb547` warning | `#050f1e` | **10.93** | AAA | Warning |

**Rule:** if a text and background pair is not in this table, do not use it until its ratio has been checked and added here.

---

## 3. Typography

### 3.1 Font families

| Role | Token | Reference font (licensed) | Open-source substitute (default) | Fallback stack |
|---|---|---|---|---|
| **Primary**: everything except labels and code | `font.family.sans` | **GT Walsheim** by Grilli Type. Commercial licence from grillitype.com (desktop and web licences sold separately). | **DM Sans**, SIL Open Font License, from Google Fonts or `@fontsource-variable/dm-sans`. A geometric sans with similar proportions. | `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif` |
| **Mono**: labels, eyebrows, data, code | `font.family.mono` | **Simplon Mono** (with Simplon BP for labels) by Colophon Foundry. Commercial licence from colophon-foundry.org. | **IBM Plex Mono**, SIL Open Font License, from Google Fonts or `@fontsource/ibm-plex-mono` | `ui-monospace, SFMono-Regular, Menlo, Consolas, "Roboto Mono", monospace` |

The open-source substitutes are the **default** in `tokens.json`. A project that buys the licensed fonts puts them first in the family list (§14, step 3).

**Rules**

- Self-host the font files (WOFF2) with `font-display: swap`, and preload the primary regular weight. The reference uses `font-display: block` for its regular weight. This system uses `swap`, so text is visible straight away on slow connections.
- Load only the weights in use: **400** (`font.weight.regular`), **500** (`font.weight.medium`) and **700** (`font.weight.bold`, inline emphasis only). Variable fonts cover all three in one file.
- Never use more than these two families. Never add a serif or a display face.
- The tracking values below were checked visually with DM Sans and apply unchanged to GT Walsheim.

### 3.2 Type scale

Tokens are `typography.<name>.desktop` and `typography.<name>.mobile`; in CSS, `.type-<name>` or `--type-<name>-size` and so on. **Desktop values apply from 600px wide** (`breakpoint.sm`), where the reference changes its type. Mobile values apply below 600px. Line height is in px, with the ratio in brackets.

| Token | Use | Desktop size / line height | Mobile size / line height | Weight | Letter-spacing | Family | Case |
|---|---|---|---|---|---|---|---|
| `display` | Hero statement, one per page at most | 128px / 140.8px (1.1) | 80px / 84px (1.05) | 400 | −0.04em | sans | Sentence |
| `display-number` | Big statistics ("20M+") | 72px / 72px (1.0) | 72px / 72px (1.0) | 400 | −0.028em | sans | n/a |
| `h1` | Page title and section headline | 63px / 63px (1.0) | 45px / 45px (1.0) | 400 | −0.04em | sans | Sentence |
| `h2` | Major sub-section and pull quote | 50px / 55px (1.1) | 31px / 34.1px (1.1) | 400 | −0.05em | sans | Sentence |
| `h3` | Section title inside a page | 40px / 48px (1.2) | 30px / 36px (1.2) | 400 | −0.04em | sans | Sentence |
| `h4` | Card title and feature title | 30px / 31.5px (1.05) | 30px / 31.5px (1.05) | 400 | −0.04em | sans | Sentence |
| `h5` | Small card title and large link | 24px / 26.4px (1.1) | 24px / 26.4px (1.1) | 400 | −0.04em | sans | Sentence |
| `h6` | Stat label and dense heading | 18px / 19.8px (1.1) | 18px / 19.8px (1.1) | 400 | −0.05em | sans | Sentence |
| `body-l` | Lead and intro paragraph | 24px / 36px (1.5) | 20px / 28px (1.4) **(inferred)** | 400 | −0.04em | sans | Sentence |
| `body-m` | Default body text | 16px / 24px (1.5) | 16px / 24px (1.5) | 400 | −0.02em | sans | Sentence |
| `body-s` | Navigation, secondary copy, table cells | 14px / 21px (1.5) | 14px / 21px (1.5) | 400 | −0.02em | sans | Sentence |
| `caption` | Footnotes and legal text | 12px / 13.2px (1.1) | 12px / 13.2px (1.1) | 400 | −0.02em | sans | Sentence |
| `label` | Eyebrow above a heading, tags, metadata | 12px / 18px (1.5) | 12px / 18px (1.5) | 500 | +0.1em | mono | UPPERCASE |
| `label-l` | Units beside big numbers, data labels | 16px / 28px (1.75) | 16px / 28px (1.75) | 400 | +0.125em | mono | UPPERCASE |
| `button` | Button and pill labels | 16px / 24px (1.5) | 16px / 24px (1.5) | 400 | −0.02em | sans | Sentence |
| `button-l` | Large text CTA (link with circle-arrow icon) | 24px / 26.4px (1.1) | 24px / 26.4px (1.1) | 400 | −0.04em | sans | Sentence |
| `nav-mobile` | Items in the full-screen mobile menu | n/a | 40px / 46px (1.15) | 400 | −0.008em | sans | Sentence |
| `code` | Inline and block code | 14px / 21px (1.5) **(inferred)** | 14px / 21px (1.5) | 400 | 0em | mono | n/a |

**Why these numbers**

- **Everything is weight 400**, including the 128px display, because hierarchy comes from size (principle 1). The reference uses 400 in about 900 declarations, 500 in 91 and 700 in 89, the last almost entirely for inline emphasis.
- **Line height tightens as size grows:** 1.5 for body, 1.1–1.2 for headings and 1.0 for the largest titles. Large type with body-style leading falls apart into separate lines. Small type with tight leading becomes hard to read.
- **Tracking tightens as size grows:** −0.02em at 16px, −0.04em from 24px and −0.05em for H2. Labels go the other way, to +0.1em, because small uppercase text needs extra space to stay legible.
- **H4 to H6 do not shrink on mobile.** They are already at reading size. Only display, H1–H3 and body-l scale down.

### 3.3 Rules

**Line length** (`layout.measure.*`)
- Body text (`body-m`): **at most 70ch**.
- Lead text (`body-l`): **at most 50ch**.
- Headlines (`h1`–`h3`): **at most 20ch**. Break long headlines into two balanced lines with `text-wrap: balance`.
- Display statements (`display`): **at most 15ch**, or **10ch** for one- or two-word statements.

**Paragraph and heading spacing**
- Between paragraphs: **16px** **(inferred)**.
- Label (eyebrow) to heading: **8px**.
- Heading to the following body text: **24px**.
- Heading to the following content group (cards, a list, media): **40px**.
- Body text to a button row: **40px**.

**Pairing**
- Use sans for all reading and display text. Use mono only for `label`, `label-l` and `code`. Never set a paragraph in mono.
- A label sits **above** a heading as an eyebrow, never below it or inside it.
- Keep the HTML heading order correct (h1, then h2, then h3). If a design needs more visual contrast, use a larger style on the correct element: an `<h2>` may use the `h1` style. Never skip heading levels in the HTML.
- Emphasis inside running text uses weight **700**, never italic and never colour. Colour is reserved for links.
- Do not use all caps in sans. Uppercase is reserved for mono labels.
- Numbers in tables and data use `font-variant-numeric: tabular-nums`.

---

## 4. Visual hierarchy

### 4.1 How importance is signalled, in order of strength

1. **Size.** The main lever. Adjacent levels differ by **at least 1.25×** in size (for example `h3` 40px against `body-l` 24px is 1.67×). A difference under 1.25× reads as a mistake, not as hierarchy.
2. **Space.** More space above an element means it starts something new. Section gaps (72–140px) are much larger than gaps between blocks (40–54px) and between items (16–24px), so grouping is obvious without lines or boxes.
3. **Colour value.** Primary text `#23233c` is for what must be read, secondary `#5f6575` for what supports it and tertiary `#5d6e83` for metadata. Lighter colour means less important.
4. **Case and family.** A 12px mono uppercase label signals "category" or "context" above a heading, without competing with it.
5. **Accent.** Blue marks the one action that matters on a screen. It is not used to signal importance in text.
6. **Weight.** Last resort. 700 appears only inside running text. A heading never relies on weight.

### 4.2 Levels per screen

- At most **three type levels** compete in one viewport: one headline style, one supporting style (`body-l` or `body-m`) and one meta style (`label` or `caption`).
- At most **one** `display` or `h1` per viewport.
- At most **one** primary (filled) button per viewport. Any other actions are secondary (outline) or text links.

### 4.3 Worked examples

**Marketing section**
```
LABEL       "PLATFORM"                  label, text.secondary
            ↓ 8px
HEADLINE    "Built for real projects"   h1 (63px), text.primary
            ↓ 24px
LEAD        one or two sentences        body-l (24px), text.secondary, max 50ch
            ↓ 40px
ACTIONS     [Primary pill] [Outline pill]
```
Hierarchy: 63px against 24px (2.6×) against 12px uppercase mono. One filled button.

**Dashboard card**
```
LABEL       "ACTIVE USERS"   label, text.secondary
            ↓ 8px
VALUE       "12,480"         display-number (72px), text.primary, tabular-nums
            ↓ 8px
DELTA       "+4.2% vs last week"   body-s, status.success.fg
```
The value dominates because of size alone. The delta uses status colour because its colour carries meaning.

**Documentation page**
```
h1 (63px) page title → body-l intro → h3 (40px) section → body-m (16px) paragraphs, max 70ch
→ code (14px mono) blocks on bg.subtle → caption footnotes
```

---

## 5. Layout and grid

### 5.1 Breakpoints (`breakpoint.*`)

| Name | Min width | Applies to |
|---|---|---|
| mobile | 0 (default) | Phones |
| `sm` | **600px** | Tablets. Desktop type sizes start here. |
| `md` | **1024px** | Laptops. Full navigation and desktop margins. |
| `lg` | **1440px** | Wide screens. Content stops growing and centres. |

Design mobile first: write the base styles for mobile and add `min-width` queries for `sm`, `md` and `lg`.

### 5.2 Grid

| | Mobile | Tablet (`sm`) | Desktop (`md` and up) |
|---|---|---|---|
| Columns | 4 **(inferred)** | 8 **(inferred)** | 12 **(inferred)** |
| Gutter | 16px **(inferred)** | 24px | 24px |
| Outer margin | 36px | 54px | 108px |
| Max content width | none | none | 1224px, centred from 1440px |

- The content width is the full viewport width minus twice the margin, capped at 1224px. At 1440px wide, 1440 − 2 × 108 = 1224, so the margins grow and the content stays at 1224px on larger screens.
- Full-bleed media and colour bands ignore the margin and run edge to edge. Their content still aligns to the grid.

### 5.3 Section rhythm (`layout.section.*`)

| Token | Value | Use |
|---|---|---|
| `section.sm` | 54px | Between related blocks inside a section |
| `section.md` | 72px | Section padding on mobile |
| `section.lg` | 108px | Section padding on desktop, and footer top padding |
| `section.xl` | 140px | Bottom padding of hero and other major sections on desktop |

A standard section is `padding: 72px 0` on mobile and `108px 0` from `md`. Major sections may use `140px` at the bottom on desktop.

### 5.4 Alignment

- Align everything to the left edge of the content column. Centred text is only for short display statements in hero sections and for single-line CTAs over media.
- Text blocks stay within their measure (§3.3), even inside wide columns. Leave the rest of the column empty rather than stretching the text.
- Header height is **80px** on mobile and **100px** from `md` (`layout.header-height.*`). The logo is vertically centred, and the navigation is right-aligned.

---

## 6. Spacing

### 6.1 Scale (`space.*`)

The scale is based on 4px, with larger steps taken from the reference's section rhythm. Use only these values for margin, padding and gap.

| Token | Value | When to use |
|---|---|---|
| `space.0` | 0px | Reset |
| `space.2` | 2px | Hairline nudges, and space between an icon and a superscript |
| `space.4` | 4px | Icon-to-text in dense UI, and badge vertical padding |
| `space.8` | 8px | Label to heading, button vertical padding (md), tooltip offset |
| `space.12` | 12px | Gap between chips, and tab horizontal padding |
| `space.16` | 16px | Between paragraphs, alert padding, table-cell padding, mobile gutter |
| `space.20` | 20px | Gap between form fields in a dense form |
| `space.24` | 24px | Heading to body, grid gutter, card padding on mobile, form-field gap |
| `space.32` | 32px | Card padding, horizontal gap between navigation items |
| `space.40` | 40px | Heading to a content group, body text to a button row |
| `space.48` | 48px | Modal padding, callout padding, between card rows |
| `space.54` | 54px | Between related blocks in a section (`section.sm`) |
| `space.72` | 72px | Section padding on mobile (`section.md`) |
| `space.108` | 108px | Section padding on desktop (`section.lg`) |
| `space.140` | 140px | Bottom padding of hero and major sections (`section.xl`) |

### 6.2 Rules

- **Inside a component, use 4–32px. Between components, 40–54px. Between sections, 72–140px.** Never use a section-sized gap inside a component.
- Related items sit closer together than unrelated ones. The gap between groups is at least **2×** the gap within a group.
- Vertical space carries the structure. Do not use a divider where a larger gap would do the same job.

---

## 7. Shape and elevation

### 7.1 Radii (`radius.*`)

| Token | Value | Applies to |
|---|---|---|
| `radius.none` | 0px | Full-bleed media and colour bands |
| `radius.xs` | 3px | Checkboxes |
| `radius.sm` | 4px | Text inputs, selects and textareas |
| `radius.md` | 8px | Alerts, toasts, tooltips and menu items |
| `radius.lg` | 16px | Cards, contained images and video, and dropdown menus |
| `radius.xl` | 20px | Callout panels and modals |
| `radius.pill` | 1000px | Buttons, badges, chips, toggles and pill tabs |
| `radius.circle` | 50% | Avatars, radio buttons, icon buttons and map markers |

**Why:** the radius tells the user what an element is (principle 5). Fields stay nearly square so they read as places to type. Containers are soft. Anything you press is fully round.

### 7.2 Borders and dividers (`border.*`)

| Token | Value | Use |
|---|---|---|
| `border.width.hairline` | 1px | Dividers, input borders, outline buttons and card outlines |
| `border.width.thick` | 2px | Selected tab underline, the hollow pill variant, and the white ring around map markers |
| `border.width.focus` | 4px | Focus ring (with `border.focus-offset` 2px) |

- Default dividers use `border.default` `#e5e9f0`. Use `border.strong` `#949a9f` only to emphasise a decorative rule, such as the line above a footer's legal row.
- Cards on `bg.canvas` use `bg.surface` and **no border**. Cards on `bg.surface` use `bg.canvas` and no border. Use a 1px `border.default` only when two surfaces of the same colour must be separated.

### 7.3 Elevation (`shadow.*`)

The reference is almost entirely flat: 1,159 of 1,167 elements measured had no shadow. Shadows are only for elements that **float above** the page.

| Token | Value | Use |
|---|---|---|
| `shadow.0` | none | Everything static: cards, sections, buttons and images |
| `shadow.1` | `0px 1px 3px 0px #0000000a` | The sticky header once the page has scrolled, and select menus |
| `shadow.2` | `0px 4px 12px 0px #050f1e1a` | Dropdowns, popovers, tooltips and toasts |
| `shadow.3` | `0px 4px 16px 0px #00000066` | Modals and dialogs (always over `bg.overlay`) |

Never use a shadow to make a card look "clickable". Use the hover scale and surface change in §10.5 instead.

### 7.4 Stacking (`z.*`, inferred)

| Token | Value |
|---|---|
| `z.base` | 0 |
| `z.sticky` | 50 (sticky header) |
| `z.dropdown` | 100 |
| `z.overlay` | 900 (modal backdrop) |
| `z.modal` | 1000 |
| `z.toast` | 1100 |

---

## 8. Imagery and iconography

### 8.1 Photography and video

- **Subject:** real people, places and products in real use. Show the experience or the outcome, not abstract metaphors. No staged stock-photo poses and no generic handshakes.
- **Crop:** wide and cinematic. Keep the subject off-centre, with room for text on one side when type is set over the image.
- **Colour treatment:** natural colour, slightly cool, with deep blacks. No filters, duotones or heavy grading. Night and low-light scenes are welcome; they sit well on `bg.media` `#000000`.
- **Full-bleed or contained:**
  - **Full-bleed** (`radius.none`, edge to edge on `bg.media`) for heroes and story sections. Use one per screen.
  - **Contained** (`radius.lg` 16px, within the grid) for media in content, cards and carousels.
- **Text over media:** only on footage dark enough to give at least 4.5:1 for the text. Otherwise put the text on a glass pill (`bg.overlay` `#00000080`) or move it off the image.
- **Video:** muted autoplay loops only when there is a visible pause control. Large play controls use the glass media button (§10.6).

### 8.2 Aspect ratios (`aspect.*`)

| Token | Ratio | Use |
|---|---|---|
| `aspect.video` | 16/9 | Default for video, carousels and card media |
| `aspect.square` | 1/1 | Avatars, product tiles, logos and icon tiles |
| `aspect.wide` | 2/1 | Feature banners inside content |
| `aspect.portrait` | 4/5 **(inferred)** | Portrait people photography and mobile story cards |
| `aspect.banner` | 10/3 | Thin full-width bands |

### 8.3 Illustration and data graphics

- Flat and geometric, with no gradients except a two-stop blue-to-mint accent (`#0077ff` to `#00e89d`) used sparingly in thin rules or highlights.
- Line work uses the icon stroke (2px) at the same scale.
- Charts use `#0077ff`, `#033098`, `#00e89d` and `#00929d` on neutral axes (`border.default`), with labels in `label` style.

### 8.4 Icons (`icon.*`)

| Token | Size | Use |
|---|---|---|
| `icon.size.xs` | 16px **(inferred)** | Inline with `body-s`, and the select chevron |
| `icon.size.sm` | 20px | Inline with `body-m`, and alert icons |
| `icon.size.md` | 24px | Default UI icon, and the arrow inside buttons |
| `icon.size.lg` | 28px | The circle-arrow beside large text links (`button-l`) |
| `icon.size.xl` | 32px | Navigation and close buttons |
| `icon.size.2xl` | 48px | Feature icons and play buttons |

- **Style:** outline, geometric, with round caps and joins. **Stroke 2px** at 24px (`icon.stroke`), scaled with the icon.
- Icons inherit `currentColor`. Never colour an icon differently from the text beside it, except for status icons, which use the status colour.
- The signature link icon is a **circle with a right arrow**, at 28px, placed **before** the link text with a 10px gap.
- Icon-only buttons need an `aria-label` and a hit area of at least 44px (§11).

---

## 9. Motion

### 9.1 Durations (`motion.duration.*`)

| Token | Value | Use |
|---|---|---|
| `instant` | 100ms | Press-in (scale down) |
| `fast` | 150ms | Focus ring and colour changes on links |
| `base` | 200ms | Hover scale, button colour inversion, opacity fades |
| `moderate` | 300ms | Tooltips, small panels, accordion height |
| `slow` | 400ms | Dropdowns, mobile menu, tab indicator |
| `reveal` | 600ms | Content fading and rising into view on scroll |
| `reveal-long` | 800ms | Large media and headline reveals |
| `counter` | 1500ms | Counting up statistics once, on first view |
| `toast-dismiss` | 5000ms | **(inferred)** Time before a toast without an action closes itself |

`motion.delay.stagger` is **300ms**, the delay before secondary content follows the headline in a reveal.

### 9.2 Easing (`motion.easing.*`)

| Token | Curve | Use |
|---|---|---|
| `standard` | `cubic-bezier(0.17, 0.17, 0.34, 1)` | Default for reveals and most transitions: a soft ease-out |
| `decelerate` | `cubic-bezier(0.17, 0.17, 0.1, 1)` | Large elements arriving, such as media and the mobile menu |
| `emphasized` | `cubic-bezier(0.9, 0, 0.1, 1)` | Expressive moves between states, such as a carousel slide or a clip-path wipe |
| `snap` | `cubic-bezier(0.2, 0, 0, 1)` | Small UI changes such as toggles and tab indicators |
| `spring` | `cubic-bezier(0.835, 0.255, 0.17, 1.605)` | A playful overshoot, only for one small celebratory element |
| `in-out` | `cubic-bezier(0.42, 0, 0.58, 1)` | Hover scale on buttons and links |
| `out` | `cubic-bezier(0, 0, 0.58, 1)` | Releasing a press (scale back up) |
| `in` | `cubic-bezier(0.42, 0, 1, 1)` | Pressing in (scale down), and elements leaving |

### 9.3 What animates

| Interaction | Animation |
|---|---|
| Hover on buttons and link CTAs | `scale` to 1.05 (`scale.hover`), 200ms `in-out` |
| Hover on large surfaces (callouts, cards) | `scale` to 1.03 (`scale.hover-large`), 200ms `in-out` |
| Hover on small handles and icon buttons | `scale` to 1.08 (`scale.hover-small`), 200ms `in-out` |
| Press | `scale` to 0.98 (`scale.press`), 100ms `in` **(inferred)** |
| Focus | outline appears over 150ms |
| Scroll reveal | opacity 0 → 1 and translate 24px → 0 (`motion.distance.reveal`, **inferred**), 600ms `standard`, followed by children after the 300ms stagger |
| Dropdown or menu | opacity and translate 8px, 400ms `decelerate` |
| Modal | backdrop fades in over 200ms; panel rises 24px over 400ms `decelerate` |
| Disabled | no animation |

### 9.4 What never animates

- Body text while someone is reading it. A reveal happens once, on entry; never loop, parallax or shake text.
- Layout properties such as `width`, `top` or `margin`. Animate `transform`, `scale`, `translate`, `opacity` and `clip-path` only.
- Anything for longer than 800ms, except a one-time `counter`.
- Colour changes on large surfaces, such as a whole section changing background.
- Auto-advancing carousels without a visible pause control.

### 9.5 Reduced motion

When `prefers-reduced-motion: reduce` is set:
- every transition and animation is cut to effectively zero (`tokens.css` does this globally)
- reveals show their content immediately, with no translate and no fade
- autoplaying video does not start, and shows a poster image with a play button instead
- hover scale is removed, and hover colour changes remain

---

## 10. Components

All components use semantic tokens only. States follow §2.4. Every interactive component shows the focus ring (4px `focus.ring`, 2px offset) on `:focus-visible`, never on mouse focus.

### 10.1 Buttons

**Anatomy:** a pill container (`radius.pill`), a label (`typography.button`), and an optional icon (24px) before or after the label with a 10px gap.

**Variants**

| Variant | Fill | Text | Border | Use |
|---|---|---|---|---|
| Primary | `action.primary.bg` | `text.on-action` | 1px `action.primary.bg` | The single main action on a screen |
| Secondary | transparent | `action.secondary.border` | 1px `action.secondary.border` | Other actions |
| Hollow | transparent | inherit | 2px currentColor | Secondary action on dark or media backgrounds |
| Destructive **(inferred)** | `action.destructive.bg` | `text.on-action` | none | Irreversible actions, always with a confirmation |
| Text link with icon | none | `text.primary` (or inherit) | none | Tertiary actions ("Learn more"): circle-arrow 28px + `button-l` or `button` |

**Sizes**

| Size | Height | Padding | Type |
|---|---|---|---|
| sm **(inferred)** | 32px | 4px 16px | `button` |
| md (default) | 40px | 8px 24px | `button` |
| lg | 56px | 16px 32px | `button` |

**States**

- **Default and hover:** see §2.4. The primary fill inverts on hover (white with blue text) and the button scales to 1.05 over 200ms.
- **Active:** scale 0.98.
- **Focus:** 4px mint ring.
- **Disabled:** opacity 0.5, `cursor: not-allowed`, `aria-disabled="true"`, no hover.
- **Loading:** keep the width, replace the label with a 20px spinner in currentColor, set `aria-busy="true"` and ignore clicks.
- **Error:** buttons have no error state. Show the error next to the field or in an alert.

**Spacing:** 12px between buttons in a row. 40px from the text above. On mobile, stack full-width buttons with 12px between them when the labels do not fit on one line.

- **Do:** one primary per screen, with verb-first labels ("Start a project").
- **Don't:** two primaries side by side, square corners, all-caps labels or icons on both sides.

### 10.2 Links

- **Inline (in body copy):** inherits the text colour with no underline at rest. On hover it turns `text.accent` `#006fee`. To make links findable without relying on colour, inline links in long-form text (docs and legal) **are underlined** at 1px with a 3px offset **(inferred)**.
- **Standalone link CTA:** the circle-arrow icon (28px) + text, 10px gap, scaling to 1.05 on hover.
- **Navigation:** `body-s` (14px), `text.primary`, `text.accent` on hover, and `aria-current="page"` styled with `text.accent`.
- **Visited:** no separate visited colour.
- **External links:** add a 16px arrow-up-right icon and `rel="noopener"`.
- **Don't:** use blue for text that is not a link, or "click here" as link text.

### 10.3 Navigation and header

**Anatomy:** a logo on the left and navigation links on the right (gap 32px). An optional primary button (md) sits at the far right.

- **Height:** 80px on mobile and 100px from `md`. Background `bg.canvas`.
- **Sticky behaviour:** the header sticks to the top (`z.sticky`). Once the page scrolls it gains `shadow.1`, or a 1px `border.default` bottom border.
- **Below `md`:** links collapse into a menu button (32px icon, 44px hit area). The menu opens full-screen on `bg.canvas`, with items in `typography.nav-mobile` (40px), stacked with 16px gaps and sliding in over 400ms `decelerate`. Focus is trapped inside the menu, which closes with the Escape key.
- **Dropdown:** `bg.canvas`, `radius.lg`, 8px padding, `shadow.2`. Items are `body-s` with 8px 12px padding, `radius.md`, and `bg.subtle` on hover.
- **States:** links follow §2.4. The current page uses `text.accent` and `aria-current="page"`.
- **Don't:** use more than 7 top-level items, a transparent header over light content, or hover-only menus with no click or keyboard access.

### 10.4 Footer

**Anatomy:** a logo, then link columns, then an optional sign-up block, then a legal row.

- Background `bg.surface` `#f2f2f2`. Top padding 108px on desktop and 72px on mobile, with 72px bottom padding.
- Column headings use `label`. Links use `body-m` in `text.primary`, with 16px between links. Columns are separated by the 24px gutter.
- The legal row sits under a 1px `border.default` with 40px above it, in `caption` and `text.secondary`.
- Social icons are 32px circles: `bg.inverse` with `text.inverse` icons, scaling to 1.08 on hover.
- **Don't:** put primary actions in the footer, or repeat the whole navigation.

### 10.5 Cards

**Anatomy:** an optional media slot (`aspect.video`, `radius.lg` at the top, or inset), a `label`, a title (`h4` or `h5`), a body (`body-m`, `text.secondary`) and an optional link CTA.

- **Container:** `bg.surface` on a canvas background, `radius.lg` 16px, padding 32px (24px on mobile), **no shadow** and no border.
- **Spacing:** label → 8px → title → 16px → body → 24px → link.
- **Grid:** cards share the 24px gutter, with 48px between rows.
- **Interactive card** (the whole card is a link): scale 1.03 on hover with the background changing to `bg.subtle`, 200ms `in-out`. The focus ring goes around the whole card. Only one link per interactive card.
- **States:** a selected card gets a 2px `text.primary` border. Disabled cards use opacity 0.5. Loading cards show a `bg.subtle` skeleton with the same radius.
- **Don't:** use shadows, nest cards inside cards, or put more than one primary action in a card.

### 10.6 Hero patterns

Three permitted heroes, using the visual language rather than any particular layout:

1. **Typographic hero.** On `bg.canvas`: a label, a `display` or `h1` headline (at most 15ch), a `body-l` lead (at most 50ch), then buttons. Padding 72px on mobile and 108px top / 140px bottom on desktop.
2. **Media hero.** Full-bleed video or image on `bg.media`. A centred glass media button: `bg.overlay`, `radius.pill`, padding 8px 24px 8px 12px, a 48px play icon, `button-l` text, scaling to 1.05 on hover. Headline text over media only when contrast allows (§8.1).
3. **Callout panel.** Directly below a media hero, overlapping it: `bg.brand` `#061e4d`, `radius.xl` 20px, padding 48px, max-width 796px, white `h5` text with a link CTA to the right. It stacks on mobile.

- **Don't:** put a carousel in a hero, use more than two buttons, or set the headline in a weight other than 400.

### 10.7 Forms

Applies to all form fields:
- **Label:** `body-s` in `text.primary`, 8px above the field. Required fields are marked with " *" **and** "(required)" in the accessible name.
- **Help text:** `caption` in `text.secondary`, 8px below the field.
- **Error text:** `body-s` in `status.error.fg` with a 16px error icon, 8px below the field, linked with `aria-describedby`.
- **Gap between fields:** 24px (20px in dense forms).

**Text input, textarea and select**
- Height 52px (padding 13px 14px, `body-m` text, 1px border), `radius.sm` 4px, `bg.canvas`, 1px `border.input` `#7c899a`.
- **Placeholder:** `text.tertiary`. A placeholder is never a replacement for the label.
- **Hover:** `border.input-hover`. **Focus:** 4px mint ring, 2px offset, with the border unchanged.
- **Error:** 1px `status.error.fg` border and text, `aria-invalid="true"`.
- **Disabled:** `bg.subtle` background, `text.disabled` text, `cursor: not-allowed`.
- **Loading** (async validation): a 16px spinner inside the field at the right, 14px from the edge.
- **Select:** same as the text input, with a 16px chevron 14px from the right edge, and a native `<select>` underneath for accessibility.
- **Textarea:** minimum 3 rows; resizes vertically only.

**Checkbox:** a 19px box, `radius.xs` 3px, 1px `border.control`, `bg.canvas`. When checked: `action.primary.bg` fill with a white 2px-stroke check. The label sits 12px to the right in `body-m`. Focus ring on the box. Error: border `status.error.fg`. Disabled: opacity 0.5.

**Radio:** a 19px circle (`radius.circle`), 1px `border.control`. When selected: an `action.primary.bg` border and an 8px centre dot. Arrow keys move between options in a group.

**Toggle (switch) (inferred):** a 44px × 24px track (`radius.pill`) with a 20px thumb. Off: track `slate.300`, white thumb. On: track `highlight` `#00e89d` with a `text.primary` icon or none, and the thumb moves right, 200ms `snap`. Use `role="switch"` with `aria-checked`. Use it only for settings that take effect immediately.

- **Do:** keep labels visible at all times, and validate on blur or submit.
- **Don't:** use floating labels, validate while the user is still typing, or use red for anything except errors.

### 10.8 Modals and dialogs

- **Backdrop:** `bg.overlay` `#00000080` at `z.overlay`.
- **Panel:** `bg.canvas`, `radius.xl` 20px, padding 48px (24px on mobile), max-width 640px, `shadow.3`, at `z.modal`.
- **Anatomy:** an `h4` title, a `body-m` body, then actions aligned right (primary on the far right) with 40px above them. A close button (32px icon, 44px hit area) sits at the top right.
- **Behaviour:** use `role="dialog"` with `aria-modal="true"` and `aria-labelledby` pointing to the title. Focus moves into the dialog on open, is trapped inside it, and returns to the trigger on close. Escape and a backdrop click both close it, except for destructive confirmations.
- **Mobile:** the panel is full-width with a 16px margin and is bottom-aligned.
- **Don't:** stack modals, or use a modal for content that could live on the page.

### 10.9 Tabs

- **Underline tabs (default):** `body-m` labels, padding 12px 16px, `text.secondary` at rest and `text.primary` when selected, with a 2px `text.primary` underline that slides between tabs over 400ms `snap`. The tab bar has a 1px `border.default` bottom border.
- **Pill tabs (segmented):** a `bg.surface` track with `radius.pill`. The selected tab is `bg.canvas` with `text.primary`. Use for 2–4 options that switch a view.
- **States:** hover `text.primary`; focus ring on the tab; disabled opacity 0.5.
- **Accessibility:** `role="tablist"`, `tab` and `tabpanel`. Arrow keys move focus between tabs, and Home and End jump to the first and last.
- **Don't:** use more than 6 tabs, or put tabs inside tabs.

### 10.10 Tables

- **Header row:** `label` style in `text.secondary`, with a 1px `border.default` bottom border.
- **Cells:** `body-s`, padding 16px, with a 1px `border.default` between rows. Numbers are right-aligned with `tabular-nums`.
- **Zebra rows (dense data only):** alternate rows in `slate.50`.
- **Row hover:** `bg.subtle`, 150ms. **Selected row:** a 2px `action.primary.bg` left border and `bg.subtle`.
- **Sorting:** a 16px arrow icon in the header, with `aria-sort`.
- **Empty state:** one `body-m` line in `text.secondary`, centred, with 48px padding.
- **Loading:** skeleton rows of `bg.subtle` bars.
- **Mobile:** scroll horizontally inside a container with a sticky first column, or switch to a stacked card list.
- **Don't:** add vertical borders, use more than one font size in the body, or centre text columns.

### 10.11 Badges and tags

- `typography.label` (12px mono uppercase), padding 4px 10px, `radius.pill`.
- **Variants:** neutral (`bg.surface` / `text.secondary`), success, warning, error and info (each `status.*.bg` with `status.*.fg`), and strong (`bg.inverse` / `text.inverse`).
- **Removable tag:** a 16px close icon 4px after the label, with a 24px hit area.
- **Don't:** make badges clickable unless they are filter chips. Filter chips use the secondary-button style at size sm.

### 10.12 Alerts and toasts

**Inline alert:** `status.*.bg`, `radius.md` 8px, padding 16px, a 20px status icon on the left with a 12px gap, a title in `body-m` (weight 500), and body text in `body-s` using `status.error.fg-strong` for errors or `text.primary` for the others. Use `role="alert"` for errors and `role="status"` otherwise.

**Toast:** `bg.inverse` with `text.inverse`, `radius.md` 8px, padding 16px, max-width 400px and `shadow.2`. Toasts sit 24px from the bottom of the screen (centred on mobile, bottom-right on desktop) at `z.toast`. They slide up 24px and fade in over 400ms `decelerate`, and close automatically after 5000ms (`motion.duration.toast-dismiss`) unless they contain an action. Pause the timer on hover and focus, and announce the toast with `aria-live="polite"`.

- **Don't:** use toasts for errors that block the user's task (use an inline alert), or show more than three toasts at once.

### 10.13 Tooltips

- `bg.inverse` with `text.inverse`, `body-s`, padding 8px 12px, `radius.md` 8px, max-width 280px, `shadow.2`, positioned 8px from the trigger.
- Appear after 300ms on hover and immediately on focus. Fade over 300ms. Close with Escape.
- Link the trigger with `aria-describedby`. A tooltip only adds information; never put anything essential or interactive in it.
- **Don't:** use tooltips on disabled buttons (they cannot receive focus) or on mobile-only interfaces.

### 10.14 Pagination

- **Items:** 40px circles (`radius.circle`) with `body-s` numbers. The current page is `bg.inverse` with `text.inverse` and `aria-current="page"`. Other pages are transparent, with `bg.subtle` on hover.
- **Previous and next:** text buttons with a 24px chevron. When unavailable they turn `text.disabled` `#949a9f` with `aria-disabled="true"`.
- **Gap:** 8px between items. Truncate long ranges with an ellipsis: 1 … 4 5 6 … 20.
- **Mobile:** show "Previous", "Page 4 of 20" and "Next" only.
- Wrap the whole control in `<nav aria-label="Pagination">`.

---

## 11. Accessibility

The target is **WCAG 2.2 AA** at minimum.

**Contrast**
- Text uses only the pairs in §2.5: **4.5:1** for normal text and **3:1** for large text (24px and up, or 18.66px bold).
- UI components and meaningful icons need 3:1 against their background. This is why inputs use `border.input` `#7c899a` (3.56:1).

**Focus**
- Every interactive element shows the focus ring on `:focus-visible`: a 4px `#00e89d` solid outline with a 2px offset. Never remove it with `outline: none` unless you replace it with the same ring.
- The ring must never be clipped. Leave clear space equal to the 4px ring plus its 2px offset around the element, or avoid `overflow: hidden` on its parent.
- Focus order follows reading order. Never use a positive `tabindex`.

**Target size**
- Minimum hit area **24px × 24px** (`a11y.target-min`, WCAG 2.5.8). Comfortable size **44px × 44px** (`a11y.target-comfortable`) for primary controls and anything used on touch screens.
- Small visual elements (16px icons, 19px checkboxes) extend their hit area with padding or a wrapping `<label>`.

**Keyboard**
- Everything works with the keyboard. Tab moves between controls, Enter and Space activate them, arrow keys move inside composite widgets (tabs, radio groups, menus), and Escape closes overlays.
- A "Skip to main content" link is the first focusable element on every page. It is visible on focus as a primary button (`radius.xs`, padding 16px 32px).

**Screen readers**
- Use semantic HTML first: `<button>` for actions, `<a>` for navigation, real headings in order, and `<nav>`, `<main>` and `<footer>` landmarks.
- Icon-only controls have `aria-label`. Decorative images have `alt=""`. Meaningful images have descriptive `alt` text.
- Never convey meaning by colour alone: errors have an icon and text, and status badges have words.
- Announce dynamic changes with `aria-live`, using `polite` for toasts and `assertive` for blocking errors only.

**Motion and media**
- Respect `prefers-reduced-motion` (§9.5). Videos have captions. Autoplay is muted and can be paused.

---

## 12. Responsive behavior

| Aspect | Mobile (below 600px) | Tablet (`sm`, 600px and up) | Desktop (`md`, 1024px and up) | Wide (`lg`, 1440px and up) |
|---|---|---|---|---|
| Type | Mobile scale (§3.2) | Desktop scale | Desktop scale | Desktop scale |
| Outer margin | 36px | 54px | 108px | Grows; content capped at 1224px |
| Columns / gutter | 4 / 16px | 8 / 24px | 12 / 24px | 12 / 24px |
| Section padding | 72px | 72px | 108px (major sections 140px at the bottom) | Same as desktop |
| Header | 80px, menu button | 80px, menu button | 100px, full navigation | Same as desktop |
| Cards | 1 per row, padding 24px | 2 per row | 3–4 per row, padding 32px | Same as desktop |
| Buttons | Full width when stacked | Natural width | Natural width | Natural width |
| Modals | Full width, bottom-aligned, padding 24px | Centred, max 640px | Centred, max 640px, padding 48px | Same as desktop |
| Tables | Scroll or stacked cards | Scroll if needed | Full table | Full table |
| Callout panel | Stacked, padding 24px | Stacked, padding 48px | Text and CTA side by side, max 796px | Same as desktop |

**Rules**
- **Type** switches between exactly two sets of sizes at 600px. Do not scale fluidly between breakpoints, so that every rendered size is a token value.
- **Spacing:** component spacing stays the same at every size. Only margins and section padding change.
- **Grid:** reflow columns; never shrink content to fit. A three-column row becomes one column on mobile and two on tablet.
- **Navigation** collapses below 1024px (§10.3).
- **Images:** use `srcset` so a full-bleed image never loads at more than twice the rendered width. Crops may change between mobile and desktop, but keep the subject in frame.

---

## 13. Do / Don't

| # | Do | Don't |
|---|---|---|
| 1 | Set headings in weight 400 and create hierarchy with size | Make headings bold (600 or 700) to make them stand out |
| 2 | Use the letter-spacing token for each style (−0.04em for headings) | Leave large headings at default 0 tracking |
| 3 | Use `#006fee` (`text.accent`) for link hover on light backgrounds | Use `#0077ff` for normal-size text on white (4.13:1 fails AA) |
| 4 | Keep blue for actions and links only | Use blue for decorative headings, icons or backgrounds |
| 5 | Use one filled primary button per screen | Put two primary buttons next to each other |
| 6 | Use pills (`radius.pill`) for every button | Use square or slightly rounded buttons |
| 7 | Separate content with surface colour and space | Add shadows to cards or sections |
| 8 | Use `shadow.2` and `shadow.3` only for floating layers (menus, toasts, modals) | Use shadows to suggest something is clickable |
| 9 | Show the 4px mint focus ring on `:focus-visible` | Remove outlines or use a thin browser-default ring |
| 10 | Use the mint `#00e89d` for focus and data highlights | Use mint for text on white (1.61:1) |
| 11 | Put mono uppercase labels above headings as eyebrows | Set paragraphs or headings in mono, or uppercase in sans |
| 12 | Keep body text to 70ch and headlines to 20ch | Let text run the full width of a 1224px container |
| 13 | Use only `space.*` values (16, 24, 32, 40 …) | Invent in-between values that are not on the scale |
| 14 | Use 72px (mobile) and 108px (desktop) section padding | Cram sections together with 24–40px gaps |
| 15 | Animate `transform` and `opacity` for 150–800ms with the standard curve | Use bouncy, long or looping animations, or animate width and height |
| 16 | Turn off reveals and scaling for reduced-motion users | Ignore `prefers-reduced-motion` |
| 17 | Use real, natural-colour photography, full-bleed or at 16px radius | Use stock clichés, heavy filters or images with mixed radii |
| 18 | Use outline icons with a 2px stroke that inherit `currentColor` | Mix filled and outline icons, or use different stroke widths |
| 19 | Keep form labels visible above fields, with 4px-radius inputs | Use placeholder-only fields or pill-shaped inputs |
| 20 | Reference semantic roles in code (`text-primary`, `var(--color-bg-surface)`) | Hard-code hex values in components |

---

## 14. Applying the system to a new project

**Step 1. Copy the system.** Copy the `design-system/` folder into the project root. It contains this document, `tokens.json`, `tokens.css`, `tailwind.preset.js` and `scripts/`.

**Step 2. Load the tokens.**
- **Plain CSS:** add `<link rel="stylesheet" href="/design-system/tokens.css">` before any other stylesheet, then use the variables, for example `color: var(--color-text-primary)`, or the `.type-*` classes.
- **Tailwind:** in `tailwind.config.js`, add
  ```js
  module.exports = { presets: [require('./design-system/tailwind.preset.js')], content: ['./src/**/*.{html,js,jsx,ts,tsx}'] };
  ```
  and still import `tokens.css`, because the semantic colours (`bg-canvas`, `text-primary`, `border-input`) and dark mode read its CSS variables. The preset **replaces** Tailwind's default colours, spacing and radii, so only token values are available.

**Step 3. Set up the fonts.** Self-host DM Sans and IBM Plex Mono (or the licensed GT Walsheim and Simplon Mono):
```css
@font-face { font-family: "DM Sans"; src: url("/fonts/DMSans-Variable.woff2") format("woff2"); font-weight: 100 1000; font-display: swap; }
@font-face { font-family: "IBM Plex Mono"; src: url("/fonts/IBMPlexMono-500.woff2") format("woff2"); font-weight: 500; font-display: swap; }
body { font-family: var(--font-family-sans); font-size: var(--type-body-m-size); line-height: var(--type-body-m-line-height); letter-spacing: var(--type-body-m-letter-spacing); color: var(--color-text-primary); background: var(--color-bg-canvas); }
```
If you have the licensed fonts, put `"GT Walsheim"` first in `font.family.sans` (and `"Simplon Mono"` in `font.family.mono`) in `tokens.json`, then run step 5.

**Step 4. Map the brand colour into the roles.**
1. Add the brand colour as a primitive ramp in `tokens.json` (for example `color.brand.600`).
2. Point `semantic.light.action.primary.bg`, `text.accent` and `action.primary.fg-hover` at it. Pick a darker step for `bg-pressed`.
3. Check the new pairs against the thresholds in §2.5: white on the brand fill must reach 4.5:1, and brand text on white must reach 4.5:1. If it doesn't, use a darker step for those roles and keep the brighter one for large text and icons.
4. Keep `focus.ring` at `#00e89d`, unless the brand colour is green. In that case choose a focus colour with at least 3:1 against both the canvas and the brand fill.
5. Add the new pairs and their ratios to §2.5.

**Step 5. Rebuild and verify.**
```bash
node design-system/scripts/build.mjs
```
```bash
node design-system/scripts/check.mjs
```
The build regenerates `tokens.css` and `tailwind.preset.js`. The check confirms that this document and `tokens.json` still match.

**Step 6. Build pages from components.** Start each page from the components in §10 and the layout in §5: header, then hero pattern, then sections with section padding, then footer. Use only token values. If a design needs something new, add it as a token, document it here with its reasoning, and bump the version (§16).

**Step 7. Review.** Run the checklist in §15 before every release.

---

## 15. Review checklist

Each item passes or fails. A page ships only when every item passes.

**Colour**
- [ ] Only semantic tokens are used in components; there are no hard-coded hex values.
- [ ] Every text and background pair appears in §2.5 and meets AA.
- [ ] Blue appears only on actions and links, and covers less than 10% of the screen.
- [ ] Mint is used only for focus and data highlights, and never as text on light backgrounds.
- [ ] Dark mode (if supported) uses the dark semantic values and passes contrast.

**Typography**
- [ ] Only DM Sans or GT Walsheim, and IBM Plex Mono or Simplon Mono, are loaded.
- [ ] Every text element uses a `typography.*` style; there are no ad-hoc sizes.
- [ ] Headings are weight 400 with their token letter-spacing.
- [ ] At most three type levels and one H1 or display appear per viewport.
- [ ] Body text is at most 70ch, leads 50ch and headlines 20ch.
- [ ] Mono is used only for labels, data and code; uppercase only in mono labels.

**Layout and spacing**
- [ ] Margins are 36, 54 or 108px for the breakpoint, and content is capped at 1224px.
- [ ] Section padding is 72px on mobile and 108px on desktop (140px for major sections).
- [ ] Every margin, padding and gap is a `space.*` value.
- [ ] Text is left-aligned, except short centred hero statements.

**Shape, elevation and imagery**
- [ ] Buttons and badges are pills, cards are 16px, panels and modals 20px, inputs 4px.
- [ ] No shadows on static content; floating layers use `shadow.1` to `shadow.3`.
- [ ] Images use an `aspect.*` ratio, are full-bleed or 16px-radius, and are natural colour.
- [ ] Icons are outline with a 2px stroke at token sizes and use `currentColor`.

**Interaction and motion**
- [ ] There is one primary button per screen.
- [ ] Every hover, focus, active, disabled, loading and error state is implemented as in §10.
- [ ] Transitions use token durations and easings, and only animate transform, opacity or clip-path.
- [ ] Reduced motion turns off reveals, scaling and autoplay.

**Accessibility**
- [ ] The 4px mint focus ring is visible and unclipped on every interactive element.
- [ ] Hit areas are at least 24px (44px for primary and touch controls).
- [ ] Every flow can be completed with the keyboard alone; overlays trap focus and close with Escape.
- [ ] There is a skip link, landmarks, ordered headings, labelled icon buttons and image alt text.
- [ ] Nothing is communicated by colour alone.

**Responsive**
- [ ] Checked on a phone below 600px wide and at 600px, 1024px and 1440px wide, with no horizontal scrolling.
- [ ] Navigation collapses below 1024px, and the mobile menu works with the keyboard.
- [ ] Tables, cards, modals and callouts follow §12.

---

## 16. Versioning

**Current version: 1.0.0**

The system follows semantic versioning (`MAJOR.MINOR.PATCH`):
- **MAJOR**: a token is removed or renamed, or a value changes in a way that alters existing designs (for example a new type scale).
- **MINOR**: a new token, component or variant is added, with no change to existing values.
- **PATCH**: documentation fixes, clarified rules, or corrected inferred values that were not yet in use.

**When you change the system:** edit `tokens.json`, run `node design-system/scripts/build.mjs`, update this document, run `node design-system/scripts/check.mjs`, update the version in both the `tokens.json` description and the header of this document, and add a changelog entry.

### Changelog

#### 1.0.0 (2026-11-24)
- First complete release: sections 1–16, `tokens.json` (W3C Design Tokens format), the generated `tokens.css` and `tailwind.preset.js`, and the build and check scripts.
- Type scale, colour, spacing, radii, shadows and motion measured from the reference implementation at four viewport widths, from phone to wide desktop. Inferred values are marked.
- Deliberate deviation from the reference: accent text on light backgrounds uses `#006fee` instead of `#0077ff`, to meet WCAG AA.
- Open-source fonts (DM Sans and IBM Plex Mono) are the default, with the licensed GT Walsheim and Simplon Mono as options.

#### 0.1.0 (2026-11-24)
- Draft of the Overview, Color and Typography sections, for approval.
