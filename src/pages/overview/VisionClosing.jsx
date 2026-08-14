import React from 'react';
import { m } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function VisionClosing() {
  const navigate = useNavigate();

  return (
    <section style={{ padding: '200px 24px', background: '#fff', textAlign: 'center', display: 'flex', justifyContent: 'center' }} data-nav-theme="light">
      <div style={{ maxWidth: '800px', width: '100%' }}>
        
        <m.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', fontWeight: 600, letterSpacing: '-0.04em', color: '#1d1d1f', marginBottom: '40px', lineHeight: 1.05 }}>
            Building What <br/>Comes Next.
          </h2>
          <p style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#86868b', lineHeight: 1.4, marginBottom: '60px' }}>
            My ambition is to architect intelligent systems that act as catalysts for human growth—transforming complex data into clear, actionable career intelligence.
          </p>
          
          <m.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            onClick={() => { window.scrollTo(0,0); navigate('/vision'); }}
            style={{ padding: '20px 48px', background: '#0066cc', color: '#fff', borderRadius: '40px', fontSize: '1.4rem', fontWeight: 600, border: 'none', cursor: 'pointer', transition: 'transform 0.2s', boxShadow: '0 20px 40px rgba(0, 102, 204, 0.2)' }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Read The Vision
          </m.button>
        </m.div>

      </div>
    </section>
  );
}
