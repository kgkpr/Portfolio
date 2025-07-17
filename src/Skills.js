import React, { useRef, useEffect, useState } from 'react';
import './Skills.css';

const skills = [
  { name: 'React', percent: 90 },
  { name: 'TypeScript', percent: 85 },
  { name: 'Node.js', percent: 80 },
  { name: 'UI/UX Design', percent: 75 },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setAnimate(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`skills${animate ? ' visible' : ''}`} id="skills" ref={sectionRef}>
      <h2>Skills &amp; Expertise</h2>
      <div className="skills-list">
        {skills.map((skill, idx) => (
          <div className="skill-card" key={idx}>
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percent">{skill.percent}%</span>
            </div>
            <div className="skill-bar-bg">
              <div
                className="skill-bar-fill"
                style={{ width: animate ? `${skill.percent}%` : 0 }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 