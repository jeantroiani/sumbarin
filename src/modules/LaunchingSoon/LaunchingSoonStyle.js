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

    background-size: cover;
    height: 100vh;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
`;

export const Title = styled('h1')`
  font-family: rounded;
  font-size: 80px;
  padding-top: 200px;
  text-align: center;
  text-transform: lowercase;
  color: white;
  @media (min-width: 768px) {
		  font-size: 120px;
	}
`;

export const Content = styled('p')`
  font-family: lato;
  font-size: 24px;
  text-align: center;
  text-transform: lowercase;
  color: white;
  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

export const List = styled.ul `
  color: rgb(32, 42, 46);
  margin-bottom: 20px;
  padding-left: 0;
`
export const List__Item = styled.li `
  color: black;
  display: inline-block;
  flex: 0 0 auto;
  font-size: 28px;
  width: 42px;
  height: 42px;
  margin: 0 24px;
`

export const Social__Link = styled.a `
  color: white;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  text-indent: -9999px;
  white-space: nowrap;
  display: inline-block;
  position: relative;
  height: 100%;
  width: 100%;
  transtion: color .2s;
  &:hover {
    color: black;
  }
`
export const Link__Twitter = styled(Social__Link)`
`
export const Link__Facebook = styled(Social__Link)`
`
export const Link__Instagram = styled(Social__Link)`
`
