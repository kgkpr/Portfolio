import React, { useRef, useEffect, useState } from 'react';
import './Connect.css';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const socials = [
  { name: 'Facebook', icon: <FaFacebook />, url: 'https://facebook.com/' },
  { name: 'Instagram', icon: <FaInstagram />, url: 'https://instagram.com/' },
  { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/' },
  { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://linkedin.com/' },
];

const Connect = () => {
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
    <section className={`connect${visible ? ' visible' : ''}`} id="connect" ref={sectionRef}>
      <h2>Connect With Me</h2>
      <div className="connect-list">
        {socials.map((s, idx) => (
          <a className="connect-card" href={s.url} key={idx} target="_blank" rel="noopener noreferrer">
            <span className="connect-icon">{s.icon}</span>
            <span className="connect-label">{s.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Connect; 