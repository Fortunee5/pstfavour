import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Countdown from './components/Countdown/Countdown';
import OurStory from './components/OurStory/OurStory';
import Gallery from './components/Gallery/Gallery';
import EventDetails from './components/EventDetails/EventDetails';
import RSVP from './components/RSVP/RSVP';
import Footer from './components/Footer/Footer';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';
import ThankYouModal from './components/ThankYouModal/ThankYouModal';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRSVPSuccess = () => {
    setShowThankYou(true);
  };

  const handleCloseThankYou = () => {
    setShowThankYou(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Navigation scrolled={scrolled} />
      <Hero />
      <Countdown />
      <OurStory />
      <Gallery />
      <EventDetails />
      <RSVP onSuccess={handleRSVPSuccess} />
      <Footer />
      <ScrollProgress />
      {showThankYou && <ThankYouModal onClose={handleCloseThankYou} />}
    </div>
  );
}

export default App;