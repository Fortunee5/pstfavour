import React, { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2026-01-17T00:00:00');
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown">
      <div className="container">
        <h2 className="countdown-title">Counting Up to Our Special Day</h2>
        <div className="countdown-boxes">
          <div className="countdown-box">
            <span className="countdown-number">{timeLeft.days || '0'}</span>
            <span className="countdown-label">Days</span>
          </div>
          <div className="countdown-box">
            <span className="countdown-number">{timeLeft.hours || '0'}</span>
            <span className="countdown-label">Hours</span>
          </div>
          <div className="countdown-box">
            <span className="countdown-number">{timeLeft.minutes || '0'}</span>
            <span className="countdown-label">Minutes</span>
          </div>
          <div className="countdown-box">
            <span className="countdown-number">{timeLeft.seconds || '0'}</span>
            <span className="countdown-label">Seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;