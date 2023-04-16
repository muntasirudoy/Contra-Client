import React, { useEffect } from 'react';
import './category.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Card = (props) => {


    return <>
        <div className='single-card'  >
            <div className='category-image'>
                <img src={props.img} />
                <LazyLoadImage
                    alt={props.title}
                    src={props.img}
                    effect="blur"// use normal <img> attributes as props
                />
                <span>{props.title}</span>
            </div>
            <div className='overlay'> </div>
            <div className='category-text'>
                <h4> {props.title}</h4>
            </div>
        </div>
    </>;
};

export default Card
