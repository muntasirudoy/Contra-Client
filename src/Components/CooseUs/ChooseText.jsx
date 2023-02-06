import React from 'react'
import { Link } from 'react-router-dom'
import './choose.css'
const ChooseText = (props) => {
  return (
    <div className='choose-text'>
    <div className='leftc'></div>
    <div className='rightc'></div>
    <div className='c-content'>
        <img className='cicon' src={props.img} />
        <h3 >{props.heading}</h3>
        <p>{props.para}</p>
        <Link to='/ContactUs'> Contact Now </Link> 
    </div>
</div> 
  )
}

export default ChooseText