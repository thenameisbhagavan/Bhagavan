import React, { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import '../styles/Connect.css';

// ═══════════════════════════════════════════════════════════════════════════
// PRESERVED EMAILJS CONFIGURATION
// ═══════════════════════════════════════════════════════════════════════════
const EMAILJS_SERVICE_ID = "service_8pg8cek";
const EMAILJS_NOTIFICATION_TEMPLATE_ID = "template_8v4b864";
const EMAILJS_AUTOREPLY_TEMPLATE_ID = "template_bdwrdmc";
const EMAILJS_PUBLIC_KEY = "GOTwySQukEpQEuRa5";

// ─── Motion ───────────────────────────────────────────────────────────────────
const EASE = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15 } },
};

// ─── Reveal helper ────────────────────────────────────────────────────────────
function Reveal({ children, className }) {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
    >
      {children}
    </m.div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const CONVERSATIONS = [
  "Software Engineering",
  "Artificial Intelligence",
  "Machine Learning",
  "Full Stack Development",
  "Career Technology",
  "Research & Innovation"
];

const EXPLORING = [
  "AI Engineering",
  "Software Engineering",
  "Career Intelligence",
  "RAG Systems",
  "Developer Tools",
  "Intelligent Products"
];

const PHILOSOPHY = [
  "Technology should empower people.",
  "Learning should remain accessible.",
  "Products should create impact.",
  "Intelligence should guide growth."
];

// ─── Page ─────────────────────────────────────────────────────────────────────
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
      linkedin_link: "https://www.linkedin.com/in/gsssbhagavan/",
      github_link: "https://github.com/bhagavan444"
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

  return (
    <div className="con-page">

      {/* PRESERVED NOTIFICATIONS */}
      <AnimatePresence>
        {status === 'success' && (
          <m.div 
            initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }}
            className="con-toast con-toast--success"
          >
            <div className="con-toast-title">Message Sent Successfully.</div>
            <div className="con-toast-desc">Thank you for reaching out.<br/>I will respond as soon as possible.</div>
          </m.div>
        )}
        {status === 'error' && (
          <m.div 
            initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }}
            className="con-toast con-toast--error"
          >
            <div className="con-toast-title">Something went wrong.</div>
            <div className="con-toast-desc">Please verify your connection or try again later.</div>
          </m.div>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════════ */}
      <section className="con-hero" aria-label="Contact Hero">
        <m.h1 
          className="con-hero-headline"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE }}
        >
          Let's Build Something Meaningful.
        </m.h1>
        <m.p 
          className="con-hero-sub"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
        >
          The most important products begin with a conversation.
        </m.p>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — OPEN TO CONVERSATIONS ABOUT
      ══════════════════════════════════════════════════════ */}
      <section className="con-open">
        <div className="con-constrain">
          <Reveal className="center-align">
            <m.span className="con-eyebrow" variants={fadeUp}>Who Reaches Out</m.span>
            <m.h2 className="con-section-headline" variants={fadeUp}>
              Open To Conversations About.
            </m.h2>
          </Reveal>
          
          <Reveal className="con-large-list">
            {CONVERSATIONS.map((topic) => (
              <m.h3 key={topic} className="con-large-item" variants={fadeUp}>
                {topic}
              </m.h3>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — DIRECT CONTACT
      ══════════════════════════════════════════════════════ */}
      <section className="con-direct con-alt">
        <div className="con-constrain center-align">
          <Reveal>
            <m.h2 className="con-section-headline" variants={fadeUp}>
              Reach Out Directly.
            </m.h2>
            
            <m.div className="con-utility-links" variants={fadeUp}>
              <a href="mailto:g.sivasatysaibhagavan@gmail.com" className="con-utility-link">Email <span>↗</span></a>
              <a href="https://www.linkedin.com/in/gopalajosyula-siva-satya-sai-bhagavan-1624a027b/" target="_blank" rel="noopener noreferrer" className="con-utility-link">LinkedIn <span>↗</span></a>
              <a href="https://github.com/bhagavan444" target="_blank" rel="noopener noreferrer" className="con-utility-link">GitHub <span>↗</span></a>
              <a href="/Siva_Bhagavan_Resume.pdf" target="_blank" rel="noopener noreferrer" className="con-utility-link">Resume <span>↗</span></a>
            </m.div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — CONTACT FORM
      ══════════════════════════════════════════════════════ */}
      <section id="conversation-form-section" className="con-form-section">
        <div className="con-constrain">
          <Reveal className="center-align">
            <m.h2 className="con-section-headline" variants={fadeUp}>
              Start A Conversation.
            </m.h2>
          </Reveal>

          <Reveal>
            <m.div className="con-form-wrapper" variants={fadeUp}>
              <form onSubmit={handleSubmit} className="con-form">
                
                <div className="con-form-row">
                  <div className="con-form-group">
                    <label className="con-label">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="con-input" placeholder="Your Name" />
                  </div>
                  <div className="con-form-group">
                    <label className="con-label">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="con-input" placeholder="hello@example.com" />
                  </div>
                </div>

                <div className="con-form-group">
                  <label className="con-label">Company (Optional)</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} className="con-input" placeholder="Organization" />
                </div>

                <div className="con-form-group">
                  <label className="con-label">Subject</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="con-input" placeholder="What is this regarding?" />
                </div>

                <div className="con-form-group">
                  <label className="con-label">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required className="con-input con-textarea" placeholder="Share your thoughts..." />
                </div>

                <div className="con-form-action">
                  <button type="submit" disabled={status === 'loading'} className="con-submit-btn">
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </m.div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 5 — CURRENTLY EXPLORING
      ══════════════════════════════════════════════════════ */}
      <section className="con-explore con-alt">
        <div className="con-constrain">
          <Reveal className="center-align">
            <m.h2 className="con-section-headline" variants={fadeUp}>
              Currently Exploring.
            </m.h2>
          </Reveal>
          
          <Reveal className="con-large-list">
            {EXPLORING.map((explore) => (
              <m.h3 key={explore} className="con-large-item" variants={fadeUp}>
                {explore}
              </m.h3>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 6 — PHILOSOPHY
      ══════════════════════════════════════════════════════ */}
      <section className="con-philosophy">
        <div className="con-constrain">
          <Reveal className="center-align">
            <m.span className="con-eyebrow" variants={fadeUp}>Philosophy</m.span>
            <m.h2 className="con-section-headline" variants={fadeUp}>
              Technology Should Create Opportunity.
            </m.h2>
          </Reveal>
          
          <Reveal className="con-large-list">
            {PHILOSOPHY.map((statement) => (
              <m.h3 key={statement} className="con-large-item" variants={fadeUp}>
                {statement}
              </m.h3>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 7 & 8 — CLOSING & CTA
      ══════════════════════════════════════════════════════ */}
      <section className="con-closing con-dark" aria-label="Closing statement">
        <div className="con-constrain center-align">
          <Reveal>
            <m.h2 className="con-closing-headline" variants={fadeUp}>
              The Next Great Idea May Begin Here.
            </m.h2>
            <m.p className="con-closing-sub" variants={fadeUp}>
              Whether you're building a product, exploring an idea, hiring an engineer, or discussing the future of AI, I'd love to hear from you.
            </m.p>
            <m.div variants={fadeUp} style={{ marginTop: '80px' }}>
              <button onClick={handleScrollToForm} className="con-pill-btn">
                Let's Talk
              </button>
            </m.div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
