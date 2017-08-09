import React, {Component} from 'react';
import {SocialLinksList, SocialLinkTwitter, SocialLinkMail, SocialLinkFacebook, SocialListItem} from './SocialLinksStyle';
import {ScreenReaderText} from '../../style/theme';

const SocialLinks = (props) => (
    <SocialLinksList>
        <SocialListItem>
            <SocialLinkFacebook secondary={props.secondary} href="http://www.facebook.com">
                <ScreenReaderText>Facebook</ScreenReaderText>
            </SocialLinkFacebook>
        </SocialListItem>
        <SocialListItem>
            <SocialLinkTwitter secondary={props.secondary} href="http://www.twitter.com">
                <ScreenReaderText>Twitter</ScreenReaderText>
            </SocialLinkTwitter>
        </SocialListItem>
        <SocialListItem>
            <SocialLinkMail secondary={props.secondary}>
                <ScreenReaderText>Mail</ScreenReaderText>
            </SocialLinkMail>
        </SocialListItem>
    </SocialLinksList>
)

export default SocialLinks;