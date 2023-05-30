import React, { useState } from 'react';

const HeroSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="hero-slider">
      <div className="slider-images">
        {/* Add your three hero images here */}
        <img src="hero-slide-1.jpg" alt=" " className={activeSlide === 0 ? 'active' : ''} />
        <img src="hero-slide-2.jpg" alt=" " className={activeSlide === 1 ? 'active' : ''} />
        <img src="hero-slide-3.jpg" alt=" " className={activeSlide === 2 ? 'active' : ''} />
      </div>
      <div className="slider-dots">
        {/* Render navigation dots based on the number of slides */}
        {[0, 1, 2].map((index) => (
          <span
            key={index}
            className={activeSlide === index ? 'active' : ''}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;