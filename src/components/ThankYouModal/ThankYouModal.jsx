import React, { useEffect } from 'react';
import './ThankYouModal.css';

const ThankYouModal = ({ onClose }) => {
  useEffect(() => {
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-icon">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2 className="modal-title">Thank You!</h2>
        <p className="modal-message">
          Your RSVP has been received successfully.
        </p>
        <p className="modal-submessage">
          We can't wait to celebrate with you on our special day!
        </p>
        <div className="modal-details">
          <p className="modal-date">January 17, 2026</p>
          <p className="modal-location">The Grand Estate • Lagos, Nigeria</p>
        </div>
        <button className="modal-button" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

export default ThankYouModal;