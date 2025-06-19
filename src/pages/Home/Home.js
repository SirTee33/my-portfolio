import React from 'react';
import './Home.css';
import profileImage from "../../images/Tee2.jpeg"


const Home = () => {
  return (
    <section className="home-container">
      <div className='intro-card'>
        <img src={profileImage} alt='Taiwo Ojo' className='profile-img' />
        <h1 className="animated-title">Hello, I'M TAIWO OJO</h1>
        <h2>Full Stack Software Developer</h2>
        <p>
          I specialize in building robust and scalable web applications using modern technologies like
          <strong> React</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>. With a passion for solving real-world problems through code, I’ve developed full-stack solutions that are efficient, user-friendly, and performance-driven. From designing interactive user interfaces to building RESTful APIs and managing databases, I bring both frontend and backend expertise to every project.
        </p>
        <a href="/projects" className="btn">See More</a>
      </div>
    </section>
  );
};

export default Home;
