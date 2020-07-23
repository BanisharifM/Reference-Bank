import React, { PropsWithChildren, ReactNode } from "react";
import { TableInstance } from "react-table";

export const ReactTable = <T extends object>({
  getTableProps,
  headerGroups,
  getTableBodyProps,
  rows,
prepareRow,

}: { children?: ReactNode } & TableInstance<T>) => {
  return (
    <>
      <table
        className="table display table-bordered table-striped"
        {...getTableProps()}
      >
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <th {...column.getHeaderProps()}>
                      {
                        // Render the header
                        column.render("Header")
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rows.map((row) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return (
                        <td {...cell.getCellProps()}>
                          {
                            // Render the cell contents
                            cell.render("Cell")
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
      <div
        className="dataTables_info"
        role="status"
        aria-live="polite"
      >
        Showing 1 to 10 of 57 entries
      </div>

      <div
        className="dataTables_paginate paging_simple_numbers"
        id="example23_paginate"
      >
        <ul className="pagination">
          <li
            className="paginate_button page-item previous disabled"
            id="example23_previous"
          >
            <a
              className="page-link"
            >
              Previous
            </a>
          </li>
          <li className="paginate_button page-item active">
            <a
              className="page-link"
            >
              1
            </a>
          </li>
          <li className="paginate_button page-item ">
            <a
              className="page-link"
            >
              2
            </a>
          </li>
          <li className="paginate_button page-item ">
            <a
              className="page-link"
            >
              3
            </a>
          </li>
          <li className="paginate_button page-item next" id="example23_next">
            <a
              className="page-link"
            >
              Next
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
