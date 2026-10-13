import React, { useState } from 'react';

const PRINCIPLES_DATA = [
  {
    id: 'transparency',
    name: 'Transparency',
    tag: '01 — TRANSPARENCY',
    headline: 'Clarity That Builds Confidence',
    story: [
      'At Nexus Group, we believe trust begins with transparency. From the first conversation to the final handover, we believe in keeping every process clear, every commitment honest and every detail accounted for.',
      'With a straightforward approach to planning, communication and execution, we ensure that our customers have clarity at every step of their journey with us.',
      'Because a home is one of life’s biggest decisions, and confidence should never come with conditions.',
    ],
    image: '/images/principles/1.jpg',
    alt: 'Transparency - Nexus Group',
  },
  {
    id: 'integrity',
    name: 'Integrity',
    tag: '02 — INTEGRITY',
    headline: 'Built on What We Believe In.',
    story: [
      'For Nexus Group, integrity means doing the right thing - consistently, responsibly and with the same commitment behind every project.',
      'For over three decades, we have believed that the strength of a home goes beyond its structure. It lies in the quality of what goes into it, the promises behind it and the relationships that continue long after possession.',
      'Our commitment to quality, clear processes and responsible practices is what allows us to build with confidence - and earn it in return.',
    ],
    image: '/images/principles/2.jpg',
    alt: 'Integrity - Nexus Group',
  },
  {
    id: 'responsibility',
    name: 'Responsibility',
    tag: '03 — RESPONSIBILITY',
    headline: 'Building Responsibly. Preserving Naturally.',
    story: [
      'Every space we create becomes a part of the larger environment around it. That makes responsible development more than a choice — it is a responsibility we carry with every project.',
      'At Nexus Group, we strive to bring this thinking into the way we plan and develop our spaces - with thoughtful design, eco-friendly practices, green landscapes and communities that are designed to remain relevant for generations.',
      'Because building for the future also means being mindful of the world we leave behind.',
    ],
    image: '/images/principles/3.jpg',
    alt: 'Responsibility - Nexus Group',
  },
  {
    id: 'planning',
    name: 'Planning',
    tag: '04 — PLANNING',
    headline: 'Every Landmark Begins With a Plan.',
    story: [
      'At Nexus Group, we believe good spaces begin long before the first brick is laid. They begin with thoughtful planning.',
      'Our architects, engineers and expert teams bring together design, functionality, structure and sustainability to create spaces that are considered from every angle.',
      'From the larger vision to the smallest detail, every decision is planned with purpose - because when every element works together, a space becomes more than a structure. It becomes a place to belong.',
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

            {/* Lead Statement (if provided) */}
            {current.lead && <p className="princ-lead">{current.lead}</p>}

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
