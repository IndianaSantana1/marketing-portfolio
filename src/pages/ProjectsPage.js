import React from "react";
import { Container } from "react-bootstrap";
import "./styles/ProjectPage.css";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
let myData = require("../myData.json");

const Projects = () => {

  function handleClick(url) {
    if (url) {
      window.open(url, "_blank");
    }
  }
  return (
    <div id="projects-page" className="section projects-page-section">
      <Container className="projects-page-container">
        <h1 className="page-title">Notable Work & Projects</h1>
        <div className="projects-pp-wrapper">
          {myData.projects.map((project, index) => {
            return (
              <div id={`project-${index + 1}`} className="project-wrapper">
                <div className={`p-text-wrapper p-text-wrapper-${index + 1}`}>
                  <h1>{project.title}</h1>
                  <div className="p-description">{project.description}</div>
                </div>
                <div className="image-container">
                  <img
                    className={`project-img project-img-${index + 1}`}
                    src={project.imageUrl}
                    alt={project.title}
                    onClick={() => {
                      handleClick(project.projectUrl);
                    }}
                  />
                  {project.imageUrl2 && (
                    <img
                      className={`project-img project-img-extra-${index + 1}`}
                      src={project.imageUrl2}
                      alt={project.title}
                      onClick={() => {
                        handleClick(project.projectUrl2);
                      }}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <CTA
          titleText="Looking forward to working with you!"
          buttonLabel="Get in touch"
        />
      </Container>
      <Footer />
    </div>
  );
};

export default Projects;
