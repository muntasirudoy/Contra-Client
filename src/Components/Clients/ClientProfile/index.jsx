import { Col, Divider, List, Row, Tag, Typography } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Store } from "../../../Context/context";
import { getCurrentUser } from "../../../dbconfig";
import Layout from "../../../Layout";
import { FaHouseUser } from 'react-icons/fa';
import { AiFillProfile } from 'react-icons/ai';
import { HiUsers } from 'react-icons/hi';
import { BiUserPin } from 'react-icons/bi';
import { MdPayment } from 'react-icons/md';
const ClientProfile = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(Store);
  const [userInfo, setUserInfo] = useState("");
  const data = [{
    lable : <Link to="/client-profile/client-personal-info" >Personal Information</Link>,
    icon: <FaHouseUser fontSize={18}/>
  },{
    lable : <Link to="/client-profile/client-projects" >Project Details</Link>,
    icon: <AiFillProfile fontSize={18}/>
  },
  {
    lable : <Link to="/client-profile/client-payment" >Payment</Link>,
    icon: <MdPayment fontSize={18}/>
  },
  {
    lable : <Link to="/client-profile/client-nominee" >Nominee</Link>,
    icon: <HiUsers fontSize={18}/>
  },
  {
    lable : <Link to="/client-profile/client-personal-info" >Personal Information</Link>,
    icon: <BiUserPin fontSize={18}/>
  }
  ];
  return (
    <Layout>
      <div className="container clients-profile">
        <Row className="text-card">
          <Col xs={24} sm={24} md={6} lg={6}>
            <div className="left">
              <div className="clients-profile-card">
                <div className="clients-profile-image">
                  <img src="/person3.jpg" alt="image" />
                </div>
                <div className="text">
                  <h4>
                    <b>MR. {currentUser?.username}</b>
                  </h4>
                  <p>{currentUser?.email}</p>
                </div>
                <Tag color="volcano">Client</Tag>
              </div>
              <List
                bordered
                header={<>Client's Information</>}
                dataSource={data}
                renderItem={(item) => (
                  <List.Item>
                   {item.icon} {item.lable}
                  </List.Item>
                )}
              />
            </div>
          </Col>
          <Col xs={24} sm={24} md={18} lg={18}>
            <div className="right">
              <Outlet />
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default ClientProfile;
