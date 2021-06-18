import React from 'react';
import member_1 from '../../Images/Team_member/member1.jpg';
import member_2 from '../../Images/Team_member/member2.jpg';
import member_3 from '../../Images/Team_member/member3.jpg';
import { Row, Col, Card, Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const MemberData = [
    {
        name: 'Mahafuz Riad',
        position: 'System Analyst',
        photo: member_1
    },
    {
        name: 'Tamim Anaz',
        position: 'Database Security',
        photo: member_2
    },
    {
        name: 'Thony Rice',
        position: 'System Manager',
        photo: member_3
    }
]
const Member = () => {
    return (
        <Container>
            <div className="page-title">
                <h5>Startup Agency / Our Team</h5>
            </div>
            <Fade top>
            <Row>
                {
                    MemberData.map(data =>

                        <Col md={4}>
                            <Card className="shadow-sm my-5">
                                <Card.Img className="img-fluid" variant="top" src={data.photo} />
                                <Card.Body>
                                    <Card.Title className="service-title">{data.name}</Card.Title>
                                    <Card.Text className="service-description">
                                        {data.position}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>
            </Fade>
        </Container>
    );
};

export default Member;