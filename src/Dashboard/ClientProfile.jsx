import { Form, Input, Row, Spin, Tabs } from "antd";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import ClientPersonal from "../Components/Clients/ClientPersonal";
import { Store } from "../Context/context";
import { EventStore } from "../Context/eventContext";
import { getCurrentUser, getIndividualClientProjectInfo } from "../dbconfig";
import ClientAllProjects from "./ClientAllProjects";
import ClientsAllPayments from "./ClientsAllPayments";
import { LoadingOutlined } from "@ant-design/icons";
import ClientPersonalDeshboard from "./ClientPersonalDeshboard";
import Dashboard_Make_Payment from "./Dashboard_Make_Payment";


const antIcon = <LoadingOutlined style={{ fontSize: 18 }} spin />;

const ClientProfile = () => {

    const { currentEvent } = useContext(EventStore)

    const [clientProjects, setClientProjects] = useState([]);
    const [clinetPersonalInfo, setClinetPersonalInfo] = useState();
    const [activeTab, setActiveTab] = useState(currentEvent.payload || 1)
    const param = useParams();



    useEffect(() => {
        const fetchData = async () => {
            const res = await getCurrentUser(param.id);
            if (res) {
                setClinetPersonalInfo(res);
            }
        };

        const fetchClentProjectInfo = async () => {
            const res = await getIndividualClientProjectInfo(
                "client_project_info",
                param.id
            );
            if (res) {
                setClientProjects(res);
            }
        };
        fetchClentProjectInfo();
        fetchData();
    }, [activeTab]);


    const items = [
        {
            key: "0",
            label: `Client's Dashboard`,
            children: (
                <>
                    <ClientPersonalDeshboard clientProjects={clientProjects} valueFromDashboardClientProject={clinetPersonalInfo} params={param.id} />
                </>
            ),
        },
        {
            key: "1",
            label: `About Clients`,
            children: (
                <>
                    <ClientPersonal valueFromDashboardClientProject={clinetPersonalInfo} params={param.id} />
                </>
            ),
        },
        {
            key: "2",
            label: `Projects`,
            children: <ClientAllProjects clientProjects={clientProjects} showForm={true} params={param.id} />,
        },
        {
            key: "3",
            label: `Transactions`,
            children: <ClientsAllPayments clientProjects={clientProjects} />,
        },
        {
            key: "5",
            label: `Make Payment`,
            children: <Dashboard_Make_Payment />,
        },
        {
            key: "4",
            label: `Nominee`,
            children: `Content of Tab Pane 3`,
        },
    ];
    return (
        <div className='dashboard-client-profile'>
            <div className="dashboard-client-profile-left">
                <div className="dashboard-client-profile-left-card">
                    <div className="dashboard-client-profile-left-card-image">
                        <img src="/public/a1.jpg" alt="" />
                        <div className="client-name">
                            <h2>MR. {clinetPersonalInfo?.firstName}</h2>
                            <span>{clinetPersonalInfo?.mobile}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="dashboard-client-profile-right">
                <Tabs defaultActiveKey={activeTab} tabPosition="vertical" items={items} />
            </div>
        </div>
    )
}

export default ClientProfile