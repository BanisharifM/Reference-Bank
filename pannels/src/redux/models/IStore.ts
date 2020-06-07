import { INextWrapper } from "./../../../../app/redux/models/INexWrapper";
import { IInitalUserState } from "../stores/user/userReducer";

export interface IStore {
  user: INextWrapper<IInitalUserState>;
}
