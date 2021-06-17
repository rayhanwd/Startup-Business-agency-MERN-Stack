import React from 'react';
import Blog from '../Components/Blog/Blog';
import BlogTitle from '../Components/BlogPage/BlogTitle';
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/Nav/NavBar';

const Blogs = () => {
    return (
        <>
            <NavBar background="navbar-bg" />
            <BlogTitle/>
            <Blog />
            <Footer />
        </>
    );
};

export default Blogs;