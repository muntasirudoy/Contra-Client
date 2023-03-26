import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createDocuments, getCurrentUser, loginUserWithEmailPassword, signinWithGooglePopup } from "../dbconfig";
import GoogleButton from "react-google-button";
import Loader from "../Components/Common/Loader";
import { Store } from "../Context/context";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const { search } = useLocation();
  const redirectUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectUrl ? redirectUrl : "/";
  const [loader, setLoader] = useState(false);
  const navigator = useNavigate();
  const { currentUser, setCurrentUser } = useContext(Store);
  const googleSignIn = async () => {
    let res = await signinWithGooglePopup();
    if (res.user) {
      let obj ={
        username: res.user.displayName,
        email:res.user.email,
        userStatus:"authority"
      }
      await createDocuments(res.user, obj);
      navigator("/dashboard");
      
    } else {
      navigator("/");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    setLoader(true);
    try {
      let res = await loginUserWithEmailPassword(email, password);
      console.log(res);
      if (res) {
        setLoader(false);
        navigator(redirect);
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
              <p className="or">or</p>
              <div className="google-log">
                <GoogleButton type="light" onClick={googleSignIn} />
              </div>
              {error && (
                <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
                  {" "}
                  {error && error}
                </p>
              )}
              <div className="action">
                Don't have an account? <Link to="/signup"> SIGNUP</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Login;
