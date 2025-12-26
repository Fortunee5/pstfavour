import React, { useState, useEffect } from 'react';
import './Navigation.css';

 import logoWhite from '../../assets/logoImage.png';
import logoDefault from '../../assets/logoImage.png';

const Navigation = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    handleScroll(); // Check initial position
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav className={`navigation ${scrolled ? 'scrolled' : ''} ${isAtTop ? 'at-top' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          {/* Option 1: Using different images for white/default */}
          { <img src={isAtTop ? logoWhite : logoDefault} alt="" /> }
          
          {/* Option 2: Using CSS filter to make logo white */}
         
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