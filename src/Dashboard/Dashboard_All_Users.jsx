import { Button } from "antd";
import React, { useEffect, useState } from "react";
import Skelton from "../Components/Common/Skelton";
import { getAllUsers, getCurrentUser, updateIndividualUser } from "../dbconfig";
import Dashboard_Heading from "./Dashboard_Heading";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
const Dashboard_All_Users = () => {
  const [allUser, setAllUsers] = useState([]);
  const [loader, setLoader] = useState(false);
  const [visible, setVisible] = useState(false);
  const [individualUser, setIndividualUser] = useState("");
  const [ref, setRef] = useState("");
  const [selectedRole, setSelectedRole] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoader(true);
      try {
        const res = await getAllUsers();
        setAllUsers(res);
        setLoader(false);
      } catch (error) {}
    };
    fetchData();
  }, [ref]);

  const roles = [
    { name: "Admin", code: "Admin" },
    { name: "Accounts", code: "Accounts" },
    { name: "IT", code: "IT" },
    { name: "Stuff", code: "Stuff" },
    { name: "Editor", code: "Editor" },
  ];

  const onCityChange = (e) => {
    setSelectedRole(e.value);
  };

  const showModal = async (e) => {
    setVisible(true);
    let res = await getCurrentUser(e.id);
    setIndividualUser(res);
  };

  const setRole = async ({ id }) => {
    try {
      const obj = {
        role: selectedRole.name,
        id,
      };
      let res = await updateIndividualUser(obj);
      setRef(obj);
      setSelectedRole("");
      setVisible(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dashboard-project-container">
      <Dashboard_Heading
        heading="All Users"
        subheading="Controll all of your users"
      />
      <div className="dashboard-projects ready">
        <div className="ready-table">
          <div className="tableCards">
            <div className="tableCardsHeader ">
              <div className="tableSingleCard head users">
                <span className="slno">SL. NO</span>
                <span>NAME</span>
                <span>EMAIL</span>
                <span>ROLE</span>
              </div>
            </div>
            {loader ? (
              <Skelton />
            ) : (
              allUser &&
              allUser.map((e, i) => (
                <div className="tableSingleCard users " key={i}>
                  <span className="slno">{i + 1}</span>
                  <span>{e.username}</span>
                  <span>{e.email}</span>
                  <span>
                    {e.role ? (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Button danger>{e.role}</Button>
                        <i
                          onClick={() => showModal(e)}
                          className="pi pi-pencil"
                          style={{
                            fontSize: "1rem",
                            background: "#014a69",
                            padding: "8px",
                            borderRadius: "5px",
                            marginLeft: "5px",
                            cursor: "pointer",
                            color: "white",
                          }}
                        ></i>
                      </div>
                    ) : (
                      <Button onClick={() => showModal(e)} type="dashed" danger>
                        Set role
                      </Button>
                    )}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Dialog
        header="Edit User or Set Role"
        visible={visible}
        style={{ width: "30vw" }}
        onHide={() => setVisible(false)}
      >
        User Name: {individualUser?.username}
        <div className="card  dropdown-demo">
          <Dropdown
            value={selectedRole}
            options={roles}
            onChange={onCityChange}
            optionLabel="name"
            placeholder="Select a role"
            style={{ width: "100%", marginTop: "10px" }}
          />
          <Button onClick={() => setRole(individualUser)} className="mt-3">
            SAVE
          </Button>
        </div>
      </Dialog>
    </div>
  );
};

export default Dashboard_All_Users;
