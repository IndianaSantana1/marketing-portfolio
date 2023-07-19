import React from "react";
import { Button, Container } from "react-bootstrap";
import "./styles/CTA.css";

const CTA = () => {
  return (
    <div id="cta-section" className="section cta-section">
      <Container className="cta-container">
        <h1>Ready to work together?</h1>
        <div className="cta-section-btn">
          <Button className="cta-button cta-btn" size="lg" href="/contact">
            Let's Connect
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default CTA;
