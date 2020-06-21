import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { IStore } from "../redux/models/IStore";
import { useUserState } from "../services/contexts/UserContext/UserContext";
import routes, { IRoute } from "../scenes/routes";
import rules from "../services/constants/roles";
import { check } from "../services/utils/check";

const PrivateRoute: React.FC<RouteProps & { component: any } & IRoute> = ({
  component: Component,
  ...rest
}) => {
  const { toHavePermissions } = rest;
  const user = useUserState();


  // const userPermissions = rules[user.rule].static;
  // console.log(userPermissions);

  // const canRender = toHavePermissions?.some((item) => {
  //   return userPermissions.some((perm) => item === perm);
  // });
  const canRender = check(user , toHavePermissions)
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <>
            {user.isAuth && canRender ? (
              <Component routes={rest.routes} {...props} />
            ) : (
              <>
                {/* {toast.error("برای ادامه وارد شوید")} */}
                <Redirect
                  to={{
                    pathname: "/",
                    state: { from: props.location },
                  }}
                />
              </>
            )}
          </>
        );
      }}
    />
  );
};

export default PrivateRoute;
