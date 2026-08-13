import SEO from "../components/SEO";
import React, { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import BrandSignature from "../components/BrandSignature";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import '../styles/Connect.css';
import resumePdf from '../assets/bhagavanresume.pdf';

// ═══════════════════════════════════════════════════════════════════════════
// PRESERVED EMAILJS CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════════
const EMAILJS_SERVICE_ID = "service_8pg8cek";
const EMAILJS_NOTIFICATION_TEMPLATE_ID = "template_8v4b864";
const EMAILJS_AUTOREPLY_TEMPLATE_ID = "template_bdwrdmc";
const EMAILJS_PUBLIC_KEY = "GOTwySQukEpQEuRa5";

// ─── Motion ───────────────────────────────────────────────────────────────────
const appleEase = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: appleEase } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Connect() {
  
  // PRESERVED EMAILJS STATE
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // PRESERVED EMAILJS LOGIC
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const templateParams = {
      name: formData.name,
      email: formData.email,
      company: formData.company || 'Not Provided',
      subject: formData.subject,
      message: formData.message,
      portfolio_link: window.location.origin,
      linkedin_link: "https://www.linkedin.com/in/thenameisbhagavan/",
      github_link: "https://github.com/thenameisbhagavan"
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_NOTIFICATION_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_AUTOREPLY_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  const handleScrollToForm = () => {
    const formSection = document.getElementById('conversation-form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("thenameisbhagavan@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      <SEO 
        title="Connect | TheNameIsBhagavan" 
        description="Connect with Bhagavan to discuss AI engineering, full stack development, and ambitious technical problems." 
        keywords="AI Engineer, Software Developer, Contact Bhagavan, Tech Collaboration" 
      />

      <div className="con-page">

        {/* PRESERVED NOTIFICATIONS */}
        <AnimatePresence>
          {status === 'success' && (
            <m.div 
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.4, ease: appleEase }}
              className="con-toast con-toast--success"
            >
              <div className="con-toast-title">MESSAGE DELIVERED</div>
              <div className="con-toast-desc">Thank you for reaching out. I will respond as soon as possible.</div>
            </m.div>
          )}
          {status === 'error' && (
            <m.div 
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.4, ease: appleEase }}
              className="con-toast con-toast--error"
            >
              <div className="con-toast-title">DELIVERY FAILED — TRY DIRECT EMAIL</div>
              <div className="con-toast-desc">There was an issue sending your message. Please try connecting via LinkedIn or email directly.</div>
            </m.div>
          )}
        </AnimatePresence>

        <div className="c-bounds">
          
          {/* ══════════════════════════════════════════════════════
              1. HERO
          ══════════════════════════════════════════════════════ */}
          <section className="ch-section">
            <div className="ch-grid">
              
              <m.div className="ch-left" initial="hidden" animate="visible" variants={fadeUp}>
                <div className="c-label">OPEN CHANNEL / 2026</div>
                <h1 className="ch-headline">
                  Let's build something<br/>worth discussing.
                </h1>
                <p className="ch-sub">
                  Open to conversations around AI systems, software engineering, intelligent products, and ambitious technical problems.
                </p>
              </m.div>

              <m.div className="ch-right" initial="hidden" animate="visible" variants={fadeUp}>
                <div className="c-label">CURRENTLY</div>
                <div className="ch-availability">
                  <div className="cha-item">
                    <span className="cha-label">BUILDING</span>
                    <span className="cha-value">AI SYSTEMS</span>
                  </div>
                  <div className="cha-item">
                    <span className="cha-label">EXPLORING</span>
                    <span className="cha-value">AGENTIC INTELLIGENCE</span>
                  </div>
                  <div className="cha-item">
                    <span className="cha-label">INTERESTED IN</span>
                    <span className="cha-value">PRODUCT ENGINEERING</span>
                  </div>
                  <div className="cha-item">
                    <span className="cha-label">AVAILABLE FOR</span>
                    <span className="cha-value">SELECT CONVERSATIONS</span>
                  </div>
                </div>
              </m.div>

            </div>
          </section>

          {/* ══════════════════════════════════════════════════════
              2. CONVERSATION ROUTES
          ══════════════════════════════════════════════════════ */}
          <section className="cr-section">
            <m.div className="c-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              CHOOSE A ROUTE
            </m.div>

            <m.div className="cr-list" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
              <button className="cr-row" onClick={handleScrollToForm}>
                <span className="cr-num">01</span>
                <span className="cr-title">BUILD</span>
                <span className="cr-desc">Turn a technical problem into a working system.</span>
                <ArrowUpRight size={20} className="cr-arrow" />
              </button>
              <button className="cr-row" onClick={handleScrollToForm}>
                <span className="cr-num">02</span>
                <span className="cr-title">COLLABORATE</span>
                <span className="cr-desc">Bring engineering, product, or AI work together.</span>
                <ArrowUpRight size={20} className="cr-arrow" />
              </button>
              <button className="cr-row" onClick={handleScrollToForm}>
                <span className="cr-num">03</span>
                <span className="cr-title">DISCUSS</span>
                <span className="cr-desc">Talk through an idea, architecture, or direction.</span>
                <ArrowUpRight size={20} className="cr-arrow" />
              </button>
              <button className="cr-row" onClick={handleScrollToForm}>
                <span className="cr-num">04</span>
                <span className="cr-title">CONNECT</span>
                <span className="cr-desc">Start a conversation.</span>
                <ArrowUpRight size={20} className="cr-arrow" />
              </button>
            </m.div>
          </section>

          {/* ══════════════════════════════════════════════════════
              3. PRIMARY CONTACT
          ══════════════════════════════════════════════════════ */}
          <section className="cp-section">
            <m.div className="cp-container" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <div className="c-label">PRIMARY CHANNEL</div>
              
              <div className="cp-email-row">
                <a href="mailto:thenameisbhagavan@gmail.com" className="cp-email">
                  thenameisbhagavan@gmail.com
                </a>
                <button 
                  className={`cp-copy-btn ${copied ? 'copied' : ''}`} 
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                >
                  {copied ? 'COPIED' : 'COPY'}
                </button>
              </div>

              <div className="cp-note">
                Email is the fastest way to start a conversation.
              </div>
            </m.div>
          </section>

          {/* ══════════════════════════════════════════════════════
              4. START A CONVERSATION & GUIDANCE
          ══════════════════════════════════════════════════════ */}
          <section id="conversation-form-section" className="cf-section">
            <div className="cf-grid">
              
              <m.div className="cf-form-wrapper" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                <div className="c-label">START A CONVERSATION</div>
                
                <form className="cf-form" onSubmit={handleSubmit}>
                  <div className="cf-field">
                    <label htmlFor="name"><span>01 /</span> NAME</label>
                    <input type="text" id="name" name="name" className="cf-input" value={formData.name} onChange={handleChange} required />
                  </div>
                  
                  <div className="cf-field">
                    <label htmlFor="email"><span>02 /</span> EMAIL</label>
                    <input type="email" id="email" name="email" className="cf-input" value={formData.email} onChange={handleChange} required />
                  </div>
                  
                  <div className="cf-field">
                    <label htmlFor="company"><span>03 /</span> COMPANY / ORGANIZATION</label>
                    <input type="text" id="company" name="company" className="cf-input" value={formData.company} onChange={handleChange} />
                  </div>
                  
                  <div className="cf-field">
                    <label htmlFor="subject"><span>04 /</span> SUBJECT</label>
                    <input type="text" id="subject" name="subject" className="cf-input" value={formData.subject} onChange={handleChange} required />
                  </div>
                  
                  <div className="cf-field">
                    <label htmlFor="message"><span>05 /</span> MESSAGE</label>
                    <textarea id="message" name="message" className="cf-textarea" value={formData.message} onChange={handleChange} required />
                  </div>

                  <button type="submit" className="cf-submit" disabled={status === 'loading'}>
                    {status === 'loading' ? 'SENDING' : 'SEND MESSAGE'}
                    {status !== 'loading' && <ArrowRight size={16} className="cf-submit-arrow" />}
                  </button>
                </form>
              </m.div>

              <m.div className="cf-guidance" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                <div className="c-label">GOOD CONVERSATIONS USUALLY HAVE:</div>
                <div className="cg-list">
                  <div className="cg-item">
                    <div className="cg-title">A PROBLEM</div>
                    <div className="cg-desc">What are you trying to solve?</div>
                  </div>
                  <div className="cg-item">
                    <div className="cg-title">A CONTEXT</div>
                    <div className="cg-desc">What already exists?</div>
                  </div>
                  <div className="cg-item">
                    <div className="cg-title">A DIRECTION</div>
                    <div className="cg-desc">What are you hoping to build?</div>
                  </div>
                  <div className="cg-item">
                    <div className="cg-title">A QUESTION</div>
                    <div className="cg-desc">What would you like to discuss?</div>
                  </div>
                </div>
              </m.div>

            </div>
          </section>

          {/* ══════════════════════════════════════════════════════
              5. PROFESSIONAL CHANNELS & SIGNAL
          ══════════════════════════════════════════════════════ */}
          <section className="cs-section">
            <div className="cs-grid">
              
              <m.div className="cs-left" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                <div className="c-label">OTHER CHANNELS</div>
                <div className="cs-list">
                  <a href="https://github.com/thenameisbhagavan" target="_blank" rel="noopener noreferrer" className="cs-row">
                    <span className="cs-row-title">GitHub</span>
                    <span className="cs-row-desc">Engineering in public</span>
                    <ArrowUpRight size={16} className="cs-row-icon" />
                  </a>
                  <a href="https://www.linkedin.com/in/thenameisbhagavan/" target="_blank" rel="noopener noreferrer" className="cs-row">
                    <span className="cs-row-title">LinkedIn</span>
                    <span className="cs-row-desc">Professional network</span>
                    <ArrowUpRight size={16} className="cs-row-icon" />
                  </a>
                  <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="cs-row">
                    <span className="cs-row-title">Resume</span>
                    <span className="cs-row-desc">Professional context</span>
                    <ArrowUpRight size={16} className="cs-row-icon" />
                  </a>
                  <Link to="/work" className="cs-row">
                    <span className="cs-row-title">Portfolio</span>
                    <span className="cs-row-desc">The broader system</span>
                    <ArrowRight size={16} className="cs-row-icon" />
                  </Link>
                </div>
              </m.div>

              <m.div className="cs-right" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                <div className="c-label">CURRENT SIGNAL</div>
                <div className="csig-list">
                  <div className="csig-item">
                    <span className="csig-num">01 /</span>
                    <div className="csig-content">
                      <span className="csig-title">BUILDING</span>
                      <span className="csig-desc">AI SYSTEMS + PRODUCT ENGINEERING</span>
                    </div>
                  </div>
                  <div className="csig-item">
                    <span className="csig-num">02 /</span>
                    <div className="csig-content">
                      <span className="csig-title">EXPLORING</span>
                      <span className="csig-desc">AGENTIC INTELLIGENCE + SYSTEM DESIGN</span>
                    </div>
                  </div>
                  <div className="csig-item">
                    <span className="csig-num">03 /</span>
                    <div className="csig-content">
                      <span className="csig-title">DOCUMENTING</span>
                      <span className="csig-desc">ENGINEERING THROUGH THE JOURNAL</span>
                    </div>
                  </div>
                  <div className="csig-item">
                    <span className="csig-num">04 /</span>
                    <div className="csig-content">
                      <span className="csig-title">SHIPPING</span>
                      <span className="csig-desc">CAREEROS · AURAOS · VERITAS · VOLTDRIVE</span>
                    </div>
                  </div>
                </div>
              </m.div>

            </div>
          </section>

          {/* ══════════════════════════════════════════════════════
              6. HUMAN LAYER & FINAL CTA
          ══════════════════════════════════════════════════════ */}
          <section className="cx-section">
            <div className="cx-grid">
              
              <m.div className="cx-left" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                <div className="cx-human">
                  Behind every system is a conversation about what should exist.
                </div>
                <div className="cx-human-sub">
                  Start with the problem. The rest can be figured out together.
                </div>
              </m.div>

              <m.div className="cx-right" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                <div className="c-label">RESPONSE</div>
                <div className="cx-response">
                  <div className="cxr-item">
                    <span className="cxr-label">EMAIL</span>
                    <span className="cxr-value">Preferred channel</span>
                  </div>
                  <div className="cxr-item">
                    <span className="cxr-label">LINKEDIN</span>
                    <span className="cxr-value">Professional conversations</span>
                  </div>
                  <div className="cxr-item">
                    <span className="cxr-label">REPLY</span>
                    <span className="cxr-value">As soon as reasonably possible</span>
                  </div>
                </div>
              </m.div>
              
            </div>

            <m.div className="cx-cta" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <div className="cx-cta-title">Have a problem worth solving?</div>
              <button className="cx-cta-link" onClick={handleScrollToForm}>
                START THE CONVERSATION <ArrowRight size={16} />
              </button>
            </m.div>

            <m.div className="cx-explore" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <div className="c-label">EXPLORE THE SYSTEMS →</div>
              <div className="cxe-links">
                <Link to="/work/careeros" className="cxe-link">CareerOS</Link>
                <Link to="/work/auraos" className="cxe-link">AuraOS</Link>
                <Link to="/work/veritas" className="cxe-link">VERITAS</Link>
                <Link to="/work/voltdrive" className="cxe-link">VoltDrive</Link>
              </div>
            </m.div>

            <m.div className="cx-signature" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <div className="cxs-status">
                <span>CHANNEL STATUS / OPEN</span>
                <span>SYSTEM SIGNATURE / TNB — 2026</span>
              </div>
              <BrandSignature />
            </m.div>

          </section>

        </div>
      </div>
    </>
  );
}
