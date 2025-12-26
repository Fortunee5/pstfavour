import React, { useState, useEffect } from 'react';
import './Hero.css';
import img1 from '../../assets/photo1.jpg';
import img3 from '../../assets/photo.jpg';
import img6 from '../../assets/photo10.jpg';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  // Listen for window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Different image arrays for mobile and desktop
  const desktopImages = [img1, img3, img6];
  const mobileImages = [img6]; // Only img6 for mobile
  
  // Select which images to use based on screen size
  const mosaicImages = isMobile ? mobileImages : desktopImages;

  return (
    <section id="home" className="hero">
      <div className={`hero-mosaic ${isMobile ? 'mobile-mosaic' : ''}`}>
        {mosaicImages.map((image, index) => (
          <div key={index} className="mosaic-cell">
            <img src={image} alt={`Wedding moment ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text fade-in">
          <h3 className="hero-subtitle">We're Getting Married</h3>
          <div className="hero-title-wrapper">
            <span className="hero-name">Pastor Oluwatosin Adetutu</span>
            <span className="hero-ampersand">&</span>
            <span className="hero-name">Pastor Favour NewMan</span>
          </div>
          <p className="hero-date">January 17, 2026</p>
          <p className="hero-location">Christ Embassy Cornerstone Church
LCA Car Park, Oregun, Ikeja, Lagos</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;