import React from 'react';
import { ArrowRight } from 'lucide-react';

const STATS_LEFT = [
  { value: '30+', label: 'Years of Trust', sub: 'Excellence since 1996' },
  { value: '55 L+', label: 'Sq. Ft. Built', sub: 'Across Pune & Nashik' },
];

const STATS_RIGHT = [
  { value: '55+', label: 'Projects Delivered', sub: 'Residential & Commercial' },
  { value: '7.5K+', label: 'Happy Families', sub: 'Thriving Communities' },
];

export default function AboutStats({ onNavigateAbout }) {
  return (
    <section className="ah" id="about">
      <div className="wrap">
        <div className="ah-grid">
          <div className="ah-media arch-frame">
            <img
              src="/images/about_nexus_monument.png"
              alt="Nexus Vision and Architectural Monument"
              loading="lazy"
            />
            <div className="arch-caption-scrim" />
            <div className="arch-caption">
              Nexus Vision & Architecture • Built by NEXUS
            </div>
          </div>

          <div className="ah-copy">
            <div className="eyebrow">About us</div>
            <h2 className="big">
              Building with purpose. <span>Growing with trust.</span>
            </h2>
            <p className="ah-text">
              Nexus Group is a construction company which is independently owned and
              operated by family with ages of experience in building dream homes since
              30 years, and have established in the business.
            </p>
            <p className="ah-text">
              Nexus, started by the seniors in the year 1996 on the grounds of quality,
              integrity &amp; a vision to give our society a futuristic and well planned
              eco-friendly township. With 10 projects completed in Nashik. And 25+ in Pune.
            </p>
            {onNavigateAbout && (
              <button type="button" className="ah-link" onClick={onNavigateAbout}>
                <span>Read Our Full Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <div className="ah-stats-split">
          <div className="ah-stats-col">
            {STATS_LEFT.map((s) => (
              <div className="ah-stat-item" key={s.label}>
                <div className="ah-stat-header">
                  <span className="ah-stat-value">{s.value}</span>
                  <span className="ah-stat-label">{s.label}</span>
                </div>
                <div className="ah-stat-sub">{s.sub}</div>
              </div>
            ))}
          </div>

          <div className="ah-stats-divider" aria-hidden="true" />

          <div className="ah-stats-col">
            {STATS_RIGHT.map((s) => (
              <div className="ah-stat-item" key={s.label}>
                <div className="ah-stat-header">
                  <span className="ah-stat-value">{s.value}</span>
                  <span className="ah-stat-label">{s.label}</span>
                </div>
                <div className="ah-stat-sub">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
