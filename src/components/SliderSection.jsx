import React, { useState, useEffect } from 'react';

export default function SliderSection() {
  const slides = [
    '/assets/home/slide-skydale-e-wing.jpg',
    '/assets/home/slide-nexus-kinara.jpg',
    '/assets/home/slide-nexus-prime-square.jpg',
    '/assets/home/slide-nexus-westia.jpg',
    '/assets/home/slide-nexus-genesis.jpg',
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="featured">
      <div className="slider">
        {slides.map((img, idx) => (
          <div
            key={idx}
            className={`s ${idx === current ? 'on' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>
      <div className="dots">
        {slides.map((_, idx) => (
          <i
            key={idx}
            className={idx === current ? 'on' : ''}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </section>
  );
}
