import React from "react";
import { useModalDispatch } from "../../../../services/contexts/ModalContext/ModalContext";
import { EModalActionTypes } from "../../../../services/contexts/ModalContext/models";
import EditCategoryModal from "./components/EditCategoryModal";

interface ICategory {
  id: number;
  name: string;
  picture: string;
  slider: string[];
}
const Index = () => {
  const modalDispatch = useModalDispatch();
  const openModal = () => {
    modalDispatch({
      type: EModalActionTypes.SHOW_MODAL,
      payload: {
        component: EditCategoryModal,
        props: {
          category: {
            id: 1,
            name: "فلان",
            picture: "bla",
            slider: ["khar", "olaq"],
          },
        },
      },
    });
  };
  return (
    <div>
      <button onClick={openModal}>click</button>
    </div>
  );
};

export default Index;
