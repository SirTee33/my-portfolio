import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../images/My logo.png'


const Navbar = ({ toggleTheme, theme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleToggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const [glow, setGlow] = useState(false);

  const handleThemeChange = () => {
    setAnimate(true);
    setGlow(true);
    toggleTheme();
    closeMenu();
  };
  useEffect(() => {
    if (glow) {
      const timer = setTimeout(() => setGlow(false), 800);
      return () => clearTimeout(timer);
    }
  }, [glow]);

  // Remove animation class after animation ends
  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setAnimate(false), 400);
      return () => clearTimeout(timer);
    }
  }, [animate]);

  return (
    <nav className={`navbar ${glow ? 'glow' : ''}`}>
      <img src={logo} alt="Logo" />
      <div className="hamburger" onClick={handleToggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>

      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/projects" onClick={closeMenu}>Projects</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>

        <span className="theme-icon" onClick={handleThemeChange}>
          <div className="tooltip">
            {theme === 'light' ? (
              <svg
                className={`icon-svg ${animate ? 'animate-toggle' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21 12.79A9 9 0 0 1 11.21 3a7 7 0 1 0 9.79 9.79z" fill="currentColor" />
              </svg>
            ) : (
              <svg
                className={`icon-svg ${animate ? 'animate-toggle' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="5" fill="currentColor" />
                <g stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </g>
              </svg>
            )}
            {/* <span className="tooltip-text">
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </span> */}
          </div>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
