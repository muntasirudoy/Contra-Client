import React, { useEffect } from "react";
import BannerAnim from "rc-banner-anim";

// import "slick-carousel/slick/slick.css";
import slide1 from "/slide1.webp";
import slide3 from "/slide2.jpg";
import slide5 from "/slide1.jpg";
import slide6 from "/slide2.jpg";
import "./banner.css";

import "rc-banner-anim/assets/index.css";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";

import QueueAnim from "rc-queue-anim";
const { Element } = BannerAnim;
const BgElement = Element.BgElement;

const Slide = () => {
  return (
    <div className="all-banner">
      <BannerAnim prefixCls="banner-user">
        <Element
          prefixCls="banner-user-elem"
          key="0"
          followParallax={{
            delay: 1000,
            data: [
              {
                id: "bg",
                value: 20,
                bgPosition: "50%",
                type: ["backgroundPositionX"],
              },
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
                <div className="ov-cont">
                <QueueAnim
                  id="title"
                  className="banner-user-title"
                  animation={{ y: 0, opacity: 1, type: "from" }}
                >
                  <h1>
                    We are <span>Advance</span> <br /> and Right for the work
                  </h1>
                </QueueAnim>
                <QueueAnim
                  id="content"
                  className="banner-user-title"
                  animation={{ y: 0, opacity: 1, type: "from", delay: 100 }}
                >
                  <p>lorem Ipsum available, but the majority have suffered</p>
                </QueueAnim>

                <Link to="/projects"> OUR PROJECTS </Link>
              </div>
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
                <div className="ov-cont">
                <QueueAnim
                  id="title"
                  className="banner-user-title"
                  animation={{ y: 0, opacity: 1, type: "from" }}
                >
                  <h1>
                    We are <span>Advance</span> <br /> and Right for the work
                  </h1>
                </QueueAnim>
                <QueueAnim
                  className="banner-user-title"
                  animation={{ y: 0, opacity: 1, type: "from", delay: 100 }}
                >
                  <p>lorem Ipsum available, but the majority have suffered</p>
                </QueueAnim>
                <QueueAnim
                  className="banner-user-title"
                  animation={{ y: 0, opacity: 1, type: "from", delay: 200 }}
                >
                  <Link to="/projects"> OUR PROJECTS </Link>
                </QueueAnim>
              </div>
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
                 <div className="ov-cont">
                 <QueueAnim
                  id="title"
                  className="banner-user-title"
                  animation={{ y: 0, opacity: 1, type: "from" }}
                >
                  <h1>
                    We are <span>Advance</span> <br /> and Right for the work
                  </h1>
                </QueueAnim>
                <QueueAnim
                  className="banner-user-title"
                  animation={{ y: 0, opacity: 1, type: "from", delay: 100 }}
                >
                  <p>lorem Ipsum available, but the majority have suffered</p>
                </QueueAnim>
                <QueueAnim
                  className="banner-user-title"
                  animation={{ y: 0, opacity: 1, type: "from", delay: 200 }}
                >
                  <Link to="/projects"> OUR PROJECTS </Link>
                </QueueAnim>
                 </div>
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
                <div className="ov-cont">
                <QueueAnim
                  className="banner-user-title"
                  animation={{ y: 0, opacity: 1, type: "from" }}
                >
                  <h1>
                    We are <span>Advance</span> <br /> and Right for the work
                  </h1>
                </QueueAnim>
                <QueueAnim
                  className="banner-user-title"
                  animation={{ y: 0, opacity: 1, type: "from", delay: 100 }}
                >
                  <p>lorem Ipsum available, but the majority have suffered</p>
                </QueueAnim>
                <QueueAnim
                  className="banner-user-title"
                  animation={{ y: 0, opacity: 1, type: "from", delay: 200 }}
                >
                  <Link to="/projects"> OUR PROJECTS </Link>
                </QueueAnim>
              </div>
              </div>
            </div>
          </Parallax>
        </Element>
      </BannerAnim>

      {/* <BannerAnim

    >
      <Element key="aaa"
        prefixCls="banner-user-elem"
      >
        <BgElement
          key="bg"
          className="bg"
          style={{
            backgroundImage: {slide3},
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <QueueAnim name="QueueAnim">
          <h1 key="h1">Ant Motion Demo</h1>
          <p key="p">Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo</p>
        </QueueAnim>
        <QueueAnim animation={{ y: 50, opacity: 0, type: 'from', delay: 200 }} name="QueueAnim">
          Ant Motion Demo.Ant Motion Demo
        </QueueAnim>
      </Element>
      <Element key="bbb"
        prefixCls="banner-user-elem"
      >
        <BgElement
          key="bg"
          className="bg"
          style={{
            backgroundImage: 'url(https://os.alipayobjects.com/rmsportal/uaQVvDrCwryVlbb.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <QueueAnim name="QueueAnim">
          <h1 key="h1">Ant Motion Demo</h1>
          <p key="p">Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo</p>
        </QueueAnim>
        <QueueAnim animation={{ y: 50, opacity: 0, type: 'from', delay: 200 }} name="QueueAnim">
          Ant Motion Demo.Ant Motion Demo
        </QueueAnim>
      </Element>
    </BannerAnim> */}

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
