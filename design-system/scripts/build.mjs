// Generates tokens.css and tailwind.preset.js from tokens.json (the single source of truth).
// Usage: node design-system/scripts/build.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const tokens = JSON.parse(readFileSync(join(root, "tokens.json"), "utf8"));
const VERSION = (tokens.$description.match(/Version (\d+\.\d+\.\d+)/) || [])[1] || "0.0.0";

// ---------- helpers ----------
const isToken = (n) => n && typeof n === "object" && "$value" in n;
function walk(node, path = [], out = []) {
  for (const [k, v] of Object.entries(node)) {
    if (k.startsWith("$")) continue;
    if (isToken(v)) out.push([[...path, k], v]);
    else if (v && typeof v === "object") walk(v, [...path, k], out);
  }
  return out;
}
const get = (path) => path.split(".").reduce((n, k) => n[k], tokens);
function resolve(value) {
  if (typeof value === "string" && /^\{.+\}$/.test(value)) return resolve(get(value.slice(1, -1)).$value);
  return value;
}
const kebab = (path) => path.join("-");
const fmtFamily = (arr) => arr.map((f) => (/[\s]/.test(f) && !f.includes("-apple") ? `"${f}"` : f)).join(", ");
const fmtBezier = (a) => `cubic-bezier(${a.join(", ")})`;
const fmtShadow = (v) => (v === "none" ? "none" : `${v.offsetX} ${v.offsetY} ${v.blur} ${v.spread} ${resolve(v.color)}`);
function cssValue(tok) {
  const v = resolve(tok.$value);
  switch (tok.$type) {
    case "fontFamily": return fmtFamily(v);
    case "cubicBezier": return fmtBezier(v);
    case "shadow": return fmtShadow(v);
    default: return String(v);
  }
}

// ---------- CSS ----------
const all = walk(tokens);
const lines = [];
const varName = (path) => "--" + kebab(path[0] === "semantic" ? ["color", ...path.slice(2)] : path);

const primitives = all.filter(([p]) => p[0] !== "semantic" && p[0] !== "typography");
const light = all.filter(([p]) => p[0] === "semantic" && p[1] === "light");
const dark = all.filter(([p]) => p[0] === "semantic" && p[1] === "dark");
const refVar = (tok) => {
  const raw = tok.$value;
  if (typeof raw === "string" && /^\{.+\}$/.test(raw)) return `var(--${raw.slice(1, -1).replace(/\./g, "-")})`;
  return cssValue(tok);
};

lines.push(`/* Design system tokens v${VERSION}. Generated from tokens.json by scripts/build.mjs. Do not edit by hand. */`, "");
lines.push(":root {");
for (const [p, tok] of primitives) lines.push(`  ${varName(p)}: ${cssValue(tok)};`);
lines.push("", "  /* Semantic roles: light mode (default) */");
for (const [p, tok] of light) lines.push(`  ${varName(p)}: ${refVar(tok)};`);

// typography: mobile values by default, desktop values from breakpoint.sm
const typo = Object.entries(tokens.typography);
const typoVars = (variant) => {
  const out = [];
  for (const [name, node] of typo) {
    const tok = node[variant];
    if (!tok) continue;
    const v = tok.$value;
    out.push(`  --type-${name}-family: ${fmtFamily(resolve(v.fontFamily))};`);
    out.push(`  --type-${name}-size: ${v.fontSize};`);
    out.push(`  --type-${name}-line-height: ${v.lineHeight};`);
    out.push(`  --type-${name}-weight: ${resolve(v.fontWeight)};`);
    out.push(`  --type-${name}-letter-spacing: ${v.letterSpacing};`);
  }
  return out;
};
lines.push("", "  /* Typography: mobile (below breakpoint-sm) */", ...typoVars("mobile"));
lines.push("}", "");
lines.push(`@media (min-width: ${tokens.breakpoint.sm.$value}) {`, "  :root {", ...typoVars("desktop").map((l) => "  " + l), "  }", "}", "");

const darkBlock = dark.map(([p, tok]) => `  ${varName(p)}: ${refVar(tok)};`);
lines.push("/* Semantic roles: dark mode. Set data-theme=\"dark\" on <html>, or follow the OS when no theme is set. */");
lines.push(`[data-theme="dark"] {`, "  color-scheme: dark;", ...darkBlock, "}", "");
lines.push(`@media (prefers-color-scheme: dark) {`, `  :root:not([data-theme="light"]) {`, "    color-scheme: dark;", ...darkBlock.map((l) => "  " + l), "  }", "}", "");

// type utility classes
lines.push("/* Type styles */");
for (const [name, node] of typo) {
  const upper = (node.desktop || node.mobile).$extensions?.textTransform === "uppercase";
  lines.push(`.type-${name} {`,
    `  font-family: var(--type-${name}-family);`, `  font-size: var(--type-${name}-size);`,
    `  line-height: var(--type-${name}-line-height);`, `  font-weight: var(--type-${name}-weight);`,
    `  letter-spacing: var(--type-${name}-letter-spacing);`, ...(upper ? ["  text-transform: uppercase;"] : []), "}");
}
lines.push("", "/* Reduced motion: remove non-essential movement */",
  "@media (prefers-reduced-motion: reduce) {",
  "  *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; }",
  "}", "");
writeFileSync(join(root, "tokens.css"), lines.join("\n"));

// ---------- Tailwind preset ----------
const pick = (prefix) => Object.fromEntries(all.filter(([p]) => p.join(".").startsWith(prefix + ".")).map(([p, tok]) => [p.slice(prefix.split(".").length).join("-"), cssValue(tok)]));
const nest = (obj) => { // "ink-900" -> { ink: { 900 } }
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    const i = k.indexOf("-");
    if (i === -1) { out[k] = v; continue; }
    const head = k.slice(0, i), tail = k.slice(i + 1);
    if (typeof out[head] === "string") out[head] = { DEFAULT: out[head] };
    out[head] = out[head] || {};
    out[head][tail] = v;
  }
  return out;
};
const semanticOf = (group) => Object.fromEntries(light.filter(([p]) => p[2] === group).map(([p]) => [p.slice(3).join("-"), `var(${varName(p)})`]));
const semanticColors = Object.fromEntries(light.filter(([p]) => !["bg", "text", "border"].includes(p[2])).map(([p]) => [p.slice(2).join("-"), `var(${varName(p)})`]));
const fontSize = {};
for (const [name, node] of typo) {
  for (const variant of ["desktop", "mobile"]) {
    const tok = node[variant];
    if (!tok) continue;
    const v = tok.$value;
    const key = variant === "desktop" ? name : `${name}-mobile`;
    fontSize[key] = [v.fontSize, { lineHeight: v.lineHeight, letterSpacing: v.letterSpacing, fontWeight: String(resolve(v.fontWeight)) }];
  }
}
const preset = {
  theme: {
    screens: { sm: tokens.breakpoint.sm.$value, md: tokens.breakpoint.md.$value, lg: tokens.breakpoint.lg.$value },
    colors: { transparent: "transparent", current: "currentColor", ...nest(pick("color")), ...semanticColors },
    fontFamily: Object.fromEntries(Object.entries(tokens.font.family).map(([k, v]) => [k, resolve(v.$value)])),
    fontWeight: Object.fromEntries(Object.entries(tokens.font.weight).map(([k, v]) => [k, String(v.$value)])),
    fontSize,
    spacing: { ...pick("space"), "section-sm": tokens.layout.section.sm.$value, "section-md": tokens.layout.section.md.$value,
               "section-lg": tokens.layout.section.lg.$value, "section-xl": tokens.layout.section.xl.$value,
               "margin-mobile": tokens.layout.margin.mobile.$value, "margin-tablet": tokens.layout.margin.tablet.$value,
               "margin-desktop": tokens.layout.margin.desktop.$value },
    borderRadius: pick("radius"),
    borderWidth: { DEFAULT: tokens.border.width.hairline.$value, 0: "0px", ...pick("border.width") },
    boxShadow: pick("shadow"),
    opacity: { 0: "0", 100: "1", disabled: "0.5", muted: "0.6" },
    scale: { 100: "1", hover: "1.05", "hover-large": "1.03", "hover-small": "1.08", press: "0.98" },
    transitionDuration: pick("motion.duration"),
    transitionDelay: pick("motion.delay"),
    transitionTimingFunction: pick("motion.easing"),
    zIndex: pick("z"),
    aspectRatio: { auto: "auto", ...Object.fromEntries(Object.entries(pick("aspect")).map(([k, v]) => [k, v.replace("/", " / ")])) },
    maxWidth: { none: "none", full: "100%", container: tokens.layout["container-max"].$value, ...Object.fromEntries(Object.entries(pick("layout.measure")).map(([k, v]) => [`measure-${k}`, v])) },
    extend: {
      backgroundColor: semanticOf("bg"),
      textColor: semanticOf("text"),
      borderColor: { ...semanticOf("border"), DEFAULT: "var(--color-border-default)" },
      outlineColor: { focus: "var(--color-focus-ring)" },
      ringColor: { focus: "var(--color-focus-ring)" },
    },
  },
};
writeFileSync(join(root, "tailwind.preset.js"),
  `/* Design system Tailwind preset v${VERSION}. Generated from tokens.json by scripts/build.mjs. Do not edit by hand.\n` +
  `   Usage (tailwind.config.js): module.exports = { presets: [require('./design-system/tailwind.preset.js')], content: [...] }\n` +
  `   Semantic colours (bg-canvas, text-primary, border-input, bg-action-primary-bg, ...) read CSS variables, so also load design-system/tokens.css. */\n` +
  `module.exports = ${JSON.stringify(preset, null, 2)};\n`);
console.log(`Built tokens.css and tailwind.preset.js (v${VERSION}) from ${all.length} tokens.`);
