import React from "react";
import "./styles/Skills.css";
import { Container } from "react-bootstrap";
import { FaAward } from "react-icons/fa";
let SkillsAndCerts = require("../myData.json");

const Skills = () => {
  return (
    <div id="skills" className="section skills-section">
      <Container className="skills-container">
        <div className="skills-certs-wrapper">
          <div className="left-wrapper">
            <h1>
              Skills & <br className="new-line" /> Certifications
            </h1>
            <div className="certs-wrapper">
              {SkillsAndCerts.certifications.map((cert, key) => {
                return (
                  <h4 className="cert">
                    <span className="cert-icon">
                      <FaAward />
                    </span>
                    {cert.title}
                  </h4>
                );
              })}
            </div>
          </div>
          <div className="img-box">
            <img src="./images/skills.jpg" className="skills-img" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
