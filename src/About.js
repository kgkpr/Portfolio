import React, { useRef, useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [blockVisible, setBlockVisible] = useState([false, false, false, false, false, false, false, false, false]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (visible) {
      // Animate each block with a delay
      blockVisible.forEach((_, i) => {
        setTimeout(() => {
          setBlockVisible((prev) => {
            const updated = [...prev];
            updated[i] = true;
            return updated;
          });
        }, i * 350);
      });
    }
  }, [visible]);

  return (
    <div className={`about-section${visible ? ' visible' : ''}`} ref={sectionRef}>
      <div className="about-content">
        <h1 className={`about-title about-anim${blockVisible[0] ? ' visible' : ''}`}>👋 About Me</h1>
        <p className={`about-intro about-anim${blockVisible[1] ? ' visible' : ''}`}>
          Hi there! I'm <span className="about-name">Kaveesha Pramudi</span>, a passionate and self-driven tech enthusiast on a journey to become a <span className="about-highlight">DevOps Engineer</span>. I'm currently studying Information Technology at SLIIT, where I'm learning how to bridge development, operations, and infrastructure through automation and modern engineering practices.
        </p>
        <p className={`about-story about-anim${blockVisible[2] ? ' visible' : ''}`}>
          Coming from a Mathematics stream background in A/Ls, I developed a deep interest in problem-solving—which naturally led me into tech. I started by exploring full-stack development, which gave me a strong foundation in software engineering, and now I’m expanding into the world of DevOps to understand how software is built, tested, deployed, and maintained at scale.
        </p>
        <div className={`about-section-block about-anim${blockVisible[3] ? ' visible' : ''}`}>
          <h2 className="about-subtitle">🚀 What Drives Me?</h2>
          <ul className="about-list">
            <li>Building solutions that are reliable, scalable, and automated</li>
            <li>Optimizing the development-to-deployment pipeline</li>
            <li>Learning new technologies and cloud platforms</li>
            <li>Bridging the gap between development and operations for smoother delivery</li>
          </ul>
        </div>
        <div className={`about-section-block about-anim${blockVisible[4] ? ' visible' : ''}`}>
          <h2 className="about-subtitle">💡 What I’m Learning Now</h2>
          <ul className="about-list">
            <li>DevOps Tools like Git, GitHub Actions, Docker, Kubernetes, Jenkins</li>
            <li>Cloud Platforms like AWS and Azure</li>
            <li>CI/CD Pipelines, automation, and infrastructure as code (IaC)</li>
            <li>Also improving my skills in the MERN stack and UI/UX design to stay full-stack aware</li>
          </ul>
        </div>
        <div className={`about-section-block about-anim${blockVisible[5] ? ' visible' : ''}`}>
          <h2 className="about-subtitle">🎯 My Goals</h2>
          <ul className="about-list">
            <li>Become a DevOps Engineer who can automate and manage cloud-based deployments</li>
            <li>Land an internship or trainee role focused on DevOps, infrastructure, or cloud computing</li>
            <li>Build and maintain CI/CD pipelines, containerized apps, and scalable cloud infrastructure</li>
            <li>Gain industry experience and continuously improve my skills through projects and certifications</li>
          </ul>
        </div>
        <div className={`about-section-block about-anim${blockVisible[6] ? ' visible' : ''}`}>
          <h2 className="about-subtitle">🧾 Timeline</h2>
          <div className="about-timeline">
            <div className="about-timeline-row"><span className="about-timeline-year">2021</span><span className="about-timeline-milestone">Completed A/Ls (Math Stream)</span></div>
            <div className="about-timeline-row"><span className="about-timeline-year">2022</span><span className="about-timeline-milestone">Started BSc in IT at SLIIT</span></div>
            <div className="about-timeline-row"><span className="about-timeline-year">2023</span><span className="about-timeline-milestone">Developed multiple projects including mobile and web apps</span></div>
            <div className="about-timeline-row"><span className="about-timeline-year">2024</span><span className="about-timeline-milestone">Began learning MERN stack + UI/UX design</span></div>
            <div className="about-timeline-row"><span className="about-timeline-year">2025</span><span className="about-timeline-milestone">Actively looking for internships and building my portfolio</span></div>
          </div>
        </div>
        <div className={`about-section-block about-anim${blockVisible[7] ? ' visible' : ''}`}>
          <h2 className="about-subtitle">🎓 Education</h2>
          <div className="about-education">
            <div className="about-edu-item">
              <div className="about-edu-institute">Sri Lanka Institute of Information Technology (SLIIT)</div>
              <div className="about-edu-degree">BSc in Information Technology</div>
              <div className="about-edu-years">2022 – Present</div>
            </div>
            <div className="about-edu-item">
              <div className="about-edu-institute">GCE A/L – Mathematics Stream</div>
              <div className="about-edu-years">Completed in 2021</div>
            </div>
          </div>
        </div>
        <div className={`about-section-block about-anim${blockVisible[8] ? ' visible' : ''}`}>
          <h2 className="about-subtitle">📄 Resume</h2>
          <a className="about-resume-link" href="https://example.com/your-resume.pdf" target="_blank" rel="noopener noreferrer">📥 Download My Resume (PDF)</a>
        </div>
      </div>
    </div>
  );
};

export default About;
