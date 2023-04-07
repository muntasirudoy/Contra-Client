import { Empty } from "antd";
import React from "react";

const NoFlats = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "400px",
        width: "100%",
        alignItems: "center",
      }}
    >
      <Empty
      style={{width:"200px"}}
      image="/ntg.jpg"
      imageStyle={{ height: 200 }}
        description={
          <span>
           No project found!
          </span>
        }
      />
    </div>
  );
};

export default NoFlats;
