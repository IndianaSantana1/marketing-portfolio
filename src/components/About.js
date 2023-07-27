import React from "react";
import { Button, Container } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import "./styles/About.css";

const About = () => {
  return (
    <div id="about" className="section">
      <Container className="about-container">
        <div className="about-subsection">
          <h1>About Me</h1>
          <div className="subsection-body">
            <h2>
              Hey there! My name is Indiana Santana and I am a marketing
              specialist and project manager. I've had the privilege of blending
              my strategic marketing prowess with my exceptional project
              management skills to successfully execute campaigns and projects.
            </h2>
          </div>
        </div>
        {/* <div className="about-subsection">
          <h2>Marketing Experiece</h2>
          <div className="subsection-body">
            <h2>
              From collaborating with cross-functional teams to executing
              high-impact campaigns, I've immersed myself in the dynamic world
              of marketing, consistently delivering remarkable results. So, grab
              a cup of coffee and let's dive into the exciting projects I've had
              the pleasure of spearheading.
            </h2>
            <Button className="cta-button" size="lg" href="/#contact">
              Get Results With Me <FaArrowRight className="cta-icon" />
            </Button>
          </div>
        </div> */}
      </Container>
    </div>
  );
};

export default About;
