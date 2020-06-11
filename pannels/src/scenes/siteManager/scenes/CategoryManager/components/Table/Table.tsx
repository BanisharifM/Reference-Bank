import React, { useEffect, useState } from "react";
import { paginateData } from "./Pagination";
import TableFooter from "./TableFooter";
import TableHeader from "./TableHeader";
import debounce from "debounce";
import TableBody from "./TableBody";
import { category, column, features, pageAction } from "./model";

interface IProps {
  entryData: any;
  columns: column[];
  features: features;
}
const Table: React.FC<IProps> = ({ entryData, columns, features }) => {
  const [data, setData] = useState<category[] | []>([]);
  const [pageData, setPageDate] = useState([]);
  const [pageMode, setPageMode] = useState("DEFAULT");
  const [pageAction, setPageAction] = useState<pageAction>({
    status: false,
    element: {},
  });
  const [pageSize, setPageSize] = useState(features.defaultPageSize);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const [inputErrors, setInputErrors] = useState({});
  useEffect(() => {
    const data = { ...entryData };
    setData(data);
  }, [entryData]);
  useEffect(() => {
    //request get data
    const data = { ...entryData };
    setPageDate(data);
  }, [currentPage, data, pageSize]);
  useEffect(() => {
    const search = () => {
      // const newData = entryData.filter((item:category) => {
      //   const founded = columns.map((col) =>
      //     item[col.path].includes(query) ? item : ""
      //   );
      //   return founded.some((item) => item !== "");
      // });

      //request to back
      setData(data);
    };
    const debouncedSearch = debounce(search, 500, false);
    debouncedSearch();
  }, [query]);

  const handlePageChange = (page: number) => setCurrentPage(page);
  const onAdd = () => {
    if (pageMode === "DEFAULT") {
      setPageMode("ADD");
      //open modal
    }
  };
  const onEdit = (editedData: category) => {
    if (pageMode === "DEFAULT") {
      setPageMode("EDIT");
      setPageAction({ status: true, element: editedData });

      //open modal
    }
  };
  const onDelete = (deletedData: category) => {
    if (pageMode === "DEFAULT") {
      // eslint-disable-next-line no-restricted-globals
      if (!confirm("آیا مطمئن  هستید حذف شود؟")) return;
      const newData = data.filter((p) => p.id !== deletedData.id);
      setData(newData);
    }
  };
  const onSave = (savedData: category) => {
    //input validation
    // const newErrors = {};
    // columns.map((column) => (newErrors[column.path] = false));
    // let hasError = false;
    // columns.map((column) => {
    //   if (savedData[column.path] === "" || savedData[column.path] === null) {
    //     newErrors[column.path] = true;
    //     hasError = true;
    //   }
    // });
    // setInputErrors(newErrors);
    // if (hasError) return;
    //
    // let newData;
    // if (pageMode === "EDIT") {
    //   newData = data.map((p) => (p.id === savedData.id ? savedData : p));
    // } else if (pageMode === "ADD") {
    //   newData = data.map((p) => (p.id === "0" ? savedData : p));
    // }
    // setData(newData);
    // setPageMode("DEFAULT");
    // setPageAction({ status: false, element: {} });
  };
  const onCancel = () => {
    setPageMode("DEFAULT");
    setPageAction({ status: false, element: {} });
    if (pageMode === "EDIT") {
      // const newData = data.map((p) =>
      //   p.id !== pageAction.element.id
      //     ? p
      //     : entryData.filter((k) => k.id === p.id &&console.log(k))
      // );
      // console.log(entryData);
      // const dd = { ...entryData };
      // setData(dd);
    } else if (pageMode === "ADD") {
      // const newData = data.filter((p) => p.id !== 0);
      // setData(newData);
    }
  };

  console.log(entryData === data, "use effect");
  return (
    <div className="table-responsive m-t-40">
      <div
        id="myTable_wrapper"
        className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"
      >
        <TableHeader
          query={query}
          setQuery={setQuery}
          pageSize={pageSize}
          setPageSize={setPageSize}
          filtering={features.filtering}
          tableSizing={features.tableSizing}
        />
        <TableBody
          pageData={pageData}
          columns={columns}
          features={features}
          onAdd={onAdd}
          onEdit={onEdit}
          onDelete={onDelete}
          onSave={onSave}
          onCancel={onCancel}
          pageAction={pageAction}
          setPageAction={setPageAction}
          currentPage={currentPage}
          pageSize={pageSize}
          inputErrors={inputErrors}
        />
        <TableFooter
          paginating={features.paginating}
          itemsCount={data.length}
          pageSize={pageSize}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};
export default Table;
