import React from 'react';
import WhoWeAre from '../WhoWeAre/WhoWeAre';
import Hero from '../Hero/Hero';
import FeaturedWork from '../FeaturedWork/FeaturedWork';
import WhatWeDo from '../WhatWeDo/WhatWeDo';
import WhereWeAre from '../WhereWeAre/WhereWeAre';
import Footer from '../Footer/Footer';
import LaunchingSoon from '../LaunchingSoon/LaunchingSoon';
import GetInTouch from '../GetInTouch/GetInTouch';
import Newsletter from '../Newsletter/Newsletter';
import FindUs from '../FindUs/FindUs';

function Home() {
    return (
        <div>
            <Hero />
            <WhoWeAre />
            <WhatWeDo />
            <FeaturedWork />
            <Newsletter />                    
            <GetInTouch />
            <FindUs />                 
        </div>
    );
}

export default Home;