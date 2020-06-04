import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { IStore } from "../redux/models/IStore";

const PrivateRoute: React.FC<RouteProps & { component: any }> = ({
  component: Component,
  ...rest
}) => {
  //it should be update
  const user = useSelector((store: IStore) => store.user);
  console.log(user, " in private route");
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <>
            {user.isAuth ? (
              <Component {...props} />
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
