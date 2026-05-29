# UX Documentation

**Behavior and experience** of the portfolio as it exists today: i18n, RTL,
accessibility, navigation, responsiveness, motion, performance, and SEO. Visual
tokens live in `ui.md`; page layout in `pages-structures.md`; taste/references in
`taste.md`.

> **Current model:** **top-bar navigation**, color-zoned sections, split cards, a
> connected-ecosystem diagram hero, and "read more" progressive disclosure.
> *(The previous left-sidebar model is archived at the end of this file.)*

---

## 1. Internationalization (i18n)

- **Library:** `react-i18next` (v11) + `i18next` (v21) — pinned for React 16.
- **Config:** `src/i18n/index.js`. Locales: `src/i18n/locales/en.json`, `ar.json`.
  All copy lives here; components reference translation keys only.
- **Languages:** English (`en`, default) and Arabic (`ar`).
- **Toggle:** `src/components/LanguageToggle.js` — lives **in the top nav**.
- **Persistence:** language saved to `localStorage` (`portfolio-lang`), restored next visit.
- **Document sync:** `applyDocumentLang()` sets `<html lang>`/`<html dir>`; `App.js`
  updates `document.title` + meta description per language.

## 2. RTL (right-to-left)

- Driven entirely by `<html dir="rtl">` (set automatically for Arabic).
- **CSS logical properties** mirror the whole layout with no duplicate rules —
  the **top nav**, hero, diagram, split cards, timeline, and footer all mirror.
- Verified in-browser: Arabic renders in IBM Plex Sans Arabic with a correctly
  mirrored layout and flipped directional arrows.

## 3. Navigation (top bar)

- A **sticky, blurred top bar** (`.topnav`): brand monogram + name at the start;
  nav links + language toggle at the end. Active link = teal underline.
- **Sticky-overlap rule (applied):** the bar is `position: sticky` at the top with
  a backdrop blur; content sits below it, never hidden behind it.
- **Mobile:** the name label hides, links wrap; tap targets stay ≥ 44px.
- **RTL:** nav mirrors automatically (logical properties); item order preserved.

## 4. Progressive disclosure

- **Built:** `ReadMore` — the story shows a **lead paragraph always**, then an
  expand control reveals the rest. Real `<button>` with `aria-expanded` +
  `aria-controls`; content stays in the DOM. (inspired by alexpate.com)
- **Planned (richer pattern from the fetch):** alexpate also uses **tiny teasers**
  (title + ~5-word description) that link to full pages, plus a **section-level
  "View more →"**. If a writing/projects list is added, adopt that instead of
  expanding inline. *(see `taste.md §2e`)*

## 5. Reading experience

- Long-form prose constrained to **`--prose-max: 68ch`** (skill: line-length / container width).
- **Split cards** pace reading — visual panel beside text, **alternating sides**
  on desktop; on mobile they **stack** (visual above text). (inspired by melaniedaveid.com)
- **Built:** per-role **skill tags** (pill chips) on experience entries, plus an
  editorial **pull-quote** in the story section. *(melaniedaveid)*
- **Planned:** a dated, chronological **story-in-eras** narrative. *(mypoorbrain)*

## 6. Color-zoned sections (wayfinding)

- Each section uses a distinct background tint (paper/sand/sage/clay — see `ui.md`).
- Tints are a **secondary** cue only — headings + spacing carry the real structure
  (color is never the sole signal).
- `--ink` / `--ink-muted` contrast re-checked against **every** tint.

## 7. Information architecture

- **Home** is a **narrative journey** (builder → analyzer → translator → leader)
  rather than a metrics-first dump. (inspired by mypoorbrain.com)
- The **diagram hero** introduces the identity-platform ecosystem visually, with a
  screen-reader text equivalent (`role="img"` + `aria-label`). (inspired by bit.dev)

## 8. Accessibility (target WCAG AA, AAA where feasible)

- **Landmarks:** `<header>` (top nav), `<nav>`, `<main id="main">`, `<footer>`,
  `<section aria-labelledby>` per section.
- **Skip link:** `.skip-link` → `#main`, visible on focus.
- **Focus:** global `:focus-visible` (3px teal, offset) — never removed.
- **Contrast:** body/muted text passes AA on every zone tint.
- **No photographic content:** avatar is a CSS "YY" monogram, `aria-hidden`
  (name announced via the adjacent text).
- **Icons:** decorative SVGs `aria-hidden`; icon-only links carry `aria-label`.
- **Headings:** one `h1` (hero), `h2` per section, `h3` for cards.
- **Links:** external use `rel="noopener noreferrer"`.

## 9. Responsive design

| Width | Behavior |
|-------|----------|
| > 860px | Two-column hero + split cards; full top nav. |
| ≤ 860px | Hero stacks (diagram first); split cards stack; nav name label hides, links wrap. |
| ≤ 560px | Tighter padding; hero CTAs full-width. |

Grids use `repeat(auto-fit, minmax(...))`; no fixed widths; no horizontal scroll.

## 10. Motion & interaction

- Transitions `220ms ease`, color/shadow/transform only.
- Hover feedback on every interactive surface; `cursor: pointer` on clickables.
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` disables smooth
  scroll and collapses transition/animation durations to ~0.

## 11. Performance

- Fonts: `preconnect` + `display=swap`.
- SVG icons inline (no icon-font/image requests).
- No render-blocking third-party scripts.

## 12. SEO & social sharing

In `public/index.html`:
- Real `<title>` + `<meta name="description">` (updated per-language at runtime).
- **Open Graph** (`og:title`, `og:description`, `og:type`).
- **Twitter Card** (`summary`) — link-preview meta only, **not** a personal account.
- `theme-color` = `#f7f4ef` (warm paper, matches the sticky nav); PWA
  `manifest.json` uses `theme_color` `#1c1917` (ink) + `background_color` `#f7f4ef`;
  `favicon.svg` is an ink rounded square with a paper "YY" — all on the warm-paper
  palette (the old navy values were retired).

## 13. Known runtime caveat

The legacy **CRA dev server (`npm start`) does not run on Node 26**
(webpack-dev-server v3 incompatibility) — it exits at "Starting the development
server…". The **production build works** and is verified by serving the built
output. Migrating to Vite would restore local dev. Tooling issue, not code/UX.

---

## 14. Archived — previous UX model (left sidebar)

> Historical only. The first version used a **left navy sidebar** for navigation
> (with the monogram, role, nav links, social, and language toggle stacked in it),
> a two-column grid collapsing to a top band under 900px. Replaced by the top-bar
> model above. Kept so past decisions are traceable.
