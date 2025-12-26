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
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9 ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Prevent scrolling when modal is open
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Handle escape key
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImageInLightbox = (e) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImageInLightbox = (e) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
    setCurrentIndex(prevIndex);
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
                  <div 
                    key={index} 
                    className="carousel-slide"
                    onClick={() => openLightbox(image, index)}
                  >
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
              <div 
                key={index} 
                className="gallery-item"
                onClick={() => openLightbox(image, index)}
              >
                <img src={image} alt={`Gallery ${index + 1}`} />
                <div className="gallery-overlay">
                  <span className="view-icon">👁️ View</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>×</button>
          <button className="lightbox-nav prev" onClick={prevImageInLightbox}>‹</button>
          <button className="lightbox-nav next" onClick={nextImageInLightbox}>›</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Full view" />
            <div className="lightbox-counter">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;