import styled from 'styled-components';
import {
	Section,
	Section__Title,
	Section__Content,
	Container
} from '../../style/styled/styles';
import {
    theme
} from '../../style/theme.js'

export const Title = styled(Section__Title)`
  	background-color: rgb(30, 52, 110);
`;

export const WhoWeAreSection = styled(Section)`
	color: black;
	background-color: rgb(30, 52, 110);
	text-align: left;
	position: relative;
`;

export const ContentBlack = styled(Section__Content)`
	padding: 8px 18px;
	color: white;
	display: inline-block;
`;

export const HalfScreen = styled.div `
	width: 100%;
	display: block;	
	display: flex;
	flex-wrap: wrap;
	@media ${theme.query.medium} {
		width: calc(50% - 40px);
		padding: 0;
    }
`

export const SecondScreen = styled.div`
	width: 100%;
	@media ${theme.query.medium} {
		width: 50%;
		position: absolute;
		right: 0;
		top: 0;
		height: 540px;
    }
`

export const ContainerWhoWeAre = Container.extend`
	@media ${theme.query.medium} {
		height: 460px;
		align-items: center;
		padding-top: 0;
		padding-bottom: 0;
		padding: ${props => props.withpadding ? `0` : `0`};
		display: block;
		display: flex;		
		padding: 0;
		
    }
`;