import fs from 'fs';
import path from 'path';

// ── Parse frontmatter from markdown files directly ──
// The previous approach parsed articles.js as text with regex,
// but articles.js uses import.meta.glob (Vite-only) and doesn't
// contain hardcoded slugs. This reads the actual markdown files.

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const attrs = {};
  match[1].split('\n').forEach(line => {
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
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      results = results.concat(findMarkdownFiles(fullPath));
    } else if (item.name.endsWith('.md')) {
      results.push(fullPath);
    }
  }
  return results;
}

function escapeXml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

const contentDir = path.resolve(process.cwd(), 'src/content');
const mdFiles = findMarkdownFiles(contentDir);

const articles = mdFiles.map(filepath => {
  const raw = fs.readFileSync(filepath, 'utf-8');
  const fm = parseFrontmatter(raw);
  const filenameSlug = path.basename(filepath, '.md');
  return {
    slug: fm.slug || filenameSlug,
    title: fm.title || filenameSlug,
    description: fm.description || '',
    published: fm.published || new Date().toISOString().split('T')[0]
  };
}).sort((a, b) => new Date(b.published) - new Date(a.published));

const hostname = 'https://thenameisbhagavan.in';

const rssItems = articles.map(article => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <description><![CDATA[${article.description}]]></description>
      <link>${hostname}/journal/${article.slug}</link>
      <guid isPermaLink="true">${hostname}/journal/${article.slug}</guid>
      <pubDate>${new Date(article.published).toUTCString()}</pubDate>
    </item>`).join('');

const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Engineering Journal - TheNameIsBhagavan</title>
    <description>Building production AI systems. Architecture. Research. Systems. Engineering.</description>
    <link>${hostname}/journal</link>
    <atom:link href="${hostname}/rss.xml" rel="self" type="application/rss+xml" />
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${rssItems}
  </channel>
</rss>`;

const publicPath = path.resolve(process.cwd(), 'public', 'rss.xml');
fs.writeFileSync(publicPath, rssFeed, 'utf8');

console.log(`RSS Feed generated: ${articles.length} articles → ${publicPath}`);
