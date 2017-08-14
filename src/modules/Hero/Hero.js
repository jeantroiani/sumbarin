import React from 'react';
import { Title, Subtitel, HeroSection, Hero__Content, Content } from './HeroStyle';
import { Container, SectionContent, Subtitle, SectionLink } from '../../style/styled/styles';

const Hero = () => (
        <HeroSection>
            <Title>Sumbarin</Title>
            <Hero__Content>from an idea to a memorable experience.</Hero__Content>
            {/*<Hero__Content>Visual stories we love to tell</Hero__Content>*/}
        </HeroSection>
);

export default Hero;