import React from "react";
import THead from "./THead";
import TBody from "./TBody";
import { category, column, features, pageAction } from "./model";

interface IProps {
  pageData: category[];
  columns: column[];
  features: features;
  onAdd: any;
  onEdit: any;
  onDelete: any;
  onSave: any;
  onCancel: any;
  currentPage: number;
  pageSize: number;
  pageAction: pageAction;
  setPageAction: any;
  inputErrors: any;
}
const TableBody: React.FC<IProps> = ({
  pageData,
  columns,
  features,
  onAdd,
  onEdit,
  onDelete,
  onSave,
  onCancel,
  currentPage,
  pageSize,
  pageAction,
  setPageAction,
  inputErrors,
}) => {
  return (
    <div className="row">
      <div
        className="col-sm-12"
        style={{ overflowX: "auto", marginTop: "15px" }}
      >
        <table className="table display table-bordered table-striped">
          <THead
            columns={columns}
            hasAction={features.hasAction}
            addable={features.addable}
            onAdd={onAdd}
          />
          <TBody
            columns={columns}
            data={pageData}
            features={features}
            startPage={(currentPage - 1) * pageSize}
            pageAction={pageAction}
            setPageAction={setPageAction}
            onEdit={onEdit}
            onDelete={onDelete}
            onSave={onSave}
            onCancel={onCancel}
            inputErrors={inputErrors}
          />
        </table>
      </div>
    </div>
  );
};
export default TableBody;
