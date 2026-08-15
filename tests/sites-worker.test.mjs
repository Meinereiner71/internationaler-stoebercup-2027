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
  for (const route of ["/assets/seal-320.png", "/assets/oekv-logo.png", "/assets/hero-dog-clean-1376.jpg"]) {
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
});
