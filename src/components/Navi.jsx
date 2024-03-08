import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import LibLogo from '../assets/img/navLogo.png';
import '../assets/styles/navi.scss';
import DataContext from '../context/DataContext';
import { actionTypes } from '../Reducer';

const Navi = () => {
    const { state } = useContext(DataContext);
    const { kategoriler } = state;

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
                            {kategoriler.map(item =>
                                <Nav.Link onClick={(e) => dispatch({ type: actionTypes.seciliKategoriyiDuzenle, payload: e.target.innerText })} key={item.id} ></Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navi;
