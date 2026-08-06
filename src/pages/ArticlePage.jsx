import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { m, useScroll, useSpring } from 'framer-motion';
import { getArticleBySlug, getAllArticles } from '../data/articles';
import { ChevronRight, ChevronLeft, ArrowRight, Menu } from 'lucide-react';
import SEO from '../components/SEO';
import 'highlight.js/styles/atom-one-dark.css';
import '../styles/EngineeringJournal.css';

export default function ArticlePage() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);
  const allArticles = getAllArticles();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState('');
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    if (!article) return;
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
    return () => observer.disconnect();
  }, [article, slug]);

  if (!article) {
    return (
      <div className="article-doc-container not-found">
        <h2>Article not found</h2>
        <Link to="/journal">Return to Engineering Journal</Link>
      </div>
    );
  }

  // Find previous and next articles in the series or in general
  const seriesArticles = article.series 
    ? allArticles.filter(a => a.series === article.series).sort((a,b) => new Date(a.published) - new Date(b.published))
    : allArticles.sort((a,b) => new Date(b.published) - new Date(a.published));

  const currentIndex = seriesArticles.findIndex(a => a.slug === article.slug);
  const prevArticle = currentIndex > 0 ? seriesArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < seriesArticles.length - 1 ? seriesArticles[currentIndex + 1] : null;

  return (
    <div className="article-doc-container">
      <SEO 
        title={`${article.title} - Engineering Journal`}
        description={article.description}
        image={article.ogImage || article.coverImage}
        type="article"
        article={article}
      />

      <m.div className="reading-progress-bar" style={{ scaleX }}>
        <div className="reading-progress-indicator" />
      </m.div>

      <div className="doc-layout">
        
        {/* LEFT SIDEBAR (STICKY TOC - DESKTOP) */}
        <aside className={`doc-sidebar ${tocOpen ? 'open' : ''}`}>
          <div className="doc-sidebar-inner">
            <h4 className="doc-sidebar-title">On This Page</h4>
            <nav className="doc-sidebar-nav">
              {headings.map(h => (
                <a 
                  key={h.id}
                  href={`#${h.id}`}
                  className={`doc-sidebar-link ${activeId === h.id ? 'active' : ''} level-${h.level.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth' });
                    setTocOpen(false);
                  }}
                >
                  {h.text}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* MOBILE TOC TOGGLE */}
        <button className="mobile-toc-toggle" onClick={() => setTocOpen(!tocOpen)}>
          <Menu size={20} />
          <span>Contents</span>
        </button>

        {/* MAIN ARTICLE CONTENT */}
        <main className="doc-main">
          
          {/* BREADCRUMBS */}
          <nav className="doc-breadcrumbs">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <Link to="/journal">Journal</Link>
            <ChevronRight size={14} />
            {article.series && (
              <>
                <span className="breadcrumb-series">{article.series}</span>
                <ChevronRight size={14} />
              </>
            )}
            <span className="breadcrumb-current">{article.title}</span>
          </nav>

          {/* ARTICLE HERO */}
          <header className="doc-article-hero">
            <h1 className="doc-article-title">{article.title}</h1>
            <p className="doc-article-desc">{article.description}</p>
            
            <div className="doc-article-stats">
              <div className="stat-column">
                <span className="stat-label">Views</span>
                <span className="stat-value">--</span>
              </div>
              <div className="stat-column">
                <span className="stat-label">Reading Time</span>
                <span className="stat-value">{article.readingTime}</span>
              </div>
              <div className="stat-column">
                <span className="stat-label">Published</span>
                <span className="stat-value">{new Date(article.published).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="stat-column">
                <span className="stat-label">Updated</span>
                <span className="stat-value">{new Date(article.published).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="stat-column">
                <span className="stat-label">Version</span>
                <span className="stat-value">1.0</span>
              </div>
            </div>
            
            <div className="doc-article-actions">
              <button className="action-btn" onClick={() => navigator.clipboard.writeText(window.location.href)}>Copy Link</button>
              <button className="action-btn" onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`, '_blank')}>LinkedIn</button>
              <button className="action-btn" onClick={() => window.open(`https://twitter.com/intent/tweet?url=${window.location.href}&text=${article.title}`, '_blank')}>X</button>
            </div>
            
            <div className="doc-article-cover">
              <img src={article.coverImage} alt={article.title} />
            </div>
          </header>

          {/* MARKDOWN CONTENT */}
          <article className="doc-content">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]} 
              rehypePlugins={[rehypeHighlight]}
              components={{
                a: ({ href, children, ...props }) => {
                  const isExternal = href && (href.startsWith('http') || href.startsWith('//'));
                  if (isExternal) {
                    return (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="external-link"
                        {...props}
                      >
                        {children}
                      </a>
                    );
                  }
                  return <a href={href} {...props}>{children}</a>;
                },
                img: ({ src, alt, ...props }) => (
                  <figure className="doc-image-figure">
                    <img src={src} alt={alt} loading="lazy" {...props} />
                    {alt && <figcaption>{alt}</figcaption>}
                  </figure>
                )
              }}
            >
              {article.markdownContent}
            </ReactMarkdown>
          </article>

          {/* ARTICLE FOOTER / NAVIGATION */}
          <footer className="doc-article-footer">
            
            <div className="article-completion">
              <div className="completion-status">✓ Finished Reading</div>
              <div className="article-feedback">
                <span>Was this article helpful?</span>
                <button className="feedback-btn">👍</button>
                <button className="feedback-btn">👎</button>
              </div>
            </div>
            
            <hr className="doc-footer-divider" />
            
            {article.series && (
              <div className="series-progress">
                <span className="series-label">Part {currentIndex + 1} of {seriesArticles.length} in <strong>{article.series}</strong></span>
                <div className="series-bar">
                  {seriesArticles.map((_, i) => (
                    <div key={i} className={`series-bar-segment ${i <= currentIndex ? 'completed' : ''}`}></div>
                  ))}
                </div>
              </div>
            )}

            <div className="article-navigation">
              {prevArticle ? (
                <Link to={`/journal/${prevArticle.slug}`} className="nav-card prev-card">
                  <span className="nav-label"><ChevronLeft size={16} /> Previous</span>
                  <span className="nav-title">{prevArticle.title}</span>
                </Link>
              ) : <div className="nav-card empty"></div>}

              {nextArticle ? (
                <Link to={`/journal/${nextArticle.slug}`} className="nav-card next-card">
                  <span className="nav-label">Next <ArrowRight size={16} /></span>
                  <span className="nav-title">{nextArticle.title}</span>
                </Link>
              ) : <div className="nav-card empty"></div>}
            </div>
          </footer>

        </main>
      </div>
    </div>
  );
}
