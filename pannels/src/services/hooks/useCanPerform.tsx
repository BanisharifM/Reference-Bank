import { useUserState } from "../contexts/UserContext/UserContext";
import { TPermissions } from "../constants/models";
import { check } from "../utils/check";

export const useCanPerform = (perform: TPermissions) => {
  const user = useUserState();
  return check(user, perform);
};
