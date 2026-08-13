import React, { useEffect, useRef, useState } from "react";
import { m, useScroll, useTransform, animate, useAnimation } from "framer-motion";
import { Github, Linkedin, Mail, Globe, ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import { socialLinks } from "../constants/socialLinks";
import { getAllArticles } from '../data/articles';
import "../styles/Overview.css";

// Existing images from hero
import profileHeroImg from "../assets/profile-hero.jpg";

// Premium Gallery Images
import githubProfileImg from "../assets/github-profile.png";
import linkedinProfileImg from "../assets/linkedin-profile.png";
import leetcodeProfileImg from "../assets/leetcode-profile.png";

// Import Flagship Products from Work
import { FLAGSHIP_PROJECTS } from "./Work";

// Apple-precise easing
const appleEase = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: appleEase } }
};

const fadeUpStagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
};

function AnimatedCounter({ from, to, duration = 2.5, suffix = "", delay = 0 }) {
  const nodeRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.5 }
    );
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        ease: [0.16, 1, 0.3, 1],
        delay,
        onUpdate(value) {
          if (nodeRef.current) {
            const current = Math.round(value);
            if (current === to) {
              nodeRef.current.textContent = current + suffix;
            } else {
              nodeRef.current.textContent = current;
            }
          }
        }
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView, delay, suffix]);

  return <span ref={nodeRef}>{from}</span>;
}


export default function Overview() {
  const { scrollY } = useScroll();
  const controls = useAnimation();
  const recentArticles = getAllArticles().sort((a, b) => new Date(b.published) - new Date(a.published)).slice(0, 3);
  
  // Hero Scroll Parallax & Fades
  const heroScale = useTransform(scrollY, [0, 500], [1, 1]);
  const elementsOpacity = useTransform(scrollY, [50, 300], [1, 0]);
  const headlineY = useTransform(scrollY, [0, 500], [0, -12]);
  const portraitY = useTransform(scrollY, [0, 800], [0, -16]);
  
  // Dynamic Lighting Parallax
  const lightDriftX = useTransform(scrollY, [0, 500], [0, 16]);
  const lightDriftY = useTransform(scrollY, [0, 500], [0, 8]);

  // Start animations immediately (no old loader dependency)
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Bhagavan | Engineering the 2026 Intelligence Ecosystem"
        description="Explore the portfolio of Bhagavan — architecting an interconnected ecosystem of intelligent software: CareerOS, AuraOS, VERITAS, and VoltDrive."
        keywords="AI Engineer, Artificial Intelligence, CareerOS, AuraOS, VERITAS, VoltDrive, Machine Learning, Full Stack Developer, React, Portfolio"
      />
    <div className="apple-overview">
      {/* Background Noise overlay */}
      <div className="phi-noise-overlay"></div>

      {/* Dynamic Lighting */}
      <m.div className="phi-light-topleft" style={{ x: lightDriftX, y: lightDriftY }}></m.div>
      <m.div className="phi-light-bottomright" style={{ x: useTransform(lightDriftX, v => -v), y: useTransform(lightDriftY, v => -v) }}></m.div>

      {/* ===== FLAGSHIP HERO: THE ENGINEER + THE WORK ===== */}
      <m.section className="editorial-hero" style={{ scale: heroScale }}>
        
        {/* RIGHT: PORTRAIT OVERLAP */}
        <m.div
          className="editorial-portrait-wrapper"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, filter: "blur(8px)" },
            visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.9, delay: 0.2, ease: appleEase } }
          }}
          style={{ y: portraitY, opacity: elementsOpacity }}
        >
          <div className="editorial-portrait-mask">
            <img
              src={profileHeroImg}
              alt="Bhagavan — AI Product Engineer"
              className="editorial-portrait-img"
              loading="eager"
            />
          </div>
        </m.div>

        {/* LEFT/CENTER: CONTENT */}
        <m.div
          className="editorial-content"
          initial="hidden"
          animate={controls}
          variants={fadeUpStagger}
          style={{ opacity: elementsOpacity }}
        >
          {/* Eyebrow Identity */}
          <m.p className="editorial-eyebrow" variants={fadeUp}>
            AI PRODUCT ENGINEER
          </m.p>

          {/* Thesis Headline */}
          <m.div style={{ y: headlineY }}>
            <h1 className="editorial-headline">
              <m.span className="editorial-headline-line" variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1, ease: appleEase } } }}>
                I engineer AI<br />
                systems<br />
              </m.span>
              <m.span className="editorial-headline-line" variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.18, ease: appleEase } } }}>
                and products that<br />
                ship.
              </m.span>
            </h1>
          </m.div>

          {/* Supporting Thesis */}
          <m.p className="editorial-subthesis" variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.26, ease: appleEase } } }}>
            Career intelligence · AI memory &amp; context <br />
            Reasoning &amp; evidence · Digital product experiences
          </m.p>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '6px' }}>
            <m.a 
              href="/work" 
              className="editorial-cta-quiet apple-pressable"
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.34, ease: appleEase } } }}
            >
              Explore the systems <ArrowRight size={14} />
            </m.a>
            <m.span 
              style={{ fontSize: '11px', color: '#a1a1a6', letterSpacing: '0.02em', fontWeight: 500 }}
              variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.42, ease: appleEase } } }}
            >
              CareerOS · AuraOS · VERITAS · VoltDrive
            </m.span>
          </div>
        </m.div>
      </m.section>

      {/* =========================================
          SYSTEMS INDEX SECTION (BELOW HERO)
          ========================================= */}
      <section className="systems-index-section">
        <div className="systems-index-inner">
          <m.h2 
            className="systems-index-title"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: appleEase }}
            viewport={{ once: true, amount: 0.15 }}
          >
            THE SYSTEMS I BUILD
          </m.h2>

          <div className="systems-index-list">
            {[
              { num: "01", name: "CareerOS", tag: "Career Intelligence", url: "https://careeros-thenameisbhagavan.vercel.app/", colorKey: "blue" },
              { num: "02", name: "AuraOS", tag: "AI Memory & Context", url: "https://aura-os-thenameisbhagavan.vercel.app/", colorKey: "amber" },
              { num: "03", name: "VERITAS", tag: "Reasoning & Evidence", url: "https://veritas-thenameisbhagavan.vercel.app/", colorKey: "cyan" },
              { num: "04", name: "VoltDrive", tag: "Digital Product Experience", url: "https://voltdrive-thenameisbhagavan.vercel.app/", colorKey: "indigo" }
            ].map((item, idx) => (
              <m.a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`system-row hover-${item.colorKey}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.08, ease: appleEase }}
                viewport={{ once: true, amount: 0.15 }}
              >
                <div className="system-row-left">
                  <span className="system-row-num">{item.num}</span>
                  <span className="system-row-name">{item.name}</span>
                </div>
                <div className="system-row-right">
                  <span className="system-row-tag">{item.tag}</span>
                  <span className="system-row-arrow"><ArrowRight size={14} /></span>
                </div>
              </m.a>
            ))}
          </div>

          <m.div 
            className="systems-signature"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: appleEase }}
            viewport={{ once: true, amount: 0.15 }}
          >
            PYTHON · FASTAPI · REACT · AI SYSTEMS · FULL STACK
          </m.div>
        </div>
      </section>

      {/* =========================================
          ENGINEERING CONTEXT STRIP (BELOW FOLD)
          ========================================= */}
      <section className="overview-context-strip">
        <div className="overview-context-grid">
          <div className="overview-context-item">
            <h4 className="context-eyebrow">ROLE</h4>
            <p className="context-body">AI Systems Engineer</p>
          </div>
          <div className="overview-context-item">
            <h4 className="context-eyebrow">MISSION</h4>
            <p className="context-body">Architecting interconnected ecosystems of intelligent software and premium digital products.</p>
          </div>
          <div className="overview-context-item">
            <h4 className="context-eyebrow">FOCUS</h4>
            <p className="context-body">Deep reasoning, context memory, and product design.</p>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 1: WHY I BUILD
          ========================================= */}
      <div className="bg-light">
        {[
          "Software automates.",
          "Intelligence empowers.",
          "I engineer the latter."
        ].map((text, i) => (
          <div key={i} className="cinematic-block">
            <m.div
              className="keynote-text-huge text-center"
              initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.0, ease: appleEase }}
              viewport={{ once: true, amount: 0.15 }}
            >
              {text}
            </m.div>
          </div>
        ))}
      </div>

      {/* =========================================
          SECTION 2: THE MISSION
          ========================================= */}
      <div className="bg-light sticky-stack-container">
        {[
          { text: "Data is infinite.", highlight: false },
          { text: "Context is scarce.", highlight: false },
          { text: "Complexity is compounding.", highlight: false },
          { text: "Clarity must be engineered.", highlight: true },
        ].map((item, i) => (
          <div key={i} className="sticky-stack-item bg-light">
            <m.div
              className={`keynote-text-large text-center ${item.highlight ? 'keynote-text-highlight' : 'keynote-text-muted'}`}
              initial={{ opacity: 0, filter: 'blur(8px)', y: 16 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 0.9, ease: appleEase }}
              viewport={{ once: true, amount: 0.15 }}
            >
              {item.text}
            </m.div>
          </div>
        ))}
      </div>

      {/* =========================================
          SECTION 3: EMOTIONAL PEAK
          Engineering Human Potential (Particles)
          ========================================= */}
      <div className="bg-dark sticky-stack-container">
        {[
          "CareerOS",
          "AuraOS",
          "VERITAS",
          "VoltDrive"
        ].map((word, i) => (
          <div key={word} className="sticky-stack-item bg-dark">
            <m.div
              className="particle-word"
              style={{ position: 'relative' }}
              initial={{ opacity: 0, filter: 'blur(12px)', scale: 1.05 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
              transition={{ duration: 1.0, ease: appleEase }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {word.includes(" ") ? (
                <>
                  {word.split(" ")[0]}<br />{word.split(" ")[1]}
                </>
              ) : (
                word
              )}
            </m.div>
          </div>
        ))}
      </div>

      {/* =========================================
          SECTION 4: INTELLIGENCE PHILOSOPHY
          ========================================= */}
      <div className="bg-light cinematic-block" style={{ padding: '20vh 5vw' }}>
        <m.div
          className="keynote-text-large text-center"
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.0, ease: appleEase }}
          viewport={{ once: true, amount: 0.15 }}
        >
          Engineering at the intersection of <br/>
          <span className="keynote-text-muted" style={{ fontSize: '0.8em', display: 'inline-block', marginTop: '16px' }}>deep reasoning and human intuition.</span>
        </m.div>
      </div>

      {/* =========================================
          SECTION 5: ENGINEERING SYSTEMS (PIPELINE)
          ========================================= */}
      <div className="bg-light cinematic-block">
        <div className="pipeline-container">
          <div className="pipeline-line" />
          {[
            "Observation",
            "Architecture",
            "Reasoning",
            "Execution",
            "Impact"
          ].map((node, i) => (
            <m.div
              key={node}
              className={`pipeline-node ${i === 0 || i === 4 ? 'highlight' : ''}`}
              initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, ease: appleEase, delay: i * 0.08 }}
              viewport={{ once: true, amount: 0.15 }}
            >
              {node}
            </m.div>
          ))}
        </div>
      </div>

      {/* =========================================
          SECTION 6: FULLSCREEN PRODUCTS
          ========================================= */}
      <div className="bg-light">
        {FLAGSHIP_PROJECTS.map((product, i) => (
          <div key={product.name} className="product-fullscreen">
            <m.div
              className="product-image-large apple-magnetic-card"
              initial={{ opacity: 0, y: 24, filter: 'blur(12px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, ease: appleEase }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <img src={product.img} alt={product.name} className="product-hero-img" loading="lazy" />
            </m.div>
            <div className="product-text-center">
              <m.h3
                className="keynote-text-huge"
                initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: 0.08, ease: appleEase }}
                viewport={{ once: true }}
              >
                {product.name}
              </m.h3>
              <m.p
                className="apple-body-large"
                style={{ marginTop: '16px' }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.16, ease: appleEase }}
                viewport={{ once: true }}
              >
                {product.desc}
              </m.p>
              <m.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.24, ease: appleEase }}
                viewport={{ once: true }}
                style={{ marginTop: '24px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
              >
                <a href={product.link} className="phi-cta-ghost apple-pressable apple-underline-slide" style={{ fontSize: '18px' }}>Explore Project &#8250;</a>
                {product.live && (
                  <a href={product.live} target="_blank" rel="noopener noreferrer" className="phi-cta-ghost apple-pressable apple-underline-slide" style={{ fontSize: '18px' }} aria-label={`Visit ${product.name} Live Demo`}>Live Demo ↗</a>
                )}
              </m.div>
            </div>
          </div>
        ))}
      </div>

      {/* =========================================
          SECTION 6.5: ENGINEERING JOURNAL
          ========================================= */}
      <div className="bg-dark cinematic-block" style={{ padding: '15vh 5vw' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
            <div>
              <m.p 
                className="apple-eyebrow" 
                initial={{ opacity: 0, y: 12 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, ease: appleEase }} 
                viewport={{ once: true }}
              >
                Engineering Journal
              </m.p>
              <m.h2 
                className="keynote-text-large" 
                initial={{ opacity: 0, y: 16 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.08, ease: appleEase }} 
                viewport={{ once: true }}
                style={{ color: '#fff', margin: 0 }}
              >
                Documenting the architecture.
              </m.h2>
            </div>
            <m.a 
              href="/journal"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.16, ease: appleEase }}
              viewport={{ once: true }}
              style={{ color: '#0066cc', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem', fontWeight: 500 }}
              className="apple-pressable"
            >
              View Full Journal <ArrowRight size={18} />
            </m.a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {recentArticles.map((article, idx) => (
              <m.a
                key={article.slug}
                href={`/journal/${article.slug}`}
                className="apple-journal-card"
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: idx * 0.08, ease: appleEase }}
                viewport={{ once: true, amount: 0.15 }}
              >
                <div className="apple-journal-image-wrapper">
                  <img src={article.coverImage} alt={article.title} className="apple-journal-image" loading="lazy" />
                </div>
                <div className="apple-journal-content">
                  <div className="apple-journal-meta">
                    {article.category} • {article.readingTime}
                  </div>
                  <h3 className="apple-journal-title">
                    {article.title}
                  </h3>
                  <p className="apple-journal-desc">
                    {article.description}
                  </p>
                </div>
              </m.a>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================
          SECTION 7: MEASURED BY WHAT MATTERS
          ========================================= */}
      <div className="bg-light">
        {/* Intro */}
        <div className="cinematic-metric-container" style={{ minHeight: '60vh' }}>
          <m.p 
            className="apple-eyebrow text-center"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: appleEase }}
            viewport={{ once: true, amount: 0.15 }}
          >
            Metrics of Velocity
          </m.p>
          <m.h2 
            className="keynote-text-huge text-center"
            initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.08, ease: appleEase }}
            viewport={{ once: true, amount: 0.15 }}
          >
            Empirical Evidence.
          </m.h2>
          <m.p 
            className="apple-body-large text-center keynote-text-muted"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease: appleEase }}
            viewport={{ once: true, amount: 0.15 }}
            style={{ maxWidth: '800px', margin: '32px auto 0' }}
          >
            Engineering is measured by execution. Every product leaves a trace of velocity.
          </m.p>
        </div>

        {/* 3 Cinematic Hero Metrics */}
        {[
          { num: 5, suffix: "+", label: "Deployed AI Systems", caption: "Architected and shipped from concept to production." },
          { num: 4, suffix: "", label: "Engineering Internships", caption: "Professional environments. Production codebases." },
          { num: 181, suffix: "+", label: "Algorithmic Solutions", caption: "Continuous optimization and problem solving." }
        ].map((metric, i) => (
          <div key={metric.label} className="cinematic-metric-container">
            <m.div 
              className="metric-number-huge"
              initial={{ opacity: 0, scale: 0.98, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, ease: appleEase }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <AnimatedCounter from={0} to={metric.num} suffix={metric.suffix} delay={0.1} />
            </m.div>
            <m.div
              className="keynote-text-large text-center"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: appleEase }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {metric.label}
            </m.div>
            <m.div
              className="metric-caption"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.16, ease: appleEase }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {metric.caption}
            </m.div>
          </div>
        ))}

        {/* 1 Premium Editorial Layout for remaining 3 */}
        <div className="editorial-metrics-grid">
          <m.div
            className="editorial-metric"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: appleEase }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="editorial-number"><AnimatedCounter from={0} to={8} suffix="+" /></div>
            <div className="editorial-label">Public Repositories</div>
          </m.div>
          <m.div
            className="editorial-metric"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: appleEase }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="editorial-number">2022–2026</div>
            <div className="editorial-label">Continuous Learning</div>
          </m.div>
          <m.div
            className="editorial-metric"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease: appleEase }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="editorial-number"><AnimatedCounter from={0} to={100} suffix="%" /></div>
            <div className="editorial-label">Built in Public</div>
          </m.div>
        </div>

        {/* Memorable Transition */}
        <div className="cinematic-metric-container" style={{ minHeight: '80vh' }}>
          <m.div
            className="keynote-text-large text-center"
            initial={{ opacity: 0, filter: 'blur(8px)', y: 12 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.9, ease: appleEase }}
            viewport={{ once: true, amount: 0.2 }}
            style={{ marginBottom: '2vh' }}
          >
            Products demonstrate ability.
          </m.div>
          <m.div
            className="keynote-text-large text-center keynote-text-muted"
            initial={{ opacity: 0, filter: 'blur(8px)', y: 12 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: appleEase }}
            viewport={{ once: true, amount: 0.2 }}
          >
            Consistency builds trust.
          </m.div>
        </div>

        {/* Minimal Profile Cards */}
        <div className="minimal-cards-container">
          <m.a 
            href="https://github.com/thenameisbhagavan" 
            target="_blank" 
            rel="noreferrer" 
            className="minimal-profile-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: appleEase }}
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="minimal-card-thumb">
              <img src={githubProfileImg} alt="GitHub" className="minimal-img github-crop" loading="lazy" />
            </div>
            <div className="minimal-card-content">
              <h4 className="minimal-card-title">GitHub</h4>
              <p className="minimal-card-desc">Every repository documents the evolution of an idea into a product.</p>
              <span className="minimal-card-link">Open Profile ↗</span>
            </div>
          </m.a>

          <m.a 
            href="https://www.linkedin.com/in/thenameisbhagavan/" 
            target="_blank" 
            rel="noreferrer" 
            className="minimal-profile-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: appleEase }}
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="minimal-card-thumb">
              <img src={linkedinProfileImg} alt="LinkedIn" className="minimal-img linkedin-crop" loading="lazy" />
            </div>
            <div className="minimal-card-content">
              <h4 className="minimal-card-title">LinkedIn</h4>
              <p className="minimal-card-desc">Sharing products, learning, and engineering progress.</p>
              <span className="minimal-card-link">Open Profile ↗</span>
            </div>
          </m.a>

          <m.a 
            href="https://leetcode.com/u/AxZsDhEeto/" 
            target="_blank" 
            rel="noreferrer" 
            className="minimal-profile-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.16, ease: appleEase }}
            viewport={{ once: true, amount: 0.15 }}
          >
            <div className="minimal-card-thumb">
              <img src={leetcodeProfileImg} alt="LeetCode" className="minimal-img leetcode-crop" loading="lazy" />
            </div>
            <div className="minimal-card-content">
              <h4 className="minimal-card-title">LeetCode</h4>
              <p className="minimal-card-desc">Building the reasoning skills behind intelligent systems.</p>
              <span className="minimal-card-link">Open Profile ↗</span>
            </div>
          </m.a>
        </div>
      </div>

      {/* =========================================
          SECTION 8: CONTINUOUS LEARNING
          ========================================= */}
      <div className="bg-light">
        {[
          { year: "2023", topic: "Algorithmic Foundation." },
          { year: "2024", topic: "Full-Stack Architecture." },
          { year: "2025", topic: "AI & Data Systems." },
          { year: "2026", topic: "Intelligent Product Experiences." }
        ].map((item, i) => (
          <div key={item.year} className="learning-block">
            <m.div
              className="learning-year"
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, ease: appleEase }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {item.year}
            </m.div>
            <m.div
              className="learning-topic text-center"
              initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, delay: 0.08, ease: appleEase }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {item.topic}
            </m.div>
          </div>
        ))}
      </div>

      {/* =========================================
          SECTION 9: ENGINEERING PRINCIPLES
          ========================================= */}
      <div className="bg-dark sticky-stack-container">
        {[
          "1. Clarity above all.",
          "2. Intelligence must explain itself.",
          "3. Performance is a feature.",
          "4. Design is how it works."
        ].map((principle, i) => (
          <div key={principle} className="sticky-stack-item bg-dark">
            <m.div
              className="keynote-text-large text-center"
              initial={{ opacity: 0, filter: 'blur(8px)', y: 12 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 0.9, ease: appleEase }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {principle}
            </m.div>
          </div>
        ))}
      </div>

      {/* =========================================
          SECTION 10: CLOSING
          ========================================= */}
      <div className="bg-light" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '12vh 5vw 4vh 5vw' }}>
        <m.div
          className="keynote-text-huge text-center"
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, ease: appleEase }}
          viewport={{ once: true }}
          style={{ marginBottom: '24px' }}
        >
          The future won't be built by software.<br/>
          <m.span
            initial={{ opacity: 0, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.4, ease: appleEase }}
            viewport={{ once: true }}
          >
            It will be built by intelligence.
          </m.span>
        </m.div>

        <m.div
          className="keynote-text-muted"
          style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: appleEase }}
          viewport={{ once: true }}
        >
          This is where the work begins.
        </m.div>

        <m.a
          href="/work"
          className="cta-button"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 1.2, ease: appleEase }}
          viewport={{ once: true }}
        >
          Explore My Work
        </m.a>
      </div>

    </div>
    </>
  );
}
