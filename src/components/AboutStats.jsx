import React from 'react';
import { ArrowRight } from 'lucide-react';

const HIGHLIGHTS = [
  { value: '30', label: 'Years of Trust', sub: 'Excellence since 1996' },
  { value: '55 L+', label: 'Sq. Ft. Built', sub: 'Across Pune & Nashik' },
  { value: '55+', label: 'Projects', sub: 'Residential & Commercial' },
  { value: '7.5K+', label: 'Happy Families', sub: 'Thriving Communities' },
];

export default function AboutStats({ onNavigateAbout }) {
  return (
    <section className="ah" id="about">
      <div className="wrap">
        <div className="ah-grid">
          <div className="ah-copy">
            <div className="eyebrow">About Nexus</div>
            <h2 className="big">
              Three decades of building <span>with purpose and trust.</span>
            </h2>
            <p className="ah-text">
              Nexus Group is a family-led construction and real estate group that
              began its journey in 1996, built on the foundations of quality,
              integrity and a vision for thoughtfully planned spaces.
            </p>
            <p className="ah-text">
              Across Pune and Nashik, we have developed residential and
              commercial communities that bring together thoughtful planning,
              quality construction and lasting value.
            </p>
            {onNavigateAbout && (
              <button type="button" className="ah-link" onClick={onNavigateAbout}>
                <span>Read Our Full Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="ah-media">
            <img
              src="/images/about_sunset_skyline.jpg"
              alt="Nexus developments against the Pune skyline"
              loading="lazy"
            />
            <div className="ah-badge">
              <strong>1996</strong>
              <span>Established</span>
            </div>
          </div>
        </div>

        <div className="ah-stats">
          {HIGHLIGHTS.map((s) => (
            <div className="ah-stat" key={s.label}>
              <div className="ah-stat-value">{s.value}</div>
              <div className="ah-stat-label">{s.label}</div>
              <div className="ah-stat-sub">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
