
import React, {useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginUserWithEmailPassword, }from "../dbconfig";
import Loader from "../Components/Common/Loader";

const ClientLogin = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const { search } = useLocation();
  const redirectUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectUrl ? redirectUrl : "/client-profile";
  const [loader, setLoader] = useState(false);

  const navigator = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    setLoader(true);
    try {
      let res = await loginUserWithEmailPassword(email, password);
      if (res) {
        setLoader(false);
        navigator("/client-profile");
      } else {
        setLoader(true);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  if (loader) {
    return <Loader />;
  } else {
    return (
      <div className="form-area">
        <div className="overlay"></div>
        <div className="grid">
          <div className="col-12 md:col-6 lg:col-6">
            <div className="form">
              <div className="logo">
                <img src="/logo.svg" alt="" />
              </div>
              <input
                // onChange={handleForm}
                type="text"
                // value={email}
                name="email"
                placeholder=" Email"
                ref={emailRef}
              />
              <input
                // onChange={handleForm}
                type="password"
                // value={password}
                name="password"
                placeholder="Password"
                ref={passwordRef}
              />
              <button onClick={handleSubmit}>LOGIN</button>
      

              {error && (
                <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
                  {" "}
                  {error && error}
                </p>
              )}
              <div className="action">
                Don't have an account? <Link to="/client-signup"> Create Account</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ClientLogin;
