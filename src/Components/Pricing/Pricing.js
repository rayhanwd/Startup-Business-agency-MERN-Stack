import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GiCheckMark } from "react-icons/gi";
import Fade from 'react-reveal/Fade';
const ServiceData = [
    {
        packageName: 'Silver Plan',
        price: '14.99/mo',
        feature: {
            feature1: 'Free online tech support',
            feature2: 'Money back guaranty',
            feature3: 'Cancel at anytime',
            feature4: 'Access to data-base',
        }
    },
    {
        packageName: 'Gold Plan',
        price: '29.99/mo',
        feature: {
            feature1: 'Free online tech support',
            feature2: 'Money back guaranty',
            feature3: 'Cancel at anytime',
            feature4: 'Access to data-base',
        },
        bgcolor:'gold-color text-white'
    },

    {
        packageName: 'Platinum Plan',
        price: '54.99/mo',
        feature: {
            feature1: 'Free online tech support',
            feature2: 'Money back guaranty',
            feature3: 'Cancel at anytime',
            feature4: 'Access to data-base',
        }
    },
];
const Pricing = () => {
    return (
        <Container className="py-5">
            <Fade bottom>
            <Row>
                <Col xs={12}>
                    <h3 className="text-center title-text pt-5">Choose the best plan for you</h3>
                    <p className="text-center text-dark">Lorem ipsum dolor sit amet,consectetur adipisicing elit,<br/>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </Col>
                {
                    ServiceData.map(data =>

                        <Col className="p-5" md={6} lg={4}>
                            <Card className="shadow py-5">
                                <Card.Text className="title-text text-center font-30">
                                    {data.packageName}
                                </Card.Text>
                                <Card.Text className="text-dark text-center font-20">
                                    ${data.price}
                                </Card.Text>
                                <p className="text-dark ml-4"><GiCheckMark className="title-text" /> {data.feature.feature1}</p>
                                <p className="text-dark ml-4"><GiCheckMark className="title-text" /> {data.feature.feature2}</p>
                                <p className="text-dark ml-4"><GiCheckMark className="title-text" /> {data.feature.feature3}</p>
                                <p className="text-dark ml-4"><GiCheckMark className="title-text" /> {data.feature.feature4}</p>
                                <div className={`price-btn ${data.bgcolor}`}>
                                    <Link to="/">Sign up</Link>
                                </div>
                            </Card>
                        </Col>
                    )
                }
            </Row>
            </Fade>
        </Container>
    );
};

export default Pricing;