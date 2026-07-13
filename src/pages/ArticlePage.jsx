import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { m, useScroll, useSpring } from 'framer-motion';
import { getArticleBySlug } from '../data/articles';
import { RenderAsset } from '../components/insights/EditorialAssets';
import 'highlight.js/styles/atom-one-dark.css'; // Apple-style dark code blocks

export default function ArticlePage() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (!article) return;
    window.scrollTo(0, 0);

    // Generate TOC
    const elements = Array.from(document.querySelectorAll('.doc-content h2, .doc-content h3'));
    const parsedHeadings = elements.map(elem => {
      const id = elem.innerText.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      elem.id = id;
      return { id, text: elem.innerText, level: elem.tagName };
    });
    setHeadings(parsedHeadings);

    // Intersection Observer for TOC
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
      <div className="article-doc-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h2>Article not found</h2>
        <Link to="/insights">Return to Insights</Link>
      </div>
    );
  }

  return (
    <div className="article-doc-container">
      <Helmet>
        <title>{article.seoTitle}</title>
        <meta name="description" content={article.seoDescription} />
        <link rel="canonical" href={article.canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={article.seoTitle} />
        <meta property="og:description" content={article.seoDescription} />
        <meta property="og:url" content={article.canonicalUrl} />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.seoTitle,
            "description": article.seoDescription,
            "author": {
              "@type": "Person",
              "name": article.author,
              "url": "https://thenameisbhagavan.vercel.app"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Bhagavan",
              "logo": {
                "@type": "ImageObject",
                "url": "https://thenameisbhagavan.vercel.app/logo.png"
              }
            },
            "datePublished": article.publishedDate,
            "dateModified": article.updatedDate
          })}
        </script>
      </Helmet>

      {/* Reading Progress */}
      <m.div className="reading-progress-bar" style={{ scaleX }}>
        <div className="reading-progress-indicator" style={{ background: '#0066cc' }} />
      </m.div>

      {/* Cinematic Hero */}
      <section className="doc-hero">
        <m.div 
          className="doc-hero-content"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="variant-hero-meta" style={{ marginBottom: '1rem' }}>
            {article.category} • {article.readingTime}
          </div>
          <h1 className="doc-hero-title">{article.title}</h1>
        </m.div>
        
        <m.div 
          className="doc-hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <RenderAsset article={article} />
        </m.div>
      </section>

      {/* Body & TOC */}
      <div className="doc-body-wrapper">
        <main className="doc-content">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]} 
            rehypePlugins={[rehypeHighlight]}
          >
            {article.markdownContent}
          </ReactMarkdown>
        </main>
        
        <aside className="doc-toc">
          <h4 className="doc-toc-title">On This Page</h4>
          <nav>
            {headings.map(h => (
              <a 
                key={h.id}
                href={`#${h.id}`}
                className={`doc-toc-link ${activeId === h.id ? 'active' : ''}`}
                style={{ paddingLeft: h.level === 'H3' ? '1rem' : '0' }}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {h.text}
              </a>
            ))}
          </nav>
        </aside>
      </div>
    </div>
  );
}
