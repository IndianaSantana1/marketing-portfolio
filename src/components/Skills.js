import React from "react";
import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import "./styles/Skills.css"
let SkillsAndCerts = require('../shared/SkillsAndCerts.json')

const Skills = () => {
  return (
    <div id="skills" className="section skilss-section">
      <Container className="skills-container">
        <h1>Skills and Certifications</h1>
        <div className="skills-certs-wrapper">
          <div className="certs-wrapper">
            <h2>3 — Certifications</h2>
            <div className="certs">
              {SkillsAndCerts.certifications.map((cert) => {
                return (
                  <Card body className="cert-card">
                    {cert}
                  </Card>
                );
              })}
            </div>
          </div>
          <div className="skills-wrapper">
            <h2>4 — Skills</h2>
            <div className="skills">
              {SkillsAndCerts.skills.map((skill) => {
                return (
                  <Card body className="skill-card">
                    {skill}
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
