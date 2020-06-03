import { combineReducers,Reducer } from "redux";
import userReducer from "./userReducer";


export default combineReducers({
    user : userReducer
})