// Import only the exact approved assets
import careerOsImg from '../assets/careeros-ui.png';
import auraOsImg from '../assets/auraos-ui.png';
import seoImg from '../assets/gsc-ui.png';
import aiSysImg from '../assets/ai-arch-diagram.jpg';

// Import raw markdown content
import careerosMd from '../content/careeros.md?raw';
import auraosMd from '../content/auraos.md?raw';
import portfolioSeoMd from '../content/portfolio-seo.md?raw';
import contextSystemsMd from '../content/context-systems.md?raw';
import reactFlaskAiMd from '../content/react-flask-ai.md?raw';
import engineeringJourneyMd from '../content/engineering-journey.md?raw';

export const ARTICLES = [
  {
    slug: 'building-auraos-personal-intelligence',
    title: 'Building AuraOS: A Personal Intelligence Operating System',
    subtitle: 'From concept to production: Engineering an autonomous assistant.',
    summary: 'Exploring the technical challenges of building AuraOS, focusing on context retention, autonomous agents, and fluid UI interactions.',
    category: 'AuraOS',
    tags: ['Generative AI', 'RAG', 'Machine Learning', 'React'],
    author: 'Bhagavan',
    publishedDate: '2026-05-12',
    updatedDate: '2026-05-12',
    readingTime: '12 min read',
    layoutVariant: 'hero', // The massive Apple Keynote feature
    assetType: 'image-ui',
    heroImage: auraOsImg,
    seoTitle: 'Building AuraOS: Personal Intelligence OS | Bhagavan',
    seoDescription: 'An engineering deep dive into the creation of AuraOS and intelligent agent orchestration.',
    canonicalUrl: 'https://thenameisbhagavan.vercel.app/insights/building-auraos-personal-intelligence',
    markdownContent: auraosMd
  },
  {
    slug: 'how-i-built-careeros',
    title: 'How I Built CareerOS',
    subtitle: 'Architecting an AI-powered operating system for career intelligence.',
    summary: 'A deep dive into the system design, frontend architecture, and AI integrations that power CareerOS, an intelligent platform for job seekers.',
    category: 'CareerOS',
    tags: ['React', 'System Design', 'AI Agents', 'OpenAI'],
    author: 'Bhagavan',
    publishedDate: '2026-06-15',
    updatedDate: '2026-06-20',
    readingTime: '8 min read',
    layoutVariant: 'split', // 50/50 Editorial Split
    assetType: 'image-ui',
    heroImage: careerOsImg,
    seoTitle: 'How I Built CareerOS | AI Engineering Insights',
    seoDescription: 'Discover the architecture, engineering decisions, and AI integration strategies behind CareerOS.',
    canonicalUrl: 'https://thenameisbhagavan.vercel.app/insights/how-i-built-careeros',
    markdownContent: careerosMd
  },
  {
    slug: 'designing-ai-systems-remember-context',
    title: 'Designing AI Systems That Remember Context',
    subtitle: 'Implementing scalable RAG architectures and vector databases.',
    summary: 'How to build production-ready memory systems for LLMs using Retrieval-Augmented Generation (RAG) and long-term context windows.',
    category: 'AI Engineering',
    tags: ['RAG', 'Generative AI', 'Python', 'Vector DB'],
    author: 'Bhagavan',
    publishedDate: '2026-04-20',
    updatedDate: '2026-04-25',
    readingTime: '10 min read',
    layoutVariant: 'split', // 2-column editorial layout
    assetType: 'image-diagram',
    heroImage: aiSysImg,
    seoTitle: 'Designing AI Systems with Context Memory (RAG)',
    seoDescription: 'Technical breakdown of implementing RAG and context retention in generative AI systems.',
    canonicalUrl: 'https://thenameisbhagavan.vercel.app/insights/designing-ai-systems-remember-context',
    markdownContent: contextSystemsMd
  },
  {
    slug: 'optimizing-portfolio-google-search',
    title: 'How I Optimized My Portfolio for Google Search',
    subtitle: 'Technical SEO strategies for modern Single Page Applications (SPAs).',
    summary: 'A comprehensive guide on implementing JSON-LD schemas, dynamic OpenGraph routing, and canonical structures in a React + Vite ecosystem.',
    category: 'Search Engineering',
    tags: ['SEO', 'React', 'Performance', 'Vite'],
    author: 'Bhagavan',
    publishedDate: '2026-07-02',
    updatedDate: '2026-07-10',
    readingTime: '6 min read',
    layoutVariant: 'split', // 2-column editorial layout
    assetType: 'image-browser',
    heroImage: seoImg,
    seoTitle: 'React SEO Optimization Strategies | Bhagavan Insights',
    seoDescription: 'Learn how to optimize a React Vite SPA for Google Search using JSON-LD, semantic HTML, and metadata.',
    canonicalUrl: 'https://thenameisbhagavan.vercel.app/insights/optimizing-portfolio-google-search',
    markdownContent: portfolioSeoMd
  },
  {
    slug: 'building-production-ai-react-flask',
    title: 'Building Production AI Applications with React + Flask',
    subtitle: 'Bridging the gap between intelligent backends and fluid frontends.',
    summary: 'A blueprint for architecting full-stack AI applications. Learn how to connect a high-performance React UI with a Python Flask machine learning backend.',
    category: 'Architecture',
    tags: ['React', 'Flask', 'Python', 'Machine Learning'],
    author: 'Bhagavan',
    publishedDate: '2026-03-05',
    updatedDate: '2026-03-05',
    readingTime: '7 min read',
    layoutVariant: 'split', 
    assetType: 'NeuralNetwork', // Maps to custom SVG/CSS visualizer
    seoTitle: 'React and Flask Full Stack AI Applications',
    seoDescription: 'Guide to building full-stack AI platforms using React for the frontend and Flask for the machine learning backend.',
    canonicalUrl: 'https://thenameisbhagavan.vercel.app/insights/building-production-ai-react-flask',
    markdownContent: reactFlaskAiMd
  },
  {
    slug: 'from-student-to-ai-engineer',
    title: 'From Student to AI Engineer',
    subtitle: 'Lessons learned transitioning from academic theory to production code.',
    summary: 'A reflection on my path into AI engineering, highlighting the mindset shifts, critical technologies, and projects that bridged the gap.',
    category: 'System Design',
    tags: ['Personal Branding', 'Career', 'Learning'],
    author: 'Bhagavan',
    publishedDate: '2026-01-15',
    updatedDate: '2026-02-01',
    readingTime: '5 min read',
    layoutVariant: 'editorial', // Massive text-heavy editorial square
    assetType: 'LiquidGlass', // Maps to custom liquid glass gradient
    seoTitle: 'My Journey: From Student to AI Engineer | Bhagavan',
    seoDescription: 'Lessons learned, technologies mastered, and the mindset shift required to become a production AI engineer.',
    canonicalUrl: 'https://thenameisbhagavan.vercel.app/insights/from-student-to-ai-engineer',
    markdownContent: engineeringJourneyMd
  }
];

export const getArticleBySlug = (slug) => ARTICLES.find(a => a.slug === slug);
export const getAllArticles = () => ARTICLES;
