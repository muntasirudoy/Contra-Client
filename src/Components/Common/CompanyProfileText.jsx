import React from "react";

import Subheading from "./Subheading";
import Heading from "./Heading";
const CompanyProfileText = (props) => {
  return (
    <div className="companyprofiletext">
      <Subheading subheading="WHO WE ARE" />
      <Heading heading="About MLBL" />
      <p className="companydetails" style={{textAlign:"center"}}>We are happy to introduce "Mahmud Land & Builders Limited", also known as MLBL, which is highly regarded by its numerous customers and supporters.</p>

      <p className="companydetails">{props.companydetails}</p>
      <div class="grid">
        <div class="col-8">
          <div class="grid">
            <div class="col-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfileText;
