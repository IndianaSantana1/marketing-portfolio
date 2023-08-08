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
            <h3>
              Hi, I'm Indiana! I'm a passionate marketing specialist with
              expertise in digital marketing, social media, and content
              creation. I approach every project with meticulous attention to
              detail, crafting compelling campaigns that reasonate with
              audiences across platforms.
            </h3>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
