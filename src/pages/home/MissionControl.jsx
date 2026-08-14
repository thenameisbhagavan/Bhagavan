import React, { useRef } from "react";
import { m } from "framer-motion";
import { Brain, Cpu, Layers, Server, Code, Database, Shield, GitBranch } from "lucide-react";

const DOMAINS = [
  { icon: Brain, label: 'Artificial Intelligence', desc: 'Building intelligent systems with neural networks, LLMs, and autonomous agent pipelines.', color: '139,92,246', glyph: 'AI' },
  { icon: Cpu, label: 'Machine Learning', desc: 'Training CNNs, NLP classifiers, and predictive models deployed as production REST APIs.', color: '59,130,246', glyph: 'ML' },
  { icon: Layers, label: 'Full Stack Engineering', desc: 'End-to-end MERN architectures with React SPAs, Express APIs, and MongoDB schemas.', color: '16,185,129', glyph: 'FS' },
  { icon: Code, label: 'Python Backend Systems', desc: 'Flask microservices, TensorFlow pipelines, and secure API endpoint engineering.', color: '245,158,11', glyph: 'PY' },
  { icon: Server, label: 'Java Development', desc: 'Object-oriented systems, data structures, and enterprise-grade application logic.', color: '239,68,68', glyph: 'JV' },
  { icon: Database, label: 'Data Science', desc: 'Feature engineering, Pandas pipelines, Scikit-learn models, and statistical analysis.', color: '6,182,212', glyph: 'DS' },
  { icon: Shield, label: 'Cloud-Ready Applications', desc: 'Docker containerization, CI/CD pipelines, OAuth 2.0, and JWT security layers.', color: '168,85,247', glyph: 'CL' },
  { icon: GitBranch, label: 'Software Architecture', desc: 'Microservice patterns, API-first design, scalable schemas, and clean code principles.', color: '34,211,238', glyph: 'SA' },
];

function DomainCard({ domain, index }) {
  const cardRef = useRef(null);
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -8;
    const rotateY = ((x - cx) / cx) * 8;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale(1.02)`;
    card.querySelector('.mc-glow').style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(${domain.color},0.15) 0%, transparent 60%)`;
  };
  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0) scale(1)';
    card.querySelector('.mc-glow').style.background = 'transparent';
  };
  const Icon = domain.icon;
  return (
    <m.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [.16, 1, .3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="liquid-glass"
      style={{
        padding: '2rem 1.8rem', borderRadius: '20px',
        border: '1px solid rgba(255,255,255,.06)',
        position: 'relative', overflow: 'hidden', cursor: 'default',
        transition: 'transform 0.15s ease, box-shadow 0.4s ease, border-color 0.4s ease',
        transformStyle: 'preserve-3d', willChange: 'transform',
      }}
    >
      {/* Hover glow overlay */}
      <div className="mc-glow" style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', pointerEvents: 'none', transition: 'background 0.3s ease', zIndex: 0 }} />
      {/* Ambient corner glow */}
      <div style={{ position: 'absolute', top: '-30%', right: '-30%', width: '60%', height: '60%', borderRadius: '50%', background: `radial-gradient(circle, rgba(${domain.color},0.06) 0%, transparent 70%)`, pointerEvents: 'none', filter: 'blur(30px)' }} />
      {/* Top edge light */}
      <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: '1px', background: `linear-gradient(90deg, transparent, rgba(${domain.color},0.4), transparent)`, opacity: 0, transition: 'opacity 0.4s', pointerEvents: 'none' }} className="mc-topline" />
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
          <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: `rgba(${domain.color},0.08)`, border: `1px solid rgba(${domain.color},0.2)`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.4s' }}>
            <Icon size={20} color={`rgba(${domain.color},0.9)`} strokeWidth={1.8} />
          </div>
          <span style={{ fontSize: '.6rem', fontFamily: 'monospace', color: `rgba(${domain.color},0.5)`, letterSpacing: '.15em', fontWeight: 600 }}>{domain.glyph}</span>
        </div>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#fff', marginBottom: '.7rem', letterSpacing: '-.02em' }}>{domain.label}</h3>
        <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.42)', lineHeight: 1.7, fontWeight: 300 }}>{domain.desc}</p>
      </div>
      {/* Animated border pulse on hover via CSS class */}
      <style>{`
        .liquid-glass:hover .mc-topline { opacity: 1 !important; }
      `}</style>
    </m.div>
  );
}

export default function MissionControl({ isMobile }) {
  return (
    <section id="mission-control" style={{ padding: isMobile ? '5rem 1.5rem' : '8rem 4rem', maxWidth: '1400px', margin: '0 auto', position: 'relative' }} data-nav-theme="light">
      {/* Section header */}
      <div style={{ marginBottom: '3.5rem' }}>
        <div style={{ fontSize: '.6rem', color: 'rgba(255,255,255,.25)', letterSpacing: '.16em', textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '1.5rem' }}>Mission Control</div>
        <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-.04em', color: '#fff', lineHeight: 1.12, maxWidth: '700px', marginBottom: '1.2rem' }}>
          Core engineering<br />
          <span style={{ fontFamily: "'Source Serif 4',Georgia,serif", fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(2.1rem,3.6vw,3.1rem)' }}>domains & disciplines</span>
        </h2>
        <p style={{ fontSize: '.92rem', color: 'rgba(255,255,255,.4)', maxWidth: '520px', lineHeight: 1.7, fontWeight: 300 }}>
          Eight interconnected pillars of expertise — from neural network architectures to enterprise deployment pipelines.
        </p>
      </div>
      {/* Cards grid */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)', gap: '1.2rem' }}>
        {DOMAINS.map((d, i) => (
          <DomainCard key={i} domain={d} index={i} />
        ))}
      </div>
    </section>
  );
}
