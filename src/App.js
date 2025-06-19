import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import FloatingWhatsApp from './components/FloatingWhatspp/FloatingWhatspp';
//import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';


function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const lineColor = theme === 'dark' ? '#444' : '#bcd4ff'; // soft pastel for light mode
    const bgColor = theme === 'dark' ? '#101010' : '#f0f8ff';

    const gridSVG = encodeURIComponent(`
    <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" fill="none"/>
      <rect x="0" y="0" width="1" height="40" fill="${lineColor}"/>
      <rect x="0" y="0" width="40" height="1" fill="${lineColor}"/>
    </svg>
  `);

    document.body.style.backgroundImage = `url("data:image/svg+xml,${gridSVG}")`;
    document.body.style.backgroundColor = bgColor;
    document.body.style.backgroundSize = '80px 80px';
  }, [theme]);

  return (
    <Router>
      {/* <ParticlesBackground theme={theme} /> */}
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ToastContainer position="top-center" autoClose={3000} />
    </Router>
  );
}

export default App;
