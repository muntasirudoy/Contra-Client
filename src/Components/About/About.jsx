import React, { useEffect, useState } from "react";
import Heading from "../Common/Heading";
import { Row, Col } from "antd";
import { SwapRightOutlined } from "@ant-design/icons";
import icon from "/i4.png";
import aicon from "/a1.jpg";
import Subheading from "../Common/Subheading";
import "./about.css";
import { Link } from "react-router-dom";
import { getHomeAbout } from "../../dbconfig";

export const About = (props) => {
  const [abouData, setAboutData] = useState("");
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await getHomeAbout();
        setAboutData(res[0]);
      } catch (error) {}
    };
    fetch();
  }, []);

  const {
    title,
    subTitle,
    heading,
    headingStyledText,
    subHeading,
    listText1,
    listText2,
    listText3,
    listText4,
    details,
    setisfiedCount,
    buttonText,
  } = abouData;

  return (
    <div className="all-about">
      <div className="container">
        <div className="about">
          <Subheading subheading={subTitle} />
          <Heading heading={title} />
          <div className="details" data-aos="flip-down">
            <Row gutter={[24, 16]}>
              <Col xs={24} sm={24} md={14} lg={14}>
                <div className="detail-heading">
                  <h6>{subHeading}</h6>
                  <h2>
                    {heading}
                    <br />
                    <span>{headingStyledText}</span>{" "}
                  </h2>
                  <p>{details}</p>
                </div>
                <div className="detail-list">
                  <ul>
                    <li>
                      {" "}
                      <SwapRightOutlined />
                      {listText1}{" "}
                    </li>
                    <li>
                      <SwapRightOutlined />
                      {listText2}
                    </li>
                    <li>
                      <SwapRightOutlined />
                      {listText3}
                    </li>
                    <li>
                      <SwapRightOutlined />
                      {listText4}
                    </li>
                  </ul>
                  <div className="list-right">
                    <p className="list-para">
                      {setisfiedCount} <br /> <span>Satisfied Patients</span>{" "}
                    </p>
                    <img
                      style={{
                        width: "30%",
                        height: "100%",
                        padding: "10px",
                        background: "rgb(255, 178, 0)",
                      }}
                      src={icon}
                    />
                  </div>
                </div>
                <div className="detail-bottom">
                  <p>
                    “Constructor explains how you can enjoy high end flooring
                    like textured laminate”
                  </p>
                  <p className="link-btn">
                    {" "}
                    <Link to="/contact-us"> {buttonText}</Link>
                  </p>
                </div>
              </Col>

              <Col xs={24} sm={24} md={10} lg={10}>
                <div className="image">
                  <img style={{ width: "100%" }} src={aicon} />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
