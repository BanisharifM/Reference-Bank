import React, {
  cloneElement,
  Children,
  PropsWithChildren,
  isValidElement,
} from "react";
import { TableInstance } from "react-table";
import TableHeader from "./TableHeader";
import TableFooter from "./TableFooter";

const TableContainer = <T extends object>({
  children,
  ...tableProps
}: PropsWithChildren<TableInstance<T>>) => {
  return (
    <>
      <div className="table-responsive m-t-40">
        <div
          id="myTable_wrapper"
          className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"
        >
          <TableHeader<T> {...tableProps} />
          <div className="row">
            <div
              className="col-sm-12"
              // style={{ overflowX: "auto", marginTop: "15px" }}
            >
              {children}
            </div>
          </div>
          <TableFooter<T> {...tableProps} />
        </div>
      </div>
    </>
  );
};
export default TableContainer;
