import React, { useState } from 'react';

export default function ProjectsSection() {
  const initialProjects = [
    { id: '1', name: 'Nexus Kinara', loc: 'Jadhavwadi, Chikhali.', img: '/assets/projects/nexus-kinara.jpg' },
    { id: '2', name: 'Nexus Skydale', loc: 'Tajanewasti, Punawale.', img: '/assets/projects/nexus-skydale.jpg' },
    { id: '3', name: 'Nexus Westia', loc: 'Punawale, Pune.', img: '/assets/projects/nexus-westia.jpg' },
    { id: '4', name: 'Nexus Square', loc: 'Punawale, Pune', img: '/assets/projects/nexus-square.jpg' },
    { id: '5', name: 'Nexus Atrium', loc: 'Borhadewadi, Moshi.', img: '/assets/projects/nexus-atrium.jpg' },
    { id: '6', name: 'Nexus Imperia', loc: 'Borhadewadi, Moshi.', img: '/assets/projects/nexus-imperia.jpg' },
    { id: '7', name: 'Nexus Genesis', loc: 'Kiwale, Pune.', img: '/assets/projects/nexus-genesis.jpg' },
  ];

  const [projects, setProjects] = useState(initialProjects);

  const handleNext = () => {
    setProjects((prev) => {
      const copy = [...prev];
      const first = copy.shift();
      copy.push(first);
      return copy;
    });
  };

  const handlePrev = () => {
    setProjects((prev) => {
      const copy = [...prev];
      const last = copy.pop();
      copy.unshift(last);
      return copy;
    });
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
          <span className="pill">Ongoing</span>
        </div>

        <div className="pc">
          {projects.slice(0, 4).map((p) => (
            <a key={p.id} className="pcard" href="#projects">
              <img src={p.img} alt={p.name} />
              <div>
                {p.name}
                <br />
                {p.loc}
              </div>
            </a>
          ))}
        </div>

        <div className="arrows">
          <button data-d="p" aria-label="Previous" onClick={handlePrev}>
            ‹
          </button>
          <button className="p" data-d="n" aria-label="Next" onClick={handleNext}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
