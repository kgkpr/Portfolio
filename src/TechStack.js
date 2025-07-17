import React, { useRef, useEffect, useState } from 'react';
import './TechStack.css';

const techs = [
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Tailwind', icon: '🌬️' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'AWS', icon: '☁️' },
];

const TechStack = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`tech-stack${visible ? ' visible' : ''}`} id="tech-stack" ref={sectionRef}>
      <h2>Tech Stack</h2>
      <div className="tech-list">
        {techs.map((tech, idx) => (
          <div className="tech-card" key={idx}>
            <span className="tech-icon">{tech.icon}</span>
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack; 