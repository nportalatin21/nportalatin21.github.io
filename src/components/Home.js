import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import profileImage from '../styles/Me.jpg'; // Import the profile image
import linkedinLogo from '../styles/Linkden.png';
import githubLogo from '../styles/GitHub.png';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="intro">
          <div className="intro-content">
            <h1 className="image-title">Hello, I'm<br />Nicole Portalatin</h1>
            <img src={profileImage} alt="Nicole Portalatin" className="profile-image" />
            <p className="developer-text">Full Stack Web Developer</p>
            <div className="logo-container">
              
            <a href="https://github.com/nportalatin21" target="_blank" rel="noopener noreferrer" className="github-logo">
                <img src={githubLogo} alt="GitHub Profile" className="logo-image" />
              </a>

              <a href="https://www.linkedin.com/in/nicole-portalatin-635410a1" target="_blank" rel="noopener noreferrer" className="linkedin-logo">
                <img src={linkedinLogo} alt="LinkedIn Profile" className="logo-image" />
              </a>

            </div>
          </div>
          <div className="intro-buttons">
            <Link to="/projects" className="btn btn-light">View Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact Me</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
