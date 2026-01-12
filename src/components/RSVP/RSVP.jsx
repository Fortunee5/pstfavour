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