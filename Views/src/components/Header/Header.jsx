import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Header.css";
import UniversalButton from '../filledButton/Button';

const Header = () => {
  return (
    <Navbar  className="navbar" expand="lg">
    <Container>
      <Navbar.Brand href="#home" className='brand'><img src='Logo-afroglow-preto.png' alt='Logo da AfroGlow (rosto com cabelo afro e um pente garfo)'></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto brand">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Planos</Nav.Link>
          <Nav.Link href="#">Depoimentos</Nav.Link>
          <Nav.Link href="#">Sobre</Nav.Link>
          <Nav.Link href="#">Fale conosco</Nav.Link>
        </Nav>
        <Nav className='ms-auto container-buttons-header'>
        <button type="submit" id="button-login">Login</button>
        <UniversalButton/>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Header;
