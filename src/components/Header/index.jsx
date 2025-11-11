import React from "react";
import { Navbar, Container, Nav, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";


const Header = () => {
  return (
    <Navbar expand="lg" className="py-5 bg-2"  sticky="top">
      <div className="container-fluid">
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Company Logo" width={150} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto fs-5 ff">
            <Nav.Link as={Link} to="/" className="nav-link-hover px-3">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-hover px-3">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-hover px-3">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/mywork" className="nav-link-hover px-3">
              Portfolio
            </Nav.Link>
          </Nav>
          <Link  style={{ color: "#95460eff"}}>
           <h5 className="px-2 "> ADD TO CART {0}</h5>
           {/* { <FontAwesomeIcon 
            icon={faCartShopping}
            size="2x"
          
          />
          }  */}
         
          </Link>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
