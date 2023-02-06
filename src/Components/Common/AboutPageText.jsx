import React from "react";

import { Row, Col } from "antd";
export const AboutPageText = (props) => {
  return (
    <div className="aboutpagetext">
      <Row className="row">
        <Col lg={3} md={3} sm={3}>
          <img className="manimage" src={props.img} />
        </Col>
        <Col className="text" lg={9} md={9} sm={9}>
          <h1>{props.name}</h1>
          <h6>{props.designation}</h6>
          <p>{props.details}</p>
        </Col>
      </Row>
    </div>
  );
};

export default AboutPageText;
