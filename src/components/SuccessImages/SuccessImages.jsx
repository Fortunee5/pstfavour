import React from 'react';
import './SuccessImages.css';

const SuccessImages = () => {
  const images = [
    'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800',
    'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800',
    'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800',
    'https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=800'
  ];

  return (
    <section className="success-images">
      <div className="container">
        <h2 className="success-title">Thank You for Your RSVP!</h2>
        <p className="success-message">We're so excited to celebrate with you!</p>
        <div className="success-images-grid">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="success-image bounce-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img src={image} alt={`Celebration ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessImages;