import { AnyAction } from "redux";
import { INextWrapper } from "./../../models/INexWrapper";
import { HYDRATE } from "next-redux-wrapper";
import { IError } from "../../models/IError";
import { IUser, IUserState } from "./models/IUserState";
import { IStore } from "../../models/IStore";
import { EUserActionTypes } from "./userActionTypes";
import { IAction } from "../../models/IAction";
import { UUserActions } from "./userActions";

const user: IUserState = {
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

//each state should be define like this
const initialUserState: INextWrapper<IUserState> = {
  server: user,
  client: user,
};

export default (
  state: INextWrapper<IUserState> = initialUserState,
  action: AnyAction
): INextWrapper<IUserState> => {
  switch (action.type) {
    case HYDRATE:
      return { ...action.payload.user } as INextWrapper<IUserState>;
    case EUserActionTypes.LOGIN:
      return {
        ...state,
        client: {
          ...state.client,
          isLoading: true,
        },
      };
    case EUserActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        client: {
          ...state.client,
          isAuth: true,
          isLoading: false,
          ...action.payload,
        },
      };
    case EUserActionTypes.LOGIN_FAILD:
      return {
        ...state,
        client: {
          ...state.client,
          isLoading: false,
          isAuth: false,
          ...action.payload,
        },
      };
    case EUserActionTypes.LOAD:
      return {
        ...state,
        client: {
          ...state.client,
          isAuth: true,
          isLoading: false,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
