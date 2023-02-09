import React, { useContext, useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import { Button, Col, Divider, Row } from "antd";
import { ImProfile } from "react-icons/im";
import { Store } from "../../Context/context";
import { useFormik } from "formik";
import OnPageLoader from "../Common/OnPageLoader";

const ClientPersonal = () => {
  const { currentUser, setCurrentUser } = useContext(Store);
  const { btnLaod, setBtnLoad} = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName:`${currentUser?.name}`,
      lastName: "",
      email:"",
      phoneNumber:""
    },


    onSubmit: (values) => {
        console.log(values)
    },
  });

if(!currentUser){
  return <OnPageLoader />
}else{
  return (
    <div>
      <h2>
        <ImProfile /> Personal Information
      </h2>
      <p>You can edit/update your personal information</p>
      <Divider />
      <form onSubmit={formik.handleSubmit}>
        <Row>
          <Col className="column" xs={24} sm={24} md={8} lg={8}>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
          </Col>
          <Col className="column" xs={24} sm={24} md={8} lg={8}>
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
             
            />
          </Col>
          <Col className="column" xs={24} sm={24} md={8} lg={8}>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
            />
          </Col>
          <Col className="column" xs={24} sm={24} md={8} lg={8}>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </Col>
        </Row>
        <button type="primary" loading={btnLaod} className="client-form-btn" >
          Loading
        </button>
  
      </form>
    </div>
  );
};
};

export default ClientPersonal;
