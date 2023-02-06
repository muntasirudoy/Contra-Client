import React from "react";
import Subheading from "./Subheading";
import Heading from "./Heading";
const ApplyText = (props) => {
  return (
    <div className="aftersaletext">
      <div className="grid">
        <div className="col-12 md:col-12 lg:col-12">
          <Subheading subheading="Send us your details." />
          <Heading heading="SHARE YOUR DETAILS" />
        </div>
      </div>
    </div>
  );
};

export default ApplyText;
