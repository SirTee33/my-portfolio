import React from 'react';
import './About.css';
import { Icon } from '@iconify/react';
import reactIcon from '@iconify-icons/logos/react';
import html5Icon from '@iconify-icons/logos/html-5';
import css3Icon from '@iconify-icons/logos/css-3';
import javascriptIcon from '@iconify-icons/logos/javascript';
import nodejsIcon from '@iconify-icons/logos/nodejs-icon';
import expressIcon from '@iconify-icons/simple-icons/express';
import mongodbIcon from '@iconify-icons/logos/mongodb-icon';
import gitIcon from '@iconify-icons/logos/git-icon';
import githubCircle from '@iconify-icons/mdi/github';
import postmanIcon from '@iconify-icons/logos/postman-icon';
import vscodeIcon from '@iconify-icons/logos/visual-studio-code';
import tailwindIcon from '@iconify-icons/logos/tailwindcss-icon';




function About() {
  return (
    <section className="about-container">
      <h2>Who I Am</h2>
      <div className='about'>
        <p className='about-intro'>
          I'm Taiwo Ojo, a creative and detailed-oriented Full Stack Developer with passion for building user-focused digital experiences. I love turning ideas into interactive and functional solutions that make an impact.
        </p>
      </div>
      <div className="tech">
        <h3 className='about-stack'>Tools and Technology</h3>
        <div className="tech-grid">
          {/* Frontend */}
          <div className="tech-item">
            <Icon icon={reactIcon} width="40" height="40" />
            <span>React</span>
          </div>

          <div className="tech-item">
            <Icon icon={html5Icon} width="40" height="40" />
            <span>HTML</span>
          </div>
          <div className="tech-item">
            <Icon icon={javascriptIcon} width="40" height="40" />
            <span>JavaScript</span>
          </div>

          {/* Backend */}
          <div className="tech-item">
            <Icon icon={nodejsIcon} width="40" height="40" />
            <span>Node.js</span>
          </div>
          <div className="tech-item">
            <Icon icon={expressIcon} width="40" height="40" style={{ color: "#0ea5e9" }} />
            <span>Express</span>
          </div>

          {/* Database */}
          <div className="tech-item">
            <Icon icon={mongodbIcon} width="40" height="40" />
            <span>MongoDB</span>
          </div>

          {/* Tools */}
          <div className="tech-item">
            <Icon icon={gitIcon} width="40" height="40" />
            <span>Git</span>
          </div>
          <div className="tech-item">
            <Icon icon={githubCircle} width="40" height="40" style={{ color: "#0ea5e9" }} />
            <span>GitHub</span>
          </div>
          <div className="tech-item">
            <Icon icon={postmanIcon} width="40" height="40" />
            <span>Postman</span>
          </div>
          <div className="tech-item">
            <Icon icon={vscodeIcon} width="40" height="40" />
            <span>VS Code</span>
          </div>

          {/* Styling */}
          <div className="tech-item">
            <Icon icon={css3Icon} width="40" height="40" />
            <span>External CSS</span>
          </div>
          <div className="tech-item">
            <Icon icon={tailwindIcon} width="40" height="40" />
            <span>Tailwind CSS</span>
          </div>
        </div>
      </div>

      <div className='project'>
        <h3>Work Showcase</h3>
        <p className='about-projects'>
          One of my key projects is <strong>Iya-Ilu</strong> an educational site showcasing the Nigerian talking drum. It features image and video galleries, filtered drum types, and a fully responsive design.
        </p>
        <p className='about-projects'>
          I've also worked on an e-commerce site for <strong>Happy-Glams Beauty</strong> that includes product listings, a gallery, and cart functionality.
        </p>
      </div>
      <div className='value'>
        <h3>What I Value</h3>
        <p className='about-values'>
          I value clear communication, clean code, and continuous learning. I enjoy collaborating with others and bringing ideas to life through software. I believe that great design meets functionality.
        </p>
      </div>
      <div className='connect'>
        <h3>Let’s Connect</h3>
        <p className="about-connect">
          I’m always open to freelance projects, internships, or collaborations. Reach out via the <a href="/contact" className='connect-link'>Let's Connect</a>.
        </p>
      </div>
    </section >
  );
}

export default About;
