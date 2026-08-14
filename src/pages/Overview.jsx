import React, { useEffect } from "react";
import { m, useAnimation } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import EditorialReveal from "../components/EditorialReveal";
import "../styles/Overview.css";

// Identity assets
import profileHeroImg from "../assets/profile-hero.jpg";

// Apple-precise easing
const appleEase = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: appleEase } }
};

const fadeUpStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

export default function Overview() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
    window.scrollTo(0, 0);
  }, [controls]);

  return (
    <>
      <SEO 
        title="Bhagavan | AI Product Engineer"
        description="I engineer AI systems and products that ship. CareerOS, AuraOS, VERITAS, and VoltDrive."
        keywords="AI Engineer, Artificial Intelligence, CareerOS, AuraOS, VERITAS, VoltDrive, Portfolio"
      />
      
      <div className="engineering-surface">
        
        {/* =========================================
            ACT I — IDENTITY
            ========================================= */}
            
        {/* 01 — HERO (HUGE) */}
        <section className="es-hero act-i-identity" data-nav-theme="light">
          <div className="es-hero-bounds">
            <m.div className="es-hero-content" initial="hidden" animate={controls} variants={fadeUpStagger}>
              <m.p className="es-eyebrow" variants={fadeUp}>
                AI PRODUCT ENGINEER
              </m.p>
              
              <m.h1 className="es-headline" variants={fadeUp}>
                I engineer AI systems<br/>
                and products that ship.
              </m.h1>
              
              <m.p className="es-subthesis" variants={fadeUp}>
                I build intelligent products where AI, software engineering,<br/>and product experience meet.<br/><br/>
                Career intelligence · AI memory &amp; context<br/>
                Reasoning &amp; evidence · Digital product experiences
              </m.p>
              
              <m.div variants={fadeUp} style={{ marginTop: '48px' }}>
                <a href="#engineering" className="es-cta-quiet apple-pressable">
                  EXPLORE THE SYSTEMS <ArrowRight size={14} />
                </a>
              </m.div>
            </m.div>
            
            <m.div 
              className="es-hero-portrait"
              initial={{ opacity: 0, filter: 'blur(12px)', scale: 0.98 }}
              animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
              transition={{ duration: 1.5, delay: 0.2, ease: appleEase }}
            >
              <img src={profileHeroImg} alt="Bhagavan" className="es-portrait-img" loading="eager" />
            </m.div>
          </div>
        </section>

        {/* 02 — ENGINEER'S THESIS (MEDIUM) */}
        <section className="es-thesis-section" data-nav-theme="light">
          <div className="es-bounds-narrow">
            <m.h2 
              className="es-thesis-headline text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: appleEase }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Software becomes interesting when intelligence meets execution.
            </m.h2>

            <div className="es-thesis-grid">
              {[
                { num: "01", title: "THINK IN SYSTEMS", desc: "I don't treat AI as an isolated feature. I design the surrounding system — context, data, logic, interfaces, failure paths and delivery." },
                { num: "02", title: "BUILD FOR USE", desc: "A technically impressive model is not automatically a useful product. I care about how intelligence becomes an experience people can actually use." },
                { num: "03", title: "SHIP THE LOOP", desc: "Idea → implementation → evaluation → iteration → deployment. This loop defines engineering velocity." }
              ].map((thesis, i) => (
                <EditorialReveal 
                  key={thesis.num} 
                  className="es-thesis-card"
                  stagger={i + 1}
                >
                  <span className="es-tc-num">{thesis.num}</span>
                  <h3 className="es-tc-title">{thesis.title}</h3>
                  <p className="es-tc-desc">{thesis.desc}</p>
                </EditorialReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 03 — WHAT I ACTUALLY BUILD (LARGE) */}
        <section className="es-what-i-build" data-nav-theme="light">
          <div className="es-bounds">
            <m.h2 
              className="es-section-label"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: appleEase }}
              viewport={{ once: true, margin: "-100px" }}
            >
              From intelligence to interface.
            </m.h2>

            <div className="es-build-grid">
              {[
                { title: "INTELLIGENCE", desc: "Systems that reason, classify, evaluate and generate useful decisions." },
                { title: "CONTEXT", desc: "Memory, retrieval, knowledge and user-aware experiences." },
                { title: "PRODUCT", desc: "Interfaces that turn technical capability into something understandable." },
                { title: "DELIVERY", desc: "APIs, architecture, deployment and production-oriented engineering." }
              ].map((cat, i) => (
                <EditorialReveal 
                  key={cat.title}
                  className="es-build-category"
                  stagger={i + 1}
                >
                  <h3 className="es-bc-title">{cat.title}</h3>
                  <p className="es-bc-desc">{cat.desc}</p>
                </EditorialReveal>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================
            ACT II — ENGINEERING
            ========================================= */}

        {/* 04 — FLAGSHIP SYSTEMS (HUGE) */}
        <section className="es-flagships" id="engineering" data-nav-theme="light">
          <div className="es-bounds">
            <m.div className="es-flagship-list">
              {[
                { num: "01", name: "CAREEROS", tag: "Career Intelligence", problem: "Scattered career data and isolated job application context.", core: "AI-driven context intelligence and memory.", eng: "Agentic RAG, Memory, Python, React.", outcome: "Unified intelligence system.", url: "https://careeros-thenameisbhagavan.vercel.app/" },
                { num: "02", name: "AURAOS", tag: "AI Memory & Context", problem: "Stateless interactions lack contextual awareness.", core: "Persistent context mapping.", eng: "Vector DBs, Semantic Search.", outcome: "Intelligent operating environment.", url: "https://aura-os-thenameisbhagavan.vercel.app/" },
                { num: "03", name: "VERITAS", tag: "Reasoning & Evidence", problem: "Hallucinations in ungrounded generation.", core: "Fact-based reasoning layer.", eng: "Evaluative models, fast architecture.", outcome: "Reliable logic execution.", url: "https://veritas-thenameisbhagavan.vercel.app/" },
                { num: "04", name: "VOLTDRIVE", tag: "Digital Product Experience", problem: "Poor UX in complex technical tools.", core: "Frictionless product interaction.", eng: "Advanced Frontend, Motion Design.", outcome: "Premium interface delivery.", url: "https://voltdrive-thenameisbhagavan.vercel.app/" }
              ].map((sys, idx) => (
                <m.a 
                  key={sys.num}
                  href={sys.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="es-flagship-row"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: idx * 0.1, ease: appleEase }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="es-fs-header">
                    <span className="es-fs-num">{sys.num}</span>
                    <h3 className="es-fs-name">{sys.name}</h3>
                    <span className="es-fs-tag">{sys.tag}</span>
                  </div>
                  <div className="es-fs-details">
                    <div className="es-fs-detail">
                      <span className="es-fs-dlabel">PROBLEM</span>
                      <span className="es-fs-dval">{sys.problem}</span>
                    </div>
                    <div className="es-fs-detail">
                      <span className="es-fs-dlabel">CORE IDEA</span>
                      <span className="es-fs-dval">{sys.core}</span>
                    </div>
                    <div className="es-fs-detail">
                      <span className="es-fs-dlabel">ENGINEERING</span>
                      <span className="es-fs-dval">{sys.eng}</span>
                    </div>
                  </div>
                  <div className="es-fs-action">
                    <span>EXPLORE</span>
                    <ArrowRight size={14} className="es-fs-arrow" />
                  </div>
                </m.a>
              ))}
            </m.div>
          </div>
        </section>

        {/* 05 — IDEA → SYSTEM (VISUAL/LARGE) */}
        <section className="es-pipeline" data-nav-theme="light">
          <div className="es-bounds-narrow text-center">
            {["PROBLEM", "CONTEXT", "INTELLIGENCE", "SYSTEM", "INTERFACE", "DEPLOYMENT", "FEEDBACK"].map((node, i, arr) => (
              <React.Fragment key={node}>
                <m.div
                  className={`es-pipe-node ${i === 0 || i === arr.length -1 ? 'highlight' : ''}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: appleEase }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {node}
                </m.div>
                {i < arr.length - 1 && (
                  <m.div 
                    className="es-pipe-arrow"
                    initial={{ opacity: 0, height: 0 }}
                    whileInView={{ opacity: 1, height: 32 }}
                    transition={{ duration: 0.8, delay: (i * 0.1) + 0.1, ease: appleEase }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="es-pipe-line" />
                  </m.div>
                )}
              </React.Fragment>
            ))}
            <m.p 
              className="es-pipe-caption"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: appleEase }}
              viewport={{ once: true, margin: "-50px" }}
            >
              That is the loop I try to engineer.
            </m.p>
          </div>
        </section>

        {/* 06 — ENGINEERING LAYERS (MEDIUM) */}
        <section className="es-layers" data-nav-theme="light">
          <div className="es-bounds">
            <div className="es-layers-stack">
              {[
                { num: "01", name: "INTELLIGENCE", tech: "AI / ML / reasoning", desc: "The cognitive core of the application." },
                { num: "02", name: "SYSTEMS", tech: "APIs / backend / data / architecture", desc: "The infrastructure that makes intelligence available." },
                { num: "03", name: "PRODUCT", tech: "React / interfaces / interaction", desc: "The surface where humans interact with the logic." },
                { num: "04", name: "DELIVERY", tech: "Git / deployment / production", desc: "The rigorous process of shipping reliable software." }
              ].map((layer, i) => (
                <EditorialReveal 
                  key={layer.num}
                  className="es-layer-item"
                  stagger={i + 1}
                >
                  <div className="es-layer-header">
                    <span className="es-layer-num">{layer.num}</span>
                    <span className="es-layer-name">{layer.name}</span>
                  </div>
                  <div className="es-layer-content">
                    <span className="es-layer-tech">{layer.tech}</span>
                    <p className="es-layer-desc">{layer.desc}</p>
                  </div>
                </EditorialReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 07 — SELECTED ENGINEERING DECISIONS (MEDIUM) */}
        <section className="es-decisions" data-nav-theme="light">
          <div className="es-bounds">
            <m.h2 
              className="es-decisions-headline"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: appleEase }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Technology is easy to list. Decisions are harder to explain.
            </m.h2>

            <div className="es-decisions-grid">
              {[
                { num: "01", title: "DETERMINISTIC BEFORE GENERATIVE", desc: "Predictable logic handles what doesn't require an LLM. Reliability beats unnecessary AI complexity." },
                { num: "02", title: "CONTEXT BEFORE COMPLEXITY", desc: "Useful AI systems need the right context before adding more intelligence. RAG and memory over massive parameter counts." },
                { num: "03", title: "PRODUCT BEFORE DEMO", desc: "A working model is not the same thing as a useful product. UI, error handling, and latency matter just as much." },
                { num: "04", title: "SHIP BEFORE PERFECT", desc: "Real feedback beats endless local refinement. The architecture must support rapid iteration." }
              ].map((dec, i) => (
                <EditorialReveal 
                  key={dec.num}
                  className="es-decision-card"
                  stagger={i + 1}
                >
                  <span className="es-dec-num">— {dec.num}</span>
                  <h4 className="es-dec-title">{dec.title}</h4>
                  <p className="es-dec-desc">{dec.desc}</p>
                </EditorialReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 08 — ENGINEERING IN PRACTICE (COMPACT) */}
        <section className="es-practice bg-light" data-nav-theme="light">
          <div className="es-bounds">
            <m.h2 
              className="es-section-label"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: appleEase }}
              viewport={{ once: true, margin: "-50px" }}
            >
              BUILD SIGNAL
            </m.h2>

            <div className="es-practice-grid">
              {[
                { cat: "SYSTEM DESIGN", tool: "Microservices & Serverless", use: "Decoupling intelligence from interfaces." },
                { cat: "API ENGINEERING", tool: "FastAPI & Node.js", use: "Building high-performance logic endpoints." },
                { cat: "AI / ML", tool: "LLMs, Vectors, Agents", use: "Generative reasoning and contextual memory." },
                { cat: "DATA", tool: "PostgreSQL & Vector DBs", use: "State persistence and semantic retrieval." },
                { cat: "FRONTEND", tool: "React & Framer Motion", use: "Cinematic, highly responsive interfaces." },
                { cat: "DEPLOYMENT", tool: "Vercel & Cloud Run", use: "Shipping robust production loops." }
              ].map((prac, i) => (
                <EditorialReveal 
                  key={prac.cat}
                  className="es-practice-item"
                  stagger={i + 1}
                >
                  <span className="es-prac-cat">{prac.cat}</span>
                  <h4 className="es-prac-tool">{prac.tool}</h4>
                  <p className="es-prac-use">{prac.use}</p>
                </EditorialReveal>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================
            ACT III — DIRECTION
            ========================================= */}

        {/* 09 — THE ENGINEERING LOOP (MEDIUM) */}
        <section className="es-eng-loop" data-nav-theme="light">
          <div className="es-bounds text-center">
            <div className="es-loop-sequence">
              {["QUESTION", "RESEARCH", "EXPERIMENT", "IMPLEMENT", "EVALUATE", "SHIP", "LEARN"].map((node, i, arr) => (
                <React.Fragment key={node}>
                  <m.span
                    className="es-loop-node"
                    initial={{ opacity: 0, filter: 'blur(4px)' }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: appleEase }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    {node}
                  </m.span>
                  {i < arr.length - 1 && (
                    <m.span 
                      className="es-loop-arrow"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: (i * 0.1) + 0.05, ease: appleEase }}
                      viewport={{ once: true, margin: "-50px" }}
                    >→</m.span>
                  )}
                </React.Fragment>
              ))}
            </div>
            <m.p 
              className="es-loop-caption"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: appleEase }}
              viewport={{ once: true, margin: "-50px" }}
            >
              Every system changes what I build next.
            </m.p>
          </div>
        </section>

        {/* 10 — SYSTEMS IN THE REAL WORLD (COMPACT) */}
        <section className="es-evidence-map bg-dark" data-nav-theme="dark">
          <div className="es-bounds">
            <div className="es-evidence-grid">
              <m.div 
                className="es-ev-col"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: appleEase }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <h4 className="es-ev-title">DEPLOYED SYSTEMS</h4>
                <div className="es-ev-links">
                  <Link to="/work">CareerOS ↗</Link>
                  <Link to="/work">AuraOS ↗</Link>
                  <Link to="/work">VERITAS ↗</Link>
                  <Link to="/work">VoltDrive ↗</Link>
                </div>
              </m.div>

              <m.div 
                className="es-ev-col"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: appleEase }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <h4 className="es-ev-title">ENGINEERING ARTIFACTS</h4>
                <div className="es-ev-links">
                  <Link to="/credentials">Certificates ↗</Link>
                  <a href="https://github.com/thenameisbhagavan" target="_blank" rel="noreferrer">GitHub ↗</a>
                  <a href="https://leetcode.com/u/AxZsDhEeto/" target="_blank" rel="noreferrer">LeetCode ↗</a>
                  <Link to="/journal">Engineering Journal ↗</Link>
                </div>
              </m.div>

              <m.div 
                className="es-ev-col"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: appleEase }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <h4 className="es-ev-title">PROFESSIONAL RECORD</h4>
                <div className="es-ev-links">
                  <Link to="/experience">Experience ↗</Link>
                  <Link to="/resume">Resume ↗</Link>
                </div>
              </m.div>
            </div>
          </div>
        </section>

        {/* 11 — CURRENT FOCUS (LARGE) */}
        <section className="es-focus" data-nav-theme="light">
          <div className="es-bounds text-center">
            <m.h2 
              className="es-section-label"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: appleEase }}
              viewport={{ once: true, margin: "-50px" }}
            >
              WHAT I'M BUILDING TOWARD
            </m.h2>
            
            <div className="es-focus-keywords">
              {["AI SYSTEMS", "AGENTIC WORKFLOWS", "RAG & MEMORY", "TOOL USE", "SYSTEM DESIGN", "PRODUCT ENGINEERING", "PRODUCTION AI"].map((kw, i) => (
                <m.span 
                  key={kw} 
                  className="es-focus-kw"
                  initial={{ opacity: 0, filter: 'blur(8px)', scale: 0.95 }}
                  whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                  transition={{ duration: 0.8, delay: i * 0.05, ease: appleEase }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {kw}
                </m.span>
              ))}
            </div>

            <m.p 
              className="es-focus-desc"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: appleEase }}
              viewport={{ once: true, margin: "-50px" }}
            >
              I am moving from building individual AI features toward designing complete intelligent systems.
            </m.p>
          </div>
        </section>

        {/* 12 — ENGINEERING PRINCIPLES (MEDIUM) */}
        <section className="es-principles bg-light" data-nav-theme="light">
          <div className="es-bounds-narrow">
            {[
              "01 UNDERSTAND THE PROBLEM BEFORE CHOOSING THE MODEL.",
              "02 DESIGN THE SYSTEM AROUND THE INTELLIGENCE.",
              "03 MAKE COMPLEXITY EARN ITS PLACE.",
              "04 BUILD FOR FAILURE, NOT JUST THE HAPPY PATH.",
              "05 SHIP, OBSERVE, ITERATE."
            ].map((principle, i) => (
              <m.div 
                key={principle}
                className="es-principle-row"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: appleEase }}
                viewport={{ once: true, margin: "-50px" }}
              >
                {principle}
              </m.div>
            ))}
          </div>
        </section>

        {/* 13 — PERSON BEHIND THE SYSTEMS (CINEMATIC/HUGE) */}
        <section className="es-person" data-nav-theme="light">
          <div className="es-bounds">
            <m.div 
              className="es-person-layout"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpStagger}
            >
              <div className="es-person-text">
                <m.h2 className="es-person-hl" variants={fadeUp}>
                  Behind every system is an engineer still learning.
                </m.h2>
                <m.p className="es-person-desc" variants={fadeUp}>
                  AI is the direction. Engineering is the discipline.<br/>
                  Product is the outcome. Learning is the loop.
                </m.p>
              </div>
              <m.div className="es-person-image-wrapper" variants={fadeUp}>
                <img src={profileHeroImg} alt="Bhagavan" className="es-person-image" loading="lazy" />
              </m.div>
            </m.div>
          </div>
        </section>

        {/* =========================================
            ACT IV — EXPLORE
            ========================================= */}

        {/* 14 — PORTFOLIO NAVIGATION (MEDIUM) */}
        <section className="es-portfolio-nav bg-dark" data-nav-theme="dark">
          <div className="es-bounds">
            <m.h2 
              className="es-nav-headline"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: appleEase }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Explore the rest of the system.
            </m.h2>

            <div className="es-nav-index">
              {[
                { title: "WORK", desc: "Systems I've built.", path: "/work" },
                { title: "JOURNEY", desc: "How experience changed how I build.", path: "/experience" },
                { title: "INNOVATION", desc: "Where experiments become ideas.", path: "/innovation" },
                { title: "CREDENTIALS", desc: "The evidence behind the work.", path: "/credentials" },
                { title: "ECOSYSTEM", desc: "Technologies and architecture.", path: "/ecosystem" },
                { title: "VISION", desc: "Where I'm going.", path: "/vision" },
                { title: "JOURNAL", desc: "What I'm learning and documenting.", path: "/journal" },
                { title: "CONNECT", desc: "Open a conversation.", path: "/connect" }
              ].map((nav, idx) => (
                <m.div 
                  key={nav.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.05, ease: appleEase }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <Link to={nav.path} className="es-nav-row">
                    <span className="es-nr-title">{nav.title}</span>
                    <span className="es-nr-desc">{nav.desc}</span>
                  </Link>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* 15 & 16 — SIGNATURE & CTA (HUGE & MEDIUM) */}
        <section className="es-signature-section" data-nav-theme="light">
          <div className="es-bounds text-center">
            <m.div 
              className="es-signature-statement"
              initial={{ opacity: 0, filter: 'blur(8px)', y: 20 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 1.5, ease: appleEase }}
              viewport={{ once: true, margin: "-100px" }}
            >
              The work is the introduction.
            </m.div>
            
            <m.div 
              className="es-signature-meta"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.4, ease: appleEase }}
              viewport={{ once: true, margin: "-100px" }}
            >
              THE NAME IS BHAGAVAN<br/>
              AI PRODUCT ENGINEER<br/>
              AI SYSTEMS · PRODUCT ENGINEERING · SOFTWARE
            </m.div>

            <m.div 
              className="es-final-cta"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: appleEase }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="es-cta-label">Explore what I'm building.</span>
              <Link to="/work" className="es-cta-link apple-pressable">
                VIEW THE WORK →
              </Link>
            </m.div>
          </div>
        </section>

      </div>
    </>
  );
}
