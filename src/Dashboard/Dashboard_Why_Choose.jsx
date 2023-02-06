import { LoadingOutlined } from "@ant-design/icons";
import { Card, Form, Input, Modal } from "antd";
import React, { useEffect, useState } from "react";
import Loader from "../Components/Common/Loader";
import OnPageLoader from "../Components/Common/OnPageLoader";
import {
  createDocumentsForHomeChoose,
  getHomeChoose,
  getIndividualChoose,
  updateHomeChoose,
} from "../dbconfig";
import Dashboard_Heading from "./Dashboard_Heading";
const defaultForm = { heading: "", details: "" };
const defaultForm2 = { cheading: "", cdetails: "" };
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 18,
      color: "white",
      marginRight: 5,
    }}
    spin
  />
);
const Dashboard_Why_Choose = () => {
  const [choose, setChoose] = useState([]);
  const [individualChoose, setIndividualChoose] = useState(defaultForm);
  const [loader, setLoader] = useState(false);
  const [check, setCheck] = useState(false);

  const [form] = Form.useForm();
  useEffect(() => {
    setLoader(true);
    const fetchData = async () => {
      let res = await getHomeChoose();
      if (res) {
        setLoader(false);
        setChoose(res);
        setCheck(true);
      }
    };
    fetchData();
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async () => {
    try {
      await updateHomeChoose(individualChoose);
    } catch (error) {}
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleChage = (e) => {
    setIndividualChoose({
      ...individualChoose,
      [e.target.name]: e.target.value,
    });
  };
  const handleEdit = async (e) => {
    showModal();
    try {
      let res = await getIndividualChoose(e.id);
      console.log(res);
      setIndividualChoose(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  // /////////////////////////////////////////////////////////

  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [createChoose, setCreateChoose] = useState(defaultForm2);
  const cshowModal = () => {
    setIsModalOpen2(true);
  };
  const chandleOk = async () => {
    console.log(createChoose);
    try {
      await createDocumentsForHomeChoose(createChoose);
    } catch (error) {}
    setIsModalOpen2(false);
  };
  const chandleCancel = () => {
    setIsModalOpen2(false);
  };
  const chandleChage = (e) => {
    setCreateChoose({
      ...createChoose,
      [e.target.name]: e.target.value,
    });
  };

  const createNewCard = async (e) => {
    e.preventDefault();
    cshowModal();
  };

  const { heading, details, id } = individualChoose;
  const { cheading, cdetails, cid } = createChoose;

  return (
    <div className="dashboard-home-content why-choose">
      <Dashboard_Heading
        heading="Why choose us"
        subheading="Customize your Why choose us content"
        createNew={createNewCard}
      />
      <div className="grid Whychoose">
        {loader ? (
          <OnPageLoader />
        ) : (
          choose &&
          choose.map((e) => (
            <div className="col-12 md:col-3 lg:col-3">
              <Card
                title="Why choose us "
                size="small"
                extra={<span onClick={() => handleEdit(e)}>Edit</span>}
              >
                <img src="" alt="" />
                <h1>{e.heading}</h1>
                <p>{e.details}</p>
              </Card>
            </div>
          ))
        )}
      </div>
      <Modal
        title="Update Why choose Content"
        open={isModalOpen}
        onOk={() => handleOk(id)}
        onCancel={handleCancel}
        centered
        width={450}
      >
        <Form layout="vertical" form={form} style={{ marginTop: "20px" }}>
          <Form.Item label="Heading">
            <Input
              placeholder="input placeholder"
              name="heading"
              onChange={handleChage}
              value={heading}
            />
          </Form.Item>

          <Form.Item label="Details">
            <Input
              placeholder="input placeholder"
              name="details"
              onChange={handleChage}
              value={details}
            />
          </Form.Item>
        </Form>
      </Modal>
      {/*  */}
      <Modal
        title="Update Why choose Content"
        open={isModalOpen2}
        onOk={() => chandleOk(cid)}
        onCancel={chandleCancel}
        centered
        width={450}
      >
        <Form layout="vertical" form={form} style={{ marginTop: "20px" }}>
          <Form.Item label="Heading">
            <Input
              placeholder="input placeholder"
              name="cheading"
              onChange={chandleChage}
              value={cheading}
            />
          </Form.Item>

          <Form.Item label="Details">
            <Input
              placeholder="input placeholder"
              name="cdetails"
              onChange={chandleChage}
              value={cdetails}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Dashboard_Why_Choose;
