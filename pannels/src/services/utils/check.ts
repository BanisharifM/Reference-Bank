import { IUserState } from "../contexts/UserContext/models";
import { TPermissions } from "../constants/models";
import rules from "../constants/roles";
import { isArray, remove } from "lodash";
export const check = (user: IUserState, perform: TPermissions | TPermissions[]) => {
  const { rule } = user;
  const userPermissions = rules[rule].static;
  let canAccess;
  if (isArray(perform)) {
    canAccess = perform?.some((item) => {
      return userPermissions.some((perm) => item === perm);
    });
  } else {
    canAccess = userPermissions.includes(perform);
  }
  return canAccess;
};
