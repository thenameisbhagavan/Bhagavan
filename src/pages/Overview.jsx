import React, { useEffect, useRef, useState } from "react";
import { m, useScroll, useTransform, animate } from "framer-motion";
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
const appleEase = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: appleEase } }
};

const fadeUpStagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
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
  
  // Hero Scroll Parallax & Fades
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.995]);
  const elementsOpacity = useTransform(scrollY, [100, 400], [1, 0]);
  const headlineY = useTransform(scrollY, [0, 500], [0, -40]);
  const portraitY = useTransform(scrollY, [0, 800], [0, -20]);
  
  // Dynamic Lighting Parallax
  const lightDriftX = useTransform(scrollY, [0, 500], [0, 40]);
  const lightDriftY = useTransform(scrollY, [0, 500], [0, 20]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="apple-overview">
      {/* Background Noise overlay */}
      <div className="phi-noise-overlay"></div>

      {/* Dynamic Lighting */}
      <m.div className="phi-light-topleft" style={{ x: lightDriftX, y: lightDriftY }}></m.div>
      <m.div className="phi-light-bottomright" style={{ x: useTransform(lightDriftX, v => -v), y: useTransform(lightDriftY, v => -v) }}></m.div>

      {/* ===== HERO (PRESERVED EXACTLY) ===== */}
      <m.section className="phi-hero" style={{ scale: heroScale }}>

        {/* LEFT — CONTENT */}
        <m.div
          className="phi-content"
          initial="hidden"
          animate="visible"
          variants={fadeUpStagger}
        >
          {/* Eyebrow */}
          <m.p className="phi-eyebrow" variants={fadeUp} style={{ opacity: elementsOpacity }}>
            <span className="phi-eyebrow-dot" />
            AI • SOFTWARE • PRODUCT ENGINEERING
          </m.p>

          {/* Headline — Staggered Fade + translateY */}
          <m.h1 className="phi-headline" style={{ y: headlineY }}>
            <m.span className="headline-line" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1, ease: appleEase }}>Building</m.span>
            <br />
            <m.span className="headline-line" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, ease: appleEase }}>Intelligent</m.span>
            <br />
            <m.span className="headline-line" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5, ease: appleEase }}>Futures.</m.span>
          </m.h1>

          {/* Body */}
          <m.p className="phi-body" variants={fadeUp} style={{ opacity: elementsOpacity }}>
           I build AI-powered products, full-stack systems, and intelligent experiences that transform complex problems into practical solutions. From CareerOS to production-ready applications, I focus on creating technology with measurable impact.
          </m.p>

          {/* Premium Divider & CareerOS Text */}
          <m.div className="phi-premium-detail" variants={fadeUp} style={{ opacity: elementsOpacity }}>
            <div className="phi-hairline-sep"></div>
            <span className="phi-premium-text">Currently building CareerOS · AI Career Intelligence Operating System</span>
          </m.div>

          {/* Signature */}
          <m.p className="phi-signature" variants={fadeUp} style={{ opacity: elementsOpacity }}>
           Engineering the future of opportunity through intelligence.
          </m.p>

          {/* Credibility metadata — Apple spec-row style */}
          <m.div className="phi-meta" variants={fadeUp} style={{ opacity: elementsOpacity }}>
            <span className="phi-meta-item">CareerOS Creator</span>
            <span className="phi-meta-sep"></span>
            <span className="phi-meta-item">5+ AI Products Built</span>
            <span className="phi-meta-sep"></span>
            <span className="phi-meta-item">4 Internships</span>
            <span className="phi-meta-sep"></span>
            <span className="phi-meta-item">AI &amp; Intelligent Systems Engineer</span>
          </m.div>

          {/* CTAs */}
          <m.div className="phi-ctas" variants={fadeUp} style={{ opacity: elementsOpacity }}>
            <a href="/work" className="phi-cta-primary">Explore CareerOS</a>
            <a href="/work" className="phi-cta-textlink">View My Work <span className="phi-cta-arrow">→</span></a>
            <a href="/experience" className="phi-cta-textlink">Journey <span className="phi-cta-arrow">→</span></a>
          </m.div>

          {/* Featured builds */}
          <m.div className="phi-products" variants={fadeUp} style={{ opacity: elementsOpacity }}>
            <span className="phi-products-label">Featured</span>
            {[
              { name: "CareerOS",   desc: "AI Career Intelligence", primary: true },
              { name: "AuraOS",    desc: "Conversational AI", primary: false },
              { name: "ResumeAI",   desc: "Intelligent Resume", primary: false },
              { name: "Smart Leave",desc: "Workflow Automation", primary: false },
            ].map((p) => (
              <a key={p.name} href="/work" className={`phi-product-capsule ${p.primary ? 'phi-capsule-primary' : ''}`}>
                <span className="phi-product-name">{p.name}</span>
                <span className="phi-product-desc">{p.desc}</span>
              </a>
            ))}
          </m.div>
        </m.div>

        {/* RIGHT — PORTRAIT */}
        <m.div
          className="phi-portrait-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.0, ease: appleEase, delay: 0.1 }}
          style={{ y: portraitY, opacity: elementsOpacity }}
        >
          <div className="phi-portrait-frame">
            <img
              src={profileHeroImg}
              alt="Bhagavan — Full Stack AI Engineer & Product Builder"
              className="phi-portrait-img"
              loading="eager"
            />
            <m.div
              className="phi-portrait-card"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.9, ease: appleEase }}
            >
              <span className="phi-card-name">G. S. S. Bhagavan</span>
              <span className="phi-card-role">Full Stack AI Engineer &amp; CareerOS Creator</span>
            </m.div>
          </div>
        </m.div>

      </m.section>

      {/* =========================================
          SECTION 1: WHY I BUILD
          ========================================= */}
      <div className="bg-light">
        {[
          "I don't build software.",
          "I build intelligence.",
          "That helps people make better decisions."
        ].map((text, i) => (
          <div key={i} className="cinematic-block">
            <m.div
              className="keynote-text-huge text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: appleEase }}
              viewport={{ once: false, amount: 0.6 }}
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
          { text: "People generate more information than ever.", highlight: false },
          { text: "But understand less.", highlight: false },
          { text: "Careers become more complex.", highlight: false },
          { text: "Technology should create clarity.", highlight: true },
        ].map((item, i) => (
          <div key={i} className="sticky-stack-item bg-light">
            <m.div
              className={`keynote-text-large text-center ${item.highlight ? 'keynote-text-highlight' : 'keynote-text-muted'}`}
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1, ease: appleEase }}
              viewport={{ once: false, amount: 0.5 }}
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
          "Human Potential",
          "Intelligence."
        ].map((word, i) => (
          <div key={word} className="sticky-stack-item bg-dark">
            <m.div
              className="particle-word"
              style={{ position: 'relative' }}
              initial={{ opacity: 0, filter: 'blur(40px)', scale: 1.3 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
              transition={{ duration: 1.5, ease: appleEase }}
              viewport={{ once: false, amount: 0.6 }}
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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: appleEase }}
          viewport={{ once: true }}
        >
          Information isn't intelligence. <br/>
          <span className="keynote-text-muted">Patterns create intelligence. Understanding creates confidence. Confidence creates opportunity.</span>
        </m.div>
      </div>

      {/* =========================================
          SECTION 5: ENGINEERING SYSTEMS (PIPELINE)
          ========================================= */}
      <div className="bg-light cinematic-block">
        <div className="pipeline-container">
          <div className="pipeline-line" />
          {[
            "Human Problem",
            "Research",
            "Data",
            "AI",
            "Reasoning",
            "Product",
            "Impact"
          ].map((node, i) => (
            <m.div
              key={node}
              className={`pipeline-node ${i === 0 || i === 6 ? 'highlight' : ''}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: appleEase, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
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
              className="product-image-large"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: appleEase }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img src={product.img} alt={product.name} className="product-hero-img" loading="lazy" />
            </m.div>
            <div className="product-text-center">
              <m.h3
                className="keynote-text-huge"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: appleEase }}
                viewport={{ once: true }}
              >
                {product.name}
              </m.h3>
              <m.p
                className="apple-body-large"
                style={{ marginTop: '16px' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: appleEase }}
                viewport={{ once: true }}
              >
                {product.desc}
              </m.p>
              <m.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: appleEase }}
                viewport={{ once: true }}
                style={{ marginTop: '24px' }}
              >
                <a href={product.link} className="phi-cta-ghost" style={{ fontSize: '18px' }}>Explore Product &#8250;</a>
              </m.div>
            </div>
          </div>
        ))}
      </div>

      {/* =========================================
          SECTION 7: MEASURED BY WHAT MATTERS
          ========================================= */}
      <div className="bg-light">
        {/* Intro */}
        <div className="cinematic-metric-container" style={{ minHeight: '60vh' }}>
          <m.p 
            className="apple-eyebrow text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: appleEase }}
            viewport={{ once: true }}
          >
            Beyond the Products
          </m.p>
          <m.h2 
            className="keynote-text-huge text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: appleEase }}
            viewport={{ once: true }}
          >
            Engineering Leaves Evidence.
          </m.h2>
          <m.p 
            className="apple-body-large text-center keynote-text-muted"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: appleEase }}
            viewport={{ once: true }}
            style={{ maxWidth: '800px', margin: '32px auto 0' }}
          >
            Every product tells a story. Every engineer leaves measurable evidence behind.
          </m.p>
        </div>

        {/* 3 Cinematic Hero Metrics */}
        {[
          { num: 5, suffix: "+", label: "AI Products", caption: "Building intelligent systems from concept to deployment." },
          { num: 4, suffix: "", label: "Professional Internships", caption: "Learning through real engineering environments." },
          { num: 181, suffix: "+", label: "Problems Solved", caption: "Developing analytical thinking through consistent problem solving." }
        ].map((metric, i) => (
          <div key={metric.label} className="cinematic-metric-container">
            <m.div 
              className="metric-number-huge"
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.5, ease: appleEase }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <AnimatedCounter from={0} to={metric.num} suffix={metric.suffix} delay={0.2} />
            </m.div>
            <m.div
              className="keynote-text-large text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: appleEase }}
              viewport={{ once: true }}
            >
              {metric.label}
            </m.div>
            <m.div
              className="metric-caption"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.0, ease: appleEase }}
              viewport={{ once: true }}
            >
              {metric.caption}
            </m.div>
          </div>
        ))}

        {/* 1 Premium Editorial Layout for remaining 3 */}
        <div className="editorial-metrics-grid">
          <m.div
            className="editorial-metric"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: appleEase }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="editorial-number"><AnimatedCounter from={0} to={8} suffix="+" /></div>
            <div className="editorial-label">Public Repositories</div>
          </m.div>
          <m.div
            className="editorial-metric"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: appleEase }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="editorial-number">2022–2026</div>
            <div className="editorial-label">Continuous Learning</div>
          </m.div>
          <m.div
            className="editorial-metric"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: appleEase }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="editorial-number"><AnimatedCounter from={0} to={100} suffix="%" /></div>
            <div className="editorial-label">Built in Public</div>
          </m.div>
        </div>

        {/* Memorable Transition */}
        <div className="cinematic-metric-container" style={{ minHeight: '80vh' }}>
          <m.div
            className="keynote-text-large text-center"
            initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1.5, ease: appleEase }}
            viewport={{ once: false, amount: 0.5 }}
            style={{ marginBottom: '2vh' }}
          >
            Products demonstrate ability.
          </m.div>
          <m.div
            className="keynote-text-large text-center keynote-text-muted"
            initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1.5, delay: 1, ease: appleEase }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Consistency builds trust.
          </m.div>
        </div>

        {/* Minimal Profile Cards */}
        <div className="minimal-cards-container">
          <m.a 
            href="https://github.com/bhagavan444" 
            target="_blank" 
            rel="noreferrer" 
            className="minimal-profile-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: appleEase }}
            viewport={{ once: true }}
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
            href="https://www.linkedin.com/in/gsssbhagavan/" 
            target="_blank" 
            rel="noreferrer" 
            className="minimal-profile-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: appleEase }}
            viewport={{ once: true }}
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: appleEase }}
            viewport={{ once: true }}
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
          { year: "2023", topic: "Learned to write software." },
          { year: "2024", topic: "Learned to build systems." },
          { year: "2025", topic: "Learned to build intelligence." },
          { year: "2026", topic: "Building products for human potential." }
        ].map((item, i) => (
          <div key={item.year} className="learning-block">
            <m.div
              className="learning-year"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: appleEase }}
              viewport={{ once: false, amount: 0.5 }}
            >
              {item.year}
            </m.div>
            <m.div
              className="learning-topic text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: appleEase }}
              viewport={{ once: false, amount: 0.5 }}
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
          "Build with purpose.",
          "Design for clarity.",
          "Intelligence should explain itself.",
          "Every decision deserves evidence.",
          "Technology should empower people."
        ].map((principle, i) => (
          <div key={principle} className="sticky-stack-item bg-dark">
            <m.div
              className="keynote-text-large text-center"
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, ease: appleEase }}
              viewport={{ once: false, amount: 0.6 }}
            >
              {principle}
            </m.div>
          </div>
        ))}
      </div>

      {/* =========================================
          SECTION 10: CLOSING
          ========================================= */}
      <div className="bg-light cinematic-block" style={{ flexDirection: 'column' }}>
        <m.div
          className="keynote-text-huge text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: appleEase }}
          viewport={{ once: true }}
          style={{ marginBottom: '24px' }}
        >
          The future won't be built by software alone.<br/>
          <m.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: appleEase }}
            viewport={{ once: true }}
          >
            It will be built by intelligence.
          </m.span>
        </m.div>

        <m.div
          className="keynote-text-muted"
          style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6, ease: appleEase }}
          viewport={{ once: true }}
        >
          This is where my journey begins.
        </m.div>

        <m.a
          href="/work"
          className="cta-button"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2, ease: appleEase }}
          viewport={{ once: true }}
        >
          Explore My Work
        </m.a>
      </div>

    </div>
  );
}
