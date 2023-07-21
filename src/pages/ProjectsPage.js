import React from "react";
import { Container } from "react-bootstrap";
import "./styles/ProjectPage.css";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
let myData = require("../myData.json");

const Projects = () => {
  return (
    <div id="projects-page" className="section projects-page-section">
      <Container className="projects-page-container">
        <h1>I’m open for new projects — see what I have done below.</h1>
        <div className="projects-pp-wrapper">
          {myData.projects.map((project, index) => {
            return (
              <div id={`project-${index + 1}`} className="project-wrapper">
                <div className="p-text-wrapper">
                  <h1>{project.title}</h1>
                  <div className="p-description">{project.description}</div>
                </div>
                <img
                  className="project-img"
                  src={project.imageUrl}
                  alt={project.title}
                />
              </div>
            );
          })}
        </div>
        <CTA
          titleText="Want to work together? Drop me a message and I’ll get back to you in no time."
          buttonLabel="Get in touch"
        />
      </Container>
      <Footer />
    </div>
  );
};

export default Projects;
