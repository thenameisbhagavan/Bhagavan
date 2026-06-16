import React, { useEffect } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import "../styles/Overview.css";

// Assuming these images exist based on previous iterations
import leetcodeImg from "../assets/profile-leetcode.png";
import githubImg from "../assets/profile-github.png";
import geminiStudentCert from "../assets/cert-gemini-student.png";
import awsCloudCert from "../assets/cert-aws-cloud.png";
import ibmAiCert from "../assets/cert-ibm-ai.png";
import profileHeroImg from "../assets/profile-hero.jpg";

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

export default function Overview() {
  const { scrollY } = useScroll();
  const portraitY = useTransform(scrollY, [0, 800], [0, 120]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="apple-overview">
      {/* ===== HERO ===== */}
      <section className="phi-hero">

        {/* LEFT — CONTENT */}
        <m.div
          className="phi-content"
          initial="hidden"
          animate="visible"
          variants={fadeUpStagger}
        >
          {/* Eyebrow */}
          <m.p className="phi-eyebrow" variants={fadeUp}>
            <span className="phi-eyebrow-dot" />
            Full Stack AI Engineer &amp; Product Builder
          </m.p>

          {/* Headline — the brand statement */}
          <m.h1 className="phi-headline" variants={fadeUp}>
            Engineering<br />Human Potential.
          </m.h1>

          {/* Body — one sentence, clear outcome */}
          <m.p className="phi-body" variants={fadeUp}>
            I design and build AI-powered products, intelligent systems,
            and scalable platforms that turn complex ideas into real-world impact.
          </m.p>

          {/* Signature — philosophical bridge */}
          <m.p className="phi-signature" variants={fadeUp}>
            Building the next generation of opportunity through intelligent systems.
          </m.p>

          {/* Credibility metadata — Apple spec-row style */}
          <m.div className="phi-meta" variants={fadeUp}>
            <span className="phi-meta-primary">CareerOS Creator</span>
            <span className="phi-meta-sep">/</span>
            <span>5+ AI Products Shipped</span>
            <span className="phi-meta-sep">/</span>
            <span>4 Internships</span>
            <span className="phi-meta-sep">/</span>
            <span>AI &amp; Full-Stack Systems</span>
          </m.div>

          {/* CTAs */}
          <m.div className="phi-ctas" variants={fadeUp}>
            <a href="/work" className="phi-cta-fill">View My Work</a>
            <a href="/work" className="phi-cta-ghost">Explore Products &#8250;</a>
            <a href="/experience" className="phi-cta-ghost">My Journey &#8250;</a>
          </m.div>

          {/* Featured builds — below a hairline */}
          <m.div className="phi-products" variants={fadeUp}>
            <span className="phi-products-label">Featured</span>
            {[
              { name: "CareerOS",   desc: "AI Career Intelligence" },
              { name: "AuraBot",    desc: "Conversational AI" },
              { name: "ResumeAI",   desc: "Intelligent Resume" },
              { name: "Smart Leave",desc: "Workflow Automation" },
            ].map((p) => (
              <a key={p.name} href="/work" className="phi-product-chip">
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
          style={{ y: portraitY }}
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
              <span className="phi-card-sep">—</span>
              <span className="phi-card-role">Full Stack AI Engineer &amp; CareerOS Creator</span>
            </m.div>
          </div>
        </m.div>

      </section>

      {/* =========================================
          SECTION 3: CAREEROS
          ========================================= */}
      <section className="careeros-section">
        <div className="careeros-inner">

          {/* Header */}
          <m.div
            className="careeros-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUpStagger}
          >
            <m.p className="careeros-eyebrow" variants={fadeUp}>Flagship Product</m.p>
            <m.h2 className="careeros-headline" variants={fadeUp}>CareerOS.</m.h2>
            <m.p className="careeros-sub" variants={fadeUp}>
              The first intelligence platform built to understand your career,
              not just store your resume.
            </m.p>
          </m.div>

          {/* Feature grid — Apple product feature layout */}
          <m.div
            className="careeros-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUpStagger}
          >
            {[
              { icon: "01", name: "Resume Intelligence", desc: "AI parses, scores, and rebuilds your resume against real job requirements." },
              { icon: "02", name: "Career Intelligence", desc: "Maps your trajectory, identifies skill gaps, and projects your next move." },
              { icon: "03", name: "GitHub Intelligence", desc: "Analyzes your commit history to surface technical strengths automatically." },
              { icon: "04", name: "Recruiter Intelligence", desc: "Understands what hiring managers look for and helps you speak their language." },
              { icon: "05", name: "Interview Intelligence", desc: "Personalized prep based on your target role, company, and skill profile." },
              { icon: "06", name: "AI Assistant", desc: "A conversational layer that guides every decision across your career journey." },
            ].map((feature) => (
              <m.div key={feature.icon} className="careeros-feature" variants={fadeUp}>
                <span className="careeros-feature-num">{feature.icon}</span>
                <h3 className="careeros-feature-name">{feature.name}</h3>
                <p className="careeros-feature-desc">{feature.desc}</p>
              </m.div>
            ))}
          </m.div>

          {/* Bottom CTA */}
          <m.div
            className="careeros-cta-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: appleEase, delay: 0.3 }}
          >
            <a href="/work" className="careeros-cta">Explore CareerOS &#8250;</a>
            <a href="/vision" className="careeros-cta careeros-cta--dim">The Vision &#8250;</a>
          </m.div>

        </div>
      </section>

      {/* =========================================
          SECTION 4: CAPABILITY ARCHITECTURE
          ========================================= */}
      <section className="apple-section">
        <div className="apple-content-bounds">
          <m.h2 className="apple-headline-large" style={{ textAlign: 'center' }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            Capability Architecture.
          </m.h2>
          
          <m.div className="capability-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpStagger}>
            {/* Core Languages */}
            <m.div className="devicon-artifact" variants={fadeUp}><i className="devicon-python-plain"></i></m.div>
            <m.div className="devicon-artifact" variants={fadeUp}><i className="devicon-javascript-plain"></i></m.div>
            
            {/* Full Stack Web */}
            <m.div className="devicon-artifact" variants={fadeUp}><i className="devicon-react-original"></i></m.div>
            <m.div className="devicon-artifact" variants={fadeUp}><i className="devicon-fastapi-plain"></i></m.div>
            <m.div className="devicon-artifact" variants={fadeUp}><i className="devicon-flask-original"></i></m.div>
            
            {/* Database & Cloud */}
            <m.div className="devicon-artifact" variants={fadeUp}><i className="devicon-postgresql-plain"></i></m.div>
            <m.div className="devicon-artifact" variants={fadeUp}><i className="devicon-mongodb-plain"></i></m.div>
            <m.div className="devicon-artifact" variants={fadeUp}><i className="devicon-amazonwebservices-plain-wordmark"></i></m.div>
            
            {/* AI / Machine Learning */}
            <m.div className="devicon-artifact" variants={fadeUp}><i className="devicon-pytorch-original"></i></m.div>
            <m.div className="devicon-artifact" variants={fadeUp}><i className="devicon-tensorflow-original"></i></m.div>
            <m.div className="devicon-artifact" variants={fadeUp}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" alt="Scikit-learn" style={{ width: '1em', height: '1em' }} /></m.div>
            <m.div className="devicon-artifact" variants={fadeUp}><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" alt="Pandas" style={{ width: '1em', height: '1em' }} /></m.div>
          </m.div>
        </div>
      </section>

      {/* =========================================
          NEW SECTION A: ALGORITHMIC DISCIPLINE
          ========================================= */}
      <section className="apple-section split-screen-section">
        <m.div className="split-typography" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpStagger}>
          <m.h2 className="apple-headline-huge" variants={fadeUp}>
            Algorithmic<br/>Discipline.
          </m.h2>
          <m.p className="apple-body-large" style={{ marginTop: '2vh' }} variants={fadeUp}>
            181+ complex systemic issues deconstructed. Training the mind to build elegant logic under constraints.
          </m.p>
        </m.div>
        <m.div className="split-artifact-container" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          <div className="hardware-frame">
            <div className="hardware-screen">
              <a href="https://leetcode.com/u/bhagavan444/" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer', display: 'block' }}>
                <img loading="lazy" src={leetcodeImg} alt="LeetCode Consistency" />
              </a>
            </div>
          </div>
        </m.div>
      </section>

      {/* =========================================
          NEW SECTION B: OPEN SOURCE ECOSYSTEM
          ========================================= */}
      <section className="apple-section" style={{ background: '#fbfbfd' }}>
        <div className="apple-content-bounds">
          <m.div style={{ textAlign: 'center' }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpStagger}>
            <m.h2 className="apple-headline-huge" variants={fadeUp}>
              Building In Public.
            </m.h2>
            <m.p className="apple-body-large" style={{ marginTop: '2vh', maxWidth: '800px', margin: '2vh auto 0' }} variants={fadeUp}>
              The transparent evolution of a systems engineer. Open source contributions, public infrastructure, and continuous iteration.
            </m.p>
          </m.div>
          
          <m.div className="spatial-ui-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <div className="spatial-frame" style={{ position: 'relative', height: '100%' }}>
              <a href="https://github.com/bhagavan444" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer', display: 'block', height: '100%' }}>
                <img loading="lazy" src={githubImg} alt="GitHub Ecosystem" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top left', display: 'block' }} />
                <div style={{ position: 'absolute', bottom: '32px', left: '24px' }}>
                  <button className="li-button" style={{ background: '#2da44e' }}>Follow</button>
                </div>
              </a>
            </div>
            
            {/* High-Fidelity LinkedIn CSS Replica */}
            <div className="spatial-frame" style={{ background: 'transparent', boxShadow: 'none', border: 'none' }}>
              <a href="https://www.linkedin.com/in/gsssbhagavan/" target="_blank" rel="noopener noreferrer" className="linkedin-css-card">
                <div className="li-banner">
                  <div className="li-banner-text">BUILDING THE FUTURE OF CAREER INTELLIGENCE</div>
                </div>
                <div className="li-avatar-wrapper">
                  <div className="li-avatar">
                    <img loading="lazy" src={profileHeroImg} alt="Siva Satya Sai Bhagavan" />
                    <div className="li-badge">#OPENTOWORK</div>
                  </div>
                </div>
                <div className="li-content">
                  <h3 className="li-name">Gopalajosyula Siva Satya Sai Bhagavan <span className="li-verified">✓</span></h3>
                  <div className="li-headline">Full Stack Engineer | MERN Stack & Python | AI-Assisted Web Applications | Intelligent SaaS Systems</div>
                  <div className="li-location">Gudivada, Andhra Pradesh, India · 500+ connections</div>
                  <button className="li-button">Connect</button>
                </div>
              </a>
            </div>
          </m.div>
        </div>
      </section>

      {/* =========================================
          NEW SECTION C: VERIFIED EXPERTISE
          ========================================= */}
      <section className="apple-section apple-section-dark">
        <div className="apple-content-bounds">
          <m.div style={{ textAlign: 'center' }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpStagger}>
            <m.h2 className="apple-headline-huge" variants={fadeUp}>
              Proof Of<br/>Commitment.
            </m.h2>
            <m.p className="apple-body-large" style={{ marginTop: '2vh' }} variants={fadeUp}>
              Verified architectural expertise across Cloud, AI, and Infrastructure.
            </m.p>
          </m.div>

          <m.div className="museum-constellation" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpStagger}>
            <m.div className="museum-artifact" variants={fadeUp}>
              <img loading="lazy" src={geminiStudentCert} alt="Gemini AI Certificate" />
            </m.div>
            <m.div className="museum-artifact" variants={fadeUp}>
              <img loading="lazy" src={awsCloudCert} alt="AWS Cloud Certificate" />
            </m.div>
            <m.div className="museum-artifact" variants={fadeUp}>
              <img loading="lazy" src={ibmAiCert} alt="IBM AI Certificate" />
            </m.div>
          </m.div>
        </div>
      </section>

      {/* =========================================
          SECTION 6: INTELLIGENCE ARCHITECTURE
          ========================================= */}
      <section className="apple-section apple-section-dark">
        <div className="apple-content-bounds">
          <m.h2 className="apple-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            Intelligence Architecture.
          </m.h2>
          
          <m.div style={{ marginTop: '10vh' }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpStagger}>
            
            <m.div className="blueprint-layer" variants={fadeUp}>
              <div className="layer-name">Frontend Layer</div>
              <div className="layer-icons">
                <i className="devicon-react-original"></i>
                <i className="devicon-vite-original"></i>
                <i className="devicon-tailwindcss-original"></i>
              </div>
            </m.div>

            <m.div className="blueprint-layer" variants={fadeUp}>
              <div className="layer-name">Backend Layer</div>
              <div className="layer-icons">
                <i className="devicon-nodejs-plain"></i>
                <i className="devicon-express-original"></i>
                <i className="devicon-fastapi-plain"></i>
              </div>
            </m.div>

            <m.div className="blueprint-layer" variants={fadeUp}>
              <div className="layer-name">Data Layer</div>
              <div className="layer-icons">
                <i className="devicon-mongodb-plain"></i>
                <i className="devicon-postgresql-plain"></i>
              </div>
            </m.div>

            <m.div className="blueprint-layer" variants={fadeUp}>
              <div className="layer-name">AI Layer</div>
              <div className="layer-icons">
                <i className="devicon-tensorflow-original"></i>
                <i className="devicon-python-plain"></i>
              </div>
            </m.div>

            <m.div className="blueprint-layer" variants={fadeUp}>
              <div className="layer-name">Infrastructure Layer</div>
              <div className="layer-icons">
                <i className="devicon-amazonwebservices-plain-wordmark"></i>
                <i className="devicon-docker-plain"></i>
                <i className="devicon-github-original"></i>
              </div>
            </m.div>

          </m.div>
        </div>
      </section>

      {/* =========================================
          SECTION 7: THE JOURNEY
          ========================================= */}
      <section className="apple-section">
        <div className="apple-content-bounds">
          <m.h2 className="apple-headline-huge" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            The Journey.
          </m.h2>

          <m.div className="cinematic-timeline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpStagger}>
            <m.div className="timeline-event" variants={fadeUp}>
              <div className="timeline-year">2023</div>
              <div className="apple-headline-large">Learning.<br/><span className="apple-body-medium">Extracting meaning from massive datasets and building predictive models.</span></div>
            </m.div>

            <m.div className="timeline-event" variants={fadeUp}>
              <div className="timeline-year">2024</div>
              <div className="apple-headline-large">Building.<br/><span className="apple-body-medium">Mastering the full stack to bring intelligent models to the web.</span></div>
            </m.div>

            <m.div className="timeline-event" variants={fadeUp}>
              <div className="timeline-year">2025</div>
              <div className="apple-headline-large">Engineering.<br/><span className="apple-body-medium">Architecting robust systems at scale during industry internships.</span></div>
            </m.div>

            <m.div className="timeline-event" variants={fadeUp}>
              <div className="timeline-year">2026</div>
              <div className="apple-headline-large">CareerOS.<br/><span className="apple-body-medium">Pushing the boundaries of what AI can do for human career trajectory.</span></div>
            </m.div>
          </m.div>
        </div>
      </section>

      {/* =========================================
          SECTION 8: IMPACT
          ========================================= */}
      <section className="apple-section">
        <div className="apple-content-bounds">
          <m.div className="impact-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpStagger}>
            
            <m.div className="impact-stat" variants={fadeUp}>
              <div className="apple-number-mega">4+</div>
              <div className="impact-label">Internships</div>
            </m.div>

            <m.div className="impact-stat" variants={fadeUp}>
              <div className="apple-number-mega">5+</div>
              <div className="impact-label">AI Web Systems</div>
            </m.div>

            <m.div className="impact-stat" variants={fadeUp}>
              <div className="apple-number-mega">180+</div>
              <div className="impact-label">Problems Solved</div>
            </m.div>

            <m.div className="impact-stat" variants={fadeUp}>
              <div className="apple-number-mega">AI</div>
              <div className="impact-label">Systems</div>
            </m.div>

            <m.div className="impact-stat" style={{ gridColumn: '1 / -1' }} variants={fadeUp}>
              <div className="apple-number-mega">Full Stack</div>
              <div className="impact-label">Platforms</div>
            </m.div>

          </m.div>
        </div>
      </section>

      {/* =========================================
          SECTION 9: CURRENTLY BUILDING
          ========================================= */}
      <section className="apple-section apple-section-dark">
        <div className="apple-content-bounds">
          <m.h2 className="apple-headline-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            Currently Building.
          </m.h2>

          <m.div className="roadmap-list" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpStagger}>
            <m.div className="roadmap-item active" variants={fadeUp}>CareerOS Evolution</m.div>
            <m.div className="roadmap-item" variants={fadeUp}>Recruiter Intelligence</m.div>
            <m.div className="roadmap-item" variants={fadeUp}>Multi-Agent Architecture</m.div>
            <m.div className="roadmap-item" variants={fadeUp}>Vector Intelligence</m.div>
            <m.div className="roadmap-item" variants={fadeUp}>Career Graph</m.div>
            <m.div className="roadmap-item" variants={fadeUp}>Interview Arena</m.div>
          </m.div>
        </div>
      </section>

      {/* =========================================
          SECTION 10: VISION
          ========================================= */}
      <section className="vision-finale">
        <div className="apple-content-bounds">
          <m.h2 className="apple-headline-mega" style={{ color: '#fff' }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            The Future Is<br/>Personal Intelligence.
          </m.h2>
          <m.p className="apple-body-large" style={{ marginTop: '4vh', color: '#a1a1a6', maxWidth: '800px', margin: '4vh auto 0' }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            Every individual deserves access to the same intelligence once reserved for institutions.
          </m.p>
        </div>
      </section>

    </div>
  );
}
