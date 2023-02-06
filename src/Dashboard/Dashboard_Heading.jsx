import React from "react";
import { PicRightOutlined, AppstoreAddOutlined } from "@ant-design/icons";

const Dashboard_Heading = ({ heading, subheading, createNew }) => {
  return (
    <div className="dashboar-heading">
      <div className="dashboar-heading-text">
        <PicRightOutlined />
        <div>
          <h1>{heading}</h1>
          <p>{subheading}</p>
        </div>
      </div>
      <div>
        {createNew && (
          <button className="createNewBtn" onClick={createNew}>
            <AppstoreAddOutlined /> Create New
          </button>
        )}
      </div>
    </div>
  );
};

export default Dashboard_Heading;
