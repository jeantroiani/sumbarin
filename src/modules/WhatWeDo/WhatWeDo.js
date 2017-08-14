import React from 'react';
import {
    Title,
    WhatWeDoSection,
    Content,
    Content__YellowBg,
    List
} from './WhatWeDoStyle.js';

import { Container, SectionContent, Subtitle, SectionLink } from '../../style/styled/styles';

import Feature from '../Feature/Feature';
import iconMonitor from './icon_monitor.svg';
import iconMegaphone from './icon_megaphone.svg';
import iconSplines from './icon_splines.svg';
import iconMobile from './icon_mobile.svg';
import iconBubble from './icon_bubble.svg';
import iconAnalytics from './icon_analytics.svg';

function WhatWeDo() {
    return (
        <WhatWeDoSection>
            <Container>
                <Title>Services</Title>
                <SectionContent secondary>All of our services are custom-designed. We develop compelling experiences to bring revenue and maximize lifetime customer value.</SectionContent>
                <SectionLink to="/contact">Contact us</SectionLink>
            </Container>
            <Container>
                <List>
                    <Feature image={iconMonitor} title={'web development'} content={'Working hand in hand with your business strategy, our bespoke websites work to communicate your brand story and brand message.'} />
                    <Feature image={iconMegaphone} title={'marketing'} content={'We design and build bespoke eDM campaigns that work hand in hand with your wider marketing plan.'} />
                    <Feature image={iconSplines} title={'graphic design'} content={'Every successful brand is a well thought through strategy - without it brands fail even when their product or service should be an immediate success.'} />
                    <Feature image={iconMobile} title={'mobile app'} content={'Great looking and functional apps to take wherever you go. At Sumbarin we put the future in your hands.'} />
                    <Feature image={iconBubble} title={'social media'} content={'When a SM campaign is designed and implemented well it has the chance to make a real time business impact.'} />
                    <Feature image={iconAnalytics} title={'analytics'} content={'We measure, gather and interpret data constantly to make sure you are always moving in the right direction and everyone is on board with you.'} />
                </List>  
            </Container>
        </WhatWeDoSection>
    );
}

export default WhatWeDo;