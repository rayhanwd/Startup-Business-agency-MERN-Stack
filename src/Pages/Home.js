import React from 'react';
import Header from '../Components/Header/Header';
import HowWork from '../Components/HowDo/HowDo';
import Pricing from '../Components/Pricing/Pricing';
import Services from '../Components/Services/Services';
import Feature from '../Components/SpecialFeature/Feature';


const Home = () => {
    return (
        <>
           <Header/> 
           <Services/>
           <HowWork/>
           <Feature/>
           <Pricing/>
        </>
    );
};

export default Home;