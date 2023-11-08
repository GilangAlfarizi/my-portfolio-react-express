import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.svg'


function Header() {
    return (
        <header>
            <Navbar variant='dark' expand="lg" className="bg-dark">
                <Container>
                    <Navbar.Brand className='d-flex' href="/">
                        <img src={logo} width="30" height="30" alt="" />
                        <h5 className='mx-4 mt-1'>Gilang Alfarizi's Portfolio</h5>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="Works">Works</Nav.Link>
                            <Nav.Link href="About">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;