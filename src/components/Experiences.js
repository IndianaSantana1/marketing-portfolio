import React from "react";
import "./styles/Experiences.css";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
let myData = require("../myData.json");

const Experience = () => {
  return (
    <div id="experiences" className="section experiences-section">
      <Container className="experiences-container">
        <h1>
          Marketing <b>Experience</b>
        </h1>
        <div className="experiences-wrapper">
          {myData.experiences.map((experience, key) => {
            return (
              <div className={`experience-card experiene-${key}`}>
                <img className="experience-img" src={experience.imageUrl} />
                <div className="experience-card-body">
                  <h2 className="experience-title">{experience.title}</h2>
                  <div className="experience-description">
                    {experience.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="experiences-section-btn">
          <Button
            className="cta-button view-projects-btn"
            size="lg"
            href="/projects"
          >
            View Projects
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Experience;
