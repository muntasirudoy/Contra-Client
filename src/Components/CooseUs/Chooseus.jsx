import { Col, Row } from "antd";
import React from "react";
import "./choose.css";
import choosebg from "/choose.png";
import Subheading from "../Common/Subheading";
import Heading from "../Common/Heading";
import { Link } from "react-router-dom";
import i1 from "/i1.png";
import i2 from "/i2.png";
import i3 from "/i3.png";
import i4 from "/i4.png";
import i5 from "/i5.png";
import i6 from "/i6.png";
import ChooseText from "./ChooseText";

const Chooseus = () => {
  return (
    <div className="choose">
      <img className="bg-image" src={choosebg} />
      <div className="container">
        <Row>
          <Col span={24}>
            <div className="choose-heading">
              <Subheading subheading="who we are" />
              <Heading heading="WHY CHOOSE US" />
            </div>
          </Col>
        </Row>
        <Row className="text-card">
          <Col xs={24} sm={12} md={8} lg={8}>
            {" "}
            <ChooseText
              img={i1}
              heading="BEST SERVICE"
              para="lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident."
            />
              
          </Col>
          <Col xs={24} sm={12} md={8} lg={8}>
            {" "}
            <ChooseText
              img={i2}
              heading="INTEGRITY"
              para="lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident."
            />{" "}
          </Col>
          <Col xs={24} sm={12} md={8} lg={8}>
            {" "}
            <ChooseText
              img={i3}
              heading="STRATEGY"
              para="lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident."
            />{" "}
          </Col>
          <Col xs={24} sm={12} md={8} lg={8}>
            {" "}
            <ChooseText
              img={i4}
              heading="SAFETY"
              para="lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident."
            />{" "}
          </Col>
          <Col xs={24} sm={12} md={8} lg={8}>
            {" "}
            <ChooseText
              img={i5}
              heading="COMMUNITY"
              para="lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident."
            />{" "}
          </Col>
          <Col xs={24} sm={12} md={8} lg={8}>
            {" "}
            <ChooseText
              img={i6}
              heading="SUSTAINABILITY"
              para="lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident."
            />{" "}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Chooseus;
