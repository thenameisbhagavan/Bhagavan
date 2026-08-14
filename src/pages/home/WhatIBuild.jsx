import React, { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";

const CATEGORIES = [
  { label: 'AI Applications', desc: 'Chatbots, classifiers, and intelligent agents powered by LLMs and neural networks', color: '139,92,246' },
  { label: 'Full Stack Platforms', desc: 'End-to-end MERN applications with secure authentication and real-time data flows', color: '59,130,246' },
  { label: 'Automation Systems', desc: 'Enterprise workflow automation using Microsoft Power Platform and custom pipelines', color: '168,85,247' },
  { label: 'ML APIs', desc: 'Production-deployed machine learning models served via Flask and FastAPI endpoints', color: '74,222,128' },
  { label: 'Intelligent Dashboards', desc: 'Data-driven analytics interfaces with real-time metrics and predictive insights', color: '6,182,212' },
  { label: 'Enterprise Tools', desc: 'Role-based access systems, approval workflows, and business process management', color: '250,204,21' },
  { label: 'REST APIs', desc: 'Clean, documented, and secure API architectures with JWT and OAuth 2.0 layers', color: '245,158,11' },
  { label: 'Data-Driven Apps', desc: 'Applications leveraging data science for recommendations, detection, and analysis', color: '239,68,68' },
];

export default function WhatIBuild({ isMobile }) {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActiveIdx(prev => (prev + 1) % CATEGORIES.length), 3500);
    return () => clearInterval(timer);
  }, []);

  const active = CATEGORIES[activeIdx];

  return (
    <section id="what-i-build" style={{ padding: isMobile ? '5rem 1.5rem' : '8rem 4rem', maxWidth: '1400px', margin: '0 auto' }} data-nav-theme="light">
      <div style={{ marginBottom: '3.5rem' }}>
        <div style={{ fontSize: '.6rem', color: 'rgba(255,255,255,.25)', letterSpacing: '.16em', textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '1.5rem' }}>System Capabilities</div>
        <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-.04em', color: '#fff', lineHeight: 1.12, maxWidth: '600px', marginBottom: '1.2rem' }}>
          What I<br />
          <span style={{ fontFamily: "'Source Serif 4',Georgia,serif", fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(2.1rem,3.6vw,3.1rem)' }}>architect & deploy</span>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.2fr', gap: '2rem', alignItems: 'center' }}>
        {/* Left: Category selector */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.4rem' }}>
          {CATEGORIES.map((cat, i) => (
            <button key={i} onClick={() => setActiveIdx(i)}
              style={{
                padding: '1rem 1.4rem', borderRadius: '12px', border: 'none', cursor: 'pointer',
                background: i === activeIdx ? `rgba(${cat.color},0.06)` : 'transparent',
                borderLeft: `3px solid ${i === activeIdx ? `rgba(${cat.color},0.8)` : 'rgba(255,255,255,0.04)'}`,
                display: 'flex', alignItems: 'center', gap: '.8rem',
                transition: 'all 0.3s cubic-bezier(.16,1,.3,1)', textAlign: 'left',
              }}
              onMouseEnter={e => { if (i !== activeIdx) e.currentTarget.style.background = 'rgba(255,255,255,.02)'; }}
              onMouseLeave={e => { if (i !== activeIdx) e.currentTarget.style.background = 'transparent'; }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: i === activeIdx ? `rgba(${cat.color},0.9)` : 'rgba(255,255,255,0.15)', boxShadow: i === activeIdx ? `0 0 8px rgba(${cat.color},0.5)` : 'none', transition: 'all 0.3s', flexShrink: 0 }} />
              <span style={{ fontSize: '.88rem', color: i === activeIdx ? '#fff' : 'rgba(255,255,255,.35)', fontWeight: i === activeIdx ? 500 : 300, letterSpacing: '-.01em', transition: 'all 0.3s', fontFamily: 'Inter,sans-serif' }}>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Right: Active category display */}
        <div className="liquid-glass" style={{ padding: isMobile ? '2rem' : '3rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,.08)', position: 'relative', overflow: 'hidden', minHeight: '280px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {/* Dynamic glow */}
          <div style={{ position: 'absolute', top: '-30%', right: '-20%', width: '60%', height: '80%', borderRadius: '50%', background: `radial-gradient(circle, rgba(${active.color},0.08) 0%, transparent 60%)`, pointerEvents: 'none', filter: 'blur(40px)', transition: 'all 0.6s ease' }} />
          <AnimatePresence mode="wait">
            <m.div
              key={activeIdx}
              initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -15, filter: 'blur(8px)' }}
              transition={{ duration: 0.4, ease: [.16,1,.3,1] }}
              style={{ position: 'relative', zIndex: 2 }}
            >
              <div style={{ fontSize: '.6rem', fontFamily: 'monospace', color: `rgba(${active.color},0.6)`, letterSpacing: '.15em', marginBottom: '1rem', textTransform: 'uppercase' }}>CATEGORY.{String(activeIdx).padStart(2, '0')}</div>
              <h3 style={{ fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 400, color: '#fff', marginBottom: '1rem', letterSpacing: '-.03em', lineHeight: 1.15 }}>
                {active.label}
              </h3>
              <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.8, fontWeight: 300, maxWidth: '400px' }}>{active.desc}</p>
              {/* Progress indicator */}
              <div style={{ marginTop: '2rem', display: 'flex', gap: '.4rem' }}>
                {CATEGORIES.map((_, i) => (
                  <div key={i} style={{ height: '2px', flex: 1, borderRadius: '2px', background: i === activeIdx ? `rgba(${CATEGORIES[i].color},0.7)` : 'rgba(255,255,255,0.06)', transition: 'all 0.4s' }} />
                ))}
              </div>
            </m.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
