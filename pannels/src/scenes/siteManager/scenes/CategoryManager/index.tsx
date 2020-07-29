import React, { useMemo } from "react";
import { ReactTable } from "../../../../components/Table/ReactTable";
import TableContainer from "../../../../components/Table/TableContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  useExpanded,
  HeaderProps,
  CellProps,
  useColumnOrder,
  usePagination,
  useFilters,
  useGroupBy,
  useSortBy,
  useFlexLayout,
  useResizeColumns,
  useRowSelect,
  useTable,
} from "react-table";
import useSWR from "swr";
import { baseAdminUrl } from "../../../../services/utils/api/Admin";
import { ICategoryRes, ICompanyRes } from "../../../../services/utils/api/Admin/models";
import { Tree, renameProp } from "../../../../services/utils/treeTravers";
import { CircleButton } from "../../../../components/CircleButton";
import api from "../../../../services/utils/api";
import EditCategoryModal from "./components/CategoryModal/EditCategoryModal";
import { EModalActionTypes } from "../../../../services/contexts/ModalContext/models";
import { useModalDispatch } from "../../../../services/contexts/ModalContext/ModalContext";
import { TCompanyTableData } from "../../../Dashboard/Scenes/CompaniesList/components/models";
import { TCategoryTableData } from "./models";

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
  const modalDispatch = useModalDispatch();
  const { data } = useSWR<ICategoryRes[]>(`${baseAdminUrl}/category/`);
  const rows = useMemo(() => {
    if (data) {
      const newData = data.map((d) => {
        return Tree.mapChangeChildrenName(renameProp, d);
      });
      return newData;
    }
    return [];
  }, [data]);

  const openModal = (modalProps: TCategoryTableData) => {
    modalDispatch({
      type: EModalActionTypes.SHOW_MODAL,
      payload: {
        component: EditCategoryModal,
        props: {
          ...modalProps,
          // id: 1,
          // name: "فلان",
          // picture: "bla",
          // slider: ["khar", "olaq"],
        },
      },
    });
  };

  const handleDeleteCategory = async (id: number) => {
    try {
      const toDelete = window.confirm("آیا این دسته بندی حذف شود؟");
      if (toDelete) {
        await api.adminApi.deleteCategory(id);
      }
    } catch (e) {}
  };
  const handleEditCategory = (data : TCategoryTableData) => {
    openModal(data);
  };
  const columns = React.useMemo(
    () => [
      {
        // Build our expander column
        id: "expander", // Make sure it has an ID
        accessor: "expander",
        Header: ({
          getToggleAllRowsExpandedProps,
          isAllRowsExpanded,
        }: HeaderProps<object>) => (
          <span {...getToggleAllRowsExpandedProps()}>
            {isAllRowsExpanded ? (
              <i className="fas fa-minus-square"></i>
            ) : (
              <i className="fas fa-plus-square"></i>
            )}
          </span>
        ),
        Cell: ({ row }: CellProps<object>) =>
          // Use the row.canExpand and row.getToggleRowExpandedProps prop getter
          // to build the toggle for expanding a row
          row.canExpand ? (
            <span
              {...row.getToggleRowExpandedProps({
                style: {
                  // We can even use the row.depth property
                  // and paddingLeft to indicate the depth
                  // of the row
                  paddingRight: `${row.depth * 2}rem`,
                },
              })}
            >
              {row.isExpanded ? (
                <i className="fas fa-minus-square"></i>
              ) : (
                <i className="fas fa-plus-square"></i>
              )}
            </span>
          ) : null,
      },
      {
        Header: "نام دسته بندی",
        accessor: "title",
        Cell: ({
          row: { canExpand, original },
        }: CellProps<TCategoryTableData>) => {
          return (
            <span className={`${canExpand ? "font-bold" : ""}`}>
              {original.title}
            </span>
          );
        },
      },
      {
        Header: "نام دسته بندی پدر",
        accessor: "parent_title",
        Cell: ({
          row: {
            original: { parent_title },
          },
        }: CellProps<TCategoryTableData>) => {
          if (parent_title) {
            return parent_title;
          } else return <span className="text-warning ">ندارد</span>;
        },
      },
      {
        Header: "تنظیمات",
        accessor: "options",
        Cell: ({ row: { original } }: CellProps<TCategoryTableData>) => {
          const { id } = original;
          return (
            <>
              <CircleButton
                onClick={() => handleDeleteCategory(id!)}
                icon="icon-trash "
                type="danger"
                className="ml-2"
              />
              <CircleButton
                onClick={() => handleEditCategory(original!)}
                icon="icon-pencil"
                type="warning"
              />
            </>
          );
        },
      },
    ],
    []
  );

  // const data = React.useMemo(() => makeData(5, 5, 5), []);
  const tableInstance = useTable<object>({ columns, data: rows }, ...hooks);

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <TableContainer {...tableInstance}>
            <ReactTable {...tableInstance} />
          </TableContainer>
        </div>
      </div>
    </div>
  );
};
{
  /* <Table<ICategory>
            entryData={getCategories()}
            columns={[
              { path: "id", label: "شناسه", type: "number" },
              { path: "name", label: "مشخصات", type: "text" },
            ]}
            features={{
              paginating: true,
              defaultPageSize: 3,
              filtering: true,
              tableSizing: true,
              hasAction: true,
              addable: true,
              editable: true,
              deletable: true,
            }}
            toBeRenderedModal={EditCategoryModal}
          /> */
}
export default Index;
