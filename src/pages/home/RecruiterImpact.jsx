import React, { useState, useEffect, useRef } from "react";
import { m } from "framer-motion";
import { TrendingUp, Target, Zap, Code, Globe, Activity, BarChart2, Award } from "lucide-react";

function AnimatedCounter({ target, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const num = parseInt(target) || 0;
        const dur = 2000;
        const step = Math.max(1, Math.floor(num / (dur / 30)));
        let cur = 0;
        const timer = setInterval(() => {
          cur += step;
          if (cur >= num) { setCount(num); clearInterval(timer); }
          else setCount(cur);
        }, 30);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

const METRICS = [
  { val: '6', suffix: '+', label: 'Projects Shipped', icon: Code, color: '74,222,128', desc: 'Production-grade systems with real architectures' },
  { val: '4', suffix: '', label: 'Internships Completed', icon: Award, color: '59,130,246', desc: 'MERN, AI/ML, and Data Science domains' },
  { val: '15', suffix: '+', label: 'Technologies Mastered', icon: Zap, color: '250,204,21', desc: 'React, Node, Python, Java, TensorFlow & more' },
  { val: '4', suffix: '', label: 'AI Systems Deployed', icon: Activity, color: '168,85,247', desc: 'CNN, NLP, and ML models as production APIs' },
  { val: '5', suffix: '+', label: 'APIs Integrated', icon: Globe, color: '6,182,212', desc: 'OpenAI, Gemini, OAuth, JWT, REST endpoints' },
  { val: '1', suffix: '', label: 'National Hackathon', icon: Target, color: '239,68,68', desc: '24-hour finalist with full-stack prototype' },
];

export default function RecruiterImpact({ isMobile }) {
  return (
    <section id="recruiter-impact" style={{ padding: isMobile ? '5rem 1.5rem' : '8rem 4rem', maxWidth: '1400px', margin: '0 auto' }} data-nav-theme="light">
      <div style={{ marginBottom: '3.5rem' }}>
        <div style={{ fontSize: '.6rem', color: 'rgba(255,255,255,.25)', letterSpacing: '.16em', textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '1.5rem' }}>Recruiter Intelligence Dashboard</div>
        <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-.04em', color: '#fff', lineHeight: 1.12, maxWidth: '700px', marginBottom: '1.2rem' }}>
          Engineering output<br />
          <span style={{ fontFamily: "'Source Serif 4',Georgia,serif", fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(2.1rem,3.6vw,3.1rem)' }}>by the numbers</span>
        </h2>
      </div>
      {/* Dashboard grid */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1.2rem' }}>
        {METRICS.map((m, i) => {
          const Icon = m.icon;
          return (
            <m.div key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [.16,1,.3,1] }}
              className="liquid-glass"
              style={{ padding: '2.2rem 1.8rem', borderRadius: '18px', border: '1px solid rgba(255,255,255,.06)', position: 'relative', overflow: 'hidden', transition: 'all 0.4s cubic-bezier(.16,1,.3,1)', cursor: 'default' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = `rgba(${m.color},0.35)`;
                e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
                e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.4), inset 0 0 30px rgba(${m.color},0.04)`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,.06)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Subtle background glow */}
              <div style={{ position: 'absolute', bottom: '-20%', right: '-20%', width: '50%', height: '50%', borderRadius: '50%', background: `radial-gradient(circle, rgba(${m.color},0.05) 0%, transparent 70%)`, pointerEvents: 'none', filter: 'blur(25px)' }} />
              {/* Terminal-style header line */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '1.2rem', position: 'relative', zIndex: 2 }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: `rgba(${m.color},0.8)`, boxShadow: `0 0 8px rgba(${m.color},0.5)` }} />
                <span style={{ fontSize: '.58rem', fontFamily: 'monospace', color: 'rgba(255,255,255,.3)', letterSpacing: '.1em', textTransform: 'uppercase' }}>METRIC.{String(i).padStart(2, '0')}</span>
              </div>
              {/* Counter */}
              <div style={{ fontSize: '3rem', fontWeight: 200, color: '#fff', fontFamily: "'Source Serif 4',Georgia,serif", fontStyle: 'italic', lineHeight: 1, marginBottom: '.5rem', position: 'relative', zIndex: 2 }}>
                <AnimatedCounter target={m.val} suffix={m.suffix} />
              </div>
              <div style={{ fontSize: '.82rem', fontWeight: 500, color: 'rgba(255,255,255,.7)', marginBottom: '.4rem', position: 'relative', zIndex: 2 }}>{m.label}</div>
              <div style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.35)', lineHeight: 1.6, fontWeight: 300, position: 'relative', zIndex: 2 }}>{m.desc}</div>
              {/* Floating icon */}
              <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', opacity: 0.06, pointerEvents: 'none' }}>
                <Icon size={50} strokeWidth={1} />
              </div>
            </m.div>
          );
        })}
      </div>

      {/* Live activity bar */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="liquid-glass"
        style={{ marginTop: '1.5rem', padding: '1.2rem 1.8rem', borderRadius: '14px', border: '1px solid rgba(255,255,255,.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(74,222,128,0.8)', animation: 'pulse 2s ease infinite', boxShadow: '0 0 10px rgba(74,222,128,0.5)' }} />
          <span style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.5)', fontFamily: 'monospace', letterSpacing: '.05em' }}>CURRENTLY: TECHNICAL AI/ML & DATA SCIENCE TRAINER AT DATA VALLEY</span>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          {['AI Engineer', 'Full Stack Dev', 'Python Dev', 'Software Engineer'].map((role, ri) => (
            <span key={ri} style={{ fontSize: '.68rem', color: 'rgba(255,255,255,.35)', fontFamily: 'monospace', letterSpacing: '.04em' }}>
              <span style={{ color: 'rgba(74,222,128,0.6)' }}>→</span> {role}
            </span>
          ))}
        </div>
      </m.div>
    </section>
  );
}
