import React, { useState, useEffect } from 'react';

export default function TableOfContents() {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('h2, h3'))
      .map((elem) => ({
        id: elem.id,
        text: elem.innerText,
        level: Number(elem.nodeName.charAt(1)),
      }))
      .filter((elem) => elem.id); // Only keep headings with IDs
    
    setHeadings(elements);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -80% 0px' }
    );

    document.querySelectorAll('h2, h3').forEach((elem) => {
      if (elem.id) observer.observe(elem);
    });

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <aside className="toc-sidebar">
      <div className="toc-title">On this page</div>
      <ul className="toc-list">
        {headings.map((heading) => (
          <li 
            key={heading.id} 
            className="toc-item"
            style={{ paddingLeft: heading.level === 3 ? '1rem' : '0' }}
          >
            <a 
              href={`#${heading.id}`}
              className={`toc-link ${activeId === heading.id ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
