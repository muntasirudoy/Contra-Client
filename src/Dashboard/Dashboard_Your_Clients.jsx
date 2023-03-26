import { Form, Input, Modal, Table, Tag } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skelton from "../Components/Common/Skelton";
import { Store } from "../Context/context";
import {
  createDocumentsForCategory,
  getAllCategory,
  getSingleUserInfoBySlug,
} from "../dbconfig";
import Dashboard_Heading from "./Dashboard_Heading";
import Dashboard_Table_Card from "./Dashboard_Table_Card";
import { defaultCategory } from "./utils";
const Dashboard_Your_Clients = () => {
  const [form] = Form.useForm();
  const {currentUser} = useContext(Store)
  const [btnLoader, setBtnLoader] = useState(true);
  const [allClients, setAllClients] = useState([]);
  const [skltn, setSkltn] = useState(false);

  useEffect(() => {
    setSkltn(true);
    const fetchData = async () => {
      try {
        const res = await getSingleUserInfoBySlug("user", "client");
        console.log(res);
        if (res) {
          setAllClients(res);
          setSkltn(false);
        }
      } catch (error) {}
    };
    fetchData();
  }, []);

  useEffect(() => {
    setSkltn(true);
    const fetchData = async () => {
      try {
        const res = await getAllClientProjects(currentUser.id);
        setSkltn(false);
        setClientProjects(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [currentUser]);



  return (
    <div className="dashboard-project-container">
      <Dashboard_Heading
        heading="All Category"
        subheading="Add or update your projects"
      />
      <div className="dashboard-projects ready">

        <div className="ready-table">
          <div className="tableCards">
            <div className="tableCardsHeader">
              <div className="tableSingleCard head">
                <span className="slno">SL. NO</span>
                <span>CLIENTS NAME</span>
                <span>EMAIL</span>
              </div>
            </div>
            {skltn ? (
              <Skelton />
            ) : (
              allClients &&
              allClients.map((e, i) => (
                <Link to={e.id}>
                  <div className="tableSingleCard ">
                    <span className="slno">{i + 1}</span>
                    <span>{e.username}</span>
                    <span>{e.email}</span>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard_Your_Clients;
