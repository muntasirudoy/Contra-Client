import React from 'react';
import "slick-carousel/slick/slick.css"; 
import Slider from "react-slick";
import SamplePrevArrow from './SamplePrevArrow'
import slide1 from '../Common/slide.jpg'
import './common.css'

  const Slide= () => {

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      speed: 2000,

    };
    return (
      <div className='all-slider'>
      <Slider {...settings}>
        <div className='single-slide'>
          <img src={slide1} />
        </div>
        <div className='single-slide'>
          <img src={slide1} />
        </div>
        <div className='single-slide'>
          <img src={slide1} />
        </div>
        <div className='single-slide'>
          <img src={slide1} />
        </div>
        <div className='single-slide'>
          <img src={slide1} />
        </div>
        <div className='single-slide'>
          <img src={slide1} />
        </div>
      </Slider>
    </div>

    )
  };
  export default Slide;