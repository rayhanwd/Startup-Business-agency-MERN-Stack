import React from 'react';
import Navbar from '../Nav/NavBar';
import HDContent from './HContent';

const Header = () => {
    return (
        <div className="header__bg">
            <Navbar />
            <HDContent/>
        </div>
    );
};

export default Header;