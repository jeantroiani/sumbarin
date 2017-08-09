import React from 'react';
import {
    Title,
    HeroSection,
    FeatureWorkSection,
    FeatureWorkSectionList,
    Content,
    ListItem,
    List
} from './FeaturedWorkStyle';

import FeaturedClient from '../FeaturedClient/FeaturedClient';

import {Container} from '../../style/styled/styles.js';

import australia from './australia.png';
import spanishHomemade from './spanishHomemade.png';
import newLifeChurch from './newlifechurch.png';
import woodlands from './woodlands.png';

function FeaturedWork() {
    return (
        <FeatureWorkSection>
            <Container>
                <Title>Featured work</Title>
                <FeatureWorkSectionList>
                    <FeaturedClient image={australia} alt={"australia photography"}/>
                    <FeaturedClient image={spanishHomemade} alt={"spanish homemade food"}/>
                    <FeaturedClient image={newLifeChurch} alt={"New Life Church Base Hove"}/>
                    <FeaturedClient image={woodlands} alt={"Woodlands fences"}/>
                    <FeaturedClient image={newLifeChurch} alt={"New Life Church Base Hove"}/>
                    <FeaturedClient image={woodlands} alt={"New Life Church Base Hove"}/>
                    <FeaturedClient image={spanishHomemade} alt={"spanish homemade food"}/>
                </FeatureWorkSectionList>
            </Container>
        </FeatureWorkSection>
    );
}

export default FeaturedWork;