import styled from 'styled-components';
import {Section, Section__Title, Section__Content, SectionContent} from '../../style/styled/styles';
import {theme} from '../../style/theme.js'

export const Title = styled(Section__Title)`
  color: black;
`;

export const WhatWeDoSection = styled(Section)`
  background-color: #F6F6F6;
  text-align: left;
`;

export const Content = styled(Section__Content)`
  color: white;
`;

export const Content__YellowBg = styled(Section__Content)`
  display: inline-block;
  padding: 8px 8px;
  background-color: #FFDD17;
`;

export const List = styled.ul `
  display: flex;
  flex-wrap: wrap;
  @media ${theme.query.large} {
      flex-wrap: no-wrap;
      justify-content: space-between;
    }  
`;
