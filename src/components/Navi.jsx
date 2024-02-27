import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import LibLogo from '../assets/img/navLogo.png';
import '../assets/styles/navi.scss'

const Navi = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={LibLogo} alt="logo" />
                        BookHub
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto'>
                            <Nav.Link href="#deets">Tüm Kategoriler</Nav.Link>
                            <Nav.Link href="#deets">Edebiyat</Nav.Link>
                            <Nav.Link href="#deets">Tarih</Nav.Link>
                            <Nav.Link href="#deets">Diğer</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navi;
