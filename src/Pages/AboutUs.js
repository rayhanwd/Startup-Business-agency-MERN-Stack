import React from 'react';
import Footer from './../Components/Footer/Footer';
import AboutCompany from '../Components/AboutPage/AboutCompany';
import NavBar from './../Components/Nav/NavBar';

const AboutUs = () => {
    return (
        <>
            <NavBar background="navbar-bg"/>
            <AboutCompany/>
            <Footer/>
        </>
    );
};

export default AboutUs;