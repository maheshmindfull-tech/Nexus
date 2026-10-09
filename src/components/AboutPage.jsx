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
    detail:
      'We are passionate about people, nature and aim to serve them with the best. It is our constant endeavor to bring about the human element in everything we do in an ecofriendly manner to make your life even better by pushing our own boundaries.',
    image: '/assets/about/value-vision.jpg',
    alt: 'Nexus Vision - The eye of foresight and human connection',
  },
  {
    title: 'Innovation',
    detail:
      'We embrace better ideas and smarter solutions to create spaces for evolving ways of living. Thoughtful architectural design, smart space planning, and modern construction practices shape every Nexus home.',
    image: '/assets/about/value-innovation.jpg',
    alt: 'Nexus Innovation - Modern architectural engineering',
  },
  {
    title: 'Integrity',
    detail:
      'We keep our commitments, act responsibly and do the right thing at every step. From the first customer conversation to the final title handover, we uphold the highest benchmarks of corporate governance, honest pricing, and ethical business practices.',
    image: '/assets/about/value-integrity.jpg',
    alt: 'Nexus Integrity - The golden key of trust and excellence',
  },
];

const LEADERS = [
  {
    name: 'Rajendra B. Patil',
    role: 'Founder & Chairman',
    desc: 'Founded Nexus in 1996 on the bedrock of uncompromising quality and ethical development. His visionary leadership has guided over 55 milestone projects across three decades.',
    image: '/assets/about/leader-01.jpg',
  },
  {
    name: 'Amit R. Patil',
    role: 'Managing Director',
    desc: 'Drives strategic expansion, modern architectural philosophies, and eco-friendly master planning, establishing Nexus as a benchmark brand across Pune and Nashik.',
    image: '/assets/about/leader-02.jpg',
  },
  {
    name: 'Sunil M. Kulkarni',
    role: 'Director – Projects & Engineering',
    desc: 'Brings 25+ years of structural precision, stringent on-site safety, and seamless execution to deliver every development with certainty and excellence.',
    image: '/assets/about/leader-03.jpg',
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
    sub: 'Across Pune & Nashik',
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
  onOpenEnquire,
}) {
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
                <span>Nexus Corporate Profile (PDF) ↗</span>
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
              />
              <div className="arch-caption-scrim" />
              <div className="arch-caption">
                Nexus Vision & Architecture • Built by NEXUS
              </div>
            </div>

            <div className="about-intro-copy">
              <Eyebrow>About Nexus Group</Eyebrow>
              <h2 className="big tracking-wider uppercase about-intro-title">
                PASSION AT WORK
              </h2>
              <p className="about-body">
                Nexus Group&apos;s penchant for perfection is reflected in every project,
                every decision and every innovation. This underlies our quest to deliver
                world-class quality and impeccable craftsmanship.
              </p>
              <p className="about-body">
                Our founders instilled in us this passion that transcends generations
                and boundaries. Our commitment to never compromise on quality has
                revolutionized the way the world perceives luxury and comfort in real estate.
              </p>
              <p className="about-body">
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
                    <div key={val.title} className="about-values-item">
                      <button
                        type="button"
                        className={`about-values-btn ${isOpen ? 'active' : ''}`}
                        onClick={() => setOpenAccordion(idx)}
                        aria-expanded={isOpen}
                      >
                        {val.title}
                      </button>

                      {isOpen && (
                        <div className="about-values-body">
                          <p>{val.detail}</p>
                        </div>
                      )}
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
                        {val.title} — Built with Passion by NEXUS
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
                  {person.image && (
                    <img
                      src={person.image}
                      alt={person.name}
                      className="about-leader-img"
                    />
                  )}
                  <div className="about-leader-scrim" />
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
          8. SHARED FOOTER (same component as home page)
          ============================================================ */}
      <Footer
        onNavigateAbout={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onNavigateHome={onNavigateHome}
        onNavigateProjects={onNavigateProjects}
        onNavigateCareers={onNavigateCareers}
        onNavigateCPInquiry={onNavigateCPInquiry}
        onNavigateSkydale={onNavigateSkydale}
        onNavigateContact={onNavigateContact}
        onOpenEnquire={onOpenEnquire}
      />
    </>
  );
}
