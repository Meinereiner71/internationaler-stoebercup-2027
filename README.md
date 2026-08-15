# Internationaler FCI-Stöbercup 2027

Responsive, zweisprachige Event-Website für den Internationalen FCI-Stöbercup 2027 in Villach-Landskron.

Produktive Vorschau:
[internationaler-stoebercup-2027.meinereiner71.chatgpt.site](https://internationaler-stoebercup-2027.meinereiner71.chatgpt.site)

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

Datum, Austragungsort, Zwei-Tage-Format, FCI-StöPr 1–3, Länderquoten, österreichischer Qualifikationsweg und Unterkunftsauswahl wurden aus der bisherigen Canva-Seite und den lokalen FCI-Pflichtenheften übernommen. Die beiden FCI-Grundlagendokumente stehen im Downloadcenter bereit.

Die Anmeldung ist noch nicht geöffnet. Namentliche Meldungen erfolgen laut FCI-Pflichtenheft gesammelt über die nationalen Verbände. Bis ein datenschutzkonformer Formulardienst freigegeben ist, verwendet die Seite einen direkten E-Mail-Kontakt und zeigt keine nicht sendenden Formularvorschauen.

Die produktive Sites-URL sowie Details, offene Punkte und Arbeitsstand stehen in
`PROJEKTSTAND.md`.
