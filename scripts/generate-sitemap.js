import fs from 'fs';
import path from 'path';

// ── Parse frontmatter from markdown files directly ──
// The previous approach parsed articles.js as text with regex,
// but articles.js uses import.meta.glob (Vite-only) and doesn't
// contain hardcoded slugs. This reads the actual markdown files.

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  const attrs = {};
  match[1].split(/\r?\n/).forEach(line => {
    const idx = line.indexOf(':');
    if (idx > -1) {
      const key = line.slice(0, idx).trim();
      let value = line.slice(idx + 1).trim();
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      attrs[key] = value;
    }
  });
  return attrs;
}

function findMarkdownFiles(dir) {
  let results = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    if (item.name === 'archive') continue; // Exclude legacy articles
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      results = results.concat(findMarkdownFiles(fullPath));
    } else if (item.name.endsWith('.md')) {
      results.push(fullPath);
    }
  }
  return results;
}

const contentDir = path.resolve(process.cwd(), 'src/content');
const mdFiles = findMarkdownFiles(contentDir);

const articles = mdFiles.map(filepath => {
  const raw = fs.readFileSync(filepath, 'utf-8');
  const fm = parseFrontmatter(raw);
  const filenameSlug = path.basename(filepath, '.md');
  return {
    slug: fm.slug || filenameSlug,
    updated: fm.updated || fm.published || new Date().toISOString().split('T')[0]
  };
});

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
  '/academic-archive',
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

console.log(`Split sitemaps generated: ${articles.length} journal articles → ${publicDir}`);
