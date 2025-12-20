import React, { useState, useEffect } from 'react';
import './Gallery.css';
import img1 from '../../assets/photo26.jpg';
import img2 from '../../assets/photo25.jpg';
import img3 from '../../assets/photo33.jpg';
import img4 from '../../assets/photo29.jpg';
import img5 from '../../assets/photo8.jpg';
import img6 from '../../assets/photo17.jpg';
import img7 from '../../assets/photo9.jpg';
import img8 from '../../assets/photo24.jpg';
import img9 from '../../assets/photo18.jpg';
const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9 ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section-title">Our Gallery</h2>
        
        {isMobile ? (
          <div className="gallery-carousel">
            <div className="carousel-container">
              <div 
                className="carousel-track" 
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((image, index) => (
                  <div key={index} className="carousel-slide">
                    <img src={image} alt={`Gallery ${index + 1}`} />
                  </div>
                ))}
              </div>
              <button className="carousel-btn prev" onClick={prevSlide}>‹</button>
              <button className="carousel-btn next" onClick={nextSlide}>›</button>
            </div>
            <div className="carousel-dots">
              {images.map((_, index) => (
                <span 
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                ></span>
              ))}
            </div>
          </div>
        ) : (
          <div className="gallery-grid">
            {images.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image} alt={`Gallery ${index + 1}`} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;