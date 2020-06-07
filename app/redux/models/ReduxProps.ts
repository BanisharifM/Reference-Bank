import { IAction } from "./IAction";
import { Dispatch } from "redux";

export type ReduxDispatch<P> = Dispatch<IAction<P>>;
