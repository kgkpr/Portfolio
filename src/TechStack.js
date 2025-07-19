import React, { useRef, useEffect, useState } from 'react';
import './TechStack.css';

const sections = [
  {
    title: '🧱 Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Bootstrap / Tailwind CSS']
  },
  {
    title: '🔙 Backend',
    items: ['Node.js', 'Express.js', 'REST APIs']
  },
  {
    title: '🗃️ Database',
    items: ['MongoDB', 'MySQL (basic knowledge)']
  },
  {
    title: '🛠️ Tools & Platforms',
    items: ['Git & GitHub', 'Postman', 'VS Code', 'Netlify / Vercel / Heroku']
  },
  {
    title: '🐳 DevOps Basics',
    items: ['Linux CLI', 'Docker (basic)', 'GitHub Actions (CI/CD)', 'AWS (basic)']
  },
  {
    title: '🎨 Design / UI',
    items: ['Figma', 'Canva (for quick mockups)']
  }
];

function TechStack() {
  const sectionRef = useRef([]);
  const [visibleSections, setVisibleSections] = useState(Array(sections.length).fill(false));

  useEffect(() => {
    const observers = sectionRef.current.map((ref, idx) => {
      if (!ref) return null;
      return new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => {
              if (prev[idx]) return prev; // already visible, do nothing
              const updated = [...prev];
              updated[idx] = true;
              return updated;
            });
          }
        },
        { threshold: 0.2 }
      );
    });
    sectionRef.current.forEach((ref, idx) => {
      if (ref && observers[idx]) observers[idx].observe(ref);
    });
    return () => {
      observers.forEach((observer, idx) => {
        if (observer && sectionRef.current[idx]) observer.disconnect();
      });
    };
  }, []);

  return (
    <div className="techstack-container">
      <h2>Tools & Technologies</h2>
      {sections.map((section, idx) => (
        <div
          className={`techstack-section${visibleSections[idx] ? ' visible' : ''}`}
          key={section.title}
          ref={el => (sectionRef.current[idx] = el)}
          style={{ transitionDelay: visibleSections[idx] ? `${idx * 0.18 + 0.1}s` : '0s' }}
        >
          <h3>{section.title}</h3>
          <ul>
            {section.items.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TechStack; 