import React, { useRef } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import heroImg from '../../assets/profile-hero-optimized.webp';
import logoImg from '../../assets/logo.png';
import { MaskReveal, EditorialFade, SequenceReveal } from '../../components/transitions/primitives';

export default function Hero() {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 6vw',
        background: '#fbfbfd', // Quiet white canvas
        overflow: 'hidden'
      }}
     data-nav-theme="light">
      <m.div 
        style={{ 
          y: yText, 
          opacity: opacityHero,
          willChange: "transform, opacity",
          transform: "translateZ(0)",
          maxWidth: '1440px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '8vh',
          paddingTop: '12vh' // Clear navbar
        }}
      >
        {/* =========================================================
            IDENTITY REVEAL: PORTRAIT
            ========================================================= */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <EditorialFade delay={0.05}>
            <img 
              src={logoImg} 
              alt="TNB Mark" 
              style={{ width: '32px', height: '32px', borderRadius: '6px', marginBottom: '32px', opacity: 0.9 }} 
             loading="lazy" />
          </EditorialFade>

          <MaskReveal delay={0.1} duration={1.2}>
            <div style={{
              width: 'clamp(280px, 30vw, 420px)',
              aspectRatio: '3/4',
              borderRadius: '2px', // Sharp editorial frame
              overflow: 'hidden',
              backgroundColor: '#f5f5f7'
            }}>
              <m.img 
                src={heroImg} 
                alt="Bhagavan"
                fetchPriority="high"
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 20%',
                  willChange: 'transform'
                }}
              />
            </div>
          </MaskReveal>

        </div>

        {/* =========================================================
            IDENTITY REVEAL: TYPOGRAPHY
            ========================================================= */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          
          <EditorialFade delay={0.4}>
            <div style={{
              fontFamily: 'var(--font-system, sans-serif)',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              color: '#86868b',
              textTransform: 'uppercase',
              marginBottom: '24px'
            }}>
              IDENTITY / AI PRODUCT ENGINEERING / 2026
            </div>
          </EditorialFade>

          <SequenceReveal stagger={0.15} delay={0.5}>
            <h1 style={{
              fontFamily: 'var(--font-display, sans-serif)',
              fontSize: 'clamp(40px, 6vw, 84px)',
              fontWeight: 600,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: '#1d1d1f',
              margin: '0 0 32px 0',
              maxWidth: '800px'
            }}>
              <span>I engineer systems that</span>
              <br/>
              <span>turn complexity into clarity.</span>
            </h1>
          </SequenceReveal>

          <EditorialFade delay={1.1}>
            <p style={{
              fontFamily: 'var(--font-system, sans-serif)',
              fontSize: 'clamp(17px, 2vw, 24px)',
              fontWeight: 400,
              color: '#86868b',
              lineHeight: 1.4,
              maxWidth: '600px',
              margin: '0 auto 48px auto'
            }}>
              Specializing in AI architectures, autonomous agents, and premium product experiences.
            </p>
          </EditorialFade>

          <EditorialFade delay={1.3}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <button 
                onClick={() => navigate('/work')}
                style={{
                  padding: '14px 28px',
                  borderRadius: '30px',
                  backgroundColor: '#1d1d1f',
                  color: '#fff',
                  fontFamily: 'var(--font-system, sans-serif)',
                  fontSize: '15px',
                  fontWeight: 500,
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                View Systems
              </button>
            </div>
          </EditorialFade>

        </div>
      </m.div>
    </section>
  );
}
