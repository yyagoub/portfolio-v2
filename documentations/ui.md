# UI Documentation

The **visual design system** of the portfolio, as it exists in the code today.
UX/behavior lives in `ux.md`; page layout in `pages-structures.md`; design taste
and references in `taste.md`.

> **Current system:** Editorial / Swiss-Modernism — **"Warm Paper Neutrals."**
> Top navigation, color-zoned sections, split cards, a connected-ecosystem hero,
> and progressive disclosure. Tokens live in `src/style.css` under `:root`.
> *(The previous navy "Trust & Authority" system is archived at the end of this
> file for history.)*

---

## 1. Color palette — "Warm Paper Neutrals"

Charcoal ink on warm paper, with **per-section tints** for color-zoned sections,
and a **single restrained accent**.

| Token | Hex | Usage |
|-------|-----|-------|
| `--paper` | `#F7F4EF` | Default page background (warm off-white) |
| `--surface` | `#FFFFFF` | Cards / raised surfaces |
| `--ink` | `#1C1917` | Primary text (warm near-black) |
| `--ink-muted` | `#57534E` | Secondary text — passes AA on every tint below |
| `--line` | `#E7E1D8` | Borders / dividers (warm) |
| `--line-strong` | `#D6CCBE` | Stronger borders, timeline rail |
| `--accent` | `#0F766E` | Single accent (deep teal) — links, active nav, eyebrows, small highlights |
| `--accent-strong` | `#115E59` | Accent hover/pressed |

**Section tint scale** (each section is a distinct "room"):

| Token | Hex | Mood |
|-------|-----|------|
| `--zone-paper` | `#F7F4EF` | Base |
| `--zone-sand` | `#F0EADF` | Warm |
| `--zone-sage` | `#E8EDE6` | Cool/calm |
| `--zone-clay` | `#F2E8E2` | Soft blush |

**Palette discipline (rule, not just preference):** exactly **one** accent, used
sparingly. **Loud gradients are rejected** — e.g. bit.dev's `#592DC1`→`#FF6A95`
(see `taste.md §2d`); we borrow others' structure, not that palette.

---

## 2. Typography — editorial

Loaded via Google Fonts `<link>` in `public/index.html` (`preconnect` + `display=swap`).

| Role | Font | Notes |
|------|------|-------|
| Display / headings | **Playfair Display** | Editorial serif — hero, section titles, story headings |
| Body / UI | **Inter** | Clean sans — body, nav, labels, captions |
| Arabic (RTL) | **IBM Plex Sans Arabic** | Full Arabic glyph coverage; per-glyph fallback |

Font stacks:
- `--font-display: 'Playfair Display', 'IBM Plex Sans Arabic', Georgia, serif`
- `--font-body: 'Inter', 'IBM Plex Sans Arabic', system-ui, sans-serif`

**Scale & rhythm:** body `17px` / line-height `1.65`; headings line-height `1.15`;
hero title `clamp(2.2rem, 5vw, 3.6rem)`; section `h2` `clamp(1.7rem, 3.5vw, 2.5rem)`;
long-form prose constrained to `--prose-max: 68ch`.

---

## 3. Spacing, radius, shadow, motion, layout vars

- **Spacing:** `--space-xs .25rem` · `sm .5` · `md 1` · `lg 1.5` · `xl 2` · `2xl 3` · `3xl 4.5rem`
- **Radius:** `--radius-sm 8px` · `--radius-md 14px` · `--radius-lg 20px`
- **Shadows** (warm-tinted): `--shadow-sm/md/lg` using `rgba(28,25,23,…)`
- **Motion:** `--transition: 220ms ease`; color/shadow/transform only
- **Layout:** `--nav-h: 68px` · `--content-max: 1120px` · `--prose-max: 68ch`

---

## 4. Components (as built)

| Component | File | Notes |
|-----------|------|-------|
| Top nav | `src/components/TopNav.js` | Sticky, blurred paper bar: `.nav-monogram` ("YY") + name (start), nav links + `LanguageToggle` (end). Active link = teal underline. |
| Section (zoned) | `src/components/Section.js` | Full-bleed `.section.zone-*` background + constrained `.section-inner`. `zone` = paper/sand/sage/clay. |
| Hero | `src/components/Hero.js` | Two-column: editorial copy (eyebrow, title, tagline, primary + ghost CTAs) beside the diagram. |
| Diagram hero | `src/components/DiagramHero.js` | SVG hub-and-spoke "Identity" ecosystem → 5 platforms. `role="img"` + `aria-label`; visible caption. |
| Split card | `src/components/SplitCard.js` | Tinted visual panel (shield + short wordmark) on one side, content (name, desc, "My role") on the other; alternates via `reverse`. |
| Read more | `src/components/ReadMore.js` | Progressive disclosure: lead text always, `more` toggled. Real `<button>` + `aria-expanded`/`aria-controls`. |
| Value card | `src/components/ValueCard.js` | `.card` — icon tile + title + body. |
| Metric / stat callout | `src/components/MetricCard.js` | `.metric` — bold Playfair value (`clamp(2.4rem,4vw,3.2rem)`) with an `--ink` top rule + muted label. Prominent stat-callout style *(brainsandbeards)*. |
| Timeline | `src/components/Timeline.js` | Vertical rail, teal node dots; period + title + org + body + inline skill `.tags`. |
| Skill tags | in `Timeline.js` | `.tags` / `.tag` — pill chips of focus areas per role *(melaniedaveid)*. |
| Pull-quote | in `src/pages/About.js` | `.pullquote` — italic Playfair with a teal `border-inline-start`; one editorial emphasis line. |
| Section heading | `src/components/SectionHeading.js` | Optional teal eyebrow + `h2` + intro. |
| Contact card | in `src/pages/Contact.js` | Icon + label/value + trailing arrow. |
| Top nav brand / footer | `TopNav.js` / `src/App.js` | Footer is dark (`--ink`) with social icons + tagline + copyright. |

**Card pattern (shared):** white surface, 1px border, `--shadow-sm`; on hover →
`--shadow-lg` + `translateY(-3px)` + stronger border. No scale transforms.

**Imagery caveat:** `SplitCard` visual panels are **tinted placeholder panels**
(shield + wordmark), standing in for real images. The melaniedaveid effect that
inspired them depends on actual visuals — swap in real imagery when available.

---

## 5. Icons

- Inline **SVG** only (`src/components/Icon.js`) — **no emoji icons**.
- Set: `mail`, `linkedin`, `github`, `build`, `analyze`, `translate`, `globe`,
  `arrow`, `shield`. (`download`/`twitter` removed with the CV and X account.)
- `aria-hidden` + `focusable="false"`; labels come from text or `aria-label`.
- Directional icons flip in RTL: `[dir='rtl'] .icon-inline-end { transform: scaleX(-1); }`
  (also `.contact-arrow`).

---

## 6. RTL strategy (UI side)

**CSS logical properties** throughout (`margin-inline`, `padding-inline`,
`inset-inline-start`, `border-inline-start`, `text-align: start`) → one ruleset
serves LTR + RTL. Direction is driven by `<html dir>` (set by i18n — see `ux.md`).
Only explicit tweaks: flipping directional arrow icons.

---

## 7. Anti-patterns avoided

- ❌ Emoji icons → SVG only
- ❌ Loud / multi-color gradients → one restrained teal accent
- ❌ Generic corporate-template layouts → editorial grid + whitespace
- ❌ Low-contrast text → `--ink-muted` passes AA on every zone tint
- ❌ Layout-shifting hovers → small `translateY` only
- ❌ Color as the only section signal → tints paired with headings + spacing

---

## 8. Planned next (from the taste study — not yet built)

Backlog surfaced by studying the reference sites (`taste.md §4`). Each tagged with
its source.

**Shipped since the study** (now built — see §4): prominent stat callouts
*(brainsandbeards)*, experience skill tags + an editorial pull-quote *(melaniedaveid)*.

**Still planned:**

- **Story-in-eras block** — a dated chronological narrative (e.g. "2009 → today")
  richer than the current short "How I work" prose + pull-quote. *(mypoorbrain)*
- **Real imagery** — replace the tinted split-card panels with actual visuals
  (requires assets). *(melaniedaveid)*
- **Teaser + "View more →" list** — if a writing/projects index is ever added,
  use tiny teasers (title + one line) with a section-level "view more". *(alexpate)*

---

## 9. Archived — previous design (navy "Trust & Authority")

> Historical only. **Not in the code.** Kept so past decisions are traceable.

The first version used the `ui-ux-pro-max` skill's **"Trust & Authority"** system:
a **left navy sidebar** layout, **Lexend / Source Sans 3** typography, and an
authority-navy + trust-gold palette:

| Token | Hex | Role |
|-------|-----|------|
| `--color-primary` | `#1E3A8A` | Navy (sidebar, links) |
| `--color-cta` | `#B45309` | Trust gold (CTAs) |
| `--color-bg` | `#F8FAFC` | Cool off-white background |
| `--color-text` | `#0F172A` | Text |
| `--color-text-muted` | `#475569` | Muted text |

It was retired because the navy/gold read as generic-corporate; the owner wanted a
more refined, editorial feel (see `taste.md`). Components then included a `Sidebar`
and `PlatformCard` (both since removed).
