import React from 'react';
import { m } from 'framer-motion';

export default function TechEcosystem() {
  return (
    <section style={{ padding: '200px 0', background: '#fbfbfd', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center' }} data-nav-theme="light">
      <m.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} style={{ textAlign: 'center', marginBottom: '120px' }}>
        <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 600, letterSpacing: '-0.03em', color: '#1d1d1f' }}>Technology Ecosystem.</h2>
      </m.div>

      <div style={{ position: 'relative', width: '100%', maxWidth: '1200px', height: '800px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Animated Orbits */}
        <m.div animate={{ rotate: 360 }} transition={{ duration: 100, repeat: Infinity, ease: 'linear' }} style={{ position: 'absolute', width: '600px', height: '600px', border: '1px dashed rgba(0,0,0,0.1)', borderRadius: '50%' }} />
        <m.div animate={{ rotate: -360 }} transition={{ duration: 140, repeat: Infinity, ease: 'linear' }} style={{ position: 'absolute', width: '900px', height: '900px', border: '1px solid rgba(0,0,0,0.04)', borderRadius: '50%' }} />

        {/* Center Node */}
        <m.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} style={{ position: 'relative', zIndex: 10, width: '200px', height: '200px', borderRadius: '50%', background: '#1d1d1f', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px', color: '#fff', boxShadow: '0 30px 60px rgba(0,0,0,0.2)' }}>
          <span style={{ fontSize: '1.4rem', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.1 }}>Engineering<br/>Intelligence</span>
        </m.div>

        {/* Clusters */}
        <Cluster title="Core" items={['Python', 'Java', 'JavaScript']} x="-200px" y="-200px" delay={0.2} />
        <Cluster title="Frontend" items={['React', 'Node.js', 'Express']} x="200px" y="-200px" delay={0.4} />
        <Cluster title="Backend" items={['Flask', 'REST APIs']} x="-250px" y="200px" delay={0.6} />
        <Cluster title="Data" items={['MongoDB', 'MySQL']} x="250px" y="200px" delay={0.8} />
        <Cluster title="Intelligence" items={['AI & Machine Learning']} x="0" y="350px" delay={1.0} />

      </div>
    </section>
  );
}

function Cluster({ title, items, x, y, delay }) {
  return (
    <m.div 
      initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ position: 'absolute', transform: `translate(${x}, ${y})`, background: '#fff', padding: '30px', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column', gap: '12px', minWidth: '180px' }}
    >
      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#86868b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>{title}</div>
      {items.map((item, i) => (
        <div key={i} style={{ fontSize: '1.2rem', fontWeight: 500, color: '#1d1d1f' }}>{item}</div>
      ))}
    </m.div>
  );
}
