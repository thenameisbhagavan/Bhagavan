import React, { useState } from "react";
import { m as Motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import dvLabsHeroImg from "../../assets/dvlabs-hero.jpg";
import dheergayushHeroImg from "../../assets/dheergayush-hero.jpg";
import fakeImg from "../../assets/fake.jpg";
import chatImg from "../../assets/aurabot-new.png";

const PROTOTYPE_BUILDS = [
  {
    id: "01",
    tab: "DV Labs",
    name: "DV Labs Platform",
    domain: "labs.datavalley.ai",
    summary: "Six-stage bilingual AI capstone platform with vision proctoring & 600-item assessment engine.",
    img: dvLabsHeroImg,
    alt: "DV Labs AI Platform Interface",
    route: "/work/dv-labs-platform",
    externalUrl: null,
    specs: [
      { label: "STACK", value: "Next.js · MongoDB" },
      { label: "INTELLIGENCE", value: "Scout AI + Viva" },
      { label: "SCALE", value: "600+ Questions" },
    ],
  },
  {
    id: "02",
    tab: "Dheergayush",
    name: "DHEERGAYUSH Voice AI",
    domain: "dheergayush.com",
    summary: "Real-time Telugu, English & Tanglish 2D clinical doctor avatar with SHA-256 cached TTS & lexical RAG.",
    img: dheergayushHeroImg,
    alt: "Dheergayush Bilingual Voice AI Doctor Avatar",
    route: null,
    externalUrl: "https://dheergayush.com",
    specs: [
      { label: "LANGUAGES", value: "TE · EN · Tanglish" },
      { label: "ENGINE", value: "Lexical RAG + TTS" },
      { label: "CORPUS", value: "70 Records" },
    ],
  },
  {
    id: "03",
    tab: "VERITAS",
    name: "VERITAS Credibility",
    domain: "veritas-thenameisbhagavan.vercel.app",
    summary: "Deterministic NLP claim decomposition attributing weights transparently across linguistic signals.",
    img: fakeImg,
    alt: "VERITAS Explainable Intelligence Engine",
    route: "/work/veritas",
    externalUrl: null,
    specs: [
      { label: "MODEL", value: "TF-IDF + Linear" },
      { label: "BACKEND", value: "FastAPI + Python" },
      { label: "OUTPUT", value: "Token Attribution" },
    ],
  },
  {
    id: "04",
    tab: "AuraOS",
    name: "AuraOS Workspace",
    domain: "aura-os-thenameisbhagavan.vercel.app",
    summary: "Persistent semantic context graph maintaining coherent multi-turn memory across sessions.",
    img: chatImg,
    alt: "AuraOS Spatial AI Memory Workspace",
    route: "/work/auraos",
    externalUrl: null,
    specs: [
      { label: "MEMORY", value: "Context Graph" },
      { label: "INFERENCE", value: "Gemini API + Flask" },
      { label: "STATE", value: "Persistent Threads" },
    ],
  },
];

export function SpatialCoreFallback() {
  return <SpatialArchitectureCore />;
}

export default function SpatialArchitectureCore({ className = "", style = {} }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = PROTOTYPE_BUILDS[activeIdx];

  return (
    <div className={`lab-showcase-console ${className}`} style={style}>
      {/* Apple Segmented Tab Switcher */}
      <div className="lsc-segmented" role="tablist" aria-label="Verified Prototype Showcase">
        {PROTOTYPE_BUILDS.map((item, idx) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={activeIdx === idx}
            className={`lsc-seg-btn ${activeIdx === idx ? "is-active" : ""}`}
            onClick={() => setActiveIdx(idx)}
          >
            {item.tab}
          </button>
        ))}
      </div>

      {/* Browser-Framed Live Interface Preview */}
      <div className="lsc-window">
        <div className="lsc-window-chrome">
          <div className="lsc-traffic-lights" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <span className="lsc-domain">{current.domain}</span>
          <span className="lsc-counter">{current.id} / 04</span>
        </div>

        <div className="lsc-media-frame">
          <AnimatePresence mode="wait">
            <Motion.img
              key={current.id}
              src={current.img}
              alt={current.alt}
              className="lsc-media-img"
              initial={{ opacity: 0.35 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.35 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              loading="eager"
              decoding="async"
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Concise Architectural Summary + 3-Col Spec Row */}
      <div className="lsc-details">
        <div className="lsc-details-head">
          <div>
            <h3 className="lsc-title">{current.name}</h3>
            <p className="lsc-summary">{current.summary}</p>
          </div>
          {current.route ? (
            <Link to={current.route} className="lsc-action-pill">
              <span>Inspect</span>
              <ArrowRight size={13} />
            </Link>
          ) : (
            <a
              href={current.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="lsc-action-pill"
            >
              <span>Launch</span>
              <ArrowUpRight size={13} />
            </a>
          )}
        </div>

        <div className="lsc-specs-row">
          {current.specs.map((spec) => (
            <div key={spec.label} className="lsc-spec-cell">
              <span className="lsc-spec-label">{spec.label}</span>
              <span className="lsc-spec-val">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
