import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import "./NewHeaderResponsible.css";
import { Link } from 'react-router-dom';

const NewHeaderResponsible = () => {
    return (
        <div>
            <Navbar className="header-responsible-new" expand="lg">
                <Container className='container-new-header1'>
                    <Navbar.Brand href="/" className='header-brand'>
                        <img src='Logo-afroglow-preto.png' alt='Logo da AfroGlow (rosto com cabelo afro e um pente garfo)' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto header-brand">
                            <Nav.Link href="/perfilresponsaveis">Home</Nav.Link>
                            <Nav.Link href="#plans">Mídias</Nav.Link>
                            <Nav.Link href="#feedback">Notas</Nav.Link>
                            <Nav.Link href="/aboutus">IA</Nav.Link>
                            <Nav.Link href="/aboutus">Sair</Nav.Link>
                        </Nav>
                     
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NewHeaderResponsible;
