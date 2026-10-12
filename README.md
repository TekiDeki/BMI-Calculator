<div align="center">

# ⚖️ Calculator IMC / BMI Calculator

### Your Body Mass Index in two taps — in four languages

A zero-dependency, single-file web app that calculates your BMI and tells you what it means.

[![License](https://img.shields.io/badge/license-Apache%202.0-blue?style=flat-square)](LICENSE)
[![Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen?style=flat-square)](#)
[![PWA](https://img.shields.io/badge/PWA-offline-success?style=flat-square)](#)
[![Languages](https://img.shields.io/badge/languages-4%20(RO·EN·SR·СР)-purple?style=flat-square)](#-supported-languages)
[![Made with](https://img.shields.io/badge/made%20with-vanilla%20JS-yellow?style=flat-square)](#)

### 🚀 **[Try it live →](https://tekideki.github.io/BMI-Calculator/)**

</div>

---

## 🌐 Live Demo

**👉 [https://tekideki.github.io/BMI-Calculator/](https://tekideki.github.io/BMI-Calculator/)**

No installation needed. Works in any modern browser (Chrome, Firefox, Safari, Edge) — and offline once loaded.

---

## 📖 About

**Calculator IMC (BMI Calculator)** is a browser-based tool that calculates your **Body Mass Index** in seconds. Enter your weight and height, and it shows your BMI value plus what category it falls into.

The app runs **100% client-side**. No build step, no backend, no tracking. Your data never leaves your browser — nothing is sent anywhere.

---

## ✨ Features

- ⚡ **Instant calculation** — Weight (kg) + Height (cm) → BMI value and category
- 📊 **Clear categories** — Underweight · Normal weight · Overweight · Obese
- 🌍 **4 languages** — Română, English, Srpski (latinica), Српски (ћирилица)
- 🔗 **Language in the URL** — every language has its own shareable link (`?lang=en`, `?lang=sr-Cyrl`…)
- 🌗 **Dark & light theme** — follows your system preference, remembers your choice
- 📤 **Share button** — native share sheet on mobile, clipboard copy fallback on desktop
- 📦 **Works offline** — full PWA with service worker caching; installable on phone & desktop
- 🪶 **Zero dependencies** — no frameworks, no build step, no CDN, no fonts to download
- 🔍 **SEO-ready** — JSON-LD (WebApplication), Open Graph, Twitter cards, canonical + `hreflang` alternates
- 📱 **Mobile-first** — numeric keypad for inputs, responsive layout, notch-safe viewport
- ⚠️ **Honest by design** — a visible note reminds that BMI is an indicative value, not a medical diagnosis

---

## 📊 BMI Categories

| BMI | Category | EN |
|-----|----------|-----|
| < 18.5 | Subponderal | Underweight |
| 18.5 – 24.9 | Greutate normală | Normal weight |
| 25.0 – 29.9 | Supraponderal | Overweight |
| ≥ 30.0 | Obezitate | Obese |

> **Note:** BMI is a screening indicator, not a medical diagnosis. It does not distinguish muscle from fat mass. Always consult a healthcare professional for medical advice.

---

## 🚀 Quick Start

### Option 1 — Use the Live Demo (Simplest)

**👉 [https://tekideki.github.io/BMI-Calculator/](https://tekideki.github.io/BMI-Calculator/)**

Nothing to install. Just open and calculate.

### Option 2 — Clone & Run Locally

```bash
git clone https://github.com/TekiDeki/BMI-Calculator.git
cd BMI-Calculator

# Pick any static server
python -m http.server 8000
# or
npx serve
```

Then open **http://localhost:8000**

> ⚠️ **Note:** For PWA features (install prompt, offline mode) the app must be served over **HTTPS** or **localhost**.

### Option 3 — Fork & Deploy to Your Own GitHub Pages

1. **Fork** this repository
2. Go to **Settings → Pages**
3. Source: `Deploy from a branch` → Branch: `main` → Folder: `/ (root)`
4. Save → your app will be live at `https://YOUR-USERNAME.github.io/BMI-Calculator/`

---

## 📱 Install as an App (PWA)

### 🤖 Android (Chrome / Edge / Brave)

1. Open the [live demo](https://tekideki.github.io/BMI-Calculator/) in Chrome
2. Tap the **⋮ menu** → **"Install app"**
3. Confirm → the icon appears on your home screen

### 🍎 iPhone / iPad (Safari)

1. Open the [live demo](https://tekideki.github.io/BMI-Calculator/) in **Safari**
2. Tap the **Share button** → **"Add to Home Screen"**
3. Name it and tap **"Add"**

### 💻 Desktop (Chrome / Edge)

1. Open the live demo
2. Click the **install icon** (⊕) in the address bar
3. Click **"Install"** — the app opens in its own window

> Once installed, the app works offline thanks to the service worker (`sw.js`).

---

## 🌍 Supported Languages

| Code | Language | Default |
|------|----------|:-------:|
| `ro` | Română | ✅ (fallback) |
| `en` | English | — (auto-detected from browser) |
| `sr-Latn` | Srpski (latinica) | — |
| `sr-Cyrl` | Српски (ћирилица) | — |

The interface language follows this priority: **URL parameter** (`?lang=…`) → saved choice → browser language → Romanian.

---

## 🛠️ Tech Stack

- **HTML5** — one file, semantic markup
- **CSS3** — custom properties for theming, no preprocessor
- **Vanilla JavaScript** — no frameworks, no bundler, no npm
- **Service Worker** — offline caching (cache-first strategy)
- **Web App Manifest** — installable as a PWA
- **JSON-LD** — structured data for SEO (`WebApplication`)

No external CDNs. No analytics. No tracking.

---

## 📁 Project Structure

```
BMI-Calculator/
├── index.html      # Standalone app (HTML + CSS + JS)
├── manifest.json   # PWA manifest (name, icons, theme)
├── sw.js           # Service worker (offline caching)
├── icon.svg        # App icon (scalable)
├── LICENSE         # Apache License 2.0
├── NOTICE          # Attribution notice
└── README.md       # This file
```

---

## 📄 License

Distributed under the **Apache License 2.0**. See [LICENSE](LICENSE) and [NOTICE](NOTICE) for details.

---

## 🙏 Disclaimer

This tool provides an indicative BMI value based on the standard WHO formula. It is **not a medical device** and does not replace professional medical advice, diagnosis, or treatment.

---

<div align="center">

**Built with ❤️ and vanilla JavaScript**

[⬆ Back to Top](#%EF%B8%8F-calculator-imc--bmi-calculator)

</div>
