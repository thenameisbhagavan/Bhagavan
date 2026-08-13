import SEO from "../components/SEO";
import React, { useEffect, useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Download } from 'lucide-react';
import '../styles/Resume.css';
import VerificationCenter from '../components/resume/VerificationCenter';
import resumePdf from '../assets/bhagavanresume.pdf';
import profileImg from '../assets/profile-hero.jpg';

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

const modalVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: appleEase } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.3, ease: appleEase } }
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const resumesData = [
  {
    id: "ai",
    title: "AI Engineer",
    category: "Featured",
    tags: ["AI Systems Engineer", "Python Backend Engineer"],
    image: "/images/resumes/ai-engineer.jpg",
    featured: true
  },
  {
    id: "ml",
    title: "Machine Learning Engineer",
    category: "Primary Engineering",
    tags: ["Deep Learning", "Applied AI"],
    image: "/images/resumes/ml-engineer.jpg"
  },
  {
    id: "genai",
    title: "Generative AI / LLM Engineer",
    category: "Primary Engineering",
    tags: ["RAG", "Agentic AI"],
    image: "/images/resumes/genai-llm.jpg"
  },
  {
    id: "py-backend",
    title: "Python Backend Engineer",
    category: "Primary Engineering",
    tags: ["FastAPI", "REST APIs"],
    image: "/images/resumes/python-backend.jpg"
  },
  {
    id: "ai-fs",
    title: "AI Full Stack Engineer",
    category: "Primary Engineering",
    tags: ["React", "AI Integration"],
    image: "/images/resumes/ai-full-stack.jpg"
  },
  {
    id: "fs",
    title: "Full Stack Developer",
    category: "Primary Engineering",
    tags: ["MERN", "Web Apps"],
    image: "/images/resumes/full-stack.jpg"
  },
  {
    id: "py-dev",
    title: "Python Developer",
    category: "Primary Engineering",
    tags: ["Backend", "Data Driven"],
    image: "/images/resumes/python-developer.jpg"
  },
  {
    id: "java",
    title: "Java Developer",
    category: "Primary Engineering",
    tags: ["OOP", "Spring"],
    image: "/images/resumes/java-developer.jpg"
  },
  {
    id: "it-support",
    title: "IT Support Engineer",
    category: "Technical Support",
    tags: ["Systems", "Troubleshooting"],
    image: "/images/resumes/it-support.jpg"
  },
  {
    id: "sap",
    title: "SAP Developer",
    category: "Technical Support",
    tags: ["Enterprise Software", "Integration"],
    image: "/images/resumes/sap-developer.jpg"
  },
  {
    id: "biz",
    title: "Business Development & Operations",
    category: "Business",
    tags: ["Operations", "Coordination"],
    image: "/images/resumes/business-operations.jpg"
  }
];

// ─── Modal Viewer Component ───────────────────────────────────────────────────
function ResumeModal({ activeResume, closePreview }) {
  useEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closePreview();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closePreview]);

  if (!activeResume) return null;

  return (
    <m.div 
      className="res-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closePreview}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <button 
        className="res-modal-close" 
        onClick={closePreview} 
        aria-label="Close Preview Modal"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
      
      <m.div 
        className="res-modal-content"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="res-modal-image-container">
          <img 
            src={activeResume.image} 
            alt={`${activeResume.title} Resume Preview`} 
            className="res-modal-image"
            loading="lazy"
          />
        </div>
        <div className="res-modal-caption">
          <h3 id="modal-title" className="res-modal-title">{activeResume.title}</h3>
          <p className="res-modal-subtitle">{activeResume.tags.join(" · ")}</p>
        </div>
      </m.div>
    </m.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Resume() {
  const [activeResume, setActiveResume] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredResume = resumesData.find(r => r.featured) || resumesData[0];
  const indexResumes = resumesData.filter(r => !r.featured);

  return (
    <>
      <SEO 
        title="Resume | TheNameIsBhagavan" 
        description="Professional engineering resume library for Bhagavan, covering AI Systems, Python Backend, Machine Learning, and Full Stack Development." 
        keywords="AI Engineer Resume, Python Backend Engineer, Resume Library, ML Engineer" 
      />

      <div className="res-page">
        <div className="r-bounds">
          
          {/* ══════════════════════════════════════════════════════
              1. HERO
          ══════════════════════════════════════════════════════ */}
          <section className="rh-section">
            <div className="rh-grid">
              <m.div className="rh-left" initial="hidden" animate="visible" variants={fadeUp}>
                <h1 className="rh-headline">
                  One engineer.<br/>Different ways to build.
                </h1>
                <p className="rh-sub">
                  Role-specific resumes built around the systems, technologies, and engineering problems I am prepared to work on.
                </p>
              </m.div>

              <m.div className="rh-right" initial="hidden" animate="visible" variants={fadeUp}>
                <div className="rh-metadata">
                  <span className="rh-meta-item">PROFESSIONAL RECORD / 2026</span>
                  <span className="rh-meta-item">AI SYSTEMS · PYTHON · PRODUCT ENGINEERING</span>
                  <span className="rh-meta-item" style={{ color: '#86868b' }}>OPEN TO ENGINEERING OPPORTUNITIES</span>
                </div>
              </m.div>
            </div>
          </section>



          {/* ══════════════════════════════════════════════════════
              2. PRIMARY PROFILE
          ══════════════════════════════════════════════════════ */}
          <section className="rp-section">
            <m.div className="rp-container" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <div className="r-label">PRIMARY PROFILE</div>
              <div>
                <h2 className="rp-title">AI Product / Systems Engineer</h2>
                <p className="rp-sub">AI-focused engineer building intelligent systems, backend infrastructure, and full-stack product experiences.</p>
              </div>

              <div className="rp-spec-grid">
                <div className="rp-spec-col">
                  <span className="rp-spec-title">FOCUS</span>
                  <span className="rp-spec-val">AI Systems<br/>Python Backend<br/>Product Engineering<br/>Full-Stack Development</span>
                </div>
                <div className="rp-spec-col">
                  <span className="rp-spec-title">CORE STACK</span>
                  <span className="rp-spec-val">Python · FastAPI · React · SQL · MongoDB<br/>AI/ML · RAG · Agentic AI · REST APIs</span>
                </div>
                <div className="rp-spec-col">
                  <span className="rp-spec-title">CURRENT DIRECTION</span>
                  <span className="rp-spec-val">AI Systems Engineering<br/>Building intelligent interfaces</span>
                </div>
              </div>

              <button className="rp-action" onClick={() => setActiveResume(featuredResume)}>
                VIEW PRIMARY RESUME <ArrowUpRight size={16} />
              </button>
            </m.div>
          </section>

          {/* ══════════════════════════════════════════════════════
              3. RESUME SELECTOR (ROLE INDEX)
          ══════════════════════════════════════════════════════ */}
          <section className="rx-section">
            <m.div className="r-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              SELECT A PROFESSIONAL DIRECTION
            </m.div>

            <m.div className="rx-list" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
              {/* Force the featured resume to be #01, then map the rest */}
              <button className="rx-row" onClick={() => setActiveResume(featuredResume)}>
                <span className="rx-num">01</span>
                <span className="rx-title">{featuredResume.title}</span>
                <span className="rx-desc">{featuredResume.tags.join(" · ")}</span>
                <ArrowUpRight size={20} className="rx-arrow" />
              </button>

              {indexResumes.map((resume, index) => (
                <button key={resume.id} className="rx-row" onClick={() => setActiveResume(resume)}>
                  <span className="rx-num">{String(index + 2).padStart(2, '0')}</span>
                  <span className="rx-title">{resume.title}</span>
                  <span className="rx-desc">{resume.tags.join(" · ")}</span>
                  <ArrowUpRight size={20} className="rx-arrow" />
                </button>
              ))}
            </m.div>
          </section>

          {/* ══════════════════════════════════════════════════════
              4. PRIMARY PROFESSIONAL RECORD
          ══════════════════════════════════════════════════════ */}
          <section className="rf-section">
            <m.div className="rf-container" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <div className="rf-header">
                <div className="r-label">PRIMARY PROFESSIONAL RECORD</div>
                <h3 className="rf-title">{featuredResume.title}</h3>
                <span className="rf-tags">{featuredResume.tags.join(" · ")}</span>
              </div>

              <div 
                className="rf-preview-wrapper" 
                onClick={() => setActiveResume(featuredResume)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setActiveResume(featuredResume)}
                aria-label={`View ${featuredResume.title} Resume`}
              >
                <img src={featuredResume.image} alt="Primary Resume Preview" className="rf-image" loading="lazy" />
              </div>

              <div className="rf-action">
                <button className="rp-action" onClick={() => setActiveResume(featuredResume)}>
                  VIEW FULL RECORD <ArrowUpRight size={16} />
                </button>
              </div>
            </m.div>
          </section>

          {/* ══════════════════════════════════════════════════════
              5. ROLE INTELLIGENCE
          ══════════════════════════════════════════════════════ */}
          <section className="ri-section">
            <m.div className="r-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              ONE FOUNDATION. DIFFERENT EMPHASIS.
            </m.div>

            <m.div className="ri-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
              <m.div className="ri-item" variants={fadeUp}>
                <span className="ri-role">AI ENGINEERING</span>
                <span className="ri-emphasis">→ Intelligence + systems</span>
              </m.div>
              <m.div className="ri-item" variants={fadeUp}>
                <span className="ri-role">BACKEND</span>
                <span className="ri-emphasis">→ APIs + architecture + reliability</span>
              </m.div>
              <m.div className="ri-item" variants={fadeUp}>
                <span className="ri-role">FULL STACK</span>
                <span className="ri-emphasis">→ Product + frontend + backend</span>
              </m.div>
              <m.div className="ri-item" variants={fadeUp}>
                <span className="ri-role">MACHINE LEARNING</span>
                <span className="ri-emphasis">→ Models + data + experimentation</span>
              </m.div>
            </m.div>
          </section>

          {/* ══════════════════════════════════════════════════════
              6. PROFESSIONAL SIGNAL
          ══════════════════════════════════════════════════════ */}
          <section className="rs-section">
            <div className="rs-grid">
              
              <m.div className="rs-left" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                <div className="r-label">PROFESSIONAL SIGNAL</div>
              </m.div>

              <m.div className="rs-right" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
                <div className="rs-spec-list">
                  <m.div className="rs-spec-row" variants={fadeUp}>
                    <span className="rs-spec-label">PRIMARY DISCIPLINE</span>
                    <span className="rs-spec-val">AI Systems Engineering</span>
                  </m.div>
                  <m.div className="rs-spec-row" variants={fadeUp}>
                    <span className="rs-spec-label">ENGINEERING LAYER</span>
                    <span className="rs-spec-val">Backend · Full Stack · AI/ML</span>
                  </m.div>
                  <m.div className="rs-spec-row" variants={fadeUp}>
                    <span className="rs-spec-label">PRIMARY LANGUAGE</span>
                    <span className="rs-spec-val">Python</span>
                  </m.div>
                  <m.div className="rs-spec-row" variants={fadeUp}>
                    <span className="rs-spec-label">PRODUCT LAYER</span>
                    <span className="rs-spec-val">React · APIs · Intelligent Interfaces</span>
                  </m.div>
                  <m.div className="rs-spec-row" variants={fadeUp}>
                    <span className="rs-spec-label">SYSTEMS</span>
                    <span className="rs-spec-val">CareerOS · AuraOS · VERITAS · VoltDrive</span>
                  </m.div>
                  <m.div className="rs-spec-row" variants={fadeUp}>
                    <span className="rs-spec-label">CURRENT GOAL</span>
                    <span className="rs-spec-val">Build and contribute to production-grade AI systems.</span>
                  </m.div>
                </div>
              </m.div>

            </div>
          </section>

          {/* ══════════════════════════════════════════════════════
              7. WHERE I FIT (CAREER POSITIONING)
          ══════════════════════════════════════════════════════ */}
          <section className="rd-section">
            <m.div className="r-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              WHERE I FIT
            </m.div>

            <m.div className="rd-list" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
              <m.div className="rd-item" variants={fadeUp}>
                <div className="rd-title">01 — AI SYSTEMS</div>
                <div className="rd-desc">Building intelligent software systems and AI-enabled products.</div>
              </m.div>
              <m.div className="rd-item" variants={fadeUp}>
                <div className="rd-title">02 — BACKEND / PLATFORM</div>
                <div className="rd-desc">Designing APIs, services, data flows, and application infrastructure.</div>
              </m.div>
              <m.div className="rd-item" variants={fadeUp}>
                <div className="rd-title">03 — AI PRODUCT ENGINEERING</div>
                <div className="rd-desc">Connecting intelligence, backend systems, and product experience.</div>
              </m.div>
            </m.div>
          </section>

          {/* ══════════════════════════════════════════════════════
              8. VERIFIED RECORD
          ══════════════════════════════════════════════════════ */}
          <section className="rv-section">
            <m.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <div className="r-label">VERIFIED RECORD</div>
              <p className="rv-desc">Supporting evidence behind the professional profile.</p>
              <VerificationCenter />
            </m.div>
          </section>

          {/* ══════════════════════════════════════════════════════
              9. DOCUMENT ACCESS
          ══════════════════════════════════════════════════════ */}
          <section className="ra-section">
            <m.div className="ra-container" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <div className="r-label">DOCUMENT ACCESS</div>
              
              <div className="ra-resume">
                Primary Resume<br/>
                <span style={{ color: '#86868b', fontSize: '18px', fontWeight: '400' }}>AI Engineer</span>
              </div>

              <div className="ra-links">
                <a href={resumePdf} download="Bhagavan_AI_Engineer_Resume.pdf" className="ra-link">
                  DOWNLOAD RESUME <Download size={14} style={{ marginLeft: 4 }} />
                </a>
                <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="ra-link">
                  VIEW ONLINE <ArrowUpRight size={14} style={{ marginLeft: 4 }} />
                </a>
              </div>
            </m.div>
          </section>

          {/* ══════════════════════════════════════════════════════
              10. CLOSING
          ══════════════════════════════════════════════════════ */}
          <section className="rc-section">
            <m.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <h2 className="rc-title">
                THE DOCUMENT IS SIMPLE.<br/>
                THE WORK IS NOT.
              </h2>
              <p className="rc-sub">
                Use the resume for the summary. Explore the portfolio for the evidence.
              </p>
              
              <div className="rc-links">
                <Link to="/work" className="rc-link">
                  EXPLORE THE WORK <ArrowUpRight size={16} />
                </Link>
                <Link to="/journal" className="rc-link">
                  EXPLORE THE JOURNAL <ArrowUpRight size={16} />
                </Link>
                <Link to="/connect" className="rc-link">
                  START A CONVERSATION <ArrowRight size={16} />
                </Link>
              </div>
            </m.div>
          </section>

        </div>
      </div>

      <AnimatePresence>
        {activeResume && (
          <ResumeModal 
            activeResume={activeResume} 
            closePreview={() => setActiveResume(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
}
