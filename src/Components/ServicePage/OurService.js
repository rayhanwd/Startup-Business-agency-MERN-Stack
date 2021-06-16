import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../Nav/NavBar';
import ServiceMain from './ServiceMain';

const OurService = () => {
    return (
        <>
           <NavBar background="navbar-bg"/>
            <ServiceMain/>
            <Footer/>
        </>
    );
};

export default OurService;