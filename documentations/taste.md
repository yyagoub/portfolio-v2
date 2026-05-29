# My Taste — Portfolio Design Guideline

> **Status: GUIDELINE, not a spec.** Records the design direction and preferences
> of the owner (Yousef Yagoub). Inspiration and intent — not a literal checklist.
> Where it conflicts with the code, this file is the *target*; `ui.md` is *built*.
>
> **How this file was built:** each reference site below was **fetched and read**
> (content + structure + navigation observed directly). Visual specifics (exact
> colors, fonts) are only stated where they were actually visible in the page;
> otherwise they're marked *(not verifiable from fetch)* rather than guessed.
> Last studied: 2026.

---

## 1. Headline preference

The owner wants a **more professional, refined** look. The previous navy +
trust-gold ("Trust & Authority") palette was rejected.

**Decision (recorded):** palette = **"Warm Paper Neutrals"** — charcoal ink on
warm paper (`#F7F4EF`), per-section tints, single restrained accent. Full target
spec in `ui.md` → *Target Direction*. (This is now implemented in the live build.)

---

## 2. Reference inspirations — what each one actually does

### a. mypoorbrain.com/profile — Tim Smith
*Owner's note: "I like how he lists his story."*

- **Observed structure (top→bottom):** top-left section nav (All work · Design ·
  Illustration · Profile · Scrapbook) + top-right social icons → short intro →
  **two big narrative blocks split by era: "My story: 1987–2009" and
  "2010–present"** → Experience (reverse-chronological) → Education → a long Talks
  list → Awards → client/brand logos → footer.
- **Content & voice:** genuinely **autobiographical and first-person**. It opens
  with childhood anecdotes (Lego logos, MS Paint, comic strips) and interleaves
  personal asides with formal credentials. The self-deprecating name "My Poor
  Brain" sets a human, approachable tone. Length *works for* engagement because
  it reads as a story, not a CV.
- **Navigation:** top, split — sections top-left, contact/social top-right. Pure
  linear scroll, no sidebar.
- **Color/type:** *(not verifiable from fetch — markup had no CSS)*; reads as
  text-forward with bold section headers.
- **What to borrow:** tell the career as a **chronological story in eras**; let
  personality and a few human details sit beside the credentials; a longer page is
  fine when it's narrative, not bullet soup.

### b. melaniedaveid.com — Melanie Daveid
*Owner's note: "cards with a picture on one side and content on the other — read and imagine at once."*

- **Observed structure:** minimal header (name + a single CONTACT link) → hero
  tagline → "Latest Project" → Talks & performances → short CV (+ LinkedIn) →
  detailed work experience per company (Nothing, eBay, Onefootball, Adobe…) →
  client list → footer.
- **Layout mechanics:** **alternating, asymmetrical splits** — text paired with
  imagery placed left or right, no strict grid, organic vertical flow with varied
  block widths. Each role gets a **descriptive quote + inline skill tags**.
- **Navigation:** almost none — just name + CONTACT; the page is **scroll-driven**.
  Email repeated (hero + footer); a "Let's talk!" CTA for inquiries.
- **Color/type:** **monochromatic** (black text, white background) so the
  **full-color project imagery pops**; clean sans-serif; AVIF/WebP images with
  blur-up thumbnails; generous spacing.
- **What to borrow:** alternating text↔visual splits as the core rhythm; a neutral
  monochrome canvas so visuals carry the color; per-item quote + tag pattern;
  minimal nav, let scrolling tell the story.

### c. brainsandbeards.com — Brains & Beards
*Owner's note: "pages listed on top, and sections separated by different colors."*

- **Navigation (confirmed):** **top horizontal, sticky** — Home · Projects ·
  About us · Team · Careers · Blog · Podcast, with a single **"Hire us" CTA
  pinned to the right**.
- **Section separation (confirmed):** distinct/**contrasting background colors per
  section** (light hero/content areas, alternating section backgrounds, a darker
  footer) — the device the owner specifically liked.
- **Structure:** hero tagline → company paragraph → "What can we help you with?"
  **three service cards (icon + title + description)** → **bold stats** (10 years,
  52 months, 9+) → **testimonials carousel** → CTA → case studies → structured
  footer sitemap.
- **Visual rhythm:** content block → whitespace → new section, alternating; hero
  dominant, then progressively tighter content zones.
- **What to borrow:** top sticky nav with **one** right-aligned CTA; **color-zoned
  sections** as wayfinding; icon+title+description service cards; bold numeric
  stat callouts; a grouped footer sitemap.

### d. bit.dev — Bit
*Owner's note: "a header like a mind map connecting things."*

- **⚠️ Honest correction:** the **current** hero is **not** a literal mind-map. It's
  a headline ("Compose with AI") beside a **stylized character illustration**. The
  "things connecting" impression most likely comes from Bit's whole **composable-
  software** concept and its **compatibility section (20+ framework/tool logos)**
  plus labeled feature cards — i.e. an *ecosystem of connected parts*, not one
  diagram. Recording this so we design for the *idea* you valued, not a
  misremembered element.
- **Structure:** minimalist top nav (logo, **Solutions dropdown with 6 use-cases**,
  Reference, Teams, login + action buttons) → hero + CTAs → feature cards ("From
  Code Generation to Software Composition") → client logo carousel → 6 solution
  cards → **compatibility logo grid (20+ tools)** → stats callout (100K developers,
  250+ plugins) → footer.
- **Color/type (partly visible):** gradient **purples→pinks/blues** (SVG showed
  `#592DC1` and `#FF6A95`), dark backgrounds with white text, high contrast, clean
  sans-serif, accent-colored CTAs. *(Note: this loud gradient is the opposite of
  the owner's "professional/understated" preference — borrow the **structure**,
  not the palette.)*
- **What to borrow:** a **visual that conveys connection/composition** — for us, a
  connected diagram of the identity-platform ecosystem; break complex ideas into
  **labeled cards**; use a **compatibility/ecosystem grid** to show breadth.

### e. alexpate.com — Alex Pate
*Owner's note: "shows part of the story then a button for more."*

- **Progressive disclosure (confirmed, appears twice):**
  - **Projects:** thumbnail + title + an *extremely short* description (~5 words),
    linking to the full project page.
  - **Writing:** title + date + a one-line descriptor, then a section-level
    **"View More Posts →"** link.
- **Structure:** top nav → hero intro → Personal Projects (4 featured) → Recent
  Writing (3 articles) → footer (copyright + source link).
- **Navigation:** minimalist text links — Information · Writing · Contact — with a
  small "ap" initials mark; compact, no separators.
- **Voice:** conversational and concise — "Ciao, I'm Alex," "A product engineer
  from the UK based in Milan." Confident without pretension.
- **Color/type:** *(only minimal cues in fetch)* — reads monochrome/high-contrast,
  sans-serif; projects in a card grid, writing as a list.
- **What to borrow:** **tiny teasers** (title + ~5-word line) that link out; a
  **section-level "view more"** instead of dumping everything; a warm, one-line
  first-person intro.

---

## 3. Cross-cutting themes (grounded in the above)

1. **Story in eras, human voice.** (mypoorbrain) Narrative beats a CV; a little
   personality earns attention.
2. **Alternating text↔visual splits on a neutral canvas.** (melaniedaveid) Let
   imagery carry the color; monochrome surroundings.
3. **Top sticky nav + one right-aligned CTA.** (brainsandbeards, alexpate, bit)
4. **Color-zoned sections as wayfinding.** (brainsandbeards) Each section a
   distinct "room"; subtle, not loud.
5. **Show connection/composition visually + labeled cards.** (bit) Make "how it
   fits together" legible.
6. **Progressive disclosure with tiny teasers.** (alexpate) Short snippet → "more."
7. **Restrained, professional color** — explicitly *unlike* bit's loud gradient.
   Borrow others' structure, not bit's palette.

---

## 4. Implications for this portfolio

Most of these are now implemented in the live redesign; kept here as the rationale:

- Top nav with one primary CTA ✓ · color-zoned sections ✓ · split cards ✓ ·
  connected ecosystem diagram ✓ · "read more" progressive disclosure ✓ ·
  narrative "How I work" home ✓ · warm-paper professional palette ✓.
- **Still worth doing (from the fetches, not yet built):**
  - A **chronological "story in eras"** block (mypoorbrain) — richer than the
    current short narrative.
  - **Per-role quote + skill tags** on experience entries (melaniedaveid).
  - **Bold stat callouts** styled more prominently (brainsandbeards).
  - A **"view more"** pattern if a writing/projects list is ever added (alexpate).
  - Swap split-card brand panels for **real imagery** when available — the
    melaniedaveid effect depends on actual visuals, which we currently substitute
    with tinted panels.

## 5. What stays regardless

Bilingual EN/AR + full RTL · accessibility · SVG icons (no emoji) · monogram (no
personal photo) · no downloadable CV (static site).

## 6. How to use this file

Read before any redesign. Judge options against §2–§3. Update whenever the owner
reacts to a new reference — and **study the actual site**, don't just transcribe
the reaction.
