import { IError } from "./../interfaces/IError";
import { IStore } from "./../interfaces/IStore";
import { ReduxDispatch } from "./../interfaces/ReduxProps";
import { IUserState } from "./../interfaces/IUserState";
import { IAction } from "./../interfaces/IAction";
import { EUserActionTypes } from "./../actionTypes.ts/userActionTypes";
import axios from "axios";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

export type UUserActions = IUserState | IError;

export const loginUser = (token: string): ThunkAction<Promise<void>, IStore, {}, AnyAction> => (
  dispatch,
  getState: () => IStore
) => {
  dispatch(loginPending());
  return axios
    .get("https://api.restino.ir/accounts/api/v1/profile/", {
      headers: { authorization: `Bearer ${token}`},
    })
    .then((res) => {
      dispatch(loginUserSuccess(res.data));
    })
    .catch((err) => {
      dispatch(loginUserFail(err.data));
    });
};

export const loginPending = (): IAction<any> => ({ type: EUserActionTypes.LOGIN });

export const loginUserSuccess = (user: IUserState): IAction<IUserState> => ({
  type: EUserActionTypes.LOGIN_SUCCESS,
  payload: user,
});
export const loginUserFail = (err: IError): IAction<IError> => ({
  type: EUserActionTypes.LOGIN_FAILD,
  payload: err,
});
