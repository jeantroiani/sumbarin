import styled from 'styled-components';
import {
    Link
} from 'react-router-dom';
import {
    theme
} from '../../style/theme.js'
import Scroll, { Link as ScrollLink } from 'react-scroll';

export const Section = styled.section `
    font-size: 16px;
    text-align: center;
    color: #2A363C;
    position: relative;
    background-color: white;
    padding: 40px 20px;
    padding: ${props => props.nopadding ? `0` : `40px 20px`};
    @media ${theme.query.medium} {
        padding: ${props => props.nopadding ? `0` : `40px 60px`};
    }  
`;

export const Section__Title = styled.h1 `
    font-size: 32px;
    padding-bottom: 14px;
    margin-bottom: 20px;
    color: white;
    text-align: left;
    background:
    linear-gradient(to left, rgb(56, 185, 184) 0%, rgb(5, 141,205) 100%) left bottom transparent no-repeat; 
    background-size: 50% 2px ;
    display: inline-block;
    @media (min-width: 768px) {
        font-size: 32px;
        margin-bottom: 30px;
    }
`

export const Subtitle = styled.h2 `
    font-size: 24px;
    padding-bottom: 14px;
    margin-bottom: 20px;
    color: rgb(30, 52, 110);
    text-align: text;
    display: inline-block;
    width: 100%;
    @media (min-width: 768px) {
        font-size: 32px;
        margin-bottom: 30px;
    }
`

export const ListTitle = styled.h3 `
    font-size: 18px;
    padding-bottom: 14px;
    margin-bottom: 20px;
    color: rgb(30, 52, 110);
    text-align: left;
    display: inline-block;
    width: 100%;
    @media (min-width: 768px) {
        font-size: 18px;
        margin-bottom: 30px;
    } 
`

export const SectionContent = styled.p `
    font-size: 16px;
    margin-bottom: 16px;
    color: white;
    text-align: left;
    color: ${props => props.secondary ? `rgb(30, 52, 110)` : `white`};  
    @media (min-width: 768px) {
        font-size: 20px;
        margin-bottom: 30px;
    }
`

export const Section__Content = styled.p `
    font-size: 16px;
    margin-bottom: 16px;
    color: white;
    text-align: left;
    @media (min-width: 768px) {
        font-size: 20px;
        margin-bottom: 30px;
    }       
`

export const Container = styled.div `
    max-width: 960px;
    margin: 0 auto;
    padding: ${props => props.withpadding ? `40px 20px` : `0`};
    @media ${theme.query.medium} {
        padding: ${props => props.withpadding ? `40px 60px` : `0`};
    }
`

export const SectionLink = styled(ScrollLink)`
    border: 1px white solid;
    color: white;
    text-transform: uppercase;
    padding: 12px 18px;
    display: inline-flex;
    text-decoration: none;
    border-radius: 2px;
    margin-bottom: 64px;
    background-color: rgb(30, 52, 110);
    &:hover {
        background: ${props => props.secondary ? `40px 20px` : `linear-gradient(to left, rgb(56, 185, 184) 0%, rgb(5, 141,205) 100%) left bottom transparent no-repeat;`};
        background-size: cover;
    };
`;

export const SectionButton = styled.button `
    border: 1px white solid;
    color: white;
    text-transform: uppercase;
    padding: 12px 18px;
    display: inline-flex;
    text-decoration: none;
    border-radius: 2px;
    margin-bottom: 16px;
    background: ${props => props.disabled ? `rgb(0, 0, 0)` : `rgb(30, 52, 110);`}
    background-size: cover;
    font-size: 16px;
    pointer-events: ${props => props.disabled ? `none` : `initial`};
    cursor: pointer;
    &:hover {
        background: ${props => props.secondary ? `40px 20px` : `linear-gradient(to left, rgb(56, 185, 184) 0%, rgb(5, 141,205) 100%) left bottom transparent no-repeat;`};
        background-size: cover;
    };
`;

export const NavLink = styled(Link)`
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    padding: 12px 18px;
    display: block;
    border-bottom: 2px transparent solid;
    &:hover {
        border-bottom: 2px white solid;
    };
`;

export const FormErrorContainer = styled.p `
    color: white;
    background-color: red;
    text-transform: uppercase;
    text-decoration: none;
    padding: 12px 18px;
    display: block;
    border-bottom: 2px transparent solid;
    &:hover {
        border-bottom: 2px white solid;
    };
`;