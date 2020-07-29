import React, { PropsWithChildren } from "react";
import { TableInstance } from "react-table";
export const TableHeader = <T extends object>({
  children,
  canPreviousPage,
  canNextPage,
  pageOptions,
  pageCount,
  gotoPage,
  nextPage,
  previousPage,
  setPageSize,
  state: { pageIndex, pageSize },
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
    </div>
  );
};
export default TableHeader;
