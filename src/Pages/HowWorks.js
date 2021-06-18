import React from 'react';
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/Nav/NavBar';
import Main from '../Components/WorkProcessPage/Main';
import WorkPTitle from '../Components/WorkProcessPage/WorkPTitle';

const HowWorks = () => {
    document.title = 'How work | Lk Startup Business Solution'
    return (
        <>
            <NavBar background="navbar-bg" />
            <WorkPTitle/>
            <Main />
            <Footer />
        </>
    );
};

export default HowWorks;