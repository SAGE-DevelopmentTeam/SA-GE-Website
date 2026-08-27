# SA:GE Official Website

Official public website for **SA:GE (Stardew Authoring : Game Editor)** — *Stardew Valley modding, made visual.*

---

## 📁 Project Architecture

The website is engineered as a clean, high-performance static website with dark-mode-only design, zero heavy external frameworks, and zero tracking scripts.

```text
SAGE-Website/
├── index.html                  # Homepage (Hero, Stats, Features, Guide promo, Latest release)
├── download.html               # Dedicated download hub (Windows x64 ZIP/Installer, checksums)
├── guide.html                  # Documentation hub with interactive sidebar & natural search
├── releases.html               # Full version history & changelog timeline
├── bugs.html                   # Bug reporting hub with GitHub Issues integration & fallback
├── suggestions.html            # Feature suggestions & community feedback
├── about.html                  # Mission, V1 scope, architecture & trademark disclaimer
├── privacy.html                # Privacy statement (Zero tracking, local-first)
├── terms.html                  # Terms of use, "As Is" license & ConcernedApe disclaimer
│
├── css/
│   ├── main.css                # Design system, CSS variables, dark theme reset & header/footer
│   ├── components.css          # Buttons, cards, badges, statistics bar, callouts, copy boxes
│   └── guide.css               # Guide documentation layout, sidebar, and search modal
│
├── js/
│   ├── config.js               # Centralized editable site configuration (GitHub, URLs, releases)
│   ├── main.js                 # Global navbar, mobile drawer, dynamic stats loader & copy buttons
│   ├── guide-data.js           # Comprehensive structured guide articles database & synonym index
│   ├── guide.js                # Guide router, natural language search engine, article renderer
│   ├── releases.js             # Releases data loader (hydrates from update/manifest.json)
│   └── issues.js               # Bug reports & suggestions loader (GitHub templates & previews)
│
├── assets/
│   ├── logo/
│   │   ├── sage-logo.svg       # Official SA:GE vector wordmark & icon
│   │   └── favicon.svg         # Browser favicon
│   └── images/
│       └── map-editor-preview.png # Official SA:GE Map Editor interface screenshot
│
└── update/
    └── manifest.json           # Production desktop auto-updater manifest schema
```

---

## ⚙️ Centralized Site Configuration (`js/config.js`)

All values that can change (such as the official GitHub repository, Issue templates, download URLs, release versions, and future statistics endpoints) are centralized in **[`js/config.js`](js/config.js)**:

- `brand`: App name, full title (`Stardew Authoring : Game Editor`), slogan, and copyright year.
- `github`: Official repo URL, bug report issue template URL, suggestion issue template URL, discussions URL.
- `releases`: Authoritative auto-updater manifest location, fallback release metadata, and historical changelog entries.
- `requirements`: Accurate runtime requirements matching the desktop application (.NET Desktop Runtime 8.0 x64, Stardew Valley 1.6+, SMAPI 4.0+).
- `statistics`: Polling interval and future backend endpoint (defaults to `—` so no fake numbers are shown).

---

## 🚀 Running / Previewing Locally

Because the site is built with standard static web technologies, you can preview it immediately using any lightweight static web server:

### Option 1: Using Python
```bash
python -m http.server 8080
```
Then visit `http://localhost:8080` in your browser.

### Option 2: Using Node / npx
```bash
npx serve .
```

---

## 🔄 Desktop Auto-Updater Manifest (`update/manifest.json`)

The desktop application's auto-updater queries `update/manifest.json` on launch to check for updates:

```json
{
  "version": "1.0.0-preview.1",
  "name": "SA:GE 1.0.0 Preview 1",
  "pubDate": "2026-08-27T12:00:00Z",
  "downloadUrl": "https://github.com/sage-editor/sage/releases/download/v1.0.0-preview.1/SAGE-v1.0.0-preview.1-win-x64.zip",
  "size": 34857984,
  "sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  "isMandatory": false,
  "releaseNotes": "..."
}
```

---

## 🛡️ Privacy & Performance Principle

- **Dark Mode Only**: Sleek, distraction-free environment.
- **Zero Tracking**: No analytics, no third-party trackers, no cookies.
- **No Heavy Frameworks**: Pure browser-native HTML5, CSS3, and modern JavaScript for instant loading.
