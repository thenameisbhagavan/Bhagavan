import SEO from "../components/SEO";
import React, { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import BrandSignature from "../components/BrandSignature";
import '../styles/Credentials.css';
import { Link } from 'react-router-dom';

// ─── Core Certificate Assets ────────────────────────────────────────────────
import googleEduCert from '../assets/google_page-0001.jpg';
import githubActionsCert from '../assets/git.jpg';
import microsoftPromptWritingCert from '../assets/prompt.jpg';
import deepLearningPythonCert from '../assets/deep.jpg';
import gfgFsCert from '../assets/cert-gfg-fs.png';
import gfgJavaCert from '../assets/cert-gfg-java.png';
import gfgPythonCert from '../assets/cert-gfg-python.png';
import geminiStudentCert from '../assets/cert-gemini-student.png';
import geminiFacultyCert from '../assets/cert-gemini-faculty.png';
import geminiStudentUniCert from '../assets/cert-gemini-student-uni.png';
import infosysAzureCert from '../assets/cert-infosys-azure.png';
import infosysDsCert from '../assets/cert-infosys-ds.png';
import ibmAiCert from '../assets/cert-ibm-ai.png';
import gcpGenAiCert from '../assets/cert-gcp-genai.png';
import gcpIntroGenAiCert from '../assets/cert-gcp-intro-genai.png';
import infosysMlopsCert from '../assets/cert-infosys-mlops.png';
import infosysServiceNowCert from '../assets/cert-infosys-servicenow.png';
import infosysJsCert from '../assets/cert-infosys-js.png';
import infosysJavaCert from '../assets/cert-infosys-java.png';
import infosysDjangoCert from '../assets/cert-infosys-django.png';
import infosysMasterPythonCert from '../assets/cert-infosys-master-python.png';
import infosysDevopsCert from '../assets/cert-infosys-devops.png';
import ibmLlmCert from '../assets/cert-ibm-llm.png';
import ibmPromptingCert from '../assets/cert-ibm-prompting.png';
import infosysPythonDsCert from '../assets/cert-infosys-python-ds.png';
import infosysMlPythonCert from '../assets/cert-infosys-ml-python.png';
import infosysIntroDsCert from '../assets/cert-infosys-intro-ds.png';
import ucscCCert from '../assets/cert-ucsc-c-everyone.png';
import infosysAgileCert from '../assets/cert-infosys-agile.png';
import awsCloudCert from '../assets/cert-aws-cloud.png';
import trainingCert from '../assets/training.png';

// ─── Motion ───────────────────────────────────────────────────────────────────
const appleEase = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: appleEase } },
};

// ─── Data Groupings for Engineering Archive ───────────────────────────────────
const ARCHIVE = [
  {
    id: "ai-data",
    category: "Artificial Intelligence & Data",
    certs: [
      { img: googleEduCert, provider: "Google", label: "Generative AI with Gemini" },
      { img: microsoftPromptWritingCert, provider: "Microsoft Copilot", label: "The Art of Prompt Writing" },
      { img: deepLearningPythonCert, provider: "LinkedIn", label: "Deep Learning with Python" },
      { img: gcpGenAiCert, provider: "Google Cloud", label: "Generative AI" },
      { img: gcpIntroGenAiCert, provider: "Google Cloud", label: "Gen AI Introduction" },
      { img: ibmAiCert, provider: "IBM", label: "Artificial Intelligence" },
      { img: ibmLlmCert, provider: "IBM", label: "Large Language Models" },
      { img: ibmPromptingCert, provider: "IBM", label: "Prompt Engineering" },
      { img: geminiFacultyCert, provider: "Google", label: "Gemini Academy Faculty" },
      { img: geminiStudentCert, provider: "Google", label: "Gemini Academy Student" },
      { img: geminiStudentUniCert, provider: "Google", label: "Gemini Academy University" },
      { img: infosysDsCert, provider: "Infosys", label: "Data Science" },
      { img: infosysPythonDsCert, provider: "Infosys", label: "Python Data Science" },
      { img: infosysIntroDsCert, provider: "Infosys", label: "Intro to Data Science" },
      { img: infosysMlPythonCert, provider: "Infosys", label: "ML with Python" },
      { img: infosysMlopsCert, provider: "Infosys", label: "MLOps" }
    ]
  },
  {
    id: "cloud",
    category: "Cloud & Infrastructure",
    certs: [
      { img: awsCloudCert, provider: "AWS", label: "Cloud Foundations" },
      { img: infosysAzureCert, provider: "Infosys", label: "Azure Cloud" },
      { img: infosysDevopsCert, provider: "Infosys", label: "DevOps" }
    ]
  },
  {
    id: "software",
    category: "Software Engineering",
    certs: [
      { img: gfgFsCert, provider: "GeeksforGeeks", label: "Full Stack Development" },
      { img: githubActionsCert, provider: "LinkedIn", label: "Practical GitHub Actions" },
      { img: infosysDjangoCert, provider: "Infosys", label: "Django Web Dev" },
      { img: infosysServiceNowCert, provider: "Infosys", label: "ServiceNow" }
    ]
  },
  {
    id: "programming",
    category: "Programming Mastery",
    certs: [
      { img: gfgJavaCert, provider: "GeeksforGeeks", label: "Java" },
      { img: infosysJavaCert, provider: "Infosys", label: "Java Foundations" },
      { img: gfgPythonCert, provider: "GeeksforGeeks", label: "Python" },
      { img: infosysMasterPythonCert, provider: "Infosys", label: "Master Python" },
      { img: infosysJsCert, provider: "Infosys", label: "JavaScript" },
      { img: ucscCCert, provider: "UCSC", label: "C for Everyone" }
    ]
  },
  {
    id: "professional",
    category: "Professional Development",
    certs: [
      { img: infosysAgileCert, provider: "Infosys", label: "Agile Methodology" }
    ]
  }
];

// ─── Modal Component ────────────────────────────────────────────────────────
const ArtifactViewer = ({ src, alt, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <m.div 
      className="cred-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: appleEase }}
      onClick={onClose}
    >
      <button className="cred-modal-close" onClick={onClose} aria-label="Close viewer">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <m.div 
        className="cred-modal-content"
        initial={{ scale: 0.96, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.98, opacity: 0, y: -10 }}
        transition={{ duration: 0.5, ease: appleEase }}
        onClick={e => e.stopPropagation()}
      >
        <div className="cred-modal-header">ENGINEERING ARTIFACT</div>
        <img src={src} alt={alt} className="cred-modal-img"  loading="lazy" />
      </m.div>
    </m.div>
  );
};

// ─── Page Component ───────────────────────────────────────────────────────────
export default function Credentials() {
  const [selectedArtifact, setSelectedArtifact] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO 
        description="Technical credentials and engineering record of Bhagavan. Verified certifications in AI, Machine Learning, Full Stack Engineering, and Data Science." 
        keywords="Bhagavan Credentials, AI Certifications, Machine Learning Certificates, Engineering Record, Data Science, AI Product Engineer" 
      />

      <AnimatePresence>
        {selectedArtifact && (
          <ArtifactViewer 
            src={selectedArtifact.src} 
            alt={selectedArtifact.alt} 
            onClose={() => setSelectedArtifact(null)} 
          />
        )}
      </AnimatePresence>

      <div className="cred-page">
        
        {/* ══════════════════════════════════════════════════════
            1. HERO
        ══════════════════════════════════════════════════════ */}
        <section className="cred-hero" data-nav-theme="light">
          <div className="cred-bounds">
            <div className="cred-hero-grid">
              <div className="ch-left">
                <m.div className="cred-hero-eyebrow" initial="hidden" animate="visible" variants={fadeUp}>
                  CREDENTIALS / ENGINEERING RECORD / PRESENT
                </m.div>
                <m.h1 className="cred-hero-headline" initial="hidden" animate="visible" variants={fadeUp}>
                  Knowledge becomes<br />evidence.
                </m.h1>
                <m.p className="cred-hero-sub" initial="hidden" animate="visible" variants={fadeUp}>
                  An evolving record of the systems, technologies, and disciplines I have studied, practiced, and applied.
                </m.p>
              </div>
              <div className="ch-right">
                <m.div className="cred-hero-index" initial="hidden" animate="visible" variants={fadeUp}>
                  <div className="chi-item">
                    <span className="chi-num">01</span>
                    <span className="chi-cat">AI & DATA</span>
                    <span className="chi-count">16 credentials</span>
                  </div>
                  <div className="chi-item">
                    <span className="chi-num">02</span>
                    <span className="chi-cat">SOFTWARE</span>
                    <span className="chi-count">04 credentials</span>
                  </div>
                  <div className="chi-item">
                    <span className="chi-num">03</span>
                    <span className="chi-cat">CLOUD</span>
                    <span className="chi-count">03 credentials</span>
                  </div>
                  <div className="chi-item">
                    <span className="chi-num">04</span>
                    <span className="chi-cat">PROGRAMMING</span>
                    <span className="chi-count">06 credentials</span>
                  </div>
                  <div className="chi-item">
                    <span className="chi-num">05</span>
                    <span className="chi-cat">PROFESSIONAL</span>
                    <span className="chi-count">01 credential</span>
                  </div>
                </m.div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            2. CORE IDEA
        ══════════════════════════════════════════════════════ */}
        <section className="cred-core-idea" data-nav-theme="light">
          <div className="cred-bounds">
            <m.h2 className="cci-headline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Credentials matter only when they change what you can build.
            </m.h2>
            <m.p className="cci-body" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Courses document exposure.<br/>
              Projects demonstrate application.<br/>
              Engineering sits between the two.
            </m.p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            3. CREDENTIAL MAP
        ══════════════════════════════════════════════════════ */}
        <section className="cred-map" data-nav-theme="light">
          <div className="cred-bounds">
            <m.div className="cred-section-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              THE RECORD
            </m.div>
            
            <m.div className="cred-map-row" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              {ARCHIVE.map((group, i) => (
                <button key={group.id} className="cred-map-item" onClick={() => handleScrollTo(group.id)}>
                  <span className="cmi-num">0{i + 1}</span>
                  <span className="cmi-title">{group.category}</span>
                  <ArrowDown className="cmi-arrow" size={16} />
                </button>
              ))}
            </m.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            4. FEATURED EVIDENCE
        ══════════════════════════════════════════════════════ */}
        <section className="cred-featured" data-nav-theme="light">
          <div className="cred-bounds">
            <m.div className="cred-section-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              FEATURED EVIDENCE
            </m.div>
            
            <div className="featured-list">
              
              {/* Feature 1: Google Gen AI */}
              <m.div className="featured-item" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                <div className="fi-meta">
                  <div className="fi-provider">GOOGLE</div>
                  <h3 className="fi-title">Generative AI with Gemini</h3>
                  
                  <div className="fi-detail" style={{ marginTop: '24px' }}>
                    <span className="fi-detail-label">DOMAIN</span>
                    <span className="fi-detail-value">Artificial Intelligence</span>
                  </div>
                  
                  <div className="fi-detail" style={{ marginTop: '16px' }}>
                    <span className="fi-detail-label">SKILLS</span>
                    <div className="fi-skills">
                      {["Prompt Engineering", "Responsible AI", "Generative AI", "Gemini", "Human-Centered AI"].map((skill, idx) => (
                        <span key={idx} className="fi-skill">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="fi-artifact">
                  <button className="cred-artifact-btn" onClick={() => setSelectedArtifact({ src: googleEduCert, alt: "Google Generative AI Certificate" })}>
                    <img src={googleEduCert} alt="Google Generative AI Certificate" loading="lazy" />
                    <span className="cred-artifact-hover">VIEW ARTIFACT ↗</span>
                  </button>
                </div>
              </m.div>

              {/* Feature 2: Microsoft Prompting */}
              <m.div className="featured-item reverse" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                <div className="fi-meta">
                  <div className="fi-provider">MICROSOFT</div>
                  <h3 className="fi-title">The Art of Prompt Writing</h3>
                  
                  <div className="fi-detail" style={{ marginTop: '24px' }}>
                    <span className="fi-detail-label">DOMAIN</span>
                    <span className="fi-detail-value">Generative AI</span>
                  </div>
                  
                  <div className="fi-detail" style={{ marginTop: '16px' }}>
                    <span className="fi-detail-label">SKILLS</span>
                    <div className="fi-skills">
                      {["AI Prompt Design", "LLMs", "AI Productivity", "Instruction Design", "Structured Prompting"].map((skill, idx) => (
                        <span key={idx} className="fi-skill">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="fi-artifact">
                  <button className="cred-artifact-btn" onClick={() => setSelectedArtifact({ src: microsoftPromptWritingCert, alt: "Microsoft Prompt Writing Certificate" })}>
                    <img src={microsoftPromptWritingCert} alt="Microsoft Prompt Writing Certificate" loading="lazy" />
                    <span className="cred-artifact-hover">VIEW ARTIFACT ↗</span>
                  </button>
                </div>
              </m.div>

              {/* Feature 3: Deep Learning */}
              <m.div className="featured-item" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                <div className="fi-meta">
                  <div className="fi-provider">LINKEDIN LEARNING</div>
                  <h3 className="fi-title">Deep Learning with Python</h3>
                  
                  <div className="fi-detail" style={{ marginTop: '24px' }}>
                    <span className="fi-detail-label">DOMAIN</span>
                    <span className="fi-detail-value">Machine Learning</span>
                  </div>
                  
                  <div className="fi-detail" style={{ marginTop: '16px' }}>
                    <span className="fi-detail-label">SKILLS</span>
                    <div className="fi-skills">
                      {["Sequence Models", "Transformers", "Deep Learning", "Keras", "RNN", "LSTM", "NLP"].map((skill, idx) => (
                        <span key={idx} className="fi-skill">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="fi-artifact">
                  <button className="cred-artifact-btn" onClick={() => setSelectedArtifact({ src: deepLearningPythonCert, alt: "Deep Learning Certificate" })}>
                    <img src={deepLearningPythonCert} alt="Deep Learning Certificate" loading="lazy" />
                    <span className="cred-artifact-hover">VIEW ARTIFACT ↗</span>
                  </button>
                </div>
              </m.div>

              {/* Feature 4: Full Stack */}
              <m.div className="featured-item reverse" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                <div className="fi-meta">
                  <div className="fi-provider">GEEKSFORGEEKS</div>
                  <h3 className="fi-title">Full Stack Development</h3>
                  
                  <div className="fi-detail" style={{ marginTop: '24px' }}>
                    <span className="fi-detail-label">DOMAIN</span>
                    <span className="fi-detail-value">Software Engineering</span>
                  </div>
                  
                  <div className="fi-detail" style={{ marginTop: '16px' }}>
                    <span className="fi-detail-label">SKILLS</span>
                    <div className="fi-skills">
                      {["React", "Node.js", "Express", "MongoDB", "REST APIs", "Frontend Development"].map((skill, idx) => (
                        <span key={idx} className="fi-skill">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="fi-artifact">
                  <button className="cred-artifact-btn" onClick={() => setSelectedArtifact({ src: gfgFsCert, alt: "Full Stack Certificate" })}>
                    <img src={gfgFsCert} alt="Full Stack Certificate" loading="lazy" />
                    <span className="cred-artifact-hover">VIEW ARTIFACT ↗</span>
                  </button>
                </div>
              </m.div>
              
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            5. KNOWLEDGE DOMAINS
        ══════════════════════════════════════════════════════ */}
        <section className="cred-domains" data-nav-theme="light">
          <div className="cred-bounds">
            <m.div className="cred-section-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              KNOWLEDGE DOMAINS
            </m.div>
            
            <div className="domain-stack">
              <m.div className="domain-row" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                <div className="dr-num">01</div>
                <div className="dr-info">
                  <h3 className="dr-title">INTELLIGENCE</h3>
                  <p className="dr-desc">Generative AI · LLMs · Deep Learning · Data Science</p>
                </div>
                <div className="dr-creds">
                  <div className="dr-cred-item">Google — Generative AI with Gemini</div>
                  <div className="dr-cred-item">IBM — Artificial Intelligence</div>
                  <div className="dr-cred-item">Infosys — Data Science</div>
                </div>
              </m.div>

              <m.div className="domain-row" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                <div className="dr-num">02</div>
                <div className="dr-info">
                  <h3 className="dr-title">SYSTEMS</h3>
                  <p className="dr-desc">Cloud · DevOps · CI/CD · Infrastructure</p>
                </div>
                <div className="dr-creds">
                  <div className="dr-cred-item">AWS — Cloud Foundations</div>
                  <div className="dr-cred-item">Infosys — DevOps</div>
                  <div className="dr-cred-item">LinkedIn — GitHub Actions</div>
                </div>
              </m.div>

              <m.div className="domain-row" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                <div className="dr-num">03</div>
                <div className="dr-info">
                  <h3 className="dr-title">SOFTWARE</h3>
                  <p className="dr-desc">Full Stack · Django · JavaScript · ServiceNow</p>
                </div>
                <div className="dr-creds">
                  <div className="dr-cred-item">GeeksforGeeks — Full Stack</div>
                  <div className="dr-cred-item">Infosys — Django Web Dev</div>
                  <div className="dr-cred-item">Infosys — ServiceNow</div>
                </div>
              </m.div>

              <m.div className="domain-row" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                <div className="dr-num">04</div>
                <div className="dr-info">
                  <h3 className="dr-title">COMPUTATION</h3>
                  <p className="dr-desc">Python · Java · C · Problem Solving</p>
                </div>
                <div className="dr-creds">
                  <div className="dr-cred-item">Infosys — Master Python</div>
                  <div className="dr-cred-item">GeeksforGeeks — Java</div>
                  <div className="dr-cred-item">UCSC — C for Everyone</div>
                </div>
              </m.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            6. ENGINEERING RECORD TIMELINE
        ══════════════════════════════════════════════════════ */}
        <section className="cred-record" data-nav-theme="light">
          <div className="cred-bounds">
            <m.div className="cred-section-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              THE ENGINEERING RECORD
            </m.div>
            
            <div className="record-timeline">
              <m.div className="rt-node" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                <div className="rt-year">2022</div>
                <div className="rt-phase">Beginning</div>
              </m.div>

              <m.div className="rt-node" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                <div className="rt-year">2024</div>
                <div className="rt-phase">Exploration</div>
              </m.div>

              <m.div className="rt-node" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                <div className="rt-year">2025</div>
                <div className="rt-phase">Acceleration</div>
              </m.div>

              <m.div className="rt-node rt-current" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                <div className="rt-year">PRESENT</div>
                <div className="rt-phase">AI SYSTEMS ENGINEERING</div>
                <div className="rt-details">
                  {["Google AI", "Generative AI", "LLMs", "Deep Learning", "Transformers", "GitHub Actions", "Continuous Product Development"].map((detail, idx) => (
                    <span key={idx} className="rt-detail">{detail}</span>
                  ))}
                </div>
              </m.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            7. THE ARCHIVE
        ══════════════════════════════════════════════════════ */}
        <section className="cred-archive" data-nav-theme="light">
          <div className="cred-bounds">
            <m.h2 className="archive-headline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Complete Archive
            </m.h2>

            {ARCHIVE.map((group, i) => (
              <div className="archive-group" key={group.id} id={group.id}>
                <m.div className="ag-category" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                  {group.category}
                </m.div>
                <div className="archive-rows">
                  {group.certs.map((cert, j) => (
                    <m.div 
                      key={j}
                      className="archive-row"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-100px" }}
                      variants={fadeUp}
                      onClick={() => setSelectedArtifact({ src: cert.img, alt: cert.label })}
                    >
                      <span className="ar-num">{(j + 1).toString().padStart(2, '0')}</span>
                      <span className="ar-provider">{cert.provider}</span>
                      <span className="ar-label">{cert.label}</span>
                      <span className="ar-view">VIEW ↗</span>
                      
                      {/* Desktop hover preview */}
                      <div className="ar-preview">
                        <img src={cert.img} alt={cert.label} loading="lazy" />
                      </div>
                      
                      {/* Mobile inline image */}
                      <div className="ar-mobile-img">
                        <img src={cert.img} alt={cert.label} loading="lazy" />
                      </div>
                    </m.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            8. APPLICATION BRIDGE
        ══════════════════════════════════════════════════════ */}
        <section className="cred-bridge" data-nav-theme="light">
          <div className="cred-bounds">
            <m.h2 className="bridge-headline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Learning is only useful when<br/>it changes what gets built.
            </m.h2>

            <m.div className="bridge-flow" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <span className="bf-word">LEARNED</span>
              <ArrowRight className="bf-arrow" />
              <span className="bf-word">PRACTICED</span>
              <ArrowRight className="bf-arrow" />
              <span className="bf-word">APPLIED</span>
              <ArrowRight className="bf-arrow" />
              <span className="bf-word">SHIPPED</span>
            </m.div>

            <m.div className="bridge-connections" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <div className="bc-group">
                <div className="bc-domain">AI / ML</div>
                <ArrowDown className="bc-arrow" size={16} />
                <div className="bc-systems">
                  <span className="bc-system">CareerOS</span>
                  <span className="bc-system">AuraOS</span>
                  <span className="bc-system">VERITAS</span>
                </div>
              </div>

              <div className="bc-group">
                <div className="bc-domain">Software Engineering</div>
                <ArrowDown className="bc-arrow" size={16} />
                <div className="bc-systems">
                  <span className="bc-system">CareerOS</span>
                  <span className="bc-system">AuraOS</span>
                </div>
              </div>

              <div className="bc-group">
                <div className="bc-domain">Product Engineering</div>
                <ArrowDown className="bc-arrow" size={16} />
                <div className="bc-systems">
                  <span className="bc-system">VoltDrive</span>
                  <span className="bc-system">CareerOS</span>
                </div>
              </div>
            </m.div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            9. PHILOSOPHY
        ══════════════════════════════════════════════════════ */}
        <section className="cred-philosophy" data-nav-theme="light">
          <div className="cred-bounds">
            <m.h2 className="cp-primary" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Certificates don't define an engineer.
            </m.h2>
            <m.p className="cp-secondary" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              They document what I chose to learn.<br/>
              The systems I build show what I learned to do with it.
            </m.p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            10. CLOSING
        ══════════════════════════════════════════════════════ */}
        <section className="cred-closing" data-nav-theme="light">
          <div className="cred-bounds">
            <m.h2 className="cc-primary" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              THE RECORD CONTINUES.
            </m.h2>
            <m.p className="cc-body" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Learning is not a completed section of the portfolio.<br/>
              It is part of the engineering process.
            </m.p>

            <m.div className="cc-focus" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <div className="cc-focus-label">CURRENT FOCUS</div>
              <div className="cc-focus-tags">AI SYSTEMS · AGENTIC SYSTEMS · RAG · MEMORY · PRODUCT ENGINEERING</div>
            </m.div>

            <m.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <Link to="/work" className="cred-cta">
                EXPLORE THE SYSTEMS <ArrowRight size={16} />
              </Link>
            </m.div>
          </div>
        </section>

        <BrandSignature />
      </div>
    </>
  );
}
