import React from "react";

interface IProps {
  query: string;
  setQuery: any;
  pageSize: number;
  setPageSize: any;
  filtering: boolean;
  tableSizing: boolean;
}
const TableHeader: React.FC<IProps> = ({
  query,
  setQuery,
  pageSize,
  setPageSize,
  filtering,
  tableSizing,
}) => {
  return (
    <div className="row">
      {filtering && (
        <div className="col-sm-12 col-md-6">
          <div className="dataTables_filter">
            <label>
              جستجو:
              <input
                type="search"
                className="form-control form-control-sm"
                aria-controls="myTable"
                placeholder="جستجو..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>
          </div>
        </div>
      )}
      {tableSizing && (
        <div className="col-sm-12 col-md-6">
          <div className="dataTables_length" id="example_length">
            <label>
              نمایش
              <select
                name="example_length"
                aria-controls="example"
                className="form-control form-control-sm"
                onChange={(e) => setPageSize(e.target.value)}
                value={pageSize}
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};
export default TableHeader;
