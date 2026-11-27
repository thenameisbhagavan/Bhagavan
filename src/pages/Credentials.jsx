import SEO from "../components/SEO";
import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { m as Motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  Award,
  Briefcase,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import BrandSignature from "../components/BrandSignature";
import { Link } from "react-router-dom";
import "../styles/Credentials.css";

import googleEduCert from "../assets/google_page-0001.jpg";
import githubActionsCert from "../assets/git.jpg";
import microsoftPromptWritingCert from "../assets/prompt.jpg";
import deepLearningPythonCert from "../assets/deep.jpg";
import gfgFsCert from "../assets/cert-gfg-fs.png";
import gfgJavaCert from "../assets/cert-gfg-java.png";
import gfgPythonCert from "../assets/cert-gfg-python.png";
import geminiStudentCert from "../assets/cert-gemini-student.png";
import geminiFacultyCert from "../assets/cert-gemini-faculty.png";
import geminiStudentUniCert from "../assets/cert-gemini-student-uni.png";
import infosysAzureCert from "../assets/cert-infosys-azure.png";
import infosysDsCert from "../assets/cert-infosys-ds.png";
import ibmAiCert from "../assets/cert-ibm-ai.png";
import gcpGenAiCert from "../assets/cert-gcp-genai.png";
import gcpIntroGenAiCert from "../assets/cert-gcp-intro-genai.png";
import infosysMlopsCert from "../assets/cert-infosys-mlops.png";
import infosysServiceNowCert from "../assets/cert-infosys-servicenow.png";
import infosysJsCert from "../assets/cert-infosys-js.png";
import infosysJavaCert from "../assets/cert-infosys-java.png";
import infosysDjangoCert from "../assets/cert-infosys-django.png";
import infosysMasterPythonCert from "../assets/cert-infosys-master-python.png";
import infosysDevopsCert from "../assets/cert-infosys-devops.png";
import ibmLlmCert from "../assets/cert-ibm-llm.png";
import ibmPromptingCert from "../assets/cert-ibm-prompting.png";
import infosysPythonDsCert from "../assets/cert-infosys-python-ds.png";
import infosysMlPythonCert from "../assets/cert-infosys-ml-python.png";
import infosysIntroDsCert from "../assets/cert-infosys-intro-ds.png";
import ucscCCert from "../assets/cert-ucsc-c-everyone.png";
import infosysAgileCert from "../assets/cert-infosys-agile.png";
import awsCloudCert from "../assets/cert-aws-cloud.png";

const FEATURED_EVIDENCE = [
  {
    id: "01",
    provider: "GOOGLE",
    title: "Generative AI with Gemini",
    domain: "Artificial Intelligence",
    skills: ["Prompt Engineering", "Responsible AI", "Generative AI", "Gemini", "Human-Centered AI"],
    img: googleEduCert,
    alt: "Google Generative AI Certificate",
  },
  {
    id: "02",
    provider: "MICROSOFT",
    title: "The Art of Prompt Writing",
    domain: "Generative AI",
    skills: ["AI Prompt Design", "LLMs", "Instruction Design", "Structured Prompting"],
    img: microsoftPromptWritingCert,
    alt: "Microsoft Prompt Writing Certificate",
  },
  {
    id: "03",
    provider: "LINKEDIN LEARNING",
    title: "Deep Learning with Python",
    domain: "Machine Learning",
    skills: ["Sequence Models", "Transformers", "Deep Learning", "Keras", "RNN", "LSTM", "NLP"],
    img: deepLearningPythonCert,
    alt: "Deep Learning Certificate",
  },
  {
    id: "04",
    provider: "GEEKSFORGEEKS",
    title: "Full Stack Development",
    domain: "Software Engineering",
    skills: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
    img: gfgFsCert,
    alt: "Full Stack Certificate",
  },
];

const ARCHIVE = [
  {
    id: "ai-data",
    category: "AI & Data Science",
    certs: [
      { img: googleEduCert, provider: "Google", label: "Generative AI with Gemini" },
      { img: microsoftPromptWritingCert, provider: "Microsoft", label: "The Art of Prompt Writing" },
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
      { img: infosysMlopsCert, provider: "Infosys", label: "MLOps" },
    ],
  },
  {
    id: "cloud",
    category: "Cloud & DevOps",
    certs: [
      { img: awsCloudCert, provider: "AWS", label: "Cloud Foundations" },
      { img: infosysAzureCert, provider: "Infosys", label: "Azure Cloud" },
      { img: infosysDevopsCert, provider: "Infosys", label: "DevOps" },
    ],
  },
  {
    id: "software",
    category: "Software Engineering",
    certs: [
      { img: gfgFsCert, provider: "GeeksforGeeks", label: "Full Stack Development" },
      { img: githubActionsCert, provider: "LinkedIn", label: "Practical GitHub Actions" },
      { img: infosysDjangoCert, provider: "Infosys", label: "Django Web Dev" },
      { img: infosysServiceNowCert, provider: "Infosys", label: "ServiceNow" },
    ],
  },
  {
    id: "programming",
    category: "Languages & Agile",
    certs: [
      { img: gfgJavaCert, provider: "GeeksforGeeks", label: "Java" },
      { img: infosysJavaCert, provider: "Infosys", label: "Java Foundations" },
      { img: gfgPythonCert, provider: "GeeksforGeeks", label: "Python" },
      { img: infosysMasterPythonCert, provider: "Infosys", label: "Master Python" },
      { img: infosysJsCert, provider: "Infosys", label: "JavaScript" },
      { img: ucscCCert, provider: "UCSC", label: "C for Everyone" },
      { img: infosysAgileCert, provider: "Infosys", label: "Agile Methodology" },
    ],
  },
];

function ArtifactViewer({ src, alt, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <Motion.div
      className="cred-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button className="cred-modal-close" onClick={onClose} aria-label="Close viewer">
        <X size={20} />
      </button>
      <Motion.div
        className="cred-modal-content"
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cred-modal-header">VERIFIED CREDENTIAL &middot; {alt}</div>
        <img src={src} alt={alt} className="cred-modal-img" />
      </Motion.div>
    </Motion.div>
  );
}

export default function Credentials() {
  const heroRef = useRef(null);
  const [activeFeatIdx, setActiveFeatIdx] = useState(0);
  const [vaultFilter, setVaultFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArtifact, setSelectedArtifact] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSpotlight = useCallback((e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    heroRef.current.style.setProperty("--cm-x", `${e.clientX - rect.left}px`);
    heroRef.current.style.setProperty("--cm-y", `${e.clientY - rect.top}px`);
  }, []);

  const allFlatCerts = useMemo(() => {
    return ARCHIVE.flatMap((group) =>
      group.certs.map((c, idx) => ({
        ...c,
        groupId: group.id,
        groupCategory: group.category,
        key: `${group.id}-${idx}`,
      }))
    );
  }, []);

  const filteredCerts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return allFlatCerts.filter((c) => {
      const matchCat = vaultFilter === "all" || c.groupId === vaultFilter;
      const matchQuery =
        !q ||
        c.label.toLowerCase().includes(q) ||
        c.provider.toLowerCase().includes(q) ||
        c.groupCategory.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [allFlatCerts, vaultFilter, searchQuery]);

  const activeFeatured = FEATURED_EVIDENCE[activeFeatIdx];

  return (
    <>
      <SEO
        title="Credentials | TheNameIsBhagavan"
        description="Technical credentials and academic record of Siva Satya Sai Bhagavan Gopalajosyula (TheNameIsBhagavan)."
        keywords="Bhagavan Credentials, AI Certifications, Data Science Certificates, JNTUK AI and DS"
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
        {/* ============================================================
            ACT 01 — PEARL HERO & EVIDENCE INDEX
            ============================================================ */}
        <section ref={heroRef} onMouseMove={handleSpotlight} className="cred-hero" data-nav-theme="light">
          <div className="cred-hero-spotlight" aria-hidden="true" />
          <div className="cred-bounds">
            <div className="cred-hero-grid">
              <div>
                <div className="cred-hero-eyebrow">
                  <Sparkles size={12} color="#0071e3" />
                  <span>CREDENTIALS &middot; 30 VERIFIED ARTIFACTS</span>
                </div>
                <Motion.h1
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="cred-hero-headline"
                >
                  Knowledge verified by{" "}
                  <span className="cred-hl-muted">application.</span>
                </Motion.h1>
                <p className="cred-hero-sub">
                  An interactive index across Artificial Intelligence, Cloud Architecture, Full-Stack Systems, and Formal Engineering Education.
                </p>
              </div>

              <div className="cred-hero-index">
                {[
                  { num: "01", id: "ai-data", cat: "AI & Data Science", count: "16" },
                  { num: "02", id: "software", cat: "Software Engineering", count: "04" },
                  { num: "03", id: "cloud", cat: "Cloud & DevOps", count: "03" },
                  { num: "04", id: "programming", cat: "Languages & Agile", count: "07" },
                ].map((row) => (
                  <button
                    key={row.id}
                    type="button"
                    className="chi-item"
                    onClick={() => {
                      setVaultFilter(row.id);
                      document.getElementById("vault-section")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <span className="chi-num">{row.num}</span>
                    <span className="chi-cat">{row.cat}</span>
                    <span className="chi-count">{row.count} certs &rarr;</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            ACT 02 — INTERACTIVE FEATURED EVIDENCE CONSOLE (WHITE BENTO)
            ============================================================ */}
        <section className="cred-featured" data-nav-theme="light">
          <div className="cred-bounds">
            <span className="cred-section-label">01 &middot; FEATURED CREDENTIALS STAGE</span>
            <h2 className="cred-stage-heading">Core Technical Certifications.</h2>

            <div className="cred-feat-console">
              <div className="cred-feat-rail" role="tablist" aria-label="Featured Certificates">
                {FEATURED_EVIDENCE.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={activeFeatIdx === idx}
                    onClick={() => setActiveFeatIdx(idx)}
                    className={`cred-feat-btn ${activeFeatIdx === idx ? "active" : ""}`}
                  >
                    <span className="cfb-num">{item.id}</span>
                    <div className="cfb-text">
                      <span className="cfb-provider">{item.provider}</span>
                      <span className="cfb-title">{item.title}</span>
                    </div>
                    <ArrowRight size={14} className="cfb-arrow" />
                  </button>
                ))}
              </div>

              <div className="cred-feat-stage">
                <AnimatePresence mode="wait">
                  <Motion.div
                    key={activeFeatured.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.26 }}
                    className="cred-stage-card"
                  >
                    <button
                      type="button"
                      className="cred-artifact-btn"
                      onClick={() =>
                        setSelectedArtifact({ src: activeFeatured.img, alt: activeFeatured.alt })
                      }
                    >
                      <img src={activeFeatured.img} alt={activeFeatured.alt} />
                      <span className="cred-artifact-hover">VIEW FULLSCREEN ↗</span>
                    </button>

                    <div className="cred-stage-meta">
                      <div>
                        <span className="fi-provider">{activeFeatured.provider} &middot; {activeFeatured.domain}</span>
                        <h3 className="fi-title">{activeFeatured.title}</h3>
                      </div>
                      <div className="fi-skills">
                        {activeFeatured.skills.map((sk) => (
                          <span key={sk} className="fi-skill">{sk}</span>
                        ))}
                      </div>
                    </div>
                  </Motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            ACT 03 — SEARCHABLE & FILTERABLE CREDENTIAL VAULT
            ============================================================ */}
        <section id="vault-section" className="cred-archive" data-nav-theme="light">
          <div className="cred-bounds">
            <div className="cred-vault-top">
              <div>
                <span className="cred-section-label">02 &middot; VERIFIED EVIDENCE VAULT</span>
                <h2 className="archive-headline">Complete Certificate Gallery ({filteredCerts.length})</h2>
              </div>

              <div className="cred-search-box">
                <Search size={15} color="#86868b" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Google, IBM, AWS, Python..."
                  aria-label="Filter certificates by keyword"
                />
              </div>
            </div>

            <div className="cred-vault-tabs" role="tablist" aria-label="Filter Credential Categories">
              {[
                { id: "all", label: "All (30)" },
                { id: "ai-data", label: "AI & Data (16)" },
                { id: "software", label: "Software (04)" },
                { id: "cloud", label: "Cloud & DevOps (03)" },
                { id: "programming", label: "Languages & Agile (07)" },
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={vaultFilter === t.id}
                  onClick={() => setVaultFilter(t.id)}
                  className={`cred-tab-btn ${vaultFilter === t.id ? "active" : ""}`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="cred-vault-grid">
              {filteredCerts.map((cert) => (
                <button
                  key={cert.key}
                  type="button"
                  className="cred-vault-card"
                  onClick={() => setSelectedArtifact({ src: cert.img, alt: `${cert.provider} — ${cert.label}` })}
                >
                  <div className="cvc-img-wrap">
                    <img src={cert.img} alt={cert.label} loading="lazy" />
                  </div>
                  <div className="cvc-meta">
                    <span className="cvc-provider">{cert.provider}</span>
                    <span className="cvc-title">{cert.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            ACT 04 — FORMAL ACADEMIC TIMELINE
            ============================================================ */}
        <section id="education-timeline" className="cred-education-section" data-nav-theme="light">
          <div className="cred-bounds">
            <span className="cred-section-label">
              <GraduationCap size={13} style={{ marginRight: "6px", verticalAlign: "middle" }} />
              03 &middot; ACADEMIC FOUNDATIONS
            </span>
            <h2 className="cred-stage-heading">Verified Institutional Education</h2>

            <div className="cred-edu-pillar-grid">
              <div className="cred-edu-pill-card">
                <GraduationCap size={18} color="#0071e3" />
                <h3>01 / Institutional Theory</h3>
                <p>JNTUK B.Tech foundations in Machine Learning, Deep Learning, Data Mining, and Cloud Computing.</p>
              </div>
              <div className="cred-edu-pill-card">
                <Award size={18} color="#ff9500" />
                <h3>02 / Industry Credentials</h3>
                <p>30 targeted certificates across Google, IBM, AWS, Microsoft, GeeksforGeeks, and Infosys.</p>
              </div>
              <div className="cred-edu-pill-card">
                <Briefcase size={18} color="#34c759" />
                <h3>03 / Applied Practice</h3>
                <p>End-to-end engineering and technical cohort instruction at Data Valley, Vijayawada.</p>
              </div>
            </div>

            <div className="cred-edu-cards">
              <div className="cred-edu-row">
                <div>
                  <span className="cer-year">2022 &ndash; 2026 &middot; UNDERGRADUATE</span>
                  <h3>B.Tech &mdash; Artificial Intelligence and Data Science</h3>
                  <p>Ramachandra College of Engineering, Eluru (JNTUK)</p>
                </div>
                <div className="cer-score">
                  <strong>CGPA 7.5 / 10</strong>
                  <span>CMM Record: 7.57 / 10 &middot; First Class</span>
                  <Link to="/academic-archive">Inspect Official Documents &rarr;</Link>
                </div>
              </div>

              <div className="cred-edu-row">
                <div>
                  <span className="cer-year">2020 &ndash; 2022 &middot; HIGHER SECONDARY</span>
                  <h3>Intermediate &mdash; MPC</h3>
                  <p>Sri Vidya Junior College, Gudivada (BIEAP)</p>
                </div>
                <div className="cer-score">
                  <strong>78%</strong>
                  <span>784 / 1000 Marks &middot; Grade A</span>
                  <Link to="/academic-archive">Inspect Academic Archive &rarr;</Link>
                </div>
              </div>

              <div className="cred-edu-row">
                <div>
                  <span className="cer-year">2019 &ndash; 2020 &middot; SECONDARY</span>
                  <h3>Secondary School Certificate (Class X)</h3>
                  <p>Montessori High School (EM), Gudivada (BSEAP)</p>
                </div>
                <div className="cer-score">
                  <strong>95%</strong>
                  <span>546 / 600 Marks &middot; First Division</span>
                  <Link to="/academic-archive">Inspect SSC Certificate &rarr;</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            ACT 05 — DARK TITANIUM CLOSING & ENGINEERING RECORD
            ============================================================ */}
        <section className="cred-closing" data-nav-theme="dark">
          <div className="cred-bounds">
            <span className="cred-closing-eyebrow">THE RECORD CONTINUES</span>
            <h2 className="cc-primary">Continuous study backed by shipped code.</h2>
            <p className="cc-body">
              Credentials establish vocabulary; building software and teaching cohorts stress-tests every assumption.
            </p>
            <div className="cc-focus-tags">
              AI SYSTEMS &middot; GENERATIVE AI &middot; FULL-STACK ENGINEERING &middot; TECHNICAL EDUCATION
            </div>
            <Link to="/work" className="cred-cta">
              <span>Explore Production Work</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </section>

        <BrandSignature />
      </div>
    </>
  );
}
