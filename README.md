# Komoot-2-GPX Exporter 🚴‍♂️⛰️

[![Live App](https://img.shields.io/badge/App-Öffnen-97b536?style=for-the-badge&logo=appveyor)](https://basecore.github.io/Komoot-2-GPX/)
[![Made with Gemini 3.1](https://img.shields.io/badge/AI_Generated-Gemini_3.1-blue?style=for-the-badge&logo=google)](https://gemini.google.com/)

Eine leichtgewichtige, clientseitige Progressive Web App (PWA), mit der sich öffentliche Komoot-Touren schnell und unkompliziert als GPX-Dateien herunterladen lassen. Optimiert für die mobile Nutzung und den direkten Import in Ökosysteme wie Garmin Connect.

👉 **[Hier geht es direkt zur Web-App](https://basecore.github.io/Komoot-2-GPX/)**

## ✨ Features

* **📱 PWA-Ready:** Lässt sich direkt als App auf dem Smartphone-Startbildschirm (Android/iOS) installieren, ganz ohne App-Store.
* **⌚ Garmin-Optimiert:** Die generierten GPX-Dateien enthalten saubere Höhen- (`<ele>`) und Zeitstempel-Daten (`<time>`), sodass sie von Garmin Connect und anderen GPS-Plattformen fehlerfrei verarbeitet werden.
* **🌗 Dark & Light Mode:** Das Interface passt sich automatisch den Systemeinstellungen deines Betriebssystems an.
* **🔒 Privacy First:** 100% Client-Side. Es gibt kein Backend und es werden keine Routen oder Nutzerdaten gespeichert.
* **⚡ Schnell & Simpel:** Einfach den Tour-Link einfügen und direkt herunterladen.

## 📱 Nutzung (Smartphone & Desktop)

1. Öffne die Komoot-App oder -Webseite.
2. Navigiere zu einer **öffentlichen** Tour.
3. Nutze die "Teilen"-Funktion und kopiere den Link der Tour in deine Zwischenablage (z.B. `https://www.komoot.de/tour/123456789`).
4. Öffne die **[Komoot-2-GPX App](https://basecore.github.io/Komoot-2-GPX/)**.
5. Füge den Link ein und klicke auf "GPX Herunterladen".

*(Tipp: Für das beste Erlebnis öffne die URL der App im mobilen Browser und wähle "Zum Startbildschirm hinzufügen", um sie als PWA im Vollbildmodus zu nutzen.)*

## 🛠 Technische Umsetzung

Dieses Projekt nutzt HTML, CSS und natives JavaScript. 
Um direkt aus dem Browser auf die offene Komoot-API (`v007`) zugreifen zu können, ohne von CORS-Richtlinien (Cross-Origin Resource Sharing) blockiert zu werden, wird ein öffentlicher CORS-Proxy (`corsproxy.io`) verwendet. Aus den heruntergeladenen JSON-Koordinaten wird clientseitig ein valides XML/GPX-Dokument generiert und als lokaler Datei-Download getriggert.

## 🤖 Credits & Entstehung

Der Code und die Architektur dieses Projekts wurden vollständig und maßgeblich mithilfe von **Gemini 3.1 Pro** entwickelt und für die Nutzung als PWA auf Smartphones (wie dem Fairphone mit IodeOS) optimiert.

---
**Disclaimer:** Dieses Projekt steht in keiner offiziellen Verbindung zu Komoot. Es nutzt lediglich die öffentlich zugängliche API. Nur für den privaten Gebrauch bestimmt.
