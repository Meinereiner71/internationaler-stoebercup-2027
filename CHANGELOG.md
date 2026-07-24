# Änderungsprotokoll

## 2026-07-24 – Sites-Veröffentlichung

- OpenAI-Sites-Projekt angelegt und dessen Projektkennung in
  `.openai/hosting.json` synchronisiert.
- Abhängigkeitsfreien Build für ein Cloudflare-Workers-kompatibles Sites-Paket
  ergänzt.
- Statische Hauptseiten, lokale Assets, saubere Kurz-URLs, eigene 404-Antwort
  und Sicherheits-/Cache-Header in den Sites-Worker eingebunden.
- Automatisierte Worker-Tests für Startseite, Hauptseiten, 404 und Assets
  ergänzt.
- Formularübermittlung entsprechend der Nutzerentscheidung weiterhin bewusst
  zurückgestellt; die lokale Validierung bleibt erhalten.

## 2026-07-24 – Premium Event Redesign

### Designsystem und Komponenten

- Mobile-First-Designsystem in Dunkelgrün, Gold, Creme und Papierweiß aufgebaut.
- Elegante Serif-/Sans-Systemtypografie, Art-Deco-Rahmen, Karten, Buttons, Hinweise und Fokuszustände ergänzt.
- Gemeinsamen Header, responsive Navigation, Hamburger-Menü, Sprachumschaltung und Footer als JavaScript-Komponenten umgesetzt.
- Sanfte Reveal-, Hover- und Menüanimationen mit `prefers-reduced-motion`-Fallback ergänzt.
- Offizielles Hundemotiv und Siegel als lokale, verkleinerte Webvarianten optimiert.

### Seiten und Inhalte

- Vollständige Startseite mit Hero, Countdown, Schnellinformationen, Highlights, Ort, News, Unterkunft und Sponsoren.
- Eigene Seiten für Event, Programm, Unterkunft, Downloads, Kontakt, Anmeldung, FAQ und Sponsoren erstellt.
- Impressum, Datenschutz und eine eigene 404-Seite ergänzt.
- Galerie mit zugänglichem Dialog, Programm-Timeline und dokumentiertes Downloadcenter umgesetzt.
- Kontakt- und Anmeldeformular mit Pflichtfeldern, Datenschutz-Zustimmung, lokaler Validierung und transparentem Freigabestatus erstellt.
- Alle sichtbaren Kerntexte manuell in Deutsch und Englisch angelegt.

### Qualität, Datenschutz und SEO

- Externe Canva-Bild-URLs vollständig entfernt.
- Unbestätigte Angaben konsequent als Platzhalter gekennzeichnet.
- Meta-Titel und Beschreibungen, Open-Graph-Basis, Sitemap, Robots-Datei und strukturierte Seitenüberschriften ergänzt.
- Skip-Link, sichtbare Tastaturfokusse, mindestens 44 Pixel große Touch-Ziele und reduzierte Bewegung berücksichtigt.
- Keine Tracker, externen Webfonts, Karten-Embeds oder Formulardienste eingebaut.

### Dokumentation

- README vollständig aktualisiert.
- `PROJEKTSTAND.md` als projektübergreifender Übergabestand ergänzt.
- `CODEX_SETUP.md` dokumentiert die für Wartung und Qualitätssicherung genutzten Werkzeuge.
