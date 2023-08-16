import React from 'react';
// import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>My Projects</h2>
        <div className="project-list">
          <div className="project">
            <h3>Project 1</h3>
            <p>This is the description of Project 1.</p>
          </div>
          <div className="project">
            <h3>Project 2</h3>
            <p>This is the description of Project 2.</p>
          </div>
          <div className="project">
            <h3>Project 3</h3>
            <p>This is the description of Project 3.</p>
          </div>
          {/* Add more project items here */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
