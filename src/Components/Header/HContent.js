import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import Header__img from '../../Images/StartUp_booster_logo.png';
import Fade from 'react-reveal/Fade';
const HContent = () => {
    return (
        <Container>
            <Row>
                <Col sm={6}>
                <Fade left><>
                    <div className="mt-5">
                        <h1 className="mt-4 text-white">The Best Way to Grow
                            Your Start-up</h1>
                        <p className="mt-4 text-white">
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                        <p className="mt-4">
                            <Button className="left-button">START TRIAL</Button>
                            <Button className="right-button ml-4">SEE HOW IT WORKS</Button>
                        </p>
                    </div>
                    </></Fade>
                    </Col>
                <Col sm={6}>
                    <div className="header_image text-center">
                        <Image src={Header__img} fluid />
                    </div>
                </Col>
            </Row>
        </Container>

    );
};

export default HContent;