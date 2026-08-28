import React, { useState, useEffect } from "react";
import { m } from "framer-motion";
import { ArrowRight, Download, GithubIcon, Linkedin, Mail, Shield, Zap, Server, Database, Cpu, Brain } from "lucide-react";

/* ── HERO CSS ── */
const HERO_CSS = `
@keyframes heroOrbit1{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes heroOrbit2{from{transform:rotate(0deg)}to{transform:rotate(-360deg)}}
@keyframes heroOrbit3{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
@keyframes heroScan{0%{top:-2px;opacity:0}10%{opacity:.6}90%{opacity:.6}100%{top:calc(100% + 2px);opacity:0}}
@keyframes heroWave{0%,100%{height:6px}25%{height:18px}50%{height:5px}75%{height:14px}}
@keyframes heroParticle{0%{transform:translateY(0) translateX(0);opacity:0}20%{opacity:.5}80%{opacity:.5}100%{transform:translateY(-100px) translateX(20px);opacity:0}}
@keyframes heroPulse{0%,100%{box-shadow:0 0 0 0 rgba(74,222,128,.35)}50%{box-shadow:0 0 0 4px rgba(74,222,128,0)}}
@keyframes heroGlow{0%,100%{opacity:.25;filter:blur(25px)}50%{opacity:.45;filter:blur(35px)}}
@keyframes heroFeedSlide{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
@keyframes heroTypeCursor{0%,100%{border-color:rgba(74,222,128,.8)}50%{border-color:transparent}}
@keyframes heroPillOrbit{from{transform:rotate(var(--sa)) translateX(var(--or)) rotate(calc(-1 * var(--sa)))}to{transform:rotate(calc(var(--sa) + 360deg)) translateX(var(--or)) rotate(calc(-1 * (var(--sa) + 360deg)))}}
@keyframes heroRingPulse{0%,100%{opacity:.12;transform:scale(1)}50%{opacity:.22;transform:scale(1.015)}}
`;

/* ── TYPEWRITER ── */
function HeroTypewriter({ roles }) {
  const [idx, setIdx] = useState(0);
  const [txt, setTxt] = useState('');
  const [del, setDel] = useState(false);
  const [ch, setCh] = useState(0);
  useEffect(() => {
    const cur = roles[idx]; let t;
    if (!del) {
      if (ch < cur.length) t = setTimeout(() => { setTxt(cur.slice(0, ch + 1)); setCh(c => c + 1); }, 55);
      else t = setTimeout(() => setDel(true), 2200);
    } else {
      if (ch > 0) t = setTimeout(() => { setTxt(cur.slice(0, ch - 1)); setCh(c => c - 1); }, 25);
      else { setDel(false); setIdx(i => (i + 1) % roles.length); }
    }
    return () => clearTimeout(t);
  }, [ch, del, idx, roles]);
  return (
    <span style={{ color: 'rgba(74,222,128,0.85)', fontFamily: "'Inter',monospace", fontWeight: 500 }}>
      {txt}<span style={{ borderRight: '2px solid rgba(74,222,128,.8)', marginLeft: '2px', animation: 'heroTypeCursor .85s step-end infinite' }}>&nbsp;</span>
    </span>
  );
}

/* ── ACTIVITY FEED ── */
function ActivityFeed() {
  const msgs = [
    '✓ API Deployment Successful',
    '⚡ Inference Pipeline Active',
    '🔒 Authentication Verified',
    '📡 Model Endpoint Live',
    '✓ CI/CD Pipeline Passed',
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => { const t = setInterval(() => setIdx(i => (i + 1) % msgs.length), 3200); return () => clearInterval(t); }, []);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', padding: '.4rem .8rem', borderRadius: '8px', background: 'rgba(74,222,128,0.03)', border: '1px solid rgba(74,222,128,0.08)', backdropFilter: 'blur(8px)', maxWidth: '100%' }}>
      <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(74,222,128,.7)', flexShrink: 0, animation: 'heroPulse 2s ease infinite' }} />
      <span key={idx} style={{ fontSize: '.62rem', color: 'rgba(74,222,128,.6)', fontFamily: 'monospace', letterSpacing: '.04em', animation: 'heroFeedSlide .4s ease both', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{msgs[idx]}</span>
    </div>
  );
}

/* ── ORBITING PILLS ── */
const ORBIT_PILLS = ['Python', 'Java', 'React.js', 'Node.js', 'Flask', 'TensorFlow', 'MongoDB', 'REST APIs', 'JWT', 'AI APIs', 'Power Apps'];

function OrbitingPills({ size, isMobile }) {
  if (isMobile) return null;
  const radius = size * 0.62;
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      {ORBIT_PILLS.map((pill, i) => {
        const angle = (360 / ORBIT_PILLS.length) * i;
        const dur = 55 + i * 5;
        return (
          <div key={i} style={{ position: 'absolute', top: '50%', left: '50%', width: 0, height: 0, '--sa': `${angle}deg`, '--or': `${radius}px`, animation: `heroPillOrbit ${dur}s linear infinite` }}>
            <div style={{ position: 'absolute', transform: 'translate(-50%,-50%)', padding: '.22rem .6rem', borderRadius: '20px', background: 'rgba(0,0,0,.55)', border: '1px solid rgba(74,222,128,.12)', backdropFilter: 'blur(8px)', fontSize: '.58rem', color: 'rgba(74,222,128,.6)', fontFamily: 'monospace', letterSpacing: '.03em', whiteSpace: 'nowrap', pointerEvents: 'auto', transition: 'all .25s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(74,222,128,.4)'; e.currentTarget.style.color = 'rgba(74,222,128,.9)'; e.currentTarget.style.background = 'rgba(74,222,128,.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(74,222,128,.12)'; e.currentTarget.style.color = 'rgba(74,222,128,.6)'; e.currentTarget.style.background = 'rgba(0,0,0,.55)'; }}>
              {pill}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ── SYSTEMS STATUS PANEL ── */
function SystemsStatus({ isMobile }) {
  const items = [
    { label: 'AI Systems', status: 'Online' },
    { label: 'API Network', status: 'Active' },
    { label: 'JWT Security', status: 'Enabled' },
    { label: 'Deployments', status: 'Stable' },
  ];
  return (
    <div style={{ padding: '.7rem .85rem', borderRadius: '14px', background: 'rgba(255,255,255,.02)', border: '1px solid rgba(255,255,255,.06)', backdropFilter: 'blur(12px)', width: isMobile ? '100%' : '220px' }}>
      <div style={{ fontSize: '.52rem', color: 'rgba(255,255,255,.25)', fontFamily: 'monospace', letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: '.55rem', display: 'flex', alignItems: 'center', gap: '.4rem' }}>
        <Server size={9} strokeWidth={2} style={{ opacity: .5 }} /> Systems Status
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '.35rem' }}>
        {items.map((it, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.35rem' }}>
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(74,222,128,.7)', animation: 'heroPulse 2.5s ease infinite', animationDelay: `${i * 0.4}s` }} />
              <span style={{ fontSize: '.62rem', color: 'rgba(255,255,255,.45)', fontFamily: 'monospace' }}>{it.label}</span>
            </div>
            <span style={{ fontSize: '.56rem', color: 'rgba(74,222,128,.6)', fontFamily: 'monospace', letterSpacing: '.04em' }}>{it.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── METRIC CARDS ── */
const METRICS = [
  { value: '4', label: 'Internships' },
  { value: '6+', label: 'Systems Built' },
  { value: 'AI+FS', label: 'Full Stack' },
  { value: '40%', label: 'Perf. Optimized' },
];

/* ══════════════════════════════════════════
   HERO SECTION EXPORT
══════════════════════════════════════════ */
export default function HeroSection({ profileImg, resumePdf, navigate, isMobile, PROFILE }) {
  const imgSize = isMobile ? 160 : 300;
  const orbitPadding = isMobile ? 60 : 120;
  const roles = ['AI Engineer', 'Full Stack Developer', 'Backend Systems Developer', 'Python & Java Developer', 'AI Integration Engineer'];
  const ease = [.16, 1, .3, 1];

  return (
    <>
      <style>{HERO_CSS}</style>
      <div style={{ position: 'relative', zIndex: 10, minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>

        {/* ── HERO GRID ── */}
        <div style={{ position: 'relative', zIndex: 20, width: '100%', maxWidth: '1140px', margin: '0 auto', padding: isMobile ? '5rem 1.2rem 2.5rem' : '6rem 2rem 4rem', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 380px', gap: isMobile ? '2rem' : '4rem', alignItems: 'center' }}>

          {/* ══ LEFT COLUMN ══ */}
          <div>
            {/* Availability signal */}
            <m.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, ease, delay: .15 }} style={{ marginBottom: '1.4rem', display: 'flex', alignItems: 'center', gap: '.55rem' }}>
              <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'rgba(74,222,128,.8)', animation: 'heroPulse 2s ease infinite', flexShrink: 0 }} />
              <span style={{ fontSize: '.64rem', color: 'rgba(74,222,128,.6)', letterSpacing: '.06em', fontFamily: 'monospace' }}>Technical AI/ML & Data Science Trainer at Data Valley · Building AI Systems</span>
            </m.div>

            {/* Tagline */}
            <m.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, ease, delay: .3 }} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '.6rem' }}>
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(255,255,255,.7)' }} />
              <span style={{ fontSize: '.62rem', color: 'rgba(255,255,255,.4)', letterSpacing: '.14em', textTransform: 'uppercase', fontFamily: 'monospace' }}>AI Product Engineer · Data Science · Machine Learning</span>
            </m.div>

            {/* Headline */}
            <m.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease, delay: .4 }} style={{ fontSize: isMobile ? 'clamp(1.8rem,8vw,2.4rem)' : 'clamp(3.2rem,4.2vw,4.6rem)', fontWeight: 400, lineHeight: 1.08, letterSpacing: '-.04em', color: '#fff', marginBottom: isMobile ? '1rem' : '1.2rem', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              Engineering{' '}<br />
              <span className="serif-i" style={{ color: 'rgba(255,255,255,.88)', display: 'inline-block', transform: 'translateX(2px)' }}>Intelligent Systems.</span>
            </m.h1>

            {/* Typewriter */}
            <m.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, ease, delay: .65 }} style={{ fontSize: isMobile ? '.85rem' : '.92rem', marginBottom: '1rem', fontWeight: 300, minHeight: isMobile ? '2.4rem' : '1.5rem', display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap', lineHeight: 1.4 }}>
              <HeroTypewriter roles={roles} />
            </m.div>

            {/* Value statement */}
            <m.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, ease, delay: .8 }} style={{ fontSize: isMobile ? '.82rem' : '.88rem', lineHeight: 1.65, color: 'rgba(255,255,255,.48)', maxWidth: '480px', marginBottom: isMobile ? '1.5rem' : '2rem', fontWeight: 300, letterSpacing: '-.01em' }}>
              Building AI-powered applications and scalable backend systems — from REST APIs and enterprise workflow automation to production-ready software with end-to-end engineering discipline.
            </m.p>

            {/* Metric cards */}
            <m.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, ease, delay: .9 }} style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: isMobile ? '.5rem' : '.65rem', marginBottom: isMobile ? '1.5rem' : '2rem', maxWidth: '520px' }}>
              {METRICS.map((m, i) => (
                <div key={i} style={{ padding: '.75rem .7rem', borderRadius: '12px', background: 'rgba(255,255,255,.02)', border: '1px solid rgba(255,255,255,.06)', backdropFilter: 'blur(8px)', textAlign: 'center', transition: 'all .3s cubic-bezier(.16,1,.3,1)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(74,222,128,.25)'; e.currentTarget.style.background = 'rgba(74,222,128,.04)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.06)'; e.currentTarget.style.background = 'rgba(255,255,255,.02)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                  <div style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 300, fontFamily: "'Source Serif 4',Georgia,serif", fontStyle: 'italic', lineHeight: 1 }}>{m.value}</div>
                  <div style={{ fontSize: '.56rem', color: 'rgba(255,255,255,.35)', fontFamily: 'monospace', textTransform: 'uppercase', marginTop: '.3rem', letterSpacing: '.05em' }}>{m.label}</div>
                </div>
              ))}
            </m.div>

            {/* CTAs */}
            <m.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, ease, delay: 1 }} style={{ display: 'flex', gap: '.85rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '1.8rem' }}>
              <button onClick={() => navigate('/projects')} style={{ display: 'inline-flex', alignItems: 'center', gap: '.45rem', padding: '.72rem 1.5rem', borderRadius: '100px', background: '#fff', color: '#000', fontSize: '.82rem', fontWeight: 500, fontFamily: 'Inter,sans-serif', cursor: 'pointer', border: 'none', transition: 'all .25s cubic-bezier(.16,1,.3,1)' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,255,255,.15)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                Explore Projects <ArrowRight size={14} strokeWidth={1.8} />
              </button>
              <a href={resumePdf} download style={{ display: 'inline-flex', alignItems: 'center', gap: '.45rem', padding: '.72rem 1.5rem', borderRadius: '100px', border: '1px solid rgba(255,255,255,.1)', background: 'rgba(255,255,255,.02)', backdropFilter: 'blur(10px)', color: 'rgba(255,255,255,.65)', fontSize: '.82rem', textDecoration: 'none', fontFamily: 'Inter,sans-serif', transition: 'all .25s cubic-bezier(.16,1,.3,1)' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.25)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,.65)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <Download size={13} strokeWidth={1.8} /> Resume ↗
              </a>
            </m.div>

            {/* Social links */}
            <m.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, ease, delay: 1.1 }} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem' }}>
              {[{ icon: GithubIcon, href: PROFILE.github, label: 'GitHub' }, { icon: Linkedin, href: PROFILE.linkedin, label: 'LinkedIn' }, { icon: Mail, href: `mailto:${PROFILE.email}`, label: 'Email' }].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '.4rem', color: 'rgba(255,255,255,.3)', fontSize: '.7rem', textDecoration: 'none', transition: 'color .22s', fontFamily: 'Inter,sans-serif' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.3)'}>
                  <Icon size={13} strokeWidth={1.6} /> {label}
                </a>
              ))}
            </m.div>

            {/* Activity feed */}
            <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .6, delay: 1.3 }}>
              <ActivityFeed />
            </m.div>
          </div>

          {/* ══ RIGHT COLUMN: AI SYSTEMS CORE ══ */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '.75rem' : '1rem', alignItems: isMobile ? 'center' : 'flex-end', width: isMobile ? '100%' : 'auto', maxWidth: isMobile ? '100%' : 'none' }}>

            {/* Profile core with rings + orbiting pills */}
            <m.div
              initial={{ opacity: 0, y: 35, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.3, ease, delay: 0.25 }}
              style={{ position: 'relative', width: `${imgSize + orbitPadding}px`, height: `${imgSize + orbitPadding}px`, maxWidth: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
            >
              {/* Ambient glow */}
              <div style={{ position: 'absolute', width: '70%', height: '70%', borderRadius: '50%', background: 'radial-gradient(circle, rgba(74,222,128,.12) 0%, transparent 70%)', filter: 'blur(30px)', animation: 'heroGlow 8s ease-in-out infinite', pointerEvents: 'none' }} />

              {/* Orbital ring 1 — outer */}
              <div style={{ position: 'absolute', inset: '0', borderRadius: '50%', border: '1px solid rgba(74,222,128,.08)', animation: 'heroRingPulse 6s ease-in-out infinite', pointerEvents: 'none' }} />

              {/* Orbital ring 2 — rotating dashed */}
              <m.div
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                style={{ position: 'absolute', inset: '12px', borderRadius: '50%', border: '1px dashed rgba(74,222,128,.15)', borderLeftColor: 'rgba(74,222,128,.5)', borderRightColor: 'rgba(74,222,128,.5)', pointerEvents: 'none' }}
              />

              {/* Orbital ring 3 — counter-rotating */}
              <m.div
                animate={{ rotate: -360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                style={{ position: 'absolute', inset: '28px', borderRadius: '50%', border: '1px solid rgba(74,222,128,.06)', borderTopColor: 'rgba(74,222,128,.35)', borderBottomColor: 'rgba(74,222,128,.35)', pointerEvents: 'none' }}
              />

              {/* Orbital ring 4 — inner pulse */}
              <div style={{ position: 'absolute', inset: '46px', borderRadius: '50%', border: '1px solid rgba(255,255,255,.04)', animation: 'heroRingPulse 4s ease-in-out infinite 1s', pointerEvents: 'none' }} />

              {/* Orbiting tech pills */}
              <OrbitingPills size={imgSize + orbitPadding} isMobile={isMobile} />

              {/* Scan line */}
              <div style={{ position: 'absolute', inset: '50px', borderRadius: '50%', overflow: 'hidden', pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent 10%, rgba(74,222,128,.3) 50%, transparent 90%)', animation: 'heroScan 4s linear infinite', opacity: .6 }} />
              </div>

              {/* Waveform bars */}
              {!isMobile && (
                <div style={{ position: 'absolute', bottom: '52px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '3px', alignItems: 'flex-end', pointerEvents: 'none' }}>
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div key={i} style={{ width: '2px', borderRadius: '1px', background: 'rgba(74,222,128,.25)', animation: `heroWave ${1.2 + i * 0.15}s ease-in-out infinite`, animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
              )}

              {/* Minimal particles */}
              {!isMobile && Array.from({ length: 4 }).map((_, i) => (
                <div key={i} style={{ position: 'absolute', width: '2px', height: '2px', borderRadius: '50%', background: 'rgba(74,222,128,.35)', top: `${55 + Math.random() * 30}%`, left: `${30 + Math.random() * 40}%`, animation: `heroParticle ${4 + i * 1.5}s ease-in-out infinite`, animationDelay: `${i * 1.2}s`, pointerEvents: 'none' }} />
              ))}

              {/* Profile Image — CIRCULAR */}
              <div style={{
                position: 'relative', width: `${imgSize}px`, height: `${imgSize}px`, borderRadius: '50%', overflow: 'hidden',
                border: '1px solid rgba(255,255,255,.08)',
                boxShadow: '0 20px 50px rgba(0,0,0,.6), inset 0 0 40px rgba(255,255,255,.04), 0 0 60px rgba(74,222,128,.06)',
                background: '#000', zIndex: 2
              }}>
                <img loading="lazy" src={profileImg} alt="Bhagavan" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '75% 25%', transform: 'scale(1.3)', transformOrigin: '65% 30%', filter: 'contrast(1.05) brightness(0.95)' }} />
                {/* Vignette */}
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle, transparent 35%, rgba(0,0,0,.55) 100%)', pointerEvents: 'none' }} />
                {/* Rim light */}
                <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', boxShadow: 'inset 0 0 20px rgba(255,255,255,.12), inset 0 -2px 15px rgba(74,222,128,.08)', pointerEvents: 'none' }} />
              </div>
            </m.div>

            {/* Systems Status panel */}
            <m.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, ease, delay: .85 }}>
              <SystemsStatus isMobile={isMobile} />
            </m.div>
          </div>
        </div>

        {/* Bottom quote — desktop */}
        <m.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease, delay: 1.7 }} style={{ position: 'absolute', bottom: '2.5rem', left: '4rem', zIndex: 15, display: isMobile ? 'none' : 'block' }}>
          <div style={{ fontSize: '.48rem', color: 'rgba(255,255,255,.2)', letterSpacing: '.18em', textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '.4rem' }}>Design Philosophy</div>
          <blockquote style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.42)', fontStyle: 'italic', lineHeight: 1.6, fontFamily: "'Source Serif 4',Georgia,serif", fontWeight: 300, maxWidth: '320px' }}>"Build infrastructure that disappears into the experience."</blockquote>
        </m.div>

        {/* Scroll indicator */}
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: .8 }} style={{ position: 'absolute', bottom: '2.5rem', right: '4rem', display: isMobile ? 'none' : 'flex', flexDirection: 'column', alignItems: 'center', gap: '.4rem', zIndex: 15 }}>
          <div style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom, rgba(255,255,255,.25), transparent)', animation: 'float2 3s ease-in-out infinite' }} />
          <span style={{ fontSize: '.52rem', color: 'rgba(255,255,255,.25)', fontFamily: 'monospace', letterSpacing: '.12em', textTransform: 'uppercase' }}>Scroll</span>
        </m.div>
      </div>
    </>
  );
}
