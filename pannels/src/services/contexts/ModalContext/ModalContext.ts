import { AppActions } from "./../AppActions";
import { IModalState } from "./models";
import React, { createContext, useContext, Dispatch } from "react";

const initialModalState: IModalState = {
  component: [],
  props: {},
};

export const modalContext = createContext<IModalState>(initialModalState);

export const modalDispatchContext = createContext<Dispatch<AppActions>>(
  () => {}
);
export const useModalState = () => useContext(modalContext);
export const useModalDispatch = () => useContext(modalDispatchContext);
