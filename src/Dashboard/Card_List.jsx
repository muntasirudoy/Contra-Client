import React from "react";
import { EditOutlined } from "@ant-design/icons";
const Card_List = ({ heading, subheading }) => {
  return (
    <div className="card-list">
      <img src="/b1.jpg" alt="" />
      <div className="text">
        <h2>{heading} </h2>
        <p>{subheading}</p>
      </div>
      <div className="icons">
        <EditOutlined />
      </div>
    </div>
  );
};

export default Card_List;
