import React, { useEffect } from "react";
import { m } from "framer-motion";
import "../styles/Work.css";

// ─── Images ───────────────────────────────────────────────────────────────────
import careerOSImg   from "../assets/careeros-new.jpg";
import resumeImg     from "../assets/resume.jpg";
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
    num:   "01",
    title: "Understand",
    desc:  "Parse user skills, academic background, and interests into structured, comparable data.",
  },
  {
    num:   "02",
    title: "Analyze",
    desc:  "Match user profile against career domain patterns using a trained classification model.",
  },
  {
    num:   "03",
    title: "Recommend",
    desc:  "Surface compatible career paths ranked by confidence score with explanatory context.",
  },
  {
    num:   "04",
    title: "Guide",
    desc:  "Present results through a clean interface built for informed, independent decision-making.",
  },
];

// ─── Secondary projects (real data — no exaggeration) ─────────────────────────
const SECONDARY_PROJECTS = [
  {
    name:     "ResumeAI",
    eyebrow:  "Full Stack Development",
    year:     "2025",
    img:      resumeImg,
    desc:     "A MERN-stack platform where users build resumes and check how well they match job descriptions using ATS keyword analysis. Built to learn React, Node.js, and OAuth while solving a real problem for students entering the job market.",
    role:     "Sole Developer",
    tech:     ["React", "Node.js", "Express", "MongoDB", "Google OAuth"],
    learning: "Learned how full-stack authentication works end-to-end, and how to design REST APIs that are both secure and usable.",
    github:   "https://github.com/bhagavan444/Resumebuilderwebapp",
  },
  {
    name:     "AuraBot",
    eyebrow:  "AI Application",
    year:     "2025",
    img:      chatImg,
    desc:     "A chatbot application that securely connects a React frontend to Google's Gemini API through a Flask backend — built to understand how web applications communicate with AI APIs without exposing credentials in the browser.",
    role:     "Sole Developer",
    tech:     ["React", "Flask", "Python", "Gemini API", "REST"],
    learning: "Learned how to architect a secure AI API proxy layer, manage session state, and design conversational interfaces that feel responsive.",
    github:   "https://github.com/bhagavan444/chatbotwebapp",
  },
  {
    name:     "Health Prediction",
    eyebrow:  "Machine Learning",
    year:     "2024",
    img:      heartImg,
    desc:     "A heart disease prediction system trained on the UCI Heart Disease dataset. Used cross-validation to evaluate models rigorously on a small dataset, with results served through a Flask interface. Built to practice responsible ML evaluation.",
    role:     "Sole Developer",
    tech:     ["Python", "Scikit-learn", "Pandas", "Flask", "Cross-validation"],
    learning: "Learned how to evaluate models on small datasets without overfitting, understand feature importance, and think critically about precision vs recall trade-offs.",
    github:   "https://github.com/bhagavan444/Heart-Disease-Prediction",
  },
  {
    name:     "Smart Leave",
    eyebrow:  "Workflow Automation",
    year:     "2025",
    img:      leaveImg,
    desc:     "A leave approval workflow built with Microsoft PowerApps, SharePoint, and Power Automate as a final year academic project — designed to understand how enterprise teams automate routine approval processes without writing backend code.",
    role:     "Developer",
    tech:     ["Microsoft PowerApps", "SharePoint", "Power Automate"],
    learning: "Learned how low-code tools model business workflows, and why automating approvals requires careful design of edge cases and failure states.",
    github:   null,
  },
  {
    name:     "Truth Engine",
    eyebrow:  "Natural Language Processing",
    year:     "2023",
    img:      fakeImg,
    desc:     "A fake news classifier built with TF-IDF vectorization and Logistic Regression on a 40K article public dataset. A first meaningful NLP project — a direct introduction to text preprocessing, feature extraction, and binary classification.",
    role:     "Sole Developer",
    tech:     ["Python", "NLTK", "Scikit-learn", "TF-IDF", "Flask"],
    learning: "Learned the full NLP preprocessing pipeline, the limits of keyword-based classification, and how to deploy a basic ML model as a web interface.",
    github:   "https://github.com/bhagavan444/News-detector",
  },
];

// ─── Engineering capabilities ─────────────────────────────────────────────────
const CAPABILITIES = [
  "AI Engineering",
  "Machine Learning",
  "Full Stack Development",
  "Backend Systems",
  "API Design",
  "Database Architecture",
  "Product Thinking",
  "System Design",
];

// ─── Verified impact numbers ──────────────────────────────────────────────────
const STATS = [
  { value: "6",   label: "Projects Built" },
  { value: "4",   label: "Internships Completed" },
  { value: "15+", label: "Technologies Used" },
  { value: "4",   label: "AI Systems Developed" },
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
          Products Built To Solve Real Problems.
        </m.h1>
        <m.p
          className="work-hero-sub"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.18, ease: EASE }}
        >
          A collection of AI systems, intelligent applications, and
          full-stack products designed to make complex decisions simpler.
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
            Build. Learn. Improve.
          </m.h2>
          <Reveal>
            <m.p className="work-body" variants={fadeUp}>
              Every project began with a real problem — something that needed
              a solution, not a demonstration. The early work was about
              understanding how systems fit together: how a frontend talks to
              a backend, how a model connects to an API, how a database schema
              shapes the way data can be queried and used.
            </m.p>
            <m.p className="work-body" variants={fadeUp}>
              Every project became an opportunity to learn something that
              couldn't be learned from reading alone. Every solution contributed
              to a clearer understanding of software, intelligence, and what
              it actually takes to build something that works reliably.
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
              Exploring how intelligence can help people navigate careers.
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
            href="https://github.com/bhagavan444/Career-Path-Recommendation"
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
              CareerOS is a career path recommendation platform that uses
              machine learning to match a user's skills and academic background
              to compatible career domains. It began as a project to learn
              classification models and Flask APIs, and evolved into a more
              complete platform combining a React interface, a trained Random
              Forest classifier, and structured career domain data.
            </m.p>
            <m.p className="work-body" variants={fadeUp}>
              The longer-term direction is to expand CareerOS into a platform
              that helps people understand not just what career to pursue, but
              which skills to build, which gaps to close, and how to move
              forward with clarity. That work is ongoing.
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
            Capabilities Developed Through Building.
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
              The current focus is on AI systems that are genuinely useful —
              applications that take real user input, process it through
              machine learning or large language models, and return something
              that helps the person make a better decision.
            </m.p>
            <m.p className="work-body" variants={fadeUp}>
              Specific areas include career technology: tools that help people
              understand what skills they have, what they're missing, and how
              to close the gap. Alongside that, developer tools and intelligent
              applications that reduce friction in everyday technical workflows.
            </m.p>
            <m.p className="work-body" variants={fadeUp}>
              The goal is not to build more software. The goal is to build
              software that is meaningfully better at solving the problems it
              was designed to solve.
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
            Building Technology That Helps People Grow.
          </m.h2>
          <m.p
            className="work-closing-sub"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            The purpose of every project is not simply to build software.
            <br />
            The purpose is to create tools that help people learn,
            improve, and unlock new opportunities.
          </m.p>
        </div>
      </section>

    </div>
  );
}
