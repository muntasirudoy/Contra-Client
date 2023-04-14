import { LockOutlined } from "@ant-design/icons";
import { Col, Form, Input } from "antd";
import React from "react";

const FormItem = ({ value, label, name, isRequired, placeholder }) => {
  return (
    <Col xs={24} sm={12} md={8} lg={8} xl={8}>
      <Form.Item value={value} label={label} name={name} {...isRequired}>
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder={placeholder}
        />
      </Form.Item>
    </Col>
  );
};

export default FormItem;
