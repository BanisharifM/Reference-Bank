import React from "react";
import Table from "./components/Table/Table";
import { getCategories } from "./testCategory";

const index = () => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Row grouping </h4>
          <h6 className="card-subtitle">Data table example</h6>
          <Table
            entryData={getCategories()}
            columns={[
              { path: "id", label: "شناسه", type: "number" },
              { path: "name", label: "مشخصات", type: "text" },
            ]}
            features={{
              paginating: true,
              defaultPageSize: 3,
              filtering: true,
              tableSizing: true,
              hasAction: true,
              addable: true,
              editable: true,
              deletable: true,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default index;
