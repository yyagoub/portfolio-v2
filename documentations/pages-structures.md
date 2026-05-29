# Pages & Structure Documentation

The information architecture, routing, and component tree of the portfolio.

---

## 1. App shell

`src/App.js` renders the shell:

```
<BrowserRouter>            (HashRouter aliased — GitHub Pages friendly)
  <a.skip-link → #main>
  <div.layout>            (CSS grid: sidebar + content)
    <Sidebar />           (aside, navy rail)
    <main id="main">
      <Routes />          (the active page)
      <footer.site-footer>
    </main>
  </div>
</BrowserRouter>
```

- **Router:** `HashRouter` (imported as `BrowserRouter`) — URLs look like
  `/#/about`. Chosen because the site is hosted on GitHub Pages under
  `/portfolio-v2/` (set via `homepage` in `package.json`).
- **Entry:** `src/index.js` imports `./i18n` (initializes language before render)
  then mounts `<App />`.

## 2. Routes

Defined in `src/util/routes.js`:

| Path | Page component | Sidebar label key | Default |
|------|----------------|-------------------|---------|
| `/about` | `pages/About.js` | `nav.home` ("Home") | ✅ |
| `/platforms` | `pages/Projects.js` | `nav.platforms` ("Platforms") | |
| `/contact` | `pages/Contact.js` | `nav.contact` ("Contact") | |
| `*` | → redirect to `/about` | — | |

> Note: file names `About.js` / `Projects.js` are retained from the original
> project, but they now render **Home** and **Platforms** respectively. The route
> path `/projects` was renamed to `/platforms`.

## 3. Page: Home (`/about` → `pages/About.js`)

Recruiter-first landing. Sections in order:

1. **Hero** (`Hero`) — eyebrow, title, tagline, "Get in touch" CTA.
2. **Impact at a glance** (`metrics` → `MetricCard`) — 4 stat cards.
3. **What I do** (`values` → `ValueCard`) — Build / Analyze / Translate.
4. **Growing forward** (`growth`) — Executive MBA / Public speaking / Always learning.

## 4. Page: Platforms (`/platforms` → `pages/Projects.js`)

1. **Platforms & work** (`platforms` → `PlatformCard`) — Nafath, Absher Bio
   Verification, Mobile Verification, Fingerprint, Dakhli.
2. **Experience & leadership** (`experience` → `Timeline`) — current lead role +
   engineering foundation.

## 5. Page: Contact (`/contact` → `pages/Contact.js`)

- **Get in touch** — contact channel cards: Email, LinkedIn, GitHub.
  *(The X/Twitter channel was removed at the owner's request.)*

## 6. Component tree

```
App
├─ Sidebar
│  ├─ NavLinks (from routes)
│  ├─ social links (contactChannels)
│  └─ LanguageToggle
└─ main
   ├─ Routes
   │  ├─ About (Home)
   │  │  ├─ Hero
   │  │  ├─ SectionHeading + MetricCard ×4
   │  │  ├─ SectionHeading + ValueCard ×3
   │  │  └─ SectionHeading + growth cards ×3
   │  ├─ Projects (Platforms)
   │  │  ├─ SectionHeading + PlatformCard ×5
   │  │  └─ SectionHeading + Timeline
   │  └─ Contact
   │     └─ SectionHeading + contact cards
   └─ footer
```

Shared building blocks: `Icon` (inline SVGs), `SectionHeading`.

## 7. File map

```
src/
├─ App.js                 # shell: router, sidebar, main, footer, doc title
├─ index.js               # bootstrap + i18n import
├─ index.css              # base reset
├─ style.css              # full design system (tokens + components)
├─ i18n/
│  ├─ index.js            # i18next config, dir/lang sync, persistence
│  └─ locales/{en,ar}.json
├─ data/
│  └─ site.js             # structural data (section orders, social urls, icons)
├─ components/
│  ├─ Sidebar.js  Hero.js  LanguageToggle.js  Icon.js
│  ├─ SectionHeading.js  MetricCard.js  ValueCard.js
│  ├─ PlatformCard.js  Timeline.js
├─ pages/
│  ├─ About.js (Home)  Projects.js (Platforms)  Contact.js
└─ util/
   └─ routes.js
public/
├─ index.html            # meta, OG, fonts, manifest link
└─ manifest.json         # PWA name + brand colors
documentations/          # this folder
.claude/launch.json      # dev-server config for preview tooling
```

## 8. Data → content separation

- **Structural data** (`src/data/site.js`): non-translatable — section item
  orders, social URLs, and icon names.
- **Copy** (`src/i18n/locales/*.json`): every human-readable string, keyed so EN
  and AR stay in sync. See `my-content.md` for the actual content.
