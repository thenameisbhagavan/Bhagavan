import React, { useEffect } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowUpRight,
  Github,
  ArrowRight,
  Sparkles,
  ChevronDown
} from "lucide-react";

import SEO from "../../components/SEO";
import BrandSignature from "../../components/BrandSignature";
import voltDriveImg from "../../assets/ev.png";
import {
  WhyVoltDriveSection,
  PremiumExperienceSection,
  FeatureHighlightsSection,
  EngineeringArchitectureSection,
  TechnologyStackSection,
  DesignSystemSection,
  PerformanceSection,
  ChallengesSection,
  GallerySection
} from "../../components/work/VoltDriveSections";

import "../../styles/VoltDrive.css";

const ease = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } }
};

export default function VoltDrive() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Subtle parallax for Hero
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 700], [1, 0.94]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0.15]);

  // Production-grade JSON-LD Structured Data
  const voltdriveSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "VoltDrive",
    "headline": "Luxury Electric Vehicle Digital Experience",
    "description":
      "VoltDrive is an Apple Keynote-inspired luxury automotive web experience engineered by Bhagavan with React, Vite, Framer Motion, and cinematic storytelling.",
    "applicationCategory": "WebApplication",
    "operatingSystem": "All",
    "author": {
      "@type": "Person",
      "name": "Gopala Josyula Siva Satya Sai Bhagavan",
      "url": "https://thenameisbhagavan.vercel.app/"
    },
    "url": "https://thenameisbhagavan.vercel.app/work/voltdrive",
    "sameAs": [
      "https://github.com/thenameisbhagavan/voltdrive",
      "https://voltdrive-showcase.vercel.app/"
    ],
    "image": "https://thenameisbhagavan.vercel.app/assets/ev.png"
  };

  return (
    <>
      <SEO
        title="VoltDrive | Luxury Electric Vehicle Experience — TheNameIsBhagavan"
        description="VoltDrive is a luxury automotive web experience engineered by Bhagavan with React, Vite, Framer Motion, and Apple Keynote-style cinematic storytelling."
        image={voltDriveImg}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(voltdriveSchema)}
        </script>
      </Helmet>

      <div className="vd-page">
        {/* Breadcrumb Header */}
        <div className="vd-bounds">
          <nav className="vd-breadcrumb" aria-label="Breadcrumb">
            <Link to="/work" className="vd-breadcrumb-link">
              Products
            </Link>
            <span className="vd-breadcrumb-sep">/</span>
            <span className="vd-breadcrumb-current">VoltDrive</span>
          </nav>
        </div>

        {/* ─────────────────────────────────────────────
           1. FULL VIEWPORT CINEMATIC HERO
           ───────────────────────────────────────────── */}
        <m.section
          id="hero"
          className="vd-hero-section"
          style={{ scale: heroScale, opacity: heroOpacity }}
        >
          <div className="vd-bounds">
            <div className="vd-hero-header">
              <m.span
                className="vd-hero-badge"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease }}
              >
                <Sparkles size={14} /> PROTOTYPE TO PRODUCTION — VOLTDRIVE
              </m.span>

              <m.h1
                className="vd-display-title"
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.1, ease }}
              >
                Luxury Electric Vehicle Experience.
              </m.h1>

              <m.p
                className="vd-editorial-body"
                style={{ textAlign: "center", margin: "0 auto" }}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease }}
              >
                Where cinematic storytelling meets precision frontend engineering. An immersive digital showroom crafted for the next generation of electric mobility.
              </m.p>

              <m.div
                className="vd-hero-cta-group"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3, ease }}
              >
                <a
                  href="https://voltdrive-showcase.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vd-cta-btn vd-btn-primary"
                  style={{ marginTop: 0 }}
                >
                  Explore Showcase Live <ArrowUpRight size={18} />
                </a>
                <a
                  href="https://github.com/thenameisbhagavan/voltdrive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vd-cta-btn vd-btn-dark"
                  style={{ marginTop: 0 }}
                >
                  <Github size={18} /> Inspect Engineering <ArrowRight size={18} />
                </a>
              </m.div>
            </div>

            <m.div
              className="vd-hero-showcase"
              initial={{ opacity: 0, y: 48, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.35, ease }}
            >
              <div className="vd-hero-img-wrapper">
                <img
                  src={voltDriveImg}
                  alt="VoltDrive - Luxury Electric Vehicle Digital Showroom"
                  className="vd-hero-img"
                />
                <div className="vd-hero-overlay" />
                <div className="vd-hero-caption-bar">
                  <span style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "0.05em" }}>
                    VOLTDRIVE PERFORMANCE SERIES
                  </span>
                  <span style={{ fontSize: "13px", color: "#86868b" }}>
                    Interactive Frontend Showcase • 60 FPS
                  </span>
                </div>
              </div>
            </m.div>

            {/* Apple Scroll Indicator */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <m.a
                href="#philosophy"
                className="vd-scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.75 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#86868b" }}>
                  Scroll to explore
                </span>
                <div className="vd-scroll-pill">
                  <m.div
                    className="vd-scroll-dot"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </m.a>
            </div>
          </div>
        </m.section>

        {/* ─────────────────────────────────────────────
           2. PRODUCT PHILOSOPHY
           ───────────────────────────────────────────── */}
        <section id="philosophy" className="vd-philosophy-section">
          <div className="vd-bounds">
            <div className="vd-quote-box">
              <m.span
                className="vd-eyebrow vd-eyebrow-accent"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
              >
                02 / Philosophy
              </m.span>

              <m.blockquote
                className="vd-keynote-quote"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
              >
                “Great interfaces don’t simply display information—they create emotion.”
              </m.blockquote>

              <m.p
                className="vd-quote-author"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
              >
                APPLE HUMAN INTERFACE DESIGN PRINCIPLES
              </m.p>

              <m.p
                className="vd-editorial-body"
                style={{ margin: "32px auto 0", textAlign: "center" }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
              >
                When users interact with a luxury brand, every scroll should feel like an acceleration. VoltDrive transforms raw specifications into an engaging narrative that honors automotive engineering.
              </m.p>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
           3. WHY VOLTDRIVE WAS BUILT
           ───────────────────────────────────────────── */}
        <WhyVoltDriveSection />

        {/* ─────────────────────────────────────────────
           4. PREMIUM EXPERIENCE
           ───────────────────────────────────────────── */}
        <PremiumExperienceSection heroImage={voltDriveImg} />

        {/* ─────────────────────────────────────────────
           5. FEATURE HIGHLIGHTS
           ───────────────────────────────────────────── */}
        <FeatureHighlightsSection />

        {/* ─────────────────────────────────────────────
           6. ENGINEERING ARCHITECTURE
           ───────────────────────────────────────────── */}
        <EngineeringArchitectureSection />

        {/* ─────────────────────────────────────────────
           7. TECHNOLOGY STACK
           ───────────────────────────────────────────── */}
        <TechnologyStackSection />

        {/* ─────────────────────────────────────────────
           8. DESIGN SYSTEM
           ───────────────────────────────────────────── */}
        <DesignSystemSection />

        {/* ─────────────────────────────────────────────
           9. PERFORMANCE
           ───────────────────────────────────────────── */}
        <PerformanceSection />

        {/* ─────────────────────────────────────────────
           10. CHALLENGES
           ───────────────────────────────────────────── */}
        <ChallengesSection />

        {/* ─────────────────────────────────────────────
           11. GALLERY
           ───────────────────────────────────────────── */}
        <GallerySection heroImage={voltDriveImg} />

        {/* ─────────────────────────────────────────────
           12. LIVE WEBSITE CTA
           ───────────────────────────────────────────── */}
        <section id="live-cta" className="vd-cta-section">
          <div className="vd-bounds">
            <m.div
              className="vd-cta-banner vd-banner-live"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <span className="vd-eyebrow" style={{ color: "#2997ff" }}>
                12 / Live Experience
              </span>
              <h2 className="vd-section-title" style={{ color: "#ffffff", marginTop: "8px" }}>
                Step Into The Digital Showroom.
              </h2>
              <p
                className="vd-editorial-body"
                style={{ color: "#a1a1a6", margin: "16px auto 0", textAlign: "center" }}
              >
                Explore the production-deployed interactive VoltDrive showcase. Experience the Framer Motion choreography and responsive architecture live.
              </p>
              <a
                href="https://voltdrive-showcase.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="vd-cta-btn vd-btn-primary"
              >
                Explore VoltDrive Live <ArrowUpRight size={18} />
              </a>
            </m.div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
           13. GITHUB CTA
           ───────────────────────────────────────────── */}
        <section id="github-cta" className="vd-cta-section" style={{ paddingTop: 0 }}>
          <div className="vd-bounds">
            <m.div
              className="vd-cta-banner vd-banner-github"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <span className="vd-eyebrow vd-eyebrow-accent">13 / Open Source</span>
              <h2 className="vd-section-title" style={{ marginTop: "8px" }}>
                Inspect The Engineering.
              </h2>
              <p
                className="vd-editorial-body"
                style={{ margin: "16px auto 0", textAlign: "center" }}
              >
                Review the complete React codebase, component architecture, modern design system tokens, and motion configurations on GitHub.
              </p>
              <a
                href="https://github.com/thenameisbhagavan/voltdrive"
                target="_blank"
                rel="noopener noreferrer"
                className="vd-cta-btn vd-btn-dark"
              >
                <Github size={18} /> View Source Code <ArrowUpRight size={18} />
              </a>
            </m.div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────
           14. NEXT PROJECT CTA
           ───────────────────────────────────────────── */}
        <section id="next-project" className="vd-cta-section" style={{ paddingBottom: "120px" }}>
          <div className="vd-bounds">
            <m.div
              className="vd-cta-banner vd-banner-next"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <span className="vd-eyebrow">14 / Portfolio Continuity</span>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "#86868b", marginTop: "8px" }}>
                NEXT IN PRODUCTS
              </div>
              <h2
                className="vd-section-title"
                style={{ fontSize: "clamp(36px, 5.5vw, 64px)", margin: "12px 0 16px" }}
              >
                AuraOS
              </h2>
              <p
                className="vd-editorial-body"
                style={{ margin: "0 auto", textAlign: "center" }}
              >
                Personal Intelligence OS. A conversational AI layer that learns, remembers, and grows alongside you across persistent sessions.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  marginTop: "8px"
                }}
              >
                <Link to="/work" className="vd-cta-btn vd-btn-primary">
                  Explore AuraOS in Products <ArrowRight size={18} />
                </Link>
                <Link to="/work" className="vd-cta-btn vd-btn-outline">
                  ← Back to All Products
                </Link>
              </div>
            </m.div>
          </div>
        </section>

        {/* Brand Signature at Footer */}
        <BrandSignature />
      </div>
    </>
  );
}
