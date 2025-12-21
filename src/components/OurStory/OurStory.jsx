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
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;