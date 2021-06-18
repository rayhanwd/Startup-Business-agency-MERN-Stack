import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import service_img_0 from '../../Images/fast_growing.png';
import service_img_1 from '../../Images/Realtime_access.png';
import service_img_2 from '../../Images/online_database.png';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';

const ServiceData = [
    {
        image: service_img_0,
        title: 'Fast Growing',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus'
    },
    {
        image: service_img_1,
        title: 'Real-time Statistics',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus'
    },
    {
        image: service_img_2,
        title: 'Online Data-base',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus'
    }
];
const ServiceMain = () => {
    return (
        <Container>
                <Row>
                    {
                        ServiceData.map(data => <>

                            <Col md={6}>
                            <Slide bottom>
                                <div className="m-5">
                                    <img className="img-fluid rounded-img" src={data.image} alt="" srcset="" />
                                </div>
                                </Slide>
                            </Col>
                            <Col md={6}>
                            <Slide right>
                                <div className="my-5">
                                    <h3>{data.title}</h3>
                                    <p>{data.description}</p>
                                    <Link className="title-text" to='/'>Read more</Link>
                                </div>
                                </Slide>
                            </Col>
                        </>)
                    }
                </Row>
        </Container>
            );
};

            export default ServiceMain;