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
  /***
   * here we first check if perform is array (not undefined , beacuse private routes can have undefined permissions)
   * and have length (because if it is an empty array , any user can see that item)
   * then check userpermissions with that perform array to calculate accessibility of user
   * 
   */
  if (isArray(perform) && perform.length) {
    canAccess = perform?.some((item) => {
      return userPermissions.some((perm) => item === perm);
    });
  }
  return canAccess;
};
