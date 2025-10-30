// update-sitemap.js
import fs from "fs";
import path from "path";

const sitemapPath = path.resolve("public", "sitemap.xml");
const infoPath = path.resolve("public", "site-info.json");

// Date du jour au format ISO (AAAA-MM-JJ)
const today = new Date().toISOString().split("T")[0];

// --- Mise à jour du sitemap ---
let xml = fs.readFileSync(sitemapPath, "utf8");
xml = xml.replace(/<lastmod>.*?<\/lastmod>/g, `<lastmod>${today}</lastmod>`);
fs.writeFileSync(sitemapPath, xml, "utf8");

// --- Création du fichier JSON ---
const info = { lastUpdate: today };
fs.writeFileSync(infoPath, JSON.stringify(info, null, 2), "utf8");

console.log(`✅ Sitemap mis à jour et date enregistrée (${today})`);

