import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Achievements.css';

const Achievements = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setVisible(false);
    const timeout = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div className={`achievements-page${visible ? ' visible' : ''}`}>
      <h1 className="achievements-main-title">Milestones & Achievements</h1>
      <p className={`achievements-subtitle${visible ? ' visible' : ''}`}>Here are some of the key milestones that reflect my journey, growth, and commitment to continuous learning.</p>
      <section className="achievements-section">
        <div className="achievements-card">
          <h2 className="achievements-title">Dean's List Award</h2>
          <div className="achievements-year">2024</div>
          <img src="/deanlist.jpg" alt="Dean's List Certificate" className="achievements-image" />
          <p className="achievements-desc">Recognized as a Dean’s List student for achieving an outstanding GPA of 3.80 during the 2nd Year 1st Semester at SLIIT. This award honors academic excellence and consistent dedication to my studies in the field of Information Technology.</p>
        </div>
        <div className="achievements-card">
          <h2 className="achievements-title">Beeline Certificate</h2>
          <div className="achievements-year">2022</div>
          <img src="/beeline.jpg" alt="Beeline Certificate" className="achievements-image" />
          <p className="achievements-desc">Successfully completed the Advanced Diploma in Spoken English at The Beeline Campus in 2022. This intensive 3-month program focused on English fluency, public speaking, grammar, and communication skills through a fully immersive English-only environment.</p>
        </div>
      </section>
    </div>
  );
};

export default Achievements; 