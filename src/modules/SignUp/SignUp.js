import React from 'react';
import {
    Form,
    Input,
    Textarea,
    Label,
    Legend,
    Fieldset,
    SignUpFormGroup,
    
} from './SignUpStyle';
import {Container} from '../../style/styled/styles.js';
import { SectionButton } from '../../style/styled/styles';


function SignUp() {
    return (
        <div id="mc_embed_signup">
            <form action="//sumbarin.us16.list-manage.com/subscribe/post?u=b5cfd12990a73b98d0274e879&amp;id=939ef9e177" method="post" id="mc-embedded-subscribe-htmlForm" name="mc-embedded-subscribe-htmlForm" className="validate" target="_blank" noValidate>
                <div id="mc_embed_signup_scroll">
                        <SignUpFormGroup>
                            <div className="mc-field-group">
                                <Label htmlFor="mce-EMAIL">Email Address </Label>
                                <Input type="email"  name="EMAIL" className="required email" id="mce-EMAIL" placeholder="Your Email address" />
                            </div>
                            <div className="clear"><SectionButton type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button">Subscribe</SectionButton></div>                        
                        </SignUpFormGroup>                        
                        <div id="mce-responses" className="clear">
                            <div className="response" id="mce-error-response" style={{display:"none"}}></div>
                            <div className="response" id="mce-success-response" style={{display:"none"}}></div>
                        </div>
                    <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_b5cfd12990a73b98d0274e879_939ef9e177" tabIndex="-1" value=""/></div>
                </div>
            </form>
        </div>
    );
}

export default SignUp;