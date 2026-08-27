import { access, cp, mkdir, readdir, rm } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const client = join(dist, "client");
const server = join(dist, "server");
const rootFileExtensions = new Set([".html", ".css", ".js", ".ico", ".xml", ".txt"]);
const staticAssetFiles = [
  "camping-lampele.jpg",
  "gasthof-waldhof.jpg",
  "hero-dog-clean-1376.jpg",
  "hero-dog-clean-720.jpg",
  "hildas-home.jpg",
  "oekv-logo.png",
  "seal-320.png",
  "seecamping-berghof.jpg",
  "seecamping-ploerz.jpg",
  "stadion-detail.jpg",
  "stadion.jpg",
];
const publishedDocumentFiles = [
  "competition-regulations-2027-en.pdf",
  "fci-pruefungsordnung-2025-de.pdf",
  "fci-trial-regulations-2025-en.pdf",
  "teilnahmebestimmungen-2027-de.pdf",
];
const requiredFiles = [
  "index.html",
  "event.html",
  "qualifikation.html",
  "programm.html",
  "unterkunft.html",
  "downloads.html",
  "kontakt.html",
  "anmeldung.html",
  "faq.html",
  "sponsoren.html",
  "impressum.html",
  "datenschutz.html",
  "404.html",
  "robots.txt",
  "sitemap.xml",
  "styles.css",
  "app.js",
];

function extension(file) {
  const dot = file.lastIndexOf(".");
  return dot >= 0 ? file.slice(dot) : "";
}

await rm(dist, { recursive: true, force: true });
await mkdir(client, { recursive: true });
await mkdir(server, { recursive: true });

const rootEntries = await readdir(root, { withFileTypes: true });
const staticFiles = rootEntries
  .filter((entry) => entry.isFile() && rootFileExtensions.has(extension(entry.name)))
  .map((entry) => entry.name);

await Promise.all(
  staticFiles.map((file) => cp(join(root, file), join(client, file))),
);
await mkdir(join(client, "assets"), { recursive: true });
await Promise.all(
  staticAssetFiles.map((file) => cp(join(root, "assets", file), join(client, "assets", file))),
);
await mkdir(join(client, "documents"), { recursive: true });
await Promise.all(
  publishedDocumentFiles.map((file) =>
    cp(join(root, "documents", file), join(client, "documents", file)),
  ),
);
await cp(join(root, "sites", "worker.js"), join(server, "index.js"));

for (const file of requiredFiles) {
  await access(join(client, file));
}
await access(join(server, "index.js"));

console.log(`Sites build complete: ${staticFiles.length} root files and local assets.`);
