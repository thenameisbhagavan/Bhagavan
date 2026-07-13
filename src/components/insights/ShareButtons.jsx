import React from 'react';
import { Twitter, Linkedin, Link2 } from 'lucide-react';

export default function ShareButtons({ title, url }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    alert('Link copied to clipboard!');
  };

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '3rem', padding: '2rem 0', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#86868b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        Share Article
      </span>
      <a 
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#1d1d1f', opacity: 0.7, transition: 'opacity 0.2s' }}
        onMouseOver={e => e.currentTarget.style.opacity = 1}
        onMouseOut={e => e.currentTarget.style.opacity = 0.7}
      >
        <Twitter size={20} />
      </a>
      <a 
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#1d1d1f', opacity: 0.7, transition: 'opacity 0.2s' }}
        onMouseOver={e => e.currentTarget.style.opacity = 1}
        onMouseOut={e => e.currentTarget.style.opacity = 0.7}
      >
        <Linkedin size={20} />
      </a>
      <button 
        onClick={handleCopy}
        style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1d1d1f', opacity: 0.7, transition: 'opacity 0.2s', padding: 0 }}
        onMouseOver={e => e.currentTarget.style.opacity = 1}
        onMouseOut={e => e.currentTarget.style.opacity = 0.7}
      >
        <Link2 size={20} />
      </button>
    </div>
  );
}
