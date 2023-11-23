
import React, { useEffect, useState } from 'react'
import { Space, Table, Tag } from 'antd';
import { FullscreenOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import { getClientAllTransactions } from '../dbconfig';
const ClientPersonalDeshboard = ({ clientProjects }) => {
    const param = useParams()
    const [transaction, setTransactions] = useState([])
    useEffect(() => {
        getTransactions()
    }, [])
    const getTransactions = async () => {
        try {
            let res = await getClientAllTransactions(param.id)
            setTransactions(res)
        } catch (error) {

        }
    }
    const columns = [
        {
            title: 'Date',
            dataIndex: 'paymentDate',
            key: 'paymentDate',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Amount',
            dataIndex: 'payAmount',
            key: 'payAmount',
        },
        {
            title: 'Project Name',
            dataIndex: 'projectName',
            key: 'projectName',
        },
        {
            title: 'Project Id',
            dataIndex: 'projectId',
            key: 'projectId',
        },
        // {
        //     title: 'Tags',
        //     key: 'tags',
        //     dataIndex: 'tags',
        //     render: (_, { tags }) => (
        //         <>
        //             {tags.map((tag) => {
        //                 let color = tag.length > 5 ? 'geekblue' : 'green';
        //                 if (tag === 'loser') {
        //                     color = 'volcano';
        //                 }
        //                 return (
        //                     <Tag color={color} key={tag}>
        //                         {tag.toUpperCase()}
        //                     </Tag>
        //                 );
        //             })}
        //         </>
        //     ),
        // },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];




    return (
        <div className='clients-profile-dashboard'>
            <div className="clients-profile-dashboard-cards">
                <div className="clients-profile-dashboard-card">
                    <FullscreenOutlined style={{ position: "absolute", right: "15px", top: "15px", cursor: "pointer" }} />
                    <h1>{clientProjects?.length}</h1>
                    <span>Total Project</span>
                </div>

                <div className="clients-profile-dashboard-card">
                    <FullscreenOutlined style={{ position: "absolute", right: "15px", top: "15px", cursor: "pointer" }} />
                    <h1>  {clientProjects?.reduce((pre, cur) => Number(pre) + Number(cur.totalPrice), 0).toLocaleString("en-IN")} TK.</h1>
                    <span>Total Price</span>
                </div>
                <div className="clients-profile-dashboard-card">
                    <FullscreenOutlined style={{ position: "absolute", right: "15px", top: "15px", cursor: "pointer" }} />
                    <h1 style={{ color: "red" }}>{clientProjects?.reduce((pre, cur) => Number(pre) + Number(cur.dueAmount), 0).toLocaleString("en-IN")} TK.</h1>
                    <span style={{ color: "red" }}>Payable</span>
                </div>
                <div className="clients-profile-dashboard-card">
                    <FullscreenOutlined style={{ position: "absolute", right: "15px", top: "15px", cursor: "pointer" }} />
                    <h1>{clientProjects?.reduce((pre, cur) => Number(pre) + Number(cur.totalPrice - cur.dueAmount), 0).toLocaleString("en-IN")} TK.</h1>
                    <span>Paid</span>
                </div>
                <div className="clients-profile-dashboard-card">
                    <FullscreenOutlined style={{ position: "absolute", right: "15px", top: "15px", cursor: "pointer" }} />
                    <h1>3/6</h1>
                    <span>Installment</span>
                </div>
                <div className="clients-profile-dashboard-card">
                    <FullscreenOutlined style={{ position: "absolute", right: "15px", top: "15px", cursor: "pointer" }} />
                    <h1>{clientProjects?.reduce((pre, cur) => Number(pre) + Number(cur.bookingMoney), 0).toLocaleString("en-IN")} TK.</h1>
                    <span>Booking Money</span>
                </div>
                <div className="clients-profile-dashboard-card">
                    <FullscreenOutlined style={{ position: "absolute", right: "15px", top: "15px", cursor: "pointer" }} />
                    <h1>{clientProjects?.reduce((pre, cur) => Number(pre) + Number(cur.downPayment), 0).toLocaleString("en-IN")} TK.</h1>
                    <span>Down Payment</span>
                </div>
                <div className="clients-profile-dashboard-card">
                    <FullscreenOutlined style={{ position: "absolute", right: "15px", top: "15px", cursor: "pointer" }} />
                    <h1>2</h1>
                    <span>Late Pay</span>
                </div>
            </div>

            <div className="client-recent-payment">
                <h2>Recent Transactions :</h2>
                {transaction.length > 0 &&
                    <Table bordered columns={columns} dataSource={transaction} />
                }
            </div>

        </div>
    )
}

export default ClientPersonalDeshboard