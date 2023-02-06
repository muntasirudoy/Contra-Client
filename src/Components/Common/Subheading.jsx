import React from 'react';
import './common.css'
export const Heading = (props) => {
  return <>
       <div className='subheading'>
           <p data-aos="fade-down" data-aos-duration="500"> {props.subheading} </p>
       </div>
  
  </>;
};

export default Heading
