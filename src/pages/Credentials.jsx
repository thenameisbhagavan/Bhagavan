import SEO from "../components/SEO";
import React, { useState, useEffect, useRef } from 'react';
import { m, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import SectionDivider from "../components/SectionDivider";
import BrandSignature from "../components/BrandSignature";
import { socialLinks } from '../constants/socialLinks';
import '../styles/Credentials.css';

// ─── 26 Core Certificate Assets ────────────────────────────────────────────────
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
import awsAiPractitionerCert from '../assets/cert-aws-ai-practitioner.jpg';
import awsLlmSystemsCert from '../assets/cert-aws-llm-systems.jpg';
import agenticAiCert from '../assets/cert-agentic-ai-products.jpg';

// ─── Special Training Program ─────────────────────────────────────────────────
import trainingCert from '../assets/training.png';

// ─── Motion ───────────────────────────────────────────────────────────────────
const EASE = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: EASE } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const imgReveal = {
  hidden:  { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.4, ease: EASE } },
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

// ─── Data Groupings for Engineering Archive ───────────────────────────────────
const ARCHIVE = [
  {
    category: "Artificial Intelligence & Data",
    certs: [
      { img: googleEduCert, label: "Google • Generative AI with Gemini" },
      { img: agenticAiCert, label: "LinkedIn • Designing Agentic AI Products" },
      { img: microsoftPromptWritingCert, label: "Microsoft Copilot • The Art of Prompt Writing" },
      { img: deepLearningPythonCert, label: "LinkedIn • Deep Learning with Python" },
      { img: gcpGenAiCert, label: "GCP Generative AI" },
      { img: gcpIntroGenAiCert, label: "GCP Gen AI Introduction" },
      { img: ibmAiCert, label: "IBM Artificial Intelligence" },
      { img: ibmLlmCert, label: "IBM Large Language Models" },
      { img: ibmPromptingCert, label: "IBM Prompt Engineering" },
      { img: geminiFacultyCert, label: "Gemini Academy Faculty" },
      { img: geminiStudentCert, label: "Gemini Academy Student" },
      { img: geminiStudentUniCert, label: "Gemini Academy University" },
      { img: infosysDsCert, label: "Infosys Data Science" },
      { img: infosysPythonDsCert, label: "Infosys Python Data Science" },
      { img: infosysIntroDsCert, label: "Infosys Intro to Data Science" },
      { img: infosysMlPythonCert, label: "Infosys ML with Python" },
      { img: infosysMlopsCert, label: "Infosys MLOps" }
    ]
  },
  {
    category: "Cloud & Infrastructure",
    certs: [
      { img: awsLlmSystemsCert, label: "LinkedIn • AI Engineering on AWS: Production-Grade LLM Systems" },
      { img: awsAiPractitionerCert, label: "LinkedIn • AWS Certified AI Practitioner (AIF-C01)" },
      { img: awsCloudCert, label: "AWS Cloud Foundations" },
      { img: infosysAzureCert, label: "Infosys Azure Cloud" },
      { img: infosysDevopsCert, label: "Infosys DevOps" }
    ]
  },
  {
    category: "Software Engineering",
    certs: [
      { img: gfgFsCert, label: "GeeksforGeeks Full Stack" },
      { img: githubActionsCert, label: "LinkedIn • Practical GitHub Actions" },
      { img: infosysDjangoCert, label: "Infosys Django Web Dev" },
      { img: infosysServiceNowCert, label: "Infosys ServiceNow" }
    ]
  },
  {
    category: "Programming Mastery",
    certs: [
      { img: gfgJavaCert, label: "GeeksforGeeks Java" },
      { img: infosysJavaCert, label: "Infosys Java Foundations" },
      { img: gfgPythonCert, label: "GeeksforGeeks Python" },
      { img: infosysMasterPythonCert, label: "Infosys Master Python" },
      { img: infosysJsCert, label: "Infosys JavaScript" },
      { img: ucscCCert, label: "UCSC C for Everyone" }
    ]
  },
  {
    category: "Professional Development",
    certs: [
      { img: infosysAgileCert, label: "Infosys Agile Methodology" }
    ]
  }
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Credentials() {
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 800], [1, 0.95]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroY = useTransform(scrollY, [0, 800], [0, 100]);

  // Foundation Sequence
  const foundRef = useRef(null);
  const { scrollYProgress: foundProgress } = useScroll({ target: foundRef, offset: ["start start", "end end"] });
  const f1 = useTransform(foundProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const f2 = useTransform(foundProgress, [0.15, 0.25, 0.35], [0, 1, 0]);
  const f3 = useTransform(foundProgress, [0.3, 0.4, 0.5], [0, 1, 0]);
  const f4 = useTransform(foundProgress, [0.45, 0.55, 0.65], [0, 1, 0]);
  const f5 = useTransform(foundProgress, [0.6, 0.7, 0.8], [0, 1, 0]);
  const f6 = useTransform(foundProgress, [0.75, 0.85, 1], [0, 1, 1]); // Shows the final Cert

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO title="TheNameIsBhagavan | Credentials" description="Explore the professional certifications, educational credentials, and continuous learning achievements of Bhagavan, specializing in AI, Machine Learning & Cloud." keywords="AI Engineer, Artificial Intelligence, Machine Learning, Portfolio, React, Full Stack, GitHub Actions, CI/CD, Workflow Automation, LinkedIn Learning, DevOps, Software Engineering, Automation, Microsoft Copilot, Prompt Engineering, AI Prompting, Generative AI, Large Language Models, Copilot, LLMs, AI Productivity, AWS AI Engineering, LLM Systems, Production AI, Enterprise AI, Cloud-native AI, Agentic AI, AI Agents, Autonomous Systems, AI Product Design, Intelligent Systems, Future of AI" />

    <div className="cred-page">
      
      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <m.section className="cred-hero" style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}>
        <div className="cred-constrain center-align">
          <m.h1 className="cred-hero-headline" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: EASE }}>
            Knowledge.<br/><span className="text-muted">Applied.</span>
          </m.h1>
          <m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.2, ease: EASE }} style={{ marginTop: '32px' }}>
             <a href={socialLinks.linkedin.url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', background: '#1d1d1f', color: '#fff', borderRadius: '30px', textDecoration: 'none', fontWeight: 500, fontSize: '15px', letterSpacing: '-0.01em', transition: 'transform 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'} aria-label="View LinkedIn Profile" title="View LinkedIn Profile">
                <Linkedin size={18} /> View LinkedIn Profile
             </a>
          </m.div>
        </div>
      </m.section>

      {/* ══════════════════════════════════════════════════════
          GOOGLE AI PREMIUM SECTION
      ══════════════════════════════════════════════════════ */}
      <SectionDivider />
      <section className="cred-premium-section">
        <div className="cred-constrain">
          <div className="premium-editorial">
            <m.div className="premium-label" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: EASE }}>
              GOOGLE AI
            </m.div>
            <m.h2 className="premium-headline" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, ease: EASE, delay: 0.1 }}>
              Learning directly from the people building modern AI.
            </m.h2>
            <m.p className="premium-subheading" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}>
              Artificial Intelligence evolves rapidly.<br/>
              Continuous learning is part of engineering.<br/><br/>
              This Google credential represents another step toward designing intelligent systems that are useful, reliable and human-centered.
            </m.p>
          </div>

          <m.div 
            className="premium-glass-card"
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: EASE }}
            style={{ y: useTransform(scrollY, [0, 1500], [100, -100]) }}
          >
            <div className="premium-card-left">
              <m.div className="cred-museum-frame" initial={{ y: 20 }} whileInView={{ y: 0 }} transition={{ duration: 2, ease: EASE, repeat: Infinity, repeatType: 'reverse' }}>
                <img src={googleEduCert} alt="Google for Education AI Certificate" loading="lazy" />
              </m.div>
            </div>
            <div className="premium-card-right">
              <div className="premium-card-section">
                <span className="premium-data-label">Google for Education</span>
                <span className="premium-data-value large">Generative AI for Educators with Gemini</span>
              </div>
              
              <div className="premium-card-section">
                <span className="premium-data-label">Completed</span>
                <span className="premium-data-value">July 2026</span>
              </div>
              
              <div className="premium-card-section">
                <span className="premium-data-label">Score</span>
                <span className="premium-data-value">100 / 100</span>
              </div>

              <div className="premium-card-section">
                <span className="premium-data-label">Skills Developed</span>
                <div className="premium-skills-list">
                  {["Prompt Engineering", "Responsible AI", "Generative AI", "Gemini", "Human-Centered AI", "AI Productivity"].map((skill, idx) => (
                    <span key={idx} className="premium-skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </m.div>

          <m.div 
            className="premium-quote"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.4 }}
          >
            <div className="premium-quote-text">
              "Every intelligent system begins with understanding.<br/>
              Every great engineer remains a lifelong learner."
            </div>
            <div className="premium-quote-author">— TheNameIsBhagavan</div>
          </m.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          AGENTIC AI PREMIUM SECTION
      ══════════════════════════════════════════════════════ */}
      <section className="cred-premium-section">
        <div className="cred-constrain">
          <div className="premium-editorial">
            <m.div className="premium-label" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: EASE }}>
              LINKEDIN LEARNING
            </m.div>
            <m.h2 className="premium-headline" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, ease: EASE, delay: 0.1 }}>
              Designing the Next Generation of Agentic AI Systems
            </m.h2>
            <m.p className="premium-subheading" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}>
              Artificial Intelligence is evolving from passive assistants into autonomous, goal-oriented systems capable of reasoning, planning, memory, and tool usage.<br/><br/>
              Understanding Agentic AI requires more than building models—it requires thinking about product design, user experience, decision-making workflows, and human-AI collaboration.<br/><br/>
              This LinkedIn Learning course strengthened my understanding of AI agents, autonomous workflows, agentic product thinking, and the design principles behind modern intelligent applications.<br/><br/>
              These concepts directly influence how I architect products like CareerOS and future AI-native software.
            </m.p>
          </div>

          <m.div 
            className="premium-glass-card"
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: EASE }}
            style={{ y: useTransform(scrollY, [0, 1500], [100, -100]) }}
          >
            <div className="premium-card-left">
              <m.div className="cred-museum-frame" initial={{ y: 20 }} whileInView={{ y: 0 }} transition={{ duration: 2, ease: EASE, repeat: Infinity, repeatType: 'reverse' }}>
                <img src={agenticAiCert} alt="Agentic AI Certificate" loading="lazy" />
              </m.div>
            </div>
            <div className="premium-card-right">
              <div className="premium-card-section">
                <span className="premium-data-label">Provider</span>
                <span className="premium-data-value large">LinkedIn Learning</span>
              </div>
              
              <div className="premium-card-section">
                <span className="premium-data-label">Course</span>
                <span className="premium-data-value large" style={{ fontSize: '18px', lineHeight: '1.2' }}>Designing Agentic AI Products</span>
              </div>
              
              <div className="premium-card-section">
                <span className="premium-data-label">Completed</span>
                <span className="premium-data-value">July 2026</span>
              </div>
              
              <div className="premium-card-section">
                <span className="premium-data-label">Duration</span>
                <span className="premium-data-value">1 Hour 4 Minutes</span>
              </div>
              
              <div className="premium-card-section">
                <span className="premium-data-label">Category</span>
                <span className="premium-data-value">Agentic AI</span>
              </div>

              <div className="premium-card-section">
                <span className="premium-data-label">Skills Developed</span>
                <div className="premium-skills-list">
                  {["AI Agents", "Agentic AI", "AI Product Design", "Autonomous Systems", "Human-AI Interaction", "AI Workflows", "Product Thinking", "Intelligent Systems", "AI Experience Design", "Future AI Products"].map((skill, idx) => (
                    <span key={idx} className="premium-skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </m.div>

          <m.div 
            className="premium-quote"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.4 }}
          >
            <div className="premium-quote-text">
              "The next generation of software will not simply respond—it will reason, plan, and collaborate."
            </div>
            <div className="premium-quote-author">— TheNameIsBhagavan</div>
          </m.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          MICROSOFT COPILOT PREMIUM SECTION
      ══════════════════════════════════════════════════════ */}
      <section className="cred-premium-section">
        <div className="cred-constrain">
          <div className="premium-editorial">
            <m.div className="premium-label" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: EASE }}>
              MICROSOFT
            </m.div>
            <m.h2 className="premium-headline" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, ease: EASE, delay: 0.1 }}>
              The Art of Prompt Engineering.
            </m.h2>
            <m.p className="premium-subheading" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}>
              Modern AI is no longer defined only by models.<br/><br/>
              The quality of intelligent systems increasingly depends on how humans communicate with them.<br/><br/>
              This Microsoft Copilot course strengthened my understanding of prompt engineering principles, structured prompting techniques, AI productivity, and designing high-quality instructions for modern large language models.<br/><br/>
              As AI evolves, prompt engineering becomes an essential engineering skill alongside software development and machine learning.
            </m.p>
          </div>

          <m.div 
            className="premium-glass-card"
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: EASE }}
            style={{ y: useTransform(scrollY, [0, 1500], [100, -100]) }}
          >
            <div className="premium-card-left">
              <m.div className="cred-museum-frame" initial={{ y: 20 }} whileInView={{ y: 0 }} transition={{ duration: 2, ease: EASE, repeat: Infinity, repeatType: 'reverse' }}>
                <img src={microsoftPromptWritingCert} alt="Microsoft Copilot Prompt Writing Certificate" loading="lazy" />
              </m.div>
            </div>
            <div className="premium-card-right">
              <div className="premium-card-section">
                <span className="premium-data-label">Provider</span>
                <span className="premium-data-value large">LinkedIn Learning</span>
              </div>
              
              <div className="premium-card-section">
                <span className="premium-data-label">Course</span>
                <span className="premium-data-value large" style={{ fontSize: '18px', lineHeight: '1.2' }}>Microsoft Copilot:<br/>The Art of Prompt Writing</span>
              </div>
              
              <div className="premium-card-section">
                <span className="premium-data-label">Completed</span>
                <span className="premium-data-value">July 2026</span>
              </div>
              
              <div className="premium-card-section">
                <span className="premium-data-label">Duration</span>
                <span className="premium-data-value">44 Minutes</span>
              </div>
              
              <div className="premium-card-section">
                <span className="premium-data-label">Category</span>
                <span className="premium-data-value">Prompt Engineering</span>
              </div>

              <div className="premium-card-section">
                <span className="premium-data-label">Skills Developed</span>
                <div className="premium-skills-list">
                  {["Prompt Engineering", "AI Prompt Design", "Microsoft Copilot", "Generative AI", "LLMs", "AI Productivity", "Instruction Design", "Prompt Optimization", "Structured Prompting", "Human-AI Collaboration"].map((skill, idx) => (
                    <span key={idx} className="premium-skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </m.div>

          <m.div 
            className="premium-quote"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.4 }}
          >
            <div className="premium-quote-text">
              "The intelligence of an AI system depends not only on the model—but also on the quality of the questions we ask."
            </div>
            <div className="premium-quote-author">— TheNameIsBhagavan</div>
          </m.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          DEEP LEARNING PREMIUM SECTION
      ══════════════════════════════════════════════════════ */}
      <section className="cred-premium-section">
        <div className="cred-constrain">
          <div className="premium-editorial">
            <m.div className="premium-label" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: EASE }}>
              LINKEDIN LEARNING
            </m.div>
            <m.h2 className="premium-headline" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, ease: EASE, delay: 0.1 }}>
              Deep Learning for Modern AI Systems
            </m.h2>
            <m.p className="premium-subheading" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}>
              Modern AI is no longer limited to traditional machine learning.<br/><br/>
              Sequence Models, Recurrent Neural Networks and Transformers power today's intelligent systems—from language models to speech recognition and generative AI.<br/><br/>
              This learning strengthened my understanding of temporal reasoning, attention mechanisms, neural architectures, and production-ready deep learning workflows.
            </m.p>
          </div>

          <m.div 
            className="premium-glass-card"
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: EASE }}
            style={{ y: useTransform(scrollY, [0, 1500], [100, -100]) }}
          >
            <div className="premium-card-left">
              <m.div className="cred-museum-frame" initial={{ y: 20 }} whileInView={{ y: 0 }} transition={{ duration: 2, ease: EASE, repeat: Infinity, repeatType: 'reverse' }}>
                <img src={deepLearningPythonCert} alt="Deep Learning with Python Certificate" loading="lazy" />
              </m.div>
            </div>
            <div className="premium-card-right">
              <div className="premium-card-section">
                <span className="premium-data-label">Provider</span>
                <span className="premium-data-value large">LinkedIn Learning</span>
              </div>
              
              <div className="premium-card-section">
                <span className="premium-data-label">Completed</span>
                <span className="premium-data-value">July 2026</span>
              </div>
              
              <div className="premium-card-section">
                <span className="premium-data-label">Duration</span>
                <span className="premium-data-value">1 Hour 26 Minutes</span>
              </div>
              
              <div className="premium-card-section">
                <span className="premium-data-label">Category</span>
                <span className="premium-data-value">Deep Learning</span>
              </div>

              <div className="premium-card-section">
                <span className="premium-data-label">Skills Developed</span>
                <div className="premium-skills-list">
                  {["Sequence Models", "Transformers", "Deep Learning", "Python", "Keras", "RNN", "LSTM", "Artificial Intelligence", "NLP"].map((skill, idx) => (
                    <span key={idx} className="premium-skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </m.div>

          <m.div 
            className="premium-quote"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.4 }}
          >
            <div className="premium-quote-text">
              "The future of AI belongs to engineers who understand both the mathematics behind intelligence and the systems that bring it to life."
            </div>
            <div className="premium-quote-author">— TheNameIsBhagavan</div>
          </m.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          AWS LLM SYSTEMS PREMIUM SECTION
      ══════════════════════════════════════════════════════ */}
      <section className="cred-premium-section">
        <div className="cred-constrain">
          <div className="premium-editorial">
            <m.div className="premium-label" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: EASE }}>
              LINKEDIN LEARNING
            </m.div>
            <m.h2 className="premium-headline" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, ease: EASE, delay: 0.1 }}>
              Building Production-Grade AI Systems on AWS
            </m.h2>
            <m.p className="premium-subheading" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}>
              Artificial Intelligence becomes valuable only when it solves real-world problems reliably at scale.<br/><br/>
              Modern AI Engineering extends beyond model development—it includes system architecture, cloud infrastructure, deployment strategies, and production-ready Large Language Model applications.<br/><br/>
              This LinkedIn Learning course explored practical AI engineering workflows on Amazon Web Services, demonstrating how production-grade LLM systems are designed, deployed, and maintained for real business applications.<br/><br/>
              It strengthened my understanding of cloud-native AI engineering, scalable AI architectures, and enterprise-ready intelligent systems.
            </m.p>
          </div>

          <m.div 
            className="premium-glass-card"
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: EASE }}
            style={{ y: useTransform(scrollY, [0, 1500], [100, -100]) }}
          >
            <div className="premium-card-left">
              <m.div className="cred-museum-frame" initial={{ y: 20 }} whileInView={{ y: 0 }} transition={{ duration: 2, ease: EASE, repeat: Infinity, repeatType: 'reverse' }}>
                <img src={awsLlmSystemsCert} alt="AWS LLM Systems Certificate" loading="lazy" />
              </m.div>
            </div>
            <div className="premium-card-right">
              <div className="premium-card-section">
                <span className="premium-data-label">Provider</span>
                <span className="premium-data-value large">LinkedIn Learning</span>
              </div>
              
              <div className="premium-card-section">
                <span className="premium-data-label">Course</span>
                <span className="premium-data-value large" style={{ fontSize: '18px', lineHeight: '1.2' }}>AI Engineering Use Cases and Projects on AWS:<br/>Production-Grade LLM Systems</span>
              </div>
              
              <div className="premium-card-section">
                <span className="premium-data-label">Completed</span>
                <span className="premium-data-value">July 2026</span>
              </div>
              
              <div className="premium-card-section">
                <span className="premium-data-label">Duration</span>
                <span className="premium-data-value">46 Minutes</span>
              </div>
              
              <div className="premium-card-section">
                <span className="premium-data-label">Category</span>
                <span className="premium-data-value">AI Engineering</span>
              </div>

              <div className="premium-card-section">
                <span className="premium-data-label">Skills Developed</span>
                <div className="premium-skills-list">
                  {["Production LLM Systems", "AI Engineering", "AWS AI", "Cloud AI", "Large Language Models", "Generative AI", "AI Software Development", "Scalable AI Applications", "Enterprise AI", "Production Deployment"].map((skill, idx) => (
                    <span key={idx} className="premium-skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </m.div>

          <m.div 
            className="premium-quote"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.4 }}
          >
            <div className="premium-quote-text">
              "Artificial intelligence creates possibilities. Engineering transforms those possibilities into production."
            </div>
            <div className="premium-quote-author">— TheNameIsBhagavan</div>
          </m.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FOUNDATION SEQUENCE (Sticky)
      ══════════════════════════════════════════════════════ */}
      <section ref={foundRef} className="cred-foundation-container">
        <div className="cred-foundation-sticky">
          <m.h2 className="foundation-word" style={{ opacity: f1 }}>Learning.</m.h2>
          <m.h2 className="foundation-word" style={{ opacity: f2 }}>Practice.</m.h2>
          <m.h2 className="foundation-word" style={{ opacity: f3 }}>Discipline.</m.h2>
          <m.h2 className="foundation-word" style={{ opacity: f4 }}>Capability.</m.h2>
          <m.h2 className="foundation-word" style={{ opacity: f5 }}>Engineering.</m.h2>
          <m.div className="foundation-artifact" style={{ opacity: f6 }}>
            <div className="cred-museum-frame massive-artifact">
              <img src={trainingCert} alt="Comprehensive Engineering Training" loading="lazy" />
            </div>
            <div className="artifact-caption">Comprehensive Professional Foundation</div>
          </m.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          AI CHAPTER
      ══════════════════════════════════════════════════════ */}
      <section className="cred-chapter theme-ai">
        <div className="cred-constrain">
          <div className="chapter-editorial">
            <m.h2 className="chapter-headline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Intelligence isn't built<br/>by models alone.<br/><br/>It is built<br/>through understanding.
            </m.h2>
          </div>
          
          <div className="chapter-featured-certs">
            <m.div className="cred-museum-frame" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={imgReveal}>
              <img src={gcpGenAiCert} alt="GCP Gen AI" loading="lazy" />
            </m.div>
            <m.div className="cred-museum-frame" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={imgReveal}>
              <img src={ibmAiCert} alt="IBM AI" loading="lazy" />
            </m.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CLOUD CHAPTER
      ══════════════════════════════════════════════════════ */}
      <section className="cred-chapter theme-cloud">
        <div className="cred-constrain">
          <div className="chapter-editorial">
            <m.h2 className="chapter-headline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Great products<br/>must also scale.
            </m.h2>
          </div>
          
          <div className="chapter-featured-certs">
            <m.div className="cred-museum-frame" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={imgReveal}>
              <img src={awsCloudCert} alt="AWS Cloud" loading="lazy" />
            </m.div>
            <m.div className="cred-museum-frame" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={imgReveal}>
              <img src={infosysAzureCert} alt="Azure Cloud" loading="lazy" />
            </m.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SOFTWARE ENGINEERING CHAPTER
      ══════════════════════════════════════════════════════ */}
      <section className="cred-chapter theme-software">
        <div className="cred-constrain">
          <div className="chapter-editorial">
            <m.h2 className="chapter-headline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Software is more than code.<br/><br/>It is the discipline<br/>of solving problems<br/>reliably.
            </m.h2>
          </div>
          
          <div className="chapter-featured-certs">
            <m.div className="cred-museum-frame" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={imgReveal}>
              <img src={gfgFsCert} alt="Full Stack" loading="lazy" />
            </m.div>

            <m.div className="chapter-cert-with-details" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={imgReveal}>
              <div className="cred-museum-frame">
                <img src={githubActionsCert} alt="Practical GitHub Actions" loading="lazy" />
              </div>
              <div className="chapter-cert-details">
                <span className="premium-data-label">LinkedIn Learning</span>
                <span className="premium-data-value large">Practical GitHub Actions</span>
                <span className="premium-data-value" style={{ marginTop: '12px' }}>July 2026</span>
                <div className="premium-skills-list">
                  {["GitHub Actions", "CI/CD Automation", "Workflow Automation", "YAML", "GitHub Pages", "DevOps Fundamentals"].map((skill, idx) => (
                    <span key={idx} className="premium-skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </m.div>

            <m.div className="cred-museum-frame" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={imgReveal}>
              <img src={infosysDevopsCert} alt="DevOps" loading="lazy" />
            </m.div>
          </div>

          <m.div className="software-editorial-paragraph" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            Modern software engineering is no longer just about writing code.<br/><br/>
            Reliable software is built through automation, continuous integration, deployment pipelines, and engineering workflows.<br/><br/>
            Learning GitHub Actions strengthens my ability to build production-ready software systems.
          </m.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CAPABILITIES REVEAL
      ══════════════════════════════════════════════════════ */}
      <section className="cred-capabilities">
        <div className="cred-constrain center-align">
          {[
            "Artificial Intelligence",
            "Transformer Architectures",
            "Full Stack Engineering",
            "Cloud Systems",
            "Software Architecture",
            "Problem Solving",
            "Career Intelligence"
          ].map((cap, i) => (
            <m.h2 
              key={i} 
              className="capability-reveal"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 1.2, ease: EASE }}
            >
              {cap}
            </m.h2>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          LEARNING TIMELINE
      ══════════════════════════════════════════════════════ */}
      <section className="cred-timeline">
        <div className="cred-constrain center-align">
          <div className="timeline-flow">
            {[
              { phase: "Beginning", year: "2022" },
              { phase: "Exploration", year: "2024" },
              { phase: "Acceleration", year: "2025" },
              { 
                phase: "AI Systems Engineering", 
                year: "2026",
                details: [
                  "Google AI",
                  "Microsoft Copilot",
                  "Prompt Engineering",
                  "IBM AI",
                  "Google Cloud AI",
                  "Generative AI",
                  "LLMs",
                  "Deep Learning",
                  "Transformers",
                  "Sequence Models",
                  "GitHub Actions",
                  "Continuous Product Development",
                  "AWS AI Practitioner",
                  "Production LLM Systems",
                  "AWS AI Engineering",
                  "Cloud-native AI",
                  "Agentic AI",
                  "AI Agents",
                  "Autonomous Systems"
                ]
              }
            ].map((step, i, arr) => (
              <React.Fragment key={i}>
                <m.div 
                  className="timeline-node"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: EASE }}
                >
                  <span className="timeline-phase">{step.phase}</span>
                  {step.details && (
                    <div className="timeline-details">
                      {step.details.map((detail, idx) => (
                        <span key={idx} className="timeline-detail-item">{detail}</span>
                      ))}
                    </div>
                  )}
                  <span className="timeline-year">{step.year}</span>
                </m.div>
                {i < arr.length - 1 && (
                  <m.div className="timeline-arrow" initial={{ opacity: 0 }} whileInView={{ opacity: 0.3 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1 }}>
                    ↓
                  </m.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ENGINEERING ARCHIVE
      ══════════════════════════════════════════════════════ */}
      <section className="cred-archive">
        <div className="cred-constrain">
          <m.h2 className="archive-headline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            Engineering Archive
          </m.h2>

          {ARCHIVE.map((group, i) => (
            <div className="archive-group" key={i}>
              <m.h3 className="archive-category" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                {group.category}
              </m.h3>
              <div className="archive-grid">
                {group.certs.map((cert, j) => (
                  <m.div 
                    className="archive-item" 
                    key={j}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: EASE }}
                  >
                    <div className="cred-museum-frame">
                      <img src={cert.img} alt={cert.label} loading="lazy" />
                    </div>
                    <div className="archive-item-label">{cert.label}</div>
                  </m.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          BEYOND CREDENTIALS
      ══════════════════════════════════════════════════════ */}
      <section className="cred-beyond">
        <div className="cred-constrain center-align">
          <m.div className="beyond-statement" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, ease: EASE }}>
            Knowledge creates capability.
          </m.div>
          <m.div className="beyond-statement" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, ease: EASE }}>
            Capability creates products.
          </m.div>
          <m.div className="beyond-statement beyond-climax" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.5, ease: EASE }}>
            Products create impact.
          </m.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CLOSING
      ══════════════════════════════════════════════════════ */}
      <section className="cred-closing">
        <div className="cred-constrain center-align">
          <div className="closing-sequence">
            <m.div className="closing-thought" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.5, ease: EASE }}>
              Learning never finishes.
            </m.div>
            <m.div className="closing-thought" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.5, ease: EASE }}>
              Curiosity creates knowledge.
            </m.div>
            <m.div className="closing-thought" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.5, ease: EASE }}>
              Knowledge creates engineering.
            </m.div>
            <m.div className="closing-thought" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.5, ease: EASE }}>
              Engineering creates impact.
            </m.div>
            <m.div className="closing-finale" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 2, ease: EASE, delay: 0.3 }}>
              Still learning.
            </m.div>
            <m.div className="closing-sub-finale" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 2, ease: EASE, delay: 0.8 }}>
              Because every product begins with curiosity.
            </m.div>
          </div>
        </div>
      </section>

      {/* BRAND SIGNATURE */}
      <BrandSignature />
    </div>
  
    </>
  );
}
