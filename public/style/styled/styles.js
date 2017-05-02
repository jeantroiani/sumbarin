import styled from 'styled-components';

export const Section = styled.section `
    font-size: 16px;
    text-align: center;
    color: #2A363C;
    position: relative;
    background-color: white;
    padding: 40px 20px;
`;

export const Section__Title = styled.h1 `
    font-size: 24px;
    margin-bottom: 16px;
    color: #2A363C;
    text-align: left;
    @media (min-width: 768px) {
        font-size: 32px;
        margin-bottom: 30px;
    }
`

export const Section__Content = styled.p `
    font-size: 16px;
    margin-bottom: 16px;
    color: #2A363C;
    text-align: left;
    @media (min-width: 768px) {
        font-size: 20px;
        margin-bottom: 30px;
    }
        
`

export const Container = styled.div `
    max-width: 960px;
    margin: 0 auto;
`
