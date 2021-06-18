import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';

import Blog__Img_0 from '../../Images/blog_0.png';
import Blog__Img_1 from '../../Images/blog_1.png';
import Blog__Img_2 from '../../Images/blog_2.png';

const BlogData = [
    {
        image: Blog__Img_0,
        title: 'See what mistakes to avoid when you start a business.',
    },
    {
        image: Blog__Img_1,
        title: 'How many entrepreneurs starts a business when was 20.',
    },
    {
        image: Blog__Img_2,
        title: 'What entrepreneurs say about the business mistakes.',
    }
];
const Blog = () => {
    return (
        <Container className="Blog-container">
            <Slide bottom>
                <Row>
                    <Col className="py-5 text-center" md={12}>
                        <h3 className="title-text">Our Latest Blog
                        </h3>
                        <p>We are provide our best services.We are also working on customer satisfaction<br /> and update our system to take our customer feedback

                        </p>
                    </Col>
                    {
                        BlogData.map(data =>

                            <Col className="py-5" md={4}>
                                <Card className="shadow-sm">
                                    <Card.Img className="Blog-img mx-auto" variant="top" src={data.image} />
                                    <Card.Body>
                                        <Link to="/"><h6 className="Blog-title title-text">{data.title}</h6></Link>
                                        <div className="title-text">
                                            <Link className="title-text" to="/">Read more</Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
                </Slide>
        </Container>
            );
};

            export default Blog;