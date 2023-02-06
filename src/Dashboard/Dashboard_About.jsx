import React, { useState } from "react";
import About from "../Components/About/About";
import Dashboard_About_Home from "./Dashboard_About_Home";
import Dashboard_Heading from "./Dashboard_Heading";

const Dashboard_About = ({ createNew }) => {
  return (
    <div className="dashboard-about">
      <div className="dashboard-home">
        <Dashboard_Heading
          heading="About Content"
          subheading="Customize your homepage about content"
          onChange={createNew}
        />
        <Dashboard_About_Home />
      </div>
      <div className="dashboar-page"></div>
    </div>
  );
};

export default Dashboard_About;
