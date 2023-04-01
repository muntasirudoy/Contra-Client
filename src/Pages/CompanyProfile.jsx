import React from "react";
import CompanyProfileText from "../Components/Common/CompanyProfileText";
import Layout from "../Layout";
const CompanyProfile = () => {
  return (
    <Layout>
      <div className="companyprofile">
        <div className="container">
          <CompanyProfileText companydetails="Mahmud Land & Builders Limited is a privately owned limited company founded in 2000 by MD Mahmudul Hasan. The company specializes in civil engineering and has extensive experience in completing a variety of building projects. Over the years, it has established itself as a leading developer with a reputation for high-quality work in the construction and real estate sectors. Mahmud Land & Builders Limited is currently engaged in several ongoing apartment and commercial projects in Dhaka and Savar. The company places a strong emphasis on prioritizing quality and adhering to project timelines. Customer satisfaction is paramount to the company's success, and it strives to achieve this by providing top-quality products and services through Total Quality Management (TQM), a systematic approach that involves company-wide activities. The guiding principles behind Mahmud Land & Builders Limited are honesty, trust, faith, quality, and commitment." />
        </div>
      </div>
    </Layout>
  );
};

export default CompanyProfile;
