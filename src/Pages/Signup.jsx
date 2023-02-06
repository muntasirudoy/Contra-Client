import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "primereact/dropdown";
import { createDocuments, createUserWithEmailPassword } from "../dbconfig";
const defaultFormField = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Signup = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const [error, setError] = useState("");
  const { username, password, confirmPassword, email } = formField;

  const navigate = useNavigate();
  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formField, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Password dosent match");
      return;
    }
    try {
      const { user } = await createUserWithEmailPassword(email, password);
      const res = await createDocuments(user, username);

      if (res) {
        navigate("/dashboard");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const items = [
    { label: "Admin", value: "Admin" },
    { label: "Acounts", value: "Acounts" },
    { label: "IT", value: "IT" },
    { label: "Stuff", value: "Staf" },
    { label: "Editor", value: "Editor" },
  ];

  const onItemChange = (e) => {
    setSelectedRole(e.target.value);
  };

  return (
    <div className="form-area">
      <div className="overlay2"></div>
      <div className="grid">
        <div className="col-12 md:col-6 lg:col-6">
          <div className="form">
            <div className="logo">
              <img src="/logo.svg" alt="" />
            </div>
            <input
              onChange={handleForm}
              type="text"
              value={username}
              name="username"
              placeholder="Name"
            />
            <input
              onChange={handleForm}
              type="text"
              value={email}
              name="email"
              placeholder=" Email"
            />
            <input
              onChange={handleForm}
              type="password"
              value={password}
              name="password"
              placeholder="Password"
            />
            <input
              onChange={handleForm}
              type="password"
              value={confirmPassword}
              name="confirmPassword"
              placeholder="Confirm Password"
            />

            {error && (
              <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
                {" "}
                {error && error}
              </p>
            )}
            <button onClick={handleSubmit}>SIGNUP</button>
            <div className="action">
              Already have an account? <Link to="/login"> LOGIN</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
