import React from "react";
import _ from "lodash";

interface IProps {
  itemsCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange: any;
}
const Pagination: React.FC<IProps> = ({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange,
}) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  return (
    <ul className="pagination">
      <li
        className={`paginate_button page-item previous ${
          currentPage === 1 && "disabled"
        }`}
      >
        <a
          href="#"
          aria-controls="myTable"
          data-dt-idx="0"
          className="page-link"
          // disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          قبلی
        </a>
      </li>
      {pages.map((page: number) => (
        <li
          key={page}
          className={`paginate_button page-item ${
            page === currentPage ? "active" : ""
          }`}
        >
          <a
            href="#"
            aria-controls="myTable"
            data-dt-idx="1"
            className="page-link"
            onClick={() => onPageChange(page)}
          >
            {page}
          </a>
        </li>
      ))}
      <li
        key="next"
        className={`paginate_button page-item next ${
          currentPage === pagesCount && "disabled"
        }`}
      >
        <a
          href="#"
          aria-controls="myTable"
          data-dt-idx="7"
          className="page-link"
          // disabled={currentPage === pagesCount}
          onClick={() => onPageChange(currentPage + 1)}
        >
          بعدی
        </a>
      </li>
    </ul>
  );
};
export default Pagination;

export const paginateData: object = (
  items: object[],
  pageNumber: number,
  pageSize: number
) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
};
