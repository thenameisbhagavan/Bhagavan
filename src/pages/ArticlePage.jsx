import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import { m, useScroll, useSpring } from 'framer-motion';
import { getArticleBySlug, getAllArticles, fetchArticleContent } from '../data/articles';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { TechnicalCallout, MetricCard, MetricGrid, SystemStatus, CodeBlock, ComparisonTable, RelatedArticles } from '../components/journal/ArticleComponents';
import { ArchitectureDiagram, DecisionMatrix, Timeline } from '../components/journal/Diagrams';
import 'highlight.js/styles/atom-one-dark.css';
import '../styles/ArticlePage.css';
import '../styles/ArticleComponents.css';

// ─── Motion ───────────────────────────────────────────────────────────────────
const appleEase = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: appleEase } },
};

// Custom sanitize schema to allow our custom JSX-like component tags
const customSanitizeSchema = {
  ...defaultSchema,
  tagNames: [
    ...defaultSchema.tagNames,
    'technical-callout', 'metric-card', 'metric-grid', 'system-status',
    'code-block', 'comparison-table', 'architecture-diagram', 
    'decision-matrix', 'timeline-diagram', 'node', 'quadrant'
  ],
  attributes: {
    ...defaultSchema.attributes,
    '*': ['className', 'style', 'id'],
    'technical-callout': ['type', 'title'],
    'architecture-diagram': ['direction', 'data'],
    'node': ['label', 'subtext', 'type'],
    'metric-card': ['label', 'value', 'suffix', 'trend'],
    'system-status': ['status', 'version'],
    'code-block': ['language', 'title', 'code'],
    'decision-matrix': ['data'],
    'quadrant': ['title', 'desc'],
    'timeline-diagram': ['data'],
    'code': ['className', 'class'],
    'pre': ['className', 'class'],
    'span': ['className', 'class', 'style']
  }
};

export default function ArticlePage() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);
  const allArticles = getAllArticles();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState('');
  const [markdownContent, setMarkdownContent] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch lazy markdown content
  useEffect(() => {
    if (!article) return;
    let isMounted = true;
    setLoading(true);
    
    fetchArticleContent(slug).then(content => {
      if (isMounted) {
        setMarkdownContent(content || '');
        setLoading(false);
      }
    });
    
    return () => { isMounted = false; };
  }, [article, slug]);

  // Handle heading intersection and scroll restoration
  useEffect(() => {
    if (!article || loading) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    const timer = setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }), 50);

    const elements = Array.from(document.querySelectorAll('.doc-content h2, .doc-content h3'));
    const parsedHeadings = elements.map(elem => {
      let id = elem.id;
      if (!id) {
        id = elem.innerText.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        elem.id = id;
      }
      return { id, text: elem.innerText, level: elem.tagName };
    });
    setHeadings(parsedHeadings);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, { rootMargin: '0px 0px -80% 0px' });

    elements.forEach(elem => observer.observe(elem));
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [article, slug, loading]);

  if (!article) {
    return (
      <div className="article-doc-container not-found">
        <h2>Article not found</h2>
        <Link to="/journal">Return to Engineering Journal</Link>
      </div>
    );
  }

  // Find next articles for the "More from the Journal" footer
  const recentArticles = allArticles
    .filter(a => a.slug !== article.slug)
    .sort((a,b) => new Date(b.published) - new Date(a.published))
    .slice(0, 3);

  return (
    <div className="article-doc-container">
      <SEO 
        title={article.seoTitle}
        description={article.seoDescription}
        image={article.ogImage || article.heroImage}
        type="article"
        article={article}
      />

      <m.div className="reading-progress-bar" style={{ scaleX }}>
        <div className="reading-progress-indicator" />
      </m.div>

      <div className="doc-layout">
        
        {/* MAIN ARTICLE CONTENT */}
        <main className="doc-main">
          
          <m.nav className="doc-breadcrumbs" initial="hidden" animate="visible" variants={fadeUp}>
            <Link to="/journal">JOURNAL</Link>
            <span>/</span>
            <span className="breadcrumb-current">{article.category}</span>
          </m.nav>

          <header className="doc-article-hero">
            <m.div className="doc-article-supra" initial="hidden" animate="visible" variants={fadeUp}>
              <span className="das-series">{article.series}</span>
              <span className="das-type">{article.articleType ? article.articleType.replace(/-/g, ' ').toUpperCase() : 'ARTICLE'}</span>
            </m.div>

            <m.h1 className="doc-article-title" initial="hidden" animate="visible" variants={fadeUp}>
              {article.title}
            </m.h1>

            {article.excerpt && (
              <m.p className="doc-article-excerpt" initial="hidden" animate="visible" variants={fadeUp}>
                {article.excerpt}
              </m.p>
            )}
            
            <m.div className="doc-article-meta" initial="hidden" animate="visible" variants={fadeUp}>
              <div className="dam-item">
                <span className="dam-label">PUBLISHED</span>
                <span className="dam-value">{new Date(article.published).toLocaleDateString('en-US', { month: 'long', year: 'numeric', day: 'numeric' })}</span>
              </div>
              <div className="dam-item">
                <span className="dam-label">READ TIME</span>
                <span className="dam-value">{article.readTime}</span>
              </div>
              <div className="dam-item">
                <span className="dam-label">STATUS</span>
                <span className="dam-value"><SystemStatus status={article.status} /></span>
              </div>
            </m.div>
          </header>

          {article.heroImage && (
            <m.div className="doc-hero-image-wrapper" initial="hidden" animate="visible" variants={fadeUp}>
              <img src={article.heroImage} alt={article.heroAlt} className="doc-hero-image" loading="eager" fetchpriority="high" />
            </m.div>
          )}

          <m.article className="doc-content" initial="hidden" animate="visible" variants={fadeUp}>
            {loading ? (
              <div className="doc-loading">Loading article content...</div>
            ) : (
              <>
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw, [rehypeSanitize, customSanitizeSchema], [rehypeHighlight, { ignoreMissing: true }]]}
                  components={{
                    'technical-callout': TechnicalCallout,
                    'metric-card': MetricCard,
                    'metric-grid': MetricGrid,
                    'system-status': SystemStatus,
                    'code-block': CodeBlock,
                    'comparison-table': ComparisonTable,
                    'architecture-diagram': ArchitectureDiagram,
                    'decision-matrix': DecisionMatrix,
                    'timeline-diagram': Timeline
                  }}
                >
                  {markdownContent}
                </ReactMarkdown>
                
                {article.relatedArticles && article.relatedArticles.length > 0 && (
                  <RelatedArticles articles={article.relatedArticles.map(slug => allArticles.find(a => a.slug === slug)).filter(Boolean)} />
                )}
              </>
            )}
          </m.article>

          {/* MORE FROM JOURNAL */}
          <footer className="doc-footer">
            <div className="doc-footer-label">MORE FROM THE JOURNAL</div>
            <div className="jn-list">
              {recentArticles.map((relArticle, i) => (
                <Link key={i} to={`/journal/${relArticle.slug}`} className="jn-row">
                  <span className="jn-num">0{i + 1}</span>
                  <span className="jn-title">{relArticle.title}</span>
                  <span className="jn-cat">{relArticle.category}</span>
                  <span className="jn-time">{relArticle.readTime || '5 min read'}</span>
                  <span className="jn-date">{new Date(relArticle.published).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }).toUpperCase()}</span>
                  <ArrowRight size={16} className="jn-arrow" />
                </Link>
              ))}
            </div>
          </footer>

        </main>

        {/* RIGHT SIDEBAR (STICKY TOC - DESKTOP) */}
        <aside className="doc-sidebar">
          <div className="doc-sidebar-inner">
            <h4 className="doc-sidebar-title">INDEX</h4>
            <nav className="doc-sidebar-nav">
              {headings.map(h => (
                <a 
                  key={h.id}
                  href={`#${h.id}`}
                  className={`doc-sidebar-link ${activeId === h.id ? 'active' : ''} level-${h.level.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {h.text}
                </a>
              ))}
            </nav>
          </div>
        </aside>

      </div>
    </div>
  );
}

