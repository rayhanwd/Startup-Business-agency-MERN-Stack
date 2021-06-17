import React from 'react';
import Footer from './../Components/Footer/Footer';
import AboutCompany from '../Components/AboutPage/AboutCompany';
import NavBar from './../Components/Nav/NavBar';

const AboutUs = () => {
    return (
        <>
            <NavBar background="navbar-bg" />
            <div className="page-title">
                <h1>Startup Agency / About us</h1>
            </div>
            <AboutCompany />
            <Footer />
        </>
    );
};

export default AboutUs;