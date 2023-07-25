import React from "react";
import "./styles/Skills.css";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { LiaCertificateSolid } from "react-icons/lia";
let SkillsAndCerts = require("../myData.json");

const Skills = () => {
  return (
    <div id="skills" className="section skills-section">
      <Container className="skills-container">
        <div className="skills-certs-wrapper">
          <div className="left-wrapper">
            <h1>
              Skills & <br /> <b>Certifications</b>
            </h1>
            <div className="certs-wrapper">
              {SkillsAndCerts.certifications.map((cert, key) => {
                return (
                  <div className="cert">
                    <span className="cert-icon">
                      <LiaCertificateSolid />
                    </span>
                    {cert.title}
                  </div>
                );
              })}
            </div>
          </div>
          <img src="./images/skills.svg" className="skills-img" />
          {/* <div className="skills-wrapper">
            {SkillsAndCerts.skills.map((skill, key) => {
              return (
                <Card body className={`skill-card`}>
                  <Card.Img className={`skill-${key}`} src={skill.imageUrl} />
                </Card>
              );
            })}
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default Skills;
