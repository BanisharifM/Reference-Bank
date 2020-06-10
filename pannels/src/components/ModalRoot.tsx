import React from "react";
import {
  useModalState,
  useModalDispatch,
} from "../services/contexts/ModalContext/ModalContext";

const ModalRoot = () => {
  const modal = useModalState();
  const modalDispatch = useModalDispatch();
  const { component: Component, props } = modal;
  let TobeRender;
  if (Component) {
    TobeRender = Component[Component.length - 1];
  }
  return (
    <React.Fragment>
      {TobeRender ? (
        <TobeRender {...props} modalDispatcher={modalDispatch} />
      ) : null}
    </React.Fragment>
  );
};

export default ModalRoot;
