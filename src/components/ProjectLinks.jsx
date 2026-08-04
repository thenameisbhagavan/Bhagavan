import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Github } from 'lucide-react';
import '../styles/ProjectLinks.css';

export default function ProjectLinks({ internal, live, github, projectName = 'Project', variant = 'full' }) {
  const hasAny = internal || live || github;
  if (!hasAny) return null;

  return (
    <div className={`project-links project-links-${variant}`}>
      {internal && (
        <Link
          to={internal}
          className="project-links-btn project-links-explore apple-pressable"
          aria-label={`Explore ${projectName} project`}
        >
          <span>Explore Project</span>
          <ArrowRight size={variant === 'compact' ? 14 : 16} />
        </Link>
      )}
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="project-links-btn project-links-live apple-pressable"
          aria-label={`Visit ${projectName} Live Demo`}
        >
          <span>Live Demo</span>
          <ArrowUpRight size={variant === 'compact' ? 14 : 16} />
        </a>
      )}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-links-btn project-links-github apple-pressable"
          aria-label={`View ${projectName} source code on GitHub`}
        >
          <Github size={variant === 'compact' ? 14 : 16} />
          <span>GitHub</span>
        </a>
      )}
    </div>
  );
}
