import { ModalActions } from './ModalContext/models';
import { UserActions } from "./UserContext/models";

export type AppActions = UserActions | ModalActions;
