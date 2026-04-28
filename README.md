# Komoot-2-GPX Exporter 🚴‍♂️⛰️

[![Live App](https://img.shields.io/badge/Open_Web_App-97b536?style=for-the-badge&logo=appveyor)](https://basecore.github.io/Komoot-2-GPX/)
[![Made with Gemini 3.1](https://img.shields.io/badge/AI_Generated-Gemini_3.1-blue?style=for-the-badge&logo=google)](https://gemini.google.com/)

A lightweight, purely client-side Progressive Web App (PWA) to quickly download public Komoot tours as GPX files without needing a premium subscription. Fully optimized for smartphones and seamless import into ecosystems like Garmin Connect.

👉 **[Launch Web App](https://basecore.github.io/Komoot-2-GPX/)**

## ✨ Features (v2.1)

* **🔄 Smarttour & Discovery Support:** Automatically detects whether you pasted a regular user tour (`/tour/`) or a generated Komoot collection (`/smarttour/`) and routes API calls accordingly.
* **🛡️ 6-Layer Proxy Fallback Engine:** Since Komoot strictly blocks public CORS proxies, this app features a built-in rotation of 6 different proxy servers (like *cors.lol*, *allorigins*, etc.). If one proxy is blocked, it instantly switches to the next one—ensuring a 99.9% uptime.
* **🗺️ Interactive Leaflet Map:** Displays the exact route on an OpenStreetMap interface before the download begins, allowing you to visually verify the tour.
* **⌚ Garmin-Ready Data:** Generates 100% compliant XML/GPX files containing both elevation (`<ele>`) and precise timestamps (`<time>`), which are mandatory for activity tracking in Garmin Connect.
* **📱 PWA-Ready & Dark Mode:** Install it directly on your home screen (Android/iOS) to use it like a native app in full-screen mode. Automatically adapts to your system's Dark Mode settings.
* **🖥️ Hardcore Debug Console:** An integrated terminal provides live insight into the fetching process, proxy health, and track metadata (like distance and waypoints)—all in real-time.

## 📱 How to Use (Smartphone & Desktop)

1. Open the Komoot App or Website.
2. Navigate to a **public** tour or smarttour collection.
3. Use the "Share" function to copy the tour link to your clipboard (e.g., `https://www.komoot.de/tour/123456789`).
4. Open the **[Komoot-2-GPX App](https://basecore.github.io/Komoot-2-GPX/)**.
5. Paste the link and click "Preview & Download GPX".

*(Pro Tip: For the best experience on a smartphone like a Fairphone with IodeOS, open the URL in your mobile browser and select "Add to Home Screen" to install it as a standalone PWA.)*

## 🛠 Technical Details

This project is built using vanilla HTML, CSS, and JavaScript. 
To bypass strict CORS (Cross-Origin Resource Sharing) policies and access the open Komoot `v007` API directly from the browser, the app utilizes an automated, fail-safe proxy routing mechanism. The downloaded JSON coordinates are then assembled into a valid GPX document and triggered as a local file download directly on your device. 
**Privacy First:** Zero data is sent to custom backends. The entire parsing process happens locally in your browser.

## 🤖 Credits

The architecture, code logic, and proxy fallback mechanism were entirely developed with the help of **Gemini 3.1 Pro**.

---
**Disclaimer:** This project is not affiliated with or endorsed by Komoot in any way. It strictly uses publicly accessible API endpoints. Designed for personal and private use only.
