import React from 'react';

export default function ProjectsSection({ onViewAll, onOpenProject }) {
  const projects = [
    {
      id: 'skydale',
      name: 'Nexus Skydale',
      loc: 'Kate Wasti, Punawale',
      img: '/assets/projects/nexus-skydale.jpg',
      page: 'skydale',
      href: '/skydale',
    },
    {
      id: 'kinara',
      name: 'Nexus Kinara',
      loc: 'Jadhavwadi, Chikhali',
      img: '/assets/projects/nexus-kinara.jpg',
      page: 'kinara',
      href: '/kinara',
    },
    {
      id: 'square',
      name: 'Nexus Prime Square',
      loc: 'Borhadewadi, Moshi',
      img: '/assets/projects/nexus-square.jpg',
      page: 'projects',
      href: '/projects',
    },
    {
      id: 'genesis',
      name: 'Nexus Genesis',
      loc: 'Kiwale, Pune',
      img: '/assets/projects/nexus-genesis.jpg',
      page: 'projects',
      href: '/projects',
    },
    {
      id: 'imperia',
      name: 'Nexus Imperia',
      loc: 'Borhadewadi, Moshi',
      img: '/assets/projects/nexus-imperia.jpg',
      page: 'projects',
      href: '/projects',
    },
    {
      id: 'atrium',
      name: 'Nexus Atrium',
      loc: 'Borhadewadi, Moshi',
      img: '/assets/projects/nexus-atrium.jpg',
      page: 'projects',
      href: '/projects',
    },
  ];

  const openProject = (event, project) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    if (onOpenProject) onOpenProject(project.page);
  };

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
              href={p.href}
              title={`Learn more about ${p.name}`}
              onClick={(event) => openProject(event, p)}
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
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Learn more
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
