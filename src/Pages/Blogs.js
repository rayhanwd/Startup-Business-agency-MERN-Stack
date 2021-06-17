import React from 'react';
import Blog from '../Components/Blog/Blog';
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/Nav/NavBar';

const Blogs = () => {
    return (
        <>
        <NavBar background="navbar-bg"/>
        <div className="page-title">
            <h1>Startup Agency / Blog</h1>
        </div>
           <Blog/> 
           <Footer/>
        </>
    );
};

export default Blogs;