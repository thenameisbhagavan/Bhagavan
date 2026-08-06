import fs from 'fs';
import path from 'path';

// Parse articles.js as text to avoid Vite asset import errors in pure Node
const articlesContent = fs.readFileSync(path.resolve(process.cwd(), 'src/data/articles.js'), 'utf-8');

const slugRegex = /slug:\s*'([^']+)'/g;
const dateRegex = /updated:\s*'([^']+)'/g;

let match;
const articles = [];
const slugs = [];
const dates = [];

while ((match = slugRegex.exec(articlesContent)) !== null) {
  slugs.push(match[1]);
}
while ((match = dateRegex.exec(articlesContent)) !== null) {
  dates.push(match[1]);
}

for(let i=0; i<slugs.length; i++) {
  articles.push({ slug: slugs[i], updated: dates[i] || new Date().toISOString().split('T')[0] });
}

const hostname = 'https://thenameisbhagavan.in';
const today = new Date().toISOString().split('T')[0];

const pageRoutes = [
  '/',
  '/work',
  '/experience',
  '/vision',
  '/connect',
  '/innovation',
  '/credentials',
  '/ecosystem',
  '/resume',
  '/journal',
];

const productRoutes = [
  '/work/voltdrive',
  '/work/careeros',
  '/work/auraos',
  '/work/veritas',
];

const generateUrl = (route, date, priority) => `  <url>
    <loc>${hostname}${route}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;

// 1. Pages Sitemap
const sitemapPages = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pageRoutes.map(r => generateUrl(r, today, r === '/' ? '1.0' : '0.8')).join('\n')}
</urlset>`;

// 2. Products Sitemap
const sitemapProducts = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${productRoutes.map(r => generateUrl(r, today, '0.9')).join('\n')}
</urlset>`;

// 3. Journal Sitemap
const sitemapJournal = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${articles.map(a => generateUrl(`/journal/${a.slug}`, a.updated, '0.8')).join('\n')}
</urlset>`;

// 4. Index Sitemap
const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${hostname}/sitemap-pages.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${hostname}/sitemap-products.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${hostname}/sitemap-journal.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>`;

const publicDir = path.resolve(process.cwd(), 'public');

fs.writeFileSync(path.join(publicDir, 'sitemap-pages.xml'), sitemapPages, 'utf8');
fs.writeFileSync(path.join(publicDir, 'sitemap-products.xml'), sitemapProducts, 'utf8');
fs.writeFileSync(path.join(publicDir, 'sitemap-journal.xml'), sitemapJournal, 'utf8');
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapIndex, 'utf8');

console.log('Split sitemaps generated at', publicDir);
