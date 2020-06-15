import { AppActions } from "./../AppActions";
import { createContext, Dispatch, useContext } from "react";
import { IUserState } from "./models";
const initial: IUserState = {
  username: "ali",
  isAuth: true,
  rule: "company",
};

export const userContext = createContext<IUserState>(initial);
export const userDispatchContext = createContext<Dispatch<AppActions>>(
  () => {}
);

export const useUserState = () => useContext(userContext);
export const useUserDispatch = () => useContext(userDispatchContext);
