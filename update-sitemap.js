// update-sitemap.js
// 🔄 Script pour mettre à jour automatiquement les balises <lastmod> du sitemap.xml

import fs from "fs";
import path from "path";

// 1️⃣ Chemin du fichier sitemap
const sitemapPath = path.resolve("public", "sitemap.xml");

// 2️⃣ Lis le fichier
let xml = fs.readFileSync(sitemapPath, "utf8");

// 3️⃣ Génère la date du jour au format ISO (ex: 2025-10-30)
const today = new Date().toISOString().split("T")[0];

// 4️⃣ Remplace toutes les balises <lastmod> par la date du jour
xml = xml.replace(/<lastmod>.*?<\/lastmod>/g, `<lastmod>${today}</lastmod>`);

// 5️⃣ Réécris le fichier
fs.writeFileSync(sitemapPath, xml, "utf8");

console.log(`✅ Sitemap mis à jour avec la date ${today}`);
