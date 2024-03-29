import React from "react";

import { Row, Col } from "antd";
export const AboutPageText = (props) => {
  return (
    <div className="aboutpagetext">
      <Row className="row">
        <Col lg={8} md={8} sm={8}>
          <img className="manimage" src={props.img} />
        </Col>
        <Col className="text" lg={12} md={12} sm={12}>
          <h1>{props.name}</h1>
          <h6>{props.designation}</h6>
          <p>{props.details}</p>
        </Col>
      </Row>
    </div>
  );
};

export default AboutPageText;
