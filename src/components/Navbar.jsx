import { Link } from 'react-scroll';

import "bootstrap/dist/css/bootstrap.min.css"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import '../styles/global.css';
import '../styles/navbar.css';

export const NavBar = () => {
    return (
        <>
            <Navbar className='navbar' expand="lg">
                <Container>
                    <Link to='home' className='logo' data-aos='fade-down' exact >JIG</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='home' className='link' exact>Home</Link>
                            <Link to='about' className='link'>About me</Link>
                            <Link to='projects' className='link'>Projects</Link>
                            <Link to='contact' className='link'>Contact me</Link>
                        </Nav>
                    </Navbar.Collapse> 
                </Container>
            </Navbar>
        </>
    );
}