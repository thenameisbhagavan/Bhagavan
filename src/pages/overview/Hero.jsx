import React, { useRef, useState, useEffect } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import heroImg from '../../assets/profile-hero.jpg';

export default function Hero() {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // ── Fix 2 + 4: Layered hero reveal after welcome screen dissolves ─────────
  //
  // The welcome screen dispatches 'welcomeComplete' when its dissolve finishes.
  // Until that event fires, the hero portrait stays at opacity 0 — this creates
  // the illusion that the loading portrait IS the homepage portrait (Fix 4).
  //
  // Cascade order after welcomeComplete:
  //   Portrait orb  → immediate (opacity 0→1 over 600ms)
  //   Label         → 190ms delay
  //   Headline      → 310ms delay
  //   Description   → 430ms delay
  //   Founder stmt  → 550ms delay
  //   CTA buttons   → 660ms delay
  //   Trust stats   → 760ms delay
  //
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    const onWelcomeDone = () => setHeroReady(true);
    window.addEventListener('welcomeComplete', onWelcomeDone);
    return () => window.removeEventListener('welcomeComplete', onWelcomeDone);
  }, []);

  const nodes = [
    { label: "Resume Intelligence Engine", angle: 0 },
    { label: "GitHub Intelligence Engine", angle: 60 },
    { label: "Recruiter Intelligence", angle: 120 },
    { label: "Interview Intelligence Engine", angle: 180 },
    { label: "Career Growth Navigator", angle: 240 },
    { label: "CareerOS Assistant", angle: 300 }
  ];

  const [radius, setRadius] = useState(320);
  const [portraitSize, setPortraitSize] = useState(220);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setRadius(160);
        setPortraitSize(140);
      } else if (window.innerWidth < 1024) {
        setRadius(240);
        setPortraitSize(180);
      } else {
        setRadius(320);
        setPortraitSize(220);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Orbiting Particle Component
  const OrbitParticle = ({ angleOffset, duration, delay }) => (
    <m.div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: 1,
        height: 1,
        zIndex: 1
      }}
      animate={{ rotate: [angleOffset, angleOffset + 360] }}
      transition={{ duration, repeat: Infinity, ease: "linear", delay }}
    >
      <div 
        style={{
          position: 'absolute',
          top: -radius,
          left: 0,
          width: '4px',
          height: '4px',
          borderRadius: '50%',
          background: '#1d1d1f',
          boxShadow: '0 0 10px rgba(29, 29, 31, 0.5)',
          transform: 'translate(-50%, -50%)'
        }}
      />
    </m.div>
  );

  return (
    <section 
      ref={containerRef}
      style={{
        minHeight: '100vh',
        background: '#ffffff', // Pure Apple/Linear white
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '60px 5% 40px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
      }}
    >
      {/* Soft radial background gradient for depth */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '800px',
        height: '800px',
        background: 'radial-gradient(circle, rgba(240,240,245,0.8) 0%, transparent 70%)',
        filter: 'blur(100px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      {/* Tiny floating intelligence nodes (stationary but pulsing) */}
      {[...Array(12)].map((_, i) => (
         <m.div key={`bg-node-${i}`} 
           style={{
             position: 'absolute',
             width: '3px', height: '3px',
             borderRadius: '50%',
             background: 'rgba(29,29,31,0.15)',
             top: `${10 + Math.random() * 80}%`,
             left: `${10 + Math.random() * 80}%`,
             zIndex: 0
           }}
           animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.8, 0.2] }}
           transition={{ duration: 3 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
         />
      ))}

      <div style={{
        maxWidth: '1440px', // Ultra-wide container to accommodate the large ecosystem
        margin: '0 auto',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        zIndex: 10,
        gap: '40px'
      }}>
        {/* LEFT SIDE: Typography, CTAs, Trust Indicators */}
        <m.div 
          style={{ flex: '1 1 550px', maxWidth: '700px', zIndex: 20, y: yText, opacity: opacityHero }}
        >
          {/* Label — appears 190ms after portrait */}
          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.65, delay: 0.19, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#86868b',
              marginBottom: '24px'
            }}
          >
            AI Systems Engineer &bull; Builder &bull; Researcher
          </m.div>

          {/* Headline — appears 310ms after portrait */}
          <m.h1
            initial={{ opacity: 0, y: 28 }}
            animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.85, delay: 0.31, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 'clamp(3.5rem, 6vw, 6rem)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              color: '#1d1d1f',
              marginBottom: '24px'
            }}
          >
            Building The Future<br/>Of Human Potential.
          </m.h1>

          {/* Description — appears 430ms after portrait */}
          <m.p
            initial={{ opacity: 0, y: 16 }}
            animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.75, delay: 0.43, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)',
              fontWeight: 400,
              lineHeight: 1.5,
              color: '#86868b',
              marginBottom: '20px',
              maxWidth: '650px'
            }}
          >
            I build intelligent systems that transform resumes, careers, skills, and human potential into measurable opportunities.
          </m.p>

          {/* Founder statement — appears 550ms after portrait */}
          <m.p
            initial={{ opacity: 0, y: 16 }}
            animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.75, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: '1.1rem',
              fontWeight: 500,
              lineHeight: 1.6,
              color: '#1d1d1f',
              marginBottom: '48px',
              maxWidth: '600px'
            }}
          >
            Creator of CareerOS — an intelligence platform that helps people understand, improve, and accelerate their careers through AI-powered insights.
          </m.p>

          {/* CTA Buttons — appears 660ms after portrait */}
          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.7, delay: 0.66, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '60px' }}
          >
            <m.button
              whileHover={{ scale: 1.02, backgroundColor: '#000' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/careeros')}
              style={{
                padding: '16px 32px',
                background: '#1d1d1f',
                color: '#fff',
                borderRadius: '999px',
                fontSize: '1.05rem',
                fontWeight: 500,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                transition: 'background-color 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              Explore CareerOS
            </m.button>
            <m.button
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(0,0,0,0.06)' }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: '16px 32px',
                background: 'rgba(0,0,0,0.02)',
                color: '#1d1d1f',
                borderRadius: '999px',
                fontSize: '1.05rem',
                fontWeight: 500,
                border: '1px solid rgba(0,0,0,0.08)',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                transition: 'background-color 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              View Intelligence Architecture
            </m.button>
          </m.div>

          {/* Trust stats — appears last, 760ms after portrait */}
          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={heroReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.7, delay: 0.76, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
              maxWidth: '600px'
            }}
          >
            {[
              { stat: "4+", label: "Internships" },
              { stat: "5+", label: "AI Web Systems" },
              { stat: "", label: "AI Systems", highlight: true },
              { stat: "", label: "Full-Stack Platforms", highlight: true }
            ].map((item, idx) => (
              <div key={idx} style={{
                background: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(0,0,0,0.04)',
                borderRadius: '24px',
                padding: '24px 20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                boxShadow: '0 8px 32px rgba(0,0,0,0.03)',
                transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'default'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.06)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.03)';
              }}
              >
                {item.stat && (
                  <div style={{ fontSize: '2.2rem', fontWeight: 700, letterSpacing: '-0.04em', color: '#1d1d1f', lineHeight: 1 }}>
                    {item.stat}
                  </div>
                )}
                <div style={{ 
                  fontSize: item.highlight ? '1.1rem' : '0.9rem', 
                  fontWeight: item.highlight ? 600 : 500, 
                  color: item.highlight ? '#1d1d1f' : '#86868b', 
                  marginTop: item.stat ? '8px' : '0'
                }}>
                  {item.label}
                </div>
              </div>
            ))}
          </m.div>
        </m.div>

        {/* RIGHT SIDE: Living Intelligence Ecosystem */}
        <m.div 
          style={{ 
            flex: '1 1 600px', 
            position: 'relative', 
            height: '750px', // Scaled up height for larger ecosystem
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            opacity: opacityHero 
          }}
        >
          {/* Neural Network SVG Container (Rotates slowly) */}
          <m.svg 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotate: 360 }}
            transition={{ 
              opacity: { duration: 2, delay: 0.6 },
              rotate: { duration: 120, repeat: Infinity, ease: "linear" } 
            }}
            style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}
          >
            {/* Outer Orbit Ring */}
            <circle cx="50%" cy="50%" r={radius} fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="1" strokeDasharray="4 8" />
            
            {/* Connecting Lines and Data Streams */}
            {nodes.map((node, i) => {
              const rad = (node.angle * Math.PI) / 180;
              const cx = `calc(50% + ${Math.cos(rad) * radius}px)`;
              const cy = `calc(50% + ${Math.sin(rad) * radius}px)`;
              
              return (
                <g key={i}>
                  {/* Base neural line drawing animation */}
                  <m.line 
                    x1="50%" y1="50%" x2={cx} y2={cy} 
                    stroke="rgba(0,0,0,0.08)" strokeWidth="1"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.8 + i * 0.1, ease: "easeOut" }}
                  />
                  {/* High-speed animated data stream pulses along the line */}
                  <m.line 
                    x1="50%" y1="50%" x2={cx} y2={cy} 
                    stroke="rgba(29,29,31,0.25)" strokeWidth="2"
                    strokeDasharray={`15 ${radius}`} // A 15px dash with a gap the size of the whole line
                    initial={{ strokeDashoffset: radius }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.4, ease: "linear" }}
                  />
                </g>
              );
            })}
          </m.svg>

          {/* Orbiting Particles */}
          <OrbitParticle angleOffset={0} duration={20} delay={0} />
          <OrbitParticle angleOffset={120} duration={20} delay={0} />
          <OrbitParticle angleOffset={240} duration={20} delay={0} />

          {/* Orbiting Modules (Liquid Glass Capsules) */}
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, rotate: 360 }}
            transition={{ 
              opacity: { duration: 1.5, delay: 1 },
              scale: { duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] },
              rotate: { duration: 120, repeat: Infinity, ease: "linear" } 
            }}
            style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 2 }}
          >
            {nodes.map((node, i) => {
              return (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${node.angle}deg) translateX(${radius}px)`,
                    width: 0,
                    height: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <m.div
                    animate={{ rotate: -360 }} // Perfect counter-rotation
                    transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: 'center center' }}
                  >
                    <div style={{
                      transform: `rotate(-${node.angle}deg)`,
                      background: 'rgba(255,255,255,0.85)',
                      backdropFilter: 'blur(24px)',
                      WebkitBackdropFilter: 'blur(24px)',
                      padding: '12px 24px',
                      borderRadius: '30px',
                      border: '1px solid rgba(0,0,0,0.05)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.05)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: '#1d1d1f',
                      whiteSpace: 'nowrap',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      {/* Live Intelligence Pulsing Indicator */}
                      <m.div 
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#1d1d1f' }} 
                      />
                      {node.label}
                    </div>
                  </m.div>
                </div>
              );
            })}
          </m.div>

          {/* Central Portrait Orb
           * Fix 4: Portrait continuity
           * Starts at opacity:0. When welcomeComplete fires, fades to opacity:1
           * over 600ms. This creates the illusion that the loading portrait
           * seamlessly BECOMES the homepage portrait — one continuous image.
           * No cut. No duplicate. Perfect synchronization.
           */}
          <m.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={heroReady
              ? { scale: 1, opacity: 1 }
              : { scale: 0.92, opacity: 0 }
            }
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              width: `${portraitSize}px`,
              height: `${portraitSize}px`,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.5)',
              backdropFilter: 'blur(40px)',
              WebkitBackdropFilter: 'blur(40px)',
              border: '1px solid rgba(255,255,255,0.9)',
              boxShadow: '0 40px 80px rgba(0,0,0,0.08), inset 0 0 40px rgba(255,255,255,1)',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}
          >
            {/* Breathing core inner glow */}
            <m.div
              animate={{ opacity: [0.4, 0.8, 0.4], scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, transparent 70%)',
                zIndex: 1
              }}
            />
            
            <img loading="lazy" 
              src={heroImg} 
              alt="Bhagavan - Founder" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'grayscale(20%) contrast(1.15) brightness(1.05)', 
                zIndex: 2,
                borderRadius: '50%',
                padding: '12px', // Liquid glass rim effect
                backgroundClip: 'content-box'
              }} 
            />
          </m.div>

        </m.div>
      </div>
    </section>
  );
}
