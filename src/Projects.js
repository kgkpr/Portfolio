import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Projects.css';

const projects = [
  {
    title: 'Rice Cultivation Management System',
    image: process.env.PUBLIC_URL + '/rice.jpg',
    description: 'The Rice Cultivation Management System is designed to support farmers by managing five key areas: farm and crop activities, inventory and resources, task and workforce scheduling, market sales, and financial tracking. It helps streamline daily farming operations and improve overall efficiency.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
    link: '#',
    code: 'https://github.com/lahirudeshan01/CropWise',
    category: 'Web',
  },
  {
    title: 'Real Human Chat System',
    image: process.env.PUBLIC_URL + '/chat.webp',
    description: 'The Real Human Chat System is designed to enable seamless communication between users on websites. It manages real-time messaging, user presence, and instant updates to provide smooth and interactive conversations. This system enhances engagement and connectivity for any online platform.',
    tech: ['React.js', 'Node.js', 'Socket.io', 'Express.js'],
    link: '#',
    code: 'https://github.com/kgkpr/chat-bot',
    category: 'Web',
  },
  {
    title: 'Quiz App',
    image: 'https://via.placeholder.com/120x120/ffeb3b/333333?text=QUIZ',
    description: 'An interactive quiz application with multiple categories.',
    tech: ['React', 'TypeScript', 'API'],
    link: '#',
    code: 'https://github.com/yourusername/quiz-app',
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
              <div className="project-info-links">
                <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project <span className="arrow">→</span>
                </a>
                {project.code && (
                  <a className="project-code-btn" href={project.code} target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 