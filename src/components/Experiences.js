import React from "react";
import "./styles/Experiences.css";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
let myData = require("../myData.json");

const Experience = () => {
  return (
    <div id="experiences" className="section experiences-section">
      <Container className="experiences-container">
        <div className="experience-header">
          <h1>Marketing Experience</h1>
          <div className="experience-header-body">
            <h3>
              From collaborating with cross-functional teams to executing
              high-impact campaigns, I've immersed myself in the dynamic world
              of marketing, consistently delivering remarkable results. So, grab
              a cup of coffee and let's dive into the exciting projects I've had
              the pleasure of spearheading.
            </h3>
          </div>
        </div>
        <div className="experience-body">
          <div className="experiences-wrapper">
            {myData.experiences.map((experience, key) => {
              return (
                <div key={key} className={`experience-card experiene-${key}`}>
                  <img
                    className="experience-img"
                    src={experience.imageUrl}
                    alt="experience-logo"
                  />
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
        </div>
      </Container>
    </div>
  );
};

export default Experience;
