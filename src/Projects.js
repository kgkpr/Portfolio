import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Projects.css';

const projects = [
  {
    title: 'Simple Todo App',
    image: 'https://via.placeholder.com/120x120/2196f3/ffffff?text=TODO',
    description: 'A basic todo application to manage your daily tasks.',
    tech: ['React', 'CSS'],
    link: '#',
    category: 'App',
  },
  {
    title: 'Quiz App',
    image: 'https://via.placeholder.com/120x120/ffeb3b/333333?text=QUIZ',
    description: 'An interactive quiz application with multiple categories.',
    tech: ['React', 'TypeScript', 'API'],
    link: '#',
    category: 'Web',
  },
  {
    title: 'People Voting System',
    image: 'https://via.placeholder.com/120x120/2196f3/ffffff?text=VOTE',
    description: 'A system for casting and tracking votes for individuals.',
    tech: ['Node.js', 'Express', 'Database'],
    link: '#',
    category: 'Web',
  },
];

const categories = ['All', 'Web', 'App', 'Tool'];

const Projects = () => {
  const [selected, setSelected] = useState('All');
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const filtered = selected === 'All' ? projects : projects.filter(p => p.category === selected);

  useEffect(() => {
    setVisible(false);
    const timeout = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <section className={`projects${visible ? ' visible' : ''}`} id="projects">
      <h2>My Projects</h2>
      {location.pathname === '/projects' && (
        <div className="projects-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`projects-filter-btn${selected === cat ? ' active' : ''}`}
              onClick={() => setSelected(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      )}
      <div className="projects-list">
        {filtered.map((project, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span className="tech-badge" key={i}>{t}</span>
                ))}
              </div>
              <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
                View Project <span className="arrow">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 