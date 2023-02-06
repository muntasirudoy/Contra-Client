import React from "react";
import { Skeleton } from "primereact/skeleton";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const Skelton = ({ skltn }) => {
  return (
    <div className="field col-12 md:col-6">
      <Skeleton width="70rem" className="mb-2"></Skeleton>
      <Skeleton width="40rem" className="mb-2"></Skeleton>
      <Skeleton width="50rem" className="mb-2"></Skeleton>
      <Skeleton height="2rem" className="mb-2"></Skeleton>
      <Skeleton width="20rem" height="4rem"></Skeleton>
    </div>
  );
};

export default Skelton;
