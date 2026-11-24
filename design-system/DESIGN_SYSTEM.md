# Design System

> **Status: DRAFT v0.1. Sections 1–3 for approval.** Sections 4–16, `tokens.json`, `tokens.css`, `tailwind.preset.js` and the root `CLAUDE.md` follow once these are approved.

This document is the single source of truth for the visual language of every website and product built under this system: landing pages, web apps, dashboards, e-commerce and documentation. It describes a visual language. It does not describe any particular page layout or content.

**How to read the values**

- Every value is exact. Use it as written; do not round it or approximate it.
- Values measured directly from the reference implementation's CSS or rendered pages are unmarked.
- Values that had to be derived because the reference does not define them (for example a dark-mode colour or a warning colour) are marked **(inferred)**, with the reasoning given.
- Pixel values assume a 16px root. `1rem = 16px`.
- Letter-spacing is given in `em`, so it scales with font size.
- Every token named here (for example `color.text.primary`) exists in `tokens.json`, `tokens.css` and `tailwind.preset.js`.

---

## 1. Overview

### Philosophy

This is a system of **quiet confidence**. Pages are mostly white space and calm, cool neutrals, with a single electric blue for action. Hierarchy comes from **scale, not weight**: almost everything is set in one regular (400) weight, and importance is shown by making type dramatically larger and tracking it tighter, never by making it bolder. Surfaces are flat. There are no drop shadows. Depth comes from contrast between light and dark bands, and from full-bleed imagery. Interactive things are unmistakable: actions are pill-shaped, and keyboard focus is a thick mint ring that cannot be missed. Motion is short and physical, and it confirms what the user did rather than decorating the page. The result should feel precise, trustworthy and technically advanced, without ever shouting.

### Core principles

| # | Principle | Rationale |
|---|---|---|
| 1 | **One weight, many sizes.** Regular (400) is the default for everything, headlines included. 500 is for small labels; 700 appears only inside running text for emphasis. | Size contrast reads as confident. Bold reads as loud. A single weight also keeps the page visually even. |
| 2 | **Tighter tracking as type gets larger.** Body text is −0.02em, headings are −0.04em and the largest display type is −0.05em. | Large type set at default spacing looks loose and amateur. Progressive tightening keeps word shapes compact and deliberate. |
| 3 | **Calm neutrals, one action colour.** Cool slate neutrals do the work. Blue is reserved for things you can click or act on. | When colour appears only where an action is possible, the user never has to guess what is interactive. |
| 4 | **Flat surfaces, no shadows.** Separate areas with surface colour, hairline dividers and light and dark bands. | Shadows add visual noise and imply false physicality. Flat planes look precise and engineered. |
| 5 | **Pills for actions, soft corners for containers.** Buttons and chips are fully rounded. Cards and media use 16–20px corners. Form fields use 3–4px. | Shape is a signal. Round means "press me", softly rounded means "a group of content" and nearly square means "type here". |
| 6 | **Generous, fixed rhythm.** Wide outer margins (108px on desktop) and large vertical gaps (72–140px) between sections. | White space makes each idea feel important. Fixed steps keep pages consistent no matter who builds them. |
| 7 | **Focus you cannot miss.** Keyboard focus is a 4px mint (`#00e89d`) outline, offset 2px, on every interactive element. | Accessibility is part of the brand. A distinctive focus ring helps keyboard users and signals care. |
| 8 | **Motion confirms, it does not decorate.** UI responses take 150–200ms. Content reveals take 600–800ms on a soft ease-out. Hover on actions is a 3–5% scale. | Short, physical motion makes the interface feel responsive. Anything longer or showier slows people down. |
| 9 | **Let media carry the story.** Real photography and video, full-bleed or in large rounded frames, often on black. | Imagery builds trust faster than decoration. Large frames give it the authority it needs. |
| 10 | **Colour by role, not by name.** Components reference roles (`text.primary`, `action.primary.bg`), never raw hex values. | A new brand colour can then be swapped in without touching a single component. |

---

## 2. Color

### 2.1 Primitive palette

These are the raw colours. **Components must never use primitives directly.** They use the semantic roles in §2.2, which point to primitives.

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
| `color.slate.300` | `#ccd3dc` | Light borders and track backgrounds |
| `color.slate.200` | `#e5e9f0` | Default divider |
| `color.slate.100` | `#f4f6f9` | Subtle surface, hover tint |
| `color.slate.50` | `#fafafb` | Faintest surface |
| `color.gray.100` | `#f2f2f2` | Muted surface: footers and cards |
| `color.white` | `#ffffff` | Canvas |
| `color.black` | `#000000` | Media backgrounds only (behind photos and video) |

#### Accent: blue

| Token | Hex | Notes |
|---|---|---|
| `color.blue.400` | `#4da0ff` | **(inferred)** Accent text in dark mode. Lightened from `blue.500` until it reaches 7:1 on `slate.950`. |
| `color.blue.500` | `#0077ff` | Brand blue. Use for large text (24px and up), icons and on dark backgrounds only. |
| `color.blue.600` | `#006fee` | Action blue: primary buttons and accent text on light backgrounds |
| `color.blue.800` | `#033098` | Deep blue: pressed states, data visualisation and markers |
| `color.blue.850` | `#003366` | Deep-blue surface |
| `color.blue.900` | `#061e4d` | Navy surface for callout panels |
| `color.blue.50` | `#eaf3ff` | **(inferred)** Tinted background for info messages |

#### Highlight: green

| Token | Hex | Notes |
|---|---|---|
| `color.green.400` | `#00e89d` | Mint. Used for the focus ring and data highlights. **Never for text on light backgrounds** (1.61:1). |
| `color.green.300` | `#34d399` | **(inferred)** Success text in dark mode |
| `color.teal.600` | `#00929d` | Secondary highlight for charts and illustration |
| `color.green.700` | `#00704a` | **(inferred)** Success text on light backgrounds. A darkened mint that meets AA. |
| `color.green.50` | `#e6fcf5` | **(inferred)** Tinted background for success messages |

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

### 2.2 Semantic roles

Components use only these. To rebrand, change which primitive a role points to (see §14). Never edit the components.

| Role | Light mode | Dark mode | Use |
|---|---|---|---|
| `color.bg.canvas` | `white` `#ffffff` | `slate.950` `#050f1e` | Page background |
| `color.bg.surface` | `gray.100` `#f2f2f2` | `slate.900` `#132237` | Cards, footer and grouped content |
| `color.bg.subtle` | `slate.100` `#f4f6f9` | `slate.850` `#1f2a39` | Hover tints, table stripes and input wells |
| `color.bg.inverse` | `slate.950` `#050f1e` | `white` `#ffffff` | Contrast bands, such as a dark section on a light page |
| `color.bg.brand` | `blue.900` `#061e4d` | `blue.900` `#061e4d` | Callout panels and promotional banners |
| `color.bg.media` | `black` `#000000` | `black` `#000000` | Behind images and video |
| `color.text.primary` | `ink.900` `#23233c` | `white` `#ffffff` | Body copy and headings |
| `color.text.secondary` | `ink.600` `#5f6575` | `slate.400` `#a2abb9` | Supporting copy, descriptions and labels |
| `color.text.tertiary` | `slate.600` `#5d6e83` | `slate.500` `#7c899a` | Metadata, timestamps, footnotes and placeholders |
| `color.text.disabled` | `slate.450` `#949a9f` | `slate.600` `#5d6e83` | Disabled controls only (exempt from contrast minimums) |
| `color.text.inverse` | `white` `#ffffff` | `ink.900` `#23233c` | Text on `bg.inverse` |
| `color.text.accent` | `blue.600` `#006fee` | `blue.400` `#4da0ff` | Link hover and accent words |
| `color.text.on-action` | `white` `#ffffff` | `white` `#ffffff` | Text on primary buttons |
| `color.action.primary.bg` | `blue.600` `#006fee` | `blue.600` `#006fee` | Primary button fill |
| `color.action.primary.bg-hover` | `white` `#ffffff` | `slate.950` `#050f1e` | Primary button on hover (the fill inverts; see §2.4) |
| `color.action.primary.fg-hover` | `blue.600` `#006fee` | `blue.400` `#4da0ff` | Primary button text on hover |
| `color.action.primary.bg-pressed` | `blue.800` `#033098` | `blue.800` `#033098` | **(inferred)** Primary button while pressed |
| `color.action.secondary.border` | `ink.900` `#23233c` | `white` `#ffffff` | Outline button stroke |
| `color.border.default` | `slate.200` `#e5e9f0` | `slate.800` `#2e3d4f` | Dividers and card outlines |
| `color.border.strong` | `slate.450` `#949a9f` | `slate.700` `#43546a` | Emphasised decorative rules (not form controls) |
| `color.border.input` | `slate.500` `#7c899a` | `slate.500` `#7c899a` | Text inputs and selects (meets 3:1 for non-text contrast) |
| `color.border.control` | `slate.600` `#5d6e83` | `slate.400` `#a2abb9` | Checkboxes and radio buttons |
| `color.focus.ring` | `green.400` `#00e89d` | `green.400` `#00e89d` | Keyboard focus outline on every interactive element |
| `color.status.success.fg` / `.bg` | `green.700` / `green.50` | `green.300` / `slate.900` | **(inferred)** Success |
| `color.status.warning.fg` / `.bg` | `amber.700` / `amber.50` | `amber.300` / `slate.900` | **(inferred)** Warning |
| `color.status.error.fg` / `.bg` | `red.600` / `red.50` | `red.300` / `slate.900` | Error (light foreground measured; the rest inferred) |
| `color.status.info.fg` / `.bg` | `blue.600` / `blue.50` | `blue.400` / `slate.900` | **(inferred)** Info |

**Dark mode (inferred).** The reference has no dark-mode switch. It does have many dark sections, built from `slate.950`, `blue.900` and `black` with white and `slate.400` text. The dark column above uses those same colours, so dark mode looks like one of the reference's own dark sections stretched across the whole page. Only text-accent and status colours had to be lightened to keep AA contrast.

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
| `#ffffff` text.on-action | `#006fee` action | **4.66** | AA | Button labels |
| `#006fee` text.accent | `#ffffff` | **4.66** | AA | Links and accent text |
| `#0077ff` brand blue | `#ffffff` | **4.13** | AA large only | 24px and up, icons |
| `#0077ff` | `#f2f2f2` | **3.69** | AA large only | 24px and up, icons |
| `#ffffff` | `#033098` | **11.17** | AAA | All text |
| `#ffffff` | `#061e4d` bg.brand | **16.15** | AAA | All text |
| `#ffffff` | `#003366` | **12.61** | AAA | All text |
| `#ea0000` error | `#ffffff` | **4.67** | AA | Error text and borders |
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

| Role | Token | Reference font (licensed) | Open-source substitute (use if unlicensed) | Fallback stack |
|---|---|---|---|---|
| **Primary**: everything except labels and code | `font.family.sans` | **GT Walsheim** by Grilli Type. Commercial licence from grillitype.com (desktop and web licences sold separately). | **DM Sans**, SIL Open Font License, from Google Fonts or `@fontsource-variable/dm-sans`. A geometric sans with similar proportions. | `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif` |
| **Mono**: labels, eyebrows, data, code | `font.family.mono` | **Simplon Mono** (with Simplon BP for labels) by Colophon Foundry. Commercial licence from colophon-foundry.org. | **IBM Plex Mono**, SIL Open Font License, from Google Fonts or `@fontsource/ibm-plex-mono` | `ui-monospace, SFMono-Regular, Menlo, Consolas, "Roboto Mono", monospace` |

**Rules**

- Self-host the font files (WOFF2) with `font-display: swap`, and preload the primary regular weight. The reference loads GT Walsheim regular with `font-display: block` to avoid a font flash. This system uses `swap`, so text is visible straight away even on slow connections.
- Load only the weights you need: **400 and 500**, plus **700** for inline emphasis. Variable fonts cover all three in one file.
- Never use more than these two families. Never add a serif or a display face.
- The substitutes have slightly different metrics. With DM Sans keep every value below; the tracking was checked visually on DM Sans.

### 3.2 Type scale

"Desktop" values apply from **600px** wide and up, the breakpoint at which the reference changes its type. "Mobile" values apply below 600px. Line height is given in px with the ratio in brackets. Letter-spacing is in em. Case is sentence case unless stated otherwise.

| Token | Use | Desktop size / line height | Mobile size / line height | Weight | Letter-spacing | Family | Case |
|---|---|---|---|---|---|---|---|
| `type.display` | Hero statement, one per page at most | 128px / 140.8px (1.1) | 80px / 84px (1.05) | 400 | −0.04em | sans | Sentence |
| `type.display-number` | Big statistics ("20M+") | 72px / 72px (1.0) | 72px / 72px (1.0) | 400 | −0.028em | sans | n/a |
| `type.h1` | Page title and section headline | 63px / 63px (1.0) | 45px / 45px (1.0) | 400 | −0.04em | sans | Sentence |
| `type.h2` | Major sub-section and pull quote | 50px / 55px (1.1) | 31px / 34.1px (1.1) | 400 | −0.05em | sans | Sentence |
| `type.h3` | Section title inside a page | 40px / 48px (1.2) | 30px / 36px (1.2) | 400 | −0.04em | sans | Sentence |
| `type.h4` | Card title and feature title | 30px / 31.5px (1.05) | 30px / 31.5px (1.05) | 400 | −0.04em | sans | Sentence |
| `type.h5` | Small card title and large link | 24px / 26.4px (1.1) | 24px / 26.4px (1.1) | 400 | −0.04em | sans | Sentence |
| `type.h6` | Stat label and dense heading | 18px / 19.8px (1.1) | 18px / 19.8px (1.1) | 400 | −0.05em | sans | Sentence |
| `type.body-l` | Lead and intro paragraph | 24px / 36px (1.5) | 20px / 28px (1.4) **(inferred)** | 400 | −0.04em | sans | Sentence |
| `type.body-m` | Default body text | 16px / 24px (1.5) | 16px / 24px (1.5) | 400 | −0.02em | sans | Sentence |
| `type.body-s` | Navigation, secondary copy, table cells | 14px / 21px (1.5) | 14px / 21px (1.5) | 400 | −0.02em | sans | Sentence |
| `type.caption` | Footnotes and legal text | 12px / 13.2px (1.1) | 12px / 13.2px (1.1) | 400 | −0.02em | sans | Sentence |
| `type.label` | Eyebrow above a heading, tags, metadata | 12px / 18px (1.5) | 12px / 18px (1.5) | 500 | +0.1em | mono | UPPERCASE |
| `type.label-l` | Units beside big numbers, data labels | 16px / 28px (1.75) | 16px / 28px (1.75) | 400 | +0.125em | mono | UPPERCASE |
| `type.button` | Button and pill labels | 16px / 24px (1.5) | 16px / 24px (1.5) | 400 | −0.02em | sans | Sentence |
| `type.button-l` | Large text CTA ("Watch the film" style) | 24px / 26.4px (1.1) | 24px / 26.4px (1.1) | 400 | −0.04em | sans | Sentence |
| `type.nav-mobile` | Items in the full-screen mobile menu | n/a | 40px / 46px (1.15) | 400 | −0.008em | sans | Sentence |
| `type.code` | Inline and block code | 14px / 21px (1.5) **(inferred)** | 14px / 21px (1.5) | 400 | 0em | mono | n/a |

**Why these numbers**

- **Everything is weight 400**, including the 128px display, because hierarchy comes from size (principle 1). The reference uses 400 in about 900 declarations, 500 in 91 and 700 in 89, the last almost entirely for inline emphasis.
- **Line height tightens as size grows:** 1.5 for body, 1.1–1.2 for headings and 1.0 for the largest titles. Large type with body-style leading falls apart into separate lines. Small type with tight leading becomes hard to read.
- **Tracking tightens as size grows:** −0.02em at 16px, −0.04em from 24px and −0.05em for H2 and above. Labels go the other way, to +0.1em, because small uppercase text needs extra space to stay legible.
- **H4 to H6 do not shrink on mobile.** They are already at reading size. Only display, H1–H3 and body-l scale down.

### 3.3 Rules

**Line length**
- Body text (`body-m`): **at most 70ch** (about 640px at 16px).
- Lead text (`body-l`): **at most 50ch**.
- Headlines (`h1`–`h3`): **at most 20ch**. Break long headlines into two balanced lines with `text-wrap: balance`.
- Short display statements (`display`): **at most 10–15ch**.

**Paragraph and heading spacing**
- Between paragraphs: **16px** (1em of `body-m`) **(inferred)**.
- Label (eyebrow) to heading: **8px**.
- Heading to the following body text: **24px**.
- Heading to the following content group (cards, a list, media): **40px**.
- Body text to a button row: **40px**.

**Pairing**
- Use sans for all reading and display text. Use mono only for `label`, `label-l` and `code`. Never set a paragraph in mono.
- A label sits **above** a heading as an eyebrow, never below it or inside it.
- Never pair two adjacent levels without a size jump: H2 must not follow H1 directly with no content between them. Skip a level visually if you need more contrast, but keep the HTML heading order correct.
- Emphasis inside running text uses weight **700**, never italic and never colour. Colour is reserved for links.
- Do not use all caps in sans. Uppercase is reserved for mono labels.
- Numbers in tables and data use `font-variant-numeric: tabular-nums`.
