import React, { useState } from 'react';
import './Navigation.css';
import logoImage from '../../assets/logoImage.png';

const Navigation = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          
          <img src={logoImage} alt="" /> 
        
        </div>
        
        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a onClick={() => scrollToSection('home')}>Home</a>
          <a onClick={() => scrollToSection('story')}>Our Story</a>
          <a onClick={() => scrollToSection('gallery')}>Gallery</a>
          <a onClick={() => scrollToSection('details')}>Details</a>
          <a onClick={() => scrollToSection('rsvp')}>RSVP</a>
        </div>

        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;