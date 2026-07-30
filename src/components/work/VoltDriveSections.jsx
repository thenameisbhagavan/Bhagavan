import React, { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Layers,
  Zap,
  Shield,
  Smartphone,
  Cpu,
  Monitor,
  Code,
  CheckCircle2,
  ExternalLink,
  Github,
  ArrowRight,
  ArrowUpRight,
  Terminal,
  Gauge,
  Compass
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ─────────────────────────────────────────────
   3. WHY VOLTDRIVE WAS BUILT (Editorial Statement -> Detail)
   ───────────────────────────────────────────── */
export function WhyVoltDriveSection() {
  const reasons = [
    {
      num: "01",
      title: "The Emotional Gap",
      desc: "Physical luxury automotive showrooms evoke craftsmanship and adrenaline, but most vehicle web storefronts present lifeless specification tables. VoltDrive bridges the physical-digital divide with cinematic storytelling."
    },
    {
      num: "02",
      title: "Interactive Mastery",
      desc: "Instead of passive scrolling, users explore an interactive narrative. Real-time visual feedback, vehicle customizers, and fluid transitions make discovering an EV feel intuitive and premium."
    },
    {
      num: "03",
      title: "Production-Grade Engineering",
      desc: "Built to prove that heavy 4K visuals, backdrop blurs, and complex scroll animations can run at a steady 60 FPS across mobile and desktop without layout shifts or performance regressions."
    }
  ];

  return (
    <section id="why-built" className="vd-why-section">
      <div className="vd-bounds">
        <m.span className="vd-eyebrow vd-eyebrow-accent" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          03 / Purpose
        </m.span>
        <m.h2 className="vd-section-title" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          Why VoltDrive Was Built.
        </m.h2>
        <m.p className="vd-editorial-body" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          Automotive engineering has advanced into an era of silent power and intelligent software. VoltDrive was created so the web presentation matches that exact level of sophistication.
        </m.p>

        <m.div className="vd-editorial-list" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}>
          {reasons.map((item, idx) => (
            <m.div key={idx} className="vd-editorial-row" variants={fadeUp}>
              <div className="vd-editorial-num">{item.num}</div>
              <h3 className="vd-editorial-title">{item.title}</h3>
              <p className="vd-editorial-desc">{item.desc}</p>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   4. PREMIUM EXPERIENCE WALKTHROUGH
   ───────────────────────────────────────────── */
export function PremiumExperienceSection({ heroImage }) {
  const [activeTab, setActiveTab] = useState(0);

  const chapters = [
    {
      stepNum: "01",
      title: "Cinematic Discovery",
      desc: "Immersive storytelling greets the user from the very first scroll. Full-viewport visual framing and uncluttered typography place the vehicle center stage.",
      badge: "Hero Storytelling"
    },
    {
      stepNum: "02",
      title: "Fluid Navigation",
      desc: "Every interaction is choreographed using hardware-accelerated Framer Motion springs. Chapter transitions feel effortless, keeping user focus on exploration.",
      badge: "60 FPS Motion"
    },
    {
      stepNum: "03",
      title: "Interactive Configurator",
      desc: "A custom vehicle finish and trim selector built with React state management. Users swap exterior colors with zero-delay visual updates and smooth crossfades.",
      badge: "Real-time UI"
    },
    {
      stepNum: "04",
      title: "Edge-Ready Speed",
      desc: "High-resolution automotive photography is optimized with multi-tier image formats and responsive srcsets, delivering instant loads over Vercel Edge networks.",
      badge: "Zero CLS"
    }
  ];

  return (
    <section id="experience" className="vd-experience-section">
      <div className="vd-bounds">
        <m.span className="vd-eyebrow vd-eyebrow-accent" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          04 / Walkthrough
        </m.span>
        <m.h2 className="vd-section-title" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          The Experience Is The Product.
        </m.h2>
        <m.p className="vd-editorial-body" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          Explore the four core chapters of the VoltDrive digital showroom. Click through each phase to inspect the UX architecture.
        </m.p>

        <div className="vd-tabs-nav">
          {chapters.map((ch, idx) => (
            <button
              key={idx}
              className={`vd-tab-btn ${activeTab === idx ? "active" : ""}`}
              onClick={() => setActiveTab(idx)}
            >
              Chapter {ch.stepNum}: {ch.title}
            </button>
          ))}
        </div>

        <m.div
          className="vd-experience-panel"
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease }}
        >
          <div>
            <span className="vd-exp-step-num">Chapter {chapters[activeTab].stepNum}</span>
            <h3 className="vd-exp-title">{chapters[activeTab].title}</h3>
            <p className="vd-exp-desc">{chapters[activeTab].desc}</p>
            <span className="vd-hero-badge" style={{ margin: 0 }}>
              <Sparkles size={14} /> {chapters[activeTab].badge}
            </span>
          </div>
          <div className="vd-exp-visual">
            <img
              src={heroImage}
              alt={chapters[activeTab].title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: activeTab === 0 ? "none" : activeTab === 1 ? "contrast(1.08) brightness(0.95)" : activeTab === 2 ? "saturate(1.2)" : "brightness(0.9)",
                transition: "filter 0.5s ease"
              }}
            />
          </div>
        </m.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   5. FEATURE HIGHLIGHTS (Apple Vision Bento Grid)
   ───────────────────────────────────────────── */
export function FeatureHighlightsSection() {
  const bentoItems = [
    {
      colClass: "vd-bento-8",
      icon: <Monitor size={22} />,
      title: "Cinematic Hero Storytelling",
      desc: "Full-viewport visual narrative designed with editorial whitespace. Users engage with large-scale automotive photography without UI clutter, replicating a high-end Keynote reveal."
    },
    {
      colClass: "vd-bento-4",
      icon: <Sparkles size={22} />,
      title: "Dynamic Configurator",
      desc: "Interactive finish selector that recalculates visual states instantaneously using React's unidirectional data flow."
    },
    {
      colClass: "vd-bento-4",
      icon: <Gauge size={22} />,
      title: "EV Telemetry UI",
      desc: "Clean data visualizations simulating modern electric cockpit displays, presenting range, acceleration, and charging curves clearly."
    },
    {
      colClass: "vd-bento-8",
      icon: <Smartphone size={22} />,
      title: "Apple-Grade Responsive Reframing",
      desc: "Layouts don't just shrink on mobile—they re-architect themselves. Typography scales via fluid clamps and multi-column grids collapse into seamless thumb-friendly touch targets."
    },
    {
      colClass: "vd-bento-6",
      icon: <Zap size={22} />,
      title: "Hardware-Accelerated Motion",
      desc: "Framer Motion animations are strictly optimized with CSS transform properties and GPU layers to guarantee 60fps scrolling."
    },
    {
      colClass: "vd-bento-6",
      icon: <Shield size={22} />,
      title: "Universal Accessibility",
      desc: "Full HTML5 semantic structure, ARIA roles, and keyboard navigation ensure that luxury design remains inclusive and accessible."
    }
  ];

  return (
    <section id="features" className="vd-features-section">
      <div className="vd-bounds">
        <m.span className="vd-eyebrow vd-eyebrow-accent" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          05 / Features
        </m.span>
        <m.h2 className="vd-section-title" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          Engineered Down To The Subpixel.
        </m.h2>
        <m.p className="vd-editorial-body" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          A bento-grid exploration of the interactive systems and frontend capabilities embedded inside VoltDrive.
        </m.p>

        <m.div className="vd-bento-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}>
          {bentoItems.map((item, idx) => (
            <m.div key={idx} className={`vd-bento-card ${item.colClass}`} variants={fadeUp}>
              <div>
                <div className="vd-bento-icon">{item.icon}</div>
                <h3 className="vd-bento-title">{item.title}</h3>
                <p className="vd-body">{item.desc}</p>
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   6. ENGINEERING ARCHITECTURE (Editorial Blocks)
   ───────────────────────────────────────────── */
export function EngineeringArchitectureSection() {
  const archSteps = [
    {
      step: "01 / ROUTER",
      title: "Route & Shell Controller",
      desc: "React Router 6 manages clean child route transitions (/work/voltdrive) with scroll restoration and lazy-loaded Suspense boundaries."
    },
    {
      step: "02 / MOTION",
      title: "Motion & Parallax Engine",
      desc: "Framer Motion 11 choreographs scroll-linked transforms, viewport triggers, and LayoutGroup animations without layout shifts."
    },
    {
      step: "03 / TOKENS",
      title: "State & Design System",
      desc: "Atomic React components consume design system tokens for consistent HSL color harmony, spacing rhythm, and fluid typography."
    },
    {
      step: "04 / CDN",
      title: "Vercel Edge Delivery",
      desc: "Optimized production bundles served over Vercel Edge global CDN with automatic asset compression and immutable caching."
    }
  ];

  return (
    <section id="architecture" className="vd-architecture-section">
      <div className="vd-bounds">
        <m.span className="vd-eyebrow" style={{ color: "#2997ff" }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          06 / Architecture
        </m.span>
        <m.h2 className="vd-section-title" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          Built For Speed. Designed For Resilience.
        </m.h2>
        <m.p className="vd-editorial-body" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          An overview of the architectural pipeline that powers VoltDrive from initial routing to browser rendering.
        </m.p>

        <m.div className="vd-arch-editorial-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}>
          {archSteps.map((item, idx) => (
            <m.div key={idx} className="vd-arch-editorial-card" variants={fadeUp}>
              <span className="vd-arch-step-num">{item.step}</span>
              <h3 className="vd-arch-title">{item.title}</h3>
              <p className="vd-arch-desc">{item.desc}</p>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   7. TECHNOLOGY STACK (Apple Keynote Specs Presentation)
   ───────────────────────────────────────────── */
export function TechnologyStackSection() {
  const techStack = [
    {
      name: "React 18",
      role: "Core UI component tree, hooks, and unidirectional data flow architecture."
    },
    {
      name: "Vite 5",
      role: "Lightning-fast HMR development server and tree-shaken production bundling."
    },
    {
      name: "Framer Motion",
      role: "Declarative physics springs, gesture recognizers, and scroll choreography."
    },
    {
      name: "Vanilla CSS Tokens",
      role: "Zero-runtime CSS architecture utilizing custom properties and clamp scales."
    },
    {
      name: "Vercel Edge CDN",
      role: "Global edge network deployment with automatic Brotli asset compression."
    }
  ];

  return (
    <section id="tech-stack" className="vd-tech-section">
      <div className="vd-bounds">
        <m.span className="vd-eyebrow vd-eyebrow-accent" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          07 / Stack
        </m.span>
        <m.h2 className="vd-section-title" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          The Modern Frontend Stack.
        </m.h2>
        <m.p className="vd-editorial-body" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          Selected for maximum performance, maintainability, and architectural cleanliness.
        </m.p>

        <m.div className="vd-tech-specs-list" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}>
          {techStack.map((item, idx) => (
            <m.div key={idx} className="vd-tech-spec-row" variants={fadeUp}>
              <div className="vd-tech-spec-name">{item.name}</div>
              <div className="vd-tech-spec-role">{item.role}</div>
              <div style={{ textAlign: "right", color: "#2997ff", fontWeight: 500 }}>
                0{idx + 1}
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   8. DESIGN SYSTEM (Automotive Paint Swatches)
   ───────────────────────────────────────────── */
export function DesignSystemSection() {
  const swatches = [
    { name: "Obsidian Black", hex: "#000000", bg: "#000000", border: true },
    { name: "Space Grey", hex: "#1D1D1F", bg: "#1d1d1f" },
    { name: "Electric Cyan", hex: "#0066CC", bg: "#0066cc" },
    { name: "Titanium White", hex: "#FBFBFD", bg: "#fbfbfd" }
  ];

  return (
    <section id="design-system" className="vd-design-section">
      <div className="vd-bounds">
        <m.span className="vd-eyebrow vd-eyebrow-accent" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          08 / Design Tokens
        </m.span>
        <m.h2 className="vd-section-title" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          Design System & Color Harmony.
        </m.h2>
        <m.p className="vd-editorial-body" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          A curated palette inspired by Apple Human Interface Guidelines and luxury automotive finishes.
        </m.p>

        <m.div className="vd-palette-row" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}>
          {swatches.map((item, idx) => (
            <m.div key={idx} className="vd-swatch-card" variants={fadeUp}>
              <div
                className="vd-swatch-preview"
                style={{
                  backgroundColor: item.bg,
                  borderBottom: item.border ? "1px solid rgba(255,255,255,0.12)" : "none"
                }}
              />
              <div className="vd-swatch-info">
                <div className="vd-swatch-name">{item.name}</div>
                <div className="vd-swatch-hex">{item.hex}</div>
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   9. PERFORMANCE (Keynote Telemetry Numbers)
   ───────────────────────────────────────────── */
export function PerformanceSection() {
  const metrics = [
    { num: "100%", label: "Best Practices", sub: "Lighthouse audit compliance" },
    { num: "100%", label: "SEO Score", sub: "Production-grade metadata" },
    { num: "60 FPS", label: "Animation Rate", sub: "GPU-accelerated transforms" },
    { num: "0.00", label: "Layout Shift", sub: "Zero CLS image placeholders" }
  ];

  return (
    <section id="performance" className="vd-perf-section">
      <div className="vd-bounds">
        <m.span className="vd-eyebrow vd-eyebrow-accent" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          09 / Telemetry
        </m.span>
        <m.h2 className="vd-section-title" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          Uncompromised Performance.
        </m.h2>
        <m.p className="vd-editorial-body" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          Visual luxury means nothing without speed. VoltDrive is engineered to achieve top Lighthouse scores and instantaneous interactivity.
        </m.p>

        <m.div className="vd-perf-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}>
          {metrics.map((item, idx) => (
            <m.div key={idx} className="vd-perf-card" variants={fadeUp}>
              <div className="vd-perf-num">{item.num}</div>
              <div className="vd-perf-label">{item.label}</div>
              <div className="vd-perf-sub">{item.sub}</div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   10. CHALLENGES (Editorial Problem Solving)
   ───────────────────────────────────────────── */
export function ChallengesSection() {
  const challenges = [
    {
      problem: "High-resolution automotive imagery caused Large Contentful Paint (LCP) bottlenecks on slower mobile networks.",
      solution: "Implemented multi-tier image formats, explicit aspect-ratio containers, and deferred non-hero assets to guarantee zero Cumulative Layout Shift."
    },
    {
      problem: "Complex scroll-linked animations and backdrop blurs stuttered on mobile Safari under high memory loads.",
      solution: "Restricted Framer Motion to transform and opacity properties only, disabling CSS blur filters on touch devices."
    },
    {
      problem: "Maintaining strict typography hierarchy across desktop, intermediate tablets, and mobile displays without overflowing.",
      solution: "Architected a fluid CSS clamp() type scale with responsive breakpoint reframing for every component."
    }
  ];

  return (
    <section id="challenges" className="vd-challenges-section">
      <div className="vd-bounds">
        <m.span className="vd-eyebrow vd-eyebrow-accent" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          10 / Problem Solving
        </m.span>
        <m.h2 className="vd-section-title" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          Overcoming The Physics Of The Web.
        </m.h2>
        <m.p className="vd-editorial-body" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          Building a cinematic experience required solving critical tradeoffs between visual fidelity and runtime performance.
        </m.p>

        <m.div className="vd-challenge-list" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}>
          {challenges.map((item, idx) => (
            <m.div key={idx} className="vd-challenge-row" variants={fadeUp}>
              <div className="vd-challenge-left">
                <h4>Challenge 0{idx + 1}</h4>
                <p className="vd-body">{item.problem}</p>
              </div>
              <div className="vd-challenge-right">
                <h4>
                  <CheckCircle2 size={18} color="#2997ff" /> Architectural Solution
                </h4>
                <p className="vd-body">{item.solution}</p>
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   11. GALLERY SHOWCASE (Floating Photography)
   ───────────────────────────────────────────── */
export function GallerySection({ heroImage }) {
  const [activeGalleryTab, setActiveGalleryTab] = useState(0);

  const galleryItems = [
    {
      title: "Exterior Showroom & Silhouette",
      caption: "High-contrast viewport framing highlighting aerodynamic luxury lines.",
      img: heroImage
    },
    {
      title: "Digital Cockpit Experience",
      caption: "Interactive UI elements and telemetry feedback inspired by Apple Keynote layouts.",
      img: heroImage
    },
    {
      title: "Responsive Mobile Reframing",
      caption: "Seamless adaptation across iOS Safari and high-density Retina screens.",
      img: heroImage
    }
  ];

  return (
    <section id="gallery" className="vd-gallery-section">
      <div className="vd-bounds">
        <m.span className="vd-eyebrow vd-eyebrow-accent" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          11 / Gallery
        </m.span>
        <m.h2 className="vd-section-title" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          The VoltDrive Showroom Gallery.
        </m.h2>
        <m.p className="vd-editorial-body" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          A closer look at the visual styling, UI components, and responsive framing of VoltDrive.
        </m.p>

        <div className="vd-tabs-nav">
          {galleryItems.map((item, idx) => (
            <button
              key={idx}
              className={`vd-tab-btn ${activeGalleryTab === idx ? "active" : ""}`}
              onClick={() => setActiveGalleryTab(idx)}
            >
              {item.title}
            </button>
          ))}
        </div>

        <m.div
          className="vd-gallery-showcase"
          key={activeGalleryTab}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease }}
        >
          <img
            src={galleryItems[activeGalleryTab].img}
            alt={galleryItems[activeGalleryTab].title}
            className="vd-gallery-img"
            style={{
              filter: activeGalleryTab === 0 ? "none" : activeGalleryTab === 1 ? "contrast(1.1) brightness(0.92)" : "saturate(1.15)"
            }}
          />
          <div style={{ padding: "24px 32px", background: "#111114", color: "#ffffff", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ fontSize: "17px", fontWeight: 600 }}>{galleryItems[activeGalleryTab].title}</div>
            <div style={{ fontSize: "14px", color: "#86868b", marginTop: "4px" }}>{galleryItems[activeGalleryTab].caption}</div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
