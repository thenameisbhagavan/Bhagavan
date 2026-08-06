import React from 'react';
import { Globe, Github, Rss, Code2, BookOpen } from 'lucide-react';

export default function PlatformIcon({ type, size = 16, className = '' }) {
  switch (type?.toLowerCase()) {
    case 'portfolio':
      return <Globe size={size} className={className} strokeWidth={1.5} />;
    case 'github':
      return <Github size={size} className={className} strokeWidth={1.5} />;
    case 'medium':
      return (
        <svg 
          width={size} 
          height={size} 
          viewBox="0 0 24 24" 
          fill="currentColor"
          className={className}
        >
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
      );
    case 'hashnode':
      return (
        <svg 
          width={size} 
          height={size} 
          viewBox="0 0 24 24" 
          fill="currentColor"
          className={className}
        >
          <path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z" />
        </svg>
      );
    case 'devto':
      return (
        <svg 
          width={size} 
          height={size} 
          viewBox="0 0 24 24" 
          fill="currentColor"
          className={className}
        >
          <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 3.75v16.5h24V3.75H0zm8.26 10.3c-.66.86-1.57 1.1-2.9 1.11L3 15.17V8.84c0-3.01.03-3.06.18-3.1.53-.13 3.32-.13 3.82 0 .34.09 1.1.42 1.41.61.64.4 1.13 1.13 1.34 2.03.11.45.13 3.65.02 4.14-.14.61-.59 1.25-1.51 1.53zm5.66-.46v.83h-3.26v-6.66h3.26v.83h-2.13v2.09h1.79v.84h-1.79v2.07h2.13zm6.33-6.65l-1.52 4.79c-.83 2.64-1.55 4.8-1.58 4.82-.03.02-.75-2.18-1.58-4.87l-1.52-4.88h1.22l.84 2.92c.46 1.62.86 2.97.88 3 .02.04.42-1.37.89-3l.84-2.92h1.28v.14z" />
        </svg>
      );
    case 'rss':
      return <Rss size={size} className={className} strokeWidth={1.5} />;
    default:
      return <BookOpen size={size} className={className} strokeWidth={1.5} />;
  }
}
