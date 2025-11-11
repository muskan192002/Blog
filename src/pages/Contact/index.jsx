import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import con from "../../assets/img/a2.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    alert(
      `Form submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}`
    );
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <div className=" container-fluid mt-5 py-20">
         <div className="line-container text-center w-100 py-20">
        <h5 className="line ff py-5">Brand Service here</h5>
      </div>
      <Row className="align-items-center justify-content-evenly">
        <Col md={4}>
            <img src={con} 
                alt="brand"
                className="img-fluid"
            />
        </Col>
        <Col md={4}>
          <h2 className="text-center mb-4 ff brown fw-bolder">CONTACT US</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 ff fs-5 brown" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="fs-5 border-brown"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3 ff fs-5 brown" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="fs-5"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3 ff fs-5 brown" controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="fs-5"
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3 ff fs-5 brown"
              controlId="formDescription"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="description"
                placeholder="Drop your message..."
                value={formData.description}
                onChange={handleChange}
                className="fs-5"
              />
            </Form.Group>

            <div className="text-center">
              <button type="submit" className=" ff c-btn py-2 fs-5 fw-semibold">
                Submit
              </button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
