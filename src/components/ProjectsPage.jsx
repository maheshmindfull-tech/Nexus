import React, { useEffect, useMemo, useState } from 'react';
import { MapPin } from 'lucide-react';
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
    name: 'Nexus Kinaara',
    location: 'Jadhavwadi, Chikhali',
    type: 'Residential & Commercial',
    status: 'Ongoing',
    config: '2 & 3 BHK | 620 Flats | 3 Shops',
    image: '/assets/projects/profile/kinara.jpg',
    page: 'kinara',
    href: '/kinara',
  },
  {
    id: 'skydale',
    name: 'Nexus Skydale',
    location: 'Pandhare Wasti, Punawale',
    type: 'Residential & Commercial',
    status: 'Ongoing',
    config: '2, 3 & 4 BHK | 581 Flats | 62 Shops',
    image: '/assets/projects/profile/skydale.jpg',
    page: 'skydale',
    href: '/skydale',
  },
  {
    id: 'westia',
    name: 'Nexus Westia',
    location: 'Jambhe Road, Punawale',
    type: 'Residential & Commercial',
    status: 'Ongoing',
    config: '2 & 3 BHK | 86 Flats | 17 Shops',
    image: '/assets/projects/profile/westia.jpg',
    page: 'westia',
    href: '/westia',
  },
  {
    id: 'square',
    name: 'Nexus Prime Square',
    location: 'Borhadewadi, Moshi',
    type: 'Residential & Commercial',
    status: 'Ongoing',
    config: '2 & 3 BHK | 268 Flats | 56 Shops',
    image: '/assets/projects/profile/square.jpg',
    page: 'square',
    href: '/prime-square',
  },
  {
    id: 'genesis',
    name: 'Nexus Genesis',
    location: 'Kiwale, Pune',
    type: 'Residential & Commercial',
    status: 'Ongoing',
    config: '2, 3 & 4 BHK | 550 Flats | 5 Shops',
    image: '/assets/projects/profile/genesis.jpg',
    page: 'genesis',
    href: '/genesis',
  },
  {
    id: 'imperia',
    name: 'Nexus Imperia',
    location: 'Borhadewadi, Moshi',
    type: 'Residential',
    status: 'Ongoing',
    config: '2 & 3 BHK | 84 Flats',
    image: '/assets/projects/profile/imperia.jpg',
    page: 'imperia',
    href: '/imperia',
  },
  {
    id: 'atrium',
    name: 'Nexus Atrium',
    location: 'Borhadewadi, Moshi',
    type: 'Residential',
    status: 'Ongoing',
    config: '1, 2 & 3 BHK | 147 Flats',
    image: '/assets/projects/profile/atrium.jpg',
    page: 'atrium',
    href: '/atrium',
  },
  {
    id: 'gulmohar',
    name: 'Nexus Gulmohar',
    location: 'Charholi Budruk, Pune',
    type: 'Residential & Commercial',
    status: 'Completed',
    config: '840 Flats | 18 Shops',
    image: '/assets/projects/nexus-gulmohar.jpg',
  },
  {
    id: 'emerald',
    name: 'Nexus Emerald',
    location: 'Borhadewadi, Moshi, Pune',
    type: 'Residential',
    status: 'Completed',
    config: '112 Flats',
    image: '/assets/projects/nexus-emerald.jpg',
  },
  {
    id: 'shree-residency',
    name: 'Nexus Shree Residency',
    location: 'Jadhavwadi, Chikhali',
    type: 'Residential & Commercial',
    status: 'Completed',
    config: '382 Flats | 4 Shops',
    image: '/assets/projects/nexus-shree-residency.jpg',
  },
  {
    id: 'west-pride',
    name: 'Nexus West Pride',
    location: 'Tajanewasti, Punawale',
    type: 'Residential & Commercial',
    status: 'Completed',
    config: '186 Flats | 20 Shops',
    image: '/assets/projects/nexus-west-pride.jpg',
  },
  {
    id: 'shivom',
    name: 'Nexus Shivom',
    location: 'Mukai Chowk, Kiwale',
    type: 'Residential & Commercial',
    status: 'Completed',
    config: '166 Flats | 31 Shops',
    image: '/assets/projects/nexus-shivom.jpg',
  },
  {
    id: 'ultra-residency',
    name: 'Nexus Ultra Residency',
    location: 'Pradhikaran Annexe, Moshi',
    type: 'Residential',
    status: 'Completed',
    config: '110 Flats',
    image: '/assets/projects/nexus-ultra-residency.jpg',
  },
  {
    id: 'carnation',
    name: 'Nexus Carnation',
    location: 'Kalewadi, Pune',
    type: 'Residential & Commercial',
    status: 'Completed',
    config: '25 Flats | 25 Shops',
    image: '/assets/projects/nexus-carnation.jpg',
  },
  {
    id: 'nirvana-beyond',
    name: 'Nexus Nirvana Beyond',
    location: 'Ravet - Kiwale, Pune',
    type: 'Residential & Commercial',
    status: 'Completed',
    config: '450 Flats | 5 Shops',
    image: '/assets/projects/nexus-nirvana-beyond.jpg',
  },
  {
    id: 'shubhkalash',
    name: 'Nexus Shubhkalash',
    location: 'Chikhali, Pune',
    type: 'Residential',
    status: 'Completed',
    config: '332 Flats',
    image: '/assets/projects/nexus-shubhkalash.jpg',
  },
  {
    id: 'meridian',
    name: 'Nexus Meridian',
    location: 'Punawale, Pune',
    type: 'Residential & Commercial',
    status: 'Completed',
    config: '106 Flats | 15 Shops',
    image: '/assets/projects/nexus-meridian.jpg',
  },
  {
    id: 'glorious',
    name: 'Nexus Glorious',
    location: 'Sus Road, Pune',
    type: 'Residential',
    status: 'Completed',
    config: '56 Flats',
    image: '/assets/projects/nexus-glorious.jpg',
  },
  {
    id: 'paradise',
    name: 'Paradise',
    location: 'Dhanori, Pune',
    type: 'Residential',
    status: 'Completed',
    config: '107 Flats',
    image: '/assets/projects/nexus-paradise.jpg',
  },
  {
    id: 'panorama',
    name: 'Panorama',
    location: 'Datt Nagar, Dighi',
    type: 'Residential & Commercial',
    status: 'Completed',
    config: '280 Flats | 4 Shops',
    image: '/assets/projects/nexus-panorama.jpg',
  },
  {
    id: 'castellum',
    name: 'Castellum',
    location: 'Dighi, Pune',
    type: 'Residential',
    status: 'Completed',
    config: '71 Flats',
    image: '/assets/projects/nexus-castellum.jpg',
  },
  {
    id: 'govind-darshan',
    name: 'Govind Darshan',
    location: 'Sector 29, Ravet, Pune',
    type: 'Residential',
    status: 'Completed',
    config: '186 Flats',
    image: '/assets/projects/nexus-govind-darshan.jpg',
  },
  {
    id: 'bhalchandra-nagari',
    name: 'Bhalchandra Nagari',
    location: 'Ravet, Pune',
    type: 'Residential',
    status: 'Completed',
    config: '186 Flats',
    image: '/assets/projects/nexus-bhalchandra-nagari.jpg',
  },
  {
    id: 'indradhanu',
    name: 'Indradhanu',
    location: 'Jadhavwadi, Pune',
    type: 'Residential',
    status: 'Completed',
    config: '382 Flats',
    image: '/assets/projects/nexus-indradhanu.jpg',
  },
  {
    id: 'residency',
    name: 'Residency',
    location: 'Sector 20, Moshi, Pune',
    type: 'Residential',
    status: 'Completed',
    config: '78 Flats',
    image: '/assets/projects/nexus-residency.jpg',
  },
  {
    id: 'hermitage',
    name: 'Hermitage',
    location: 'Sector 18, Moshi, Pune',
    type: 'Residential & Commercial',
    status: 'Completed',
    config: '132 Flats | 20 Shops',
    image: '/assets/projects/nexus-hermitage.jpg',
  },
  {
    id: 'kinara-e-wing',
    name: 'Nexus Kinaara E Wing',
    location: 'Jadhavwadi, Chikhali, Pune',
    type: 'Residential & Commercial',
    status: 'Coming Soon',
    config: 'Spacious 3 BHK',
    image: '/assets/projects/coming-soon-card.jpg',
    page: 'kinara',
    href: '/kinara',
  },
  {
    id: 'atrium-d-wing',
    name: 'Nexus Atrium D Wing',
    location: 'Borhadewadi, Moshi',
    type: 'Residential',
    status: 'Coming Soon',
    config: 'Smart 2 & 3 BHK',
    image: '/assets/projects/coming-soon-card.jpg',
  },
  {
    id: 'nexus-supreme',
    codeName: true,
    name: 'Nexus Supreme',
    location: 'Borhadewadi, Moshi',
    type: 'Residential',
    status: 'Coming Soon',
    config: 'Premium 2 & 3 BHK',
    image: '/assets/projects/coming-soon-card.jpg',
  },
  {
    id: 'greens-punawale',
    codeName: true,
    name: 'Nexus Greens, Punawale',
    location: 'Punawale, PCMC',
    type: 'Residential & Commercial',
    status: 'Coming Soon',
    config: 'Luxury 2, 3 & 4 BHK',
    image: '/assets/projects/coming-soon-card.jpg',
  },
  {
    id: 'greens-moshi',
    codeName: true,
    name: 'Nexus Greens, Moshi',
    location: 'Moshi, PCMC',
    type: 'Residential & Commercial',
    status: 'Coming Soon',
    config: 'Luxury 2, 3 & 4 BHK',
    image: '/assets/projects/coming-soon-card.jpg',
  },
];

const PROJECT_LOGOS = {
  skydale: '/assets/projects/logos/skydale.png',
  kinara: '/assets/projects/logos/kinara.png',
  square: '/assets/projects/logos/square.png',
  atrium: '/assets/projects/logos/atrium.png',
  imperia: '/assets/projects/logos/imperia.png',
  genesis: '/assets/projects/logos/genesis.png',
  westia: '/assets/projects/logos/westia.png',
  gulmohar: '/assets/projects/logos/gulmohar.png',
  emerald: '/assets/projects/logos/emerald.png',
  'shree-residency': '/assets/projects/logos/shree-residency.png',
  'west-pride': '/assets/projects/logos/west-pride.png',
  shivom: '/assets/projects/logos/shivom.png',
  'ultra-residency': '/assets/projects/logos/ultra-residency.png',
  carnation: '/assets/projects/logos/carnation.png',
  'nirvana-beyond': '/assets/projects/logos/nirvana-beyond.png',
  shubhkalash: '/assets/projects/logos/shubhkalash.png',
  meridian: '/assets/projects/logos/meridian.png',
  glorious: '/assets/projects/logos/glorious.png',
  paradise: '/assets/projects/logos/paradise.png',
  panorama: '/assets/projects/logos/panorama.png',
  castellum: '/assets/projects/logos/castellum.png',
  'govind-darshan': '/assets/projects/logos/govind-darshan.png',
  'bhalchandra-nagari': '/assets/projects/logos/bhalchandra-nagari.png',
  indradhanu: '/assets/projects/logos/indradhanu.png',
  residency: '/assets/projects/logos/residency.png',
  hermitage: '/assets/projects/logos/hermitage.png',
};

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
  'Ongoing': '/assets/projects/Ongoing.webp',
  'Completed': '/assets/projects/Completed.webp',
  'Coming Soon': '/assets/projects/Comming-Soon.webp',
};

export default function ProjectsPage({
  onNavigateHome,
  onNavigateAbout,
  onNavigateProjects,
  onNavigateCareers,
  onNavigateCPInquiry,
  onNavigateSkydale,
  onNavigateContact,
  onNavigateBlogs,
  onNavigatePage,
  onOpenEnquire,
  onOpenProject,
  initialStatus = 'Ongoing',
}) {
  const [status, setStatus] = useState(initialStatus);
  const [loadedHeroes, setLoadedHeroes] = useState(() => new Set([initialStatus]));

  useEffect(() => {
    setStatus(initialStatus || 'Ongoing');
  }, [initialStatus]);

  useEffect(() => {
    setLoadedHeroes((prev) => {
      if (prev.has(status)) return prev;
      const next = new Set(prev);
      next.add(status);
      return next;
    });
  }, [status]);

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
        {Object.entries(HERO_BACKGROUNDS).map(([key, bg]) => (
          <div
            key={key}
            className={`pj-hero-bg-layer ${status === key ? 'active' : ''}`}
            style={loadedHeroes.has(key) ? { backgroundImage: `url(${bg})` } : undefined}
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

          {status === 'Coming Soon' && (
            <p className="pj-soon-banner">Coming Soon — Stay Tuned — Stay Connected</p>
          )}

          {filtered.length > 0 ? (
            <div className="pj-grid">
              {filtered.map((p) => (
                <article className={`pj-card${p.image ? '' : ' is-plain'}`} key={p.id}>
                  {p.image ? (
                    <div className="pj-card-media">
                      <img className="pj-card-photo" src={p.image} alt={p.name} loading="lazy" />
                      <span className={`pj-status-badge ${p.status.toLowerCase().replace(/\s+/g, '-')}`}>
                        <span className="pj-status-dot" aria-hidden="true" />
                        <span>{p.status}</span>
                      </span>
                    </div>
                  ) : null}
                  <div className="pj-card-body">
                    {!p.image && (
                      <span className={`pj-status-badge is-inline ${p.status.toLowerCase().replace(/\s+/g, '-')}`}>
                        <span className="pj-status-dot" aria-hidden="true" />
                        <span>{p.status}</span>
                      </span>
                    )}
                    <div className="pj-card-head">
                      <div className="pj-card-copy">
                        <div className="pj-card-type">{p.type}</div>
                        <h2 className="pj-card-name">
                          {p.codeName ? <span className="pj-code-name">Code Name </span> : null}
                          {p.name}
                        </h2>
                        <div className="pj-card-loc">
                          <MapPin size={14} strokeWidth={2} />
                          <span>{p.location}</span>
                        </div>
                      </div>
                      {PROJECT_LOGOS[p.id] && (
                        <span className="pj-card-logo">
                          <img src={PROJECT_LOGOS[p.id]} alt={`${p.name} logo`} />
                        </span>
                      )}
                    </div>
                    <div className="pj-card-foot">
                      <span className="pj-card-config">{p.config}</span>
                      {(p.status === 'Ongoing' || p.status === 'Coming Soon') && (
                        <div className="pj-card-actions">
                          {p.href ? (
                            <a
                              className="pj-btn pj-btn-learn"
                              href={p.href}
                              onClick={(event) => {
                                if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
                                event.preventDefault();
                                onOpenProject?.(p.page);
                              }}
                            >
                              Learn more
                            </a>
                          ) : (
                            <button
                              type="button"
                              className="pj-btn pj-btn-learn"
                              onClick={() => onOpenEnquire?.(p.name)}
                            >
                              Learn more
                            </button>
                          )}
                          <button
                            type="button"
                            className="pj-btn pj-btn-enquire"
                            onClick={() => onOpenEnquire?.(p.name)}
                          >
                            Enquire
                          </button>
                        </div>
                      )}
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
        onNavigateSkydale={onNavigateSkydale}
        onNavigateContact={onNavigateContact}
        onNavigateBlogs={onNavigateBlogs}
        onNavigatePage={onNavigatePage}
        onOpenEnquire={onOpenEnquire}
      />
    </>
  );
}
