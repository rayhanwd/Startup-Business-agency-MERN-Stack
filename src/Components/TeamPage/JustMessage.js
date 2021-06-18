import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Team_img from '../../Images/our_team.png';
import Slide from 'react-reveal/Slide';

const JustMessage = () => {
    return (
        <Container>
            <Row className="my-5">
                <Col md={6}>
                    <Slide left><>
                    <img className="img-fluid pr-5" src={Team_img} alt="" srcset="" />
                    </></Slide>
                </Col>
                <Col md={6}>
                <Slide right><>
                    <h3>We provide all kind of Startup business related services</h3>
                    <p className="mt-4">Finding out exactly who your customers are and structuring your digital presence to address their needs is one of the cornerstones.Finding out exactly who your customers are and structuring your digital presence to address their needs is one of the cornerstones.Finding out exactly who your customers are and structuring your digital presence to address their needs is one of the cornerstones.</p>
                    <div className="find-btn mt-4">
                        <Link to="/">Find more</Link>
                    </div>
                    </></Slide>
                </Col>
            </Row>
        </Container>
    );
};

export default JustMessage;