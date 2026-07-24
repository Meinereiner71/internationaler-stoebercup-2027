# Codex- und Werkzeug-Setup

Diese Datei hält die für Wartung und Übergabe benötigten Werkzeuge im synchronisierten Repository fest.

## Erforderlich

- Git und GitHub CLI (`gh`) für Branch, Push und Pull Request
- lokaler statischer HTTP-Server, zum Beispiel `python -m http.server`
- moderner Browser

## Für die Umsetzung verwendet

- GitHub-Plugin / GitHub-Skill für Repository- und Pull-Request-Workflow
- Playwright-Skill für reale Browser-, Mobil- und Interaktionstests

## Laufzeit der Website

Die Website selbst benötigt keine Plugins, Pakete oder Build-Werkzeuge. Alle Assets und Skripte liegen lokal im Repository. Dadurch bleibt sie auf GitHub Pages und auf anderen statischen Hosts lauffähig.

## Datenschutz

Zugangsdaten, OAuth-Token und API-Schlüssel dürfen nicht in diesem Repository gespeichert werden.
