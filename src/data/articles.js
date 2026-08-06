import careerOsImg from '../assets/careeros-ui.png';
import auraOsImg from '../assets/auraos-ui.png';
import seoImg from '../assets/gsc-ui.png';
import aiSysImg from '../assets/ai-arch-diagram.jpg';
import voltDriveImg from '../assets/ev.png';

const IMAGE_MAP = {
  'careeros-ui.png': careerOsImg,
  'auraos-ui.png': auraOsImg,
  'gsc-ui.png': seoImg,
  'ai-arch-diagram.jpg': aiSysImg,
  'ev.png': voltDriveImg
};

const getCoverImage = (imageName) => {
  if (!imageName) return aiSysImg;
  // If it's a direct match
  if (IMAGE_MAP[imageName]) return IMAGE_MAP[imageName];
  
  // Fuzzy match (e.g. if frontmatter says "careeros")
  const lowercaseName = imageName.toLowerCase();
  for (const [key, value] of Object.entries(IMAGE_MAP)) {
    if (key.includes(lowercaseName)) return value;
  }
  
  return aiSysImg; // Default fallback
};

const calculateReadingTime = (markdown) => {
  if (!markdown) return '1 min read';
  const wordCount = markdown.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / 200);
  return `${minutes} min read`;
};

// Basic frontmatter parser for browser compatibility
function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { attributes: {}, body: markdown };
  
  const frontmatterStr = match[1];
  const body = match[2];
  const attributes = {};
  
  const lines = frontmatterStr.split('\n');
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
          // parse JSON array if possible
          value = JSON.parse(value);
        } catch(e) {
          // fallback array parsing
          value = value.slice(1, -1).split(',').map(s => s.trim().replace(/^["']|["']$/g, ''));
        }
      }
      attributes[key] = value;
    }
  });
  
  return { attributes, body };
}

// Dynamically import all markdown files in src/content subdirectories
const markdownFiles = import.meta.glob('../content/**/*.md', { query: '?raw', import: 'default', eager: true });

export const ARTICLES = Object.entries(markdownFiles).map(([filepath, rawMarkdown]) => {
  const { attributes, body } = parseFrontmatter(rawMarkdown);
  
  // Extract slug from filename if not explicitly provided
  const filenameSlug = filepath.split('/').pop().replace('.md', '');
  const slug = attributes.slug || filenameSlug;
  
  const coverImage = getCoverImage(attributes.coverImage || attributes.series);
  
  return {
    ...attributes,
    slug,
    title: attributes.title || slug,
    description: attributes.description || 'An engineering deep dive.',
    published: attributes.published || '2026-08-01',
    updated: attributes.updated || attributes.published || '2026-08-01',
    author: attributes.author || 'Bhagavan',
    series: attributes.series || 'Engineering',
    category: attributes.category || 'Architecture',
    tags: attributes.tags || ['Engineering'],
    featured: attributes.featured === true,
    coverImage,
    ogImage: coverImage,
    canonical: attributes.canonical || `https://thenameisbhagavan.in/journal/${slug}`,
    markdownContent: body, // The actual markdown body to render
    get readingTime() { return calculateReadingTime(this.markdownContent); }
  };
});

// Sort articles by published date descending
ARTICLES.sort((a, b) => new Date(b.published) - new Date(a.published));

// If no article is explicitly featured, feature the most recent one
if (ARTICLES.length > 0 && !ARTICLES.some(a => a.featured)) {
  ARTICLES[0].featured = true;
}

export const getArticleBySlug = (slug) => ARTICLES.find(a => a.slug === slug);
export const getAllArticles = () => ARTICLES;
