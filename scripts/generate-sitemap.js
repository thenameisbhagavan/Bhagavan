import fs from 'fs';
import path from 'path';

const routes = [
  '/',
  '/overview',
  '/work',
  '/experience',
  '/vision',
  '/connect',
  '/innovation',
  '/credentials',
  '/ecosystem',
  '/resume',
  '/insights'
];

const hostname = 'https://thenameisbhagavan.vercel.app';
const lastmod = new Date().toISOString().split('T')[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${hostname}${route}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' || route === '/overview' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

const publicPath = path.resolve(process.cwd(), 'public', 'sitemap.xml');
fs.writeFileSync(publicPath, sitemap, 'utf8');

console.log('Sitemap generated at', publicPath);
