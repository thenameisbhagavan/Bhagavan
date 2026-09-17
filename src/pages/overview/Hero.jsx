import React from 'react';
import { m } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import heroImg from '../../assets/profile-hero-optimized.webp';
import resumeIconImg from '../../assets/resume-icon.png';

const appleEase = [0.22, 1, 0.36, 1];

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="es-hero act-i-identity" data-nav-theme="light">
      <div className="es-hero-bounds-2col">
        
        {/* LEFT COLUMN — IDENTITY & POSITION */}
        <m.div 
          className="es-hero-left" 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: appleEase }}
        >
          <div className="es-hero-badge-wrap">
            <div className="es-live-badge">
              <span className="es-live-dot"></span>
              <span className="es-live-text">TECHNICAL AI/ML & DATA SCIENCE TRAINER @ DATA VALLEY</span>
            </div>
          </div>

          <h1 className="es-hero-headline-2col">
            I build <span className="es-gradient-text">intelligent AI systems</span> & train engineers.
          </h1>

          <p className="es-hero-sub-2col">
            Hi, I'm <strong>TheNameIsBhagavan</strong> (Gopala Josyula Siva Satya Sai Bhagavan)—Technical AI/ML & Data Science Trainer at Data Valley and AI Product Engineer. I develop creative web designs while growing as an AI/ML developer & trainer.
          </p>

          {/* Action Buttons */}
          <div className="es-hero-actions-group">
            <button className="es-btn-primary apple-pressable" onClick={() => navigate('/work')}>
              <span>Explore Shipped Systems</span>
              <ArrowRight size={16} />
            </button>

            <button className="es-btn-secondary apple-pressable" onClick={() => navigate('/resume')}>
              <img src={resumeIconImg} alt="Resume" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
              <span>Resume</span>
            </button>
          </div>

          {/* Shipped Systems Quick Chips */}
          <div className="es-hero-chips-wrap">
            <span className="es-chips-label">SHIPPED PLATFORMS:</span>
            <div className="es-chips-list">
              <span className="es-chip" onClick={() => navigate('/work/careeros')}>CareerOS</span>
              <span className="es-chip" onClick={() => navigate('/work/auraos')}>AuraOS</span>
              <span className="es-chip" onClick={() => navigate('/work/veritas')}>VERITAS</span>
              <span className="es-chip" onClick={() => navigate('/work/voltdrive')}>VoltDrive</span>
            </div>
          </div>

        </m.div>

        {/* RIGHT COLUMN — CLEAN HERO PORTRAIT */}
        <m.div 
          className="es-hero-right"
          initial={{ opacity: 0, filter: 'blur(12px)', scale: 0.98 }}
          animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
          transition={{ duration: 1.4, delay: 0.2, ease: appleEase }}
        >
          <div className="es-hero-portrait-frame">
            <img src={heroImg} alt="Bhagavan" className="es-portrait-img-old" loading="eager" />
          </div>
        </m.div>

      </div>
    </section>
  );
}
