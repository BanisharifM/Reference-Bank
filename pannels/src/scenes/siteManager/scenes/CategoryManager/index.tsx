import React, {useCallback, useMemo} from "react";
import {CellProps, HeaderProps, useColumnOrder, useExpanded, useFilters, useFlexLayout, useGroupBy, usePagination, useResizeColumns, useRowSelect, useSortBy, useTable} from "react-table";
import useSWR from "swr";
import Button from "../../../../components/Button";
import {CircleButton} from "../../../../components/CircleButton";
import {ReactTable} from "../../../../components/Table/ReactTable";
import TableContainer from "../../../../components/Table/TableContainer";
import {useModalDispatch} from "../../../../services/contexts/ModalContext/ModalContext";
import {EModalActionTypes} from "../../../../services/contexts/ModalContext/models";
import api from "../../../../services/utils/api";
import {baseAdminUrl} from "../../../../services/utils/api/Admin";
import {ICategoryRes} from "../../../../services/utils/api/Admin/models";
import {renameProp, Tree} from "../../../../services/utils/treeTravers";
import CreateCategoryModal from "./components/CategoryModal/CreateCategoryModal";
import EditCategoryModal from "./components/CategoryModal/EditCategoryModal";
import {TCategoryTableData} from "./models";


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

  const openEditCategoryModal = useCallback(
    (modalProps: TCategoryTableData) => {
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
    },
    [modalDispatch]
  );
  const openCreateCategoryModal = () => {
    modalDispatch({
      type: EModalActionTypes.SHOW_MODAL,
      payload: {
        component: CreateCategoryModal,
        props: {},
      },
    });
  };
  const handleCreateCategory = () => {
    openCreateCategoryModal();
  };
  const handleDeleteCategory = async (id: number) => {
    try {
      const toDelete = window.confirm("آیا این دسته بندی حذف شود؟");
      if (toDelete) {
        await api.adminApi.deleteCategory(id);
      }
    } catch (e) {}
  };
  const handleEditCategory = useCallback(
    (data: TCategoryTableData) => {
      openEditCategoryModal(data);
    },
    [openEditCategoryModal]
  );
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
        // {...row.getToggleRowExpandedProps({
        //   style: { paddingRight: `${row.depth * 2} rem` },
        // })} : ''}
        Header: "نام دسته بندی",
        accessor: "title",
        Cell: ({
          row: { canExpand, original, ...row },
        }: CellProps<TCategoryTableData>) => {
          return (
            <span
              {...row.getToggleRowExpandedProps({
                style: { paddingRight: `${row.depth * 2}rem` },
              })}
              className={`${canExpand ? "font-bold" : ""}`}
            >
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
            ...row
          },
        }: CellProps<TCategoryTableData>) => {
          return (
            <span
              {...row.getToggleRowExpandedProps({
                style: { paddingRight: `${row.depth * 2}rem` },
              })}
            >
              {parent_title ? parent_title : "ندارد"}
            </span>
          );
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
    [handleEditCategory]
  );

  // const data = React.useMemo(() => makeData(5, 5, 5), []);
  const tableInstance = useTable<object>({ columns, data: rows }, ...hooks);

  return (
    <div>
      <div className="card">
        <div className="card-body px-4">
          <TableContainer
            {...tableInstance}
            tool={() => (
              <Button
                onClick={handleCreateCategory}
                text="ایجاد دسته بندی"
                type="info"
                className="ml-auto d-block mr-5"
              />
            )}
          >
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
