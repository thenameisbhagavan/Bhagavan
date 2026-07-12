import SEO from "../components/SEO";
import React, { useState, useEffect } from 'react';
import { m, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
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
const EASE = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: EASE } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.2 } },
};

// ─── Reveal helper ────────────────────────────────────────────────────────────
function Reveal({ children, className }) {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={stagger}
    >
      {children}
    </m.div>
  );
}

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

  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 800], [1, 0.95]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroY = useTransform(scrollY, [0, 800], [0, 100]);

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

  return (
    <>
      <SEO title="Connect & Contact | TheNameIsBhagavan" description="Get in touch with Bhagavan for collaborations, opportunities, or just to say hi." keywords="AI Engineer, Artificial Intelligence, Machine Learning, Portfolio, React, Full Stack" />

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
            <div className="con-toast-title">Delivery Failed.</div>
            <div className="con-toast-desc">There was an issue sending your message.<br/>Please try connecting via LinkedIn or email directly.</div>
          </m.div>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <m.section className="con-hero" style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}>
        <div className="con-constrain center-align">
          <m.h1 className="con-hero-headline" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, ease: EASE }}>
            Great products begin with<br/>great conversations.
          </m.h1>
        </div>
      </m.section>

      {/* ══════════════════════════════════════════════════════
          BEFORE THE CONVERSATION
      ══════════════════════════════════════════════════════ */}
      <section className="con-before">
        <div className="con-constrain center-align">
          <Reveal className="con-editorial-sequence">
            <m.h2 className="con-statement" variants={fadeUp}>Every meaningful collaboration<br/>begins with curiosity.</m.h2>
            <m.h2 className="con-statement text-muted" variants={fadeUp}>Ideas become discussions.</m.h2>
            <m.h2 className="con-statement text-muted" variants={fadeUp}>Discussions become products.</m.h2>
            <m.h2 className="con-statement" variants={fadeUp}>Products create impact.</m.h2>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          OPEN TO CONVERSATIONS (Progressive Reveal)
      ══════════════════════════════════════════════════════ */}
      <section className="con-topics">
        <div className="con-constrain center-align">
          <Reveal className="topics-sequence">
            {[
              "Software Engineering",
              "Artificial Intelligence",
              "Product Design",
              "Career Intelligence",
              "Research",
              "Innovation"
            ].map((topic, i) => (
              <m.div key={i} className="con-topic-line" variants={fadeUp}>{topic}</m.div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          DIRECT CONTACT HIERARCHY
      ══════════════════════════════════════════════════════ */}
      <section className="con-direct">
        <div className="con-constrain">
          <div className="direct-hierarchy">
            
            <m.a href="mailto:thenameisbhagavan@gmail.com" className="hierarchy-item hierarchy-primary" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <span className="hierarchy-label">Email</span>
              <span className="hierarchy-value">thenameisbhagavan@gmail.com</span>
              <span className="hierarchy-desc">The fastest way to start a conversation.</span>
            </m.a>

            <m.a href="https://www.linkedin.com/in/thenameisbhagavan/" target="_blank" rel="noreferrer" className="hierarchy-item hierarchy-secondary" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <span className="hierarchy-label">LinkedIn</span>
              <span className="hierarchy-value">Professional collaboration.</span>
            </m.a>

            <m.a href="https://github.com/thenameisbhagavan" target="_blank" rel="noreferrer" className="hierarchy-item hierarchy-tertiary" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <span className="hierarchy-label">GitHub</span>
              <span className="hierarchy-value">Engineering in public.</span>
            </m.a>

            <m.a href={resumePdf} target="_blank" rel="noreferrer" className="hierarchy-item hierarchy-quaternary" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <span className="hierarchy-label">Resume</span>
              <span className="hierarchy-value">Supporting context.</span>
            </m.a>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CONTACT FORM (The Emotional Bridge)
      ══════════════════════════════════════════════════════ */}
      <section className="con-form-section" id="conversation-form-section">
        <div className="con-constrain">
          <m.h2 className="form-editorial center-align" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            Every meaningful collaboration<br/>begins with one message.
          </m.h2>

          <m.div className="form-container" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <form onSubmit={handleSubmit} className="apple-premium-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Jane Doe" disabled={status === 'loading'} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="jane@example.com" disabled={status === 'loading'} />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required placeholder="What would you like to discuss?" disabled={status === 'loading'} />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Share your thoughts..." rows="6" disabled={status === 'loading'} />
              </div>

              <div className="form-actions center-align">
                <button type="submit" className="primary-submit-btn" disabled={status === 'loading' || !formData.name || !formData.email || !formData.message}>
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </m.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CURRENT FOCUS (Momentum)
      ══════════════════════════════════════════════════════ */}
      <section className="con-focus">
        <div className="con-constrain center-align">
          <div className="momentum-flow">
            {[
              "Today",
              "Building AI Systems",
              "Exploring Multi-Agent Intelligence",
              "Designing Human-Centered Products",
              "Learning Every Day"
            ].map((node, i, arr) => (
              <React.Fragment key={i}>
                <m.div 
                  className={i === 0 ? "momentum-node momentum-start" : "momentum-node"}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, ease: EASE }}
                >
                  {node}
                </m.div>
                {i < arr.length - 1 && (
                  <m.div className="momentum-arrow" initial={{ opacity: 0 }} whileInView={{ opacity: 0.3 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1 }}>
                    ↓
                  </m.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PHILOSOPHY
      ══════════════════════════════════════════════════════ */}
      <section className="con-philosophy">
        <div className="con-constrain center-align">
          
          <div className="philosophy-screen">
            <m.h2 className="con-principle" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Technology should empower people.
            </m.h2>
            <m.h2 className="con-principle" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Learning should remain accessible.
            </m.h2>
          </div>

          <div className="philosophy-screen">
            <m.h2 className="con-principle" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Products should create impact.
            </m.h2>
            <m.h2 className="con-principle" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Intelligence should guide growth.
            </m.h2>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CLOSING
      ══════════════════════════════════════════════════════ */}
      <section className="con-closing">
        <div className="con-constrain center-align">
          <div className="closing-sequence">
            
            <m.div className="closing-thought" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 2, ease: EASE }}>
              The Next Great Idea<br/>May Begin Here.
            </m.div>
            
            <m.div className="closing-thought text-muted" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 2, ease: EASE }}>
              Every meaningful product<br/>starts with curiosity.
            </m.div>

            <m.div className="closing-finale" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 2, ease: EASE }}>
              Every meaningful collaboration<br/>begins with one conversation.
            </m.div>

            <m.div className="closing-cta" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 2, ease: EASE, delay: 0.5 }}>
              <button onClick={handleScrollToForm} className="primary-submit-btn">
                Let's Talk
              </button>
            </m.div>

          </div>
        </div>
      </section>

    </div>
  
    </>
  );
}
