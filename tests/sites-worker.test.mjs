import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import test from "node:test";

const clientRoot = join(process.cwd(), "dist", "client");
const { default: worker } = await import(
  new URL(`../dist/server/index.js?test=${Date.now()}`, import.meta.url)
);

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".pdf": "application/pdf",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

const env = {
  ASSETS: {
    async fetch(request) {
      const pathname = decodeURIComponent(new URL(request.url).pathname);
      const relative = normalize(pathname.replace(/^\/+/, ""));
      const file = join(clientRoot, relative);

      if (!file.startsWith(clientRoot)) {
        return new Response("Not found", { status: 404 });
      }

      try {
        const body = await readFile(file);
        return new Response(body, {
          headers: { "Content-Type": contentTypes[extname(file)] ?? "application/octet-stream" },
        });
      } catch {
        return new Response("Not found", { status: 404 });
      }
    },
  },
};

async function request(path, accept = "text/html") {
  return worker.fetch(new Request(`https://example.test${path}`, { headers: { accept } }), env);
}

test("serves the homepage and adds security headers", async () => {
  const response = await request("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html/);
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  const html = await response.text();
  assert.match(html, /Internationaler FCI-St/);
  assert.match(html, /data-en="International Article Search Competition 2027"/);
  assert.match(html, /data-de="Villach, Kärnten, Österreich" data-en="Villach, Carinthia, Austria"/);
  assert.match(html, /data-de="Nase runter\. Bühne frei\." data-en="Nose down\. Game on\."/);
  assert.match(html, /data-de="Vorankündigung:" data-en="Advance announcement:"/);
  assert.match(html, /in den kommenden Monaten laufend ergänzt/);
  assert.match(html, /Drei Werte verbinden/);
  assert.doesNotMatch(html, /data-de="Fairness"/);
});

test("supports clean URLs for every main page", async () => {
  for (const route of [
    "/event",
    "/programm",
    "/unterkunft",
    "/downloads",
    "/kontakt",
    "/anmeldung",
    "/faq",
    "/sponsoren",
    "/impressum",
    "/datenschutz",
  ]) {
    const response = await request(route);
    assert.equal(response.status, 200, route);
  }
});

test("shows all five approved Canva accommodation photos", async () => {
  const response = await request("/unterkunft");
  assert.equal(response.status, 200);
  const html = await response.text();
  for (const image of [
    "seecamping-ploerz.jpg",
    "camping-lampele.jpg",
    "seecamping-berghof.jpg",
    "hildas-home.jpg",
    "gasthof-waldhof.jpg",
  ]) {
    assert.match(html, new RegExp(`assets/${image.replace(".", "\\.")}`), image);
  }
  assert.doesNotMatch(html, /Foto folgt nach Freigabe|Photo pending approval/);
});

test("uses the published dog image on the event page and in its gallery", async () => {
  const response = await request("/event");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /assets\/hero-dog-clean-720\.jpg/);
  assert.match(html, /data-gallery="assets\/hero-dog-clean-1376\.jpg"/);
  assert.doesNotMatch(html, /assets\/hero-dog-(?:720|1376)\.jpg/);
});

test("serves the sitemap, robots file and FCI source documents", async () => {
  for (const [route, contentType] of [
    ["/sitemap.xml", /^application\/xml/],
    ["/robots.txt", /^text\/plain/],
    ["/documents/fci-stoepr-pflichtenheft-de.pdf", /^application\/pdf/],
    ["/documents/fci-article-search-specifications-en.pdf", /^application\/pdf/],
    ["/documents/teilnahmebestimmungen-2027-de.pdf", /^application\/pdf/],
    ["/documents/competition-regulations-2027-en.pdf", /^application\/pdf/],
  ]) {
    const response = await request(route, "*/*");
    assert.equal(response.status, 200, route);
    assert.match(response.headers.get("content-type") ?? "", contentType, route);
  }
});

test("returns the custom 404 page for missing HTML routes", async () => {
  const response = await request("/nicht-vorhanden");
  assert.equal(response.status, 404);
  assert.match(await response.text(), /404/);
});

test("serves local assets with an explicit cache policy", async () => {
  for (const route of [
    "/assets/seal-320.png",
    "/assets/oekv-logo.png",
    "/assets/hero-dog-clean-1376.jpg",
    "/assets/seecamping-ploerz.jpg",
    "/assets/camping-lampele.jpg",
    "/assets/seecamping-berghof.jpg",
    "/assets/hildas-home.jpg",
    "/assets/gasthof-waldhof.jpg",
  ]) {
    const response = await request(route, "image/png");
    assert.equal(response.status, 200, route);
    assert.match(response.headers.get("cache-control") ?? "", /max-age=604800/, route);
  }
});

test("exposes the German and English flag controls in the header", async () => {
  const response = await request("/app.js", "text/javascript");
  assert.equal(response.status, 200);
  const source = await response.text();
  assert.match(source, /data-language="de"[\s\S]*🇩🇪/);
  assert.match(source, /data-language="en"[\s\S]*🇬🇧/);
  assert.match(source, /aria-pressed="true"/);
  assert.match(source, /Deutsch auswählen/);
  assert.match(source, /Select English/);
  assert.match(source, /Offizielle Vorankündigung · bestätigte Informationen werden laufend ergänzt/);
});

test("explains the advance-announcement status and confirmed parking in the FAQ", async () => {
  const response = await request("/faq");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Ist diese Website bereits die endgültige Ausschreibung\?/);
  assert.match(html, /Website ist die offizielle Vorankündigung/);
  assert.match(html, /Am Sportzentrum Landskron sind Parkmöglichkeiten vor Ort vorhanden/);
});

test("uses dark text for notices on light paper sections", async () => {
  const response = await request("/styles.css", "text/css");
  assert.equal(response.status, 200);
  const source = await response.text();
  assert.match(source, /\.section--paper \.notice \{[\s\S]*?color: var\(--green-900\);/);
  assert.match(source, /\.section--paper \.notice strong \{[\s\S]*?color: var\(--green-950\);/);
});

test("publishes the confirmed club, privacy and venue details without internal placeholders", async () => {
  const imprint = await (await request("/impressum")).text();
  assert.match(imprint, /Maria Gailerstraße 11/);
  assert.match(imprint, /ZVR-Zahl: 185947851/);
  assert.match(imprint, /Redaktionelle Verantwortung[\s\S]*Rene Franc/);
  assert.doesNotMatch(imprint, /Telefon: wird bestätigt|Telephone: to be confirmed/);

  const privacy = await (await request("/datenschutz")).text();
  assert.match(privacy, /Vorstand des ÖGV St\. Magdalen Zugriff/);
  assert.match(privacy, /spätestens zwei Monate nach Ende der Veranstaltung am 23\. Juli 2027/);
  assert.match(privacy, /agb-server\.gmx\.net\/datenschutz-at/);

  const contact = await (await request("/kontakt")).text();
  assert.match(contact, /Hochfeldstraße 33/);
  assert.match(contact, /Parkmöglichkeiten vor Ort/);
  assert.match(contact, /Geländeart und Trainingsfläche werden rechtzeitig vor dem Bewerb bekannt gegeben/);
  assert.doesNotMatch(contact, /Kartenbereich wird|Map will be embedded/);

  const event = await (await request("/event")).text();
  assert.match(event, /data-de="Werden noch bestimmt" data-en="To be appointed"/);

  const sponsors = await (await request("/sponsoren")).text();
  assert.match(sponsors, /Sponsoren folgen/);
  assert.doesNotMatch(sponsors, /sponsor-placeholder|Partner wird bekannt gegeben/);

  const registration = await (await request("/anmeldung")).text();
  assert.doesNotMatch(registration, /Dokumenten-Upload|Document upload/);
});
