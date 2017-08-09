import styled from 'styled-components';
import {Section, Section__Title, Section__Content, ListTitle} from '../../style/styled/styles';
import iconMonitor from './icon_monitor.svg';
import {theme} from '../../style/theme.js'


export const Title = styled(ListTitle)`
    color: black;
    letter-spacing: 3px;
    text-transform: uppercase;
    &:before {
        content: "";
        background-image: ${props => props.image ? `url(${props.image})` : iconMonitor};
        position: relative;
        height: 60px;
        width: 60px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 42px;
        top: 0;
        margin: 0 auto 12px;
        display: block;
        border-radius: 50%;
        padding: 10px;
        background-color: rgb(0, 118, 178);
    }
`;

export const WhatWeDoSection = styled(Section)`
    background-color: #F6F6F6;
    text-align: left;
`;

export const Content = styled(Section__Content)`
  color: black;
`;

export const Content__YellowBg = styled(Section__Content)`
  display: inline-block;
  padding: 8px 8px;
  background-color: #FFDD17;
`;

export const FeatureItem = styled.li `
    width: 100%;
    display: block;
    @media ${theme.query.large} {
        flex: 0 0 calc(33.3333% - 15px);
    }  
`;