# Internationaler FCI-Stöbercup 2027

Responsive, zweisprachige Event-Website für den Internationalen FCI-Stöbercup 2027 in Villach-Landskron.

## Seiten

- Start (`index.html`)
- Event (`event.html`)
- Programm (`programm.html`)
- Unterkunft (`unterkunft.html`)
- Downloads (`downloads.html`)
- Kontakt (`kontakt.html`)
- Anmeldung (`anmeldung.html`)
- FAQ (`faq.html`)
- Sponsoren (`sponsoren.html`)
- Impressum und Datenschutz

## Technik

Die Website bleibt ohne Framework direkt mit GitHub Pages kompatibel. Für die
Veröffentlichung über OpenAI Sites erzeugt ein kleiner Build-Schritt ein
Cloudflare-Workers-kompatibles Paket:

- semantisches HTML5
- Mobile-First-CSS in `styles.css`
- gemeinsamer Header, Navigation und Footer aus `app.js`
- DE/EN-Sprachumschaltung ohne externen Übersetzungsdienst
- keine externen Webfonts, Tracker, Canva-Hotlinks oder JavaScript-Bibliotheken
- lokal optimierte Hero-Varianten für kleine und große Bildschirme

Sites-Build und Test:

```powershell
npm test
```

Das erzeugte Verzeichnis `dist/` ist ein lokales Build-Artefakt und wird nicht
versioniert.

Lokale Vorschau:

```powershell
python -m http.server 4173
```

Danach `http://127.0.0.1:4173/` öffnen.

## Inhaltsstatus

Noch nicht bestätigte Angaben werden sichtbar als Platzhalter ausgegeben. Kontakt- und Anmeldeformular validieren Eingaben lokal, übertragen jedoch keine Daten, solange kein externer datenschutzkonformer Formulardienst freigegeben wurde.

Die produktive Sites-URL sowie Details, offene Punkte und Arbeitsstand stehen in
`PROJEKTSTAND.md`.
