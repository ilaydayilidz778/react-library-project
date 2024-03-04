import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import LibLogo from '../assets/img/navLogo.png';
import '../assets/styles/navi.scss';
import DataContext from '../context/DataContext';

const Navi = () => {
    const { kategoriler, setSeciliKategori } = useContext(DataContext)
    const seciliKategoriyiDuzenle = (kategoriAdi) => {
        setSeciliKategori(kategoriAdi);
    };

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
                            {kategoriler.map(kategori =>
                                <Nav.Link key={kategori.id} href={`#${kategori.id}`} onClick={() => seciliKategoriyiDuzenle(kategori.kategoriAdi)}>{kategori.kategoriAdi}</Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navi;
