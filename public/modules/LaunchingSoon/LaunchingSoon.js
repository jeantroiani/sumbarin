import React from 'react';
import {LanchingSoonSection, Title, Content, List, List__Item, Link__Facebook, Link__Twitter, Link__Instagram} from './LaunchingSoonStyle';

export default function LaunchingSoon() {
    return (
        <LanchingSoonSection>
            <Title>Sumbarin</Title>
            <Content>Be ready, we are lauching soon</Content>
            <List>
                <List__Item>
                    <Link__Twitter href="http://www.twitter.com/thesumbarin">Twitter</Link__Twitter>
                </List__Item>
                <List__Item>
                    <Link__Facebook href="http://www.facebook.com/thesumbarin">Facebook</Link__Facebook>
                </List__Item>
                <List__Item>
                    <Link__Instagram href="http://www.instagram.com/thesumbarin">Instagram</Link__Instagram>
                </List__Item>
            </List>
        </LanchingSoonSection>
    );
}