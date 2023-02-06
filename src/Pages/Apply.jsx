import React, { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { FileUpload } from "primereact/fileupload";
import ApplyText from "../Components/Common/ApplyText";
import Layout from "../Layout";

export const Apply = () => {
  const toast = useRef(null);
  const [loading1, setLoading1] = useState(false);
  const onLoadingClick1 = () => {
    setLoading1(true);

    setTimeout(() => {
      setLoading1(false);
    }, 2000);
  };

  const onBasicUpload = () => {
    toast.current.show({
      severity: "info",
      summary: "Success",
      detail: "File Uploaded ",
    });
  };
  return (
    <Layout>
      <div className="apply">
        <div className="container">
          <ApplyText />
          <div className="grid">
            <div className="col-12 md:col-12 lg:col-12">
              <div className="applyform">
                <InputText placeholder="Name" />
                <InputText placeholder="Email" />
                <InputTextarea placeholder="Write your message" />
                <div
                  style={{
                    display: "flex",
                    marginTop: "15px",
                    width: "50%",
                    justifyContent: "start",
                  }}
                >
                  {" "}
                  <p style={{ marginRight: "20px" }}> Upload Your CV </p>
                  <FileUpload
                    mode="basic"
                    name="demo[]"
                    url="https://primefaces.org/primereact/showcase/upload.php"
                    accept="pdf/*"
                    maxFileSize={1000000}
                    onUpload={onBasicUpload}
                  />
                </div>
                <Button
                  className="applybtn"
                  label="Submit"
                  icon="pi pi-check"
                  loading={loading1}
                  onClick={onLoadingClick1}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Apply;
