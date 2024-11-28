import React, { useState } from "react";
import "./contact.css"; // Importing custom CSS
import { app } from "../firebase"; // Firebase app instance
import { getDatabase, ref, set } from "firebase/database";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Form, Container, Row, Col, Card } from "react-bootstrap";

const Contact = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone || !email || !review) {
      alert("Please fill in all fields.");
      return;
    }

    const db = getDatabase(app); // Get the database instance
    const id = Math.random().toString(36).substr(2, 9); // Generate a random ID

    // Save data to Firebase Realtime Database
    set(ref(db, `contacts/${id}`), {
      name,
      phone,
      email,
      review,
    })
      .then(() => {
        alert("Your review has been submitted successfully!");
        // Reset form fields
        setName("");
        setPhone("");
        setEmail("");
        setReview("");
        handleClose(); // Close the modal
      })
      .catch((error) => {
        console.error("Error saving data:", error);
        alert("There was an error. Please try again.");
      });
  };

  return (
    <Container className="contact-container py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="contact-card shadow">
            <Card.Body className="text-center">
              <h1 className="contact-heading">Contact Us</h1>
              <p className="contact-description">
                We'd love to hear your feedback! Click the button below to fill out the contact form.
              </p>
              <Button variant="primary" onClick={handleShow} className="contact-btn">
                Open Contact Form
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Bootstrap Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your contact number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formReview">
              <Form.Label>Your Review</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Write your feedback here..."
                value={review}
                onChange={(e) => setReview(e.target.value)}
                maxLength="250"
                required
              />
            </Form.Group>
            <div className="text-center">
              <Button variant="success" type="submit" className="submit-btn">
                Submit
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Contact;
