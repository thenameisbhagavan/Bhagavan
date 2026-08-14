import React from 'react';
import { m } from 'framer-motion';
import logoImg from '../assets/logo.png';

const appleEase = [0.22, 1, 0.36, 1];

const BrandSignature = () => {
  return (
    <m.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.9, ease: appleEase }}
      viewport={{ once: true, amount: 0.5 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6vh 1.5rem 3vh',
        textAlign: 'center',
        marginTop: 'auto',
        fontFamily: "var(--font-system, 'SF Pro Text', -apple-system, sans-serif)",
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      {/* Hairline */}
      <div style={{ height: '1px', width: '40px', background: 'rgba(0,0,0,0.12)', marginBottom: '32px' }} />

      {/* TNB Mark */}
      <img 
        src={logoImg} 
        alt="TheNameIsBhagavan — TNB Engineering Mark" 
        style={{ 
          width: '28px', 
          height: '28px', 
          borderRadius: '6px', 
          marginBottom: '20px',
          opacity: 0.9,
        }} 
       loading="lazy" />

      {/* Brand Name */}
      <div style={{ 
        fontSize: '15px', 
        fontWeight: 600, 
        color: '#1d1d1f', 
        letterSpacing: '-0.01em', 
        marginBottom: '8px' 
      }}>
        <span className="brand-cursive">TheNameIsBhagavan</span>
      </div>

      {/* Discipline Lines */}
      <div style={{ 
        fontSize: '11px', 
        fontWeight: 600, 
        letterSpacing: '0.1em', 
        color: '#86868b', 
        textTransform: 'uppercase', 
        lineHeight: 1.8,
        marginBottom: '20px',
      }}>
        AI Systems<br/>
        Product Engineering<br/>
        Full-Stack Development
      </div>

      {/* TNB / Year Imprint */}
      <div style={{ 
        fontSize: '10px', 
        fontWeight: 600, 
        letterSpacing: '0.14em', 
        color: '#aeaeb2', 
        textTransform: 'uppercase',
      }}>
        TNB / {new Date().getFullYear()}
      </div>

      {/* Hairline */}
      <div style={{ height: '1px', width: '40px', background: 'rgba(0,0,0,0.12)', marginTop: '32px' }} />
    </m.div>
  );
};

export default BrandSignature;

