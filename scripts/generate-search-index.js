import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.resolve(__dirname, '../src/content');
const outputFilePath = path.resolve(__dirname, '../src/data/journalSearchIndex.json');

const coreDirs = ["careeros", "auraos", "veritas", "voltdrive", "portfolio", "journey", "vision", "future"];

const calculateReadingTime = (markdown) => {
  if (!markdown) return '1 min read';
  const wordCount = markdown.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / 200);
  return `${minutes} min read`;
};

function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { attributes: {}, body: markdown };
  
  const frontmatterStr = match[1];
  const body = match[2];
  const attributes = {};
  
  const lines = frontmatterStr.split(/\r?\n/);
  lines.forEach(line => {
    const colonIdx = line.indexOf(':');
    if (colonIdx > -1) {
      const key = line.slice(0, colonIdx).trim();
      let value = line.slice(colonIdx + 1).trim();
      
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      } else if (value.startsWith("'") && value.endsWith("'")) {
        value = value.slice(1, -1);
      } else if (value === 'true') {
        value = true;
      } else if (value === 'false') {
        value = false;
      } else if (value.startsWith('[') && value.endsWith(']')) {
        try {
          value = JSON.parse(value.replace(/'/g, '"')); // Simple fix for JSON parsing if singles quotes used
        } catch(e) {
          value = value.slice(1, -1).split(',').map(s => s.trim().replace(/^["']|["']$/g, ''));
        }
      }
      attributes[key] = value;
    }
  });
  
  return { attributes, body };
}

const articles = [];

for (const dir of coreDirs) {
  const dirPath = path.join(contentDir, dir);
  if (!fs.existsSync(dirPath)) continue;

  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const rawMarkdown = fs.readFileSync(filePath, 'utf-8');
    
    const { attributes, body } = parseFrontmatter(rawMarkdown);
    const filenameSlug = file.replace('.md', '');
    const slug = attributes.slug || filenameSlug;
    
    // Strip code blocks and HTML tags to get pure searchable text to keep index small
    const strippedText = body
      .replace(/```[\s\S]*?```/g, '') // Remove code blocks
      .replace(/<[^>]*>?/gm, '') // Remove HTML tags
      .replace(/[^\w\s.,?!-]/g, '') // Keep basic punctuation and words
      .replace(/\s+/g, ' ') // Collapse whitespace
      .slice(0, 3000); // Limit searchable text size
      
    articles.push({
      slug,
      title: attributes.title || slug,
      excerpt: attributes.excerpt || attributes.description || '',
      description: attributes.description || attributes.excerpt || '',
      seoTitle: attributes.seoTitle || attributes.title || slug,
      seoDescription: attributes.seoDescription || attributes.excerpt || attributes.description || '',
      published: attributes.published || attributes.publishedAt || '2026-08-01',
      updated: attributes.updated || attributes.updatedAt || attributes.published || attributes.publishedAt || '2026-08-01',
      author: attributes.author || 'TheNameIsBhagavan',
      series: attributes.series || 'Engineering',
      seriesOrder: parseInt(attributes.seriesOrder) || 0,
      category: attributes.category || 'Architecture',
      articleType: attributes.articleType || 'technical-deep-dive',
      status: attributes.status || 'Implemented',
      tags: Array.isArray(attributes.tags) ? attributes.tags : ['Engineering'],
      relatedArticles: Array.isArray(attributes.relatedArticles) ? attributes.relatedArticles : [],
      featured: attributes.featured === true,
      coverImage: attributes.coverImage || attributes.series || '',
      heroImage: attributes.heroImage || attributes.coverImage || attributes.series || '',
      heroAlt: attributes.heroAlt || `${attributes.title || slug} hero visual`,
      ogImage: attributes.ogImage || attributes.heroImage || attributes.coverImage || attributes.series || '',
      canonical: attributes.canonical || `https://thenameisbhagavan.in/journal/${slug}`,
      readTime: attributes.readTime || calculateReadingTime(body),
      filePath: `../content/${dir}/${file}`, // Path for dynamic import
      searchableText: strippedText
    });
  }
}

// Sort by published descending
articles.sort((a, b) => new Date(b.published) - new Date(a.published));
if (articles.length > 0 && !articles.some(a => a.featured)) {
  articles[0].featured = true;
}

fs.writeFileSync(outputFilePath, JSON.stringify(articles, null, 2));
console.log(`Successfully built search index at ${outputFilePath} with ${articles.length} articles.`);
