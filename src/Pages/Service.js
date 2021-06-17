import React from 'react';
import Footer from '../Components/Footer/Footer';
import NavBar from './../Components/Nav/NavBar';
import ServiceMain from './../Components/ServicePage/ServiceMain';

const Service = () => {
    return (
        <>
            <NavBar background="navbar-bg" />
            <div className="page-title">
                <h1>Startup Agency / Our Services</h1>
            </div>
            <ServiceMain />
            <Footer />
        </>
    );
};

export default Service;