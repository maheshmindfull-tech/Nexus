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
            <div className="eyebrow">About Nexus Group</div>
            <h2 className="big tracking-wider uppercase">
              PASSION AT WORK
            </h2>
            <p className="ah-text">
              Nexus Group&apos;s penchant for perfection is reflected in every project, every
              decision and every innovation. This underlies our quest to deliver
              world-class quality and impeccable craftsmanship.
            </p>
            <p className="ah-text">
              Founded in 1996, our leadership instilled in us this passion that
              transcends generations and boundaries. Our commitment to never compromise on
              quality has revolutionized the way homeowners perceive comfort and luxury in
              real estate.
            </p>
            <p className="ah-text">
              Our evolving portfolio speaks volumes—award-winning, iconic
              developments that have redefined skylines across{' '}
              <a href="#projects" className="text-link">Pune</a>,{' '}
              <a href="#projects" className="text-link">Punawale</a>,{' '}
              <a href="#projects" className="text-link">Chikhali</a>,{' '}
              <a href="#projects" className="text-link">Moshi</a>,{' '}
              <a href="#projects" className="text-link">Kiwale</a>, and{' '}
              <a href="#projects" className="text-link">Nashik</a>, with many more landmarks on the
              horizon.
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
