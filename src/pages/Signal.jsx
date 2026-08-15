import React, { useState, useEffect } from "react";
import { m, AnimatePresence, useReducedMotion } from "framer-motion";
import SEO from "../components/SEO";
import { ArrowUpRight } from "lucide-react";
import { socialLinks } from "../constants/socialLinks";
import {
  signalHero,
  currentState,
  currentObsession,
  signalStream,
  workingStack,
  references,
  publicOutput,
  nowNext
} from "../data/signalData";
import "../styles/Signal.css";

// ─────────────────────────────────────────────
// CHOREOGRAPHY VARIANTS (Cinematic Editorial)
// ─────────────────────────────────────────────
const easeEditorial = [0.16, 1, 0.3, 1]; // "appleEase" for UI fluidity

const fadeUpStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, ease: easeEditorial }
  }
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: easeEditorial } 
  }
};

const ruleDraw = {
  hidden: { scaleX: 0, transformOrigin: "left" },
  visible: { 
    scaleX: 1, 
    transition: { duration: 1.2, ease: easeEditorial } 
  }
};

const pulseAnim = {
  idle: { opacity: 0.3 },
  active: { opacity: [0.3, 1, 0.3], transition: { repeat: Infinity, duration: 3, ease: "easeInOut" } }
};

// ─────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────

const LiveIndex = () => {
  return (
    <m.nav className="live-index" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, duration: 1 }}>
      <div className="li-pulse-container">
        <m.div className="li-pulse" variants={pulseAnim} initial="idle" animate="active" />
        <span className="li-status">ACTIVE ARCHIVE</span>
      </div>
      <ul className="li-list">
        <li><a href="#open">01 / OPEN</a></li>
        <li><a href="#state">02 / STATE</a></li>
        <li><a href="#stream">03 / STREAM</a></li>
        <li><a href="#stack">04 / STACK</a></li>
        <li><a href="#obsession">05 / OBSESSION</a></li>
        <li><a href="#refs">06 / REFERENCES</a></li>
        <li><a href="#output">07 / OUTPUT</a></li>
        <li><a href="#next">08 / NEXT</a></li>
      </ul>
    </m.nav>
  );
};

const MobileIndex = () => {
  return (
    <nav className="mobile-index">
      <ul>
        <li><a href="#open">OPEN</a></li>
        <li><a href="#stream">SIGNALS</a></li>
        <li><a href="#stack">DESK</a></li>
        <li><a href="#next">NEXT</a></li>
      </ul>
    </nav>
  );
};

const SignalItem = ({ item, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const toggle = () => setIsExpanded(!isExpanded);

  return (
    <m.div 
      className="ss-item" 
      onClick={toggle}
      onKeyDown={(e) => { 
        if (e.key === 'Enter' || e.key === ' ') { 
          e.preventDefault(); 
          toggle(); 
        } 
        if (e.key === 'Escape' && isExpanded) {
          setIsExpanded(false);
        }
      }}
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
      aria-controls={`signal-content-${item.id}`}
      variants={fadeUpItem}
      layout={!shouldReduceMotion}
    >
      <m.div className="ss-collapsed" layout={!shouldReduceMotion}>
        <span className="ss-id">{item.id}</span>
        <span className="ss-type">{item.type}</span>
        <h3 className="ss-title">{item.title}</h3>
        <span className="ss-date">{item.date}</span>
      </m.div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <m.div
            id={`signal-content-${item.id}`}
            className="ss-expanded"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: easeEditorial }}
          >
            <div className="ss-expanded-inner">
              <div className="ss-obs-col">
                <span className="ss-meta-tag">OBSERVATION</span>
                <p className="ss-obs-text">{item.observation}</p>
              </div>
              <div className="ss-why-col">
                <span className="ss-meta-tag">WHY IT MATTERS</span>
                <p className="ss-why-text">{item.whyItMatters}</p>
                <div className="ss-meta-row">
                  <span className="ss-status" data-status={item.status}>{item.status}</span>
                  <span className="ss-related">REF: {item.relatedProject}</span>
                </div>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </m.div>
  );
};

// ─────────────────────────────────────────────
// MAIN PAGE COMPONENT
// ─────────────────────────────────────────────
export default function Signal() {
  return (
    <div className="signal-page" data-nav-theme="light">
      <SEO 
        title="TheNameIsBhagavan — Signal"
        description="A living record of the tools, ideas, experiments, references, and engineering thinking shaping TheNameIsBhagavan."
      />

      <LiveIndex />
      <MobileIndex />

      <main className="signal-main">
        {/* 01. OPENING */}
        <section id="open" className="s-section s-hero">
          <m.div className="sh-wrapper" initial="hidden" animate="visible" variants={fadeUpStagger}>
            <m.div className="sh-meta" variants={fadeUpItem}>
              <span>SIGNAL</span>
              <span>THE NAME IS BHAGAVAN / 2026</span>
            </m.div>
            
            <m.div className="sh-rule" variants={ruleDraw} />
            
            <div className="sh-content">
              <m.h1 className="sh-headline" variants={fadeUpItem}>
                {signalHero.headline.split('\n').map((line, i) => (
                  <span key={i} className="sh-line">{line}</span>
                ))}
              </m.h1>
              <m.div className="sh-sub" variants={fadeUpItem}>
                <p className="sh-sub-tools">Tools. Questions. Experiments. References. Decisions.</p>
                <p className="sh-sub-thesis">Not everything I notice becomes a project.<br/>Some things simply change the way I build.</p>
              </m.div>
            </div>
          </m.div>
        </section>

        {/* 02. CURRENT STATE */}
        <section id="state" className="s-section s-state">
          <m.div className="sc-wrapper" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-15%" }} variants={fadeUpStagger}>
            <m.h2 className="section-micro-title" variants={fadeUpItem}>CURRENT</m.h2>
            
            <div className="sc-layout">
              {Object.entries(currentState).map(([key, items]) => {
                const isDominant = key === 'THINKING_ABOUT';
                return (
                  <m.div key={key} className={`sc-block ${isDominant ? 'sc-dominant' : ''}`} variants={fadeUpItem}>
                    <span className="sc-label">{key.replace('_', ' ')}</span>
                    <div className="sc-items">
                      {items.map((item, i) => (
                        <span key={i} className={`sc-item ${isDominant ? 'sc-item-massive' : ''}`}>{item}</span>
                      ))}
                    </div>
                  </m.div>
                );
              })}
            </div>
          </m.div>
        </section>

        {/* 03. THE SIGNAL STREAM */}
        <section id="stream" className="s-section s-stream">
          <m.div className="ss-wrapper" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-15%" }} variants={fadeUpStagger}>
            <m.h2 className="section-micro-title" variants={fadeUpItem}>SIGNAL ARCHIVE</m.h2>
            <m.div className="ss-rule-top" variants={ruleDraw} />
            
            <div className="ss-list">
              {signalStream.map((item, index) => (
                <SignalItem key={item.id} item={item} index={index} />
              ))}
            </div>
          </m.div>
        </section>

        {/* 04. THE WORKING STACK (DESK) */}
        <section id="stack" className="s-section s-stack">
          <m.div className="st-wrapper" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-15%" }} variants={fadeUpStagger}>
            <m.h2 className="section-micro-title" variants={fadeUpItem}>WORKING STACK</m.h2>
            
            <div className="st-layout">
              {workingStack.map((group, i) => (
                <m.div key={i} className="st-col" variants={fadeUpItem}>
                  <span className="st-cat">{group.category}</span>
                  <div className="st-items">
                    {group.items.map((item, j) => (
                      <div key={j} className="st-item">
                        <span className="st-name">{item.name}</span>
                        <p className="st-why">{item.why}</p>
                      </div>
                    ))}
                  </div>
                </m.div>
              ))}
            </div>
          </m.div>
        </section>

        {/* 05. CURRENT OBSESSION */}
        <section id="obsession" className="s-section s-obsession">
          <m.div className="so-wrapper" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-20%" }} variants={fadeUpStagger}>
            <m.span className="section-micro-title so-label" variants={fadeUpItem}>CURRENT OBSESSION</m.span>
            <m.h2 className="so-topic" variants={fadeUpItem}>{currentObsession.topic}</m.h2>
            <m.div className="so-content" variants={fadeUpItem}>
              <p className="so-obs">{currentObsession.observation}</p>
              <span className="so-meta">{currentObsession.meta}</span>
            </m.div>
          </m.div>
        </section>

        {/* 06. REFERENCES */}
        <section id="refs" className="s-section s-refs">
          <m.div className="sr-wrapper" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-15%" }} variants={fadeUpStagger}>
            <m.h2 className="section-micro-title sr-title-side" variants={fadeUpItem}>REFERENCES</m.h2>
            <div className="sr-list">
              {references.map((ref, i) => (
                <m.div key={i} className="sr-item" variants={fadeUpItem}>
                  <div className="sr-ref-num">REF. 0{i + 1}</div>
                  <div className="sr-body">
                    <h3 className="sr-name">{ref.name}</h3>
                    <span className="sr-cat">{ref.category}</span>
                    <p className="sr-why">{ref.why}</p>
                  </div>
                </m.div>
              ))}
            </div>
          </m.div>
        </section>

        {/* 07. WHAT LEAVES THE DESK */}
        <section id="output" className="s-section s-output">
          <m.div className="so-wrapper" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-15%" }} variants={fadeUpStagger}>
            <m.h2 className="section-micro-title" variants={fadeUpItem}>PUBLIC OUTPUT</m.h2>
            
            <div className="so-layout">
              <m.div className="so-heading-col" variants={fadeUpItem}>
                <h2>WHAT LEAVES<br/>THE DESK.</h2>
              </m.div>
              <div className="so-links-col">
                {publicOutput.map((item, i) => {
                  const link = socialLinks[item.key];
                  if (!link) return null;
                  return (
                    <m.a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="so-link"
                      variants={fadeUpItem}
                    >
                      <span className="so-action">{item.action}</span>
                      <ArrowUpRight size={16} className="so-arrow" />
                      <span className="so-platform">{item.platform}</span>
                    </m.a>
                  );
                })}
              </div>
            </div>
          </m.div>
        </section>

        {/* 08. NOW / NEXT */}
        <section id="next" className="s-section s-now-next">
          <m.div className="nn-wrapper" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-15%" }} variants={fadeUpStagger}>
            <div className="nn-layout">
              <m.div className="nn-col nn-now" variants={fadeUpItem}>
                <span className="nn-label">NOW</span>
                <div className="nn-list">
                  {nowNext.now.map((item, i) => <span key={i} className="nn-item">{item}</span>)}
                </div>
              </m.div>
              <m.div className="nn-col nn-next" variants={fadeUpItem}>
                <span className="nn-label">NEXT</span>
                <div className="nn-list">
                  {nowNext.next.map((item, i) => <span key={i} className="nn-item">{item}</span>)}
                </div>
              </m.div>
            </div>
          </m.div>
        </section>

        {/* 09. FINAL THESIS */}
        <section className="s-section s-thesis">
          <m.div className="st-wrapper" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-20%" }} variants={fadeUpStagger}>
            <m.h2 className="st-text" variants={fadeUpItem}>
              <span className="st-line">NOT EVERYTHING</span>
              <span className="st-line">BECOMES A PROJECT.</span>
              <span className="st-spacer"></span>
              <span className="st-line">SOME THINGS</span>
              <span className="st-line">CHANGE THE WAY</span>
              <span className="st-line">I BUILD.</span>
            </m.h2>
            <m.div className="st-signature" variants={fadeUpItem}>
              <span className="st-name">TheNameIsBhagavan</span>
              <span className="st-tag">AI SYSTEMS · PRODUCT ENGINEERING</span>
            </m.div>
          </m.div>
        </section>
      </main>
    </div>
  );
}
