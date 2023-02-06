import React from "react";
import Heading from "../Components/Common/Heading";
import Subheading from "../Components/Common/Subheading";
import Expert from "../Components/Expert/Expert";
import Layout from "../Layout";

export const Team = (props) => {
  return (
    <Layout>
      <div className="aboutpage">
        <div className="container">
          <Subheading subheading="OUR COMPANY" />
          <Heading heading="Management Team" />

          <Expert />
        </div>
      </div>
    </Layout>
  );
};

export default Team;
