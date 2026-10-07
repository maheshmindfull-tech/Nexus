import React, { useState } from 'react';

export default function ProjectsSection({ onViewAll }) {
  const projects = [
    {
      id: '1',
      name: 'Nexus Kinara',
      loc: 'Jadhavwadi, Chikhali',
      img: '/assets/projects/nexus-kinara.jpg',
      link: '/pdfs/nexus-kinara-brochure.pdf',
      badge: 'Brochure ↗',
      title: 'View Nexus Kinara Brochure (PDF)',
    },
    {
      id: '2',
      name: 'Nexus Skydale',
      loc: 'Tajanewasti, Punawale',
      img: '/assets/projects/nexus-skydale.jpg',
      link: '/#skydale',
      badge: 'Landing Page ↗',
      title: 'Open Nexus Skydale Landing Page',
    },
    {
      id: '3',
      name: 'Nexus Westia',
      loc: 'Punawale, Pune',
      img: '/assets/projects/nexus-westia.jpg',
      link: '/pdfs/nexus-westia-brochure.pdf',
      badge: 'Brochure ↗',
      title: 'View Nexus Westia Brochure (PDF)',
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="wrap">
        <div className="ph">
          <div>
            <div className="eyebrow">Our Projects</div>
            <h2 className="big">
              Thoughtfully Designed for <span>Modern Living</span>
            </h2>
          </div>
          <button
            type="button"
            className="pill"
            onClick={onViewAll}
            style={{ border: 0, cursor: 'pointer', font: 'inherit', fontWeight: 700, fontSize: 13 }}
          >
            View All Projects
          </button>
        </div>

        <div className="pc">
          {projects.map((p) => (
            <a
              key={p.id}
              className="pcard"
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              title={p.title}
            >
              <img src={p.img} alt={p.name} loading="lazy" />
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                  <strong style={{ display: 'block', fontSize: '14px', letterSpacing: '0.04em' }}>
                    {p.name}
                  </strong>
                  <span
                    style={{
                      background: 'rgba(197, 160, 89, 0.95)',
                      color: '#0e1b2e',
                      fontSize: '10.5px',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '3px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {p.badge}
                  </span>
                </div>
                <span style={{ opacity: 0.88, fontSize: '11.5px', letterSpacing: '0.02em', display: 'block', marginTop: '4px' }}>
                  {p.loc} • Built by NEXUS
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
