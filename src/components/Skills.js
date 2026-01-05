import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">🎯 Skills & Expertise</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend Development</h3>
            <ul>
              <li>Reactjs</li>
              <li>TypeScript & JavaScript</li>
              <li>HTML5 & CSS3</li>
              <li>Tailwind CSS & Styled Components</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Backend Development</h3>
            <ul>
              <li>Node.js & Express</li>
              <li>Python & Flask</li>
              <li>PostgreSQL</li>
              <li>REST APIs & GraphQL</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Tools & Technologies</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>Figma, Canva, Adobe Photoshop (As a hobby)</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Soft Skills</h3>
            <ul>
              <li>Team Collaboration</li>
              <li>Problem Solving</li>
              <li>Communication</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;