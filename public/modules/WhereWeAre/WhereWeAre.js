import React from 'react';
import {
    Title,
    WhereWeAreSection,
    Content,
    Content__YellowBg,
    List,
    ItemList
} from './WhereWeAreStyle.js';


function WhereWeAre() {
    return (
        <WhereWeAreSection>
            <Title>Where we are</Title>
            <Content>
                This is where our crew and our control rooms are.
            </Content>
            <List>
                <ItemList>
                    <Content>UK</Content>
                    <Content__YellowBg>
                        London
                    </Content__YellowBg>
                    <Content>+44 7462184402
                    </Content>
                </ItemList>
                <ItemList>
                    <Content>USA</Content>
                    <Content__YellowBg>
                        Raleight
                    </Content__YellowBg>
                    <Content>+1 6086099071</Content>
                </ItemList>
                <ItemList>
                    <Content>Venezuela</Content>
                    <Content__YellowBg>
                        Maracaibo
                    </Content__YellowBg>
                    <Content>+58 4146201819</Content>
                </ItemList>
            </List>
        </WhereWeAreSection>
    );
}

export default WhereWeAre;