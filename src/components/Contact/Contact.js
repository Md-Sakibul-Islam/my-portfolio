import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";

import "./Contact.css";
const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_7xteg6f",
        "template_64cisu4",
        form.current,
        "user_ahUzXtxnhGeUhu9xY9cQy"
      )
      .then(
        (result) => {
          setLoading(false);
          setSuccess("Your message has been sent successfully.");
        },
        (error) => {
          setLoading(false);
          setError("Message not sent.");
        }
      );
  };
  return (
    <div id="contact" className="container contact__container">
      <h3>
        <i className="fas fa-external-link-alt"></i> Get In Touch
      </h3>
      <Row className="mt-5">
        <Col className="text-center" sm={12} lg={5} md={5}>
          <div data-aos="zoom-in" className="mb-5">
            {" "}
            <h4>
              <i className="fas fa-phone-volume"></i> Call{" "}
            </h4>
            <p>+8801705544150</p>
          </div>
          <div data-aos="zoom-in" className="mb-5">
            {" "}
            <h4>
              <i className="far fa-envelope"></i> Email{" "}
            </h4>
            <p>sakibul.diu@gmail.com</p>
          </div>
          <div data-aos="zoom-in" className="mb-5">
            {" "}
            <h4>
              <i className="fas fa-map-marker-alt"></i> Location
            </h4>
            <p>Rajshahi,Bangladesh</p>
          </div>
        </Col>
        <Col sm={12} lg={6} md={6}>
          <Form ref={form} onSubmit={sendEmail} data-aos="zoom-in">
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>
                {" "}
                Name <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                required
                name="client_name"
                type="text"
                placeholder="Enter Your Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Email <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                placeholder="Enter Your Email"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                Message <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                required
                placeholder="Your Message"
                name="message"
                as="textarea"
                rows={6}
              />
            </Form.Group>
            {loading && <Spinner animation="border" variant="success" />}
            <p>{success}</p>
            <p>{error}</p>
            <br />

            <Button className="download-btn" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Contact;
