import React, { Children } from "react";
import {deflate} from "zlib";
const TableContainer: React.FC = ({ children }) => {
  return (
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
              <div className="row">
                <div
                  className="col-sm-12"
                  style={{ overflowX: "auto", marginTop: "15px" }}
                >
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TableContainer
