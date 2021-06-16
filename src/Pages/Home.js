import React from 'react';
import Header from '../Components/Header/Header';
import HowWork from '../Components/HowDo/HowDo';
import Pricing from '../Components/Pricing/Pricing';
import Protection from '../Components/Protection/Protection';
import Services from '../Components/Services/Services';
import Feature from '../Components/SpecialFeature/Feature';
import Testimonial from '../Components/Testimonial/Testimonial';
import Blog from '../Components/Blog/Blog';
import Footer from '../Components/Footer/Footer';

const Home = () => {
    document.title = 'Lk Startup Business Solution'
    return (
        <>
           <Header/> 
           <Services/>
           <HowWork/>
           <Feature/>
           <Pricing/>
           <Protection/>
           <Testimonial/>
           <Blog/>
           <Footer/>
        </>
    );
};

export default Home;