import React from "react";
import { Container, Image, Row } from "react-bootstrap";

const About = () => {
  return (
    <div id="about">
      <Container>
        <Image src="/profile-img.png" roundedCircle />
        <h1>Elevate your business to the next level.</h1>
      </Container>
    </div>
  );
};

export default About;
