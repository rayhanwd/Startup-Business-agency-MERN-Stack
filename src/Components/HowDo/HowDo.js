import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInbox, FaCloudDownloadAlt, FaEnvelope } from "react-icons/fa";
import How__work__img from '../../Images/How_we_work.png';
import Slide from 'react-reveal/Slide';

const HowDo = () => {
    return (
        <div className="bg-white">
            <Container>
                <Row>
                    <Col sm={12}>
                        <h2 className="work-heading">How we Work</h2>
                    </Col>
                    <Col sm={6}>
                    <Slide left><>
                        <div className="d-flex p-4">
                            <div className="work-icon">
                                <FaInbox />
                            </div>
                            <div>
                                <h5 className="work-title">Sed ut perspiciatis unde omnis iste natus</h5>
                                <p className="work-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Quis ipsum suspendisse ultrices gravida.
                                    Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                            </div>
                        </div>
                        </></Slide>
                        <Slide bottom><>
                        <div className="d-flex p-4">
                            <div className="work-icon">
                                <FaCloudDownloadAlt />
                            </div>
                            <div>
                                <h5 className="work-title title-text">Quis nostrum exercitationem ullam corporis suscipit </h5>
                                <p className="work-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.</p>
                            </div>
                        </div>
                        </></Slide>
                        <Slide bottom><>
                        <div className="d-flex p-4">
                            <div className="work-icon">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h5 className="work-title">Neque porro quisquam est qui dolorem ipsum quia</h5>
                                <p className="work-text">Maste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.
                                    dicta sunt explicabo</p>
                            </div>
                        </div>
                        </></Slide>
                    </Col>
                    <Col sm={6}>
                    <Slide bottom><>
                        <div className="img-fluid w-60 overflow-hidden">
                            <img src={How__work__img} alt="" srcset="" />
                        </div>
                        </></Slide>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HowDo;