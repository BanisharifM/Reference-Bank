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
  let lastProps;
  if (Component) {
    TobeRender = Component[Component.length - 1];
    lastProps = props[props.length - 1];
  }
  // console.log(TobeRender)
  return (
    <React.Fragment>
      {TobeRender ? (
        <TobeRender {...lastProps} modalDispatcher={modalDispatch} />
      ) : null}
    </React.Fragment>
  );
};

export default ModalRoot;
