import React, { useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import logo from "../../assets/img/logo.png"; 
import { LinkData } from "./data"; // Assuming this structure is correct

// A helper component for each column of links
const FooterLinkColumn = ({ title, links }) => (
  <div className="mb-4">
    <h5 className="text-uppercase mb-3 fw-bold">{title}</h5>
    <ul className="list-unstyled">
      {links.map((link, index) => (
        <li key={index} className="mb-2">
          <a href={link.url} className="text-decoration-none color">
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!isAgreed) {
      setError("You must agree to the terms.");
      return;
    }

    setSuccess(`Verification link sent to: ${email}! Thank you for Sign Up.`);
    setEmail("");
    setIsAgreed(false);
  };

  

  return (
    <footer className="footer-custom bg-2 text-secondary pt-5 pb-3">
      <Container className="pt-100 pb-50">
        <Row>
          <Col md={3} className="mb-4 d-flex flex-column align-items-start">
            <div className="mb-3">
              <img src={logo} alt="logo" />
            </div>
            <p className="small">
              Stay stylish with the latest trends. <br /> Quality apparel delivered to your door.
            </p>
          </Col>
          {LinkData.map((item) => (
            <Col xs={6} sm={4} md={2} key={item.id} className="mb-4">
              <FooterLinkColumn title={item.title} links={item.links}/>
            </Col>
          ))}
          <Col md={3} className="mb-4">
            <h5 className="text-uppercase mb-3 fw-bold color">Sign up, Stay stylish</h5>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="emailInput">
                <Form.Label className="small text-secondary">Email Address:</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g., user@example.com"
                    className="form-control-custom"
                  />
                  <Button type="submit" variant="dark">
                    <i className="bi bi-arrow-right"></i> Login
                  </Button>
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3" controlId="checkboxAgree">
                <Form.Check
                  type="checkbox"
                  checked={isAgreed}
                  onChange={(e) => setIsAgreed(e.target.checked)}
                  label={<span className="text-secondary small">I agree to the terms and conditions.</span>}
                />
              </Form.Group>

              {error && (
                <p className="text-danger small mt-2">
                  {error}
                </p>
              )}

              {success && (
                <p className="text-success small mt-2">
                  {success}
                </p>
              )}
            </Form>
          </Col>
        </Row>
        <hr className="my-4 border-secondary opacity-25" />
        <Row>
          <Col className="text-center">
            <p className="small text-secondary m-0">
              &copy; {new Date().getFullYear()} MyBrand. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;