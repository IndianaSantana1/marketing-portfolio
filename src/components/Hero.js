import React from "react";
import { Container, Image } from "react-bootstrap";
import "./styles/Hero.css";

const Hero = () => {
  return (
    <div id="hero" className="section">
      <Container className="hero-container">
        <Image
          className="profile-img"
          src="/images/profile-img.jpg"
          roundedCircle
        />
        <h1 className="hero-title">Digital Marketing Specialist</h1>
      </Container>
    </div>
  );
};

export default Hero;
