import React, { useState, useEffect } from 'react';
import './Hero.css';

const roles = [
  'Aspiring DevOps Engineer',
  'Full Stack Developer',
  'Lifelong Learner'
];

const TYPING_SPEED = 80;
const PAUSE_DURATION = 1200;

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const timeout = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayed.length < roles[roleIndex].length) {
        timeout = setTimeout(() => {
          setDisplayed(roles[roleIndex].slice(0, displayed.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => setTyping(false), PAUSE_DURATION);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 40);
      } else {
        setTyping(true);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section className={`hero${visible ? ' visible' : ''}`} id="home">
      <div className="hero-content">
        <h1>Hi, I'm <span className="hero-name">Pramudi</span></h1>
        <p className="hero-tagline">Code is my compass. Curiosity is my fuel. Growth is my destination.</p>
        <div className="hero-role-typewriter">{displayed}<span className="type-cursor">|</span></div>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Let's Connect</a>
        </div>
      </div>
      <div className="hero-image">
        <img src="/ia.jpg" alt="Profile" />
      </div>
    </section>
  );
};

export default Hero; 