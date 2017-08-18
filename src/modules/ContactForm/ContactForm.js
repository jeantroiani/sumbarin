import React, {Component} from 'react';
import {
    Form,
    Input,
    Textarea,
    Label,
    Legend,
    Fieldset,
    Button
} from './ContactFormStyle';
import {SectionButton} from '../../style/styled/styles';
import {FormErrors} from '../FormErrors/FormErrors';
import Scroll, { Link, Element } from 'react-scroll';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            userName: '',
            formErrors: {
                email: '',
                userName: ''
            },
            emailValid: false,
            userNameValid: false,
            formValid: false
        }
    }
    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let userNameValid = this.state.userNameValid;

    switch(fieldName) {
        case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email  = emailValid ? '' : ' is invalid';
        break;
        case 'userName':
        userNameValid = value.length >= 3;
        fieldValidationErrors.userName = userNameValid ? '': ' is too short';
        break;
        default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    userNameValid: userNameValid
                    }, this.validateForm);
    }

    validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.userNameValid});
    }

    render() {
        return (
            <Form method="POST" action="http://formspree.io/sumbarinstudio@gmail.com">
                <Element name="contactForm">
                <Fieldset>
                    <Legend>Contact us</Legend>
                    <input type="hidden" name="_next" value="/"/>
                    <Label for="your-name">Your name</Label>
                    <Input name="userName" onChange={(event) => this.handleUserInput(event)} id="your-name" placeholder={"Your name"} type={'text'}/>
                    <Label for="your-email">Your email</Label>
                    <Input onChange={(event) => this.handleUserInput(event)} name="email" id="your-email" type={'email'}
                        placeholder={"Your email"}/>
                    <Textarea name="message" id="your message" placeholder={"How can we help you?"}/>
                    <SectionButton disabled={!this.state.formValid} type="submit">Submit</SectionButton>
                </Fieldset>
                <div>
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
                </Element>
            </Form>
        )
    }
}

export default ContactForm;