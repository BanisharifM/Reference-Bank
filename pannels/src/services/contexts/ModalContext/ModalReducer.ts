import { AppActions } from "./../AppActions";
import { EModalActionTypes, IModalState } from "./models";

const modalReducer: React.Reducer<IModalState, AppActions> = (
  state,
  action
) => {
  switch (action.type) {
    case EModalActionTypes.SHOW_MODAL:
      document.querySelector("body")?.classList.add("modal-open"); //midunam kare badie :| vali chere nist
      return {
        ...state,
        component: [...state.component, action.payload.component],
        props: action.payload.props,
      };
    case EModalActionTypes.HIDE_MODAL:
      document.querySelector("body")?.classList.remove("modal-open"); //midunam kare badie :| vali chere nist
      return {
        ...state,
        component: state.component.slice(0, state.component.length - 1),
        props: {},
      };
    default:
      return state;
  }
};
export default modalReducer;
