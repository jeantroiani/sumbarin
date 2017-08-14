import styled, { keyframes } from 'styled-components';
import {theme} from '../../style/theme.js'
import cloud from './cloud.svg';
import sumbarin from './logo_sumbarin.png';
import {Section, Subtitle, Section__Title, Section__Content} from '../../style/styled/styles';


export const Title = styled(Section__Title)`
  font-family: rounded;
  font-size: 32px;
  padding-top: 140px;
  text-align: center;
  text-transform: lowercase;
  color: black;
  position: relative;
  background: initial;
  @media ${theme.query.medium} {
      padding-top: 220px;
  }
  &:before {
    content: "";
    background-image: url(${sumbarin});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    right: 50%;
    top: 0;
    display: inline-block;
    position: absolute;
    width: 300px;
    height: 140px;
    transform: translateX(50%);
    @media ${theme.query.medium} {
      height: 220px;
    }
  }
`;

const slideIn = keyframes`
  0% {
    right: -200px;
    opacity: .8;
  }
  25% {
    opacity: .7;
  }
  75% {
    opacity: .5;
  }
  100% {
    right: 0px; 
    opacity: .8;
  }
`;

const slideIn2 = keyframes`
  0% {
    right: 100%; 
    opacity: .8;
  }
  25% {
    opacity: .7;
  }
  75% {
    opacity: .5;
  }
  100% {
    right: 100%; 
    opacity: .8;
  }
`;

export const HeroSection = styled(Section)`
  background-color: ${theme.bg};
  overflow: hidden;  
`;

export const Hero__Content = Subtitle.extend`
  font-size: 20px;
  text-align: center;
  @media ${theme.query.medium} {
    font-size: 20px;    
  }
`
export const Content = styled.div `
  padding-bottom: 100%;
  height: 0;
`