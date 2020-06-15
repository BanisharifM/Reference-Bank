import React from "react";
import { useModalDispatch } from "../../../../services/contexts/ModalContext/ModalContext";
import { EModalActionTypes } from "../../../../services/contexts/ModalContext/models";
import EditCategoryModal from "./components/CategoryModal/EditCategoryModal";
import Table from "./components/Table/Table";
import { getCategories } from "./testCategory";
import { Formik } from "formik";
import { ICategory } from "./components/Table/model";

// interface ICategory {
//   id: number;
//   name: string;
//   picture: string;
//   slider: string[];
// }
const Index = () => {
  // const modalDispatch = useModalDispatch();
  // const openModal = () => {
  //   modalDispatch({
  //     type: EModalActionTypes.SHOW_MODAL,
  //     payload: {
  //       component: EditCategoryModal,
  //       props: {
  //         category: {
  //           id: 1,
  //           name: "فلان",
  //           picture: "bla",
  //           slider: ["khar", "olaq"],
  //         },
  //       },
  //     },
  //   });
  // };
  return (
    <div>
      {/* <button onClick={openModal}>click</button> */}
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Row grouping </h4>
          <h6 className="card-subtitle">Data table example</h6>

          <Table<ICategory>
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
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
