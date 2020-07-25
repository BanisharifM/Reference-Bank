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
      <div className="row">
        <div className="col-sm-12">
          <div className="card card-body">
            <h4 className="card-title">لیست شرکت‌ها</h4>
            <h5 className="card-subtitle">
              در اینجا میتوانید لیست شرکت‌ها را مشاهده کنید
            </h5>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

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
          </div>
        </div>
      </div>
    </>
  );
};
export default TableContainer;
