import React from 'react';

const PRINCIPLES = [
  {
    title: 'TRANSPARENCY',
    image: '/images/principles/1.jpg',
  },
  {
    title: 'INTEGRITY',
    image: '/images/principles/2.jpg',
  },
  {
    title: 'RESPONSIBILITY',
    image: '/images/principles/3.jpg',
  },
  {
    title: 'PLANNING',
    image: '/images/principles/4.jpg',
  },
  {
    title: 'TRUST',
    image: '/images/principles/trust_clean.jpg?v=3',
  },
];

export default function Principles() {
  return (
    <section className="princ py-16 lg:py-24 bg-white" id="principles">
      <div className="wrap max-w-[1360px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="eyebrow flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1f1f1f] mb-3">
          Nexus principles
        </div>
        <div className="mb-14 sm:mb-20">
          <h2 className="big text-3xl sm:text-4xl lg:text-[48px] font-semibold leading-[1.18] tracking-tight text-[#1f1f1f] max-w-4xl">
            Driven by{' '}
            <span className="text-[#8a8a8a] font-normal">
              trust, quality, innovation, and a commitment
            </span>{' '}
            to excellence.
          </h2>
          <br />
        </div>

        {/* 5 Principles Cards Grid - Clean Images & Centered Bottom Heading Only */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {PRINCIPLES.map((item) => (
            <div
              key={item.title}
              className="group relative w-full aspect-[1/1.45] rounded-2xl overflow-hidden bg-[#0c081e] shadow-[0_12px_28px_rgba(12,8,30,0.18)] hover:shadow-[0_22px_45px_rgba(0,151,167,0.25)] hover:border-[#0097a7]/40 border border-white/10 transition-all duration-500 hover:-translate-y-2 select-none"
            >
              {/* Full Card Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Bottom Gradient Fade with Centered Heading */}
              <div className="absolute inset-x-0 bottom-0 pt-20 pb-6 px-4 bg-gradient-to-t from-[#0c081e] via-[#0c081e]/75 to-transparent flex items-end justify-center">
                <div className="text-[15px] sm:text-[16px] lg:text-[17px] font-black uppercase tracking-[0.15em] principle-gradient-title text-center">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
