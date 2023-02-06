import React from "react";
import Subheading from "./Subheading";
import Heading from "./Heading";
const AfterSaleText = (props) => {
  return (
    <div className="aftersaletext">
      <div class="col-12 md:col-12 lg:col-12">
        <Subheading subheading="If you have any further questions or queries please do not hesitate to get in touch." />
        <Heading heading="After sales service" />
      </div>
    </div>
  );
};

export default AfterSaleText;
