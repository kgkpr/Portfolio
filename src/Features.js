import React, { useRef, useEffect, useState } from 'react';
import './Features.css';

const features = [
  {
    icon: '💻',
    title: 'Development',
    desc: 'Building responsive and scalable web applications using the MERN stack and modern web technologies. Constantly learning and improving through real-world projects.'
  },
  {
    icon: '🎥',
    title: 'Learning & Knowledge Sharing',
    desc: 'Documenting my learning journey, creating beginner-friendly notes and content to help others grow alongside me. Planning to start content creation through blogs or videos soon.'
  },
  {
    icon: '🚀',
    title: 'Community',
    desc: 'Actively engaging with developer communities, learning from others, and offering help when I can. Dreaming of creating a supportive tech platform in the future.'
  }
];

const Features = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(prev => prev ? prev : true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`features${visible ? ' visible' : ''}`} id="features" ref={sectionRef}>
      <div className="features-list">
        {features.map((f, idx) => (
          <div className="feature-card" key={idx}>
            <div className="feature-icon">{f.icon}</div>
            <div className="feature-title">{f.title}</div>
            <div className="feature-desc">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features; 