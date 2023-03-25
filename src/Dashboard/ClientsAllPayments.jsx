import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Rating } from "primereact/rating";
import { Toast } from "primereact/toast";
import React, { useEffect, useRef, useState } from "react";
import { ProductService } from "./service";

const ClientsAllPayments = () => {
  const [products, setProducts] = useState([]);
  const [expandedRows, setExpandedRows] = useState(null);
  const toast = useRef(null);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    ProductService.getProductsWithOrdersSmall().then(data => setProducts(data));
}, []);  // eslint-disable-line react-hooks/exhaustive-deps

  const onRowExpand = (event) => {
    toast.current.show({
      severity: "info",
      summary: "Product Expanded",
      detail: event.data.name,
      life: 3000,
    });
  };

  const onRowCollapse = (event) => {
    toast.current.show({
      severity: "success",
      summary: "Product Collapsed",
      detail: event.data.name,
      life: 3000,
    });
  };

  const expandAll = () => {
    let _expandedRows = {};
    products.forEach((p) => (_expandedRows[`${p.id}`] = true));

    setExpandedRows(_expandedRows);
  };

  const collapseAll = () => {
    setExpandedRows(null);
  };

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const amountBodyTemplate = (rowData) => {
    return formatCurrency(rowData.amount);
  };

  const statusOrderBodyTemplate = (rowData) => {
    return (
      <span className={`order-badge order-${rowData.status.toLowerCase()}`}>
        {rowData.status}
      </span>
    );
  };

  const searchBodyTemplate = () => {
    return <Button icon="pi pi-search" />;
  };

  const imageBodyTemplate = (rowData) => {
    return (
      <img
        src={`https://primefaces.org/cdn/primereact/images/product/${rowData.image}`}
        alt={rowData.image}
        width="100px"
        className="shadow-4"
      />
    );
  };

  const priceBodyTemplate = (rowData) => {
    return formatCurrency(rowData.price);
  };

  const ratingBodyTemplate = (rowData) => {
    return <Rating value={rowData.rating} readOnly cancel={false} />;
  };

  const statusBodyTemplate = (rowData) => {
    return (
      <span
        className={`product-badge status-${rowData.inventoryStatus.toLowerCase()}`}
      >
        {rowData.inventoryStatus}
      </span>
    );
  };

  const allowExpansion = (rowData) => {
return rowData ? true : false


  };

  const rowExpansionTemplate = (data) => {
    return (
      <div className="p-3">
        <Toast ref={toast} />
        <DataTable
          value={products}
          expandedRows={expandedRows}
          onRowToggle={(e) => setExpandedRows(e.data)}
          onRowExpand={onRowExpand}
          onRowCollapse={onRowCollapse}
          responsiveLayout="scroll"
          rowExpansionTemplate={rowExpansionTemplate}
          dataKey="id"

        >
          <Column expander={allowExpansion} style={{ width: "3em" }} />
          <Column field="name" header="Name" sortable />
          <Column header="Image" body={imageBodyTemplate} />
          <Column
            field="price"
            header="Price"
            sortable
            body={priceBodyTemplate}
          />
          <Column field="category" header="Category" sortable />
          <Column
            field="rating"
            header="Reviews"
            sortable
            body={ratingBodyTemplate}
          />
          <Column
            field="inventoryStatus"
            header="Status"
            sortable
            body={statusBodyTemplate}
          />
        </DataTable>
      </div>
    );
  };


  return (
    <div >
      <DataTable
        value={products}
        expandedRows={expandedRows}
        onRowToggle={(e) => setExpandedRows(e.data)}
        onRowExpand={onRowExpand}
        onRowCollapse={onRowCollapse}
        responsiveLayout="scroll"
        rowExpansionTemplate={rowExpansionTemplate}
        dataKey="id"
      >
        <Column expander={allowExpansion} style={{ width: "3em" }} />
        <Column field="name" header="Name" sortable />
        <Column header="Image" body={imageBodyTemplate} />
        <Column
          field="price"
          header="Price"
          sortable
          body={priceBodyTemplate}
        />
        <Column field="category" header="Category" sortable />
        <Column
          field="rating"
          header="Reviews"
          sortable
          body={ratingBodyTemplate}
        />
        <Column
          field="inventoryStatus"
          header="Status"
          sortable
          body={statusBodyTemplate}
        />
      </DataTable>
    </div>
  );
};

export default ClientsAllPayments;
