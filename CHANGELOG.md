# Änderungsprotokoll

## 2026-08-27 – Zwei Spezifikations-Downloads entfernt

- deutsches FCI-Pflichtenheft und englische Spezifikation aus dem Downloadcenter entfernt
- beide PDF-Dateien aus dem veröffentlichten Sites-Paket ausgeschlossen; lokale Quellen im Projekt beibehalten
- Verweis auf das Pflichtenheft auf der Eventseite bereinigt und Nichtveröffentlichung automatisiert abgesichert

## 2026-08-16 – Qualifikationslink besser lesbar

- Link „Zur Qualifikation“ auf der hellen Hinweisfläche in dunkles Grün geändert
- Kontrastregel automatisiert abgesichert und Stylesheet-Version aktualisiert

## 2026-08-16 – Öffentliche Freigabe vorbereitet

- sichtbare interne Entwurfs- und Freigabevermerke aus Impressum und Datenschutz entfernt
- unbelegten Platzhalterblock zu Haftung und Urheberrecht entfernt
- Sites-Zugriff nach ausdrücklicher Benutzerfreigabe öffentlich gestellt
- öffentlichen Abruf ohne OpenAI-Anmeldung erfolgreich geprüft

## 2026-08-16 – Internationale Qualifikation aus dem Österreich-Finale bestätigt

- Plätze 1 bis 3 in FCI-StöPr 1 und 2 als internationale Qualifikationsplätze ausgewiesen
- Plätze 1 bis 5 in FCI-StöPr 3 als internationale Qualifikationsplätze ausgewiesen
- bisherigen offenen Auswahlhinweis entfernt und Reservevergabe weiterhin getrennt gekennzeichnet

## 2026-08-16 – Laufenden Regionalcup-Stand verlinkt

- aktuelle Google-Tabelle der ÖKV-Regionalturniere auf der Qualifikationsseite verlinkt
- ausgewählte Region Süd und laufenden Zwischenstand transparent gekennzeichnet
- Tabelle klar vom verbindlichen ÖKV-Reglement und den offiziellen Ergebnissen abgegrenzt

## 2026-08-16 – Österreichischen Qualifikationsweg präzisiert

- ÖKV Regional Stöbercup 2026 als nachvollziehbaren Fünf-Schritte-Weg dargestellt
- Regionswahl, vier Regionalturniere, Cupwertung, Finalqualifikation und Nachrücken erklärt
- Wertung der drei besten Ergebnisse sowie Mindestzahl positiver Ergebnisse ergänzt
- Qualifikationsquote für das nationale Finale und Regel zum Stufenwechsel aufgenommen
- nationales Finale klar von der noch zu bestätigenden Nominierung für Team Österreich 2027 getrennt
- offizielles ÖKV-Reglement direkt als verbindliche Quelle verlinkt

## 2026-08-16 – Navigation und Qualifikation vereinfacht

- „Qualifikation“ als eigenen deutsch-englischen Hauptmenüpunkt ergänzt
- österreichischen Auswahlweg und internationale Teilnahme klar getrennt
- verbindliche Teilnahmebestimmungen und FCI-Prüfungsordnung direkt verknüpft
- Startseite und Wettbewerbsseite von wiederholten Detailblöcken entlastet
- FAQ und Sponsoren aus der Hauptnavigation in den Footer verschoben
- nicht verfügbare Schein-Downloads und Dummy-Metadaten entfernt
- Google-Maps-Route zum Sportzentrum Landskron ergänzt
- Kontrast auf hellen Inhaltsflächen und veralteten Bildpfad korrigiert
- Cache-Version für gemeinsame Styles und Navigation aktualisiert
- Struktur, Sprachumschaltung und 15 automatisierte Prüfungen bestanden

## 2026-08-15 – Canva-Inhalte und FCI-Grundlagen übernommen

- alte Canva-Veranstaltungsseite vollständig ausgelesen und mit den lokalen deutsch-/englischsprachigen FCI-Pflichtenheften abgeglichen
- Freitag-bis-Sonntag-Platzhalter durch den bestätigten Zwei-Tage-Ablauf am 22. und 23. Mai 2027 ersetzt
- FCI-StöPr 1–3, zwei Starts, Länderquoten, Einzel-/Mannschaftswertung, Veterinär- und Versicherungsanforderungen ergänzt
- österreichischen Qualifikationsweg und Starterplätze aus der bisherigen Veranstaltungsseite übernommen
- fünf Unterkunftsempfehlungen mit vorhandenen Beschreibungen und Direktlinks konkretisiert
- deutsche und englische FCI-Grundlagendokumente als lokale Downloads bereitgestellt
- nicht sendende Formularvorschauen entfernt; Anmeldeweg über nationale Verbände und E-Mail-Kontakt klar dargestellt
- CTA-Kontrast, Testabdeckung und Sites-Buildgröße verbessert
- zentrale Quellen- und Release-Dokumentation ergänzt

## 2026-07-24 – Sites-Veröffentlichung

- OpenAI-Sites-Projekt angelegt und dessen Projektkennung in
  `.openai/hosting.json` synchronisiert.
- Private Produktionsvorschau unter
  `https://internationaler-stoebercup-2027.meinereiner71.chatgpt.site`
  veröffentlicht und als SEO-Ziel in Sitemap, Robots-Datei und strukturierten
  Daten hinterlegt.
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
