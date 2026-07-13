import React from 'react';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';

export default function ArticleCard({ article, index }) {
  return (
    <m.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ height: '100%', scrollSnapAlign: 'start' }}
    >
      <Link to={`/insights/${article.slug}`} className="collection-card">
        <div className="collection-card-image-wrapper">
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
              className="collection-card-image"
              loading="lazy"
            />
          )}
        </div>
        <div className="collection-card-content">
          <div className="collection-card-meta">
            {article.category} • {article.readingTime}
          </div>
          <h3 className="collection-card-title">{article.title}</h3>
          <p className="collection-card-summary">{article.summary}</p>
        </div>
      </Link>
    </m.div>
  );
}
