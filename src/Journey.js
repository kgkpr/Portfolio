import React, { useRef, useEffect, useState } from 'react';
import './Journey.css';

const milestones = [
  {
    year: '2026 (Planned / Goal)',
    title: 'DevOps Career Path',
    desc: 'Working towards a career in DevOps Engineering—aiming to master automation, cloud deployment, CI/CD pipelines, and infrastructure as code to build scalable, efficient systems.'
  },
  {
    year: '2025',
    title: 'Full-Stack Development & Portfolio Growth',
    desc: 'Focused on mastering the MERN stack through self-learning and real-world projects. Building a strong portfolio and preparing to apply for internships and junior developer roles.'
  },
  {
    year: '2024',
    title: 'Project Development & Technical Skills Building',
    desc: 'Developed academic projects like the Rice Cultivation Management System. Gained hands-on experience in frontend and backend technologies, UI/UX design, and teamwork.'
  },
  {
    year: '2023',
    title: 'Exploring the IT Landscape',
    desc: 'Started exploring various IT domains including web development and DevOps. Strengthened programming fundamentals and built a solid foundation in software development.'
  },
  {
    year: '2022',
    title: 'Academic Foundations',
    desc: 'Focused on academic studies, building a strong base in mathematics, logic, and problem-solving, which paved the way for future IT learning.'
  }
];

const Journey = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="journey" id="journey" ref={sectionRef}>
      <h2>Journey So Far</h2>
      <div className="timeline">
        <div className="timeline-line"></div>
        {milestones.map((m, idx) => (
          <div
            className={`timeline-item${visible ? ' visible' : ''}`}
            key={idx}
            style={{ top: `${idx * 160}px`, transitionDelay: visible ? `${idx * 0.18 + 0.1}s` : '0s' }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <div className="timeline-year">{m.year}</div>
              <div className="timeline-title">{m.title}</div>
              <div className="timeline-desc">{m.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journey; 