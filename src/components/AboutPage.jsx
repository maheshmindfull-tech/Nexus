import React, { useEffect, useRef, useState } from 'react';
import { Pause, Play, Volume2, VolumeX } from 'lucide-react';
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
    subtitle: 'That Shapes Tomorrow',
    detail:
      'At Nexus Group, we envision spaces where people, progress and nature grow together. Our vision is to create thoughtfully planned homes and communities that make everyday living better, while respecting the environment they are a part of.',
    image: '/assets/about/value-vision.jpg?v=2',
    alt: 'Nexus Vision - The eye of foresight and human connection',
  },
  {
    title: 'Innovation',
    detail:
      'We embrace better ideas and smarter solutions to create spaces for evolving ways of living. Thoughtful architectural design, smart space planning, and modern construction practices shape every Nexus home.',
    image: '/assets/about/value-innovation.jpg?v=2',
    alt: 'Nexus Innovation - An engineer envisioning construction in progress',
  },
  {
    title: 'Integrity',
    detail:
      'We keep our commitments, act responsibly and do the right thing at every step. From the first customer conversation to the final title handover, we uphold the highest benchmarks of corporate governance, honest pricing, and ethical business practices.',
    image: '/assets/about/value-integrity.jpg?v=2',
    alt: 'Nexus Integrity - The golden key of trust and excellence',
  },
];

const LEADERS = [
  {
    name: 'Mr. Nareshkumar Patel',
    designation: 'Founder & Director',
    desc: '“Since 1996, our vision has been to build more than structures — to create lasting relationships rooted in trust.”',
    image: '/assets/about/naresh-patel.jpg',
  },
  {
    name: 'Mr. Satishkumar Patel',
    designation: 'Managing Director',
    desc: '“At Nexus Group, we believe in turning aspirations into meaningful spaces for people to live, grow, and prosper.”',
    image: '/assets/about/satish-patel.jpg',
  },
];


const PILLARS = [
  {
    title: 'Sustainable Living',
    desc: 'Incorporates eco-friendly materials, rainwater harvesting, solar power integration, and lush green landscapes for a healthier environment.',
    label: 'CONTINUITY',
    image: '/assets/about/pillars/pillar-01-continuity.jpg',
  },
  {
    title: 'Vastu Harmony',
    desc: 'Thoughtfully aligned spatial design that balances natural energy flow, cross-ventilation, and sunlight to create serene living spaces.',
    label: 'VASTU',
    image: '/assets/about/pillars/pillar-02-vastu.jpg',
  },
  {
    title: 'Precision Planning',
    desc: 'Masterfully engineered north-south architectural orientation for optimal climate control, natural shading, and enduring durability.',
    label: 'THE NORTH',
    image: '/assets/about/pillars/pillar-03-north.jpg',
  },
  {
    title: 'Elements of Nature',
    desc: 'Harmonizing earth, water, fire, air and space through landscaped podiums, open courtyards, and responsible green architecture.',
    label: 'ELEMENTS OF NATURE',
    image: '/assets/about/pillars/pillar-04-elements.jpg',
  },
  {
    title: 'Timeless Trust',
    desc: 'Three decades of unwavering integrity, crystal-clear legal documentation, and on-time delivery that stands the test of time.',
    label: 'INTEGRITY',
    image: '/assets/about/pillars/pillar-05-key.jpg',
  },
];

const STATS = [
  {
    value: '30',
    label: 'Years of Trust',
    sub: 'Excellence since 1996',
  },
  {
    value: '55 L+',
    label: 'Sq. Ft. Built',
    sub: 'Pimpri-Chinchwad, Pune and Nashik',
  },
  {
    value: '55+',
    label: 'Projects',
    sub: 'Residential & Commercial',
  },
  {
    value: '7.5K+',
    label: 'Happy Families',
    sub: 'Thriving Communities',
  },
];

const OFFICE_TOUR_PARTS = [
  '/assets/about/office-tour-1.mp4?v=2',
  '/assets/about/office-tour-2.mp4?v=2',
];
const OFFICE_TOUR_POSTER = '/assets/about/office-tour-poster.jpg';

/* ------------------------------------------------------------------ */
/*  About Page Component                                               */
/* ------------------------------------------------------------------ */
export default function AboutPage({
  onNavigateHome,
  onNavigateProjects,
  onNavigateCareers,
  onNavigateCPInquiry,
  onNavigateSkydale,
  onNavigateContact,
  onNavigateBlogs,
  onOpenEnquire,
}) {
  const [openAccordion, setOpenAccordion] = useState(0);
  const officeVideoRefs = useRef([]);
  const officeMediaRef = useRef(null);
  const [officeMuted, setOfficeMuted] = useState(true);
  const [officePaused, setOfficePaused] = useState(false);
  const [officePart, setOfficePart] = useState(0);
  const [officeStarted, setOfficeStarted] = useState(false);
  const [officeShouldLoad, setOfficeShouldLoad] = useState(false);

  // Defer video download until the tour section is approaching the viewport.
  useEffect(() => {
    const node = officeMediaRef.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === 'undefined') {
      setOfficeShouldLoad(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOfficeShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '400px 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!officeShouldLoad) return undefined;
    const activeVideo = officeVideoRefs.current[officePart];
    const inactiveVideo = officeVideoRefs.current[(officePart + 1) % OFFICE_TOUR_PARTS.length];

    if (inactiveVideo) {
      inactiveVideo.pause();
      inactiveVideo.muted = true;
    }

    if (!activeVideo) return undefined;
    activeVideo.muted = officeMuted;
    if (!officeMuted) activeVideo.volume = 1;

    if (officePaused) {
      activeVideo.pause();
      return undefined;
    }

    const tryPlay = () => activeVideo.play().catch(() => {});
    if (activeVideo.readyState >= 2) tryPlay();
    else activeVideo.addEventListener('loadeddata', tryPlay, { once: true });
    return () => activeVideo.removeEventListener('loadeddata', tryPlay);
  }, [officePart, officeMuted, officePaused, officeShouldLoad]);

  const toggleOfficeSound = () => {
    const nextMuted = !officeMuted;
    const activeVideo = officeVideoRefs.current[officePart];
    if (activeVideo) {
      activeVideo.muted = nextMuted;
      if (!nextMuted) {
        activeVideo.volume = 1;
        if (!officePaused) activeVideo.play().catch(() => {});
      }
    }
    setOfficeMuted(nextMuted);
  };

  const toggleOfficePlay = () => {
    const activeVideo = officeVideoRefs.current[officePart];
    if (!activeVideo) return;
    if (officePaused) {
      activeVideo.play().catch(() => {});
      setOfficePaused(false);
    } else {
      activeVideo.pause();
      setOfficePaused(true);
    }
  };

  const handleOfficeEnded = (idx) => {
    if (idx !== officePart) return;
    const nextPart = (idx + 1) % OFFICE_TOUR_PARTS.length;
    const nextVideo = officeVideoRefs.current[nextPart];
    const prevVideo = officeVideoRefs.current[idx];
    if (nextVideo) {
      nextVideo.currentTime = 0;
      nextVideo.muted = officeMuted;
      if (!officeMuted) nextVideo.volume = 1;
      nextVideo.play().catch(() => {});
    }
    setOfficePart(nextPart);
    if (prevVideo) {
      prevVideo.currentTime = 0;
    }
  };

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
            <div style={{ marginTop: '24px' }}>
              <a
                href="/pdfs/nexus-corporate-profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="about-profile-btn"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <span>Nexus Corporate Profile (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* ============================================================
            2. ABOUT NEXUS GROUP
            ============================================================ */}
        <section className="about-intro">
          <div className="wrap about-intro-grid">
            <div className="about-intro-media arch-frame">
              <img
                src="/images/about_nexus_monument.png"
                alt="Nexus Vision and Architectural Monument"
                className="about-intro-img"
                loading="lazy"
              />
              <div className="arch-caption-scrim" />
              <div className="arch-caption">
                Nexus Vision &amp; Architecture
              </div>
            </div>

            <div className="about-intro-copy">
              <Eyebrow>About us</Eyebrow>
              <h2 className="big about-intro-title">
                Building with purpose. <span>Growing with trust.</span>
              </h2>
              <p className="about-body">
                Nexus Group is a construction company which is independently owned and
                operated by family with ages of experience in building dream homes since
                30 years, and have established in the business.
              </p>
              <p className="about-body">
                Nexus, started by the seniors in the year 1996 on the grounds of quality,
                integrity &amp; a vision to give our society a futuristic and well planned
                eco-friendly township, with work across Pimpri-Chinchwad, Pune and Nashik.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================
            3. WHAT WE DO + STATS
            ============================================================ */}
        <section className="about-what">
          <div className="wrap about-what-grid">
            <div className="about-what-content">
              <Eyebrow>What we do</Eyebrow>
              <h2 className="big">
                We create spaces with purpose,{' '}
                <span>from the first plan to the final detail.</span>
              </h2>
              <p className="about-body">
                Across Pimpri-Chinchwad, Pune and Nashik, Nexus develops residential and
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
              {/* 2×2 stats - clean professional corporate cards */}
              <div className="about-stats-grid">
                {STATS.map((s) => (
                  <div key={s.label} className="about-stat-cell">
                    <div className="about-stat-content">
                      <b className="about-stat-value">{s.value}</b>
                      <span className="about-stat-label">{s.label}</span>
                      <small className="about-stat-sub">{s.sub}</small>
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
          <div className="wrap">
            <div className="about-values-header">
              <Eyebrow>OUR VALUE</Eyebrow>
              <h2 className="about-values-heading">
                <span className="about-values-bold">Built on honesty,</span>{' '}
                <span className="about-values-muted">guided by truth,</span>
                <br />
                <span className="about-values-muted">and devoted to</span>{' '}
                <span className="about-values-bold">genuine connection.</span>
              </h2>
            </div>

            <div className="about-values-content-grid">
              <div className="about-values-acc">
                {VALUES.map((val, idx) => {
                  const isOpen = openAccordion === idx;
                  return (
                    <div key={val.title} className={`about-values-item ${isOpen ? 'open' : ''}`}>
                      <button
                        type="button"
                        className={`about-values-btn ${isOpen ? 'active' : ''}`}
                        onClick={() => setOpenAccordion(idx)}
                        aria-expanded={isOpen}
                      >
                        {val.title}
                      </button>

                      <div className={`about-values-collapse ${isOpen ? 'open' : ''}`}>
                        <div className="about-values-collapse-inner">
                          <div className="about-values-body">
                            {val.subtitle && (
                              <h4 className="about-values-subtitle">{val.subtitle}</h4>
                            )}
                            {Array.isArray(val.detail) ? (
                              val.detail.map((p, i) => <p key={i}>{p}</p>)
                            ) : (
                              <p>{val.detail}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Single Showcase Image Column (1 image at a time) */}
              <div className="about-values-single-display">
                {VALUES.map((val, idx) => {
                  const isActive = (openAccordion >= 0 ? openAccordion : 0) === idx;
                  return (
                    <div
                      key={val.title}
                      className={`about-values-single-card arch-frame ${isActive ? 'active' : ''}`}
                      aria-hidden={!isActive}
                    >
                      <img
                        src={val.image}
                        alt={val.alt}
                        loading={idx === 0 ? 'eager' : 'lazy'}
                      />
                      <div className="arch-caption-scrim" />
                      <div className="arch-caption">
                        {val.title} - Built with Passion by NEXUS
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            5. OUR LEADERS
            ============================================================ */}
        <section className="about-leaders">
          <div className="wrap">
            <div className="about-leaders-header">
              <Eyebrow light>Our leadership</Eyebrow>
              <h2 className="big" style={{ color: '#fff' }}>
                Experience That Leads.{' '}
                <span style={{ color: 'rgba(255,255,255,0.55)' }}>Vision That Builds.</span>
              </h2>
              <p className="about-body" style={{ color: 'rgba(255,255,255,0.75)' }}>
                Leadership rooted in experience, guided by purpose, and focused
                on building the future of Nexus.
              </p>
            </div>

            <div className="about-leaders-grid">
              {LEADERS.map((person) => (
                <div key={person.name} className="about-leader-card">
                  {person.image && (
                    <img
                      src={person.image}
                      alt={person.name}
                      className="about-leader-img"
                      loading="lazy"
                    />
                  )}
                  <div className="about-leader-scrim" />
                  <div className="about-leader-info">
                    <b>{person.name}</b>
                    <span className="about-leader-designation">{person.designation}</span>
                    <p>{person.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            6. OUR PURPOSE / OUR TEAM (Pixel-Perfect Reference Format)
            ============================================================ */}
        <section className="about-team" id="our-team">
          {/* Top-Right Soft Fluid Mint Wave */}
          <svg
            className="about-team-bg-wave"
            viewBox="0 0 520 380"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M 140 0 C 180 120, 290 200, 370 230 C 440 255, 480 240, 520 260 L 520 0 Z"
              fill="#eaf1f1"
            />
          </svg>

          {/* SVG Clip Path for Row 1 Hero Photo: exact gentle top slope with 28px rounded corners */}
          <svg
            width="0"
            height="0"
            style={{ position: 'absolute', pointerEvents: 'none' }}
            aria-hidden="true"
          >
            <defs>
              <clipPath id="slantedHeroClip" clipPathUnits="objectBoundingBox">
                <path d="M 0,0.17419 A 0.02786,0.09032 0 0 1 0.02786,0.08387 L 0.97214,0 A 0.02786,0.09032 0 0 1 1,0.09032 L 1,0.90968 A 0.02786,0.09032 0 0 1 0.97214,1 L 0.02786,1 A 0.02786,0.09032 0 0 1 0,0.90968 Z" />
              </clipPath>
            </defs>
          </svg>

          <div className="wrap about-team-container">
            {/* Header: ABOUT US – | Our Purpose. | Subtitle + Top-Right PEOPLE/PROGRESS/COMMUNITY Badge */}
            <div className="about-team-header">
              <div className="about-team-header-main">
                <div className="about-team-eyebrow">
                  <span>Team</span>
                  <span className="about-team-eyebrow-line" aria-hidden="true" />
                </div>
                <h2 className="about-team-title">
                  The People Behind Nexus. <span>United by Passion &amp; Purpose.</span>
                </h2>
                <p className="about-team-intro">
                  At Nexus Group, we believe in building more than just spaces —<br />
                  we build people, communities and a better tomorrow.
                </p>
              </div>
            </div>

            {/* Row 1: Big Photo (left) + "Our Team" caption (right) */}
            <div className="about-team-row about-team-row-1">
              <div className="about-team-photo-wrap about-team-photo-hero">
                <img
                  src="/assets/about/team/team-01.jpg"
                  alt="Engineering Team — The Execution Unit"
                  className="about-team-img"
                  loading="lazy"
                />
                <div className="about-team-photo-label">
                  <span>The Execution Unit</span>
                  <strong>Engineering Team</strong>
                </div>
              </div>
              <div className="about-team-caption">
                <span className="about-team-dash" aria-hidden="true" />
                <h3 className="about-team-caption-title">Our Team</h3>
                <p className="about-team-caption-desc">
                  A passionate team<br />
                  working together<br />
                  to create lasting<br />
                  impact.
                </p>
              </div>
            </div>

            {/* Row 2: 2 Photos side-by-side (left) + "Together We Grow" caption (right) */}
            <div className="about-team-row about-team-row-2">
              <div className="about-team-photos-pair">
                <div className="about-team-photo-wrap about-team-photo-pair-1">
                  <img
                    src="/assets/about/team/team-03.jpg"
                    alt="Sales Team — The Experience Unit"
                    className="about-team-img"
                    loading="lazy"
                  />
                  <div className="about-team-photo-label">
                    <span>The Experience Unit</span>
                    <strong>Sales Team</strong>
                  </div>
                </div>
                <div className="about-team-photo-wrap about-team-photo-pair-2">
                  <img
                    src="/assets/about/team/team-04.jpg"
                    alt="Accounts Team — The Assurance Unit"
                    className="about-team-img"
                    loading="lazy"
                  />
                  <div className="about-team-photo-label">
                    <span>The Assurance Unit</span>
                    <strong>Accounts Team</strong>
                  </div>
                </div>
              </div>
              <div className="about-team-caption">
                <span className="about-team-dash" aria-hidden="true" />
                <h3 className="about-team-caption-title">
                  Together<br />We Grow
                </h3>
                <p className="about-team-caption-desc">
                  Diverse people.<br />
                  Shared values.<br />
                  One vision.
                </p>
              </div>
            </div>

            {/* Row 3: "Leadership with Vision" caption (left) + Wide photo of founders (right) */}
            <div className="about-team-row about-team-row-3">
              <div className="about-team-caption about-team-caption-left">
                <span className="about-team-dash" aria-hidden="true" />
                <h3 className="about-team-caption-title">
                  Leadership<br />with Vision
                </h3>
                <p className="about-team-caption-desc">
                  Guiding today,<br />
                  shaping tomorrow.
                </p>
              </div>
              <div className="about-team-photo-wrap about-team-photo-wide">
                <img
                  src="/assets/about/team/friendly-executive-conversation.png"
                  alt="Nexus Founders - Mr. Naresh Patel and Mr. Satish Patel"
                  className="about-team-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            7. CORPORATE OFFICE TOUR (CONTAINED SHOWCASE)
            ============================================================ */}
        <section className="about-tour" aria-label="Nexus Corporate Office Tour">
          <div className="wrap">
            <div className="about-tour-header">
              <Eyebrow>Inside Nexus</Eyebrow>
              <h2 className="big">
                Where vision takes shape.{' '}
                <span>Inside our corporate office.</span>
              </h2>
            </div>

            <div className="about-tour-stage" ref={officeMediaRef}>
              <img
                src={OFFICE_TOUR_POSTER}
                alt="Nexus Corporate Headquarters"
                className={`about-tour-media about-tour-poster${officeStarted ? ' is-hidden' : ''}`}
                loading="lazy"
                decoding="async"
              />
              {officeShouldLoad &&
                OFFICE_TOUR_PARTS.map((src, idx) => {
                  const isActive = officePart === idx;
                  return (
                    <video
                      key={src}
                      ref={(el) => {
                        officeVideoRefs.current[idx] = el;
                      }}
                      className={`about-tour-media about-tour-video${isActive && officeStarted ? ' is-active' : ''}`}
                      autoPlay={idx === 0}
                      muted={isActive ? officeMuted : true}
                      playsInline
                      preload={idx === 0 || officeStarted ? 'auto' : 'metadata'}
                      disablePictureInPicture
                      controls={false}
                      aria-hidden={!isActive}
                      onLoadedData={() => {
                        if (idx === 0) setOfficeStarted(true);
                      }}
                      onPlaying={() => {
                        if (isActive) setOfficeStarted(true);
                      }}
                      onEnded={() => handleOfficeEnded(idx)}
                    >
                      <source src={src} type="video/mp4" />
                    </video>
                  );
                })}

              <div className="about-tour-controls">
                <button
                  type="button"
                  className="about-tour-ctrl"
                  onClick={toggleOfficePlay}
                  aria-pressed={officePaused}
                  aria-label={officePaused ? 'Play office tour video' : 'Pause office tour video'}
                >
                  {officePaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                </button>
                <button
                  type="button"
                  className="about-tour-ctrl"
                  onClick={toggleOfficeSound}
                  aria-pressed={!officeMuted}
                  aria-label={officeMuted ? 'Turn sound on' : 'Turn sound off'}
                >
                  {officeMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            8. WHY CHOOSE NEXUS
            ============================================================ */}
        <section className="about-pillars">
          <div className="wrap">
            <div className="about-pillars-header">
              <Eyebrow>Why choose Nexus</Eyebrow>
              <h2 className="big" style={{ maxWidth: '24ch' }}>
                Driven by trust.{' '}
                <span>Defined by how we build.</span>
              </h2>
              <p className="about-body" style={{ marginTop: '12px' }}>
                Three decades of experience, thoughtful planning and a commitment
                to delivering spaces people can confidently call their own.
              </p>
            </div>

            {/* Top 5 Info Cards */}
            <div className="about-pillars-cards">
              {PILLARS.map((p) => (
                <div key={p.title} className="about-pillar-card">
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>

            {/* Bottom 5 Images in One Continuous Line Without Gap */}
            <div className="about-pillars-strip">
              {PILLARS.map((p) => (
                <div key={p.title} className="about-pillar-strip-item arch-frame">
                  <img
                    src={p.image}
                    alt={p.label || p.title}
                    loading="lazy"
                  />
                  <div className="arch-caption-scrim" />
                  <div className="arch-caption" style={{ fontSize: '10px', bottom: '8px', left: '10px' }}>
                    {p.label || p.title} • NEXUS
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ============================================================
          9. SHARED FOOTER (same component as home page)
          ============================================================ */}
      <Footer
        onNavigateAbout={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onNavigateHome={onNavigateHome}
        onNavigateProjects={onNavigateProjects}
        onNavigateCareers={onNavigateCareers}
        onNavigateCPInquiry={onNavigateCPInquiry}
        onNavigateSkydale={onNavigateSkydale}
        onNavigateContact={onNavigateContact}
        onNavigateBlogs={onNavigateBlogs}
        onOpenEnquire={onOpenEnquire}
      />
    </>
  );
}
