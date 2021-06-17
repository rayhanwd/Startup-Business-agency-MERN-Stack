import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import About_img from '../../Images/about_us_bg.png';
const AboutCompany = () => {
    return (
        <div className="about-background">

            <Container>
                <h5 className="page-title">Startup Agency /About us</h5>
                <Row>
                    <Col sm={6}>
                        <div className="mt-75">
                            <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, atque dolorem.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, atque dolorem.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, atque dolorem.</p>
                            <div>
                                <Link to="/">Watch more</Link>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <img className="img-fluid mt-5 rounded" src={About_img} alt="" srcset="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutCompany;