import React, { useRef, useEffect, useState } from "react";
import { m } from "framer-motion";

const TECH_NODES = [
  { name: 'React', icon: 'devicon-react-original', group: 'frontend', x: 15, y: 25, size: 1.2 },
  { name: 'Node.js', icon: 'devicon-nodejs-plain', group: 'backend', x: 35, y: 15, size: 1.1 },
  { name: 'MongoDB', icon: 'devicon-mongodb-plain', group: 'data', x: 55, y: 30, size: 1.0 },
  { name: 'Python', icon: 'devicon-python-plain', group: 'backend', x: 75, y: 20, size: 1.3 },
  { name: 'Java', icon: 'devicon-java-plain', group: 'backend', x: 88, y: 40, size: 1.0 },
  { name: 'TensorFlow', icon: 'devicon-tensorflow-original', group: 'ai', x: 25, y: 55, size: 1.2 },
  { name: 'Flask', icon: 'devicon-flask-original', group: 'backend', x: 45, y: 50, size: 0.9 },
  { name: 'Express.js', icon: 'devicon-express-original', group: 'backend', x: 60, y: 60, size: 0.9 },
  { name: 'MySQL', icon: 'devicon-mysql-plain', group: 'data', x: 80, y: 65, size: 0.9 },
  { name: 'Git', icon: 'devicon-git-plain', group: 'tools', x: 10, y: 75, size: 0.8 },
  { name: 'Machine Learning', icon: 'devicon-scikitlearn-plain', group: 'ai', x: 40, y: 78, size: 1.1 },
  { name: 'NLP', icon: null, group: 'ai', x: 65, y: 80, size: 0.9 },
  { name: 'REST APIs', icon: null, group: 'backend', x: 20, y: 42, size: 0.85 },
  { name: 'Power Apps', icon: null, group: 'tools', x: 90, y: 55, size: 0.85 },
  { name: 'Docker', icon: 'devicon-docker-plain', group: 'tools', x: 50, y: 40, size: 0.9 },
  { name: 'Keras', icon: 'devicon-keras-plain', group: 'ai', x: 30, y: 68, size: 0.85 },
  { name: 'OAuth/JWT', icon: null, group: 'backend', x: 72, y: 45, size: 0.8 },
  { name: 'Data Science', icon: 'devicon-pandas-plain', group: 'ai', x: 55, y: 72, size: 1.0 },
];

const CONNECTIONS = [
  [0, 1], [1, 2], [2, 7], [3, 5], [3, 6], [5, 10], [6, 7], [1, 6], [0, 12],
  [10, 15], [10, 11], [5, 15], [2, 8], [3, 16], [7, 16], [14, 6], [14, 1],
  [11, 17], [10, 17], [4, 8], [9, 0], [13, 4],
];

const GROUP_COLORS = {
  frontend: '59,130,246',
  backend: '74,222,128',
  ai: '168,85,247',
  data: '6,182,212',
  tools: '250,204,21',
};

function TechNode({ node, index, hoveredNode, setHoveredNode, isMobile }) {
  const color = GROUP_COLORS[node.group] || '255,255,255';
  const isHovered = hoveredNode === index;
  const isConnected = hoveredNode !== null && CONNECTIONS.some(([a, b]) => (a === hoveredNode && b === index) || (b === hoveredNode && a === index));
  const opacity = hoveredNode === null ? 0.7 : (isHovered || isConnected) ? 1 : 0.2;

  return (
    <m.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.04, ease: [.16, 1, .3, 1] }}
      onMouseEnter={() => setHoveredNode(index)}
      onMouseLeave={() => setHoveredNode(null)}
      style={{
        position: 'absolute',
        left: `${node.x}%`, top: `${node.y}%`,
        transform: `translate(-50%, -50%) scale(${isHovered ? 1.2 : 1})`,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.4rem',
        cursor: 'default', zIndex: isHovered ? 10 : 2,
        transition: 'all 0.3s cubic-bezier(.16,1,.3,1)',
        opacity,
      }}
    >
      <div style={{
        width: `${36 * node.size}px`, height: `${36 * node.size}px`,
        borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: `rgba(${color},${isHovered ? 0.15 : 0.06})`,
        border: `1px solid rgba(${color},${isHovered ? 0.5 : 0.2})`,
        boxShadow: isHovered ? `0 0 20px rgba(${color},0.3)` : 'none',
        transition: 'all 0.3s ease',
      }}>
        {node.icon ? (
          <i className={node.icon} style={{ fontSize: `${14 * node.size}px`, color: `rgba(${color},0.9)` }} />
        ) : (
          <span style={{ fontSize: `${9 * node.size}px`, fontFamily: 'monospace', color: `rgba(${color},0.8)`, fontWeight: 600 }}>{node.name.slice(0, 2).toUpperCase()}</span>
        )}
      </div>
      <span style={{
        fontSize: '.58rem', color: isHovered ? '#fff' : `rgba(255,255,255,.4)`,
        fontFamily: 'monospace', letterSpacing: '.04em', whiteSpace: 'nowrap',
        transition: 'color 0.3s',
      }}>{node.name}</span>
    </m.div>
  );
}

export default function TechUniverse({ isMobile }) {
  const [hoveredNode, setHoveredNode] = useState(null);
  const svgRef = useRef(null);

  return (
    <section id="tech-universe" style={{ padding: isMobile ? '5rem 1.5rem' : '8rem 4rem', maxWidth: '1400px', margin: '0 auto' }} data-nav-theme="light">
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ fontSize: '.6rem', color: 'rgba(255,255,255,.25)', letterSpacing: '.16em', textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '1.5rem' }}>Technology Universe</div>
        <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-.04em', color: '#fff', lineHeight: 1.12, maxWidth: '600px', marginBottom: '1.2rem' }}>
          An interconnected<br />
          <span style={{ fontFamily: "'Source Serif 4',Georgia,serif", fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(2.1rem,3.6vw,3.1rem)' }}>engineering ecosystem</span>
        </h2>
      </div>
      {/* Universe container */}
      <div className="liquid-glass" style={{ borderRadius: '24px', border: '1px solid rgba(255,255,255,.06)', padding: '2rem', position: 'relative', overflow: 'hidden', minHeight: isMobile ? '400px' : '500px' }}>
        {/* Connection lines SVG */}
        <svg ref={svgRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
          {CONNECTIONS.map(([a, b], ci) => {
            const na = TECH_NODES[a];
            const nb = TECH_NODES[b];
            const isActive = hoveredNode !== null && (hoveredNode === a || hoveredNode === b);
            return (
              <line key={ci}
                x1={`${na.x}%`} y1={`${na.y}%`} x2={`${nb.x}%`} y2={`${nb.y}%`}
                stroke={isActive ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.05)'}
                strokeWidth={isActive ? '1.5' : '0.5'}
                strokeDasharray={isActive ? 'none' : '4 4'}
                style={{ transition: 'all 0.3s ease' }}
              />
            );
          })}
        </svg>
        {/* Tech nodes */}
        {TECH_NODES.map((node, i) => (
          <TechNode key={i} node={node} index={i} hoveredNode={hoveredNode} setHoveredNode={setHoveredNode} isMobile={isMobile} />
        ))}
        {/* Group legend */}
        <div style={{ position: 'absolute', bottom: '1.2rem', left: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', zIndex: 5 }}>
          {Object.entries(GROUP_COLORS).map(([group, color]) => (
            <div key={group} style={{ display: 'flex', alignItems: 'center', gap: '.35rem' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: `rgba(${color},0.8)` }} />
              <span style={{ fontSize: '.55rem', color: 'rgba(255,255,255,.3)', fontFamily: 'monospace', letterSpacing: '.06em', textTransform: 'uppercase' }}>{group}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
