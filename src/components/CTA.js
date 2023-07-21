import React from "react";
import { Button, Container } from "react-bootstrap";
import "./styles/CTA.css";

function CTA(props) {
  return (
    <div id="cta-section" className="section cta-section">
      <Container className="cta-container">
        <h1>{props.titleText}</h1>
        <div className="cta-section-btn">
          <Button className="cta-button cta-btn" size="lg" href="/contact">
            {props.buttonLabel}
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default CTA;
