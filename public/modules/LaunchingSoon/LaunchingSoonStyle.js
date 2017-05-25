import styled from 'styled-components';
import {Section, Section__Title, Section__Content} from '../../style/styled/styles';

export const xx = styled(Section__Title)`
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

export const LanchingSoonSection = styled('div')`
    background-color: white;
    background-image: url(./public/img/backgrounds/loading.jpg);
    background-size: cover;
    height: 100vh;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
`;
