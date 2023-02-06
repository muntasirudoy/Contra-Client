import React from "react";
import Subheading from "./Subheading";
import Heading from "./Heading";
export const TitleText = ({ heading, subheading }) => {
  return (
    <>
      <div className="title-text">
        <div class="grid">
          <div class="col-12 md:col-12 lg:col-12">
            <Subheading subheading={subheading} />
            <Heading heading={heading} />
          </div>
        </div>
      </div>
    </>
  );
};
export default TitleText;
