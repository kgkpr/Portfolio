import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import Skills from './Skills';
import Projects from './Projects';
import TechStack from './TechStack';
import Journey from './Journey';
import Features from './Features';
import Connect from './Connect';
import About from './About'; // Import About page component
import Achievements from './Achievements';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={`App${darkMode ? ' dark' : ''}`}>
      <Router>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Projects />
                <Skills />
                <TechStack />
                <Journey />
                <Features />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
        </Routes>
        <Connect />
      </Router>
    </div>
  );
}

export default App;
