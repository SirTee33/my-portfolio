import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} All rights reserved. <strong>Crafted by Taiwo Ojo</strong></p>
    </footer>
  );
}

export default Footer;
