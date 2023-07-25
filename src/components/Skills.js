import React from "react";
import "./styles/Skills.css";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { LiaCertificateSolid } from "react-icons/lia";
let SkillsAndCerts = require("../myData.json");

const Skills = () => {
  return (
    <div id="skills" className="section skilss-section">
      <Container className="skills-container">
        <h1>Skills and Certifications</h1>
        <div className="skills-certs-wrapper">
          <div className="skills-wrapper">
            <div className="skills">
              {SkillsAndCerts.skills.map((skill, key) => {
                return (
                  <Card body className={`skill-card`}>
                    <Card.Img className={`skill-${key}`} src={skill.imageUrl} />
                  </Card>
                );
              })}
            </div>
          </div>
          <div className="certs-wrapper">
            <div className="certs">
              {SkillsAndCerts.certifications.map((cert, key) => {
                return (
                  <Card
                    body
                    id={key}
                    className="cert-card"
                    onClick={() => window.open(cert.certUrl, "_blank")}
                  >
                    <Card.Img variant="top" src={cert.imageUrl} />
                    <Card.Body>
                      <Card.Title>
                        <div>
                          <LiaCertificateSolid />
                        </div>
                        <div>{cert.title}</div>
                      </Card.Title>
                    </Card.Body>
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
