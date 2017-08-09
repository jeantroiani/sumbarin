import React from 'react';
import {Title, FindUsSection} from './FindUsStyle';
import SocialLinks from '../SocialLinks/SocialLinks';

import {Container} from '../../style/styled/styles.js';

function FindUs() {
    return (
        <FindUsSection>
            <Container>
                <Title>Find us</Title>
                <SocialLinks />
            </Container>
        </FindUsSection>
    );
}

export default FindUs;