import { INextWrapper } from "./INexWrapper";
import { IUserState } from "../stores/user/models/IUserState";

export interface IStore {
  user: INextWrapper<IUserState>;
}
