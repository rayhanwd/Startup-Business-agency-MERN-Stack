import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../Images/StartUp_logo.png';
const NavBar = (props) => {
    return (
        <div className={props.background}>
            <Navbar id="navbar" expand="lg">
                <Navbar.Brand href="/">
                    <img alt="START-UP LOGO mt-4" src={logo} className="d-inline-block align-top" />{' '}<span className="logo-text">START-UP</span><p className="logo-text">AGENCY</p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink className="ml-4 text-white" to="/">Home</NavLink>
                        <NavLink className="ml-4 text-white" to="/service">Service</NavLink>
                        <NavLink className="ml-4 text-white" to="/howwork">How Work</NavLink>
                        <NavLink className="ml-4 text-white" to="/aboutus">About us</NavLink>
                        <NavLink className="ml-4 text-white" to="/ourteam">Team</NavLink>
                        <NavLink className="ml-4 text-white" to="/blog">Blog</NavLink>
                        <NavLink className="ml-4 text-white" to="/contact">Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;