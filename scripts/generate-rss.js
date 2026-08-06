import fs from 'fs';
import path from 'path';

const articlesContent = fs.readFileSync(path.resolve(process.cwd(), 'src/data/articles.js'), 'utf-8');

const slugRegex = /slug:\s*'([^']+)'/g;
const titleRegex = /title:\s*'([^']+)'/g;
const descRegex = /description:\s*'([^']+)'/g;
const pubRegex = /published:\s*'([^']+)'/g;

let match;
const slugs = [];
const titles = [];
const descs = [];
const pubs = [];

while ((match = slugRegex.exec(articlesContent)) !== null) slugs.push(match[1]);
while ((match = titleRegex.exec(articlesContent)) !== null) titles.push(match[1]);
while ((match = descRegex.exec(articlesContent)) !== null) descs.push(match[1]);
while ((match = pubRegex.exec(articlesContent)) !== null) pubs.push(match[1]);

const articles = slugs.map((slug, i) => ({
  slug,
  title: titles[i],
  description: descs[i],
  published: pubs[i] || new Date().toISOString()
}));

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

console.log('RSS Feed generated at', publicPath);
