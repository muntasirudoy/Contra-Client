import { Col, Row } from "antd";
import React from "react";
import "./trusted.css";
import imgb1 from "/w1.png";
import imgb2 from "/w2.png";
import imgb3 from "/w3.png";
import imgb4 from "/w4.png";
import imgb5 from "/w5.png";
import imgb6 from "/w6.png";
import imgb7 from "/w7.png";
import imgb8 from "/w8.png";
import Subheading from "../Common/Subheading";
import Heading from "../Common/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
const Trusted = () => {
  return (
    <div className="trusted">
      <div className="container">
        <Row>
          <Col span={24}>
            <Subheading subheading="Our Cliets" />
            <Heading heading="Our Trusted Big Clients!" />
          </Col>
        </Row>

        <Swiper
          spaceBetween={0}
          slidesPerView={4}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          className="all-cardt"
          modules={[Navigation]}
          navigation
          loop={true}
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 4,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 4,
            },
            575: {
              width: 575,
              slidesPerView: 3,
            },
            320: {
              width: 320,
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide>
            <div className="cardt">
              <img src={imgb1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cardt">
              <img src={imgb2} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cardt">
              <img src={imgb4} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cardt">
              <img src={imgb5} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cardt">
              <img src={imgb6} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cardt">
              <img src={imgb7} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cardt">
              <img src={imgb8} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Trusted;
