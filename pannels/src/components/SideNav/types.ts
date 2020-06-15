import { TPermissions } from "./../../services/constants/models";
import { string, number } from "yup";
export interface IMenuItem {
  path: string;
  title: string;
  toHavePermissions: TPermissions[];
}
export interface IMenuItemIcon extends IMenuItem {
  icon: string;
}

export interface ISideNavItems {
  title: string;
  news?: number;
  items: IMenuItem[];
  icon: string;
  toHavePermissions: TPermissions[];
}
