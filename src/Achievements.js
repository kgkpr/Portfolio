import React from 'react';
import './Achievements.css';

const Achievements = () => (
  <section className="achievements-section">
    <div className="achievements-card">
      <h2 className="achievements-title">Dean's List Award</h2>
      <img src="/deanlist.jpg" alt="Dean's List Certificate" className="achievements-image" />
      <p className="achievements-desc">Proud recipient of the Dean's List award for outstanding academic performance.</p>
    </div>
  </section>
);

export default Achievements; 