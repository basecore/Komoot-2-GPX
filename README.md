# Komoot 2 GPX 🗺️ (v2.8)

A lightweight, browser-based Progressive Web App (PWA) to extract and download GPX tracks from Komoot tours (Standard & Smart Tours). Fully runs in your browser using fallback proxy engines to bypass CORS restrictions.

## ✨ What's New in Version 2.8
* **Anti-Adblocker Engine ("Wrapped" Mode):** Bypasses aggressive network adblockers (like the iodéOS advanced blocker) using a specialized AllOrigins wrapper.
* **HTTP 406 Error Fix:** Fixed the Komoot Direct API rejection by injecting the required `application/hal+json` headers.
* **Android Share Target Support:** The app is technically ready to receive URLs directly from the Android "Share" menu (e.g., sharing a tour directly from the Komoot app to this PWA).
* **8-Stage Fallback Proxy System:** Maximum reliability for fetching tour coordinates.

## 🚀 Usage

### 1. Web Version
Open the website, paste a Komoot Tour URL (e.g., `komoot.de/tour/123456`), and click **Preview & Download GPX**.

### 2. PWA Installation (Add to Homescreen)
Click the "Install App on Device" button or use your browser's menu to add the tool to your homescreen for a native, full-screen app experience.

---

## ⚠️ Known Limitations: Android "Share" Menu (iodéOS / De-googled Phones)

Version 2.8 introduces the `share_target` API, which allows you to press "Share" inside the Komoot app and send the URL directly to Komoot 2 GPX.

**Why it might not work on your device:**
Standard Chromium browsers (Chrome, Brave, Kiwi) require **Google Play Services** to silently convert a PWA into a native "WebAPK". Only these true WebAPKs are allowed to appear in the Android Share Menu. 
On **de-googled operating systems (like iodéOS, CalyxOS, LineageOS without GApps)** or when using Firefox, the browser will only create a "homescreen bookmark". Bookmarks are strictly *not* allowed to register as a Share Target in Android.

### 🛠️ Workarounds for De-googled Users (To get the Share Menu working):
If you want the "Share -> Komoot 2 GPX" functionality on a privacy-focused phone, you need to wrap the PWA into a real `.apk`:

1. **PWABuilder (Recommended):** 
   Go to [PWABuilder.com](https://www.pwabuilder.com/), enter the URL of this repository, and click "Package for Android". Download the generated `.apk` and install it. As a native app, it will reliably show up in your Share Menu!
2. **Native Alpha / Web Apps (F-Droid):** 
   Use an open-source sandbox wrapper like [Native Alpha](https://github.com/cylonid/NativeAlphaForAndroid) from F-Droid to containerize the website into an isolated Android app, which handles share intents natively.

## 👨‍💻 Built by
[basecore](https://github.com/basecore)
