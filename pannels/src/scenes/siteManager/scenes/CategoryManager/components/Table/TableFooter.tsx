import React from "react";
import Pagination from "./Pagination";
interface IProps {
  paginating: boolean;
  itemsCount: number;
  pageSize: number;
  currentPage: number;
  handlePageChange: any;
}
const TableFooter: React.FC<IProps> = ({
  paginating,
  itemsCount,
  pageSize,
  currentPage,
  handlePageChange,
}) => {
  return (
    <div className="row">
      {paginating && (
        <React.Fragment>
          <div className="col-sm-12 col-md-5">
            <div
              className="dataTables_info"
              id="myTable_info"
              role="status"
              aria-live="polite"
            >
              نمایش {(currentPage - 1) * pageSize + 1} تا{" "}
              {currentPage !== Math.ceil(itemsCount / pageSize)
                ? currentPage * pageSize
                : itemsCount}
              از {itemsCount}
            </div>
          </div>
          <div className="col-sm-12 col-md-7">
            <div
              className="dataTables_paginate paging_simple_numbers"
              id="myTable_paginate"
            >
              <Pagination
                itemsCount={itemsCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};
export default TableFooter;
