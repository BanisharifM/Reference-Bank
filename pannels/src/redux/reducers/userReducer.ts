import { IError } from "./../interfaces/IError";
import { IUserState } from "./../interfaces/IUserState";
import { IStore } from "./../interfaces/IStore";
import { EUserActionTypes } from "./../actionTypes.ts/userActionTypes";
import { IAction } from "./../interfaces/IAction";
import { UUserActions } from "../actions/UserActions";

export interface IInitalUserState extends IUserState {
  isLoading: boolean;
  error: string;
  isAuth: boolean;
}

const initialUserState: IInitalUserState = {
  username: "",
  password: "",
  isLoading: false,
  error: "",
  isAuth: false,
};

export default (
  state: IInitalUserState = initialUserState,
  action: IAction<UUserActions>
): IInitalUserState => {
  switch (action.type) {
    case EUserActionTypes.LOGIN_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case EUserActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        isLoading: false,
        ...action.payload,
      };
    case EUserActionTypes.LOGIN_FAILD:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        ...action.payload,
      };
    default:
      return state;
  }
};
