import React, { useState, useEffect } from "react";
import useSWR from "swr";
import TableContainer from "./components/TableContainer";
import { ICompanyRes } from "../../../../services/utils/api/Admin/models";
import {
  useTable,
  usePagination,
  useColumnOrder,
  useFilters,
  useGroupBy,
  useSortBy,
  useExpanded,
  useFlexLayout,
  useResizeColumns,
  useRowSelect,
  CellProps,
} from "react-table";
import { ReactTable } from "./components/ReactTable";
import { TCompanyTableData } from "./components/models";
import Button from "../../../../components/Button";
const hooks = [
  useColumnOrder,
  useFilters,
  useGroupBy,
  useSortBy,
  useExpanded,
  useFlexLayout,
  usePagination,
  useResizeColumns,
  useRowSelect,
];
const Index = () => {
  const { data } = useSWR("/data_bank/admin/companies/");
  const columns = React.useMemo(
    () => [
      {
        Header: "شماره",
        accessor: "identifier",
      },
      {
        Header: "نام شرک",
        accessor: "name",
      },
      {
        Header: "مدیر شرکت",
        accessor: "manager_name",
      },
      {
        Header: "شماره تلفن",
        accessor: "phone_number",
      },
      {
        Header: "ایمیل",
        accessor: "email",
      },
      {
        Header: "وضعیت",
        accessor: "status",
        Cell: ({
          row: { original },
          ...rest
        }: CellProps<TCompanyTableData>) => {
          const buttonText = original.status === "s" ? "معلق" : "فعال";
          const buttonClass = original.status === "s" ? "warning" : "success";
          return <Button text={buttonText} type={buttonClass} />;
        },
      },
    ],
    []
  );
  const [companies, setCompanies] = useState<TCompanyTableData[]>([]);
  useEffect(() => {
    if (data) {
      const tableData = (data as ICompanyRes[]).map((item, index) => {
        const itemEntrie = Object.entries(item).map(([key, value]) => {
          if (!value) return [key, "ندارد"];
          return [key, value];
        });
        return {
          identifier: index + 1,
          ...Object.fromEntries(itemEntrie),
        };
      });
      setCompanies(tableData);
    }
  }, [columns, data]);

  const tableInstance = useTable<TCompanyTableData>(
    {
      columns,
      data: companies,
    },
    ...hooks
  );

  return (
    <TableContainer>
      <ReactTable {...tableInstance} />
    </TableContainer>
  );
};
export default Index;
