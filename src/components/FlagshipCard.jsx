import React, { useState, useRef, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Sparkles, Eye, Target, Zap, Code2, CheckCircle2 } from "lucide-react";

/* ═══════════════════════════════════════════════════════════════
   THEME TOKENS
═══════════════════════════════════════════════════════════════ */
const T = {
  bg:           '#080808',
  surface:      '#0F0F0F',
  textPri:      '#FFFFFF',
  textSec:      'rgba(255,255,255,0.72)',
  textMuted:    'rgba(255,255,255,0.48)',
  borderSoft:   'rgba(255,255,255,0.07)',
  borderStrong: 'rgba(255,255,255,0.14)',
  accent:       '#FFFFFF',
  fontScript:   "'DM Sans', sans-serif",
  fontMono:     "'DM Mono', monospace",
  ease:         'cubic-bezier(0.16,1,0.3,1)',
};

/* ═══════════════════════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════════════════════ */
function useParallax(offset = 50) {
  const ref = useRef(null);
  const [p, setP] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerY = rect.top + rect.height / 2;
      const viewY = window.innerHeight / 2;
      const diffY = (centerY - viewY) / viewY;
      setP({ x: 0, y: diffY * offset });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);
  return [ref, p];
}

function Counter({ value }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let v = parseInt(value.toString().replace(/[^0-9]/g, '')) || 0;
        if (v === 0) return;
        const dur = 1500, start = Date.now();
        const tick = () => {
          const p = Math.min((Date.now() - start) / dur, 1);
          setCount(Math.floor(v * (1 - Math.pow(1 - p, 4))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [value]);
  return <span ref={ref}>{count}{value.toString().replace(/[0-9]/g, '')}</span>;
}

const Divider = () => (
  <m.div initial={{ scaleX: 0, opacity: 0 }} whileInView={{ scaleX: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.1, ease: [.25, .1, .25, 1] }}
    style={{ height: 1, background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.11) 30%,rgba(255,255,255,0.11) 70%,transparent)', transformOrigin: 'left' }} />
);

const Particles = () => (
  <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
    {Array.from({ length: 14 }, (_, i) => (
      <m.div key={i} style={{ position: 'absolute', width: i % 3 === 0 ? 4 : 2.5, height: i % 3 === 0 ? 4 : 2.5, borderRadius: '50%', background: 'rgba(255,255,255,0.26)', left: `${(i * 7.4 + 4) % 100}%`, top: `${(i * 13.6 + 7) % 100}%` }}
        animate={{ y: [0, -34, 0], x: [0, (i % 2 === 0 ? 9 : -9), 0], opacity: [0, .48, 0], scale: [0, 1, 0] }} transition={{ duration: 3.4 + (i % 4) * .9, repeat: Infinity, delay: (i % 6) * .55, ease: 'easeInOut' }} />
    ))}
  </div>
);

/* ═══════════════════════════════════════════════════════════════
   FLAGSHIP CARD COMPONENT
═══════════════════════════════════════════════════════════════ */
export default function FlagshipCard({ data, index, ctaText = "View Certificate" }) {
  const [tab, setTab] = useState('stack');
  const [imgHov, setImgHov] = useState(false);
  const isEven = index % 2 === 0;
  const [pRef, pOff] = useParallax(28);
  const tabs = ['stack', 'contributions', 'impact'];

  return (
    <>
      <Divider />
      <m.section id={`card-${data.id}`} ref={pRef} initial={{ opacity: 0, y: 55 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-70px' }} transition={{ duration: .75, ease: [.25, .1, .25, 1] }}
        style={{ position: 'relative', padding: '96px 0', overflow: 'hidden' }}>
        <Particles />
        <m.div animate={{ opacity: [.025, .06, .025], scale: [1, 1.07, 1] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: `radial-gradient(ellipse at ${isEven ? '15%' : '85%'} 42%,rgba(255,255,255,0.05) 0%,transparent 52%)`, x: pOff.x * .45, y: pOff.y * .45 }} />
        
        {/* Faded Background Title */}
        <m.div style={{ position: 'absolute', top: '8%', left: isEven ? '2%' : 'auto', right: isEven ? 'auto' : '2%', fontFamily: T.fontScript, fontSize: 'clamp(5rem,13vw,16rem)', fontWeight: 700, color: 'rgba(255,255,255,0.016)', pointerEvents: 'none', userSelect: 'none', lineHeight: 1, x: pOff.x * -.28, y: pOff.y * -.28, whiteSpace: 'nowrap' }}>
          {data.title.split(' ')[0]}
        </m.div>

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(20px, 5vw, 48px)', position: 'relative', zIndex: 1 }}>
          <m.div initial={{ opacity: 0, x: isEven ? -18 : 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .6 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 14px', background: T.surface, border: `1px solid ${T.borderSoft}`, borderRadius: 100, fontFamily: T.fontMono, fontSize: '0.67rem', fontWeight: 700, color: T.textMuted, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 38 }}>
            <span style={{ opacity: .4 }}>—</span><span>0{index + 1}</span><span style={{ opacity: .28 }}>·</span><span>{data.year}</span>
          </m.div>
        </div>

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(20px, 5vw, 48px)', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,400px),1fr))', gap: 68, alignItems: 'start', direction: isEven ? 'ltr' : 'rtl' }}>

            {/* LEFT SIDE: IMAGE / MEDIA */}
            <m.div style={{ direction: 'ltr', position: 'relative' }} initial={{ opacity: 0, x: isEven ? -42 : 42 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .75, delay: .12 }}>
              <m.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '6px 14px', background: T.surface, border: `1px solid ${T.borderStrong}`, borderRadius: 100, fontFamily: T.fontMono, fontSize: '0.68rem', fontWeight: 700, color: T.textSec, letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: 15, boxShadow: '0 4px 16px rgba(0,0,0,.55)' }}>
                <m.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}><Sparkles size={10} color={T.accent} /></m.div>
                <span>{data.type}</span>
              </m.div>

              <m.div onHoverStart={() => setImgHov(true)} onHoverEnd={() => setImgHov(false)} whileHover={{ scale: 1.018, rotateY: 1.8, rotateX: -1 }} transition={{ duration: .42 }} data-cursor-text="VIEW"
                className="cinematic-card"
                style={{ position: 'relative', borderRadius: 22, boxShadow: '0 28px 70px rgba(0,0,0,.75)', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none', background: 'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,0.012) 2px,rgba(255,255,255,0.012) 4px)' }} />
                {imgHov && <m.div initial={{ top: '-2px', opacity: 0 }} animate={{ top: '104%', opacity: [0, .5, .5, 0] }} transition={{ duration: 1.9, ease: 'linear', repeat: Infinity }} style={{ position: 'absolute', left: 0, right: 0, height: 2, zIndex: 4, background: 'linear-gradient(90deg,transparent,rgba(255,255,255,.6),transparent)', pointerEvents: 'none' }} />}
                
                <div style={{ background: '#111', width: '100%', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {data.previewImg ? (
                    <m.img src={data.previewImg} alt={data.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} animate={imgHov ? { scale: 1.07 } : { scale: 1 }} transition={{ duration: .5 }} />
                  ) : (
                    <div style={{ fontFamily: T.fontMono, color: T.textMuted, fontSize: '0.8rem', letterSpacing: '0.1em' }}>{data.title.toUpperCase()}</div>
                  )}
                </div>
                
                <AnimatePresence>
                  {imgHov && <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'absolute', inset: 0, zIndex: 4, background: 'rgba(0,0,0,.62)', backdropFilter: 'blur(5px)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 22 }}>
                    <m.div initial={{ scale: .55, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 240, damping: 18 }}><Eye size={42} color="#fff" /></m.div>
                  </m.div>}
                </AnimatePresence>
              </m.div>

              <m.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: .5 }} style={{ display: 'flex', gap: 14, marginTop: 16, alignItems: 'center', flexWrap: 'wrap' }}>
                {[data.period, data.duration, data.location].filter(Boolean).map((v, i, arr) => (
                  <React.Fragment key={i}>
                    <m.span whileHover={{ color: T.textPri }} style={{ fontFamily: T.fontMono, fontSize: '0.77rem', color: T.textMuted, transition: 'color .2s', cursor: 'none' }}>{v}</m.span>
                    {i < arr.length - 1 && <span style={{ color: 'rgba(255,255,255,.18)', fontSize: '0.7rem' }}>·</span>}
                  </React.Fragment>
                ))}
              </m.div>
            </m.div>

            {/* RIGHT SIDE: CONTENT */}
            <div style={{ direction: 'ltr', display: 'flex', flexDirection: 'column', gap: 32 }}>
              {/* Title Header */}
              <div>
                <m.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .65 }}>
                  <div style={{ position: 'relative', display: 'inline-block', width: 'fit-content' }}>
                    <h2 style={{ fontFamily: T.fontScript, fontWeight: 700, fontSize: 'clamp(2.1rem,3.8vw,3.9rem)', lineHeight: 1.1, color: T.textPri }}>{data.title}</h2>
                    <m.div initial={{ width: 0, opacity: 0 }} whileInView={{ width: '100%', opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.0, delay: .35 }} style={{ position: 'absolute', bottom: -10, left: 0, height: 3, background: T.accent, borderRadius: 2, boxShadow: '0 0 10px rgba(255,255,255,.25)', transformOrigin: 'left' }} />
                  </div>
                </m.div>
                <m.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: .35 }} style={{ marginTop: 22, fontFamily: T.fontScript, fontWeight: 600, fontSize: '1.22rem', color: T.textSec }}>{data.subtitle}</m.p>
                <m.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: .45 }} style={{ marginTop: 8, fontSize: '0.9rem', color: T.textMuted, fontWeight: 500, lineHeight: 1.72 }}>{data.summary}</m.p>
              </div>

              {/* Impact Metrics */}
              {data.impact && data.impact.length > 0 && (
                <m.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .18 }} style={{ display: 'flex', padding: '24px 0', borderTop: `1px solid ${T.borderSoft}`, borderBottom: `1px solid ${T.borderSoft}` }}>
                  {data.impact.map((m, i) => (
                    <m.div key={i} initial={{ opacity: 0, scale: .82 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: .28 + i * .1 }} whileHover={{ y: -5, scale: 1.07 }}
                      style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1, cursor: 'none', borderRight: i < data.impact.length - 1 ? `1px solid ${T.borderSoft}` : 'none', paddingRight: i < data.impact.length - 1 ? 20 : 0, paddingLeft: i > 0 ? 20 : 0 }}>
                      <div style={{ fontFamily: T.fontMono, fontWeight: 900, fontSize: 'clamp(1.9rem,3vw,3.1rem)', lineHeight: 1, color: T.textPri }}>
                        <Counter value={m.metric} />
                      </div>
                      <div style={{ fontFamily: T.fontMono, fontSize: '0.65rem', color: T.textMuted, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>{m.label}</div>
                      <div style={{ fontSize: '0.75rem', color: T.textMuted, lineHeight: 1.5, marginTop: 4 }}>{m.detail}</div>
                    </m.div>
                  ))}
                </m.div>
              )}

              {/* Interactive Tabs */}
              <m.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .4 }} style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
                <div style={{ display: 'flex', gap: 4, padding: 5, background: T.surface, border: `1px solid ${T.borderSoft}`, borderRadius: 14, flexWrap: 'wrap' }}>
                  {tabs.map(t => (
                    <m.button key={t} onClick={() => setTab(t)} whileHover={{ scale: 1.04 }} whileTap={{ scale: .96 }} data-cursor-text={t.slice(0, 4).toUpperCase()}
                      style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 16px', border: 'none', borderRadius: 10, fontFamily: T.fontMono, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', background: tab === t ? T.accent : 'transparent', color: tab === t ? '#000' : T.textMuted, transition: `all .22s ${T.ease}`, cursor: 'none', minHeight: 42, boxShadow: tab === t ? '0 3px 12px rgba(255,255,255,.1)' : 'none' }}>
                      {t === 'stack' && <Code2 size={12} />}
                      {t === 'contributions' && <Target size={12} />}
                      {t === 'impact' && <Zap size={12} />}
                      <span>{t.charAt(0).toUpperCase() + t.slice(1)}</span>
                    </m.button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <m.div key={tab} initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, y: -8, filter: 'blur(3px)' }} transition={{ duration: .28 }}
                    className="cinematic-card apple-magnetic-card"
                    style={{ padding: 24, borderRadius: 16 }}>

                    {tab === 'stack' && data.stack && (
                      <div style={{ display: 'grid', gap: 20 }}>
                        {Object.entries(data.stack).map(([cat, techs], i) => (
                          <m.div key={cat} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * .08 }}>
                            <div style={{ fontFamily: T.fontMono, fontSize: '0.66rem', fontWeight: 700, color: T.textMuted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10 }}>{cat.replace('_', ' ')}</div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                              {(techs || []).map((tech, ti) => (
                                <m.div key={ti} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .14 + ti * .05 }} whileHover={{ scale: 1.12, y: -3, borderColor: T.borderStrong }}
                                  className="liquid-glass"
                                  style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '8px 14px', borderRadius: 9, fontFamily: T.fontMono, fontSize: '0.77rem', color: T.textSec, fontWeight: 600, cursor: 'none', transition: `all .2s ${T.ease}` }}>
                                  <m.div animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2.2, repeat: Infinity, delay: ti * .15 }} style={{ width: 6, height: 6, borderRadius: '50%', background: T.accent, flexShrink: 0 }} />
                                  {tech}
                                </m.div>
                              ))}
                            </div>
                          </m.div>
                        ))}
                      </div>
                    )}

                    {tab === 'contributions' && data.contributions && (
                      <div style={{ display: 'grid', gap: 14 }}>
                        {data.contributions.map((item, i) => (
                          <m.div key={i} initial={{ opacity: 0, x: -11 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * .09 }} whileHover={{ x: 9, borderColor: T.borderStrong }}
                            className="liquid-glass"
                            style={{ display: 'flex', alignItems: 'flex-start', gap: 13, padding: '13px 17px', borderRadius: 11, fontSize: '0.855rem', color: T.textSec, lineHeight: 1.7, fontWeight: 500, transition: `all .22s ${T.ease}`, cursor: 'none' }}>
                            <m.div whileHover={{ rotate: 360 }} transition={{ duration: .45 }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 26, height: 26, flexShrink: 0, borderRadius: 8, background: 'rgba(255,255,255,0.065)', border: `1px solid ${T.borderSoft}` }}>
                              <Target size={12} color={T.accent} />
                            </m.div>
                            {item}
                          </m.div>
                        ))}
                      </div>
                    )}

                    {tab === 'impact' && (
                      <div style={{ display: 'grid', gap: 14 }}>
                        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .15 }} whileHover={{ borderColor: T.borderStrong, scale: 1.01 }}
                          className="liquid-glass"
                          style={{ padding: 20, borderRadius: 14, transition: `all .3s ${T.ease}`, cursor: 'none' }}>
                          <div style={{ fontFamily: T.fontMono, fontSize: '0.65rem', fontWeight: 700, color: T.textMuted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 9 }}>Outcome</div>
                          <div style={{ fontSize: '0.92rem', color: T.textSec, lineHeight: 1.78, fontStyle: 'italic', fontWeight: 500 }}>
                            {data.impactDetail || `Successfully delivered ${data.title} requirements across ${data.duration}.`}
                          </div>
                        </m.div>
                        {data.link && (
                          <div style={{ marginTop: 8 }}>
                            <a href={data.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '12px 24px', borderRadius: 12, background: 'transparent', border: `1.5px solid ${T.borderStrong}`, color: T.textPri, fontFamily: T.fontMono, fontSize: '0.77rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', cursor: 'none', textDecoration: 'none' }}>
                              <CheckCircle2 size={14} /><span>{ctaText}</span>
                            </a>
                          </div>
                        )}
                      </div>
                    )}
                  </m.div>
                </AnimatePresence>
              </m.div>

            </div>
          </div>
        </div>
      </m.section>
    </>
  );
}
