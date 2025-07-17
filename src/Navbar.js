import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = ({ darkMode, toggleDarkMode }) => (
  <nav className="navbar">
    <div className="navbar-logo">Pramudi</div>
    <ul className="navbar-links">
      <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
      <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
      <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink></li>
      <li><NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>Blog</NavLink></li>
      <li><NavLink to="/achievements" className={({ isActive }) => isActive ? 'active' : ''}>Achievements</NavLink></li>
      <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
    </ul>
    <div className="navbar-theme-toggle" onClick={toggleDarkMode} style={{ cursor: 'pointer' }}>
      {darkMode ? '☀️' : '🌙'}
    </div>
  </nav>
);

export default Navbar;
