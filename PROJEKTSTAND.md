# Projektstand – Internationaler FCI-Stöbercup 2027

Stand: 16. August 2026
Arbeitsbranch: `feature/premium-event-redesign`  
Zielbranch des Pull Requests: `main`

## Veröffentlichung

- OpenAI Sites:
  `https://internationaler-stoebercup-2027.meinereiner71.chatgpt.site`
- Zugriff: öffentlich, ohne OpenAI-Anmeldung erreichbar
- GitHub Pull Request: `feature/premium-event-redesign` nach `main`
- Öffentliche Freigabe am 16. August 2026 ausdrücklich durch den Benutzer erteilt; `main` blieb unverändert.

## Umgesetzt

- komplette statische Mehrseiten-Website nach `WEBSITE-PLAN.md`
- responsives Mobile-First-Designsystem mit gemeinsamer Navigation und Footer
- Hamburger-Menü, DE/EN-Sprachumschaltung und Countdown
- Newsbereich, Downloadcenter, Kontaktformular, Anmeldeformular, Sponsorenbereich und Bildergalerie
- Seiten: Start, Event, Programm, Unterkunft, Downloads, Kontakt, Anmeldung, FAQ, Sponsoren
- zusätzliche Seiten: Impressum, Datenschutz und 404
- lokale, optimierte Eventbilder ohne Canva-Hotlinks
- barrierearme Fokusführung, Skip-Link, Touch-Ziele und Reduced-Motion-Unterstützung
- SEO-Basis mit eindeutigen Seitentiteln, Beschreibungen, Open Graph, Sitemap und Robots-Datei
- Sites-Build mit Cloudflare-Worker, statischen Assets, Kurz-URLs,
  Sicherheits-Headern und eigener 404-Antwort
- bestätigtes Zwei-Tage-Format am 22. und 23. Mai 2027 ohne frühere Freitag-bis-Sonntag-Unstimmigkeit
- Bewerbsgrundlagen FCI-StöPr 1–3, zwei Starts, Einzel-/Mannschaftswertung und Länderquoten
- österreichischer Qualifikationsweg aus der bisherigen Canva-Veranstaltungsseite
- konkrete Beschreibungen und Direktlinks für fünf Unterkunftsempfehlungen
- deutsches FCI-Pflichtenheft und englische Spezifikation als lokale Downloads
- klarer Anmeldeweg über die nationalen Verbände und funktionierender E-Mail-Kontakt statt nicht sendender Scheinformulare
- erweiterte Routentests für Rechtstexte, Sitemap, Robots-Datei und PDF-Dokumente

## Später zu ergänzende Veranstaltungsdetails

Die Website ist als Vorankündigung veröffentlicht. Folgende Details werden nach ihrer Bestätigung laufend ergänzt:

- nationale Ausschreibung, endgültige Meldetermine und lokale Teilnahmehinweise
- Richterinnen, Richter, Offizielle und Ansprechpersonen
- Geländeart, Trainingsfläche und detaillierter Zeitplan
- Ausschreibung, Lageplan, Starterlisten und Ergebnisse
- Anmeldefristen und gegebenenfalls eine datenschutzkonforme Formularlösung
- Sponsoren, Logos und mögliche Sponsoringunterlagen
- bestätigte Presse-, Sponsoring- und Social-Media-Kontakte

## Formulare

Die nicht sendenden Formularvorschauen wurden entfernt, damit keine Anfrage oder Anmeldung irrtümlich als übermittelt erscheint. Bis zur Freigabe eines datenschutzkonformen Formulardienstes verweist die Kontaktseite auf die bestätigte E-Mail-Adresse; namentliche Wettbewerbsmeldungen erfolgen laut FCI-Pflichtenheft gesammelt über die nationalen Verbände.

## Pflegehinweise

- Navigation und Footer werden zentral in `app.js` gepflegt.
- Texte besitzen deutsche und englische Varianten über `data-de` und `data-en`.
- Farben, Layout, Komponenten und Breakpoints liegen zentral in `styles.css`.
- Dateien für das Downloadcenter erst verlinken, wenn sie lokal im Repository vorhanden sind.
- Keine Angaben zur Hundefreundlichkeit veröffentlichen, bevor sie direkt beim Unterkunftsbetrieb verifiziert wurden.
- `main` weiterhin nur nach einer gesonderten ausdrücklichen Freigabe aktualisieren.

## Qualitätssicherung

- `html-validate`: alle 12 HTML-Dateien ohne Fehler
- `node --check app.js`: JavaScript-Syntax ohne Fehler
- interne Links und lokale Bildreferenzen: vollständig auflösbar
- keine Canva-Hotlinks und keine `mailto:`-Formularaktion
- reale Browserprüfung aller neun Hauptseiten bei 360, 390, 768, 1024 und 1440 Pixel
- kein horizontaler Überlauf bei den getesteten Breiten
- Hamburger-Menü, DE/EN-Umschaltung und Sprachspeicherung geprüft
- Countdown, Galerie-Dialog und FAQ-Akkordeons geprüft
- Kontakt- und Anmeldeformular mit Pflichtfeldern und Statusmeldung geprüft
- Browserkonsole: keine Fehler oder Warnungen
- Lighthouse Mobile: Performance 91, Barrierefreiheit 100, Best Practices 100, SEO 100
- `npm test`: Sites-Build sowie Worker-Routen, 404 und Asset-Auslieferung
- `npm test` am 16. August 2026: 15 Tests bestanden, einschließlich Rechtstexten, Sitemap, Robots-Datei, Qualifikationsweg und FCI-PDFs
- öffentliche Start- und Datenschutzseite ohne Anmeldung mit HTTP-Status 200 geprüft

Browser-Screenshots und Lighthouse-Rohdaten liegen während der Prüfung lokal unter `output/playwright/` und werden nicht versioniert.
