import React from 'react';
import { Helmet } from 'react-helmet-async';
import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import PlatformIcon from '../../components/PlatformIcon';
import '../../styles/EngineeringJournal.css';
import useInitialLoad from '../../hooks/useInitialLoad';

const AVAILABLE_PLATFORMS = [
  { type: 'portfolio', label: 'Portfolio', desc: 'Primary publication', url: '/journal' },
  { type: 'medium', label: 'Medium', desc: 'Selected stories', url: 'https://medium.com/@g.sivasatyasaibhagavan' },
  { type: 'github', label: 'Engineering Repository', desc: 'Architecture documents', url: 'https://github.com/bhagavan444/Bhagavan/tree/main/src/content' },
  { type: 'rss', label: 'RSS', desc: 'Feed syndication', url: '/rss.xml' }
];

const COMING_SOON = [
  { type: 'hashnode', label: 'Hashnode' },
  { type: 'devto', label: 'Dev.to' }
];

export default function Platforms() {
  const { prefersReducedMotion } = useInitialLoad();
  
  return (
    <div className="platforms-page-container">
      <Helmet>
        <title>Publication Platforms | Engineering Journal</title>
        <meta name="description" content="Read TheNameIsBhagavan's Engineering Journal across multiple platforms." />
      </Helmet>

      <main className="platforms-main doc-main">
        <m.header 
          className="platforms-header"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="journal-subtitle">Engineering Journal</h2>
          <h1 className="journal-title">Available on</h1>
        </m.header>

        <m.div 
          className="platforms-grid"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {AVAILABLE_PLATFORMS.map((platform, idx) => {
            const isExternal = platform.url.startsWith('http') || platform.url.endsWith('.xml');
            const linkProps = isExternal 
              ? { href: platform.url, target: "_blank", rel: "noopener noreferrer" } 
              : { to: platform.url, as: Link };
            
            const Element = isExternal ? 'a' : Link;

            return (
              <Element key={idx} {...linkProps} className="platform-card large">
                <PlatformIcon type={platform.type} size={24} className="platform-icon" />
                <div className="platform-details">
                  <span className="platform-name">{platform.label}</span>
                  <span className="platform-desc">{platform.desc}</span>
                </div>
              </Element>
            );
          })}
        </m.div>

        <m.div 
          className="coming-soon-section"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="coming-soon-title">Coming Soon</h3>
          <div className="coming-soon-grid">
            {COMING_SOON.map((platform, idx) => (
              <div key={idx} className="platform-card disabled">
                <PlatformIcon type={platform.type} size={18} className="platform-icon" />
                <span className="platform-name">{platform.label}</span>
              </div>
            ))}
          </div>
        </m.div>

        <m.div 
          className="platforms-back"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link to="/journal" className="back-link">Return to Journal</Link>
        </m.div>
      </main>
    </div>
  );
}
