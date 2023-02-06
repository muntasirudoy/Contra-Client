import React from "react";
import "./common.css";
import underline from "../Common/under.png";
export const Heading = (props) => {
  return (
    <>
      <div className="heading-h1">
        <h1 data-aos="fade-down" data-ao-delay="0.5" data-aos-duration="300">
          {" "}
          {props.heading}{" "}
        </h1>
        <img
          className="header-img"
          src={underline}
          data-aos="fade-down"
          data-ao-delay="0.5"
          data-aos-duration="200"
        />
      </div>
    </>
  );
};

export default Heading;
