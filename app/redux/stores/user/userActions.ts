import { INextWrapper } from "./../../models/INexWrapper";
import { IError } from "../../models/IError";
import { IStore } from "../../models/IStore";
import { ReduxDispatch } from "../../models/ReduxProps";
import { IUser, IUserState } from "./models/IUserState";
import { IAction } from "../../models/IAction";
import { EUserActionTypes } from "./userActionTypes";
import axios from "axios";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import {getProfile}from "../../../services/api/login";

export type UUserActions = IUser | IError ;

export const loginUser = (
  access: string = ""
): ThunkAction<Promise<void>, IStore, {}, AnyAction> => (
  dispatch,
  getState: () => IStore
) => {
  dispatch(loginPending());
  return  getProfile(access)
    .then((res) => {
      dispatch(loginUserSuccess(res.data));
    })
    .catch((err) => {
      dispatch(loginUserFail(err.data));
    });
};

export const loadUser = (user: IUser): IAction<IUser> => ({
  type: EUserActionTypes.LOAD,
  payload: user,
});

export const loginPending = (): IAction<any> => ({
  type: EUserActionTypes.LOGIN,
});

export const loginUserSuccess = (user: IUser): IAction<IUser> => ({
  type: EUserActionTypes.LOGIN_SUCCESS,
  payload: user,
});
export const loginUserFail = (err: IError): IAction<IError> => ({
  type: EUserActionTypes.LOGIN_FAILD,
  payload: err,
});

