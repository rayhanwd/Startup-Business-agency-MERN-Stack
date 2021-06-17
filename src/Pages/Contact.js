import React from 'react';
import ContactForm from '../Components/ContactPage/ContactForm';
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/Nav/NavBar';

const Contact = () => {
    return (
        <>
            <NavBar background="navbar-bg" />
            <div className="page-title">
                <h1>Startup Agency / Contact</h1>
            </div>
            <ContactForm />
            <Footer />
        </>
    );
};

export default Contact;