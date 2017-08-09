import React from 'react';
import { Title, WhoWeAreSection, ContentBlack } from './WhoWeAreStyle.js';
import { SectionLink } from '../../style/styled/styles';
import { Container, SectionContent } from '../../style/styled/styles.js';
import { Carrousel } from '../Carrousel/Carrousel'; 

function WhoWeAre() {
    return (
        <WhoWeAreSection>
            <Container>
                <Title>About us</Title>
                <SectionContent>
                    Have you ever wanted to show the world what you do?
                </SectionContent>
                <SectionLink to="/about">Read more</SectionLink>
            </Container>
            <Container>
                <Carrousel/>
            </Container>
        </WhoWeAreSection>
    );
}

export default WhoWeAre;