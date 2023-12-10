import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Header.css";
import UniversalButton from '../filledButton/Button';
import { Link } from "react-router-dom"
import DarkModeSwitch from '../DarkSwitch/DarkModeSwitch';

const Header = () => {
  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand href="/" className='brand'><img src='Logo-afroglow-preto.png' alt='Logo da AfroGlow (rosto com cabelo afro e um pente garfo)'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto brand">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#plans">Planos</Nav.Link>
          <Nav.Link href="#feedback">Depoimentos</Nav.Link>
          <Nav.Link href="/sobrenos">Sobre</Nav.Link> 
          <Nav.Link href="/faleconosco">Fale conosco</Nav.Link>
          <DarkModeSwitch />
          </Nav>
          <Nav className='ms-auto container-buttons-header'>
            <Link to="/login"><button type="submit" id="button-login">Login</button></Link>
            <Link to="/cadastro">
              <UniversalButton />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
