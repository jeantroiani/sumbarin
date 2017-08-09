import React from 'react';
import { Title, WhoWeAreSection, ContentBlack, HalfScreen, SecondScreen, ContainerWhoWeAre } from './WhoWeAreStyle.js';
import { SectionLink } from '../../style/styled/styles';
import { Container, SectionContent } from '../../style/styled/styles.js';
import Carousel from 'nuka-carousel';
import newLife from "./carrouselNewLife.png";
import bazzar from "./carrouselBazzar.png";
import zuppa from "./carrouselZuppa.png";

function WhoWeAre() {
    return (
        <WhoWeAreSection nopadding>
            <ContainerWhoWeAre withpadding >
                <HalfScreen>
                    <Title>About us</Title>
                    <SectionContent>
                        Have you ever wanted to show the world what you do?
                    </SectionContent>
                    <SectionLink to="/about">Read more</SectionLink>
                </HalfScreen>
            </ContainerWhoWeAre>
                <SecondScreen>
                    <Carousel>
                        <img src={newLife} />
                        <img src={bazzar} />
                        <img src={zuppa} />                        
                    </Carousel>
                </SecondScreen>
        </WhoWeAreSection>
    );
}

export default WhoWeAre;