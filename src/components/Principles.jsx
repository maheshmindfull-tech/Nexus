import React, { useState } from 'react';

const PRINCIPLES_DATA = [
  {
    id: 'transparency',
    name: 'Transparency',
    tag: '01 — TRANSPARENCY',
    headline: 'Clarity That Builds Confidence',
    lead: 'Clear communication, honest commitments and straightforward processes at every step.',
    story: [
      'At Nexus Group, we believe trust begins with transparency. From the first conversation to the final handover, we keep every process clear, every commitment honest, and every detail accounted for.',
      'With a straightforward approach to planning and execution, our customers enjoy complete clarity at every step of their journey.',
    ],
    image: '/images/principles/1.jpg',
    alt: 'Transparency - Nexus Group',
  },
  {
    id: 'integrity',
    name: 'Integrity',
    tag: '02 — INTEGRITY',
    headline: 'Built on What We Believe In',
    lead: 'Doing the right thing, consistently, responsibly and with commitment.',
    story: [
      'Integrity is the bedrock of our legacy. Every material chosen, every structural pillar set, and every promise made is grounded in unwavering ethical practice.',
      'We hold ourselves accountable to benchmarks higher than compliance—ensuring lasting quality that endures across generations.',
    ],
    image: '/images/principles/2.jpg',
    alt: 'Integrity - Nexus Group',
  },
  {
    id: 'responsibility',
    name: 'Responsibility',
    nameFormatted: 'RESPONSIBILITY',
    tag: '03 — RESPONSIBILITY',
    headline: 'Building Responsibly. Preserving Naturally.',
    lead: 'Thoughtful development that respects people, communities and the environment.',
    story: [
      'True development moves hand in hand with environmental mindfulness. We integrate sustainable energy, rainwater management, and climate-responsive architecture into our master plans.',
      'Our developments prioritize open green spaces, native flora, and eco-friendly construction practices that protect the ecological balance.',
    ],
    image: '/images/principles/3.jpg',
    alt: 'Responsibility - Nexus Group',
  },
  {
    id: 'planning',
    name: 'Planning',
    tag: '04 — PLANNING',
    headline: 'Every Landmark Begins With a Plan.',
    lead: 'Every detail considered with purpose—from the larger vision to the smallest decision.',
    story: [
      'Excellence is never an accident; it is the outcome of meticulous forward-thinking. From spatial geometry to ventilation and access, we scrutinize every blueprint.',
      'Every square foot is engineered for everyday efficiency, modern ergonomics, and long-term peace of mind.',
    ],
    image: '/images/principles/4.jpg',
    alt: 'Planning - Nexus Group',
  },
];

export default function Principles() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = PRINCIPLES_DATA[activeIdx];

  return (
    <section className="princ" id="principles">
      <div className="wrap max-w-[1320px] mx-auto px-5 sm:px-8">
        {/* Section Eyebrow & Title */}
        <div className="eyebrow flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0097a7] mb-2">
          Nexus Principles
        </div>
        <div className="mb-6 sm:mb-8">
          <h2 className="big text-2xl sm:text-3xl lg:text-[34px] font-semibold leading-[1.22] tracking-tight text-[#1a1e24] max-w-3xl">
            Driven by{' '}
            <span className="text-[#64748b] font-normal">
              trust, quality, innovation, and a commitment
            </span>{' '}
            to excellence.
          </h2>
          <br />
        </div>

        {/* Interactive Principles Showcase: 4 Image Strips on Left + Content on Right */}
        <div className="princ-showcase">
          {/* Left Column: 4 Continuous Vertical Strips with gap 0 and NO numbers */}
          <div className="princ-strips" role="tablist" aria-label="Nexus Principles">
            {PRINCIPLES_DATA.map((item, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`princ-tab-${item.id}`}
                  aria-controls={`princ-panel-${item.id}`}
                  aria-selected={isActive}
                  tabIndex={0}
                  onClick={() => setActiveIdx(idx)}
                  className={`princ-strip ${isActive ? 'active' : ''}`}
                  title={item.name}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="princ-strip-img"
                    loading="eager"
                    decoding="async"
                    width="640"
                    height="880"
                  />
                  <div className="princ-strip-overlay" />
                </button>
              );
            })}
          </div>

          {/* Right Column: Clean Standard Professional Typography Top-Anchored */}
          <div
            className="princ-detail-panel"
            key={current.id}
            role="tabpanel"
            id={`princ-panel-${current.id}`}
            aria-labelledby={`princ-tab-${current.id}`}
          >
            {/* Standard Title */}
            <h3 className="princ-brand-title">
              {current.name}
            </h3>

            {/* Headline */}
            <h4 className="princ-headline">{current.headline}</h4>

            {/* Lead Statement */}
            <p className="princ-lead">{current.lead}</p>

            {/* Editorial Story Paragraphs */}
            <div className="princ-story-wrap">
              {current.story.map((para, i) => (
                <p key={i} className="princ-story-p">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
