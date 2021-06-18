import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const ContactForm = () => {
    return (
        <Container>
            <div className="page-title">
                <h5>Startup Agency / Contact</h5>
            </div>
            <Fade bottom>
            <Row>
                <Col md={12}>
                    <Form className="contact-form shadow-sm">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className="input-border" type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control className="input-border" type="password" placeholder="Password" />
                            <Form.Text className="text-muted">
                                Type a strong password for secure your account.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Button className="submit-btn" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
            </Fade>
        </Container>
    );
};

export default ContactForm;