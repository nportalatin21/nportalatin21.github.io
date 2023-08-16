import React from 'react';
import './AboutMe.css'; // You can create an AboutMe.css file for styling if needed

const AboutMe = () => {
  return (
    <section id="about-me" className="about-me-section">
      <div className="container">
        <div className="about-me-content">
          <h2 className="section-title">About Me</h2>
          <p>
            Hello! I'm Nicole Portalatin, a passionate Full Stack Web Developer with a strong foundation in both front-end and back-end technologies.
            I love turning ideas into functional and user-friendly websites and applications.
            With a background in computer science and a keen eye for design, I strive to create clean and elegant solutions.
          </p>
          <p>
            My journey in web development began with my curiosity and fascination for technology.
            I've had the opportunity to work on various projects, ranging from personal websites to collaborative team projects.
            I'm dedicated to continuous learning and staying up-to-date with the latest industry trends and technologies.
          </p>
          <p>
            When I'm not coding, you can find me exploring new places, enjoying a good book, or experimenting with new recipes in the kitchen.
            I'm excited to bring my skills and passion to the world of web development and create meaningful digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
