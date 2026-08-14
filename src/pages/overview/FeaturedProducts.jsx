import React from 'react';
import { m } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import resumeAIImg from '../../assets/resume.jpg';
import leaveImg from '../../assets/leave.jpg';

const products = [
{
title: "ResumeAI",
subtitle: "Reimagining Career Preparation",
desc: "Designed to help individuals present their best work through intelligent resume creation, optimization, and career-focused insights.",
img: resumeAIImg,
theme: "light"
},
{
title: "Smart Leave",
subtitle: "Redefining Workflow Automation",
desc: "Built to simplify employee leave management through intelligent workflows, seamless approvals, and modern enterprise experiences.",
img: leaveImg,
theme: "light"
}
];


export default function FeaturedProducts() {
  const navigate = useNavigate();

  return (
    <section style={{ padding: '160px 24px', background: '#f5f5f7' }} data-nav-theme="light">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <m.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <h2 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 600, letterSpacing: '-0.03em', color: '#1d1d1f' }}>
            Built To Solve Real Problems.
          </h2>
        </m.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {products.map((product, i) => (
            <m.div 
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ 
                background: product.theme === 'dark' ? '#000' : '#fff', 
                color: product.theme === 'dark' ? '#f5f5f7' : '#1d1d1f',
                borderRadius: '32px', 
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                minHeight: '600px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.05)'
              }}
            >
              <div style={{ padding: '80px 60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: product.theme === 'dark' ? '#86868b' : '#86868b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
                  {product.subtitle}
                </h3>
                <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '24px' }}>
                  {product.title}
                </h2>
                <p style={{ fontSize: '1.4rem', lineHeight: 1.5, color: product.theme === 'dark' ? '#a1a1a6' : '#86868b', marginBottom: '40px' }}>
                  {product.desc}
                </p>
                <div>
                  <button 
                    onClick={() => { window.scrollTo(0,0); navigate('/work'); }}
                    style={{ padding: '16px 32px', background: product.theme === 'dark' ? '#fff' : '#1d1d1f', color: product.theme === 'dark' ? '#000' : '#fff', borderRadius: '30px', fontSize: '1.1rem', fontWeight: 500, border: 'none', cursor: 'pointer' }}
                  >
                    View Project
                  </button>
                </div>
              </div>
              <div style={{ padding: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img loading="lazy" src={product.img} alt={product.title} style={{ width: '100%', maxWidth: '500px', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
              </div>
            </m.div>
          ))}
        </div>

      </div>
    </section>
  );
}
