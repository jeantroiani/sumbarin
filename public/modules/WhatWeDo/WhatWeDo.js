import React from 'react';
import {
    Title,
    WhatWeDoSection,
    Content,
    Content__YellowBg
} from './WhatWeDoStyle.js';

function WhatWeDo() {
    return (
        <WhatWeDoSection>
            <Title>What we do</Title>
            <Content>
                Have you ever wanted to show the world what you do? We love to listen to our
                clients and help them find their own voice.
            </Content>
            <Content>
                We understand our client's needs and we have an specific insight for each of
                their projects.
            </Content>
            <Content__YellowBg>
                Let us tell your story.
            </Content__YellowBg>
            <Content>
                Websites. Apps. Brands. Campaigns. Social Media.
            </Content>
        </WhatWeDoSection>
    );
}

export default WhatWeDo;