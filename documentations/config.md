# Configuration & Run Guide

How to install, run, build, and deploy this portfolio. This is the project-specific
replacement for the default Create React App README. For design/content details
see `ui.md`, `ux.md`, `pages-structures.md`, and `my-content.md` in this folder.

---

## 1. What this project is

- A **React 16** single-page portfolio bootstrapped with **Create React App**
  (`react-scripts 3.4.1`).
- **Bilingual** (English + Arabic with RTL) via `react-i18next`.
- Routing via `HashRouter` (`react-router-dom 5`).
- Hosted on **GitHub Pages** under the path `/portfolio-v2/`.

## 2. Prerequisites

| Tool | Version | Notes |
|------|---------|-------|
| Node.js | **See the important caveat below** | npm comes with it |
| npm | 6+ | |

### ⚠️ Important: Node version + OpenSSL flag

`react-scripts 3.4.1` uses an old Webpack that is **incompatible with the OpenSSL
in Node 17+** (this machine has Node 26). Two consequences:

1. **Every build/start command must set** `NODE_OPTIONS=--openssl-legacy-provider`,
   or it crashes with `ERR_OSSL_EVP_UNSUPPORTED`.
2. **`npm start` (the dev server) does not run on Node 26** even with that flag —
   `webpack-dev-server` v3 exits at "Starting the development server…". See §6 for
   the workaround (serve the production build), and §8 for the permanent fix.

> **Recommended:** use **Node 16 LTS** (e.g. via `nvm install 16 && nvm use 16`) to
> get a working `npm start`. Or migrate to Vite (§8).

## 3. Install

```bash
npm install
```

This installs React, react-router, and the i18n stack (`i18next`,
`react-i18next`) from `package-lock.json`.

## 4. Available scripts

All defined in `package.json`:

| Script | Command | What it does |
|--------|---------|--------------|
| start | `npm start` | Dev server at http://localhost:3000 (⚠️ Node 16 only — see §2) |
| build | `npm run build` | Production bundle into `build/` |
| test | `npm test` | Jest + Testing Library (watch mode) |
| deploy | `npm run deploy` | Builds, then publishes `build/` to GitHub Pages (`gh-pages`) |

## 5. Running in development

**On Node 16 (recommended):**
```bash
NODE_OPTIONS=--openssl-legacy-provider npm start
```
Then open http://localhost:3000/ — it serves the app (HashRouter handles the
`/#/about` routes).

**On Node 17+ :** `npm start` will not stay up — use §6 instead.

## 6. Preview the production build (works on any Node)

Because the dev server is broken on new Node, the reliable way to view the site
locally is to build and serve the static output:

```bash
# 1. Build (the OpenSSL flag is required on Node 17+)
NODE_OPTIONS=--openssl-legacy-provider CI=false npm run build

# 2. Serve it. The app expects to live under /portfolio-v2/, so expose it there:
mkdir -p /tmp/serve && ln -sfn "$(pwd)/build" /tmp/serve/portfolio-v2
cd /tmp/serve && python3 -m http.server 8080

# 3. Open:
#    http://localhost:8080/portfolio-v2/
```

(Any static file server works; the symlink just maps the `/portfolio-v2/` base
path that the built `index.html` references.)

## 7. Build & deploy to GitHub Pages

```bash
NODE_OPTIONS=--openssl-legacy-provider npm run deploy
```

- `predeploy` runs `npm run build`; `deploy` pushes `build/` to the `gh-pages`
  branch via the `gh-pages` package.
- The public URL comes from the `homepage` field in `package.json`
  (`https://yyagoub.github.io/portfolio-v2`). Update that field if the repo or
  user changes.
- The `homepage` value also controls the asset base path (`/portfolio-v2/`) baked
  into the build.

## 8. Recommended modernization (optional)

The deprecated CRA toolchain is the root of the Node-version pain. Migrating to
**Vite + React** would:
- restore a working dev server on any modern Node,
- drop the `NODE_OPTIONS` flag,
- speed up builds, and
- clear the known `react-scripts 3.4.1` security advisories.

Routing, i18n, components, and styles would carry over with minimal changes.

## 9. Configuration touchpoints (where to change things)

| Want to change… | Edit |
|------------------|------|
| Any text / translations | `src/i18n/locales/en.json`, `ar.json` |
| Add/remove a language | `src/i18n/index.js` (`LANGS`, resources) |
| Colors, fonts, spacing | `:root` in `src/style.css` |
| Fonts loaded | `<link>` in `public/index.html` |
| Nav items / routes | `src/util/routes.js` |
| Section content & order | `src/data/site.js` (orders) + locale files (copy) |
| Social links | `contactChannels` in `src/data/site.js` |
| SEO / Open Graph / title | `public/index.html` + `meta` effect in `src/App.js` |
| Deploy URL / base path | `homepage` in `package.json` |
| PWA name / colors | `public/manifest.json` |

## 10. Quick reference

```bash
# Install
npm install

# Dev (Node 16)
NODE_OPTIONS=--openssl-legacy-provider npm start

# Build
NODE_OPTIONS=--openssl-legacy-provider CI=false npm run build

# Preview build on any Node (see §6)
# Deploy to GitHub Pages
NODE_OPTIONS=--openssl-legacy-provider npm run deploy
```
