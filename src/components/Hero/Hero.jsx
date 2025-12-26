import React from 'react';
import './Hero.css';
import img1 from '../../assets/photo1.jpg';
import img3 from '../../assets/photo.jpg';
import img6 from '../../assets/photo10.jpg';

const Hero = () => {
  
  const mosaicImages = [img1, img3, img6  ];

  return (
    <section id="home" className="hero">
      <div className="hero-mosaic">
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
LCA Car Park, Oregun, Ikeja, Lagos</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;