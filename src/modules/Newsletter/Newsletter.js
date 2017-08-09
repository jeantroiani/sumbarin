import React from 'react';
import {Title, NewsletterSection, Content} from './NewsletterStyle';
import SignUp from '../SignUp/SignUp';
import {Container} from '../../style/styled/styles.js';

function Newsletter() {
    return (
        <NewsletterSection>
            <Container>
                <Title>Newsletter</Title>
                <Content>Enter your email address below to receive occasional updates.</Content>
                <SignUp />
            </Container>
        </NewsletterSection>
    );
}

export default Newsletter;