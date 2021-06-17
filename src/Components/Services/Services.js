import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import Service__Img_0 from '../../Images/Service_logo_0.png';
import Service__Img_1 from '../../Images/Service_logo_1.png';
import Service__Img_2 from '../../Images/Service_logo_2.png';

const ServiceData = [
    {
        image: Service__Img_0,
        title: 'Fast Growing',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
    },
    {
        image: Service__Img_1,
        title: 'Real-time Statistics',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
    },
    {
        image: Service__Img_2,
        title: 'Online Data-base',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
    }
];
const Services = () => {
    return (
        <Container className="service-container">
            <Fade bottom><>
            <Row>
                {
                    ServiceData.map(data => 

                    <Col className="p-5" md={6} lg={4}>
                        <Card className="shadow-sm">
                            <Card.Img className="service-img mx-auto" variant="top" src={data.image} />
                            <Card.Body>
                                <Card.Title className="service-title">{data.title}</Card.Title>
                                <Card.Text className="service-description">
                                    {data.description}
                                </Card.Text>
                                <div className="text-center">
                                    <Link className="title-text" to="/">Read more</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    )
                }
            </Row>
            </></Fade>
        </Container>
    );
};

export default Services;