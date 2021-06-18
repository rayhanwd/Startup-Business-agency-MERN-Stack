import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import work_img_0 from '../../Images/accept_terms.png';
import work_img_1 from '../../Images/alert_mc_24_hours.png';
import work_img_2 from '../../Images/authentication_fsn5.png';
import work_img_3 from '../../Images/confidential_letter_w6ux.png';
import work_img_4 from '../../Images/privacy_protection_nlwy.png';
import Slide from 'react-reveal/Slide';
import { Link } from 'react-router-dom';


const WorkData = [
    {
        image: work_img_0,
        title: 'Accept Terms',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus'
    },
    {
        image: work_img_1,
        title: 'Alert message for unwanted access',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus'
    },
    {
        image: work_img_2,
        title: 'Users authentication',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus'
    },
    {
        image: work_img_3,
        title: 'Confidential letter',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus'
    },
    {
        image: work_img_4,
        title: 'Secure your privacy',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus'
    }
];
const Main = () => {
    return (
        <Container>
            <Row>
                {
                    WorkData.map(data => <>
                        <Col md={6}>
                        <Slide left>
                            <div className="mt-5 pt-5">
                                <h3>{data.title}</h3>
                                <p>{data.description}</p>
                                <Link className="title-text" to='/'>Read more</Link>
                            </div>
                            </Slide>
                        </Col>

                        <Col md={6}>
                        <Slide bottom>
                            <div className="m-5">
                                <img className="img-fluid rounded-img" src={data.image} alt="" srcset="" />
                            </div>
                            </Slide>
                        </Col>
                    </>)
                }
            </Row>
        </Container>
    );
};

export default Main;