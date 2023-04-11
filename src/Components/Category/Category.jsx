import React from "react";
import "./category.css";
import { Row, Col } from "antd";
import Card from "./card";
import c1 from "/c1.jpg";
import c2 from "/c2.jpg";
import c3 from "/c3.jpg";
import c4 from "/c4.jpg";
import { Link } from "react-router-dom";
export const Category = (props) => {
  return (
    <div className="category">
      <div className="container">
        <div className="category-plate">
          <Row gutter={[16, 24]} style={{width:"100%"}}>
            <Col
              className="gutter-row"
              data-aos="flip-left"
              data-aos-duration="1000"
              xs={24}
              sm={12}
              md={8}
              lg={6}
            >
              <Link to="./projects?redirect=2">
                {" "}
                <Card img={c1} title="Ready Projects" />{" "}
              </Link>
            </Col>
            <Col
              className="gutter-row"
              data-aos="flip-right"
              data-aos-duration="1000"
              xs={24}
              sm={12}
              md={8}
              lg={6}
            >
              <Link to="./projects?redirect=3">
                {" "}
                <Card img={c4} title="Ongoing Projects" />{" "}
              </Link>
            </Col>
            <Col
              className="gutter-row"
              data-aos="flip-right"
              data-aos-duration="1000"
              xs={24}
              sm={12}
              md={8}
              lg={6}
            >
              <Link to="./projects?redirect=4">
                {" "}
                <Card img={c3} title="Upcoming Projects" />{" "}
              </Link>
            </Col>

            <Col
              className="gutter-row"
              data-aos="flip-right"
              data-aos-duration="1000"
              xs={24}
              sm={12}
              md={8}
              lg={6}
            >
              <Link to="./projects?redirect=5">
                {" "}
                <Card img={c2} title="Complete Projects" />{" "}
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Category;
