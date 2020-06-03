import { IError } from "./../interfaces/IError";
import { IStore } from "./../interfaces/IStore";
import { ReduxDispatch } from "./../interfaces/ReduxProps";
import { IUserState } from "./../interfaces/IUserState";
import { IAction } from "./../interfaces/IAction";
import { EUserActionTypes } from "./../actionTypes.ts/userActionTypes";
import axios from "axios";

export type UUserActions = IUserState | IError;
export const loginUser = (username: string, password: string) => (
  dispatch: ReduxDispatch<UUserActions>,
  getState: () => IStore
): Promise<void> => {
  dispatch(loginPending());
  return axios
    .get("fake url")
    .then((res) => {
      dispatch(loginUserSuccess(res.data));
    })
    .catch((err) => {
      dispatch(loginUserFail(err.data));
    });
};

export const loginPending = (): IAction<any> => ({ type: EUserActionTypes.LOGIN_PENDING });

export const loginUserSuccess = (user: IUserState): IAction<IUserState> => ({
  type: EUserActionTypes.LOGIN_SUCCESS,
  payload: user,
});
export const loginUserFail = (err: IError): IAction<IError> => ({
  type: EUserActionTypes.LOGIN_FAILD,
  payload: err,
});
