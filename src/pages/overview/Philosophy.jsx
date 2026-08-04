import React from 'react';
import { m } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import careerOSImg from '../../assets/carrer.jpg';

export default function Philosophy() {
  const navigate = useNavigate();
  const customEase = [0.16, 1, 0.3, 1];

  return (
    <section style={{ padding: '200px 24px', background: '#fff', color: '#1d1d1f', position: 'relative', zIndex: 20 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* EDITORIAL STORYTELLING */}
        <m.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: customEase }}
          style={{ textAlign: 'center', marginBottom: '160px' }}
        >
          <h2 style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 600, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '48px', maxWidth: '1000px', margin: '0 auto 48px' }}>
            Technology Should <br />Create Opportunity.
          </h2>
          
          <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: '#86868b', lineHeight: 1.4, fontWeight: 400, maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <p>
              I believe in building intelligent software that empowers people to make better decisions, learn faster, and unlock new possibilities.
            </p>
            <p>
              By combining robust backend engineering with cutting-edge artificial intelligence, I engineer systems that don't just process data—they <span style={{ color: '#1d1d1f' }}>understand context</span>.
            </p>
          </div>
        </m.div>

        {/* CAREEROS SHOWCASE REVEAL */}
        <m.div 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, delay: 0.2, ease: customEase }}
          style={{ display: 'flex', flexDirection: 'column', gap: '80px', alignItems: 'center' }}
        >
          {/* Section Label */}
          <div style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '0.2em', color: '#86868b', textTransform: 'uppercase' }}>
            Flagship Ecosystem
          </div>

          <div style={{ textAlign: 'center', maxWidth: '800px' }}>
            <h3 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 600, letterSpacing: '-0.03em', color: '#1d1d1f', marginBottom: '24px' }}>
              CareerOS
            </h3>
            <p style={{ fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', color: '#424245', lineHeight: 1.5 }}>
              A massive multi-agent AI environment designed to bypass traditional recruitment barriers by deeply analyzing human potential and matching it with precise market opportunities.
            </p>
          </div>

          {/* Cinematic Product Image Reveal */}
          <m.div 
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, delay: 0.4, ease: customEase }}
            style={{ width: '100%', borderRadius: '40px', overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.1)', background: '#000', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}
          >
            {/* Subtle inner shadow overlay */}
            <div style={{ position: 'absolute', inset: 0, boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)', borderRadius: '40px', zIndex: 10, pointerEvents: 'none' }} />
            <img loading="lazy" src={careerOSImg} alt="CareerOS Environment" style={{ width: '100%', height: 'auto', display: 'block', opacity: 0.9, filter: 'contrast(1.05)' }} />
          </m.div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '24px' }}>
            <button 
              onClick={() => { window.scrollTo(0,0); navigate('/work'); }}
              style={{ padding: '16px 36px', background: '#1d1d1f', color: '#fff', borderRadius: '999px', fontSize: '1.1rem', fontWeight: 500, border: 'none', cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              Explore The Architecture
            </button>
            <a
              href="https://careeros-thenameisbhagavan.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Launch CareerOS Live Demo"
              style={{ padding: '16px 36px', background: 'transparent', color: '#1d1d1f', borderRadius: '999px', fontSize: '1.1rem', fontWeight: 500, border: '1px solid #d2d2d7', cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.borderColor = '#86868b'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.borderColor = '#d2d2d7'; }}
            >
              Launch CareerOS ↗
            </a>
          </div>
        </m.div>

      </div>
    </section>
  );
}
