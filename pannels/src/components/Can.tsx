import React, { ReactNode, ReactElement } from "react";
import { TPermissions } from "../services/constants/models";
import { useUserState } from "../services/contexts/UserContext/UserContext";
import rules from "../services/constants/roles";
import { check } from "../services/utils/check";
import { isArray } from "lodash";

/***
 * Can component check user permissions with current perform that recives from props to this compoennt
 * it will take the user from context and then call the function "check" to check user accessibility.
 *
 */
interface IProps {
  perform: TPermissions[] | undefined; // that undefined it cause of private route , they can not define to have Permissions
  yes: () => null | ReactElement<any, any>;
  no?: () => null | ReactElement<any, any>;
}

const Can: React.FC<IProps> = ({ perform, yes, no }) => {
  const user = useUserState();
  const canRender = check(user, perform);

  return canRender ? yes() : no ? no() : null;
};
export default Can;

