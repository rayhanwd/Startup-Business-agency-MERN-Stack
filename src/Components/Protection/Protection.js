import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import working_process_img from '../../Images/working_process.png';
import Slide from 'react-reveal/Slide';
const Protection = () => {
    return (
        <Container className="position-relative">
             <Slide right>
            <Row>     
                <Col xm={12} md={6} className="my-md-5 p-5">
                    <h5 className="font-small">Sed ut perspiciatis unde omnis iste natus</h5>
                    <p className="font-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus exercitationem, laborum totam modi corporis sequi.</p>
                </Col>
                <Col xm={12} md={6} className="my-md-5 p-5">
                    <h5 className="font-small">Sed ut perspiciatis unde omnis iste natus</h5>
                    <p className="font-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus exercitationem, laborum totam modi corporis sequi.</p>
                </Col>
                <Col xm={12} md={6} className="my-md-5 p-5">
                    <h5 className="font-small">Sed ut perspiciatis unde omnis iste natus</h5>
                    <p className="font-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus exercitationem, laborum totam modi corporis sequi.</p>
                </Col>
                <Col xm={12} md={6} className="md-my-5 p-5">
                    <h5 className="font-small">Sed ut perspiciatis unde omnis iste natus</h5>
                    <p className="font-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus exercitationem, laborum totam modi corporis sequi.</p>
                </Col>
                <div className="position-absolute">
                    <img className="w-75 display" src={working_process_img} alt="" srcset="" />
                </div>
            </Row>
            </Slide>
        </Container>
    );
};

export default Protection;