import styled from 'styled-components';
import { 
  Section,
  Section__Title,
  Section__Content
} from '../../style/styled/styles';

export const Title = styled(Section__Title) `
  color: white;
  text-align: left;
`;

export const WhoWeAreSection = styled(Section) `
    color: white;
    background-color: #F05958;
`;

export const Content = styled(Section__Content) `
  color: white;
`;
export const ContentBlack = styled(Section__Content) `
  padding: 8px 18px;
  color: white;
  background-color: #2A363C;
`;
