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

import { Container } from '../../style/styled/styles.js';

import one from './sumba mason 1.png';
import two from './sumba mason 2.png';
import three from './sumba mason 3.png';
import four from './sumba mason 4.png';
import five from './sumba mason 5.png';
import six from './sumba mason 6.png';
import seven from './sumba mason 7.png';

function FeaturedWork() {
    return (
        <FeatureWorkSection>
            <Container>
                <Title>Featured work</Title>
                <FeatureWorkSectionList>
                    <FeaturedClient image={one} alt={"photography"}/>
                    <FeaturedClient image={two} alt={"spanish homemade food"}/>
                    <FeaturedClient image={six} alt={"New Life Church Base Hove"}/>
                    <FeaturedClient image={five} alt={"New Life Church Base Hove"}/>
                    <FeaturedClient image={seven} alt={"spanish homemade food"}/>
                    <FeaturedClient image={three} alt={"New Life Church Base Hove"}/>
                    <FeaturedClient image={four} alt={"Woodlands fences"}/>
                </FeatureWorkSectionList>
            </Container>
        </FeatureWorkSection>
    );
}

export default FeaturedWork;