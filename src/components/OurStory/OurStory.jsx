import React from 'react';
import './OurStory.css';
import img from '../../assets/photo11.jpg';
const OurStory = () => {
  return (
    <section id="story" className="our-story">
      <div className="container">
        <h2 className="section-title">Our Love Story</h2>
        <div className="story-content">
          <div className="story-image">
            <img 
              src={img}
              alt="Couple"
            />
          </div>
          <div className="story-text">
            <h3>How We Met</h3>
            <p>
              It all began on a beautiful spring day in 2020 when our paths crossed at a 
              mutual friend's garden party. What started as a casual conversation about 
              travel and literature turned into hours of deep connection and laughter.
            </p>
            <p>
              Five years later, after countless adventures, shared dreams, and unwavering 
              support for each other, we're ready to begin the next chapter of our journey 
              together as husband and wife.
            </p>
            <p>
              We can't wait to celebrate this special day with all of our beloved family 
              and friends who have been part of our story.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;