# Website-Plan – Internationaler FCI-Stöbercup 2027

## 1. Ziel

Die bestehende statische Website soll zu einer professionellen, modernen und internationalen Eventseite ausgebaut werden. Die neue Website muss die Corporate Identity des vorhandenen Canva-Designs klar bewahren und gleichzeitig technisch sauber, schnell, mobil optimiert und leicht erweiterbar sein.

Die veröffentlichte `main`-Version darf während der Entwicklung nicht verändert werden. Alle Arbeiten erfolgen zunächst auf:

`feature/premium-event-redesign`

## 2. Markenbild und Corporate Identity

### Grundwirkung

- hochwertig
- offiziell
- international
- sportlich, aber nicht militärisch
- emotional und naturverbunden
- klarer Bezug zu Kärnten, Villach, Ossiacher See und Landskron

### Farben

- tiefes Smaragd- und Tannengrün als Hauptfarben
- Gold und Bronze als Akzent- und Rahmenfarben
- Creme, warmes Beige und Weiß für Text und helle Inhaltsflächen
- keine grellen Farben

Empfohlene CSS-Variablen:

```css
--green-950: #071b12;
--green-900: #0b281a;
--green-800: #143923;
--green-700: #1d4a30;
--gold: #d8b765;
--gold-dark: #a9782f;
--gold-soft: #eadba5;
--cream: #f5edd4;
--paper: #fbf8ef;
--text-dark: #172019;
```

### Typografie

- elegante Serifenschrift für Hauptüberschriften, große Zahlen und besondere Zitate
- moderne Sans-Serif-Schrift für Navigation, Fließtext, Buttons und Formulare
- mögliche Kombination: `Cormorant Garamond` oder `Playfair Display` + `Inter` oder `Source Sans 3`
- Webfonts datenschutzfreundlich lokal einbinden oder eine gute Systemschrift-Fallback-Lösung verwenden

### Gestaltungselemente

- feine goldene Linien und Rahmen
- dezente Art-Deco- und Wappen-Geometrie
- offizielles Siegel als wiederkehrendes Element
- klare Symmetrie im Hero-Bereich
- großzügige Abstände
- Pfoten- oder Hundeicons nur sparsam
- dezente Scroll- und Hover-Animationen
- keine überladenen Glitzer-, 3D- oder Effektanimationen

### Bildsprache

Der Hund muss natürlich, freundlich und fokussiert wirken:

- warmbrauner oder goldbrauner Stöberhund
- Nase am Boden, aktiv suchend
- weicher, konzentrierter Ausdruck
- keine Polizei-, Militär-, Schutz- oder taktische Bildwirkung
- möglichst echte Bilder vom Hundesport, Gelände und Veranstaltungsort

Weitere Motive:

- Sportzentrum Landskron
- Ossiacher See
- Burg Landskron
- Kärntner Berge
- Teilnehmer, Teams und Hunde in natürlicher Bewegung

## 3. Technische Grundsätze

- Mobile First
- semantisches HTML5
- sauberes, wartbares CSS
- möglichst wenig JavaScript
- keine unnötigen Frameworks für die erste Version
- gute Performance und kleine Bilddateien
- WebP oder AVIF bevorzugen, mit sinnvollen Fallbacks
- Bilder lokal im Repository speichern, keine direkten Canva-Bild-URLs verwenden
- barrierearme Navigation und Formulare
- sichtbare Fokuszustände
- ausreichende Farbkontraste
- `prefers-reduced-motion` beachten
- SEO-Basics: Title, Description, Open Graph, strukturierte Überschriften
- GitHub Pages kompatibel

## 4. Responsive Anforderungen

Die Website muss auf Smartphone, Tablet und Desktop vollständig funktionieren.

### Smartphone

- echte mobile Navigation mit Hamburger-Menü
- große Touchflächen, mindestens ca. 44 × 44 Pixel
- keine horizontalen Scrollleisten
- Inhalte und Karten untereinander
- Hero-Text und Hundebild sinnvoll stapeln
- Countdown kompakt und gut lesbar
- Formulare einspaltig
- Tabellen bei Bedarf als Karten oder horizontal scrollbar
- Buttons möglichst über volle Breite, wenn sinnvoll
- Schriftgrößen nicht kleiner als 16 Pixel im Fließtext

### Tablet

- ein- oder zweispaltige Kartenlayouts
- Navigation abhängig von verfügbarer Breite
- große Bilder ohne ungünstige Zuschnitte

### Desktop

- klare maximale Inhaltsbreite
- großzügige Weißräume
- mehrspaltige Karten
- sichtbare Hauptnavigation
- CTA „Jetzt anmelden“ immer gut erreichbar

Mindestens testen bei:

- 360 px
- 390 px
- 768 px
- 1024 px
- 1440 px

## 5. Empfohlene Seitenstruktur

Die bisherige lange Ein-Seiten-Struktur wird zu einer echten Eventwebsite mit Unterseiten weiterentwickelt.

### Hauptnavigation

- Start
- Event
- Programm
- Unterkunft
- Downloads
- Kontakt
- DE | EN
- hervorgehobener Button: Jetzt anmelden

### 5.1 Startseite

Inhalte:

1. Hero-Bereich
   - Eventname: Internationaler FCI-Stöbercup 2027
   - 22.–23. Mai 2027
   - Villach · Kärnten · Österreich
   - freundlicher, suchender Stöberhund
   - Countdown bis Veranstaltungsbeginn
   - Buttons: „Jetzt anmelden“ und „Mehr zum Event“
   - offizielles Siegel

2. Schnellinformationen
   - Datum
   - Ort
   - Bewerb

3. Event-Highlights
   - internationale Wertung
   - professionelle Organisation
   - abwechslungsreiches Gelände
   - Gemeinschaft und Leidenschaft

4. Austragungsort
   - Sportzentrum Landskron
   - großes Landschaftsbild
   - Lage, Infrastruktur, Bedingungen
   - Button zu Anreise oder Karte

5. Aktuelles
   - drei neueste Meldungen
   - z. B. Ausschreibung veröffentlicht, Anmeldung geöffnet, Zeitplan aktualisiert

6. Empfohlene Unterkünfte
   - Vorschau mit vier Unterkunftskarten
   - Button „Alle Unterkünfte ansehen“

7. Partner und Sponsoren
   - einheitliche Logodarstellung
   - klickbare Logos

8. Footer
   - Eventlinks
   - Infoseiten
   - Kontakt
   - Impressum
   - Datenschutz
   - Social Media

### 5.2 Event

- Beschreibung des Bewerbs
- Klassen und Austragungsmodus
- Teilnahmevoraussetzungen
- Veranstalter
- Richter und Offizielle
- Gelände und Bodenbedingungen
- FAQ
- Bildergalerie

### 5.3 Programm

- strukturierte Zeitachse für Freitag, Samstag und Sonntag
- noch nicht bestätigte Punkte mit „wird bekannt gegeben“ markieren
- später als PDF downloadbar
- Programm mobil als vertikale Timeline darstellen

### 5.4 Unterkunft

Kategorien:

- Camping
- Hotels und Gasthöfe
- Apartments und Ferienhäuser

Bereits vorhandene Unterkünfte:

- Seecamping Plörz
- Ideal Camping Lampele
- Seecamping Berghof
- Hilda’s Home
- Gasthof Waldhof Landskron

Jede Unterkunftskarte soll enthalten:

- echtes Foto
- Name
- Kategorie
- Kurzbeschreibung
- Entfernung zum Veranstaltungsort
- Hunde erlaubt: ja/nein
- relevante Hinweise zu Anzahl, Größe und möglichen Zusatzkosten
- Ausstattungsmerkmale
- Button zur Unterkunft
- optional Button zur Route

Wichtiger Hinweis auf der Seite:

> Bitte bei der Buchung immer Anzahl und Größe der Hunde angeben. Regeln, Zusatzkosten und Verfügbarkeit direkt bei der Unterkunft bestätigen.

Angaben zur Hundefreundlichkeit dürfen nur veröffentlicht werden, wenn sie verlässlich geprüft wurden.

### 5.5 Downloads

Eigene Downloadseite mit klaren Dokumentkarten.

Kategorien:

- Ausschreibung und Reglement
- Anmeldung
- Teilnehmerinformationen
- Starterlisten und Ergebnisse

Vorgesehene Dokumente:

- offizielle Ausschreibung
- FCI-Reglement
- Zeitplan
- Anmeldeformular
- Starterliste
- Lageplan
- Anreise- und Parkplatzinformationen
- Tierarzt- und Notfallinformationen
- Ergebnisse

Jede Downloadkarte enthält:

- Dokumenttitel
- kurze Beschreibung
- Sprache
- Dateiformat
- Dateigröße
- Aktualisierungsdatum
- Downloadbutton

Wenn eine Datei noch nicht vorhanden ist, kein toter Downloadlink. Stattdessen „wird veröffentlicht“ anzeigen.

### 5.6 Kontakt

Inhalte:

- Veranstalter: ÖGV St. Magdalen
- derzeit verwendete E-Mail: `oegvstmagdalen@gmx.at`
- endgültige Adresse und Telefonnummer erst nach Bestätigung eintragen
- Ansprechpartner mit Name, Funktion und optional Foto
- Kontaktformular
- Veranstaltungsort und Kartenbereich
- Presse- und Sponsoringkontakt
- Social-Media-Links

Kontaktformular-Felder:

- Name
- E-Mail
- Land
- Verein
- Betreff
- Nachricht
- Datenschutz-Zustimmung

Betreff-Auswahl:

- Anmeldung
- Qualifikation
- Unterkunft
- Sponsoring
- Presse
- allgemeine Anfrage

Das bestehende `mailto:`-Formular ersetzen. Geeignete statische Lösung auswählen, zum Beispiel Formspree, Tally oder ein eingebettetes Google-Formular. Noch keine externe Lösung ohne Rücksprache fest einbauen.

### 5.7 Anmeldung

- klarer Anmeldeprozess
- Pflichtfelder
- Datenschutz-Zustimmung
- Bestätigung nach Absenden
- optional automatische Bestätigungsmail
- optional Dokumenten-Upload
- noch keine endgültige technische Lösung ohne Rücksprache festlegen

### 5.8 Rechtliches

- Impressum
- Datenschutzerklärung
- Cookiehinweis nur, wenn eingesetzte Dienste ihn tatsächlich erforderlich machen
- externe Dienste und Tracking so sparsam wie möglich einsetzen

## 6. Mehrsprachigkeit

Erste Sprachen:

- Deutsch
- Englisch

Anforderungen:

- keine automatische Maschinenübersetzung im sichtbaren Frontend
- Texte sauber getrennt verwalten
- Sprachumschalter in der Navigation
- aktuelle Sprache klar markieren
- URL-Struktur möglichst nachvollziehbar, zum Beispiel `/de/` und `/en/`, sofern der gewählte Aufbau dies sinnvoll erlaubt
- weitere Sprachen später ergänzbar

## 7. Komponenten

Wiederverwendbare Komponenten vorsehen:

- Header und Desktop-Navigation
- Mobile-Menü
- Footer
- Hero
- Countdown
- Info-Karte
- Event-Highlight
- Unterkunftskarte
- Downloadkarte
- News-Karte
- Sponsorlogo
- Kontaktformular
- Hinweisbox
- Breadcrumbs auf Unterseiten
- Sprachumschalter

## 8. Animationen

Erlaubt:

- sanftes Einblenden von Sektionen
- dezente Hover-Bewegung bei Karten
- leichte Goldlinien-Animation im Hero
- Countdown
- sanfte mobile Menüanimation

Nicht erwünscht:

- aggressive Zooms
- hektische Parallax-Effekte
- Autoplay-Videos mit Ton
- Animationen, die Inhalte verdecken
- starke Effekte auf schwachen Mobilgeräten

## 9. Inhaltliche Regeln

- kurze, konkrete Texte
- keine Werbefloskeln
- wichtige Informationen schnell erfassbar
- Termine, Orte, Regeln und Kontaktdaten nur nach Prüfung veröffentlichen
- keine erfundenen Sponsoren, Telefonnummern, Adressen oder Teilnahmeinformationen
- unbekannte Angaben als Platzhalter oder „wird bekannt gegeben“ markieren

## 10. Umsetzung in Phasen

### Phase 1 – Designsystem und Grundgerüst

- neue Dateistruktur festlegen
- Header, Navigation und Footer
- Responsive Breakpoints
- Farben, Typografie, Buttons, Karten
- Mobile-Menü
- gemeinsame Komponenten

### Phase 2 – Startseite

- Hero
- Countdown
- Schnellinformationen
- Highlights
- Veranstaltungsort
- Unterkunftsvorschau
- Sponsorenplatzhalter

### Phase 3 – Unterseiten

- Event
- Programm
- Unterkunft
- Downloads
- Kontakt
- Rechtliches

### Phase 4 – Funktionen

- Anmeldeformular
- Kontaktformular
- Mehrsprachigkeit
- News
- Ergebnis- und Starterlistenbereich

### Phase 5 – Qualitätssicherung

- Test auf Smartphone, Tablet und Desktop
- Lighthouse-Prüfung
- Tastaturnavigation
- Kontrastprüfung
- Formularprüfung
- Prüfung aller Links
- Bilder optimieren
- keine Canva-Hotlinks mehr

## 11. Abnahmekriterien

Die erste veröffentlichungsfähige Version ist erreicht, wenn:

- alle Hauptseiten vorhanden sind
- Navigation auf Desktop und Mobil funktioniert
- das Design klar zur Corporate Identity des Plakats passt
- der Hund freundlich und stöbertypisch dargestellt wird
- keine taktische oder militärische Bildwirkung vorhanden ist
- Downloads ohne tote Links funktionieren oder klar als angekündigt markiert sind
- Kontaktformular technisch sinnvoll gelöst ist
- Deutsch und Englisch vorgesehen oder umgesetzt sind
- alle Inhalte auf 360 px Breite ohne horizontales Scrollen lesbar sind
- keine Bilder direkt von Canva geladen werden
- Impressum und Datenschutz eingebunden sind
- `main` erst nach Prüfung und Freigabe aktualisiert wird

## 12. Arbeitsanweisung für Codex

1. Zuerst diese Datei vollständig lesen.
2. Den bestehenden Code und alle Assets analysieren.
3. Ausschließlich auf `feature/premium-event-redesign` arbeiten.
4. `main` nicht direkt verändern.
5. Keine echten Kontaktdaten, Sponsoren, Regeln oder Termine erfinden.
6. Unbekannte Inhalte mit klaren Platzhaltern kennzeichnen.
7. Mobile First umsetzen.
8. Externe Canva-Bildlinks durch lokale Assets ersetzen.
9. Änderungen in nachvollziehbaren, kleinen Commits vornehmen.
10. Nach jeder Phase kurz dokumentieren:
    - welche Dateien geändert wurden
    - was bereits funktioniert
    - was noch offen ist
    - wie mobil getestet wurde
11. Vor einem Merge einen Pull Request gegen `main` erstellen.
12. Noch nicht mergen, bevor die visuelle und inhaltliche Freigabe erfolgt ist.
