import React from 'react';

export default function AmenitySpread({ items, subtitle, theme = 'navy' }) {
  return (
    <section className={`amenity-spread amenity-spread--${theme}`} aria-label="Lifestyle amenities">
      <h2 className="amenity-spread-heading">Lifestyle Amenities</h2>
      {subtitle && <p className="amenity-spread-sub">{subtitle}</p>}
      <div className="amenity-spread-grid">
        {items.map((a, i) => (
          <figure key={a.src} className={`amenity-spread-item${i === 0 ? ' is-lead' : ''}`}>
            <img src={a.src} alt={a.label} loading="lazy" />
            <figcaption>
              <span className="amenity-spread-index">{String(i + 1).padStart(2, '0')}</span>
              <span>{a.label}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
