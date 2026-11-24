// Verifies that DESIGN_SYSTEM.md and tokens.json agree:
//  1. every measurable value written in the document (hex colours, px, ms, em, ch, cubic-bezier) exists in tokens.json
//  2. every token value (and every semantic role name) appears in the document
// Also checks that tokens.css and tailwind.preset.js are up to date with tokens.json.
// Usage: node design-system/scripts/check.mjs   (exit code 1 on any mismatch)
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const tokens = JSON.parse(readFileSync(join(root, "tokens.json"), "utf8"));
const docRaw = readFileSync(join(root, "DESIGN_SYSTEM.md"), "utf8");
const doc = docRaw.replace(/−/g, "-").replace(/\+(?=\d)/g, "").toLowerCase(); // normalise minus and plus signs

const isToken = (n) => n && typeof n === "object" && "$value" in n;
const all = [];
(function walk(node, path) {
  for (const [k, v] of Object.entries(node)) {
    if (k.startsWith("$")) continue;
    if (isToken(v)) all.push([[...path, k], v]);
    else if (v && typeof v === "object") walk(v, [...path, k]);
  }
})(tokens, []);
const get = (p) => p.split(".").reduce((n, k) => n[k], tokens);
const resolve = (v) => (typeof v === "string" && /^\{.+\}$/.test(v) ? resolve(get(v.slice(1, -1)).$value) : v);
const norm = (s) => String(s).toLowerCase().replace(/−/g, "-");
const bezier = (a) => `cubic-bezier(${a.join(", ")})`;

// ---- collect every token value as a normalised string ----
const values = new Set();
const add = (v) => values.add(norm(v));
const required = []; // [label, string that must appear in the doc]
for (const [path, tok] of all) {
  const id = path.join(".");
  const v = tok.$value;
  switch (tok.$type) {
    case "color":
      if (path[0] === "semantic") {
        const role = path.slice(2).join(".");
        const last = path[path.length - 1];
        const alt = path.slice(2, -1).join(".") + ".fg";
        const ok = doc.includes(role) || (last === "bg" && doc.includes(alt + "` / `.bg"));
        if (!ok) required.push([id, role]);
        add(resolve(v));
      } else { add(v); required.push([id, v]); }
      break;
    case "dimension": case "duration": case "string": add(v); required.push([id, v]); break;
    case "number": case "fontWeight": add(v); required.push([id, String(v)]); break;
    case "cubicBezier": add(bezier(v)); required.push([id, bezier(v)]); break;
    case "fontFamily": for (const f of v) required.push([id, f]); break;
    case "shadow": {
      const s = v === "none" ? "none" : `${v.offsetX} ${v.offsetY} ${v.blur} ${v.spread} ${resolve(v.color)}`;
      if (v !== "none") for (const k of ["offsetX", "offsetY", "blur", "spread"]) add(v[k]);
      add(s); required.push([id, s]); break;
    }
    case "typography":
      for (const k of ["fontSize", "lineHeight", "letterSpacing"]) { add(v[k]); required.push([`${id}.${k}`, v[k]]); }
      break;
  }
}

const errors = [];
// ---- 1. tokens -> document ----
for (const [id, s] of required) if (!doc.includes(norm(s))) errors.push(`Token ${id} = ${s} is not mentioned in DESIGN_SYSTEM.md`);

// ---- 2. document -> tokens ----
const patterns = [
  /#[0-9a-f]{8}\b|#[0-9a-f]{6}\b/g,
  /-?\d+(?:\.\d+)?px\b/g,
  /-?\d+(?:\.\d+)?ms\b/g,
  /-?\d*\.?\d+em\b/g,
  /\d+(?:\.\d+)?ch\b/g,
  /cubic-bezier\([^)]*\)/g,
];
const found = new Map();
for (const re of patterns) for (const m of doc.matchAll(re)) {
  let v = m[0];
  if (/^-?\.\d/.test(v)) v = v.replace(/^(-?)\./, "$10."); // .5em -> 0.5em
  if (/^-\d+(?:\.\d+)?(px|ms)$/.test(v) && !values.has(v)) v = v.slice(1); // negative offsets are written with a sign in prose
  found.set(v, (found.get(v) || 0) + 1);
}
for (const [v] of found) if (!values.has(v)) errors.push(`Value ${v} appears in DESIGN_SYSTEM.md but not in tokens.json`);

// ---- 3. generated files are current ----
const css = readFileSync(join(root, "tokens.css"), "utf8");
const tw = readFileSync(join(root, "tailwind.preset.js"), "utf8");
execFileSync(process.execPath, [join(root, "scripts", "build.mjs")], { stdio: "ignore" });
if (css !== readFileSync(join(root, "tokens.css"), "utf8")) errors.push("tokens.css was out of date (it has now been rebuilt; commit the change)");
if (tw !== readFileSync(join(root, "tailwind.preset.js"), "utf8")) errors.push("tailwind.preset.js was out of date (it has now been rebuilt; commit the change)");

// ---- 4. version numbers match ----
const tv = (tokens.$description.match(/Version (\d+\.\d+\.\d+)/) || [])[1];
const dv = (docRaw.match(/\*\*Version (\d+\.\d+\.\d+)\*\*/) || [])[1];
if (tv !== dv) errors.push(`Version mismatch: tokens.json ${tv}, DESIGN_SYSTEM.md ${dv}`);

if (errors.length) {
  console.error(`✗ ${errors.length} problem(s):\n  - ` + errors.join("\n  - "));
  process.exit(1);
}
console.log(`✓ DESIGN_SYSTEM.md and tokens.json agree: ${all.length} tokens, ${found.size} distinct values in the document, generated files current, version ${tv}.`);
