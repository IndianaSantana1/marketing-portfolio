import React from "react";
import "./styles/Projects.css";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Projects = () => {
  return (
    <div id="projects" className="section projects-section">
      <Container className="projects-container">
        <h1>Sneak peek into some of my projects</h1>
        <div className="projects-wrapper">
          <div className="project-item">
            <Card
              style={{ width: "20rem" }}
              onClick={() => window.open("/projects/#", "_self")}
            >
              <Card.Img variant="top" src="/images/profile-img.png" />
              <Card.Body>
                <Card.Title>FromRose</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button className="cta-button project-btn">View project</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="project-item">
            <Card
              style={{ width: "20rem" }}
              onClick={() => window.open("/projects/#", "_self")}
            >
              <Card.Img variant="top" src="/images/profile-img.png" />
              <Card.Body>
                <Card.Title>Magner Center</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button className="cta-button project-btn">View project</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="project-item">
            <Card
              style={{ width: "20rem" }}
              onClick={() => window.open("/projects/#", "_self")}
            >
              <Card.Img variant="top" src="/images/profile-img.png" />
              <Card.Body>
                <Card.Title>PCI Media Inc.</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button className="cta-button project-btn">View project</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="projects-section-btn">
          <Button
            className="cta-button more-projects-btn"
            size="lg"
            href="/projects"
          >
            View More Projects
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
