import { Col, Row } from "antd";
import React from "react";
import "./trusted.css";
import imgb1 from "/P-01.png";
import imgb2 from "/P-02.png";
import imgb3 from "/P-03.png";
import imgb4 from "/P-04.png";
import imgb5 from "/P-05.png";
import imgb6 from "/P-06.png";


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
            <Subheading subheading="Our Partners" />
            <Heading heading="Our Trusted Partners!" />
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
            1140: {
              width: 1140,
              slidesPerView: 4,
            },
            940: {
              width: 940,
              slidesPerView: 4,
            },
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 4,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 3,
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
              <img src={imgb3} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cardt">
              <img src={imgb2} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Trusted;
