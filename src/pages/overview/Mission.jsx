import React from 'react';
import { m } from 'framer-motion';

export default function Mission() {
  return (
    <section style={{ padding: '200px 24px', display: 'flex', justifyContent: 'center' }} data-nav-theme="light">
      <div style={{ maxWidth: '800px', width: '100%' }}>
        <m.h2 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 600, letterSpacing: '-0.03em', color: '#1d1d1f', lineHeight: 1.1, marginBottom: '40px' }}
        >
          Building Intelligent Software That Solves Real Problems.
        </m.h2>
        <m.p
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', fontWeight: 400, color: '#86868b', letterSpacing: '-0.015em', lineHeight: 1.4 }}
        >
          I am a software developer focused on AI-powered applications, scalable web platforms, and solving practical problems through technology. My expertise spans Software Engineering, AI Systems, Full Stack Development, and building intelligent career products.
        </m.p>
      </div>
    </section>
  );
}
