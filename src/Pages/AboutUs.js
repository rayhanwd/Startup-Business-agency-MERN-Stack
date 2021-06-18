import React from 'react';
import Footer from './../Components/Footer/Footer';
import AboutCompany from '../Components/AboutPage/AboutCompany';
import NavBar from './../Components/Nav/NavBar';
import ServiceMain from '../Components/ServicePage/ServiceMain';
import Main from '../Components/WorkProcessPage/Main';


const AboutUs = () => {
    document.title = 'About | Lk Startup Business Solution'
    return (
        <>
            <NavBar background="navbar-bg" />
            <AboutCompany />
            <ServiceMain />
            <Main />
            <Footer />
        </>
    );
};

export default AboutUs;