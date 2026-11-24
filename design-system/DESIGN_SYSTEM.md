# Design System

**Version 2.0.0** · Brand: **PRINCIPIA** (assets and guidelines in [`brand/`](../brand/)) · Token source: [`tokens.json`](tokens.json) · Generated outputs: [`tokens.css`](tokens.css), [`tailwind.preset.js`](tailwind.preset.js)

This document is the single source of truth for the visual language of every website and product built under this system: landing pages, web apps, dashboards, e-commerce and documentation. It describes a **visual language**. It does not describe any particular page layout or content.

**How to read this document**

- Every value is exact. Use it as written; do not round it or approximate it.
- Values measured directly from the reference implementation's CSS or rendered pages are unmarked.
- Values derived because the reference does not define them are marked **(inferred)**, with the reasoning given.
- Pixel values assume a 16px root, so `1rem = 16px`. Letter-spacing is in `em`, so it scales with font size.
- Every value here exists in `tokens.json`, and every token in `tokens.json` appears here. `node design-system/scripts/check.mjs` verifies this.
- In code, **always use the token, never the raw value**. Write `var(--color-text-primary)` or the Tailwind class `text-primary`, not `#0b1220`.

**Contents**

1. [Overview](#1-overview)
2. [Color](#2-color)
3. [Typography](#3-typography)
4. [Visual hierarchy](#4-visual-hierarchy)
5. [Layout and grid](#5-layout-and-grid)
6. [Spacing](#6-spacing)
7. [Shape and elevation](#7-shape-and-elevation)
8. [Imagery, iconography and logo](#8-imagery-and-iconography)
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

This is a system of **quiet confidence**, applied to the PRINCIPIA brand: **ink, one signal, plenty of white**. Pages are mostly white space and calm Paper surfaces, set in deep PRINCIPIA Ink, with a single Signal Blue for action. Hierarchy comes from **scale, not weight**: every heading uses the same Space Grotesk SemiBold and all reading text uses Inter Regular, so importance is shown by making type dramatically larger, never by adding more weights. Surfaces are flat. Depth comes from contrast between light and Ink bands and from full-bleed imagery, not from drop shadows. Interactive things are unmistakable: actions are pill-shaped and Signal Blue, and keyboard focus is a thick blue ring that cannot be missed. Motion is short and physical, and it confirms what the user did rather than decorating the page. The result should feel precise, technical and trustworthy, like the logo itself: a single clean line that connects.

### Core principles

| # | Principle | Rationale |
|---|---|---|
| 1 | **One heading weight, one reading weight.** Headings are Space Grotesk 600. Reading text is Inter 400. 500 is for labels and buttons; 600 in Inter is for inline emphasis. | Size contrast reads as confident; extra weights read as noise. Two fixed pairings keep every page consistent with the brand. |
| 2 | **Tighter tracking as type gets larger, wider for labels.** Display −0.03em, headings −0.02em to −0.01em, body −0.01em. Uppercase labels +0.14em. | Space Grotesk is spacious, so large sizes need a little tightening to stay compact. Small uppercase labels need air to stay legible. |
| 3 | **Ink, one signal, plenty of white.** Ink and white carry the page. Signal Blue is reserved for things you can click or act on, and the logo's node. | When colour appears only where an action is possible, the user never has to guess what is interactive. It also mirrors the logo: one blue point of connection. |
| 4 | **Flat surfaces, no decorative shadows.** Separate areas with Paper, hairline dividers and light and Ink bands. Shadows are only for things that float above the page (menus, toasts, modals). | Shadows on static content add noise. Flat planes look precise and engineered. |
| 5 | **Pills for actions, soft corners for containers.** Buttons and chips are fully rounded. Cards and media use 16–20px corners. Form fields use 3–4px. | Shape is a signal. Round means "press me", softly rounded means "a group of content" and nearly square means "type here". |
| 6 | **Generous, fixed rhythm.** Wide outer margins (108px on desktop) and large vertical gaps (72–140px) between sections. | White space makes each idea feel important. Fixed steps keep pages consistent no matter who builds them. |
| 7 | **Focus you cannot miss.** Keyboard focus is a 4px Signal Blue outline (`#2563eb`, or `#7aa7ff` on dark), offset 2px, on every interactive element. | Accessibility is part of the brand. A thick, on-brand ring helps keyboard users and signals care. |
| 8 | **Motion confirms, it does not decorate.** UI responses take 150–200ms. Content reveals take 600–800ms on a soft ease-out. Hover on actions is a 3–5% scale. | Short, physical motion makes the interface feel responsive. Anything longer or showier slows people down. |
| 9 | **Let media carry the story.** Real photography and video of real engineering work, full-bleed or in large rounded frames, often on Ink or black. | Imagery builds trust faster than decoration. Large frames give it authority. |
| 10 | **Colour by role, not by name.** Components reference roles (`text.primary`, `action.primary.bg`), never raw hex values. | The brand can evolve, or a sub-brand can be swapped in, without touching a single component. |

---

## 2. Color

### 2.1 Primitive palette

These are the raw colours (`color.*` in `tokens.json`). The five PRINCIPIA brand colours come from the brand guidelines (`brand/PRINCIPIA-Brand-Guidelines.pdf`, page 6, and `brand/03-Colors/`). The supporting neutrals and status colours extend them for interfaces. **Components must never use primitives directly.** They use the semantic roles in §2.2.

#### Brand colours

| Token | Brand name | Hex | RGB | CMYK (approx.) | Use |
|---|---|---|---|---|---|
| `color.ink.900` | **PRINCIPIA Ink** | `#0b1220` | 11 18 32 | 66 44 0 87 | Primary. Logo, headlines, body text, dark backgrounds. |
| `color.blue.600` | **Signal Blue** | `#2563eb` | 37 99 235 | 84 58 0 8 | Accent. The logo's node, links, primary buttons, focus. Use sparingly. |
| `color.blue.300` | **Signal Blue Light** | `#7aa7ff` | 122 167 255 | 52 35 0 0 | The node and accents on dark backgrounds only. **Never on white** (2.39:1). |
| `color.paper` | **Paper** | `#f4f6f8` | 244 246 248 | 2 1 0 3 | Light surfaces and panels |
| `color.ink.600` | **Slate** | `#4b5563` | 75 85 99 | 24 14 0 61 | Secondary text and captions |
| `color.white` | **White** | `#ffffff` | 255 255 255 | 0 0 0 0 | Backgrounds and the reversed logo |

#### Supporting neutrals: slate ramp (cool blue-grey)

| Token | Hex | Notes |
|---|---|---|
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
| `color.black` | `#000000` | Media backgrounds only (behind photos and video) |

#### Supporting blues

| Token | Hex | Notes |
|---|---|---|
| `color.blue.700` | `#1d4ed8` | **(inferred)** Pressed state for Signal Blue |
| `color.blue.50` | `#eaf3ff` | **(inferred)** Tinted background for info messages |

#### Status

| Token | Hex | Notes |
|---|---|---|
| `color.green.700` | `#00704a` | **(inferred)** Success text on light backgrounds |
| `color.green.300` | `#34d399` | **(inferred)** Success in dark mode |
| `color.green.50` | `#e6fcf5` | **(inferred)** Tinted background for success messages |
| `color.red.600` | `#ea0000` | Error text, error borders and invalid fields |
| `color.red.700` | `#c40000` | **(inferred)** Hover and pressed state for destructive buttons, and error text on tinted backgrounds |
| `color.red.300` | `#ff5c5c` | **(inferred)** Error in dark mode |
| `color.red.50` | `#fdecec` | **(inferred)** Tinted background for error messages |
| `color.amber.700` | `#8f4b00` | **(inferred)** Warning text. Meets AA on white and on `amber.50`. |
| `color.amber.300` | `#ffb547` | **(inferred)** Warning in dark mode |
| `color.amber.50` | `#fff4e5` | **(inferred)** Tinted background for warning messages |

Status colours are for status only: never for decoration, charts of ordinary data or brand moments.

#### Alpha colours

| Token | Hex (with alpha) | Notes |
|---|---|---|
| `color.alpha.overlay` | `#00000080` | Black at 50%. Modal backdrop, and the glass button over video. |
| `color.alpha.shadow-1` | `#0000000a` | Black at 4%. Colour of shadow level 1. |
| `color.alpha.shadow-2` | `#0b12201a` | Ink at 10%. Colour of shadow level 2. |
| `color.alpha.shadow-3` | `#00000066` | Black at 40%. Colour of shadow level 3. |

### 2.2 Semantic roles

Components use only these (`semantic.light.*` and `semantic.dark.*` in `tokens.json`; `--color-*` in CSS). To change the brand, change which primitive a role points to (see §14), never the components.

| Role | Light mode | Dark mode | Use |
|---|---|---|---|
| `bg.canvas` | `white` `#ffffff` | `ink.900` `#0b1220` | Page background |
| `bg.surface` | `paper` `#f4f6f8` | `slate.900` `#132237` | Cards, footer and grouped content |
| `bg.subtle` | `slate.100` `#f4f6f9` | `slate.850` `#1f2a39` | Hover tints, table stripes, disabled inputs |
| `bg.inverse` | `ink.900` `#0b1220` | `white` `#ffffff` | Contrast bands, such as an Ink section on a light page |
| `bg.brand` | `blue.600` `#2563eb` | `blue.600` `#2563eb` | Signal Blue callout panels and banners, with white text and the white logo |
| `bg.media` | `black` `#000000` | `black` `#000000` | Behind images and video |
| `bg.overlay` | `alpha.overlay` `#00000080` | `alpha.overlay` `#00000080` | Modal backdrop |
| `text.primary` | `ink.900` `#0b1220` | `white` `#ffffff` | Body copy and headings |
| `text.secondary` | `ink.600` `#4b5563` | `slate.400` `#a2abb9` | Supporting copy, descriptions and captions |
| `text.tertiary` | `slate.600` `#5d6e83` | `slate.500` `#7c899a` | Metadata, timestamps, footnotes and placeholders |
| `text.disabled` | `slate.450` `#949a9f` | `slate.600` `#5d6e83` | Disabled controls only (exempt from contrast minimums) |
| `text.inverse` | `white` `#ffffff` | `ink.900` `#0b1220` | Text on `bg.inverse` |
| `text.accent` | `blue.600` `#2563eb` | `blue.300` `#7aa7ff` | Links and accent words |
| `text.on-action` | `white` `#ffffff` | `white` `#ffffff` | Text on primary and destructive buttons, and on `bg.brand` |
| `action.primary.bg` | `blue.600` `#2563eb` | `blue.600` `#2563eb` | Primary button fill |
| `action.primary.bg-hover` | `white` `#ffffff` | `ink.900` `#0b1220` | Primary button on hover (the fill inverts; see §2.4) |
| `action.primary.fg-hover` | `blue.600` `#2563eb` | `blue.300` `#7aa7ff` | Primary button text on hover |
| `action.primary.bg-pressed` | `blue.700` `#1d4ed8` | `blue.700` `#1d4ed8` | **(inferred)** Primary button while pressed |
| `action.secondary.border` | `ink.900` `#0b1220` | `white` `#ffffff` | Outline button stroke and text |
| `action.destructive.bg` | `red.600` `#ea0000` | `red.600` `#ea0000` | **(inferred)** Destructive button fill |
| `action.destructive.bg-hover` | `red.700` `#c40000` | `red.700` `#c40000` | **(inferred)** Destructive button on hover and press |
| `border.default` | `slate.200` `#e5e9f0` | `slate.800` `#2e3d4f` | Dividers and card outlines |
| `border.strong` | `slate.450` `#949a9f` | `slate.700` `#43546a` | Emphasised decorative rules (not form controls) |
| `border.input` | `slate.500` `#7c899a` | `slate.500` `#7c899a` | Text inputs and selects (meets 3:1 for non-text contrast) |
| `border.input-hover` | `slate.600` `#5d6e83` | `slate.400` `#a2abb9` | **(inferred)** Input border on hover |
| `border.control` | `slate.600` `#5d6e83` | `slate.400` `#a2abb9` | Checkboxes and radio buttons |
| `focus.ring` | `blue.600` `#2563eb` | `blue.300` `#7aa7ff` | Keyboard focus outline on every interactive element |
| `highlight` | `blue.600` `#2563eb` | `blue.300` `#7aa7ff` | Active markers, selected states, the toggle "on" track and the first data series |
| `logo.ink` | `ink.900` `#0b1220` | `white` `#ffffff` | The logo's letters (full-colour and reversed versions) |
| `logo.node` | `blue.600` `#2563eb` | `blue.300` `#7aa7ff` | The logo's node. Use the supplied artwork; this role is for reference and for building lock-ups. |
| `status.success.fg` / `.bg` | `green.700` / `green.50` | `green.300` / `slate.900` | **(inferred)** Success |
| `status.warning.fg` / `.bg` | `amber.700` / `amber.50` | `amber.300` / `slate.900` | **(inferred)** Warning |
| `status.error.fg` / `.bg` | `red.600` / `red.50` | `red.300` / `slate.900` | Error |
| `status.error.fg-strong` | `red.700` `#c40000` | `red.300` `#ff5c5c` | **(inferred)** Error text inside a tinted error alert |
| `status.info.fg` / `.bg` | `blue.600` / `blue.50` | `blue.300` / `slate.900` | **(inferred)** Info |

**Dark mode.** Dark mode is an Ink canvas, exactly like the brand's reversed backgrounds, with white text, `slate.400` secondary text and Signal Blue Light accents (the brand's rule for the node on dark). Turn it on with `data-theme="dark"` on `<html>`. Without a `data-theme` attribute, the page follows the operating-system setting.

### 2.3 Usage ratio: 70 / 25 / 5 (from the brand guidelines)

| Share | What | Why |
|---|---|---|
| **70%** | White or Paper | Calm, open and premium; the brand's "plenty of white" |
| **25%** | PRINCIPIA Ink: text, Ink bands, the logo | Gives the page weight and rhythm, and alternating light and Ink bands replace shadows |
| **5%** | Signal Blue | Buttons, links, focus, selected states and the logo's node. Scarcity is what makes blue mean "act here". |

A screen that is noticeably more than 5% blue is over-using the signal. Use outline buttons or plain text links for secondary actions instead. A Signal Blue callout panel (`bg.brand`) counts towards the 5%, so use at most one per page.

### 2.4 Interactive states

| Element | Default | Hover | Focus-visible | Active / pressed | Disabled |
|---|---|---|---|---|---|
| Primary button | bg `#2563eb`, text `#ffffff`, 1px border `#2563eb` | bg `#ffffff`, text `#2563eb`, border `#2563eb` (inverts), scale 1.05 | 4px `#2563eb` outline, 2px offset | scale 0.98, bg `#1d4ed8` **(inferred)** | opacity 0.5, `cursor: not-allowed` |
| Secondary (outline) button | transparent, text and 1px border `#0b1220` | bg `#0b1220`, text `#ffffff`, scale 1.05 | as above | scale 0.98 | opacity 0.5 |
| Destructive button **(inferred)** | bg `#ea0000`, text `#ffffff` | bg `#c40000`, scale 1.05 | as above | scale 0.98, bg `#c40000` | opacity 0.5 |
| Text link (in body copy) | `#2563eb`, no underline | underline appears | as above | colour `#1d4ed8` **(inferred)** | `#949a9f` |
| Navigation link | `#0b1220` | `#2563eb` | as above | n/a | n/a |
| Text input | border 1px `#7c899a`, bg `#ffffff` | border `#5d6e83` **(inferred)** | as above | n/a | bg `#f4f6f9`, text `#949a9f` |
| Invalid input | border 1px `#ea0000`, text `#ea0000` | n/a | as above | n/a | n/a |

On dark backgrounds, every `#2563eb` in this table becomes `#7aa7ff` (Signal Blue Light) for text, links and the focus ring. Button fills stay `#2563eb`.

### 2.5 Contrast ratios (WCAG 2.2)

Thresholds: **AA** needs 4.5:1 for normal text and 3:1 for large text (24px and up, or 18.66px bold) and for UI components. **AAA** needs 7:1.

| Foreground | Background | Ratio | Result | Allowed use |
|---|---|---|---|---|
| `#0b1220` Ink | `#ffffff` White | **18.72** | AAA | All text |
| `#0b1220` | `#f4f6f8` Paper | **17.28** | AAA | All text |
| `#0b1220` | `#f4f6f9` subtle | **17.29** | AAA | All text |
| `#0b1220` | `#e5e9f0` | **15.38** | AAA | All text |
| `#4b5563` Slate | `#ffffff` | **7.56** | AAA | All text |
| `#4b5563` | `#f4f6f8` | **6.98** | AA | All text |
| `#4b5563` | `#f4f6f9` | **6.98** | AA | All text |
| `#5d6e83` text.tertiary | `#ffffff` | **5.22** | AA | All text |
| `#5d6e83` | `#f4f6f8` | **4.82** | AA | All text |
| `#7c899a` border.input | `#ffffff` | **3.56** | AA (non-text) | Borders and icons, or large text only |
| `#7c899a` | `#f4f6f8` | **3.28** | AA (non-text) | Borders and icons only |
| `#949a9f` | `#ffffff` | **2.84** | Fails | Disabled text and decorative dividers only |
| `#ccd3dc` | `#ffffff` | **1.51** | Fails | Decorative tracks only |
| `#2563eb` Signal Blue | `#ffffff` | **5.17** | AA | Links, accent text, focus ring |
| `#ffffff` | `#2563eb` | **5.17** | AA | Button labels and text on `bg.brand` |
| `#2563eb` | `#f4f6f8` | **4.77** | AA | Links on Paper |
| `#1d4ed8` | `#ffffff` | **6.70** | AA | Pressed links |
| `#ffffff` | `#1d4ed8` | **6.70** | AA | Pressed button labels |
| `#7aa7ff` Signal Blue Light | `#ffffff` | **2.39** | Fails | **Never on white** (brand rule) |
| `#7aa7ff` | `#2563eb` | **2.17** | Fails | Never on Signal Blue |
| `#ea0000` error | `#ffffff` | **4.67** | AA | Error text and borders |
| `#ffffff` | `#ea0000` | **4.67** | AA | Destructive button label |
| `#c40000` | `#fdecec` error bg | **5.49** | AA | Error text in alerts |
| `#00704a` success | `#ffffff` | **6.15** | AA | Success text |
| `#00704a` | `#e6fcf5` success bg | **5.74** | AA | Success text in alerts |
| `#8f4b00` warning | `#ffffff` | **6.62** | AA | Warning text |
| `#8f4b00` | `#fff4e5` warning bg | **6.09** | AA | Warning text in alerts |
| `#2563eb` info | `#eaf3ff` info bg | **4.62** | AA | Info text and icons in alerts |
| `#0b1220` | `#eaf3ff` | **16.73** | AAA | Body text in info alerts |
| **Dark backgrounds** | | | | |
| `#ffffff` | `#0b1220` Ink | **18.72** | AAA | All text |
| `#ffffff` | `#132237` surface | **16.01** | AAA | All text |
| `#ffffff` | `#1f2a39` subtle | **14.50** | AAA | All text |
| `#a2abb9` secondary | `#0b1220` | **8.08** | AAA | All text |
| `#a2abb9` | `#132237` | **6.91** | AA | All text |
| `#ccd3dc` | `#0b1220` | **12.41** | AAA | All text |
| `#7c899a` tertiary | `#0b1220` | **5.26** | AA | All text |
| `#5d6e83` disabled | `#0b1220` | **3.59** | n/a | Disabled only |
| `#7aa7ff` accent | `#0b1220` | **7.84** | AAA | Links, accent text, focus ring |
| `#7aa7ff` | `#132237` | **6.71** | AA | Links and accent text |
| `#0b1220` | `#7aa7ff` | **7.84** | AAA | Ink text on a Signal Blue Light chip |
| `#2563eb` | `#0b1220` | **3.62** | AA large / non-text | Button fills and icons only; use `#7aa7ff` for text on Ink |
| `#2563eb` | `#132237` | **3.10** | AA large / non-text | Button fills and icons only |
| `#ff5c5c` error | `#0b1220` | **6.19** | AA | Error |
| `#34d399` success | `#0b1220` | **9.74** | AAA | Success |
| `#ffb547` warning | `#0b1220` | **10.66** | AAA | Warning |

**Rule:** if a text and background pair is not in this table, do not use it until its ratio has been checked and added here.

---

## 3. Typography

### 3.1 Font families

Both brand typefaces are free under the SIL Open Font License. The font files and licences are in `brand/04-Fonts/`; they are also on Google Fonts.

| Role | Token | Font | Use | Fallback stack |
|---|---|---|---|---|
| **Display** | `font.family.display` | **Space Grotesk**: Medium (500) and SemiBold (600) | Headings, labels and eyebrows, large text CTAs, the wordmark | `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` |
| **Text** | `font.family.sans` | **Inter**: Regular (400), Medium (500) and SemiBold (600) | Body text, interfaces, data, buttons, forms | `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif` |
| **Code** | `font.family.mono` | **IBM Plex Mono** (SIL Open Font License) | Code only. Not part of the brand voice. | `ui-monospace, SFMono-Regular, Menlo, Consolas, monospace` |

**Rules**

- Self-host the fonts as WOFF2 with `font-display: swap`. Preload Inter Regular and Space Grotesk SemiBold.
- Load only these weights: Space Grotesk **500** (`font.weight.medium`) and **600** (`font.weight.semibold`), and Inter **400** (`font.weight.regular`), **500** and **600**.
- Never use another typeface, and never fake bold or italic.
- **The logo is artwork, not type.** Never set "PRINCIPIA" in Space Grotesk to stand in for the logo. Always use the supplied files (§8.5).

### 3.2 Type scale

Tokens are `typography.<name>.desktop` and `typography.<name>.mobile`; in CSS, `.type-<name>` or `--type-<name>-size` and so on. **Desktop values apply from 600px wide** (`breakpoint.sm`). Mobile values apply below 600px. Sizes and line heights are measured from the reference implementation. Letter-spacing has been adjusted for Space Grotesk and Inter, and weights follow the brand guidelines.

| Token | Use | Desktop size / line height | Mobile size / line height | Font and weight | Letter-spacing | Case |
|---|---|---|---|---|---|---|
| `display` | Hero statement, one per page at most | 128px / 140.8px (1.1) | 80px / 84px (1.05) | Space Grotesk 600 | −0.03em | Sentence |
| `display-number` | Big statistics ("20M+") | 72px / 72px (1.0) | 72px / 72px (1.0) | Space Grotesk 600 | −0.03em | n/a |
| `h1` | Page title and section headline | 63px / 63px (1.0) | 45px / 45px (1.0) | Space Grotesk 600 | −0.02em | Sentence |
| `h2` | Major sub-section and pull quote | 50px / 55px (1.1) | 31px / 34.1px (1.1) | Space Grotesk 600 | −0.02em | Sentence |
| `h3` | Section title inside a page | 40px / 48px (1.2) | 30px / 36px (1.2) | Space Grotesk 600 | −0.02em | Sentence |
| `h4` | Card title and feature title | 30px / 31.5px (1.05) | 30px / 31.5px (1.05) | Space Grotesk 600 | −0.01em | Sentence |
| `h5` | Small card title | 24px / 26.4px (1.1) | 24px / 26.4px (1.1) | Space Grotesk 600 | −0.01em | Sentence |
| `h6` | Stat label and dense heading | 18px / 19.8px (1.1) | 18px / 19.8px (1.1) | Space Grotesk 600 | −0.01em | Sentence |
| `body-l` | Lead and intro paragraph | 24px / 36px (1.5) | 20px / 28px (1.4) **(inferred)** | Inter 400 | −0.01em | Sentence |
| `body-m` | Default body text | 16px / 24px (1.5) | 16px / 24px (1.5) | Inter 400 | −0.01em | Sentence |
| `body-s` | Navigation, secondary copy, table cells | 14px / 21px (1.5) | 14px / 21px (1.5) | Inter 400 | −0.01em | Sentence |
| `caption` | Footnotes and legal text | 12px / 13.2px (1.1) | 12px / 13.2px (1.1) | Inter 400 | 0em | Sentence |
| `eyebrow` | The small label above a heading | 12px / 18px (1.5) | 12px / 18px (1.5) | Space Grotesk 600 | +0.14em | UPPERCASE |
| `label` | Tags, badges, table headers, footer headings, metadata | 12px / 18px (1.5) | 12px / 18px (1.5) | Space Grotesk 500 | +0.14em | UPPERCASE |
| `label-l` | Units beside big numbers, data labels | 16px / 28px (1.75) | 16px / 28px (1.75) | Space Grotesk 500 | +0.14em | UPPERCASE |
| `button` | Button and pill labels | 16px / 24px (1.5) | 16px / 24px (1.5) | Inter 500 | −0.01em | Sentence |
| `button-l` | Large text CTA (link with circle-arrow icon) | 24px / 26.4px (1.1) | 24px / 26.4px (1.1) | Space Grotesk 600 | −0.01em | Sentence |
| `nav-mobile` | Items in the full-screen mobile menu | n/a | 40px / 46px (1.15) | Space Grotesk 600 | −0.02em | Sentence |
| `code` | Inline and block code | 14px / 21px (1.5) **(inferred)** | 14px / 21px (1.5) | IBM Plex Mono 400 | 0em | n/a |

**Why these numbers**

- **Weights come from the brand:** SemiBold for headings, Medium for small labels, Regular for reading, and Medium or SemiBold for buttons and emphasis. Hierarchy still comes from size (principle 1): every heading is the same weight.
- **Line height tightens as size grows:** 1.5 for body, 1.1–1.2 for headings and 1.0 for the largest titles. Large type with body-style leading falls apart into separate lines.
- **Tracking:** Space Grotesk SemiBold is wide, so large headings tighten (−0.02em for H1–H3, −0.03em for display), which matches the headings in the brand guidelines. Inter reads best slightly tight at text sizes (−0.01em). Uppercase labels use the brand's +0.14em.
- **H4 to H6 do not shrink on mobile.** They are already at reading size. Only display, H1–H3 and body-l scale down.

### 3.3 Rules

**Line length** (`layout.measure.*`)
- Body text (`body-m`): **at most 70ch**.
- Lead text (`body-l`): **at most 50ch**.
- Headlines (`h1`–`h3`): **at most 20ch**. Break long headlines into two balanced lines with `text-wrap: balance`.
- Display statements (`display`): **at most 15ch**, or **10ch** for one- or two-word statements.

**Paragraph and heading spacing**
- Between paragraphs: **16px** **(inferred)**.
- Eyebrow to heading: **8px**.
- Heading to the following body text: **24px**.
- Heading to the following content group (cards, a list, media): **40px**.
- Body text to a button row: **40px**.

**Pairing**
- Space Grotesk for headings, eyebrows, labels and large CTAs. Inter for everything that is read or used: paragraphs, buttons, forms, tables and navigation.
- An eyebrow sits **above** a heading, never below it or inside it.
- Keep the HTML heading order correct (h1, then h2, then h3). If a design needs more visual contrast, use a larger style on the correct element: an `<h2>` may use the `h1` style. Never skip heading levels in the HTML.
- Emphasis inside running text uses Inter **600**, never italic and never colour. Colour is reserved for links.
- Uppercase is only for Space Grotesk labels and eyebrows, always with +0.14em tracking. Never set Inter or a heading in all caps.
- Numbers in tables and data use `font-variant-numeric: tabular-nums`.

---

## 4. Visual hierarchy

### 4.1 How importance is signalled, in order of strength

1. **Size.** The main lever. Adjacent levels differ by **at least 1.25×** in size (for example `h3` 40px against `body-l` 24px is 1.67×). A difference under 1.25× reads as a mistake, not as hierarchy.
2. **Space.** More space above an element means it starts something new. Section gaps (72–140px) are much larger than gaps between blocks (40–54px) and between items (16–24px), so grouping is obvious without lines or boxes.
3. **Colour value.** Primary text `#0b1220` (Ink) is for what must be read, secondary `#4b5563` (Slate) for what supports it and tertiary `#5d6e83` for metadata. Lighter colour means less important.
4. **Case and family.** A 12px Space Grotesk uppercase eyebrow signals "category" or "context" above a heading, without competing with it.
5. **Accent.** Blue marks the one action that matters on a screen. It is not used to signal importance in text.
6. **Weight.** Fixed by role, never used as a lever: every heading is Space Grotesk 600, and Inter 600 appears only as inline emphasis.

### 4.2 Levels per screen

- At most **three type levels** compete in one viewport: one headline style, one supporting style (`body-l` or `body-m`) and one meta style (`label` or `caption`).
- At most **one** `display` or `h1` per viewport.
- At most **one** primary (filled) button per viewport. Any other actions are secondary (outline) or text links.

### 4.3 Worked examples

**Marketing section**
```
EYEBROW     "PLATFORM"                  eyebrow, text.secondary
            ↓ 8px
HEADLINE    "Built for real projects"   h1 (63px), text.primary
            ↓ 24px
LEAD        one or two sentences        body-l (24px), text.secondary, max 50ch
            ↓ 40px
ACTIONS     [Primary pill] [Outline pill]
```
Hierarchy: 63px against 24px (2.6×) against a 12px uppercase eyebrow. One filled button.

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
→ code (14px IBM Plex Mono) blocks on bg.subtle → caption footnotes
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
| `shadow.2` | `0px 4px 12px 0px #0b12201a` | Dropdowns, popovers, tooltips and toasts |
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

- Flat and geometric, with no gradients. Line work follows the logo: a single continuous line with round ends, and a Signal Blue node (a filled circle) marking the point of connection.
- Line work uses the icon stroke (2px) at the same scale.
- Charts use Signal Blue `#2563eb` for the main series, Ink `#0b1220` and Slate `#4b5563` for comparison series and `#ccd3dc` for the rest, on neutral axes (`border.default`), with labels in `label` style. On Ink backgrounds the main series is `#7aa7ff`. Status colours are only for status.

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

### 8.5 Logo (from the PRINCIPIA brand guidelines)

The first letter of PRINCIPIA is drawn as a single continuous line that leaves the stem, sweeps around and returns to a blue **node**: the point where two tools, two datasets or two disciplines connect. The other letters are Space Grotesk SemiBold capitals with open letter-spacing, converted to outlines. **Always use the supplied artwork in `brand/01-Logo/`. Never retype the logo.**

**Versions**

| Version | File | Use |
|---|---|---|
| **Primary logo** (the default) | `brand/01-Logo/Primary-Logo/` | Website header and footer, documents, presentations, signage, merchandise |
| **Symbol** (the P with its node) | `brand/01-Logo/Symbol/` | App icon, favicon, social avatars, and small or square spaces where the name already appears nearby |
| **Name only** (rare) | `brand/01-Logo/Name-Only/` | Very small text-only uses (legal lines, engraving) where the symbol's detail would be lost |

**Never place the symbol next to the primary logo or the name-only version**: that shows the P twice.

**Colour versions: choose by background**

| Version | Background | Letters | Node |
|---|---|---|---|
| `color` (default) | White, Paper and other light backgrounds | Ink `#0b1220` | Signal Blue `#2563eb` |
| `reversed` | Ink and other dark backgrounds | White `#ffffff` | Signal Blue Light `#7aa7ff` |
| `black` | One-colour printing, engraving, stamps | Black | Black |
| `white` | Photos and coloured backgrounds, including Signal Blue | White | White |

File names follow `PRINCIPIA-[version]-[color].[format]`, for example `PRINCIPIA-logo-reversed.svg`. Use **SVG** on the web, **PDF or EPS** for print, and **PNG** (three sizes) for office documents, slides and email.

**Clear space and minimum size**

- **Clear space:** X = half the height of the logo (`brand.clear-space` 0.5). Keep at least X of empty space on every side, for the symbol too. No text, images or edges inside that area.
- **Minimum size:** primary logo 100px wide on screen (`brand.logo.min-width`) and 25mm in print (`brand.logo.min-width-print`). Symbol 24px tall on screen (`brand.symbol.min-height`) and 6mm in print (`brand.symbol.min-height-print`).
- **Below 32px** (`brand.symbol.favicon-below`), use the favicon artwork. Its heavier line and wider gap stay legible at tiny sizes.

**Sizes in the interface (inferred)**

| Placement | Logo height | Token |
|---|---|---|
| Header, below 1024px | 20px | `brand.logo.height-header-mobile` |
| Header, from 1024px | 24px | `brand.logo.height-header` |
| Footer | 24px | `brand.logo.height-footer` |

At these heights the logo is well above the 100px minimum width, and the header heights (80px and 100px) leave far more than the required clear space.

**App icon and favicon** (`brand/02-App-Icon-and-Favicon/`)

- The app icon is the reversed symbol on an Ink tile, with a corner radius of 22% of the tile's width (`brand.app-icon.radius`). Platforms that apply their own mask (iOS and Android) use the square version.
- The favicon uses a heavier line and a wider gap so it stays readable at 16px.
- The kit includes `favicon.ico`, `favicon.svg`, PNG favicons (16, 32 and 48px), `apple-touch-icon.png`, two large PNG icons for the web manifest, `site.webmanifest` and an HTML snippet. Set `theme-color` to Ink `#0b1220`.

**Misuse: never**

- stretch or squash the logo
- rotate it
- change its colours
- add shadows, outlines or other effects
- put it on busy or low-contrast backgrounds
- retype the name in any font
- place the symbol next to the name (a double P)
- use the full-colour logo on a dark background (use `reversed`)

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
- **Focus:** 4px Signal Blue ring, 2px offset.
- **Disabled:** opacity 0.5, `cursor: not-allowed`, `aria-disabled="true"`, no hover.
- **Loading:** keep the width, replace the label with a 20px spinner in currentColor, set `aria-busy="true"` and ignore clicks.
- **Error:** buttons have no error state. Show the error next to the field or in an alert.

**Spacing:** 12px between buttons in a row. 40px from the text above. On mobile, stack full-width buttons with 12px between them when the labels do not fit on one line.

- **Do:** one primary per screen, with verb-first labels ("Start a project").
- **Don't:** two primaries side by side, square corners, all-caps labels or icons on both sides.

### 10.2 Links

- **Inline (in body copy):** `text.accent` `#2563eb` (Signal Blue, per the brand), with a 1px underline appearing on hover. In long-form text (docs and legal) inline links **are always underlined** at 1px with a 4px offset **(inferred)**, so they are findable without relying on colour. On dark backgrounds links are `#7aa7ff`.
- **Standalone link CTA:** the circle-arrow icon (28px) + text, 10px gap, scaling to 1.05 on hover.
- **Navigation:** `body-s` (14px), `text.primary`, `text.accent` on hover, and `aria-current="page"` styled with `text.accent`.
- **Visited:** no separate visited colour.
- **External links:** add a 16px arrow-up-right icon and `rel="noopener"`.
- **Don't:** use blue for text that is not a link, or "click here" as link text.

### 10.3 Navigation and header

**Anatomy:** the primary logo (full-colour on light headers, reversed on dark) on the left, 20px tall below 1024px and 24px from 1024px, then navigation links on the right (gap 32px). Never add the name as text next to the logo. An optional primary button (md) sits at the far right.

- **Height:** 80px on mobile and 100px from `md`. Background `bg.canvas`.
- **Sticky behaviour:** the header sticks to the top (`z.sticky`). Once the page scrolls it gains `shadow.1`, or a 1px `border.default` bottom border.
- **Below `md`:** links collapse into a menu button (32px icon, 44px hit area). The menu opens full-screen on `bg.canvas`, with items in `typography.nav-mobile` (40px), stacked with 16px gaps and sliding in over 400ms `decelerate`. Focus is trapped inside the menu, which closes with the Escape key.
- **Dropdown:** `bg.canvas`, `radius.lg`, 8px padding, `shadow.2`. Items are `body-s` with 8px 12px padding, `radius.md`, and `bg.subtle` on hover.
- **States:** links follow §2.4. The current page uses `text.accent` and `aria-current="page"`.
- **Don't:** use more than 7 top-level items, a transparent header over light content, or hover-only menus with no click or keyboard access.

### 10.4 Footer

**Anatomy:** a logo, then link columns, then an optional sign-up block, then a legal row.

- Background `bg.surface` `#f4f6f8` (Paper). The full-colour primary logo sits at the top left, 24px tall (`brand.logo.height-footer`). Top padding 108px on desktop and 72px on mobile, with 72px bottom padding.
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
3. **Callout panel.** Directly below a media hero, overlapping it: `bg.brand` `#2563eb` (Signal Blue), `radius.xl` 20px, padding 48px, max-width 796px, white `h5` text with a white link CTA to the right. Any logo inside it is the white version. It stacks on mobile. At most one per page (§2.3).

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
- **Hover:** `border.input-hover`. **Focus:** 4px Signal Blue ring, 2px offset, with the border unchanged.
- **Error:** 1px `status.error.fg` border and text, `aria-invalid="true"`.
- **Disabled:** `bg.subtle` background, `text.disabled` text, `cursor: not-allowed`.
- **Loading** (async validation): a 16px spinner inside the field at the right, 14px from the edge.
- **Select:** same as the text input, with a 16px chevron 14px from the right edge, and a native `<select>` underneath for accessibility.
- **Textarea:** minimum 3 rows; resizes vertically only.

**Checkbox:** a 19px box, `radius.xs` 3px, 1px `border.control`, `bg.canvas`. When checked: `action.primary.bg` fill with a white 2px-stroke check. The label sits 12px to the right in `body-m`. Focus ring on the box. Error: border `status.error.fg`. Disabled: opacity 0.5.

**Radio:** a 19px circle (`radius.circle`), 1px `border.control`. When selected: an `action.primary.bg` border and an 8px centre dot. Arrow keys move between options in a group.

**Toggle (switch) (inferred):** a 44px × 24px track (`radius.pill`) with a 20px thumb. Off: track `slate.300`, white thumb. On: track `highlight` `#2563eb` with a white thumb, and the thumb moves right, 200ms `snap`. Use `role="switch"` with `aria-checked`. Use it only for settings that take effect immediately.

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

- `typography.label` (12px Space Grotesk 500, uppercase, +0.14em), padding 4px 10px, `radius.pill`.
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
- Every interactive element shows the focus ring on `:focus-visible`: a 4px Signal Blue (`#2563eb`; `#7aa7ff` on dark backgrounds) solid outline with a 2px offset. On a Signal Blue button the 2px offset leaves a white gap, so the ring stays visible. Never remove it with `outline: none` unless you replace it with the same ring.
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
| 1 | Set every heading in Space Grotesk 600 and create hierarchy with size | Mix heading weights, or set headings in Inter |
| 2 | Use the letter-spacing token for each style (−0.02em for H1–H3) | Leave large headings at default 0 tracking, or space uppercase labels by less than +0.14em |
| 3 | Use Signal Blue Light `#7aa7ff` for links and accents on Ink | Use Signal Blue Light on white (2.39:1, and against the brand rules) |
| 4 | Keep blue for actions and links only | Use blue for decorative headings, icons or backgrounds |
| 5 | Use one filled primary button per screen | Put two primary buttons next to each other |
| 6 | Use pills (`radius.pill`) for every button | Use square or slightly rounded buttons |
| 7 | Separate content with surface colour and space | Add shadows to cards or sections |
| 8 | Use `shadow.2` and `shadow.3` only for floating layers (menus, toasts, modals) | Use shadows to suggest something is clickable |
| 9 | Show the 4px Signal Blue focus ring on `:focus-visible` | Remove outlines or use a thin browser-default ring |
| 10 | Use the supplied logo files in the right colour version for the background (§8.5) | Retype the name, recolour, stretch, rotate or add effects to the logo |
| 11 | Put Space Grotesk uppercase eyebrows above headings | Set paragraphs in Space Grotesk, or anything in Inter uppercase |
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

**Step 3. Set up the fonts.** Convert the brand TTFs in `brand/04-Fonts/` to WOFF2 (or download them from Google Fonts), self-host them, and declare:
```css
@font-face { font-family: "Space Grotesk"; src: url("/fonts/SpaceGrotesk-Medium.woff2") format("woff2"); font-weight: 500; font-display: swap; }
@font-face { font-family: "Space Grotesk"; src: url("/fonts/SpaceGrotesk-SemiBold.woff2") format("woff2"); font-weight: 600; font-display: swap; }
@font-face { font-family: "Inter"; src: url("/fonts/Inter-Regular.woff2") format("woff2"); font-weight: 400; font-display: swap; }
@font-face { font-family: "Inter"; src: url("/fonts/Inter-Medium.woff2") format("woff2"); font-weight: 500; font-display: swap; }
@font-face { font-family: "Inter"; src: url("/fonts/Inter-SemiBold.woff2") format("woff2"); font-weight: 600; font-display: swap; }
body { font-family: var(--font-family-sans); font-size: var(--type-body-m-size); line-height: var(--type-body-m-line-height); letter-spacing: var(--type-body-m-letter-spacing); color: var(--color-text-primary); background: var(--color-bg-canvas); }
h1, h2, h3, h4, h5, h6 { font-family: var(--font-family-display); font-weight: var(--font-weight-semibold); }
```
Add the logo, favicon and app icon from `brand/01-Logo/` and `brand/02-App-Icon-and-Favicon/` (§8.5). On a site served from a sub-folder, use relative paths in the favicon snippet.

**Step 4. Map the brand colour into the roles.** This system already applies the PRINCIPIA brand. Follow these steps only for a different brand or sub-brand:
1. Add the brand colour as a primitive ramp in `tokens.json` (for example `color.brand.600`).
2. Point `semantic.light.action.primary.bg`, `text.accent` and `action.primary.fg-hover` at it. Pick a darker step for `bg-pressed`.
3. Check the new pairs against the thresholds in §2.5: white on the brand fill must reach 4.5:1, and brand text on white must reach 4.5:1. If it doesn't, use a darker step for those roles and keep the brighter one for large text and icons.
4. Point `focus.ring` at the brand's accent if it reaches 3:1 against the canvas (PRINCIPIA's Signal Blue reaches 5.17:1). Otherwise choose a focus colour that does.
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
- [ ] Signal Blue appears only on actions, links, focus, selected states and the logo node, and covers about 5% of the screen.
- [ ] Signal Blue Light `#7aa7ff` appears only on dark backgrounds.
- [ ] Dark mode (if supported) uses the dark semantic values and passes contrast.

**Typography**
- [ ] Only Space Grotesk (500, 600), Inter (400, 500, 600) and, for code, IBM Plex Mono are loaded.
- [ ] Every text element uses a `typography.*` style; there are no ad-hoc sizes.
- [ ] Headings are Space Grotesk 600 with their token letter-spacing.
- [ ] At most three type levels and one H1 or display appear per viewport.
- [ ] Body text is at most 70ch, leads 50ch and headlines 20ch.
- [ ] Uppercase appears only in Space Grotesk eyebrows and labels, at +0.14em; IBM Plex Mono only in code.

**Layout and spacing**
- [ ] Margins are 36, 54 or 108px for the breakpoint, and content is capped at 1224px.
- [ ] Section padding is 72px on mobile and 108px on desktop (140px for major sections).
- [ ] Every margin, padding and gap is a `space.*` value.
- [ ] Text is left-aligned, except short centred hero statements.

**Logo**
- [ ] The logo is a supplied file (never retyped), in the right colour version for its background, with clear space of half its height on every side.
- [ ] The primary logo is at least 100px wide; the symbol at least 24px tall; below 32px the favicon artwork is used.
- [ ] The symbol never appears next to the primary logo or the name-only version.

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
- [ ] The 4px Signal Blue focus ring is visible and unclipped on every interactive element.
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

**Current version: 2.0.0**

The system follows semantic versioning (`MAJOR.MINOR.PATCH`):
- **MAJOR**: a token is removed or renamed, or a value changes in a way that alters existing designs (for example a new type scale).
- **MINOR**: a new token, component or variant is added, with no change to existing values.
- **PATCH**: documentation fixes, clarified rules, or corrected inferred values that were not yet in use.

**When you change the system:** edit `tokens.json`, run `node design-system/scripts/build.mjs`, update this document, run `node design-system/scripts/check.mjs`, update the version in both the `tokens.json` description and the header of this document, and add a changelog entry.

### Changelog

#### 2.0.0 (2026-11-24)
- Applied the PRINCIPIA brand (`brand/PRINCIPIA-Brand-Guidelines.pdf`, v1.0).
- Colour: PRINCIPIA Ink `#0b1220`, Signal Blue `#2563eb`, Signal Blue Light `#7aa7ff`, Paper `#f4f6f8` and Slate `#4b5563` replace the reference colours. The focus ring and highlight are now Signal Blue. The callout surface (`bg.brand`) is Signal Blue. Usage ratio is the brand's 70 / 25 / 5.
- Type: Space Grotesk (headings, eyebrows, labels) and Inter (text, UI, buttons) replace DM Sans; IBM Plex Mono is now for code only. Headings are SemiBold 600, labels Medium 500 with +0.14em tracking, and tracking is adjusted for the new fonts. Added the `eyebrow` style and `font.family.display`; replaced `font.weight.bold` (700) with `font.weight.semibold` (600).
- Added §8.5 Logo, the `brand.*` tokens (minimum sizes, clear space, app-icon radius) and the `logo.ink` and `logo.node` roles.
- Removed tokens: `color.gray.100`, `color.slate.950`, `color.blue.400`, `.500`, `.800`, `.850`, `.900`, `color.green.400`, `color.teal.600`.

#### 1.0.0 (2026-11-24)
- First complete release: sections 1–16, `tokens.json` (W3C Design Tokens format), the generated `tokens.css` and `tailwind.preset.js`, and the build and check scripts.
- Type scale, colour, spacing, radii, shadows and motion measured from the reference implementation at four viewport widths, from phone to wide desktop. Inferred values are marked.
- Deliberate deviation from the reference: accent text on light backgrounds used a darker action blue instead of the reference's brighter link blue, to meet WCAG AA.
- Open-source fonts (DM Sans and IBM Plex Mono) are the default, with the licensed GT Walsheim and Simplon Mono as options.

#### 0.1.0 (2026-11-24)
- Draft of the Overview, Color and Typography sections, for approval.
