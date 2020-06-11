import React from "react";
import {
  useModalDispatch,
} from "../../../../services/contexts/ModalContext/ModalContext";
import { EModalActionTypes } from "../../../../services/contexts/ModalContext/models";
import SampleModal from "../../../../components/SampleModal";

const Index = () => {
  const modalDispatch = useModalDispatch();

  const handleOpenModal = () => {
    modalDispatch({
      type: EModalActionTypes.SHOW_MODAL,
      payload: { component: SampleModal, props: {} },
    });
  };
  return (
    <div>
      <button onClick={handleOpenModal}>click Me</button>
      this is apps in dashboard page
    </div>
  );
};

export default Index;
