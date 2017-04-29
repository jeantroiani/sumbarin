import styled from 'styled-components';
import { 
  Section,
  Section__Title,
  Section__Content
} from '../../style/styled/styles';

export const Title = styled(Section__Title) `
  font-family: rounded;
  font-size: 36px;
  padding-top: 200px;
  text-align: center;
  text-transform: lowercase;
  &:before {
    content: "";
    background-image: url(./public/img/icons/logoSumbarinCircleRedBg.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    right: 50%;
    top: 30%;
    display: inline-block;
    position: absolute;
    width: 100px;
    height: 100px;
    transform: translateX(50%);
  }
`;

export const HeroSection = styled(Section) `
  background-color: white;
`;

export const Hero__Content = styled.p `
  display: inline-block;
  font-size: 20px;
  background: #FFDD17;
  color: #144D5B;
  padding: 8px 18px;
`
export const Content = styled.div `
  padding-bottom: 100%;
  height: 0;
`