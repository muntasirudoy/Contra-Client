import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button, Descriptions } from 'antd'
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { EventStore } from '../Context/eventContext';
import { useState } from 'react';
import { getIndividualProjectInfoForClient } from '../dbconfig';
import OnPageLoader from '../Components/Common/OnPageLoader';



const Dashboard_YourClient_Single_Projects = () => {
  const navigate = useNavigate();
  const { dispatchEvent } = useContext(EventStore)
  const [projectInfo, setProjectInfo] = useState("")
  const param = useParams()

  const handleBack = () => {
    navigate(-1)
    try {
      dispatchEvent({
        type: "BACK_PAGE",
        payload: "2"
      })
    } catch (error) {

    }
  }
  useEffect(() => {
    getSingleProject()
  }, [])


  const getSingleProject = async () => {
    try {
      let res = await getIndividualProjectInfoForClient(
        "client_project_info",
        param.id
      );
      setProjectInfo(res)
    } catch (error) {

    }
  }

  const {
    projectName,
    land,
    foundation,
    address,
    refference,
    projjectid,
    floor,
    unit,
    rate,
    aptPrice,
    parkingPrice,
    utility,
    totalPrice,
    totalPriceInWord,
    monthlyInstallment,
    noInstallment,
    paymentMethod,
    paymentMode,
    bookingMoney,
    downPayment,
    bankName,
    bookingDate,
    downPaymentDate
  } = projectInfo;
  if (!projectInfo) {
    return <OnPageLoader />
  } else {
    return (
      <div className='dashboardClientSingleProject'>
        <div className="header">
          <Button onClick={handleBack} type="primary"> <ArrowLeftOutlined />  Back to All Projects</Button>
        </div>
        <Descriptions
          style={{ marginTop: "50px", fontSize: "22px" }} size='large'>
          <Descriptions.Item label="Project Name">{projectName}</Descriptions.Item>
          <Descriptions.Item label="Address">{address}</Descriptions.Item>
          <Descriptions.Item label="Reference">{refference}</Descriptions.Item>
          <Descriptions.Item label="Project Id">{projjectid}</Descriptions.Item>
        </Descriptions>

        <div style={{ marginTop: "50px" }}>
          <Descriptions title="Project Info" layout="vertical" bordered column={{
            xxl: 4,
            xl: 3,
            lg: 3,
            md: 3,
            sm: 2,
            xs: 1,
          }}>
            <Descriptions.Item label="land">{land}</Descriptions.Item>
            <Descriptions.Item label="foundation">{foundation}</Descriptions.Item>
            <Descriptions.Item label="floor">{floor}</Descriptions.Item>
            <Descriptions.Item label="unit">{unit}</Descriptions.Item>
          </Descriptions>
        </div>


        <div style={{ marginTop: "50px" }}>
          <Descriptions
            title="Pricing Details"
            bordered
            layout="vertical"
            column={{
              xxl: 8,
              xl: 6,
              lg: 6,
              md: 4,
              sm: 4,
              xs: 2,
            }}
          >
            <Descriptions.Item label="Project Price">{Number(aptPrice).toLocaleString("en-IN")}</Descriptions.Item>
            <Descriptions.Item label="Rate">{Number(rate).toLocaleString("en-IN")}</Descriptions.Item>
            <Descriptions.Item label="Parking Price">{Number(parkingPrice).toLocaleString("en-IN")}</Descriptions.Item>
            <Descriptions.Item label="Utility">{Number(utility).toLocaleString("en-IN")}</Descriptions.Item>
            <Descriptions.Item label="Total Price">{Number(totalPrice).toLocaleString("en-IN")}</Descriptions.Item>
            <Descriptions.Item label="Total Price InWord">
              {totalPriceInWord?.toUpperCase()}
            </Descriptions.Item>
          </Descriptions>
        </div>


        <div style={{ marginTop: "50px" }}>
          <Descriptions
            title="Payment Details"
            bordered
            layout="vertical"
            column={{
              xxl: 8,
              xl: 6,
              lg: 6,
              md: 4,
              sm: 4,
              xs: 2,
            }}
          >
            <Descriptions.Item label="Number of Installment">{noInstallment}</Descriptions.Item>
            <Descriptions.Item label="Monthly Installment">{Number(monthlyInstallment).toLocaleString("en-IN")} TK.</Descriptions.Item>
            <Descriptions.Item label="Payment Method">{paymentMethod?.toUpperCase()}</Descriptions.Item>
            <Descriptions.Item label="Payment Mode">{paymentMode?.toUpperCase()}</Descriptions.Item>
            <Descriptions.Item label="Booking Money">{Number(bookingMoney).toLocaleString("en-IN")} TK.</Descriptions.Item>
            <Descriptions.Item label="Down Payment">
              {Number(downPayment).toLocaleString("en-IN")} TK.
            </Descriptions.Item>
            <Descriptions.Item label="Bank Name">{bankName?.toUpperCase()}</Descriptions.Item>
          </Descriptions>
        </div>
      </div>
    )
  }
}

export default Dashboard_YourClient_Single_Projects