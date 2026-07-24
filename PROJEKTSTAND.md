# Projektstand – Internationaler FCI-Stöbercup 2027

Stand: 24. Juli 2026  
Arbeitsbranch: `feature/premium-event-redesign`  
Zielbranch des Pull Requests: `main`

## Veröffentlichung

- OpenAI Sites: Projekt angelegt, produktive URL wird nach dem erfolgreichen
  Deployment hier ergänzt.
- GitHub Pull Request: `feature/premium-event-redesign` nach `main`
- `main` bleibt bis zur Freigabe unverändert.

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

## Bewusste Platzhalter

Vor einer Veröffentlichung müssen folgende Inhalte fachlich oder rechtlich bestätigt werden:

- offizieller Eventname, Datum und genaue Ortsangaben
- Abweichung zwischen Eventdatum 22.–23. Mai 2027 und gewünschter Freitag-bis-Sonntag-Timeline
- Klassen, Prüfungsstufen, Modus, Qualifikation und Teilnahmebedingungen
- Richterinnen, Richter, Offizielle und Ansprechpersonen
- Unterkünfte: echte Fotos, Entfernung, Ausstattung, Preise und Hunderegeln
- Ausschreibung, Reglement, Formulare, Lageplan, Starterlisten und Ergebnisse
- Anmeldefristen und datenschutzkonformer Formulardienst
- Adresse, Telefon, Kartenlösung, Presse-, Sponsoring- und Social-Media-Kontakte
- Sponsoren, Logos und mögliche Sponsoringunterlagen
- vollständiges, rechtlich geprüftes Impressum und Datenschutzerklärung

## Formulare

Die Formulare sind im Frontend vollständig gestaltet und validieren Pflichtfelder. Sie übertragen bewusst noch keine Daten. Vor der Aktivierung ist ein vom Veranstalter freigegebener, datenschutzkonformer Formulardienst oder ein eigener Endpunkt erforderlich. Das frühere `mailto:`-Formular wurde entfernt.

## Pflegehinweise

- Navigation und Footer werden zentral in `app.js` gepflegt.
- Texte besitzen deutsche und englische Varianten über `data-de` und `data-en`.
- Farben, Layout, Komponenten und Breakpoints liegen zentral in `styles.css`.
- Dateien für das Downloadcenter erst verlinken, wenn sie lokal im Repository vorhanden sind.
- Keine Angaben zur Hundefreundlichkeit veröffentlichen, bevor sie direkt beim Unterkunftsbetrieb verifiziert wurden.
- `main` erst nach visueller, inhaltlicher und rechtlicher Freigabe aktualisieren.

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

Browser-Screenshots und Lighthouse-Rohdaten liegen während der Prüfung lokal unter `output/playwright/` und werden nicht versioniert.
