import React, { useMemo, useState } from 'react';
import { MapPin } from 'lucide-react';
import Footer from './Footer';
import Typewriter from './Typewriter';
import { LANDING_PROJECTS } from './ProjectLandingPage';
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
    type: 'Residential & Commercial',
    status: 'Ongoing',
    config: '2 & 3 BHK | 620 Flats | 3 Shops',
    image: '/assets/projects/profile/kinara.jpg',
    landing: '/pdfs/nexus-kinara-brochure.pdf',
    pdf: '/pdfs/nexus-kinara-brochure.pdf',
  },
  {
    id: 'skydale',
    name: 'Nexus Skydale',
    location: 'Pandhare Wasti, Punawale',
    type: 'Residential & Commercial',
    status: 'Ongoing',
    config: '2, 3 & 4 BHK | 581 Flats | 62 Shops',
    image: '/assets/projects/profile/skydale.jpg',
    landing: '/skydale',
    pdf: '/pdfs/skydale-brouchure.pdf',
  },
  {
    id: 'westia',
    name: 'Nexus Westia',
    location: 'Jamhe Road, Punawale',
    type: 'Residential & Commercial',
    status: 'Ongoing',
    config: '2 & 3 BHK | 86 Flats | 17 Shops',
    image: '/assets/projects/profile/westia.jpg',
    landing: '/pdfs/nexus-westia-brochure.pdf',
    pdf: '/pdfs/nexus-westia-brochure.pdf',
  },
  {
    id: 'square',
    name: 'Nexus Prime Square',
    location: 'Borhadewadi, Moshi',
    type: 'Residential & Commercial',
    status: 'Ongoing',
    config: '2 & 3 BHK | 268 Flats | 56 Shops',
    image: '/assets/projects/profile/square.jpg',
  },
  {
    id: 'genesis',
    name: 'Nexus Genesis',
    location: 'Kiwale, Pune',
    type: 'Residential & Commercial',
    status: 'Ongoing',
    config: '2, 3 & 4 BHK | 550 Flats | 5 Shops',
    image: '/assets/projects/profile/genesis.jpg',
  },
  {
    id: 'imperia',
    name: 'Nexus Imperia',
    location: 'Borhadewadi, Moshi',
    type: 'Residential',
    status: 'Ongoing',
    config: '2 & 3 BHK | 84 Flats',
    image: '/assets/projects/profile/imperia.jpg',
  },
  {
    id: 'atrium',
    name: 'Nexus Atrium',
    location: 'Borhadewadi, Moshi',
    type: 'Residential',
    status: 'Ongoing',
    config: '1, 2 & 3 BHK | 147 Flats',
    image: '/assets/projects/profile/atrium.jpg',
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
    name: 'Nexus Paradise',
    location: 'Dhanori, Pune',
    type: 'Residential',
    status: 'Completed',
    config: '107 Flats',
    image: '/assets/projects/nexus-paradise.jpg',
  },
  {
    id: 'panorama',
    name: 'Nexus Panorama',
    location: 'Datt Nagar, Dighi',
    type: 'Residential & Commercial',
    status: 'Completed',
    config: '280 Flats | 4 Shops',
    image: '/assets/projects/nexus-panorama.jpg',
  },
  {
    id: 'castellum',
    name: 'Nexus Castellum',
    location: 'Dighi, Pune',
    type: 'Residential',
    status: 'Completed',
    config: '71 Flats',
    image: '/assets/projects/nexus-castellum.jpg',
  },
  {
    id: 'govind-darshan',
    name: 'Nexus Govind Darshan',
    location: 'Sector 29, Ravet, Pune',
    type: 'Residential',
    status: 'Completed',
    config: '186 Flats',
    image: '/assets/projects/nexus-govind-darshan.jpg',
  },
  {
    id: 'bhalchandra-nagari',
    name: 'Nexus Bhalchandra Nagari',
    location: 'Ravet, Pune',
    type: 'Residential',
    status: 'Completed',
    config: '186 Flats',
    image: '/assets/projects/nexus-bhalchandra-nagari.jpg',
  },
  {
    id: 'indradhanu',
    name: 'Nexus Indradhanu',
    location: 'Jadhavwadi, Pune',
    type: 'Residential',
    status: 'Completed',
    config: '382 Flats',
    image: '/assets/projects/nexus-indradhanu.jpg',
  },
  {
    id: 'residency',
    name: 'Nexus Residency',
    location: 'Sector 20, Moshi, Pune',
    type: 'Residential',
    status: 'Completed',
    config: '78 Flats',
    image: '/assets/projects/nexus-residency.jpg',
  },
  {
    id: 'hermitage',
    name: 'Nexus Hermitage',
    location: 'Sector 18, Moshi, Pune',
    type: 'Residential & Commercial',
    status: 'Completed',
    config: '132 Flats | 20 Shops',
    image: '/assets/projects/nexus-hermitage.jpg',
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
  onNavigateSkydale,
  onNavigateLanding,
  onNavigateContact,
  onNavigateBlogs,
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
                    <img className="pj-card-photo" src={p.image} alt={p.name} loading="lazy" />
                    <span className={`pj-status-badge ${p.status.toLowerCase().replace(/\s+/g, '-')}`}>
                      <span className="pj-status-dot" aria-hidden="true" />
                      <span>{p.status}</span>
                    </span>
                  </div>
                  <div className="pj-card-body">
                    <div className="pj-card-head">
                      <div className="pj-card-copy">
                        <div className="pj-card-type">{p.type}</div>
                        <h2 className="pj-card-name">{p.name}</h2>
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
                      <div className="pj-card-actions">
                        <button
                          type="button"
                          className="pj-brochure-btn"
                          onClick={
                            p.id === 'skydale'
                              ? onNavigateSkydale
                              : LANDING_PROJECTS[p.id] && onNavigateLanding
                                ? () => onNavigateLanding(p.id)
                                : onOpenEnquire
                          }
                          title={`Learn more about ${p.name}`}
                        >
                          Learn more
                        </button>
                        <button type="button" className="pj-card-cta" onClick={onOpenEnquire}>
                          Enquire
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
        onNavigateSkydale={onNavigateSkydale}
        onNavigateContact={onNavigateContact}
        onNavigateBlogs={onNavigateBlogs}
        onOpenEnquire={onOpenEnquire}
      />
    </>
  );
}
