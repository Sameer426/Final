import React from 'react';
import logoImage from './assets/white_logo.png'; // Ensure the correct path to your logo
import './Footer.css'; // Import the updated CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
        <a href="/careers">Careers</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/disclaimer">Disclaimer</a>
      </div>
      <div className="footer-logo">
        <img src={logoImage} alt="Company Logo" />
      </div>
    </footer>
  );
};

export default Footer;
