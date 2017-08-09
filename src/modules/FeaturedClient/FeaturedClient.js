import React from 'react';
import {
    Image
} from './FeaturedClientStyle';

const FeaturedClient = (props) => (
    <li>
        <Image src={props.image} alt={props.alt} sizes="(max-width: 40em) 100vw, 50vw" srcset={`${props.image} 200w, ${props.image2x} 400w,${props.image3x} 600w`} />  
    </li>
);

export default FeaturedClient;