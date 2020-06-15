import { IUserState } from "../contexts/UserContext/models";
import { TPermissions } from "../constants/models";
import rules from "../constants/roles";
import { isArray, remove } from "lodash";
export const check = (
  user: IUserState,
  perform: TPermissions[] | undefined
) => {
  const { rule } = user;
  const userPermissions = rules[rule].static;
  let canAccess = true;
  if (isArray(perform) && perform.length) {
    canAccess = perform?.some((item) => {
      return userPermissions.some((perm) => item === perm);
    });
  }
  return canAccess;
};
