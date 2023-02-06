import React from "react";
import { Row, Col } from "antd";
import Heading from "./Heading";
import Subheading from "./Subheading";
const CsrText = (props) => {
  return (
    <div className="csrtext">
      <Row gutter={[32, 32]}>
        <Col className="gutter-row" span={24}>
          <Subheading subheading="SOMETHING HERE" />
          <Heading heading="MAHMUD BUILDERS CHARITABLE FOUNDATION" />
          <p className="companydetails">{props.csrdetails}</p>
        </Col>
      </Row>
    </div>
  );
};

export default CsrText;
