# Codex- und Werkzeug-Setup

Diese Datei hält die für Wartung und Übergabe benötigten Werkzeuge im synchronisierten Repository fest.

## Erforderlich

- Git und GitHub CLI (`gh`) für Branch, Push und Pull Request
- lokaler statischer HTTP-Server, zum Beispiel `python -m http.server`
- moderner Browser

## Für die Umsetzung verwendet

- GitHub-Plugin / GitHub-Skill für Repository- und Pull-Request-Workflow
- Playwright-Skill für reale Browser-, Mobil- und Interaktionstests
- Sites-Plugin mit `sites-building` und `sites-hosting` für Build,
  Versionierung und Veröffentlichung

## Laufzeit der Website

Die Website selbst benötigt im Browser keine externen Pakete. Alle Assets und
Skripte liegen lokal im Repository. Für Sites wird Node.js ab Version 22.13
verwendet; `npm test` baut und prüft das deploybare Worker-Paket ohne zusätzliche
NPM-Abhängigkeiten. Die statischen Quelldateien bleiben zugleich auf GitHub Pages
und anderen statischen Hosts lauffähig.

## Datenschutz

Zugangsdaten, OAuth-Token und API-Schlüssel dürfen nicht in diesem Repository gespeichert werden.
