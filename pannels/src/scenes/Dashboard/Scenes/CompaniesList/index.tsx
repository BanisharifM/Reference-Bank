import React, { useCallback, useEffect, useState } from "react";
import {
  CellProps,
  useColumnOrder,
  useExpanded,
  useFilters,
  useFlexLayout,
  useGroupBy,
  usePagination,
  useResizeColumns,
  useRowSelect,
  useSortBy,
  useTable,
} from "react-table";
import { toast } from "react-toastify";
import useSWR from "swr";
import Button from "../../../../components/Button";
import { ReactTable } from "../../../../components/Table/ReactTable";
import TableContainer from "../../../../components/Table/TableContainer";
import api from "../../../../services/utils/api";
import { baseAdminUrl } from "../../../../services/utils/api/Admin";
import { ICompanyRes } from "../../../../services/utils/api/models";
import { TCompanyTableData } from "./components/models";
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
      try {
        if (original.status === "s") {
          if (window.confirm("آیا وضعیت شرکت فعال شود؟")) {
            await api.adminApi.editCompany({
              id: original.id!,
              status: "a",
            });
            await revalidate();
            toast.success("وضعیت شرکت فعال شد");
            setLoading(false);
          }
          setLoading(false);
        }
        if (original.status === "a") {
          if (window.confirm("آیا میخواهید شرکت غیر فعال شود؟")) {
            await api.adminApi.editCompany({
              id: original.id!,
              status: "s",
            });
            await revalidate();
            toast.success("وضعیت شرکت غیر فعال شد");
            setLoading(false);
          }
          setLoading(false);
        }
      } catch (err) {
        toast.error("تغییر وضعیت شرکت صورت نپذیرفت");
        setLoading(false);
        setClicked(-1);
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
      <div className="row">
        <div className="col-sm-12">
          <div className="card card-body">
            <h4 className="card-title">لیست شرکت‌ها</h4>
            <h5 className="card-subtitle">
              در اینجا میتوانید لیست شرکت‌ها را مشاهده کنید
            </h5>
            <TableContainer<TCompanyTableData> {...tableInstance}>
              <ReactTable<TCompanyTableData> {...tableInstance} />
            </TableContainer>
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
