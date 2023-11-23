
import React, { useEffect } from "react";

import { DownOutlined } from '@ant-design/icons';
import { Badge, Dropdown, Space, Table } from 'antd';
import { useState } from "react";
import { getClientAllTransactions, getIndividualProjectTransactions } from "../dbconfig";
const items = [
  {
    key: '1',
    label: 'Action 1',
  },
  {
    key: '2',
    label: 'Action 2',
  },
];
const ClientsAllPayments = ({ clientProjects }) => {

  const [transaction, setTransactions] = useState([])


  const fetchData = async () => {
    try {
      let res = await getClientAllTransactions()
      setTransactions(res)
    } catch (error) {

    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const expandedRowRender = (value) => {
    const data = transaction?.filter((e) => e.projectId == value.id)

    const columns = [
      {
        title: 'Date',
        dataIndex: 'paymentDate',
        key: 'paymentDate',
      },
      {
        title: 'Amount',
        dataIndex: 'payAmount',
        key: 'payAmount',
      },
      {
        title: 'Status',
        key: 'state',
        render: () => <Badge status="success" text="Finished" />,
      },
      {
        title: 'Upgrade Status',
        dataIndex: 'upgradeNum',
        key: 'upgradeNum',
      },
      {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
          <Space size="middle">
            <a>Pause</a>
            <a>Stop</a>
            <Dropdown
              menu={{
                items,
              }}
            >
              <a>
                More <DownOutlined />
              </a>
            </Dropdown>
          </Space>
        ),
      },
    ];




    return (
      <>
        {
          transaction && <Table columns={columns} dataSource={data} pagination={false} />
        }
      </>
    );
  };

  const columns = [
    {
      title: 'Project Name',
      dataIndex: 'projectName',
      key: 'id',
    },
    {
      title: 'Price',
      dataIndex: 'totalPrice',
      key: 'id',
    },
    {
      title: 'Payable',
      dataIndex: 'dueAmount',
      key: 'id',
    },
    {
      title: 'Paid',
      dataIndex: 'payAmount',
      key: 'id',
    },
    {
      title: 'Creator',
      dataIndex: 'creator',
      key: 'id',
    },
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: 'id',
    },
    {
      title: 'Action',
      key: 'id',
      render: () => <a>Publish</a>,
    },
  ];


  const data = []
  clientProjects?.map((e) => {
    const obj = {
      ...e,
      key: e.id,
    }
    return data.push(obj)
  })

  return (
    <div className="clientAllProjectTransactions">
      <h2>Projects with Transactions:</h2>
      <br />
      {clientProjects && <Table
        bordered
        columns={columns}
        expandable={{
          expandedRowRender,
          defaultExpandedRowKeys: ['0'],
        }}
        dataSource={data}
      />}
    </div>
  );
};

export default ClientsAllPayments;
