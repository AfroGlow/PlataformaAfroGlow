import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import "./NewHeaderResponsible.css";


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
                            <Nav.Link href="/perfilresponsavel">Home</Nav.Link>
                            <Nav.Link href="/midias">Mídias</Nav.Link>
                            <Nav.Link href="/notas">Notas</Nav.Link>
                            <Nav.Link href="/planosia">IA</Nav.Link>
                            <Nav.Link href="/perfil">Sair</Nav.Link>
                        </Nav>
                     
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NewHeaderResponsible;
