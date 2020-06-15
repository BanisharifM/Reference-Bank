import React, { ReactNode, ReactElement } from "react";
import { TPermissions } from "../services/constants/models";
import { useUserState } from "../services/contexts/UserContext/UserContext";
import rules from "../services/constants/roles";
import { check } from "../services/utils/check";
import { isArray } from "lodash";

interface IProps {
  perform: TPermissions[] | undefined;
  yes: () => null | ReactElement<any, any>;
  no?: () => null | ReactElement<any, any>;
}
const Can: React.FC<IProps> = ({ perform, yes, no }) => {
  const user = useUserState();
  const canRender = check(user, perform);
  //   const userPermissions = rules[user.rule].static;
  //   const canRender = userPermissions.includes(perform);

  return canRender ? yes() : no ? no() : null;
};

export default Can;
