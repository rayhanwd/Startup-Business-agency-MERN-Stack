import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { GiCheckMark } from "react-icons/gi";
import Feature__img from '../../Images/StartUp_feature.png';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

const Feature = () => {
    return (
        <div className="feature-container">
            <Container>
                <Row>
                    <Col sm={6}>
                    <Fade bottom><>
                        <div className="img-fluid w-75">
                            <img className="mx-auto" src={Feature__img} alt="" srcset="" />
                        </div>
                        </></Fade>
                    </Col>
                    <Col sm={6}>
                    <Slide right><>
                        <div>
                            <h5 className="title-text">Start-up Agency’s special features</h5>
                            <p className="text-dark font-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        </></Slide>
                        <Slide bottom><>
                        <div className="d-flex">
                            <div className="p-4">
                                <div>
                                    <p className="text-dark font-14"><GiCheckMark className="title-text"/> 10 years experience</p>
                                    <p className="text-dark font-14"><GiCheckMark className="title-text"/> Support 24/7</p>
                                    <p className="text-dark font-14"><GiCheckMark className="title-text"/> Unbelievable results</p>
                                    <p className="text-dark font-14"><GiCheckMark className="title-text"/> Access to data-base</p>
                                </div>
                            </div>
                            <div className="ml-5 p-4">
                                <div>
                                    <p className="text-dark font-14"><GiCheckMark className="title-text"/> Fast and secure</p>
                                    <p className="text-dark font-14"><GiCheckMark className="title-text"/> Online schedule</p>
                                    <p className="text-dark font-14"><GiCheckMark className="title-text"/> Qualification process</p>
                                    <p className="text-dark font-14"><GiCheckMark className="title-text"/> Easy management</p>
                                </div>
                            </div>
                        </div>
                        </></Slide>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Feature;