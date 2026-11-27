import SEO from "../components/SEO";
import React, { useState, useEffect } from 'react';
import { m as Motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import BrandSignature from "../components/BrandSignature";
import MagneticLink from "../components/motion/MagneticLink";
import { ArrowRight, ArrowUpRight, Check, Copy } from "lucide-react";
import '../styles/Connect.css';
import resumePdf from '../assets/Bhagavan_Resume.pdf';

// ═══════════════════════════════════════════════════════════════════════════
// PRESERVED EMAILJS CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════════
const EMAILJS_SERVICE_ID = "service_8pg8cek";
const EMAILJS_NOTIFICATION_TEMPLATE_ID = "template_8v4b864";
const EMAILJS_AUTOREPLY_TEMPLATE_ID = "template_bdwrdmc";
const EMAILJS_PUBLIC_KEY = "GOTwySQukEpQEuRa5";

const CONVERSATION_ROUTES = [
  {
    id: 'build',
    num: '01',
    title: 'BUILD',
    desc: 'Turn a technical problem into a working system.',
    subject: 'Engineering Collaboration — System Build'
  },
  {
    id: 'collaborate',
    num: '02',
    title: 'COLLABORATE',
    desc: 'Bring engineering, product, or AI work together.',
    subject: 'AI & Product Collaboration Inquiry'
  },
  {
    id: 'discuss',
    num: '03',
    title: 'DISCUSS',
    desc: 'Talk through an idea, architecture, or direction.',
    subject: 'Technical Workshop / Architecture Discussion'
  },
  {
    id: 'connect',
    num: '04',
    title: 'CONNECT',
    desc: 'Start a conversation.',
    subject: 'General Introduction & Networking'
  }
];

const QUICK_TOPICS = [
  'Software Engineering Role',
  'AI / Voice Agent Project',
  'GenAI Workshop / Talk',
  'Architecture Review'
];

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
  const [activeRoute, setActiveRoute] = useState('build');

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

  const handleScrollToForm = (route = null) => {
    if (route) {
      setActiveRoute(route.id);
      setFormData((prev) => ({
        ...prev,
        subject: route.subject
      }));
    }
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
        description="Connect with Siva Satya Sai Bhagavan Gopalajosyula (TheNameIsBhagavan) — Software Engineer & AI/Data Science Trainer at Data Valley Training, Placements & IT Solutions. Open to engineering collaborations, technical workshops, and consulting discussions." 
        keywords="Contact Bhagavan, TheNameIsBhagavan Contact, Software Engineer, AI Data Science Trainer, Data Valley Training Placements IT Solutions, Vijayawada" 
      />

      <div className="con-page">

        {/* PRESERVED NOTIFICATIONS */}
        <AnimatePresence>
          {status === 'success' && (
            <Motion.div 
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.4, ease: appleEase }}
              className="con-toast con-toast--success"
            >
              <div className="con-toast-title">MESSAGE DELIVERED</div>
              <div className="con-toast-desc">Thank you for reaching out. I will respond as soon as possible.</div>
            </Motion.div>
          )}
          {status === 'error' && (
            <Motion.div 
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.4, ease: appleEase }}
              className="con-toast con-toast--error"
            >
              <div className="con-toast-title">DELIVERY FAILED — TRY DIRECT EMAIL</div>
              <div className="con-toast-desc">There was an issue sending your message. Please try connecting via LinkedIn or email directly.</div>
            </Motion.div>
          )}
        </AnimatePresence>

        <div className="c-bounds">
          
          {/* ══════════════════════════════════════════════════════
              1. HERO
          ══════════════════════════════════════════════════════ */}
          <section className="ch-section" data-nav-theme="light">
            <div className="ch-grid">
              
              <Motion.div className="ch-left" initial="hidden" animate="visible" variants={fadeUp}>
                <div className="c-label">OPEN CHANNEL / 2024 &ndash; PRESENT</div>
                <h1 className="ch-headline">
                  Open to<br/>learning.
                </h1>
                <p className="ch-sub">
                  If you're building software, evaluating AI applications in production, or exploring practical technical training &mdash; I'd love to connect.
                </p>
              </Motion.div>

              <Motion.div className="ch-right" initial="hidden" animate="visible" variants={fadeUp}>
                <div className="c-label">CURRENT STATUS</div>
                <div className="ch-availability">
                  <div className="cha-item">
                    <span className="cha-label">ENGAGEMENT</span>
                    <span className="cha-value">SOFTWARE ENGINEER &amp; AI/DATA SCIENCE TRAINER AT DATA VALLEY TRAINING, PLACEMENTS &amp; IT SOLUTIONS</span>
                  </div>
                  <div className="cha-item">
                    <span className="cha-label">BUILDING</span>
                    <span className="cha-value">AI APPLICATIONS &amp; PYTHON BACKENDS</span>
                  </div>
                  <div className="cha-item">
                    <span className="cha-label">TEACHING</span>
                    <span className="cha-value">DATA SCIENCE, AI/ML &amp; GENERATIVE AI</span>
                  </div>
                  <div className="cha-item">
                    <span className="cha-label">EXPLORING</span>
                    <span className="cha-value">AGENTIC WORKFLOWS &amp; LLM EVALUATIONS</span>
                  </div>
                  <div className="cha-item">
                    <span className="cha-label">AVAILABLE FOR</span>
                    <span className="cha-value">OPEN TO CONVERSATIONS</span>
                  </div>
                </div>
              </Motion.div>

            </div>
          </section>

          {/* ══════════════════════════════════════════════════════
              2. CONVERSATION ROUTES
          ══════════════════════════════════════════════════════ */}
          <section className="cr-section" data-nav-theme="light">
            <Motion.div className="c-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              CHOOSE A ROUTE TO PREFILL CONTEXT
            </Motion.div>

            <Motion.div className="cr-list" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
              {CONVERSATION_ROUTES.map((route) => (
                <button
                  key={route.id}
                  type="button"
                  className={`cr-row ${activeRoute === route.id ? 'is-active' : ''}`}
                  onClick={() => handleScrollToForm(route)}
                >
                  <span className="cr-num">{route.num}</span>
                  <span className="cr-title">{route.title}</span>
                  <span className="cr-desc">{route.desc}</span>
                  <ArrowUpRight size={20} className="cr-arrow" />
                </button>
              ))}
            </Motion.div>
          </section>

          {/* ══════════════════════════════════════════════════════
              3. PRIMARY CONTACT
          ══════════════════════════════════════════════════════ */}
          <section className="cp-section" data-nav-theme="light">
            <Motion.div className="cp-container" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <div className="c-label">PRIMARY CHANNEL</div>
              
              <div className="cp-email-row">
                <a href="mailto:thenameisbhagavan@gmail.com" className="cp-email">
                  thenameisbhagavan@gmail.com
                </a>
                <MagneticLink strength={0.25}>
                  <button 
                    type="button"
                    className={`cp-copy-btn apple-pressable ${copied ? 'copied' : ''}`} 
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                  >
                    {copied ? <Check size={14} style={{ marginRight: 6 }} /> : <Copy size={14} style={{ marginRight: 6 }} />}
                    {copied ? 'COPIED' : 'COPY EMAIL'}
                  </button>
                </MagneticLink>
              </div>

              <div className="cp-note">
                Email is the fastest way to start a conversation.
              </div>
            </Motion.div>
          </section>

          {/* ══════════════════════════════════════════════════════
              4. START A CONVERSATION & GUIDANCE
          ══════════════════════════════════════════════════════ */}
          <section id="conversation-form-section" className="cf-section" data-nav-theme="light">
            <div className="cf-grid">
              
              <Motion.div className="cf-form-wrapper" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                <div className="c-label">START A CONVERSATION</div>

                <div className="cf-subject-pills" role="group" aria-label="Quick Subject Selection">
                  {QUICK_TOPICS.map((topic) => (
                    <button
                      key={topic}
                      type="button"
                      className={`cf-subject-pill ${formData.subject === topic ? 'is-active' : ''}`}
                      onClick={() => setFormData((prev) => ({ ...prev, subject: topic }))}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
                
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

                  <div style={{ marginTop: '16px' }}>
                    <MagneticLink strength={0.2}>
                      <button type="submit" className="cf-submit apple-pressable" disabled={status === 'loading'}>
                        {status === 'loading' ? 'SENDING' : 'SEND MESSAGE'}
                        {status !== 'loading' && <ArrowRight size={16} className="cf-submit-arrow" />}
                      </button>
                    </MagneticLink>
                  </div>
                </form>
              </Motion.div>

              <Motion.div className="cf-guidance" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
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
              </Motion.div>

            </div>
          </section>

          {/* ══════════════════════════════════════════════════════
              5. PROFESSIONAL CHANNELS & SIGNAL
          ══════════════════════════════════════════════════════ */}
          <section className="cs-section" data-nav-theme="light">
            <div className="cs-grid">
              
              <Motion.div className="cs-left" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
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
              </Motion.div>

              <Motion.div className="cs-right" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
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
              </Motion.div>

            </div>
          </section>

          {/* ══════════════════════════════════════════════════════
              6. HUMAN LAYER & FINAL CTA
          ══════════════════════════════════════════════════════ */}
          <section className="cx-section" data-nav-theme="light">
            <div className="cx-grid">
              
              <Motion.div className="cx-left" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                <div className="cx-human">
                  I don't have all the answers, but I know how to find them. I build, I break things, and I learn fast.
                </div>
                <div className="cx-human-sub">
                  Let's figure out the next problem together.
                </div>
              </Motion.div>

              <Motion.div className="cx-right" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
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
              </Motion.div>
              
            </div>

            <Motion.div className="cx-cta" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <div className="cx-cta-title">Want to talk?</div>
              <button type="button" className="cx-cta-link" onClick={() => handleScrollToForm()}>
                START THE CONVERSATION <ArrowRight size={16} />
              </button>
            </Motion.div>

            <Motion.div className="cx-explore" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <div className="c-label">EXPLORE THE SYSTEMS →</div>
              <div className="cxe-links">
                <Link to="/work/data-valley-assessment-platform" className="cxe-link">DV Assessments</Link>
                <Link to="/work/careeros" className="cxe-link">CareerOS</Link>
                <Link to="/work/auraos" className="cxe-link">AuraOS</Link>
                <Link to="/work/veritas" className="cxe-link">VERITAS</Link>
                <Link to="/work/voltdrive" className="cxe-link">VoltDrive</Link>
              </div>
            </Motion.div>

            <Motion.div className="cx-signature" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <div className="cxs-status">
                <span>CHANNEL STATUS / OPEN</span>
                <span>SYSTEM SIGNATURE / TNB — 2024</span>
              </div>
              <BrandSignature />
            </Motion.div>

          </section>

        </div>
      </div>
    </>
  );
}
