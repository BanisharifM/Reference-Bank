import React, { PropsWithChildren } from "react";
import { TableInstance } from "react-table";
import Button from "../Button";
export const TableHeader = <T extends object>({
  setPageSize,
  state: { pageIndex, pageSize },
  ...rest
}: PropsWithChildren<TableInstance<T>>) => {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <div className="dataTables_length" id="example_length">
          <label>
            مشاهده
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
              className="form-control form-control-sm"
            >
              {[5,10,15,20,30,40].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                   {pageSize}
                </option>
              ))}
            </select>
            ردیف
          </label>
        </div>
      </div>
      
      <div className="col-sm-12 col-md-6">
		  {rest.tool && rest.tool()}
      </div>
    </div>
  );
};
export default TableHeader;
