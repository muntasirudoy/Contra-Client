import { Form, Input, Modal, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { createDocumentsForCategory, getAllCategory } from "../dbconfig";
import Dashboard_Heading from "./Dashboard_Heading";
import Dashboard_Table_Card from "./Dashboard_Table_Card";
import { defaultCategory } from "./utils";
const Dashboard_Project_Category = () => {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryForm, setCategoryForm] = useState(defaultCategory);
  const [btnLoader, setBtnLoader] = useState(true);
  const [allCatetgory, setAllCatetgory] = useState([]);
  const [skltn, setSkltn] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setSkltn(true);
      try {
        const res = await getAllCategory();
        setAllCatetgory(res);
        setSkltn(false);
      } catch (error) {}
    };
    fetchData();
  }, []);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async () => {
    await submitAboutForm();
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleChage = (e) => {
    setCategoryForm({
      ...categoryForm,
      [e.target.name]: e.target.value,
    });
  };

  const submitAboutForm = async (e) => {
    setBtnLoader(true);
    try {
      await createDocumentsForCategory(categoryForm);
      setAboutForm(defaultForm);
      setBtnLoader(false);
    } catch (error) {
      setBtnLoader(false);
    }
  };

  const { categoryName, categoryType, categoryDetails } = categoryForm;
  return (
    <div className="dashboard-project-container">
      <Dashboard_Heading
        heading="All Category"
        subheading="Add or update your projects"
      />
      <div className="dashboard-projects ready">
        <button className="projectBtn " onClick={showModal}>
          {" "}
          Create category
        </button>
        <div className="ready-table">
          <Dashboard_Table_Card data={allCatetgory} loader={skltn} />
        </div>
      </div>
      <Modal
        title="Create a new category"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        width={350}
      >
        <Form layout="horizontal" form={form} style={{ marginTop: "30px" }}>
          <Form.Item label="Category Name">
            <Input
              placeholder="input placeholder"
              name="categoryName"
              onChange={handleChage}
              value={categoryName}
            />
          </Form.Item>
          <Form.Item label="Category Type">
            <Input
              placeholder="input placeholder"
              name="categoryType"
              onChange={handleChage}
              value={categoryType}
            />
          </Form.Item>
          <Form.Item label="Category Details">
            <Input
              placeholder="input placeholder"
              name="categoryDetails"
              onChange={handleChage}
              value={categoryDetails}
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
  );
};

export default Dashboard_Project_Category;
