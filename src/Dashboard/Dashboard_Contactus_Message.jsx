import { Button, Card } from "antd";
import React from "react";
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { getIndividualContactus } from "../dbconfig";
const tabList = [
  {
    key: "ClientsInformation",
    tab: "Clients Information",
  },
  {
    key: "Messages",
    tab: "Messages",
  },
];

const Dashboard_Contactus_Message = () => {
  const param = useParams();
  const [message, setMessage] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await getIndividualContactus(param.id);
        setMessage(res);
      } catch (error) {}
    };
    fetchData();
  }, [param.id]);
  const [activeTabKey1, setActiveTabKey1] = useState("ClientsInformation");

  const onTab1Change = (key) => {
    console.log(activeTabKey1);
    setActiveTabKey1(key);
  };

  const contentList = {
    ClientsInformation: (
      <>
        <p>Client's Name : {message.name}</p>
        <p>Email : {message.email}</p>
        <p>Mobile Number: {message.mobile}</p>
      </>
    ),
    Messages: <p>{message.details}</p>,
  };

  const sendProgressBoard = (data) => {
    console.log(data);
  };
  return (
    <>
      <Card
        style={{ width: "100%" }}
        title={
          <>
            <b style={{ fontSize: "20px" }}>{message.name}</b> need some help!{" "}
          </>
        }
        extra={
          <Button
            onClick={() => sendProgressBoard(message)}
            style={{ marginTop: "20px" }}
            type="primary"
          >
            Send progress board
          </Button>
        }
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={(key) => {
          onTab1Change(key);
        }}
      >
        {contentList[activeTabKey1]}
      </Card>
    </>
  );
};

export default Dashboard_Contactus_Message;
