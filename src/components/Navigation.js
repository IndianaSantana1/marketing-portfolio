import React from "react";
import "./styles/Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
