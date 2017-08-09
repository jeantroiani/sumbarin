import styled from 'styled-components';
import {theme} from '../../style/theme.js'
import menuIcon from './icon_menu.svg';



export const MenuButton = styled.button`
    background-image: url(${menuIcon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 32px;
    border: none;
    -webkit-appearance: initial;
    background-color: transparent;
    width: 42px;
    height: 42px;
    @media ${theme.query.medium} {
        display: none;
    }
`;

export const NavigationMenu = styled.div `
    background-color: ${theme.fg};
`;

export const Menu = styled('ul')`
    color: ${theme.bg};
    background-color: ${theme.fg};
    display: flex;
    padding: 18px 30px;
    justify-content: flex-end;
`;

export const MenuItem = styled.li `
    list-style: none;
    position: absolute;
    left: -1000px;
@media ${theme.query.medium} {
        position: relative;
        flex: 0 0 auto;
        margin-right: 12px;
        left: unset;
    }
`