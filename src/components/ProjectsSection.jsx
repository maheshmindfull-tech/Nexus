import React from 'react';

export default function ProjectsSection({ onViewAll, onOpenProject }) {
  const projects = [
    {
      id: 'skydale',
      name: 'Nexus Skydale',
      loc: 'Pandhare Wasti, Punawale',
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
      page: 'square',
      href: '/prime-square',
    },
    {
      id: 'genesis',
      name: 'Nexus Genesis',
      loc: 'Kiwale, Pune',
      img: '/assets/projects/nexus-genesis.jpg',
      page: 'genesis',
      href: '/genesis',
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
      page: 'atrium',
      href: '/atrium',
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
              <div className="pcard-info">
                <div className="pcard-info-main">
                  <strong className="pcard-title">
                    {p.name}
                  </strong>
                  <span className="pcard-loc">
                    {p.loc} <br />• Built by NEXUS
                  </span>
                </div>
                <span className="pcard-learn-more">
                  Learn More <span className="pcard-arrow"></span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
