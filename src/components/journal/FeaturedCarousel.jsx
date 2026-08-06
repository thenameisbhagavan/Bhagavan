import React, { useEffect, useRef, useState } from 'react';
import { m } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../../styles/FeaturedCarousel.css';

export default function FeaturedCarousel({ items = [] }) {
  const trackRef = useRef(null);
  const navigate = useNavigate();
  const [isInteracting, setIsInteracting] = useState(false);
  const interactionTimeoutRef = useRef(null);

  const handleInteraction = () => {
    setIsInteracting(true);
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
    // Resume autoplay after 5 seconds of inactivity
    interactionTimeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 5000);
  };

  useEffect(() => {
    if (!trackRef.current || items.length <= 1) return;

    // Respect accessibility settings
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      // Desktop only auto-scroll
      if (isInteracting || window.innerWidth < 1024) return;

      const track = trackRef.current;
      const scrollWidth = track.scrollWidth;
      const clientWidth = track.clientWidth;
      const maxScroll = scrollWidth - clientWidth;
      
      const cardWidth = track.children[0]?.offsetWidth + 32; // 32px gap from CSS
      
      let nextScroll = track.scrollLeft + cardWidth;
      
      if (nextScroll >= maxScroll + 10) {
        nextScroll = 0;
      }
      
      track.scrollTo({ left: nextScroll, behavior: 'smooth' });
    }, 8000);

    return () => clearInterval(interval);
  }, [isInteracting, items.length]);

  if (!items || items.length === 0) return null;

  return (
    <div className="featured-showcase-container">
      <div className="featured-showcase-header">
        <div className="featured-showcase-eyebrow">Featured Engineering Systems</div>
        <h2 className="featured-showcase-title">Engineering the Intelligence Ecosystem</h2>
        <p className="featured-showcase-subtitle">
          Explore the systems, architecture decisions, research, and engineering principles behind every flagship product.
        </p>
      </div>

      <div 
        className="featured-carousel-track" 
        ref={trackRef}
        onMouseEnter={handleInteraction}
        onMouseMove={handleInteraction}
        onTouchStart={handleInteraction}
        onTouchMove={handleInteraction}
        onScroll={handleInteraction}
        onFocus={handleInteraction}
        tabIndex={0}
        aria-label="Featured projects carousel"
      >
        {items.map((item, idx) => (
          <a 
            key={idx}
            className="featured-carousel-card"
            href={item.link}
            onClick={(e) => {
              e.preventDefault();
              navigate(item.link);
            }}
            aria-label={`Read about ${item.headline}`}
          >
            <img 
              src={item.image} 
              alt={item.headline} 
              className="featured-card-bg" 
              style={{ objectPosition: item.objectPosition || 'center' }}
              loading={idx === 0 ? "eager" : "lazy"}
              fetchPriority={idx === 0 ? "high" : "auto"}
            />
            <div className="featured-card-overlay" />
            <div className="featured-card-content">
              <div className="featured-card-category">{item.category}</div>
              <h3 className="featured-card-headline">{item.headline}</h3>
              <p className="featured-card-desc">{item.subtitle}</p>
              <div className="featured-card-action">
                Read <ArrowRight size={16} className="featured-card-arrow" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
