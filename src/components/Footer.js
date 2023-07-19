import React from "react";
import "./styles/Footer.css";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import { BsLinkedin } from "react-icons/bs";

function Footer() {
  let date = new Date().getFullYear();

  return (
    <div id="footer" className="section footer-section">
      <Container className="footer-container">
        <Nav className="footer-nav">
          <Nav.Link className="link-item" href="/">
            Home
          </Nav.Link>
          <Nav.Link className="link-item" href="/projects">
            Projects
          </Nav.Link>
          <Nav.Link className="link-item" href="/contact">
            Contact
          </Nav.Link>
        </Nav>
        <div className="footer-text-wrapper">
          <div className="footer-text">
            New York, NY | santana.indiana1@gmail.com
          </div>
          <div className="footer-text">© Indiana Santana, {date}</div>
        </div>
        <div className="social-media-wrapper">
          <BsLinkedin
            size={24}
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/indianasantana/",
                "_blank"
              );
            }}
          />
        </div>
      </Container>
    </div>
  );
}

export default Footer;