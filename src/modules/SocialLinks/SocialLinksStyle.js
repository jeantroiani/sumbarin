import styled from 'styled-components';
import facebookIcon from './facebook_circle_white.svg';
import twitterIcon from './twitter_circle_white.svg';
import instagramIconRed from './instagram_circle_red.svg';
import twitterIconRed from './twitter_circle_red.svg';
import facebookIconRed from './facebook_circle_red.svg';

export const SocialLinksList = styled.ul `
    display: block;
`;

export const SocialListItem = styled.li `
    width: 48px;
    height: 48px;
    display: inline-block;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
`;

const SocialLink = styled.a `
    display: block;
    height: 42px;
    width: 42px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center left;
`;

export const SocialLinkTwitter = SocialLink.extend `
    background-image: ${props => props.secondary ? `url(${twitterIconRed})` :`url(${twitterIcon})` };
`;

export const SocialLinkMail = SocialLink.extend `
    background-image: url(${twitterIcon});
`;

export const SocialLinkFacebook = SocialLink.extend `
    background-image: url(${facebookIcon});
`;