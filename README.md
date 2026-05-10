<p align="center">
  <img src="image/readme-banner.svg" alt="Komoot 2 GPX Banner" width="100%">
</p>

# Komoot-2-GPX Exporter 🚴‍♂️⛰️

[![Live App](https://img.shields.io/badge/Open_Web_App-97b536?style=for-the-badge&logo=appveyor)](https://basecore.github.io/Komoot-2-GPX/)
[![Made with AI](https://img.shields.io/badge/AI_Generated-Perplexity_&_Gemini-blue?style=for-the-badge&logo=google)](https://basecore.github.io/Komoot-2-GPX/)

A lightweight, purely client-side Progressive Web App (PWA) to quickly download public Komoot tours as GPX, KML or CSV files without needing a premium subscription. Fully optimized for smartphones and seamless import into ecosystems like Garmin Connect.

👉 **[Launch Web App](https://basecore.github.io/Komoot-2-GPX/)**

<p align="center">
  <img src="image/screenshot1.png" alt="App UI Screenshot" width="45%">
  &nbsp;&nbsp;&nbsp;
  <img src="image/screenshot2.png" alt="Map Preview Screenshot" width="45%">
</p>

## ✨ Features (v4.7 Smart Exporter)

* **📍 Advanced Interactive Map with Direction Arrows:** Displays the exact route on an OpenStreetMap interface before downloading. Smart, dynamic SVG arrows automatically scale their spacing based on the route's length to perfectly visualize the travel direction.
* **🔄 GPS Track Inversion (Reverse):** Want to ride the route the other way around? Invert the GPS direction with a single click in the interactive preview, see the arrows flip, and download the exact reversed route.
* **📌 POI & Highlight Integration:** Automatically extracts Points of Interest (Highlights) and embeds them directly into the generated GPX file as standard Waypoints (`<wpt>`). Rendered as interactive markers (🟠), alongside distinct Start (🟢) and End (🔴) points.
* **📝 Deep Metadata Extraction & Terminal Console:** Grabs the official tour description, length, duration, and name from Komoot. The built-in developer console displays a quick excerpt of all found metadata to validate your track before downloading.
* **🧠 SmartTour 403 Bypass Engine:** Intelligently unwraps special alphanumeric SmartTour IDs (e.g., `e176887173`) and automatically reroutes blocked `AccessDenied` requests to alternative API endpoints, allowing downloads of pure Collections/SmartTours.
* **🚀 Native Android "Share" Integration:** Through the Web Share Target API, this app seamlessly integrates into your smartphone's OS. Hit "Share -> Other Apps" inside the official Komoot app, select "Komoot 2 GPX", and the PWA will instantly launch, grab the link, and auto-start the compilation in the background. No copy-pasting required!
* **🛡️ Bulletproof HTML Fallback & Regex Fix:** Uses a highly resilient HTML parsing engine to scrape route descriptions and POIs directly from the DOM when the standard Komoot API denies access, now fully secured against complex Regex breaking scenarios.
* **🌐 8-Layer Proxy Fallback Engine:** Since Komoot strictly blocks public CORS proxies, this app features a robust, automated rotation of independent proxy servers (including "Wrapped" mode against adblockers). If one fails, it switches instantly.
* **⌚ Garmin-Ready Data:** Generates 100% compliant XML/GPX files containing elevation (`<ele>`), timestamps (`<time>`), and waypoints (`<wpt>`), which are mandatory for activity tracking in Garmin Connect. KML and CSV exports are also supported.
* **📱 100% PWA Installable:** Meets Chrome's strict install criteria. Install it directly on your home screen via the built-in "Install App" button to use it like a native app in full-screen mode.

## 📱 How to Use (Smartphone & Desktop)

### Option A: The "Pro" Workflow (Standard Android)
1. Open the [Komoot-2-GPX App](https://basecore.github.io/Komoot-2-GPX/) in Chrome, Brave, or Kiwi Browser.
2. Click the blue **"📱 Install App on Device"** button (or use the browser menu to "Add to Home Screen").
3. Open your official Komoot app and find a public tour.
4. Tap "Share" -> "More Apps..." and select **Komoot 2 GPX**.
5. The app opens, auto-pastes the link, and compiles the route.
6. Check the map and download the normal or reversed file!

### Option B: The Manual Workflow (Any Device)
1. Open the Komoot App or Website.
2. Navigate to a **public** tour or smarttour collection.
3. Use the "Share" function to copy the tour link to your clipboard (e.g., `https://www.komoot.de/tour/123456789`).
4. Open the **[Komoot-2-GPX App](https://basecore.github.io/Komoot-2-GPX/)**.
5. Paste the link and click "Compile & Preview".
6. Check the metadata, invert the route if needed, and hit download.

---

## ⚠️ Known Limitations: Android "Share" Menu (iodéOS / De-googled Phones)

Standard Chromium browsers require **Google Play Services** to silently convert a PWA into a native "WebAPK". Only these true WebAPKs are allowed to appear in the Android Share Menu. 
On **de-googled operating systems (like iodéOS, CalyxOS, GrapheneOS)** or when using Firefox, the browser will only create a "homescreen bookmark", which Android strictly prevents from acting as a Share Target.

### 🛠️ Workarounds for De-googled Users (To unlock the Share Menu):
If you want the full "Share -> Komoot 2 GPX" functionality on a privacy-focused phone, you need to wrap the PWA into a real `.apk`:

1. **PWABuilder (Recommended):** 
   Go to [PWABuilder.com](https://www.pwabuilder.com/), enter the URL of this repository, and click "Package for Android". Download the generated `.apk` and install it. As a native app, it will reliably show up in your Share Menu!
2. **Native Alpha / Web Apps (F-Droid):** 
   Use an open-source sandbox wrapper like [Native Alpha](https://github.com/cylonid/NativeAlphaForAndroid) from F-Droid to containerize the website into an isolated Android app, which handles share intents natively.

---

## 🛠 Technical Details

This project is built using vanilla HTML, CSS, and JavaScript. 
To bypass strict CORS (Cross-Origin Resource Sharing) policies and access the open Komoot `v007` API directly from the browser, the app utilizes an automated, fail-safe proxy routing mechanism. The downloaded JSON coordinates are then assembled into a valid GPX document and triggered as a local file download directly on your device. 
**Privacy First:** Zero data is sent to custom backends. The entire parsing process happens locally in your browser.

## 🤖 Credits

* **Developer:** [basecore](https://github.com/basecore)
* **AI Assistance:** The architecture, UI design, code logic, and proxy fallback mechanism were initially developed with **Gemini 3.1**. The advanced updates (POI integration, SmartTour bypass, dynamic direction arrows, reverse routing, and HTML fallbacks) were engineered with **Perplexity AI**.

---
**Disclaimer:** This project is not affiliated with or endorsed by Komoot in any way. It strictly uses publicly accessible API endpoints. Designed for personal and private use only.
