import { Button, Result } from "antd";
import React from "react";

const Dashboard_Empty = () => {
  return (
    <div>
      <Result
        title="Your Clients Need Some help!"
        subTitle="You can see how message"
        extra={<Button type="primary">Select see message</Button>}
      />
    </div>
  );
};

export default Dashboard_Empty;
