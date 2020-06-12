import React, { useReducer } from "react";
import modalReducer from "./ModalReducer";
import { modalContext, modalDispatchContext } from "./ModalContext";
import { IModalState } from "./models";
const initialModalState: IModalState = {
  component: [],
  props: [],
};

const ModalProvider: React.FC<{}> = (props) => {
  const [modalState, modalStateDispatch] = useReducer(
    modalReducer,
    initialModalState
  );

  return (
    <modalContext.Provider value={modalState}>
      <modalDispatchContext.Provider value={modalStateDispatch}>
        {props.children}
      </modalDispatchContext.Provider>
    </modalContext.Provider>
  );
};
export default ModalProvider;
