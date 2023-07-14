import React from "react";
import { Container, Image } from "react-bootstrap";
import "./styles/About.css";

const About = () => {
  return (
    <div id="about" className="section">
      <Container className="about-container">
        <Image className="profile-img" src="/profile-img.png" roundedCircle />
        <h1 className="about-title">
          Elevate your business to the next level.
        </h1>
      </Container>
    </div>
  );
};

export default About;
