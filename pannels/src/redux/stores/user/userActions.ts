import { IError } from "../../models/IError";
import { IStore } from "../../models/IStore";
import { ReduxDispatch } from "../../models/ReduxProps";
import { IUserState } from "./models/IUserState";
import { IAction } from "../../models/IAction";
import { EUserActionTypes } from "./userActionTypes";
import axios from "axios";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import api from "../../../services/utils/api";

export type UUserActions = IUserState | IError;

export const loginUser = (): ThunkAction<
  Promise<void>,
  IStore,
  {},
  AnyAction
> => (dispatch, getState: () => IStore) => {
  dispatch(loginPending());
  return api
    .loginUser()
    .then((res) => {
      dispatch(loginUserSuccess(res.data));
    })
    .catch((err) => {
      dispatch(loginUserFail(err.data));
    });
};

export const loginPending = (): IAction<any> => ({
  type: EUserActionTypes.LOGIN,
});

export const loginUserSuccess = (user: IUserState): IAction<IUserState> => ({
  type: EUserActionTypes.LOGIN_SUCCESS,
  payload: user,
});
export const loginUserFail = (err: IError): IAction<IError> => ({
  type: EUserActionTypes.LOGIN_FAILD,
  payload: err,
});
