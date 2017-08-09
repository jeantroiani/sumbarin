import React, {Component} from 'react';

import { Title, FeatureItem, Content } from './FeatureStyle';

const Feature = (props) => (
    <FeatureItem>
        <Title image={props.image}>{props.title}</Title>
        <Content>{props.content}</Content>
    </FeatureItem>
);

export default Feature;
