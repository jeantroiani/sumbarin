import React from 'react';
import {
    Title,
    WhoWeAreSection,
    Content,
    ContentBlack
} from './WhoWeAreStyle.js';
import {
    Container
} from '../../style/styled/styles.js';
function WhoWeAre() {
    return (
        <WhoWeAreSection>
            <Container>
                <Title>Who we are</Title>
                    <Content>
                        We are a digital agency on both sides of the pond focused on developing the best content for your brand and using technology to bring it to the people.
                    </Content>
                    <ContentBlack>
                        Our passion is letting people know yours.
                    </ContentBlack>
                    <Content>
                        We love technology. We     are passionate about 
                        making content. We build relationships.
                    </Content>
                </Container>
        </WhoWeAreSection>
    );
}

export default WhoWeAre;