import React, { useState } from "react";
import { CellProps, useTable } from "react-table";
import EditableCell from "./EditableCell";
import { ReactTable } from "./ReactTable";
import { Formik, Form } from "formik";
import TableContainer from "./TableContainer";

const CompaniesList = () => {
  const [editing, setEditing] = useState<any>({ col1: "", col2: "" });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target.input);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Column 1",
        accessor: "col1", // accessor is the "key" in the data
        Cell: (props: CellProps<object>) => {
          return <EditableCell {...props} editing={editing} />;
        },
      },
      {
        Header: "Column 2",
        accessor: "col2",
        Cell: (props: CellProps<object>) => {
          return <EditableCell {...props} editing={editing} />;
        },
      },
      {
        Header: "edit",
        accessor: "edit",
        Cell: ({ row: { original, ...row }, ...rest }: CellProps<object>) => {
          // console.log(rest ,row.id)
          if (original === editing) {
            return (
              <>
                <button onClick={() => setEditing(null)}>Cancel</button>
                <button type="submit">Save</button>
              </>
            );
          }
          return <button onClick={() => setEditing(original)}>Edit</button>;
        },
      },
    ],
    [editing]
  );
  const [data, setData] = React.useState(() => [
    {
      col1: "Hello",
      col2: "World",
    },
    {
      col1: "react-table",
      col2: "rocks",
    },
    {
      col1: "agagag",
      col2: "you want",
    },
  ]);
  const tableInstance = useTable<any>({ columns, data });

  return (
    // <TableContainer>
      <Formik
        initialValues={editing}
        enableReinitialize
        onSubmit={(values: any) => {
          const indexOfEditedRow = data.indexOf(editing);
          setData((prev) =>
            prev.map((item, index) =>
              index !== indexOfEditedRow ? item : values
            )
          );
        }}
      >
        <Form>
          <ReactTable {...tableInstance} />
        </Form>
      </Formik>
    // </TableContainer>
  );
};
export default CompaniesList;
