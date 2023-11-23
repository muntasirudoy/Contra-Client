import React from 'react'
import OnPageLoader from '../Components/Common/OnPageLoader'
import { Button, Col, Form, Input, Row, Spin } from 'antd'
import { LoadingOutlined, LockOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { useRef } from 'react'
import { getIndividualProjectInfoForPayment, } from '../dbconfig'
import { ToastContainer, toast } from 'react-toastify'

const antIcon = <LoadingOutlined style={{ fontSize: 18 }} spin />;
const Dashboard_Make_Payment = () => {

    const [id, setId] = useState("");
    const [clientId, setClientId] = useState("");
    const [projectId, setProjectId] = useState("");
    const [loader, setLoader] = useState(false);
    const [btnLoader, setBtnLoader] = useState(false);

    const [form] = Form.useForm();
    const formRef = useRef(null);

    const onFinish = async (values) => {
        setBtnLoader(true);
        const data = {
            dueAmount: (form.getFieldValue("dueAmount") - Number(values.payAmount)),
            id
        };

        const transaction = {
            projectId: id,
            clientId,
            paymentDate: new Date().toLocaleDateString(),
            payAmount: Number(values.payAmount),
            projectName: form.getFieldValue("projectName")
        }


        try {
            // await updateIndividualProjectInfoForClient(data);
            // await createDocumentsForClientPaymentTransaction(transaction)
            setBtnLoader(false);
            toast.success('🦄 Wow so easy!', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        } catch (error) {
            setBtnLoader(false);
        }
    };

    const onSearchProjectByProjectId = async () => {
        setLoader(true);
        let res = await getIndividualProjectInfoForPayment(
            "client_project_info",
            projectId
        );

        if (res) {
            setId(res.id)
            setClientId(res.clientId)
            setLoader(false);
            form.setFieldValue("projectName", res.projectName);
            form.setFieldValue("aptPrice", Number(res.aptPrice).toLocaleString("en-IN"))
            form.setFieldValue("address", res.address);
            form.setFieldValue("totalPrice", Number(res.totalPrice).toLocaleString("en-IN"));
            form.setFieldValue("dueAmount", Number(res.dueAmount));
            form.setFieldValue("id", res.id);
        }
    };
    return (
        <>
            <div>
                {loader ? (
                    <OnPageLoader />
                ) : (
                    <>
                        <Form.Item label="Project ID" name="projectid">
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                suffix={
                                    <Button
                                        onClick={onSearchProjectByProjectId}
                                        style={{ background: "#285496", color: "white" }}
                                    >
                                        Find
                                    </Button>
                                }
                                onInput={(e) => setProjectId(e.target.value)}
                                placeholder="Find project by project ID"
                            />
                        </Form.Item>

                        <Form
                            layout="vertical"
                            form={form}
                            ref={formRef}
                            style={{ marginTop: "20px" }}
                            onFinish={onFinish}
                        >
                            <Row gutter={[24, 0]}>
                                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                                    <Form.Item label="Project Name" name="projectName">
                                        <Input
                                            prefix={<LockOutlined className="site-form-item-icon" />}
                                            placeholder="Project Name"
                                        />
                                    </Form.Item>
                                </Col>

                                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                                    <Form.Item label="Address" name="address">
                                        <Input
                                            prefix={<LockOutlined className="site-form-item-icon" />}
                                            placeholder="Address"
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                                    <Form.Item label="Apartment Price" name="aptPrice">
                                        <Input
                                            prefix={<LockOutlined className="site-form-item-icon" />}
                                            placeholder="Apartment Price"
                                        />
                                    </Form.Item>
                                    <Form.Item label="Due Amount" name="dueAmount">
                                        <Input
                                            prefix={<LockOutlined className="site-form-item-icon" />}
                                            placeholder="Due Amount"
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                                    <Form.Item label="Total Price" name="totalPrice">
                                        <Input
                                            prefix={<LockOutlined className="site-form-item-icon" />}
                                            placeholder="Total Price"
                                        />
                                    </Form.Item>
                                    <Form.Item label="Pay Amount" name="payAmount">
                                        <Input
                                            prefix={<LockOutlined className="site-form-item-icon" />}
                                            placeholder="Pay Amount"
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>

                                    <Form.Item>
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            className="login-form-button"
                                        >
                                            {btnLoader ? (
                                                <>
                                                    <Spin
                                                        indicator={antIcon}
                                                        style={{ color: "white", marginRight: "5px" }}
                                                    />
                                                    loading
                                                </>
                                            ) : (
                                                "Save"
                                            )}
                                        </Button>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>

                        < ToastContainer />
                    </>
                )}
            </div>

        </>
    )
}

export default Dashboard_Make_Payment