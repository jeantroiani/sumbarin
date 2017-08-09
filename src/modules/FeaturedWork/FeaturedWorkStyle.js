import styled from 'styled-components';
import {theme} from '../../style/theme.js'
import {Section, Section__Title, Section__Content} from '../../style/styled/styles';

export const Title = styled(Section__Title)`
  color: black;
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

export const ListItem = styled.li `
  color: white;
  list-style-type: none;
`

export const FeatureWorkSectionList = styled.ul `
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  justify-content: space-between;
  li {
	height: 240px;
	list-style: none;
	overflow: hidden;
	margin-bottom: 8px;
	@media ${theme.query.medium} {
		// height: 120px;
		&:nth-child(1) {
			flex: 0 0 calc(50% - 8px);
		}
		&:nth-child(2) {
			flex: 0 0 calc(50% - 8px);
		}
		&:nth-child(3) {
			flex: 0 0 calc(30% - 8px);
		}
		&:nth-child(4) {
			flex: 0 0 calc(40% - 8px);
		}
		&:nth-child(5) {
			flex: 0 0 calc(30% - 8px);
		}
		&:nth-child(6) {
			flex: 0 0 calc(50% - 8px);
		}
		&:nth-child(7) {
			flex: 0 0 calc(50% - 8px);
	  	}
	}
  }

`;

export const FeatureWorkSection = styled(Section)`
  color: black;
  text-align: left;
`;