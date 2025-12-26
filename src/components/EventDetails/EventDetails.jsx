import React from 'react';
import './EventDetails.css';

const EventDetails = () => {
  const openMap = () => {
    const mapUrl = 'https://www.google.com/maps/place/Christ+Embassy+LCA+Car+Park/@6.6061802,3.3647096,17z/data=!3m1!4b1!4m6!3m5!1s0x103b924d99012707:0x8ff054e8edc393d3!8m2!3d6.6061749!4d3.3672845!16s%2Fg%2F11c2061dz1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D';
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
            <h3>Traditional Wedding</h3>
            <p className="detail-time">11:00am</p>
            <p className="detail-location">Thurs, Jan 15th, 2026</p>
            <p className="detail-description">
              Strictly by Invitation (venue will be communicated to invited guests).
            </p>
          </div>
          
          <div className="detail-card">
            <div className="detail-icon"> 
              <span className="icon-emoji">🥂</span>
            </div>
            <h3>Church Wedding</h3>
            <p className="detail-time">11:00am</p>
            <p className="detail-location">Sat, January 17th, 2026</p>
            <p className="detail-description">
             Join us as we exchange our vows before God, family, and friends.
            </p>
          </div>
          
          <div className="detail-card">
            <div className="detail-icon">
              <span className="icon-emoji">🍽️</span>
            </div>
            <h3>Reception</h3>
            <p className="detail-time">Follows Immediately</p>
            <p className="detail-location">After Wedding</p>
            <p className="detail-description">
              Strictly by Invitation (venue will be communicated to invited guests). 
            </p>
          </div>
        </div>
        
        <div className="venue-info">
          <h3>Church Venue</h3>
          <p className="venue-name">Christ Embassy Cornerstone Church</p>
          <p className="venue-address">LCA Car Park, No 33, Olanrewaju Street,
Off BillingsWay, Oregun, Ikeja, Lagos</p>
          <button className="map-button" onClick={openMap}>View on Map</button>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;