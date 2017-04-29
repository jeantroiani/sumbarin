import React from 'react';
import { Title, HeroSection, Hero__Content,Content__Container, Content, List__Item, List } from './FeaturedWorkStyle';

function FeaturedWork() {
    return (
        <HeroSection>
            <Content__Container>
                <Content>
                    <Title>Featured work</Title>
                    <List>
                        <List__Item>Websites.</List__Item>
                        <List__Item>Web Apps.</List__Item>
                        <List__Item>Wordpress.</List__Item>
                        <List__Item>Brands.</List__Item>
                        <List__Item>Campaign.</List__Item>
                        <List__Item>Social media.</List__Item>
                    </List>
                </Content>
            </Content__Container>
        </HeroSection>
    );
}

export default FeaturedWork;