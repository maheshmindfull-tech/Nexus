import React, { useMemo, useState } from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import Footer from './Footer';
import Typewriter from './Typewriter';
import '../projects.css';

const PROJECT_HERO_PHRASES = [
  'Thoughtfully designed for modern living.',
  'Landmarks crafted for generations.',
  'Shaping vibrant communities across Pune.',
];

/* NOTE: status / type / config values are editable placeholders. */
const PROJECTS = [
  {
    id: 'kinara',
    name: 'Nexus Kinara',
    location: 'Jadhavwadi, Chikhali',
    type: 'Residential',
    status: 'Ongoing',
    config: '2 & 3 BHK Residences',
    image: '/assets/projects/nexus-kinara.jpg',
    pdf: '/pdfs/nexus-kinara-brochure.pdf',
  },
  {
    id: 'skydale',
    name: 'Nexus Skydale',
    location: 'Tajanewasti, Punawale',
    type: 'Residential',
    status: 'Ongoing',
    config: '2 & 3 BHK Residences',
    image: '/assets/projects/nexus-skydale.jpg',
    landing: '/#skydale',
    pdf: '/pdfs/skydale-brouchure.pdf',
  },
  {
    id: 'westia',
    name: 'Nexus Westia',
    location: 'Punawale, Pune',
    type: 'Residential',
    status: 'Ongoing',
    config: '1, 2 & 3 BHK Residences',
    image: '/assets/projects/nexus-westia.jpg',
    pdf: '/pdfs/nexus-westia-brochure.pdf',
  },
  {
    id: 'square',
    name: 'Nexus Square',
    location: 'Punawale, Pune',
    type: 'Commercial',
    status: 'Ongoing',
    config: 'Shops & Offices',
    image: '/assets/projects/nexus-square.jpg',
  },
  {
    id: 'atrium',
    name: 'Nexus Atrium',
    location: 'Borhadewadi, Moshi',
    type: 'Commercial',
    status: 'Completed',
    config: 'Shops & Offices',
    image: '/assets/projects/nexus-atrium.jpg',
  },
  {
    id: 'imperia',
    name: 'Nexus Imperia',
    location: 'Borhadewadi, Moshi',
    type: 'Residential',
    status: 'Completed',
    config: '1 & 2 BHK Residences',
    image: '/assets/projects/nexus-imperia.jpg',
  },
  {
    id: 'genesis',
    name: 'Nexus Genesis',
    location: 'Kiwale, Pune',
    type: 'Residential',
    status: 'Completed',
    config: '1 & 2 BHK Residences',
    image: '/assets/projects/nexus-genesis.jpg',
  },
  {
    id: 'crown',
    name: 'Nexus Crown',
    location: 'Ravet / Kiwale, Pune',
    type: 'Residential',
    status: 'Coming Soon',
    config: 'Premium 2, 3 & 4 BHK Residences',
    image: '/assets/projects/coming-soon-project.png',
  },
];

const STATUS_OPTIONS = ['Ongoing', 'Completed', 'Coming Soon'];

function FilterGroup({ options, value, onChange }) {
  return (
    <div className="pj-filter-group" role="group" aria-label="Status filter">
      <div className="pj-segment">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            className={`pj-segment-btn ${value === opt ? 'active' : ''}`}
            aria-pressed={value === opt}
            onClick={() => onChange(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

const HERO_BACKGROUNDS = {
  'Ongoing': '/assets/projects/Ongoing.png',
  'Completed': '/assets/projects/Completed.png',
  'Coming Soon': '/assets/projects/Comming-Soon.png',
};

export default function ProjectsPage({
  onNavigateHome,
  onNavigateAbout,
  onNavigateProjects,
  onNavigateCareers,
  onNavigateCPInquiry,
  onOpenEnquire,
}) {
  const [status, setStatus] = useState('Ongoing');

  const filtered = useMemo(
    () =>
      PROJECTS.filter(
        (p) => !status || p.status === status
      ),
    [status]
  );

  const reset = () => {
    setStatus('Ongoing');
  };

  return (
    <>
      <header className="pj-hero" aria-label="Nexus Projects Showcase">
        <h1 className="sr-only">Nexus Pune Projects</h1>
        {Object.entries(HERO_BACKGROUNDS).map(([key, bg]) => (
          <div
            key={key}
            className={`pj-hero-bg-layer ${status === key ? 'active' : ''}`}
            style={{ backgroundImage: `url(${bg})` }}
          />
        ))}
      </header>

      <main className="pj-main">
        <div className="wrap">
          {/* Main filter bar synced with hero */}
          <div className="pj-toolbar">
            <div className="pj-filters">
              <FilterGroup options={STATUS_OPTIONS} value={status} onChange={setStatus} />
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className="pj-grid">
              {filtered.map((p) => (
                <article className="pj-card" key={p.id}>
                  <div className="pj-card-media">
                    <img src={p.image} alt={p.name} loading="lazy" />
                    <span className={`pj-status ${p.status.toLowerCase().replace(/\s+/g, '-')}`}>{p.status}</span>
                  </div>
                  <div className="pj-card-body">
                    <div className="pj-card-type">{p.type}</div>
                    <h2 className="pj-card-name">{p.name}</h2>
                    <div className="pj-card-loc">
                      <MapPin size={14} strokeWidth={2} />
                      <span>{p.location}</span>
                    </div>
                    <div className="pj-card-foot">
                      <span className="pj-card-config">{p.config}</span>
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        {p.landing ? (
                          <a
                            href={p.landing}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pj-brochure-btn"
                            title={`Open ${p.name} Landing Page`}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              fontSize: '12px',
                              fontWeight: 600,
                              color: '#c5a059',
                              textDecoration: 'none',
                              padding: '6px 10px',
                              borderRadius: '4px',
                              border: '1px solid rgba(197, 160, 89, 0.4)',
                              background: 'transparent',
                            }}
                          >
                            Landing Page ↗
                          </a>
                        ) : p.pdf ? (
                          <a
                            href={p.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pj-brochure-btn"
                            title={`View ${p.name} Brochure`}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              fontSize: '12px',
                              fontWeight: 600,
                              color: '#c5a059',
                              textDecoration: 'none',
                              padding: '6px 10px',
                              borderRadius: '4px',
                              border: '1px solid rgba(197, 160, 89, 0.4)',
                              background: 'transparent',
                            }}
                          >
                            Brochure ↗
                          </a>
                        ) : null}
                        <button type="button" className="pj-card-cta" onClick={onOpenEnquire}>
                          Enquire <ArrowUpRight size={15} strokeWidth={2.2} />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="pj-empty">
              <h3>No projects match your filters</h3>
              <p>Try a different combination to see more of our developments.</p>
              <button type="button" className="pj-reset-btn" onClick={reset}>
                Clear filters
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer
        onNavigateAbout={onNavigateAbout}
        onNavigateHome={onNavigateHome}
        onNavigateProjects={onNavigateProjects}
        onNavigateCareers={onNavigateCareers}
        onNavigateCPInquiry={onNavigateCPInquiry}
        onOpenEnquire={onOpenEnquire}
      />
    </>
  );
}
