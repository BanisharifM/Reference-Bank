import { IStore } from "../models/IStore";
import { combineReducers, Reducer } from "redux";
import userReducer from "../stores/user/userReducer";

export default combineReducers<IStore>({
  user: userReducer,
});
