import React, { useState } from "react";
import "./styles/Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation(props) {
  const [activeLink, setActiveLink] = useState("");

  React.useEffect(() => {
    let url = window.location.href;
    if (url.endsWith("projects")) {
      setActiveLink("projects");
    } else if (url.endsWith("contact")) {
      setActiveLink("contact");
    } else {
      setActiveLink("home");
    }
  }, []);
  return (
    <Navbar collapseOnSelect expand="md">
      <Container className="navbar-container">
        <Navbar.Brand className="brand" href="/">
          Indiana Santana
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link
              className={`link-item ${
                activeLink === "home" ? "active-link" : ""
              }`}
              href="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={`link-item ${
                activeLink === "projects" ? "active-link" : ""
              }`}
              href="/projects"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              className={`link-item ${
                activeLink === "contact" ? "active-link" : ""
              }`}
              href="/contact"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
