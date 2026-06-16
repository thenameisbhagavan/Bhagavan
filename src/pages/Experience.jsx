import React, { useEffect } from "react";
import { m } from "framer-motion";
import "../styles/Experience.css";

// ─── Certificate Artifacts ────────────────────────────────────────────────────
import studyOwlCert   from "../assets/cert-studyowl.png";
import blackbucksCert from "../assets/cert-blackbucks.png";
import smartBridgeCert from "../assets/cert-smartbridge.png";
import helsonCert     from "../assets/cert-helson.png";

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

const certReveal = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: EASE } },
};

// ─── Reveal wrapper ───────────────────────────────────────────────────────────
// Wraps children in a stagger container that animates on scroll.
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

// ─── Chapter ──────────────────────────────────────────────────────────────────
// Each internship is rendered as a self-contained editorial chapter.
// dark=true → inverted section (used for Helson).
function Chapter({ eyebrow, headline, company, role, duration, editorial, cert, certAlt, dark }) {
  const cls = ["exp-chapter", dark && "exp-chapter--dark"].filter(Boolean).join(" ");
  return (
    <section className={cls}>
      <div className="exp-constrain">

        {/* Section label + title + meta */}
        <Reveal>
          <m.span className="exp-eyebrow" variants={fadeUp}>{eyebrow}</m.span>
          <m.h2  className="exp-chapter-headline" variants={fadeUp}>{headline}</m.h2>
          <m.div className="exp-chapter-meta" variants={fadeUp}>
            <span>{company}</span>
            <span className="exp-meta-sep" aria-hidden="true">·</span>
            <span>{role}</span>
            <span className="exp-meta-sep" aria-hidden="true">·</span>
            <span>{duration}</span>
          </m.div>
        </Reveal>

        {/* Editorial paragraph */}
        <m.p
          className="exp-chapter-editorial"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          {editorial}
        </m.p>

        {/* Certificate — displayed as a clean photograph, no card styling */}
        <m.div
          className="exp-cert-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={certReveal}
        >
          <img
            src={cert}
            alt={certAlt}
            loading="lazy"
            className="exp-cert-img"
          />
        </m.div>

      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Experience() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="exp-page">

      {/* ══════════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════════ */}
      <section className="exp-hero" aria-label="Journey hero">
        <m.h1
          className="exp-hero-headline"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE }}
        >
          Experience Builds Judgment.
        </m.h1>
        <m.p
          className="exp-hero-sub"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.18, ease: EASE }}
        >
          Every internship, project, and engineering challenge contributed
          to a deeper understanding of how intelligent systems are designed,
          built, and deployed.
        </m.p>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — INTRODUCTION
      ══════════════════════════════════════════════════════ */}
      <section className="exp-intro" aria-labelledby="intro-headline">
        <div className="exp-constrain exp-constrain--reading">
          <m.h2
            id="intro-headline"
            className="exp-section-headline"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            The First Real Problems.
          </m.h2>
          <Reveal>
            <m.p className="exp-body" variants={fadeUp}>
              The real education didn't start with tutorials. It started with
              code that wouldn't compile, servers that crashed at the wrong
              moment, and datasets that refused to make sense. Moving beyond
              guided exercises meant confronting the full complexity of systems
              where nothing is pre-cleaned and nothing works the first time.
            </m.p>
            <m.p className="exp-body" variants={fadeUp}>
              Every debugging session was a lesson in discipline. Every failed
              deployment forced a deeper understanding of how software actually
              operates under real conditions. Engineering judgment isn't taught
              in a classroom — it is built through the slow accumulation of
              solving problems that don't have a known answer.
            </m.p>
            <m.p className="exp-body" variants={fadeUp}>
              What followed were four internships across machine learning,
              software development, AI engineering, and enterprise automation.
              Four different environments. Four different problem domains.
              One consistent objective: learn by building something real.
            </m.p>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — BLACKBUCKS
      ══════════════════════════════════════════════════════ */}
      <Chapter
        eyebrow="Machine Learning Internship"
        headline="Understanding Data."
        company="Blackbucks"
        role="Machine Learning"
        duration="2023"
        editorial="At Blackbucks, the work was not about algorithms. It was about what exists beneath them. Raw datasets are noise until they are preprocessed, structured, and interrogated with precision. Learning to engineer features, evaluate model performance, and interpret results revealed that machine learning is fundamentally an information design discipline — a process of turning ambiguity into signal. That insight, more than any model, became the foundation of everything that followed."
        cert={blackbucksCert}
        certAlt="Blackbucks Machine Learning Internship Certificate"
      />

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — STUDYOWL
      ══════════════════════════════════════════════════════ */}
      <Chapter
        eyebrow="Software Development Internship"
        headline="Building Software."
        company="StudyOwl"
        role="Software Development"
        duration="2024"
        editorial="Models mean nothing if users cannot interact with them. StudyOwl was the transition from scripts to scalable infrastructure. Designing REST APIs, integrating MongoDB, implementing authentication systems, and connecting front-end interfaces to back-end logic transformed isolated technical knowledge into the ability to build something a real person can use. That shift — from writing code to building a product — is irreversible. Once you've seen the difference, you can't unsee it."
        cert={studyOwlCert}
        certAlt="StudyOwl Software Development Internship Certificate"
      />

      {/* ══════════════════════════════════════════════════════
          SECTION 5 — SMARTBRIDGE
      ══════════════════════════════════════════════════════ */}
      <Chapter
        eyebrow="Software Engineering Internship"
        headline="Making Intelligence Useful."
        company="SmartBridge"
        role="Software Engineering"
        duration="2024"
        editorial="The gap between a working model and a deployed application is enormous. SmartBridge demanded that AI stop being an experiment and start being a product. Flask applications, automation workflows, and AI-integrated tools required thinking not just about what a system does, but about how it fits into the hands of someone who needs it. That is when software engineering became solution design — and when technical depth started to converge with product thinking."
        cert={smartBridgeCert}
        certAlt="SmartBridge Software Engineering Internship Certificate"
      />

      {/* ══════════════════════════════════════════════════════
          SECTION 6 — HELSON (dark environment)
      ══════════════════════════════════════════════════════ */}
      <Chapter
        dark
        eyebrow="Enterprise Automation"
        headline="Designing Systems That Scale."
        company="Helson"
        role="Enterprise Automation"
        duration="2024"
        editorial="Helson was where code stopped executing commands and started making decisions. Building automation architectures for enterprise workflows — decision systems, process pipelines, operational efficiency tools — meant writing software that had to operate reliably without a human in the loop. At that scale, every design choice has operational consequences. Architecture matters. Failure modes matter. The difference between a script and a system becomes immediately apparent when something breaks at 3 AM and there is no one to ask."
        cert={helsonCert}
        certAlt="Helson Enterprise Automation Internship Certificate"
      />

      {/* ══════════════════════════════════════════════════════
          SECTION 7 — CAPABILITIES
      ══════════════════════════════════════════════════════ */}
      <section className="exp-capabilities" aria-labelledby="cap-headline">
        <div className="exp-constrain">
          <m.h2
            id="cap-headline"
            className="exp-section-headline"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            Capabilities Built Through Execution.
          </m.h2>
          <Reveal className="exp-cap-list">
            {[
              "AI Engineering",
              "Full Stack Engineering",
              "Backend Systems",
              "Machine Learning",
              "System Design",
              "Product Thinking",
              "Problem Solving",
            ].map((cap) => (
              <m.p key={cap} className="exp-cap-item" variants={fadeUp}>
                {cap}
              </m.p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 8 — VERIFIED EXPERIENCE (gallery)
      ══════════════════════════════════════════════════════ */}
      <section className="exp-gallery-section" aria-labelledby="gallery-headline">
        <div className="exp-constrain exp-constrain--wide">
          <m.h2
            id="gallery-headline"
            className="exp-section-headline"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            Verified Experience.
          </m.h2>
          <div className="exp-gallery">
            {[
              { img: blackbucksCert,  company: "Blackbucks",  role: "Machine Learning",    year: "2023" },
              { img: studyOwlCert,    company: "StudyOwl",    role: "Software Development", year: "2024" },
              { img: smartBridgeCert, company: "SmartBridge", role: "Software Engineering", year: "2024" },
              { img: helsonCert,      company: "Helson",      role: "Enterprise Automation", year: "2024" },
            ].map(({ img, company, role, year }, i) => (
              <m.div
                key={i}
                className="exp-gallery-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={certReveal}
              >
                <div className="exp-gallery-img-wrap">
                  <img src={img} alt={`${company} internship certificate`} loading="lazy" />
                </div>
                <div className="exp-gallery-label">
                  <span className="exp-gallery-company">{company}</span>
                  <span className="exp-gallery-role">{role}</span>
                  <span className="exp-gallery-year">{year}</span>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 9 — ENGINEERING PHILOSOPHY
      ══════════════════════════════════════════════════════ */}
      <section className="exp-philosophy" aria-labelledby="philosophy-headline">
        <div className="exp-constrain">
          <m.h2
            id="philosophy-headline"
            className="exp-philosophy-eyebrow"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            Technology Should Create Opportunity.
          </m.h2>
          <Reveal className="exp-principles">
            {[
              "Build for people.",
              "Solve meaningful problems.",
              "Think in systems.",
              "Learn continuously.",
              "Ship real products.",
            ].map((p) => (
              <m.p key={p} className="exp-principle" variants={fadeUp}>
                {p}
              </m.p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 10 — CLOSING
      ══════════════════════════════════════════════════════ */}
      <section className="exp-closing" aria-label="Closing statement">
        <div className="exp-constrain exp-closing-inner">
          <m.h1
            className="exp-closing-headline"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            Still Day One.
          </m.h1>
          <m.p
            className="exp-closing-sub"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            The objective was never experience itself.
            <br />
            The objective was learning how to build systems
            that create opportunity at scale.
          </m.p>
        </div>
      </section>

    </div>
  );
}
