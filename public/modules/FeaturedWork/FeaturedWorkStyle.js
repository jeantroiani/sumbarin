import styled from 'styled-components';

export const Title = styled.h1 `
  font-size: 32px;
  text-align: right;
  color: white;
  margin: 0;
  position: relative;
  color: #F7D067;
`;

export const HeroSection = styled.section `
    font-size: 18px;
    text-align: center;
    color: white;
    background-color: #F4F4F4;
    position: relative;
      &:after {
    content: "";
    background-image: url(./public/img/backgrounds/phone.jpg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    right: 0;
    top: 10%;
    position: absolute;
    width: 50%;
    height: 80%;    
  }
`;

export const Content__Container = styled.div `
  width: 50%;
  padding: 60px;
  box-sizing: border-box;
  background-color: rgb(42,55,60);
  position: relative;

`
export const Content = styled.div `
  padding-bottom: 100%;
  height: 0;
`

export const List = styled.ul `
  padding-left: 0;
  text-align: right;
  position: relative;
  padding-top: 80px;
    &:before {
    content: "";
    background-image: url(./public/img/backgrounds/waves.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center right;
    right: 0;
    top: 0;
    display: inline-block;
    position: absolute;
    height: 25px;
    overflow: hidden;
    width: 100%;
  }
`

export const List__Item = styled.li `
  color: white;
  list-style-type: none;
`