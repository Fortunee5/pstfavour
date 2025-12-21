import React from 'react';
import './EventDetails.css';

const EventDetails = () => {
  const openMap = () => {
    const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Oregun+Ikeja+Lagos+Nigeria';
    window.open(mapUrl, '_blank');
  };

  return (
    <section id="details" className="event-details">
      <div className="container">
        <h2 className="section-title">Event Details</h2>
        <div className="details-grid">
          <div className="detail-card">
            <div className="detail-icon">
              <span className="icon-emoji">🎊</span>
            </div>
            <h3>Ceremony</h3>
            <p className="detail-time">4:00 PM</p>
            <p className="detail-location">The Grand Estate Gardens</p>
            <p className="detail-description">
              Join us as we exchange our vows in the beautiful garden surrounded by nature.
            </p>
          </div>
          
          <div className="detail-card">
            <div className="detail-icon">
              <span className="icon-emoji">🥂</span>
            </div>
            <h3>Cocktail Hour</h3>
            <p className="detail-time">5:00 PM</p>
            <p className="detail-location">Estate Terrace</p>
            <p className="detail-description">
              Enjoy cocktails and hors d'oeuvres while mingling with family and friends.
            </p>
          </div>
          
          <div className="detail-card">
            <div className="detail-icon">
              <span className="icon-emoji">🍽️</span>
            </div>
            <h3>Reception</h3>
            <p className="detail-time">6:30 PM</p>
            <p className="detail-location">Grand Ballroom</p>
            <p className="detail-description">
              Dinner, dancing, and celebration continue into the evening.
            </p>
          </div>
        </div>
        
        <div className="venue-info">
          <h3>Venue Location</h3>
          <p className="venue-name">The Grand Estate</p>
          <p className="venue-address">Oregun, Ikeja, Lagos, Nigeria</p>
          <button className="map-button" onClick={openMap}>View on Map</button>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;