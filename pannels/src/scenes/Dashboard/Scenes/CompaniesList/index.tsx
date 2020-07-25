import React, { useState, useEffect, useCallback } from "react";
import useSWR from "swr";
import TableContainer from "./components/TableContainer";
import { ICompanyRes } from "../../../../services/utils/api/Admin/models";
import api from "../../../../services/utils/api";
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
import { baseAdminUrl } from "../../../../services/utils/api/Admin";
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
  const { data, revalidate } = useSWR(baseAdminUrl + "/companies");
  const [loading, setLoading] = useState(false);
  const [clicked, setClicked] = useState(-1);
  const handleStatusClick = useCallback(
    async (original: TCompanyTableData) => {
      setClicked(original.identifier!);
      setLoading(true);
      if (original.status === "s") {
        if (window.confirm("آیا وضعیت شرکت فعال شود؟")) {
          await api.adminApi.editCompany({
            id: original.id!,
            status: "a",
          });
          await revalidate();
          setLoading(false);
        }
      }
      if (original.status === "a") {
        if (window.confirm("آیا میخواهید شرکت غیر فعال شود؟")) {
          await api.adminApi.editCompany({
            id: original.id!,
            status: "s",
          });
          await revalidate();
          setLoading(false);
        }
      }
    },
    [revalidate]
  );
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
        Cell: ({ row: { original } }: CellProps<TCompanyTableData>) => {
          const buttonText = original.status === "s" ? "معلق" : "فعال";
          const buttonClass = original.status === "s" ? "warning" : "success";
          return (
            <Button
              loading={clicked === original.identifier! && loading}
              onClick={() => handleStatusClick(original)}
              text={buttonText}
              type={buttonClass}
            />
          );
        },
      },
    ],
    [clicked, handleStatusClick, loading]
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
  }, [data]);

  const tableInstance = useTable<TCompanyTableData>(
    {
      columns,
      data: companies,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    ...hooks
  );

  return (
    <>
      <TableContainer<TCompanyTableData> {...tableInstance}>
        <ReactTable<TCompanyTableData> {...tableInstance} />
      </TableContainer>
    </>
  );
};
export default Index;
