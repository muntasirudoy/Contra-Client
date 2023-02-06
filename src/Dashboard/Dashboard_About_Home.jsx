import React, { useEffect, useState } from "react";
import { Button, Form, Input, Radio, Card, List, Modal } from "antd";
import About from "../Components/About/About";
import {
  createDocumentsForHomeAbout,
  getHomeAbout,
  updateHomeAbout,
} from "../dbconfig";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const defaultForm = {
  title: "",
  subTitle: "",
  heading: "",
  headingStyledText: "",
  subHeading: "",
  listText1: "",
  listText2: "",
  listText3: "",
  listText4: "",
  details: "",
  setisfiedCount: "",
  buttonText: "",
};
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
const Dashboard_About_Home = () => {
  const [form] = Form.useForm();
  const [btnLoader, setBtnLoader] = useState(true);
  const [aboutForm, setAboutForm] = useState(defaultForm);
  const [listItem, setListItem] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      let res = await getHomeAbout();
      setAboutForm(res[0]);
      console.log(res);
    };
    fetchData();
  }, []);
  const {
    title,
    subTitle,
    heading,
    headingStyledText,
    subHeading,
    listText1,
    listText2,
    listText3,
    listText4,
    details,
    setisfiedCount,
    buttonText,
  } = aboutForm;

  const handleChage = (e) => {
    setAboutForm({
      ...aboutForm,
      [e.target.name]: e.target.value,
    });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async () => {
    await updateHomeAbout(aboutForm);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const submitAboutForm = async (e) => {
    e.preventDefault();
    setBtnLoader(true);
    try {
      await createDocumentsForHomeAbout(aboutForm);

      setAboutForm(defaultForm);
      setBtnLoader(false);
    } catch (error) {
      setError(error.message);
      setBtnLoader(false);
    }
  };

  return (
    <div className="dashboard-home-content">
      <div className="grid">
        <div className="col-12 md:col-6 lg:col-6">
          <Card
            title="Homepage About"
            size="small"
            extra={<span onClick={showModal}>Edit</span>}
          >
            <List itemLayout="horizontal">
              <List.Item>
                <List.Item.Meta title="Title" description={title} />
              </List.Item>
              <List.Item>
                <List.Item.Meta title="Sub Title" description={subTitle} />
              </List.Item>
              <List.Item>
                <List.Item.Meta title="Heading" description={heading} />
              </List.Item>
              <List.Item>
                <List.Item.Meta
                  title="Heading Styled Text"
                  description={headingStyledText}
                />
              </List.Item>
              <List.Item>
                <List.Item.Meta title="Sub Heading" description={subHeading} />
              </List.Item>
              <List.Item>
                <List.Item.Meta title="List Text1" description={listText1} />
              </List.Item>
              <List.Item>
                <List.Item.Meta title="List Text2" description={listText2} />
              </List.Item>
              <List.Item>
                <List.Item.Meta title="List Text3" description={listText3} />
              </List.Item>
              <List.Item>
                <List.Item.Meta title="List Text4" description={listText4} />
              </List.Item>
              <List.Item>
                <List.Item.Meta title="Details" description={details} />
              </List.Item>
              <List.Item>
                <List.Item.Meta
                  title="Setisfied Count"
                  description={setisfiedCount}
                />
              </List.Item>
              <List.Item>
                <List.Item.Meta title="Button Text" description={buttonText} />
              </List.Item>
            </List>
          </Card>

          <Modal
            title="Update Home About Content"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            centered
            width={550}
          >
            <Form layout="horizontal" form={form}>
              <Form.Item label="Title">
                <Input
                  placeholder="input placeholder"
                  name="title"
                  onChange={handleChage}
                  value={title}
                />
              </Form.Item>
              <Form.Item label="Sub-title">
                <Input
                  placeholder="input placeholder"
                  name="subTitle"
                  onChange={handleChage}
                  value={subTitle}
                />
              </Form.Item>
              <Form.Item label="Heading">
                <Input
                  placeholder="input placeholder"
                  name="heading"
                  onChange={handleChage}
                  value={heading}
                />
              </Form.Item>
              <Form.Item label="Heading Styled Text">
                <Input
                  placeholder="input placeholder"
                  name="headingStyledText"
                  onChange={handleChage}
                  value={headingStyledText}
                />
              </Form.Item>
              <Form.Item label="Sub-Heading">
                <Input
                  placeholder="input placeholder"
                  name="subHeading"
                  onChange={handleChage}
                  value={subHeading}
                />
              </Form.Item>
              <Form.Item label="List Text 1">
                <Input
                  placeholder="input placeholder"
                  name="listText1"
                  onChange={handleChage}
                  value={listText1}
                />
              </Form.Item>
              <Form.Item label="List Text 2">
                <Input
                  placeholder="input placeholder"
                  name="listText2"
                  onChange={handleChage}
                  value={listText2}
                />
              </Form.Item>
              <Form.Item label="List Text 3">
                <Input
                  placeholder="input placeholder"
                  name="listText3"
                  onChange={handleChage}
                  value={listText3}
                />
              </Form.Item>
              <Form.Item label="List Text 4">
                <Input
                  placeholder="input placeholder"
                  name="listText4"
                  onChange={handleChage}
                  value={listText4}
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
              <Form.Item label="Setisfied Count">
                <Input
                  placeholder="input placeholder"
                  name="setisfiedCount"
                  onChange={handleChage}
                  value={setisfiedCount}
                />
              </Form.Item>
              <Form.Item label="Button Text">
                <Input
                  placeholder="input placeholder"
                  name="buttonText"
                  onChange={handleChage}
                  value={buttonText}
                />
              </Form.Item>
              {/* <Form.Item>
                <Button
                  type="primary"
                  disabled={btnLoader ? true : false}
                  onClick={submitAboutForm}
                >
                  {btnLoader && <Spin indicator={antIcon} />} Submit
                </Button>
              </Form.Item> */}
            </Form>
          </Modal>
        </div>
        <div className="col-12 md:col-6 lg:col-6"></div>
      </div>
    </div>
  );
};

export default Dashboard_About_Home;
