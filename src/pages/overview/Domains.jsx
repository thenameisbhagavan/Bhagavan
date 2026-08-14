import React, { useRef } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';

export default function Domains() {
  const containerRef = useRef(null);
  
  return (
    <section ref={containerRef} style={{ padding: '200px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#fbfbfd', overflow: 'hidden' }} data-nav-theme="light">
      <m.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} style={{ textAlign: 'center', marginBottom: '120px' }}>
        <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 600, letterSpacing: '-0.03em', color: '#1d1d1f' }}>Engineering Across The Stack.</h2>
      </m.div>

      <div style={{ position: 'relative', width: '100%', maxWidth: '1000px', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* SVG Animated Connections */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
          <m.path 
            d="M 500 300 C 300 100, 200 300, 200 150" 
            fill="transparent" stroke="rgba(0,0,0,0.1)" strokeWidth="2"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2, ease: "easeInOut" }}
          />
          <m.path 
            d="M 500 300 C 700 100, 800 300, 800 150" 
            fill="transparent" stroke="rgba(0,0,0,0.1)" strokeWidth="2"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
          />
          <m.path 
            d="M 500 300 C 300 500, 200 300, 200 450" 
            fill="transparent" stroke="rgba(0,0,0,0.1)" strokeWidth="2"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2, delay: 0.4, ease: "easeInOut" }}
          />
          <m.path 
            d="M 500 300 C 700 500, 800 300, 800 450" 
            fill="transparent" stroke="rgba(0,0,0,0.1)" strokeWidth="2"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
          />
        </svg>

        {/* Nodes */}
        <Node title="Software Engineering" x="20%" y="25%" delay={0.2} />
        <Node title="Backend Systems" x="80%" y="25%" delay={0.4} />
        <Node title="Artificial Intelligence" x="20%" y="75%" delay={0.6} />
        <Node title="Full Stack Development" x="80%" y="75%" delay={0.8} />

        {/* Center Node */}
        <m.div 
          initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'absolute', width: '120px', height: '120px', borderRadius: '50%', background: '#1d1d1f', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.2rem', fontWeight: 600, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
        >
          Core
        </m.div>
      </div>
    </section>
  );
}

function Node({ title, x, y, delay }) {
  return (
    <m.div 
      initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ position: 'absolute', left: x, top: y, transform: 'translate(-50%, -50%)', textAlign: 'center', background: '#fff', padding: '24px 32px', borderRadius: '100px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.02)' }}
    >
      <span style={{ fontSize: '1.2rem', fontWeight: 500, color: '#1d1d1f', letterSpacing: '-0.01em' }}>{title}</span>
    </m.div>
  );
}
