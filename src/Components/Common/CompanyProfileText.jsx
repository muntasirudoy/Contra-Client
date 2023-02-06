import React from "react";

import Subheading from "./Subheading";
import Heading from "./Heading";
const CompanyProfileText = (props) => {
  return (
    <div className="companyprofiletext">
      <Subheading subheading="WHO WE ARE" />
      <Heading heading="About Mahmud Builders" />

      <p className="companydetails">{props.companydetails}</p>
      <div class="grid">
        <div class="col-8">
          <div class="grid">
            <div class="col-12"></div>
          </div>
        </div>
        <div class="col-4">4</div>
      </div>
    </div>
  );
};

export default CompanyProfileText;
