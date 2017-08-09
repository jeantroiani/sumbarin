import styled from 'styled-components';
import {theme} from '../../style/theme.js'

export const Form = styled.form `

`;

export const Input = styled.input `
    border-radius: 2px;
    display: block;
    width: 100%;
    padding: 12px;
    border: 0;
    margin-bottom: 30px;
    box-sizing: border-box;
            font-size: 16px;


`;

export const Textarea = styled.textarea `
    display: block;
    width: 100%;
    padding: 12px;
    box-sizing: border-box;
    border-radius: 2px;
    border: 0;
    margin-bottom: 30px;
            font-size: 16px;

`;

export const Label = styled.label `
    display: block;
    position: absolute;
    left: -9999px;
`;

export const Legend = styled.legend `
    position:absolute;
        left:-9999px;
        width:100px;
        height:auto;
        overflow:hidden;
`;

export const Fieldset = styled.fieldset `
    border: none;
`;

export const Button = styled.button`
    border: 1px solid #65003A;
    border-radius: 4px;
    width: 100%;
    padding: 16px 12px;
    background-color: transparent;
        font-size: 16px;
        color: #65003A;
        cursor: pointer;
        &:hover {
            background-color: #65003A;
            color: white;
        }

`

// export const SubmitButton = styled(SectionButton) `
//     displ
// `;

export const SignUpFormGroup = styled.div `
    @media ${theme.query.large} {
            display: flex;
`;