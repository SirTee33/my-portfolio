import React from 'react';
import './Projects.css';

const projectData = [
  {
    title: 'Happy-Glams',
    description: 'An e-commerce platform for makeup services and products.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: "/images/Happy Glam.png",
    code: 'https://github.com/SirTee33/Happy_Glams',
    demo: 'https://happy-glams.onrender.com',
  },
  {
    title: 'Iya-Ilu',
    description: 'A cultural website showcasing different types of talking drums.',
    stack: ['React', 'CSS', 'JSON API'],
    image: "/images/Iya-Ilu.png",
    code: 'https://github.com/SirTee33/Iya-Ilu',
    demo: 'https://iya-ilu.netlify.app',
  },
  {
    title: 'Pharma Project Manager',
    description: 'A management tool for pharmaceutical reports and compliance.',
    stack: ['React', 'Express', 'MongoDB'],
    image: "/images/Pharma.png",
    code: 'https://github.com/SirTee33/PharmaProjectManager',
    demo: 'https://pharma-manager.onrender.com',
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <section className="project-heading">
        <h1>Code in Action</h1>
        <p>
          Real-world applications developed using modern full stack technologies.
          From user-friendly interfaces to robust backend systems — explore my deployed builds.
        </p>
      </section>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className='project-image' />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="stack">
              {project.stack.map((tech, i) => (
                <span key={i} className="tech">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className='code'>Code</a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className='demo'>Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
