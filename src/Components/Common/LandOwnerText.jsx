import React from "react";
import Heading from "./Heading";
import Subheading from "./Subheading";
const LandOwnerText = (props) => {
  return (
    <div className="ownertext">
      <div class="grid">
        <div class="col-12 md:col-12 lg:col-12">
          <Subheading subheading="SEND US" />
          <Heading heading="LAND & LAND OWNER INFORMATION" />
        </div>
      </div>
    </div>
  );
};

export default LandOwnerText;
