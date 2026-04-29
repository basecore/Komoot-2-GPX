# Komoot 2 GPX 🗺️ 

[![Live App](https://img.shields.io/badge/Live-Web_App-97b536?style=for-the-badge&logo=googlechrome&logoColor=white)](https://basecore.github.io/Komoot-2-GPX/)

A lightweight, powerful, and browser-based Progressive Web App (PWA) designed to extract and download GPX tracks directly from Komoot tours. 

**👉 [Open the App here: basecore.github.io/Komoot-2-GPX](https://basecore.github.io/Komoot-2-GPX/)**

## 💡 What is this for?
Sometimes you want to download a GPX file from a Komoot tour to use it on your dedicated GPS device, smartwatch, or offline navigation app, but you might face restrictions or just want a quick extraction tool. **Komoot 2 GPX** fetches the raw GPS coordinates of any public Komoot tour (both Standard and Smart Tours) and instantly converts them into a standard `.gpx` file – right in your browser, without requiring a server backend.

## ✨ Complete Feature List

* **Universal Tour Support:** Works with standard Komoot Tours (`/tour/`) and Smart Tours (`/smarttour/`).
* **Interactive Map Preview:** Automatically renders the extracted route on a live map (powered by Leaflet.js) before downloading.
* **8-Stage Fallback Proxy System:** Bypasses CORS (Cross-Origin Resource Sharing) restrictions by intelligently cycling through up to 8 different routing methods (Direct API, AllOrigins, Corsproxy.io, Cors.sh, CodeTabs, etc.) until the data is successfully fetched.
* **Anti-Adblocker Engine ("Wrapped" Mode):** Specifically built to bypass aggressive network adblockers (like the ones built into iodéOS) using a specialized data wrapper.
* **HTTP 406 Bypass:** Injects custom `application/hal+json` headers to prevent Komoot's direct API from rejecting the fetch requests.
* **Live Debug Console:** An integrated terminal-like UI that shows you exactly what the app is currently doing, which proxy is being tested, and where errors occur in real-time.
* **PWA & Offline Capability:** Can be installed directly to your smartphone's homescreen for a native, full-screen app experience.
* **Android Share Target Integration:** Allows you to send a tour link directly from the official Komoot App into this tool via the Android "Share" menu.

## 🚀 How to use

### 1. Standard Web Browser
1. Go to [Komoot 2 GPX](https://basecore.github.io/Komoot-2-GPX/).
2. Copy a tour URL from Komoot (e.g., `https://www.komoot.de/tour/12345678`).
3. Paste it into the input field.
4. Click **Preview & Download GPX**.

### 2. PWA Installation (Smartphone)
1. Open the website in your mobile browser.
2. Click the **"Install App on Device"** button or select "Add to Homescreen" from your browser menu.
3. Open the newly installed app from your homescreen.
4. From now on, you can simply tap "Share" inside the Komoot App and select **Komoot 2 GPX** to instantly extract the track!

---

## ⚠️ Known Limitations: Android "Share" Menu (iodéOS / De-googled Phones)

While this app fully supports the Android Web Share Target API, **de-googled operating systems** (like iodéOS, GrapheneOS, LineageOS without Google Apps) or privacy-focused browsers (like Firefox) might not show the app in the Android Share Menu.

**Why?**
Standard browsers (Chrome, Brave) require **Google Play Services** to silently convert a PWA into a native "WebAPK". Only these true WebAPKs are allowed by Android to appear in the Share Menu. On de-googled phones, the browser falls back to creating a "simple bookmark" on your homescreen, which Android restricts from receiving shared links.

### 🛠️ Workarounds for De-googled Users:
To get the "Share -> Komoot 2 GPX" functionality on a privacy-focused phone, you need to wrap this PWA into a real `.apk` file:

1. **PWABuilder (Recommended):** 
   * Go to [PWABuilder.com](https://www.pwabuilder.com/).
   * Enter the URL of this repository: `https://basecore.github.io/Komoot-2-GPX/`
   * Click "Package for Android" and download the generated `.apk`. 
   * Install the `.apk` on your phone. As a native app, it will reliably show up in your Share Menu!
2. **Native Alpha (F-Droid):** 
   * Download the open-source app [Native Alpha](https://github.com/cylonid/NativeAlphaForAndroid) from F-Droid.
   * Add the URL to containerize the website into an isolated Android app, enabling native intents.

---

## 👨‍💻 Credits & Tech Stack
* **Developer:** [basecore](https://github.com/basecore)
* **AI Assistance:** This tool and its advanced proxy/routing logic were co-developed and optimized with the help of **Gemini 3.1**.
* **Libraries used:** [Leaflet.js](https://leafletjs.com/) for map rendering.
