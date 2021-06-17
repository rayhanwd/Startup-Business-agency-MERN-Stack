import React from 'react';
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/Nav/NavBar';
import Main from '../Components/WorkProcessPage/Main';

const HowWorks = () => {
    return (
        <>
            <NavBar background="navbar-bg" />
            <div className="page-title">
                <h1>Startup Agency / How work</h1>
            </div>
            <Main/>
            <Footer />
        </>
    );
};

export default HowWorks;