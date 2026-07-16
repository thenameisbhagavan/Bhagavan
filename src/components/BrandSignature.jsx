import React from 'react';
import { m } from 'framer-motion';

const BrandSignature = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem 1.5rem 2rem',
      textAlign: 'center',
      marginTop: 'auto'
    }}>
      <m.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, amount: 0.8 }}
      >
        <div className="dark-invert" style={{ height: '1px', width: '40px', background: 'rgba(0,0,0,0.15)', margin: '0 auto 1.5rem' }} />
        <div className="dark-text-muted" style={{ fontSize: '0.75rem', fontWeight: 600, color: '#86868b', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
          Built by
        </div>
        <div className="dark-text" style={{ fontSize: '1rem', fontWeight: 700, color: '#1d1d1f', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
          TheNameIsBhagavan
        </div>
        <div className="dark-text-muted" style={{ fontSize: '0.8rem', color: '#86868b', lineHeight: '1.4' }}>
          AI Engineer <span style={{ opacity: 0.5, margin: '0 4px' }}>•</span> Full Stack Developer <span style={{ opacity: 0.5, margin: '0 4px' }}>•</span> Intelligent Systems Builder
        </div>
        <div className="dark-text-muted" style={{ fontSize: '0.85rem', fontWeight: 500, color: '#515154', marginTop: '0.5rem', fontStyle: 'italic' }}>
          "Building intelligent systems that solve real-world problems."
        </div>
        <div className="dark-invert" style={{ height: '1px', width: '40px', background: 'rgba(0,0,0,0.15)', margin: '1.5rem auto 0' }} />
      </m.div>
    </div>
  );
};

export default BrandSignature;
