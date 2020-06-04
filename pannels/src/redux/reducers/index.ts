import { IStore } from "./../interfaces/IStore";
import { combineReducers, Reducer } from "redux";
import userReducer from "./userReducer";

export default combineReducers<IStore>({
  user: userReducer,
});
