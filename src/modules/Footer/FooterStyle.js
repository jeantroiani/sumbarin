import styled from 'styled-components';
import {Section, Section__Title, Section__Content} from '../../style/styled/styles';

export const Title = styled(Section__Title)`
  color: white;
  text-align: center;
  padding-top: 120px;
    &:before {
      content: "";
      background-image: url(./public/img/icons/logoSumbarin.svg);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      right: 50%;
      top: 40px;
      display: inline-block;
      position: absolute;
      width: 100px;
      height: 100px;
      transform: translateX(50%);
  }
`;

export const FooterSection = styled(Section)`
    background-color: #2A363C;
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
export const Content = styled(Section__Content)`
  color: white;
  text-align: center;
`
export const Social__Link = styled.a `
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  text-indent: -9999px;
  white-space: nowrap;
  display: inline-block;
  position: relative;
  height: 100%;
  width: 100%;
`
export const Link__Twitter = styled(Social__Link)`
  // background-image: url(./public/img/icons/logoTwitter.svg);
`
export const Link__Facebook = styled(Social__Link)`
  background-image: url(./public/img/icons/logoFacebook.svg);
`
export const Link__Instagram = styled(Social__Link)`
  background-image: url(./public/img/icons/logoInstagram.svg);
`
