import React from 'react';
import './Header.css'
import { HashLink } from 'react-router-hash-link';
import { Container, Nav, Navbar } from 'react-bootstrap';
const Header = () => {
    return (
        <>
            <Navbar className='navbar-container' collapseOnSelect expand="lg"  variant="dark">
  <Container>
  <Navbar.Brand>Md Sakibul Islam</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto">
      <Nav.Link smooth="true" as={HashLink} to="/home">Home</Nav.Link>
      <Nav.Link smooth="true" as={HashLink} to="/home#skill">Skill</Nav.Link>
      <Nav.Link smooth="true" as={HashLink} to="/home#education">Education</Nav.Link>
      <Nav.Link smooth="true" as={HashLink} to="/home#projects">Projects</Nav.Link>
      <Nav.Link smooth="true" as={HashLink} to="/home#contact">Contact Me</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    );
};

export default Header;