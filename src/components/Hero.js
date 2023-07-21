import React from "react";
import { Container, Image } from "react-bootstrap";
import "./styles/Hero.css";

const Hero = () => {
  return (
    <div id="hero" className="section">
      <Container className="hero-container">
        <Image
          className="profile-img"
          src="/images/profile-img.png"
          roundedCircle
        />
        <h1 className="hero-title">Elevate your business to the next level.</h1>
      </Container>
    </div>
  );
};

export default Hero;
