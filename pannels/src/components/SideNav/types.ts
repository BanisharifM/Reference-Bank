import { TPermissions } from "./../../services/constants/models";
import { string, number } from "yup";
export interface IMenuItem {
  path?: string; //its optional because of exit item : exit item haven't any path 
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

// interface Interface1 {
//   name: string;
// }
// interface Interface2 {
//   family: string;
// }
// type type1 = "app";
// type type2 = "user";
// : U extends type2 ? Interface2 : undefined,
//
// function Save<T extends Interface1 | Interface2, U extends type1 | type2>(
//   data: U extends type1 ? Interface1 : Interface2,
//   status: U
// ) {
//   console.log(data, status);
// }
// const numberOne: Interface1 = { name: "ali" };
// const numberTwo: Interface2 = { family: "mamad" };
// Save(numberTwo, "app"); error
// Save(numberTwo, "user"); error
