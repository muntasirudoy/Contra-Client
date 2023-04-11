import React from "react";
import person1 from "/person1.jpg";
import person2 from "/person2.jpg";
import person3 from "/person3.jpg";
import person4 from "/person4.jpg";
import person5 from "/person5.jpg";
import person6 from "/person6.jpg";
import person7 from "/person7.jpg";
import "./expert.css";

import {
  FacebookFilled,
  TwitterSquareFilled,
  WechatFilled,
  GooglePlusSquareFilled,
} from "@ant-design/icons";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import { Fieldset } from "primereact/fieldset";

import man from "/man.jpg";
import AboutPageText from "../Common/AboutPageText";

const Expert = () => {
  const [displayBasic, setDisplayBasic] = useState(false);
  const [position, setPosition] = useState("center");
  const dialogFuncMap = {
    displayBasic: setDisplayBasic,
  };

  const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true);

    if (position) {
      setPosition(position);
    }
  };

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };
  return (
    <>
      <div className="expert">
          <div className=" all-carde">
            <div className="grid">
              <div className="col-12 md:col-6 lg:col-3">
                <div className="carde">
                  <div className="imagee">
                    {" "}
                    <img src={person1} />
                  </div>
                  <h3 onClick={() => onClick("displayBasic")}>MD. ZAINUL ABEDIN</h3>
                  <p>Chairman</p>
                  <div className="iconse">
                    {" "}
                    <FacebookFilled />
                    <TwitterSquareFilled />
                    <WechatFilled />
                    <GooglePlusSquareFilled />
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-6 lg:col-3">
                <div className="carde">
                  <div className="imagee">
                    {" "}
                    <img src={person2} />
                  </div>
                  <h3>MD. Mahmudul Hasan</h3>
                  <p>Managing Director</p>
                  <div className="iconse">
                    {" "}
                    <FacebookFilled />
                    <TwitterSquareFilled />
                    <WechatFilled />
                    <GooglePlusSquareFilled />
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-6 lg:col-3">
                <div className="carde">
                  <div className="shape"></div>
                  <div className="imagee">
                    {" "}
                    <img src={person3} />
                  </div>
                  <h3>Mr. K. Alam Patwary</h3>
                  <p>Director</p>
                  <div className="iconse">
                    {" "}
                    <FacebookFilled />
                    <TwitterSquareFilled />
                    <WechatFilled />
                    <GooglePlusSquareFilled />
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-6 lg:col-3">
                <div className="carde">
                  <div className="shape"></div>
                  <div className="imagee">
                    {" "}
                    <img src={person4} />
                  </div>
                  <h3>Engr. Ashaduzzaman </h3>
                  <p>Director</p>
                  <div className="iconse">
                    {" "}
                    <FacebookFilled />
                    <TwitterSquareFilled />
                    <WechatFilled />
                    <GooglePlusSquareFilled />
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-6 lg:col-3">
                <div className="carde">
                  <div className="imagee">
                    {" "}
                    <img src={person5} />
                  </div>
                  <h3 onClick={() => onClick("displayBasic")}>MD. Ibrahim Shikder</h3>
                  <p>Director</p>
                  <div className="iconse">
                    {" "}
                    <FacebookFilled />
                    <TwitterSquareFilled />
                    <WechatFilled />
                    <GooglePlusSquareFilled />
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-6 lg:col-3">
                <div className="carde">
                  <div className="imagee">
                    {" "}
                    <img src={person6} />
                  </div>
                  <h3> Engr. Mostaque Ahmed</h3>
                  <p>Director</p>
                  <div className="iconse">
                    {" "}
                    <FacebookFilled />
                    <TwitterSquareFilled />
                    <WechatFilled />
                    <GooglePlusSquareFilled />
                  </div>
                </div>
              </div>
              <div className="col-12 md:col-6 lg:col-3">
                <div className="carde">
                  <div className="shape"></div>
                  <div className="imagee">
                    {" "}
                    <img src={person7} />
                  </div>
                  <h3>MD. Radwanul Islam</h3>
                  <p>Director</p>
                  <div className="iconse">
                    {" "}
                    <FacebookFilled />
                    <TwitterSquareFilled />
                    <WechatFilled />
                    <GooglePlusSquareFilled />
                  </div>
                </div>
              </div>
            </div>


        </div>
      </div>

    </>
  );
};

export default Expert;
