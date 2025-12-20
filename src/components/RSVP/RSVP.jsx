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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `New RSVP Submission:\n\n` +
      `Name: ${formData.fullName}\n` +
      `Email: ${formData.email}\n` +
      `Attendance: ${formData.attendance === 'yes' ? 'Will Attend' : 'Cannot Attend'}\n` +
      `Number of Guests: ${formData.guests}\n` +
      `Message: ${formData.message || 'No message'}`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp URL
    const whatsappURL = `https://wa.me/2348144311841?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Trigger success animation
    onSuccess();
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      attendance: 'yes',
      guests: '1',
      message: ''
    });
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
            />
          </div>
          
          <button type="submit" className="submit-button">
            Send RSVP
          </button>
        </form>
      </div>
    </section>
  );
};

export default RSVP;