import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Testimonial = () => {
    return (
        <div className="background-img">
            <Container>
                <Row>
                    <Col xs={12} sm={6}>
                        <div className="mt-15">
                            <h4 className="title-text">Our client testimonial</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                            <Button className="price-btn">Read more</Button>
                        </div>
                    </Col>

                    <Col xs={12} sm={6}>
                        <Card className="testimonial_card mt-15">
                            <h5>Jhon due</h5>
                            <p className="font-12 pb-0 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                            <Link to="/" className="text-dark font-12 py-2">Read more</Link>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Testimonial;