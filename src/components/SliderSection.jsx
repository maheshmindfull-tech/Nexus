import React, { useEffect, useState } from 'react';

const SLIDES = [
  '/assets/home/slide-01.webp',
  '/assets/home/slide-02.webp',
  '/assets/home/slide-03.jpg',
  '/assets/home/slide-04.jpg',
  '/assets/home/slide-05.jpg',
  '/assets/home/slide-06.jpg',
];

const INTERVAL_MS = 5000;
const PREFETCH_LEAD_MS = 1000;

export default function SliderSection() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(() => new Set([0]));

  const ensureLoaded = (index) => {
    setLoaded((prev) => {
      if (prev.has(index)) return prev;
      const next = new Set(prev);
      next.add(index);
      return next;
    });
  };

  useEffect(() => {
    const upcoming = (current + 1) % SLIDES.length;
    const prefetch = window.setTimeout(() => ensureLoaded(upcoming), INTERVAL_MS - PREFETCH_LEAD_MS);
    const advance = window.setTimeout(() => {
      setCurrent(upcoming);
    }, INTERVAL_MS);
    return () => {
      window.clearTimeout(prefetch);
      window.clearTimeout(advance);
    };
  }, [current]);

  const show = (index) => {
    const next = (index + SLIDES.length) % SLIDES.length;
    ensureLoaded(next);
    setCurrent(next);
  };

  return (
    <section id="featured">
      <div className="slider-wrapper">
        <div className="slider">
          {SLIDES.map((img, idx) => (
            <div
              key={img}
              className={`s ${idx === current ? 'on' : ''}`}
              style={loaded.has(idx) ? { backgroundImage: `url(${img})` } : undefined}
            />
          ))}

          <button
            type="button"
            className="slider-arrow prev"
            onClick={() => show(current - 1)}
            aria-label="Previous slide"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            className="slider-arrow next"
            onClick={() => show(current + 1)}
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
