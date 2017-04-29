import React from 'react';
import WhoWeAre from '../WhoWeAre/WhoWeAre';
import Hero from '../Hero/Hero';
import FeaturedWork from '../FeaturedWork/FeaturedWork';
import WhatWeDo from '../WhatWeDo/WhatWeDo';
import WhereWeAre from '../WhereWeAre/WhereWeAre';
import Footer from '../Footer/Footer';


function Home() {
    return (
        <div>
            <Hero/>
            <WhoWeAre/>
            <WhatWeDo/>
            <WhereWeAre/>
            <Footer/>
        </div>
    );
}

export default Home;