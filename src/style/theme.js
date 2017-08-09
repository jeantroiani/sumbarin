import styled from 'styled-components';

export const theme = {
	fg: 'rgb(0, 118, 178);',
	fg2: '#173252',
	bg: 'white',
	query:
	{
		small: 'only screen and (min-width: 375px)',
		medium: 'only screen and (min-width: 667px)',
		large: 'only screen and (min-width: 940px)',
		extraLarge: 'only screen and (min-width: 1200px)'
	}
};

export const ScreenReaderText = styled('span')`
clip: rect(1px, 1px, 1px, 1px); 
   height: 1px; 
   width: 1px; 
   overflow: hidden; 
   position: absolute !important;
`;