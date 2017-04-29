import React from 'react';
import {
    Title,
    FooterSection,
    List,
    List__Item,
    Content,
    Link__Twitter,
    Link__Facebook,
    Link__Instagram
} from './FooterStyle.js';

function Footer() {
    return (
        <FooterSection>
            <Title>Get on board with us</Title>
            <Content>
                hello@sumbarin.com
            </Content>
            <List>
                <List__Item>
                    <Link__Twitter>Twitter</Link__Twitter>
                </List__Item>
                <List__Item>
                    <Link__Facebook>Facebook</Link__Facebook>
                </List__Item>
                <List__Item>
                    <Link__Instagram>Instagram</Link__Instagram>
                </List__Item>
            </List>
        </FooterSection>
    );
}

export default Footer;