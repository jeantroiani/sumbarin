import React from 'react';
import {
    Title,
    WhereWeAreSection,
    Content,
    Content__YellowBg,
    List,
    ItemList,
    List_Content
} from './WhereWeAreStyle.js';
import { Container } from '../../style/styled/styles';

function WhereWeAre() {
    return (
        <WhereWeAreSection>
            <Container>
                <Title>Where we are</Title>
                <Content>
                    This is where our crew and our control rooms are.
                </Content>
                <List>
                    <ItemList>
                        <List_Content>UK</List_Content>
                        <Content__YellowBg>
                            London
                        </Content__YellowBg>
                        <List_Content>+44 7462184402
                        </List_Content>
                    </ItemList>
                    <ItemList>
                        <List_Content>USA</List_Content>
                        <Content__YellowBg>
                            Raleight
                        </Content__YellowBg>
                        <List_Content>+1 6086099071</List_Content>
                    </ItemList>
                    <ItemList>
                        <List_Content>Venezuela</List_Content>
                        <Content__YellowBg>
                            Maracaibo
                        </Content__YellowBg>
                        <List_Content>+58 4146201819</List_Content>
                    </ItemList>
                </List>
            </Container>
        </WhereWeAreSection>
    );
}

export default WhereWeAre;