import careerOsImg from '../assets/careeros-ui.png';
import auraOsImg from '../assets/auraos-ui.png';
import seoImg from '../assets/gsc-ui.png';
import aiSysImg from '../assets/ai-arch-diagram.jpg';
import voltDriveImg from '../assets/ev.png';

// Import the pre-generated search index containing metadata
import searchIndex from './journalSearchIndex.json';

const IMAGE_MAP = {
  'careeros-ui.png': careerOsImg,
  'auraos-ui.png': auraOsImg,
  'gsc-ui.png': seoImg,
  'ai-arch-diagram.jpg': aiSysImg,
  'ev.png': voltDriveImg
};

export const getCoverImage = (imageName) => {
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

// Create a Vite lazy glob for content to allow dynamic importing of bodies without eager payload
const markdownFiles = import.meta.glob('../content/**/*.md', { query: '?raw', import: 'default' });

export const ARTICLES = searchIndex.map(article => {
  const coverImage = getCoverImage(article.coverImage);
  
  // heroImage might be a direct public path (e.g. /images/journal/...) — pass those through directly
  const heroImage = article.heroImage && article.heroImage.startsWith('/') 
    ? article.heroImage 
    : (article.heroImage ? getCoverImage(article.heroImage) : coverImage);
  
  const ogImage = article.ogImage && article.ogImage.startsWith('/')
    ? article.ogImage
    : (article.ogImage ? getCoverImage(article.ogImage) : coverImage);
  
  return {
    ...article,
    coverImage,
    heroImage,
    ogImage
  };
});

// Helper to fetch full markdown body on demand
export const fetchArticleContent = async (slug) => {
  const articleMeta = ARTICLES.find(a => a.slug === slug);
  if (!articleMeta) return null;

  const importFn = markdownFiles[articleMeta.filePath];
  if (!importFn) return null;

  try {
    const rawMarkdown = await importFn();
    // We must strip frontmatter out of rawMarkdown because ArticlePage expects pure markdown body
    const match = rawMarkdown.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
    return match ? match[2] : rawMarkdown;
  } catch (error) {
    console.error(`Failed to load markdown for ${slug}`, error);
    return null;
  }
};

export const getArticleBySlug = (slug) => ARTICLES.find(a => a.slug === slug);
export const getAllArticles = () => ARTICLES;
