import { access, cp, mkdir, readdir, rm } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const client = join(dist, "client");
const server = join(dist, "server");
const rootFileExtensions = new Set([".html", ".css", ".js", ".ico", ".xml", ".txt"]);
const requiredFiles = [
  "index.html",
  "event.html",
  "programm.html",
  "unterkunft.html",
  "downloads.html",
  "kontakt.html",
  "anmeldung.html",
  "faq.html",
  "sponsoren.html",
  "404.html",
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
await cp(join(root, "assets"), join(client, "assets"), { recursive: true });
await cp(join(root, "sites", "worker.js"), join(server, "index.js"));

for (const file of requiredFiles) {
  await access(join(client, file));
}
await access(join(server, "index.js"));

console.log(`Sites build complete: ${staticFiles.length} root files and local assets.`);
