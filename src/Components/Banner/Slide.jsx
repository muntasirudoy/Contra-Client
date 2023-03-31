import React, { useEffect } from "react";
import BannerAnim, { Element } from "rc-banner-anim";

// import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import slide1 from "/slide1.jpg";
import slide3 from "/slide2.jpg";
import slide4 from "/slide3.jpg";
import slide5 from "/slide1.jpg";
import slide6 from "/slide2.jpg";
import "./banner.css";
import "rc-banner-anim/assets/index.css";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import TweenOne, { TweenOneGroup } from "rc-tween-one";

const BgElement = Element.BgElement;

const Slide = () => {
  return (
    <div className="all-banner">
      <BannerAnim prefixCls="banner-user" autoPlay="true">
        <Element
          prefixCls="banner-user-elem"
          key="0"
          followParallax={{
            delay: 100000,
            data: [
              // { id: 'bg', value: 20, bgPosition: '50%', type: ['backgroundPositionX'] },
              { id: "title", value: 50, type: "x" },
              { id: "content", value: -30, type: "x" },
            ],
          }}
        >
          <Parallax
            blur={1}
            strength={500}
            className="single-banner"
            bgImage={slide3}
           >
            <div className="overlay">
              <div className="inoverlay">
                <div className="leftb"></div>
                <div className="rightb"></div>
                <TweenOne
                  id="title"
                  className="banner-user-title"
                  animation={{ y: 0, opacity: 1, type: "from" }}
                >
                  <h1>
                    We are <span>Advance</span> <br /> and Right for the work
                  </h1>
                </TweenOne>
                <TweenOne
                  id="content"
                  className="banner-user-title"
                  animation={{ y: 0, opacity: 1, type: "from", delay: 100 }}
                >
                  <p>lorem Ipsum available, but the majority have suffered</p>
                </TweenOne>
                <TweenOne
                  className="banner-user-title"
                  animation={{ y: 0, opacity: 1, type: "from", delay: 200 }}
                >
                  <p>
                    <Link to="/"> OUR SERVICE </Link>
                  </p>
                </TweenOne>
              </div>
            </div>
          </Parallax>
        </Element>

        <Element prefixCls="banner-user-elem" key="1">
          <Parallax
            blur={1}
            strength={500}
            className="single-banner"
            bgImage={slide1}
          >
            <div className="overlay">
              <div className="inoverlay">
                <div className="leftb"></div>
                <div className="rightb"></div>
                <TweenOne
                  className="banner-user-title"
                  animation={{ y: 0, opacity: 1, type: "from" }}
                >
                  <h1>
                    We are <span>Advance</span> <br /> and Right for the work
                  </h1>
                </TweenOne>
                <TweenOne
                  className="banner-user-title"
                  animation={{ y: 0, opacity: 1, type: "from", delay: 100 }}
                >
                  <p>lorem Ipsum available, but the majority have suffered</p>
                </TweenOne>
                <TweenOne
                  className="banner-user-title"
                  animation={{ y: 0, opacity: 1, type: "from", delay: 200 }}
                >
                  <p>
                    <Link to="/"> OUR SERVICE </Link>
                  </p>
                </TweenOne>
              </div>
            </div>
          </Parallax>
        </Element>

        <Element prefixCls="banner-user-elem" key="2">
          <Parallax
            blur={1}
            strength={500}
            className="single-banner"
            bgImage={slide6}
          >
            <div className="overlay">
              <div className="inoverlay">
                <div className="leftb"></div>
                <div className="rightb"></div>
                <TweenOne
                  className="banner-user-title"
                  animation={{ y: 0, opacity: 1, type: "from" }}
                >
                  <h1>
                    We are <span>Advance</span> <br /> and Right for the work
                  </h1>
                </TweenOne>
                <TweenOne
                  className="banner-user-title"
                  animation={{ y: 0, opacity: 1, type: "from", delay: 100 }}
                >
                  <p>lorem Ipsum available, but the majority have suffered</p>
                </TweenOne>
                <TweenOne
                  className="banner-user-title"
                  animation={{ y: 0, opacity: 1, type: "from", delay: 200 }}
                >
                  <p>
                    <Link to="/"> OUR SERVICE </Link>
                  </p>
                </TweenOne>
              </div>
            </div>
          </Parallax>
        </Element>

        <Element prefixCls="banner-user-elem" key="3">
          <Parallax
            blur={1}
            strength={500}
            className="single-banner"
            bgImage={slide5}
          >
            <div className="overlay">
              <div className="inoverlay">
                <div className="leftb"></div>
                <div className="rightb"></div>
                <TweenOne
                  className="banner-user-title"
                  animation={{ y: 0, opacity: 1, type: "from" }}
                >
                  <h1>
                    We are <span>Advance</span> <br /> and Right for the work
                  </h1>
                </TweenOne>
                <TweenOne
                  className="banner-user-title"
                  animation={{ y: 0, opacity: 1, type: "from", delay: 100 }}
                >
                  <p>lorem Ipsum available, but the majority have suffered</p>
                </TweenOne>
                <TweenOne
                  className="banner-user-title"
                  animation={{ y: 0, opacity: 1, type: "from", delay: 200 }}
                >
                  <p>
                    <Link to="/"> OUR SERVICE </Link>
                  </p>
                </TweenOne>
              </div>
            </div>
          </Parallax>
        </Element>
      </BannerAnim>



      {/* <Arrow arrowType="prev" key="prev" prefixCls="user-arrow" >
             <div className="arrow">Prev</div>
            </Arrow>
            <Arrow arrowType="next" key="next" prefixCls="user-arrow"  >
              <div className="arrow">Next</div>
            </Arrow> */}

      {/* </Slider> */}
    </div>
  );
};

export default Slide;