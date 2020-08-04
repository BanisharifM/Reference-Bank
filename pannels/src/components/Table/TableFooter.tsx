import React, { PropsWithChildren } from "react";
import { TableInstance } from "react-table";

export const TableFooter = <T extends object>({
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
    <>
      <div className="row">
        <div className="col-sm-12 col-md-5">
          <div className="dataTables_info" id="myTable_info">
            {/* Showing 1 to 10 of 57 entries */}
          </div>
        </div>
        <div className="col-sm-12 col-md-7">
          <div
            className="dataTables_paginate paging_simple_numbers"
            id="myTable_paginate"
          >
            <ul className="pagination">
              <li
                className={`paginate_button page-item previous ${
                  !canPreviousPage && "disabled"
                } `}
                onClick={() => previousPage()}
              >
                <span className="page-link">قبلی</span>
              </li>
              {Array(pageCount)
                .fill("")
                .map((item, index) => {
                  return (
                    <li
                      className={`paginate_button page-item ${
                        pageIndex === index && "active"
                      }`}
                      onClick={() => gotoPage(index)}
                    >
                      <span className="page-link">{index + 1}</span>
                    </li>
                  );
                })}
              <li
                className={`paginate_button page-item next ${
                  !canNextPage && "disabled"
                }`}
                onClick={() => nextPage()}
              >
                <span className="page-link">بعدی</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default TableFooter;
