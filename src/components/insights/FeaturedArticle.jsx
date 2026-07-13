import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';

export default function FeaturedArticle({ article }) {
  if (!article) return null;

  return (
    <m.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="featured-section"
    >
      <Link to={`/insights/${article.slug}`} className="featured-keynote-card">
        <div className="featured-keynote-content">
          <div className="featured-keynote-meta">
            {article.category} • {article.readingTime}
          </div>
          <h2 className="featured-keynote-title">{article.title}</h2>
          <p className="featured-keynote-summary">{article.summary}</p>
          <div className="featured-keynote-btn">
            Read Story
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33331 8H12.6666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 3.33331L12.6667 7.99998L8 12.6666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="featured-keynote-image-wrapper">
          {article.isGradient ? (
            <div className={`abstract-glass-bg ${article.gradientVariant}`}>
              <div className="abstract-orb-1" />
              <div className="abstract-orb-2" />
              <div className="glass-overlay" />
            </div>
          ) : (
            <img 
              src={article.heroImage} 
              alt={article.title} 
              className="featured-keynote-image"
              loading="lazy"
            />
          )}
        </div>
      </Link>
    </m.div>
  );
}
