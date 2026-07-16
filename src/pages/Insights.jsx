import React from 'react';
import { Helmet } from 'react-helmet-async';
import { m, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Youtube } from 'lucide-react';
import { getAllArticles } from '../data/articles';
import { ArticleLayoutMapper } from '../components/insights/LayoutSystem';
import SectionDivider from "../components/SectionDivider";
import BrandSignature from "../components/BrandSignature";
import { socialLinks } from '../constants/socialLinks';
import '../styles/Insights.css';

export default function Insights() {
  const articles = getAllArticles();

  // We will group the portraits to render them inside a CSS grid
  const renderEditorialFlow = () => {
    const flow = [];
    let portraitBuffer = [];
    
    articles.forEach((article) => {
      if (article.layoutVariant === 'portrait') {
        portraitBuffer.push(article);
        if (portraitBuffer.length === 2) {
          flow.push(
            <div className="portrait-group" key={`portrait-group-${article.slug}`}>
              <ArticleLayoutMapper article={portraitBuffer[0]} />
              <ArticleLayoutMapper article={portraitBuffer[1]} />
            </div>
          );
          portraitBuffer = [];
        }
      } else {
        // If there's an odd portrait left over, just render it before the next variant
        if (portraitBuffer.length > 0) {
          flow.push(
            <div className="portrait-group" key={`portrait-group-odd`}>
              <ArticleLayoutMapper article={portraitBuffer[0]} />
            </div>
          );
          portraitBuffer = [];
        }
        flow.push(<ArticleLayoutMapper key={article.slug} article={article} />);
      }
    });

    // Flush any remaining portraits
    if (portraitBuffer.length > 0) {
      flow.push(
        <div className="portrait-group" key={`portrait-group-end`}>
          <ArticleLayoutMapper article={portraitBuffer[0]} />
        </div>
      );
    }

    return flow;
  };

  return (
    <div className="insights-page-container">
      <Helmet>
        <title>TheNameIsBhagavan | Insights</title>
        <meta name="description" content="Engineering deep dives, architecture patterns, and lessons learned from building production AI systems." />
        <link rel="canonical" href="https://thenameisbhagavan.vercel.app/insights" />
      </Helmet>

      {/* SECTION 1: 100vh Liquid Hero */}
      <section className="insights-hero-section">
        <div className="insights-hero-bg"></div>
        <div className="insights-hero-orb orb-1"></div>
        <div className="insights-hero-orb orb-2"></div>
        <div className="insights-hero-glass"></div>
        
        <m.div 
          className="insights-hero-content"
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="insights-hero-title">Engineering Journal.</h1>
          <h2 className="insights-hero-subtitle">Architecture. Systems. Intelligence.</h2>
          <p className="insights-hero-desc">
            This is where I document the evolution of intelligent systems. Deep dives into architecture, 
            engineering trade-offs, and lessons learned building production AI applications.
          </p>
        </m.div>
      </section>

      {/* SECTION 2: Magazine Editorial Flow */}
      <SectionDivider />
      <section className="editorial-grid">
        {renderEditorialFlow()}
      </section>

      {/* ══════════════════════════════════════════════════════
          JOURNEY PROFILES
      ══════════════════════════════════════════════════════ */}
      <section className="insights-journey-presence" style={{ textAlign: 'center', padding: '10vh 20px', background: '#f5f5f7' }}>
        <m.h3 style={{ fontSize: '18px', fontWeight: 600, letterSpacing: '-0.02em', color: '#1d1d1f', marginBottom: '24px' }} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Follow My Engineering Journey</m.h3>
        <m.div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <a href={socialLinks.github.url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: '#1d1d1f', color: '#fff', borderRadius: '24px', textDecoration: 'none', fontWeight: 500, fontSize: '14px', transition: 'transform 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} aria-label="GitHub Profile" title="GitHub Profile">
             <Github size={16} /> GitHub
          </a>
          <a href={socialLinks.linkedin.url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: '#1d1d1f', color: '#fff', borderRadius: '24px', textDecoration: 'none', fontWeight: 500, fontSize: '14px', transition: 'transform 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} aria-label="LinkedIn Profile" title="LinkedIn Profile">
             <Linkedin size={16} /> LinkedIn
          </a>
          <a href={socialLinks.youtube.url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: '#1d1d1f', color: '#fff', borderRadius: '24px', textDecoration: 'none', fontWeight: 500, fontSize: '14px', transition: 'transform 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} aria-label="YouTube Channel" title="YouTube Channel">
             <Youtube size={16} /> YouTube
          </a>
        </m.div>
      </section>

      {/* BRAND SIGNATURE */}
      <BrandSignature />
    </div>
  );
}
