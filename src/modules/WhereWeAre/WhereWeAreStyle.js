import styled from 'styled-components';
import { 
  Section,
  Section__Title,
  Section__Content
} from '../../style/styled/styles';

export const WhereWeAreSection = styled(Section) `
    background-color: #64B195;
`;

export const Title = styled(Section__Title) `
  color: white;
`;

export const List = styled.ul `
    padding-left: 0;
    font-size: 18px;
    text-align: center;
    color: white;
    position: relative;
    overflow: hidden;
    background-color: #64B195;
    padding-top: 160px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    @media (min-width: 768px) {
      padding-top: 260px;
    }
    &:before {
      content: "";
      background-image: url(./public/img/backgrounds/map.svg);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      left: 0;
      top: 0;
      display: inline-block;
      position: absolute;
      width: 100%;
      height: 140px;
      @media (min-width: 768px) {
        height: 240px;
      }
    }
`;
export const Content__Title = styled.h2 `
    font-size: 18px;
    text-align: center;
    color: white;
    position: relative;
    overflow: hidden;
    background-color: #64B195;
`;

export const ItemList = styled.li `
    font-size: 18px;
    text-align: center;
    color: white;
    position: relative;
    overflow: hidden;
    background-color: #64B195;
    padding: 0 4px;
    flex: 0 0 calc(33.3333% - 8px);
    max-width: 220px;
`;

export const Content__YellowBg = styled(Section__Content) `
  display: inline-block;
  padding: 8px 8px;
  color: #2A363C;
  font-size: 18px;
  background-color: #FFDD17;
  margin-bottom: 12px;
`;

export const Content = styled(Section__Content) `
  color: white;
`;

export const List_Content = styled(Section__Content) `
  color: white;
  text-align: center;
`;