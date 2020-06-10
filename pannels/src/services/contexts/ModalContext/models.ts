export interface IModalState {
  props: any;
  component: any;
}

export enum EModalActionTypes {
  SHOW_MODAL,
  HIDE_MODAL,
}
interface IShowModalAction {
  type: EModalActionTypes.SHOW_MODAL;
  payload: { component: any; props: any };
}
interface IHideModalAction {
  type: EModalActionTypes.HIDE_MODAL;
}

export type ModalActions = IShowModalAction | IHideModalAction;
