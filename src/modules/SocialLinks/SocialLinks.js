import React, {Component} from 'react';
import {SocialLinksList, SocialLinkInstagram, SocialLinkTwitter, SocialLinkMail, SocialLinkFacebook, SocialListItem} from './SocialLinksStyle';
import {ScreenReaderText} from '../../style/theme';

const SocialLinks = (props) => (
    <SocialLinksList>
        <SocialListItem>
            <SocialLinkFacebook target="_blank" secondary={props.secondary} href="http://www.facebook.com/thesumbarin">
                <ScreenReaderText>Facebook</ScreenReaderText>
            </SocialLinkFacebook>
        </SocialListItem>
        <SocialListItem>
            <SocialLinkTwitter target="_blank" secondary={props.secondary} href="http://www.twitter.com/thesumbarin">
                <ScreenReaderText>Twitter</ScreenReaderText>
            </SocialLinkTwitter>
        </SocialListItem>
        <SocialListItem>
            <SocialLinkInstagram target="_blank" secondary={props.secondary} href="http://www.instagram.com/thesumbarin">
                <ScreenReaderText>Instagram</ScreenReaderText>
            </SocialLinkInstagram>
        </SocialListItem>
    </SocialLinksList>
)

export default SocialLinks;