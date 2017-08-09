import React from 'react';
import {
    Title,
    GetInTouchSection,
    Content,
} from './GetInTouchStyle';

import { Container } from '../../style/styled/styles.js';
import SocialLinks from '../SocialLinks/SocialLinks';
import ContactForm from '../ContactForm/ContactForm';

function GetInTouch() {
    return (
        <GetInTouchSection>
            <Container>
                <Title>Get In Touch</Title>
                <Content>If you have any questions about our services and how we could provide a solution for your business don’t hesitate to contact us.</Content>
                <ContactForm />
            </Container>
        </GetInTouchSection>
    );
}

export default GetInTouch;