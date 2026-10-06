import React, { useState, useEffect } from 'react';
import Footer from './Footer';

/* ------------------------------------------------------------------ */
/*  Typewriter – types a phrase, pauses, backspaces, then moves on     */
/* ------------------------------------------------------------------ */
const HERO_PHRASES = [
  'Three decades of building with purpose.',
  'A legacy shaped by trust and quality.',
  'Thoughtfully planned spaces since 1996.',
];

function Typewriter({ phrases, typeMs = 70, deleteMs = 38, holdMs = 1900 }) {
  const [text, setText] = useState('');
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (reduced) return undefined;
    const full = phrases[idx];
    let delay = deleting ? deleteMs : typeMs;

    if (!deleting && text === full) delay = holdMs;
    if (deleting && text === '') delay = 350;

    const t = setTimeout(() => {
      if (!deleting && text === full) {
        setDeleting(true);
      } else if (deleting && text === '') {
        setDeleting(false);
        setIdx((idx + 1) % phrases.length);
      } else {
        setText(
          deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1)
        );
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, idx, phrases, typeMs, deleteMs, holdMs, reduced]);

  if (reduced) return <>{phrases[0]}</>;

  // Hidden longest phrase reserves height so the layout never jumps.
  const longest = phrases.reduce((a, b) => (b.length > a.length ? b : a), '');
  return (
    <span className="tw" aria-label={phrases[0]}>
      <span className="tw-ghost" aria-hidden="true">{longest}</span>
      <span className="tw-live" aria-hidden="true">
        {text}
        <span className="tw-caret" />
      </span>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Reusable section eyebrow – uses the global .eyebrow class          */
/* ------------------------------------------------------------------ */
function Eyebrow({ children, light }) {
  return (
    <div
      className="eyebrow"
      style={light ? { color: '#5fd6e2' } : undefined}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const VALUES = [
  {
    title: 'Vision',
    short:
      'We create thoughtfully planned spaces where people, progress and nature grow together.',
    detail:
      'It is our constant endeavor to bring about the human element in everything we do in an eco-friendly manner to make life even better by pushing our own boundaries. We strive to craft sustainable urban ecosystems that endure for generations.',
  },
  {
    title: 'Innovation',
    short:
      'We embrace better ideas and smarter solutions to create spaces for evolving ways of living.',
    detail:
      'Thoughtful architectural design, smart space planning, rainwater harvesting, solar integration, and modern construction practices shape every Nexus home. We leverage cutting-edge technology to maximize comfort, light, and ventilation.',
  },
  {
    title: 'Integrity',
    short:
      'We keep our commitments, act responsibly and do the right thing at every step.',
    detail:
      'From the first customer conversation to the final title handover, we uphold the highest benchmarks of corporate governance, honest pricing, and ethical business practices. Confidence should never come with conditions.',
  },
  {
    title: 'Transparency & Planning',
    short:
      'Clarity that builds confidence. Every detail accounted for, every process clear.',
    detail:
      'Because a home is one of life\u2019s most significant decisions, we maintain proactive communication, crystal-clear legal documentation, and rigorous project tracking, ensuring complete peace of mind for every homeowner.',
  },
];

const LEADERS = [
  {
    name: 'Rajendra B. Patil',
    role: 'Founder & Chairman',
    desc: 'Founded Nexus in 1996 on the bedrock of uncompromising quality and ethical development. His visionary leadership has guided over 55 milestone projects across three decades.',
  },
  {
    name: 'Amit R. Patil',
    role: 'Managing Director',
    desc: 'Drives strategic expansion, modern architectural philosophies, and eco-friendly master planning, establishing Nexus as a benchmark brand across Pune and Nashik.',
  },
  {
    name: 'Sunil M. Kulkarni',
    role: 'Director \u2013 Projects & Engineering',
    desc: 'Brings 25+ years of structural precision, stringent on-site safety, and seamless execution to deliver every development with certainty and excellence.',
  },
];

const WHY_CHOOSE = [
  {
    title: 'Value for All',
    desc: 'Thoughtfully planned spaces that bring together quality, functionality and lasting value.',
    d: 'M6 22 24 8l18 14v18H6z|M19 40V28h10v12',
  },
  {
    title: 'Corporate Social Responsibility',
    desc: 'Building responsibly with greater attention to people, communities and the environment.',
    d: 'M24 40C10 32 6 22 12 14c4-5 10-3 12 2 2-5 8-7 12-2 6 8 2 18-12 26z',
  },
  {
    title: 'Quality',
    desc: 'From materials to execution, we stay committed to quality in every detail.',
    d: 'circle:24:20:11|m18 30-4 12 10-5 10 5-4-12|m19 20 4 4 7-8',
  },
  {
    title: 'Safety',
    desc: 'Responsible planning and practices that put the safety of people and communities first.',
    d: 'M24 6 8 12v11c0 10 7 16 16 19 9-3 16-9 16-19V12z|m17 24 5 5 9-10',
  },
  {
    title: 'Timely Delivery',
    desc: 'Clear planning and committed execution to deliver with greater certainty.',
    d: 'circle:24:25:16|M24 14v11l7 5M19 6h10',
  },
];

function WhyIcon({ d }) {
  return (
    <svg
      viewBox="0 0 48 48"
      style={{
        width: 48,
        height: 48,
        stroke: 'var(--teal)',
        fill: 'none',
        strokeWidth: 1.6,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }}
    >
      {d.split('|').map((seg, i) => {
        if (seg.startsWith('circle:')) {
          const [, cx, cy, r] = seg.split(':');
          return <circle key={i} cx={cx} cy={cy} r={r} />;
        }
        return <path key={i} d={seg} />;
      })}
    </svg>
  );
}

const STATS = [
  {
    value: '30',
    label: 'Years of Trust',
    sub: 'Excellence since 1996',
    bg: '/images/hero_building.jpg',
    position: 'center 35%',
  },
  {
    value: '55 L+',
    label: 'Sq. Ft. Built',
    sub: 'Across Pune & Nashik',
    bg: '/images/about_sunset_skyline.jpg',
    position: 'center 40%',
  },
  {
    value: '55+',
    label: 'Projects',
    sub: 'Residential & Commercial',
    bg: '/images/project_skydale.jpg',
    position: 'center 45%',
    zoom: 1.2,
  },
  {
    value: '7.5K+',
    label: 'Happy Families',
    sub: 'Thriving Communities',
    bg: '/assets/home/family-arch-cta.jpg',
    position: 'center 48%',
  },
];

/* ------------------------------------------------------------------ */
/*  About Page Component                                               */
/* ------------------------------------------------------------------ */
export default function AboutPage({ onNavigateHome, onOpenEnquire }) {
  const [openAccordion, setOpenAccordion] = useState(0);

  return (
    <>
      {/* ============================================================
          1. HERO
          ============================================================ */}
      <header className="about-hero">
        <img
          src="/assets/about/about-hero-head-city.jpg"
          alt="Nexus arch framing a city skyline"
          className="about-hero-bg"
        />
        <div className="about-hero-overlay" />

        <div className="wrap about-hero-content">
          <div className="about-hero-copy">
            <div className="about-hero-kicker">About Nexus</div>
            <h1 className="about-hero-title">
              <Typewriter phrases={HERO_PHRASES} />
            </h1>
            <p className="about-hero-sub">
              A legacy shaped by trust, quality and vision.
            </p>
          </div>
        </div>
      </header>

      <main>
        {/* ============================================================
            2. ABOUT NEXUS GROUP
            ============================================================ */}
        <section className="about-intro">
          <div className="wrap about-intro-grid">
            <div className="about-logo-card">
              <img
                src="/assets/logo/nexus-logo.png"
                alt="Nexus Logo"
              />
            </div>

            <div>
              <Eyebrow>About Nexus Group</Eyebrow>
              <h2 className="big">
                Building with purpose.{' '}
                <span>Growing with trust.</span>
              </h2>
              <p className="about-body">
                Nexus Group is a family-led construction and real estate group
                that began its journey in 1996, built on the foundations of
                quality, integrity and a vision for thoughtfully planned spaces.
              </p>
              <p className="about-body">
                Over three decades, we have grown across Pune and Nashik,
                building residential and commercial developments that bring
                together thoughtful planning, quality construction and lasting
                value.
              </p>
              <p className="about-body">
                Since our inception, our portfolio encompasses millions of
                square feet developed across both residential and commercial
                sectors, shaping vibrant communities that stand the test of
                time.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================
            3. WHAT WE DO + STATS
            ============================================================ */}
        <section className="about-what">
          <div className="wrap about-what-grid">
            <div>
              <Eyebrow>What we do</Eyebrow>
              <h2 className="big" style={{ maxWidth: '18ch' }}>
                We create spaces with purpose,{' '}
                <span>from the first plan to the final detail.</span>
              </h2>
              <p className="about-body">
                Across Pune and Nashik, Nexus develops residential and
                commercial spaces shaped by thoughtful planning, quality
                construction and responsible design.
              </p>
              <p className="about-body">
                From residential communities to commercial developments, we
                bring together purposeful planning, quality construction and
                considered design to create spaces that work for the way people
                live and grow.
              </p>
              <p className="about-body">
                With three decades of construction experience, our work spans
                55+ projects and 55 lakh+ sq. ft. of built space. Every
                development is approached with attention to detail, responsible
                practices and a clear focus on long-term value.
              </p>
            </div>

            <div className="about-what-side">
            {/* 2×2 stats with contextual background images */}
            <div className="about-stats-grid">
              {STATS.map((s) => (
                <div key={s.label} className="about-stat-cell">
                  <img
                    src={s.bg}
                    alt=""
                    className="about-stat-bg"
                    style={{
                      objectPosition: s.position || 'center',
                      ...(s.zoom ? { scale: s.zoom } : {}),
                    }}
                  />
                  <div className="about-stat-overlay" />
                  <div className="about-stat-content">
                    <b>{s.value}</b>
                    <span>{s.label}</span>
                    <small>{s.sub}</small>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            4. OUR VALUES
            ============================================================ */}
        <section className="about-values">
          <div className="wrap about-values-grid">
            <div>
              <Eyebrow>Our values</Eyebrow>
              <h2 className="big" style={{ maxWidth: '22ch' }}>
                Vision, innovation and integrity{' '}
                <span>guide every build.</span>
              </h2>

              <div className="about-acc-list">
                {VALUES.map((val, idx) => {
                  const isOpen = openAccordion === idx;
                  return (
                    <div key={val.title} className="about-acc-item">
                      <button
                        className="about-acc-btn"
                        onClick={() => setOpenAccordion(isOpen ? -1 : idx)}
                      >
                        <span>{val.title}</span>
                        <span className={`about-acc-icon ${isOpen ? 'open' : ''}`}>+</span>
                      </button>

                      {isOpen && (
                        <div className="about-acc-body">
                          <p style={{ color: 'var(--ink)', fontWeight: 500 }}>
                            {val.short}
                          </p>
                          <p>{val.detail}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Image stack */}
            <div className="about-img-stack">
              <div className="about-img-wrap">
                <img
                  src="/assets/about/vision-team-model.jpg"
                  alt="Nexus team planning"
                />
              </div>
              <div className="about-img-row">
                <div className="about-img-wrap">
                  <img
                    src="/assets/about/team-03-window-landscape.jpg"
                    alt="Window onto a green valley"
                  />
                </div>
                <div className="about-img-wrap">
                  <img
                    src="/assets/about/team-01-key.jpg"
                    alt="Nexus key in warm light"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            5. OUR LEADERS
            ============================================================ */}
        <section className="about-leaders">
          <div className="wrap">
            <Eyebrow light>Our leaders</Eyebrow>
            <h2 className="big" style={{ color: '#fff' }}>
              Experience That Leads.{' '}
              <span style={{ color: 'rgba(255,255,255,0.55)' }}>Vision That Builds.</span>
            </h2>
            <p className="about-body" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Leadership rooted in experience, guided by purpose, and focused
              on building the future of Nexus.
            </p>

            <div className="about-leaders-grid">
              {LEADERS.map((person, i) => (
                <div key={person.name} className="about-leader-card">
                  <img
                    src="/assets/logo/nexus-logo-white.png"
                    alt=""
                    className="about-leader-watermark"
                  />
                  <div className="about-leader-info">
                    <small className="about-leader-tag">Leader 0{i + 1}</small>
                    <b>{person.name}</b>
                    <span>{person.role}</span>
                    <p>{person.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            6. WHY CHOOSE NEXUS
            ============================================================ */}
        <section className="about-why">
          <div className="wrap">
            <Eyebrow>Why choose Nexus</Eyebrow>
            <h2 className="big" style={{ maxWidth: '22ch' }}>
              Driven by trust.{' '}
              <span>Defined by how we build.</span>
            </h2>
            <p className="about-body">
              Three decades of experience, thoughtful planning and a commitment
              to delivering spaces people can confidently call their own.
            </p>

            <div className="about-why-grid">
              {WHY_CHOOSE.map((card) => (
                <div key={card.title} className="about-why-card">
                  <WhyIcon d={card.d} />
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ============================================================
          8. SHARED FOOTER (same component as home page)
          ============================================================ */}
      <Footer
        onNavigateAbout={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onNavigateHome={onNavigateHome}
        onOpenEnquire={onOpenEnquire}
      />
    </>
  );
}
