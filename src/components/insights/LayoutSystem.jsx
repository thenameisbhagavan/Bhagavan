import React from 'react';
import { Link } from 'react-router-dom';
import { m, useScroll, useTransform } from 'framer-motion';
import { RenderAsset } from './EditorialAssets';

export const HeroLayout = ({ article }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <div className="variant-hero">
      <m.div className="variant-hero-content" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}>
        <div className="variant-hero-meta">{article.category} • {article.readingTime}</div>
        <h2 className="variant-hero-title">{article.title}</h2>
        <p className="variant-hero-summary">{article.summary}</p>
        <Link to={`/insights/${article.slug}`} className="btn-read-story">Read Story</Link>
      </m.div>
      
      <m.div className="variant-hero-visual" style={{ y, rotateX }} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }} viewport={{ once: true }}>
        <Link to={`/insights/${article.slug}`} style={{ width: '100%', display: 'block' }}>
          <RenderAsset article={article} />
        </Link>
      </m.div>
    </div>
  );
};

export const SplitLayout = ({ article }) => {
  return (
    <m.div className="variant-split" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}>
      <div className="variant-split-content">
        <h3 className="variant-split-title">{article.title}</h3>
        <p className="variant-split-summary">{article.summary}</p>
        <Link to={`/insights/${article.slug}`} className="btn-read-story" style={{ background: '#333336', color: '#fff', border: '1px solid rgba(255,255,255,0.1)', boxShadow: 'none' }}>Read Story</Link>
      </div>
      <Link to={`/insights/${article.slug}`} className="variant-split-visual">
        <RenderAsset article={article} />
      </Link>
    </m.div>
  );
};

export const LandscapeLayout = ({ article }) => {
  return (
    <m.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}>
      <Link to={`/insights/${article.slug}`} className="variant-landscape">
        <div className="variant-landscape-visual">
          <RenderAsset article={article} />
        </div>
        <div className="variant-landscape-overlay"></div>
        <div className="variant-landscape-content">
          <h3 className="variant-landscape-title">{article.title}</h3>
          <p className="variant-hero-summary" style={{ color: '#fff', marginBottom: 0 }}>{article.summary}</p>
        </div>
      </Link>
    </m.div>
  );
};

export const PortraitLayout = ({ article }) => {
  return (
    <m.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }} style={{ height: '100%' }}>
      <Link to={`/insights/${article.slug}`} className="variant-portrait">
        <div className="variant-portrait-visual">
          <RenderAsset article={article} />
        </div>
        <div className="variant-portrait-content">
          <h4 className="variant-portrait-title">{article.title}</h4>
          <p style={{ color: '#86868b', lineHeight: 1.6 }}>{article.summary}</p>
        </div>
      </Link>
    </m.div>
  );
};

export const EditorialLayout = ({ article }) => {
  return (
    <m.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}>
      <Link to={`/insights/${article.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="variant-editorial">
          <RenderAsset article={article} />
          <div className="variant-editorial-content">
            <h3 className="variant-editorial-title">{article.title}</h3>
            <p className="variant-hero-summary" style={{ marginBottom: 0 }}>{article.summary}</p>
          </div>
        </div>
      </Link>
    </m.div>
  );
};

export const ArticleLayoutMapper = ({ article }) => {
  switch (article.layoutVariant) {
    case 'hero': return <HeroLayout article={article} />;
    case 'split': return <SplitLayout article={article} />;
    case 'landscape': return <LandscapeLayout article={article} />;
    case 'portrait': return <PortraitLayout article={article} />;
    case 'editorial': return <EditorialLayout article={article} />;
    default: return <PortraitLayout article={article} />;
  }
};
