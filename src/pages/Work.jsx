import React, { useEffect } from "react";
import { m } from "framer-motion";
import "../styles/Work.css";

// ─── Images ───────────────────────────────────────────────────────────────────
import careerOSImg   from "../assets/careeros-new.jpg";
import chatImg       from "../assets/aurabot-new.png";
import heartImg      from "../assets/heart-new.png";
import leaveImg      from "../assets/leave.jpg";
import fakeImg       from "../assets/fake.jpg";

// ─── Motion ───────────────────────────────────────────────────────────────────
const EASE = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.13 } },
};

const imgReveal = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: EASE } },
};

// ─── Reveal helper ────────────────────────────────────────────────────────────
function Reveal({ children, className }) {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-70px" }}
      variants={stagger}
    >
      {children}
    </m.div>
  );
}

// ─── How CareerOS works ───────────────────────────────────────────────────────
const HOW_STEPS = [
  {
    num: "01",
    title: "Discover",
    desc: "Capture your academic profile, skills, projects, and professional experiences to build a complete career intelligence profile.",
  },
  {
    num: "02",
    title: "Evaluate",
    desc: "Analyze your resume, GitHub activity, technical depth, and market readiness using proprietary intelligence engines.",
  },
  {
    num: "03",
    title: "Reveal",
    desc: "Generate personalized insights, skill-gap analysis, engineering maturity scores, and career opportunities tailored to your profile.",
  },
  {
    num: "04",
    title: "Accelerate",
    desc: "Follow AI-powered roadmaps, interview preparation plans, and growth recommendations designed to maximize career outcomes.",
  },
];

// ─── Secondary projects (real data — no exaggeration) ─────────────────────────
const SECONDARY_PROJECTS = [
{
  name: "AuraOS",
  eyebrow: "Personal Intelligence OS",
  year: "2025",
  img: chatImg,
  desc: "AuraOS is an AI-powered Personal Intelligence Operating System designed to transform conversations, documents, knowledge, and memory into a unified intelligence layer. Unlike traditional chatbots that respond and forget, AuraOS continuously builds contextual understanding through persistent memory, knowledge management, retrieval-augmented intelligence, and reasoning workflows. The platform enables users to organize information, interact with intelligent knowledge systems, and develop a personalized AI companion that evolves over time.",
  role: "Founder & Product Engineer",
  tech: [
    "React",
    "Flask",
    "MongoDB",
    "Vector Search",
    "Google Gemini"
  ],
  features: [
    "Persistent Memory",
    "Document Understanding",
    "Knowledge Graph",
    "Conversational Reasoning",
    "Workspace Integration",
    "Privacy-First Layer",
    "Personalized Retrieval",
    "Modern UX"
  ],
  learning: "AuraOS represents a vision for the next generation of computing, where intelligence becomes a persistent layer that learns, remembers, understands, and grows alongside its user.",
  github: "https://github.com/bhagavan444/auraos",
},
  {
  name: "Health Prediction",
  eyebrow: "Machine Learning",
  year: "2024",
  img: heartImg,
  desc: "An intelligent healthcare analytics platform that leverages machine learning to assess cardiovascular risk and support data-driven health insights. Built using clinical datasets and predictive modeling techniques, the system transforms complex medical data into accessible, actionable predictions through an intuitive web experience.",
  role: "ML Engineer & Developer",
  tech: [
    "Python",
    "Scikit-learn",
    "Pandas",
    "Flask",
    "Machine Learning",
    "Data Analysis"
  ],
  learning: "Developed expertise in predictive modeling, feature engineering, model evaluation, and healthcare data analysis while building reliable machine learning systems for real-world decision support.",
  github: "https://github.com/bhagavan444/Heart-Disease-Prediction",
},
 {
name: "Smart Leave",
eyebrow: "Enterprise Automation",
year: "2025",
img: leaveImg,
desc: "A digital workflow platform designed to streamline employee leave management through automated approval processes, centralized tracking, and seamless collaboration. Built using Microsoft's low-code ecosystem, Smart Leave transforms traditional administrative workflows into efficient, transparent, and scalable business operations.",
role: "Workflow Automation Developer",
tech: [
"Microsoft PowerApps",
"SharePoint",
"Power Automate",
"Microsoft 365"
],
learning: "Designed and implemented enterprise-grade workflow automation solutions, gaining expertise in business process optimization, low-code application development, approval orchestration, and digital transformation strategies.",
github: null,
},
 {
name: "Truth Engine",
eyebrow: "Natural Language Intelligence",
year: "2023",
img: fakeImg,
desc: "An AI-powered content verification platform designed to analyze news articles and assess information credibility using natural language processing and machine learning. Truth Engine transforms unstructured text into actionable insights, helping users navigate information with greater confidence and clarity.",
role: "NLP Engineer & Developer",
tech: [
"Python",
"NLTK",
"Scikit-learn",
"TF-IDF",
"Flask",
"Machine Learning"
],
learning: "Developed expertise in natural language processing, text representation, machine learning pipelines, feature engineering, and intelligent content analysis while building systems capable of extracting meaning from large-scale textual data.",
github: "https://github.com/bhagavan444/News-detector",
}
];

// ─── Engineering capabilities ─────────────────────────────────────────────────
const CAPABILITIES = [
  "Career Intelligence Systems",
  "Artificial Intelligence",
  "Full-Stack Engineering",
  "Machine Learning",
  "Conversational AI",
  "Data Intelligence",
  "Product Architecture",
  "Experience Design",
];

// ─── Verified impact numbers ──────────────────────────────────────────────────
const STATS = [
  { value: "6+", label: "Products & Platforms Built" },
  { value: "3",  label: "Industry Internships" },
  { value: "15+", label: "Technologies Mastered" },
  { value: "4+", label: "AI-Powered Solutions" },
];
// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Work() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="work-page">

      {/* ══════════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════════ */}
      <section className="work-hero" aria-label="Products hero">
        <m.h1
          className="work-hero-headline"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE }}
        >
         Technology Designed To Amplify Human Potential.
        </m.h1>
        <m.p
          className="work-hero-sub"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.18, ease: EASE }}
        >
          A portfolio of intelligent systems, AI-powered products, and digital experiences designed to transform complex data into meaningful decisions.
        </m.p>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — THE APPROACH
      ══════════════════════════════════════════════════════ */}
      <section className="work-approach" aria-labelledby="approach-headline">
        <div className="work-constrain work-constrain--reading">
          <m.h2
            id="approach-headline"
            className="work-section-headline"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
           Build. Innovate. Evolve.
          </m.h2>
          <Reveal>
            <m.p className="work-body" variants={fadeUp}>
             Every product began with a challenge worth solving. Not as an experiment, but as an opportunity to create something useful. Each project became a step toward understanding how intelligent systems are designed, how data becomes insight, and how technology can simplify complex decisions. From full-stack platforms to AI-powered applications, the focus has always remained the same: building products that create meaningful impact.

            </m.p>
            <m.p className="work-body" variants={fadeUp}>
              Every project became an opportunity to move beyond theory and learn through execution. Each challenge deepened an understanding of software systems, artificial intelligence, and product engineering—revealing what it truly takes to design, build, and scale solutions that are reliable, impactful, and built to last.

            </m.p>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — CAREEROS (FLAGSHIP)
      ══════════════════════════════════════════════════════ */}
      <section className="work-flagship" aria-labelledby="careeros-headline">
        <div className="work-constrain">
          <Reveal>
            <m.span className="work-eyebrow" variants={fadeUp}>Flagship Project</m.span>
            <m.h2
              id="careeros-headline"
              className="work-flagship-headline"
              variants={fadeUp}
            >
              CareerOS.
            </m.h2>
            <m.p className="work-flagship-sub" variants={fadeUp}>
              Engineering intelligence to help people unlock their potential.
            </m.p>
          </Reveal>
        </div>

        {/* Full-width image — the project as the hero */}
        <m.div
          className="work-flagship-image"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={imgReveal}
        >
          <a
            href="https://github.com/bhagavan444/careeros"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CareerOS on GitHub"
          >
            <img
              src={careerOSImg}
              alt="CareerOS AI Career Platform interface"
              loading="lazy"
            />
          </a>
        </m.div>

        <div className="work-constrain work-constrain--reading work-flagship-body">
          <Reveal>
            <m.p className="work-body" variants={fadeUp}>
              CareerOS is an AI-powered Career Intelligence Operating System designed to help individuals understand, evaluate, and accelerate their professional growth. By combining resume intelligence, GitHub analytics, career insights, and AI-driven guidance, the platform transforms fragmented career data into actionable recommendations. What began as a machine learning experiment evolved into a comprehensive intelligence platform built with modern full-stack technologies, advanced analytics engines, and conversational AI to support informed career decisions at every stage of growth.

            </m.p>
            <m.p className="work-body" variants={fadeUp}>
             The vision for CareerOS extends beyond career recommendations. The goal is to create an intelligence platform that helps individuals understand their strengths, identify growth opportunities, measure professional readiness, and navigate their careers with confidence. By combining AI, data, and personalized insights, CareerOS aims to transform career development from a series of uncertain decisions into a clear, measurable journey of continuous growth.

            </m.p>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — HOW CAREEROS WORKS
      ══════════════════════════════════════════════════════ */}
      <section className="work-how" aria-labelledby="how-headline">
        <div className="work-constrain">
          <m.h2
            id="how-headline"
            className="work-section-headline"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            How CareerOS Works.
          </m.h2>
          <Reveal className="work-steps">
            {HOW_STEPS.map(({ num, title, desc }) => (
              <m.div key={num} className="work-step" variants={fadeUp}>
                <span className="work-step-num">{num}</span>
                <h3   className="work-step-title">{title}</h3>
                <p    className="work-step-desc">{desc}</p>
              </m.div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 5 — PRODUCTS BUILT ALONG THE WAY
      ══════════════════════════════════════════════════════ */}
      <div className="work-products-header">
        <div className="work-constrain">
          <m.h2
            className="work-section-headline"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            Built Along The Way.
          </m.h2>
        </div>
      </div>

      {SECONDARY_PROJECTS.map((project, i) => (
        <article
          key={project.name}
          className={`work-product${i % 2 !== 0 ? " work-product--alt" : ""}`}
          aria-label={project.name}
        >
          <div className="work-constrain">
            <div className="work-product-grid">

              {/* Product image */}
              <m.div
                className="work-product-image"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={imgReveal}
              >
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-product-img-link"
                  >
                    <img src={project.img} alt={`${project.name} project screenshot`} loading="lazy" />
                  </a>
                ) : (
                  <img src={project.img} alt={`${project.name} project screenshot`} loading="lazy" />
                )}
              </m.div>

              {/* Product meta */}
              <Reveal className="work-product-meta">
                <m.span className="work-eyebrow" variants={fadeUp}>
                  {project.eyebrow} · {project.year}
                </m.span>
                <m.h3 className="work-product-name" variants={fadeUp}>
                  {project.name}
                </m.h3>
                <m.p className="work-product-desc" variants={fadeUp}>
                  {project.desc}
                </m.p>

                <m.div className="work-detail-row" variants={fadeUp}>
                  <span className="work-detail-label">Stack</span>
                  <span className="work-detail-value">{project.tech.join(" · ")}</span>
                </m.div>

                {project.features && (
                  <m.div className="work-detail-row" variants={fadeUp}>
                    <span className="work-detail-label">Features</span>
                    <span className="work-detail-value">{project.features.join(" · ")}</span>
                  </m.div>
                )}

                <m.div className="work-detail-row" variants={fadeUp}>
                  <span className="work-detail-label">Role</span>
                  <span className="work-detail-value">{project.role}</span>
                </m.div>

                <m.div className="work-detail-row work-detail-row--last" variants={fadeUp}>
                  <span className="work-detail-label">Key Learning</span>
                  <span className="work-detail-value work-detail-value--muted">{project.learning}</span>
                </m.div>

                {project.github && (
                  <m.a
                    className="work-github-link"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={fadeUp}
                  >
                    View on GitHub →
                  </m.a>
                )}
              </Reveal>

            </div>
          </div>
        </article>
      ))}

      {/* ══════════════════════════════════════════════════════
          SECTION 6 — CAPABILITIES
      ══════════════════════════════════════════════════════ */}
      <section className="work-capabilities" aria-labelledby="cap-headline">
        <div className="work-constrain">
          <m.h2
            id="cap-headline"
            className="work-section-headline"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            Capabilities Shaped Through Execution.
          </m.h2>
          <Reveal className="work-cap-list">
            {CAPABILITIES.map((cap) => (
              <m.p key={cap} className="work-cap-item" variants={fadeUp}>
                {cap}
              </m.p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 7 — PROJECT IMPACT
      ══════════════════════════════════════════════════════ */}
      <section className="work-impact" aria-labelledby="impact-headline">
        <div className="work-constrain">
          <m.h2
            id="impact-headline"
            className="work-section-headline"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            By The Numbers.
          </m.h2>
          <Reveal className="work-stats">
            {STATS.map(({ value, label }) => (
              <m.div key={label} className="work-stat" variants={fadeUp}>
                <span className="work-stat-value">{value}</span>
                <span className="work-stat-label">{label}</span>
              </m.div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 8 — CONTINUING THE JOURNEY
      ══════════════════════════════════════════════════════ */}
      <section className="work-next" aria-labelledby="next-headline">
        <div className="work-constrain work-constrain--reading">
          <m.h2
            id="next-headline"
            className="work-section-headline"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            Continuing The Journey.
          </m.h2>
          <Reveal>
            <m.p className="work-body" variants={fadeUp}>
             Today, the focus is on creating intelligence that is practical, accessible, and genuinely useful. Every system is designed to turn information into insight, complexity into clarity, and uncertainty into confident action. The goal is not simply to build AI, but to build products that help people make better decisions and unlock greater potential.

            </m.p>
            <m.p className="work-body" variants={fadeUp}>
             The work centers on career intelligence and human potential. Building systems that help people understand where they stand, what opportunities lie ahead, and how to grow with purpose. Beyond career technology, the focus extends to developer platforms and intelligent products that remove complexity, streamline workflows, and make technology feel more intuitive and empowering.

            </m.p>
            <m.p className="work-body" variants={fadeUp}>
             The objective is not to create more technology, but to create technology that matters. Software should do more than function—it should simplify complexity, unlock opportunity, and help people achieve outcomes that were previously out of reach.

            </m.p>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 9 — CLOSING
      ══════════════════════════════════════════════════════ */}
      <section className="work-closing" aria-label="Closing statement">
        <div className="work-constrain work-closing-inner">
          <m.h2
            className="work-closing-headline"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
           Engineering Technology That Unlocks Human Potential.
          </m.h2>
          <m.p
            className="work-closing-sub"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
           The purpose of every project is not simply to build software. It is to transform ideas into products that create clarity, unlock opportunity, and make a meaningful impact on people's lives.

            <br />
           The purpose is to build products that empower people to learn continuously, grow with confidence, and unlock opportunities that move them closer to their potential.

          </m.p>
        </div>
      </section>

    </div>
  );
}
