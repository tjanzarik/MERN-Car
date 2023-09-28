import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";

import "../styles/contact.css";

const Contact = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="7" md="7">
            <h6 className="fw-bold mb-4">Get In Touch</h6>

            <Form>
              <FormGroup className="contact__form">
                <Input placeholder="Your Name" type="text" />
              </FormGroup>
              <FormGroup className="contact__form">
                <Input placeholder="Email" type="email" />
              </FormGroup>
              <FormGroup className="contact__form">
                <textarea
                  rows="5"
                  placeholder="Message"
                  className="textarea"
                ></textarea>
              </FormGroup>

              <button className=" contact__btn" type="submit">
                Send Message
              </button>
            </Form>
          </Col>

          <Col lg="5" md="5">
            <div className="contact__info">
              <h6 className="fw-bold">Contact Information</h6>
              <p className="section__description mb-0">
                St.-Oswaldstr, Traunstein
              </p>
              <div className=" d-flex align-items-center gap-2">
                <h6 className="fs-6 mb-0">Phone:</h6>
                <p className="section__description mb-0">+86139209</p>
              </div>

              <div className=" d-flex align-items-center gap-2">
                <h6 className="mb-0 fs-6">Email:</h6>
                <p className="section__description mb-0">example@gmail.com</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
