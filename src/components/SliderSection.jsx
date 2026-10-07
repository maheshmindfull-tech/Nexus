import React, { useState, useEffect } from 'react';

export default function SliderSection() {
  const slides = [
    '/assets/home/skaydale.jpeg',
    '/assets/home/westia.jpeg',
    '/assets/home/prime-square.jpeg',
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="featured">
      <div className="slider-wrapper">
        <div className="slider">
          {slides.map((img, idx) => (
            <div
              key={idx}
              className={`s ${idx === current ? 'on' : ''}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}

          <button
            type="button"
            className="slider-arrow prev"
            onClick={handlePrev}
            aria-label="Previous slide"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            className="slider-arrow next"
            onClick={handleNext}
            aria-label="Next slide"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
