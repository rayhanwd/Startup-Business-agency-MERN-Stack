import React from 'react';
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/Nav/NavBar';
import JustMessage from '../Components/TeamPage/JustMessage';
import Member from '../Components/TeamPage/Member';

const Team = () => {
    return (
        <>
            <NavBar background="navbar-bg" />
            <Member />
            <JustMessage />
            <Footer />
        </>
    );
};

export default Team;