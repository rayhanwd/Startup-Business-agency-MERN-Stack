import React from 'react';
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import site_logo from '../../Images/StartUp_logo.png';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaArrowUp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-container">
            <Container>
                <Row>
                    <Col md={3}>
                        <div className="mt-5 pb-2">
                            <img src={site_logo} alt="" srcset="" />
                        </div>
                        <p className="text-white font-12">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, adipisci eius sit, exercitationem quasi laudantium libero, culpa cum quas tempore quae voluptas.</p>
                        <span className="text-white font-12 text-underline"><Link to='/'>See more</Link></span>
                        <span className="ml-3 text-white font-12 text-underline">
                            <Link to='/'>Ask Question</Link></span>
                    </Col>
                    <Col md={3}>
                        <div className="mt-5 bg-none">
                            <h6 className="text-white font-17">Quick Link</h6>
                            <div className="link-color">
                                <p><Link to='/'>Home</Link></p>
                                <p><Link to='/'>Services</Link></p>
                                <p><Link to='/'>Ask Question</Link></p>
                                <p><Link to='/'>Support</Link></p>

                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="mt-5">
                            <h6 className="text-white font-17">Quick Link</h6>
                            <div className="link-color">
                                <p><Link to='/'>Offer</Link></p>
                                <p><Link to='/'>Privacy policy</Link></p>
                                <p><Link to='/'>Contact</Link></p>
                                <p><Link to='/'>Signup for free</Link></p>

                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="mt-5">
                            <InputGroup className="mt-75">
                                <FormControl className="input-box"
                                    placeholder="Enter your email address"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button className="submit-btn" id="button-addon2">
                                    Submit
                                </Button>
                            </InputGroup>
                            <div className="social-icon mt-4">
                                <FaFacebookF />
                                <FaTwitter />
                                <FaYoutube />
                                <FaLinkedinIn />
                            </div>
                        </div>
                    </Col>
                    <Col sm={12}>
                        <div className="text-center my-4 text-white">
                            <p className="font-14">© Copyright 2020 <span className="text-underline">Kazi's Portfolio website</span></p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="back-to-top">
                <a href="#navbar"><FaArrowUp /></a>
            </div>
        </div>
    );
};

export default Footer;