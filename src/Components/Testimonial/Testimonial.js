import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import T_photo from '../../Images/Team_member/member2.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import SwiperCore, {
    Autoplay,Pagination
  } from 'swiper/core';

const ReviewData = [
    {
        photo: T_photo,
        name: 'Jhon due',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
    },
    {
        photo: T_photo,
        name: 'Brondon Runkel',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
    },
    {
        photo: T_photo,
        name: 'Justin brevier',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
    },
    {
        photo: T_photo,
        name: 'Timber lake',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'
    }
]
const Testimonial = () => {
    SwiperCore.use([Pagination, Autoplay]);
    return (
        <div className="background-img">
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <Swiper
                            loop={true}
                            slidesPerView={1}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false
                               
                            }}
                          
                        > 
                            {
                                ReviewData.map(data =>
                                    <SwiperSlide className="">
                                        <Card className="testimonial_card mt-15">
                                            <img className="w-10 img-fluid" src={data.photo} alt="" srcset="" />
                                            <h5>{data.name}</h5>
                                            <p className="font-12 pb-0 mb-0">{data.description}</p>
                                            <Link to="/" className="text-dark font-12 py-2">Read more</Link>
                                        </Card>
                                        </SwiperSlide>
                                )
                            }
                                
                        </Swiper>
                    </Col>
                    <Col xs={12} sm={6}>
                        <Slide right>
                            <div className="mt-15">
                                <h4 className="title-text">Our client testimonial</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                            </div>
                        </Slide>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Testimonial;