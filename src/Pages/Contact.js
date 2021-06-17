import React from 'react';
import ContactForm from '../Components/ContactPage/ContactForm';
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/Nav/NavBar';

const Contact = () => {
    return (
        <>
            <NavBar background="navbar-bg" />
            <ContactForm />
            <Footer />
        </>
    );
};

export default Contact;