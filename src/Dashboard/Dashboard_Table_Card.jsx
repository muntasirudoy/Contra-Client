import React from "react";
import Skelton from "../Components/Common/Skelton";

const Dashboard_Table_Card = ({ data, loader }) => {
  return (
    <div className="tableCards">
      <div className="tableCardsHeader">
        <div className="tableSingleCard head">
          <span className="slno">SL. NO</span>
          <span>CATEGORY NAME</span>
          <span>CATEGORY TYPE</span>
          <span>CATEGORY DETAILS</span>
        </div>
      </div>
      {loader ? (
        <Skelton />
      ) : (
        data &&
        data.map((e, i) => (
          <div className="tableSingleCard ">
            <span className="slno">{i + 1}</span>
            <span>{e.categoryName}</span>
            <span>{e.categoryType}</span>
            <span>{e.categoryDetails}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default Dashboard_Table_Card;
