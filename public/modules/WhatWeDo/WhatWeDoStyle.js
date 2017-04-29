import styled from 'styled-components';
import { 
  Section,
  Section__Title,
  Section__Content
} from '../../style/styled/styles';

export const Title = styled(Section__Title) `
  color: white;
`;

export const WhatWeDoSection = styled(Section) `
    background-color: #2A363C;
`;

export const Content = styled(Section__Content)`
  color: white;
`;

export const Content__YellowBg = styled(Section__Content) `
  display: inline-block;
  padding: 8px 8px;
  color: #2A363C;
  font-size: 18px;
  background-color: #FFDD17;
  margin-bottom: 12px;
`;
