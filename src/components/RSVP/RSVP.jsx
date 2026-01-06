import React, { useState } from 'react';
import './RSVP.css';

const RSVP = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    title: '',
    fullName: '',
    phoneNumber: '',
    kingschatUsername: '',
    category: '',
    email: '',
    numberOfChildren: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // REPLACE THIS WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzRZWb1xBDdNcuuFCDZvhkyKYSKqeBoYcLLnRVYNXf0JOoCw-9O0a7g9HRFZLBxj81nkw/exec';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation for required fields
    if (!formData.title || !formData.fullName || !formData.phoneNumber || 
        !formData.category || !formData.email) {
      setErrorMessage('Please fill in all required fields marked with *');
      return;
    }
    
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      // Send data to Google Sheets
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString()
        })
      });
      
      // Trigger success animation
      onSuccess();
      
      // Show success message
      alert('Thank you for your response! You will receive a confirmation message if you are invited to the reception.');
      
      // Reset form
      setFormData({
        title: '',
        fullName: '',
        phoneNumber: '',
        kingschatUsername: '',
        category: '',
        email: '',
        numberOfChildren: ''
      });
      
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      setErrorMessage('There was an error submitting your response. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="rsvp" className="rsvp-modern">
        <div className="rsvp-container">
          {/* Header */}
          <div className="rsvp-header-section">
            <h1 className="rsvp-main-title">Rsvp</h1>
            <p className="rsvp-instruction">
              Please complete the fields below to submit your response. All required fields are marked with an asterisk (*).
            </p>
            <p className="rsvp-notice">
              Kindly note that completing this form does not confirm an invitation, as attendance at the reception 
              will be by confirmation message only. We sincerely appreciate your understanding.
            </p>
          </div>

          {/* Form */}
          <form className="rsvp-form-modern" onSubmit={handleSubmit}>
            {/* Title */}
            <div className="form-group-modern">
              <label className="form-label-modern">
                Title <span className="asterisk">*</span>
              </label>
              <div className="input-wrapper">
                <span className="input-icon dropdown-icon">▼</span>
                <select
                  name="title"
                  className="form-select-modern"
                  value={formData.title}
                  onChange={handleChange}
                  required
                >
                  <option value="">Please Select</option>
                  <option value="Pastor">Pastor</option>
                  <option value="Deacon">Deacon</option>
                  <option value="Deaconess">Deaconess</option>
                  <option value="Brother">Brother</option>
                  <option value="Sister">Sister</option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                </select>
              </div>
            </div>

            {/* Full Name */}
            <div className="form-group-modern">
              <label className="form-label-modern">
                Full Name <span className="asterisk">*</span>
              </label>
              <div className="input-wrapper">
                <span className="input-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </span>
                <input
                  type="text"
                  name="fullName"
                  className="form-input-modern"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="form-group-modern">
              <label className="form-label-modern">
                Phone Number <span className="asterisk">*</span>
              </label>
              <div className="input-wrapper">
                <span className="input-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                    <line x1="12" y1="18" x2="12" y2="18"/>
                  </svg>
                </span>
                <input
                  type="tel"
                  name="phoneNumber"
                  className="form-input-modern"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>

            {/* KingsChat Username */}
            <div className="form-group-modern">
              <label className="form-label-modern">
                KingsChat Username (example @ayanfeoluwami)
              </label>
              <div className="input-wrapper">
                <span className="input-icon">@</span>
                <input
                  type="text"
                  name="kingschatUsername"
                  className="form-input-modern"
                  value={formData.kingschatUsername}
                  onChange={handleChange}
                  placeholder="@username"
                />
              </div>
            </div>

            {/* Category */}
            <div className="form-group-modern">
              <label className="form-label-modern">
                Category <span className="asterisk">*</span>
              </label>
              <div className="input-wrapper">
                <span className="input-icon dropdown-icon">▼</span>
                <select
                  name="category"
                  className="form-select-modern"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Please Select</option>
                  <option value="Youth Church">Youth Church</option>
                  <option value="Phenom Church">Phenom Church</option>
                  <option value="Teens Church">Teens Church</option>
                  <option value="CELVZ LEADERS">CELVZ LEADERS</option>
                  <option value="Choir/LMAM">Choir/LMAM</option>
                  <option value="HQ Staff">HQ Staff</option>
                  <option value="CELVZ Staff">CELVZ Staff</option>
                  <option value="SMI">SMI</option>
                  <option value="Pastor's Aids">Pastor's Aids</option>
                  <option value="UI Alumni">UI Alumni</option>
                  <option value="Officials">Officials</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>

            {/* Email Address */}
            <div className="form-group-modern">
              <label className="form-label-modern">
                Email Address <span className="asterisk">*</span>
              </label>
              <div className="input-wrapper">
                <span className="input-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                <input
                  type="email"
                  name="email"
                  className="form-input-modern"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>

            {/* Number of Children */}
            <div className="form-group-modern">
              <label className="form-label-modern">
                Number of Children You're Coming With? (If Applicable)
              </label>
              <div className="input-wrapper">
                <span className="input-icon">#</span>
                <input
                  type="text"
                  name="numberOfChildren"
                  className="form-input-modern"
                  value={formData.numberOfChildren}
                  onChange={handleChange}
                  placeholder="Enter number or leave blank"
                />
              </div>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="error-message-modern">
                {errorMessage}
              </div>
            )}

            {/* Submit Button */}
            <button 
              type="submit" 
              className={`submit-btn-modern ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Response'}
            </button>
          </form>
        </div>
      </section>

      {/* Separate Gift Section */}
      <section id="gift-registry" className="gift-info-section">
        <div className="gift-info-container">
          <div className="gift-info-box">
            <p className="gift-text-primary orange-avenue-font" style={{ color: '#8B4513' }}>
              Your presence at our wedding is the greatest gift of all.
            </p>
            
            <p className="gift-text-secondary">
              However, if you wish to honor us with a gift, we sincerely appreciate 
              your thoughtfulness and kindly request that all gifts be converted into 
              monetary value. Kindly utilize the details provided below:
            </p>

            <div className="payment-info">
              <div className="payment-item">
                <span className="payment-title">ESPEES USER NAME:</span>
                <span className="payment-detail orange-avenue-font">@PERFECT2026</span>
              </div>

              <div className="payment-item">
                <span className="payment-title">PERFECT NAIRA ACCOUNT:</span>
                <div className="account-info">
                  <span className="account-number">2096105832</span>
                  <span className="bank-name">UBA</span>
                  <span className="account-holder">Ajunnu Favour</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RSVP;