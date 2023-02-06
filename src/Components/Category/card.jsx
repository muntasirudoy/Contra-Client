import React from 'react';
import './category.css';
export const Card = (props) => {
  return <>
                    <div className='single-card'  >
                        <div className='category-image'>
                            <img src={props.img}  />
                        </div>
                            <div className='overlay'> </div>
                            <div className='category-text'> 
                            <h4> {props.title}</h4>
                        </div>
                    </div>
          </>;
};

export default Card
