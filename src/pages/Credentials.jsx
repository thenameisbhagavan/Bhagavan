import React, { useEffect } from 'react';
import { m } from 'framer-motion';
import '../styles/Credentials.css';

// ─── 26 Core Certificate Assets ────────────────────────────────────────────────
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

// ─── Special Training Program ─────────────────────────────────────────────────
import trainingCert from '../assets/training.png';

const ALL_CERTS = [
  gfgFsCert, gfgJavaCert, gfgPythonCert, geminiStudentCert, geminiFacultyCert,
  geminiStudentUniCert, infosysAzureCert, infosysDsCert, ibmAiCert, gcpGenAiCert,
  gcpIntroGenAiCert, infosysMlopsCert, infosysServiceNowCert, infosysJsCert,
  infosysJavaCert, infosysDjangoCert, infosysMasterPythonCert, infosysDevopsCert,
  ibmLlmCert, ibmPromptingCert, infosysPythonDsCert, infosysMlPythonCert,
  infosysIntroDsCert, ucscCCert, infosysAgileCert, awsCloudCert
];

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

const imgReveal = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: EASE } },
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
const CAPABILITIES = [
  "Artificial Intelligence",
  "Machine Learning",
  "Cloud Computing",
  "Full Stack Engineering",
  "Backend Systems",
  "Software Architecture",
  "Problem Solving",
  "Technical Communication",
  "Career Preparation"
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Credentials() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cred-page">
      
      {/* ══════════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════════ */}
      <section className="cred-hero" aria-label="Credentials Hero">
        <m.h1 
          className="cred-hero-headline"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE }}
        >
          Mastery.
        </m.h1>
        <m.h1 
          className="cred-hero-headline cred-text-muted"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.05, ease: EASE }}
        >
          Built Continuously.
        </m.h1>
        <m.p 
          className="cred-hero-sub"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
        >
          Every certification represents a skill acquired, a capability developed, and a step toward building intelligent systems.
        </m.p>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — PROFESSIONAL FOUNDATION
      ══════════════════════════════════════════════════════ */}
      <section className="cred-foundation">
        <div className="cred-constrain">
          <Reveal className="center-align">
            <m.span className="cred-eyebrow" variants={fadeUp}>Professional Foundation</m.span>
            <m.h2 className="cred-section-headline" variants={fadeUp}>
              Where Learning Became Capability.
            </m.h2>
          </Reveal>

          <m.div 
            className="cred-museum-frame"
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-80px" }} 
            variants={imgReveal}
          >
            <img src={trainingCert} alt="Ramachandra Special Training Program" loading="lazy" />
          </m.div>

          <div className="cred-foundation-grid">
            <Reveal className="cred-foundation-text">
              <m.p className="cred-body" variants={fadeUp}>
                The Special Training Program conducted by Ramachandra College of Engineering marked a pivotal step in transforming academic knowledge into professional readiness. It established the foundation for solving real-world engineering challenges.
              </m.p>
            </Reveal>

            <Reveal className="cred-foundation-caps">
              <m.span className="cred-cap-item" variants={fadeUp}>Python Programming</m.span>
              <m.span className="cred-cap-item" variants={fadeUp}>DSA</m.span>
              <m.span className="cred-cap-item" variants={fadeUp}>Coding Practice</m.span>
              <m.span className="cred-cap-item" variants={fadeUp}>Aptitude</m.span>
              <m.span className="cred-cap-item" variants={fadeUp}>Resume Engineering</m.span>
              <m.span className="cred-cap-item" variants={fadeUp}>Mock Interviews</m.span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — ACADEMIC FOUNDATION
      ══════════════════════════════════════════════════════ */}
      <section className="cred-academic cred-alt">
        <div className="cred-constrain center-align">
          <Reveal>
            <m.span className="cred-eyebrow" variants={fadeUp}>Academic Foundation</m.span>
            <m.h2 className="cred-section-headline" variants={fadeUp}>
              Artificial Intelligence & Data Science.
            </m.h2>
            <m.p className="cred-body cred-body--center" variants={fadeUp}>
              The academic bedrock. A comprehensive engineering foundation focusing on artificial intelligence architectures, data structures, and advanced machine learning algorithms at Ramachandra College of Engineering.
            </m.p>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — ARTIFICIAL INTELLIGENCE
      ══════════════════════════════════════════════════════ */}
      <section className="cred-ai">
        <div className="cred-constrain">
          <Reveal className="center-align">
            <m.h2 className="cred-section-headline" variants={fadeUp}>Learning Intelligence.</m.h2>
            <m.p className="cred-body cred-body--center" variants={fadeUp}>
              Understanding generative models, prompt engineering, and the architecture behind modern AI systems through deep-dives into Google and IBM's ecosystems.
            </m.p>
          </Reveal>

          <Reveal className="cred-cert-gallery">
            <m.div className="cred-cert-item" variants={fadeUp}>
              <img src={geminiStudentCert} alt="Gemini Student Certification" loading="lazy" />
            </m.div>
            <m.div className="cred-cert-item" variants={fadeUp}>
              <img src={ibmAiCert} alt="IBM AI Certification" loading="lazy" />
            </m.div>
            <m.div className="cred-cert-item" variants={fadeUp}>
              <img src={ibmLlmCert} alt="IBM LLM Certification" loading="lazy" />
            </m.div>
            <m.div className="cred-cert-item" variants={fadeUp}>
              <img src={gcpGenAiCert} alt="Google Cloud GenAI Certification" loading="lazy" />
            </m.div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 5 — CLOUD & INFRASTRUCTURE
      ══════════════════════════════════════════════════════ */}
      <section className="cred-cloud cred-alt">
        <div className="cred-constrain">
          <Reveal className="center-align">
            <m.h2 className="cred-section-headline" variants={fadeUp}>Building At Scale.</m.h2>
            <m.p className="cred-body cred-body--center" variants={fadeUp}>
              Intelligence must be deployed to be useful. Mastering cloud architectures and MLOps ensures that models transcend local environments and scale globally.
            </m.p>
          </Reveal>

          <Reveal className="cred-cert-gallery">
            <m.div className="cred-cert-item" variants={fadeUp}>
              <img src={awsCloudCert} alt="AWS Cloud Certification" loading="lazy" />
            </m.div>
            <m.div className="cred-cert-item" variants={fadeUp}>
              <img src={infosysAzureCert} alt="Azure Certification" loading="lazy" />
            </m.div>
            <m.div className="cred-cert-item" variants={fadeUp}>
              <img src={infosysMlopsCert} alt="MLOps Certification" loading="lazy" />
            </m.div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 6 — SOFTWARE ENGINEERING
      ══════════════════════════════════════════════════════ */}
      <section className="cred-swe">
        <div className="cred-constrain">
          <Reveal className="center-align">
            <m.h2 className="cred-section-headline" variants={fadeUp}>Engineering Foundations.</m.h2>
            <m.p className="cred-body cred-body--center" variants={fadeUp}>
              The grammar of building. Fluency in Python, Java, JavaScript, and backend frameworks allows ideas to be translated into robust, secure ecosystems.
            </m.p>
          </Reveal>

          <Reveal className="cred-cert-gallery">
            <m.div className="cred-cert-item" variants={fadeUp}>
              <img src={gfgPythonCert} alt="Python Certification" loading="lazy" />
            </m.div>
            <m.div className="cred-cert-item" variants={fadeUp}>
              <img src={infosysJavaCert} alt="Java Certification" loading="lazy" />
            </m.div>
            <m.div className="cred-cert-item" variants={fadeUp}>
              <img src={infosysDjangoCert} alt="Django Certification" loading="lazy" />
            </m.div>
            <m.div className="cred-cert-item" variants={fadeUp}>
              <img src={gfgFsCert} alt="Full Stack Certification" loading="lazy" />
            </m.div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 7 — WHAT THESE EXPERIENCES CREATED
      ══════════════════════════════════════════════════════ */}
      <section className="cred-created cred-alt">
        <div className="cred-constrain">
          <Reveal>
            <m.h2 className="cred-section-headline" variants={fadeUp}>
              What These Experiences Created.
            </m.h2>
          </Reveal>
          
          <Reveal className="cred-large-list">
            {CAPABILITIES.map((cap) => (
              <m.h3 key={cap} className="cred-large-item" variants={fadeUp}>
                {cap}
              </m.h3>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 8 — LEARNING JOURNEY (TIMELINE CHAPTERS)
      ══════════════════════════════════════════════════════ */}
      <section className="cred-timeline">
        <div className="cred-constrain">
          <Reveal className="center-align">
            <m.h2 className="cred-section-headline" variants={fadeUp}>
              Years Of Continuous Learning.
            </m.h2>
          </Reveal>

          <div className="cred-chapters">
            
            <Reveal className="cred-chapter">
              <m.div className="cred-chapter-year" variants={fadeUp}>2022</m.div>
              <m.div className="cred-chapter-grid" variants={fadeUp}>
                <img src={ucscCCert} alt="2022 Certification" loading="lazy" />
              </m.div>
            </Reveal>

            <Reveal className="cred-chapter">
              <m.div className="cred-chapter-year" variants={fadeUp}>2024</m.div>
              <m.div className="cred-chapter-grid" variants={fadeUp}>
                <img src={awsCloudCert} alt="2024 Certification" loading="lazy" />
                <img src={infosysAgileCert} alt="2024 Certification" loading="lazy" />
                <img src={infosysDevopsCert} alt="2024 Certification" loading="lazy" />
              </m.div>
            </Reveal>

            <Reveal className="cred-chapter">
              <m.div className="cred-chapter-year" variants={fadeUp}>2025</m.div>
              <m.div className="cred-chapter-grid" variants={fadeUp}>
                <img src={trainingCert} alt="2025 Certification" loading="lazy" className="cred-chapter-hero" />
                <img src={ibmAiCert} alt="2025 Certification" loading="lazy" />
                <img src={infosysMlopsCert} alt="2025 Certification" loading="lazy" />
                <img src={infosysAzureCert} alt="2025 Certification" loading="lazy" />
              </m.div>
            </Reveal>

            <Reveal className="cred-chapter">
              <m.div className="cred-chapter-year" variants={fadeUp}>2026</m.div>
              <m.div className="cred-chapter-grid" variants={fadeUp}>
                <img src={geminiStudentCert} alt="2026 Certification" loading="lazy" />
                <img src={geminiFacultyCert} alt="2026 Certification" loading="lazy" />
              </m.div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 9 — APPLE LEARNING ARCHIVE (ALL CERTS)
      ══════════════════════════════════════════════════════ */}
      <section className="cred-archive cred-alt">
        <div className="cred-constrain center-align">
          <Reveal>
            <m.span className="cred-eyebrow" variants={fadeUp}>Apple Learning Archive</m.span>
            <m.h2 className="cred-section-headline" variants={fadeUp}>
              Verified Expertise.
            </m.h2>
          </Reveal>
        </div>

        <div className="cred-archive-constrain">
          <div className="cred-archive-grid">
            {ALL_CERTS.map((cert, index) => (
              <m.div 
                key={index} 
                className="cred-archive-item"
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "200px" }}
                variants={fadeUp}
              >
                <img src={cert} alt={`Verified Credential ${index + 1}`} loading="lazy" />
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 10 — BEYOND CREDENTIALS
      ══════════════════════════════════════════════════════ */}
      <section className="cred-beyond">
        <div className="cred-constrain center-align">
          <Reveal>
            <m.h2 className="cred-section-headline" variants={fadeUp}>
              Credentials Are Only The Beginning.
            </m.h2>
            <m.p className="cred-body cred-body--center" variants={fadeUp} style={{ marginTop: '32px' }}>
              Learning matters. Building matters more. Impact matters most.
            </m.p>
            <m.p className="cred-body cred-body--center" variants={fadeUp}>
              These credentials were not acquired to decorate a portfolio; they were acquired to build robust, scalable, intelligent systems that solve real problems.
            </m.p>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 11 — CLOSING
      ══════════════════════════════════════════════════════ */}
      <section className="cred-closing cred-dark" aria-label="Closing statement">
        <div className="cred-constrain center-align">
          <Reveal>
            <m.h2 className="cred-closing-headline" variants={fadeUp}>
              Always Learning.
            </m.h2>
            <m.p className="cred-closing-sub" variants={fadeUp}>
              The most valuable credential is the ability to continuously learn, adapt, and build.
            </m.p>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
