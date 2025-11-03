import React from 'react';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.jpg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUser, } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg"> 
            <div className='container-fluid'>
                <Navbar.Brand as={Link} to="/"> 
                    <img src={logo} alt="Company Logo" width={120} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto fs-5">
                        <Nav.Link as={Link} to="/" className="nav-link-hover">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" className="nav-link-hover">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="nav-link-hover">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/mywork" className="nav-link-hover">Portfolio</Nav.Link>
                    </Nav>
                    {/* <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="eg:products..."
                            className="me-2" 
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                     <FontAwesomeIcon icon={faHeart} style={{ color: '#0a7b91 '}}  size='2x'/>
                       <FontAwesomeIcon icon={faUser} style={{ color: '#707475ff '}} size='2x' />
                
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default Header;