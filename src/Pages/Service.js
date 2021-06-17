import React from 'react';
import Footer from '../Components/Footer/Footer';
import ServiceTitle from '../Components/ServicePage/ServiceTitle';
import NavBar from './../Components/Nav/NavBar';
import ServiceMain from './../Components/ServicePage/ServiceMain';

const Service = () => {
    return (
        <>
            <NavBar background="navbar-bg" />
            <ServiceTitle/>
            <ServiceMain />
            <Footer />
        </>
    );
};

export default Service;