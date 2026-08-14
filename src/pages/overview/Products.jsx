import React from 'react';
import { m } from 'framer-motion';

const PRODUCTS = [
  { name: "ResumeAI", desc: "An intelligent, ATS-optimized platform engineered to match resumes against strict job descriptions." },
  { name: "CareerOS", desc: "A predictive recommendation system that uses Machine Learning to map optimal career paths." },
  { name: "Smart Leave Management", desc: "Enterprise-grade low-code workflow automation built for strict multi-level approvals." }
];

export default function Products() {
  return (
    <section style={{ padding: '200px 0', overflow: 'hidden' }} data-nav-theme="light">
      <m.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} style={{ textAlign: 'center', marginBottom: '160px', padding: '0 24px' }}>
        <h2 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 600, letterSpacing: '-0.04em', color: '#1d1d1f' }}>What I Build.</h2>
      </m.div>

      {PRODUCTS.map((prod, i) => (
        <m.div key={i} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-20%" }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} style={{ marginBottom: i === PRODUCTS.length - 1 ? '0' : '240px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px', padding: '0 24px' }}>
            <h3 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 600, letterSpacing: '-0.02em', color: '#1d1d1f' }}>{prod.name}</h3>
            <p style={{ fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', color: '#86868b', maxWidth: '600px', margin: '16px auto 0' }}>{prod.desc}</p>
          </div>
          {/* Hardware Placeholder Screen */}
          <div style={{ 
            width: '90%', maxWidth: '1400px', margin: '0 auto', aspectRatio: '16/9', 
            background: 'linear-gradient(135deg, #f5f5f7 0%, #ffffff 100%)', 
            borderRadius: '40px', border: '1px solid rgba(0,0,0,0.05)', 
            boxShadow: '0 40px 100px rgba(0,0,0,0.06), inset 0 2px 4px rgba(255,255,255,0.8)', 
            display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' 
          }}>
            <span style={{ color: '#d2d2d7', fontSize: '1.2rem', fontWeight: 600, letterSpacing: '0.2em' }}>[ ASSET PLACEHOLDER ]</span>
          </div>
        </m.div>
      ))}
    </section>
  );
}
