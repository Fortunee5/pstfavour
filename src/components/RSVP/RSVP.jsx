import React, { useState } from 'react';
import './RSVP.css';

const RSVP = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    attendance: 'yes',
    guests: '1',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // REPLACE THIS WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyoheL6tIjCYIVORQ7J3B3iJLevlh02ACERPDqLvkrFE2aQVqH8JKNsBjVDWzEDnuLi/exec';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrorMessage(''); // Clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      // Send data to Google Sheets
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      // Since mode is 'no-cors', we won't get a readable response
      // But if the request completes without error, we assume success
      
      // Trigger success animation
      onSuccess();
      
      // Show success message
      alert('Thank you for your RSVP! We look forward to celebrating with you!');
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        attendance: 'yes',
        guests: '1',
        message: ''
      });
      
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      setErrorMessage('There was an error submitting your RSVP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className="rsvp">
      <div className="container">
        <h2 className="section-title">RSVP</h2>
        <p className="rsvp-subtitle">Please let us know if you'll be celebrating with us</p>
        
        <form className="rsvp-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="attendance">Will you be attending? *</label>
            <select
              id="attendance"
              name="attendance"
              value={formData.attendance}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            >
              <option value="yes">Yes, I'll be there</option>
              <option value="no">Sorry, can't make it</option>
            </select>
          </div>
          
          {formData.attendance === 'yes' && (
            <div className="form-group">
              <label htmlFor="guests">Number of Guests *</label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="message">Special Message (Optional)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Share your wishes or any dietary requirements..."
              disabled={isSubmitting}
            />
          </div>
          
          {errorMessage && (
            <div className="error-message">
              {errorMessage}
            </div>
          )}
          
          <button 
            type="submit" 
            className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send RSVP'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default RSVP;