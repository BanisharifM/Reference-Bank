import { IError } from "./../interfaces/IError";
import { IUserState } from "./../interfaces/IUserState";
import { IStore } from "./../interfaces/IStore";
import { EUserActionTypes } from "./../actionTypes.ts/userActionTypes";
import { IAction } from "./../interfaces/IAction";
import { UUserActions } from "../actions/userActions";

export interface IInitalUserState extends IUserState {
  isLoading: boolean;
  error: string;
  isAuth: boolean;
}

const initialUserState: IInitalUserState = {
  avatar: "",
  date_joined: "",
  description: "",
  email: "",
  first_name: "",
  national_code: "",
  last_name: "",
  username: "",
  isLoading: false,
  error: "",
  isAuth: false,
};

export default (
  state: IInitalUserState = initialUserState,
  action: IAction<UUserActions>
): IInitalUserState => {
  switch (action.type) {
    case EUserActionTypes.LOGIN:
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
