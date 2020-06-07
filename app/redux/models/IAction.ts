import { Action } from "redux";
export interface IAction<T> extends Action {
  type: any;
  payload?: T;
}
