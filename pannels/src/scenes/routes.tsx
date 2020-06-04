import { lazy } from "react";
import { Route } from "react-router-dom";
import React from "react";

import PrivateRoute from "../components/PrivateRoute";

// const Home = lazy(() => import("./Home"));
// const AboutUs = lazy(() => import("./AboutUs"));
// const LogIn = lazy(() => import("./Login"));
// const SignUp = lazy(() => import("./SignUp"));
// const OTPActivation = lazy(() => import("./OTPActivation"));
// const Product = lazy(() => import("./Product"));
// const Help = lazy(() => import("./Help"));
// const Checkout = lazy(() => import("./Checkout"));
// const Profile = lazy(() => import("./Profile"));
// const EditProfile = lazy(() => import("./Profile/scenes/EditProfile"));
// const AddAddress = lazy(() => import("./Profile/scenes/AddAddress"));
// const EditAddress = lazy(() => import("./Profile/scenes/EditAddress"));
// const Order = lazy(() => import("./Order"));
// const Callback = lazy(() => import("../components/Payment"));
// const NotFound = lazy(() => import("./NotFound"));

export interface IRoute {
  path?: string | string[];
  component: React.FC<any>;
  exact?: boolean;
  routes?: IRoute[];
  private?: boolean;
}

const routes: IRoute[] = [
  //   {
  //     exact: true,
  //     path: "/",
  //     component: Home,
  //   },
  //   {
  //     path: "/about-us",
  //     component: AboutUs,
  //   },
  //   {
  //     path: "/login",
  //     component: LogIn,
  //   },
  //   {
  //     path: "/sign-up",
  //     component: SignUp,
  //   },
  //   {
  //     path: "/activate",
  //     component: OTPActivation,
  //   },
  //   {
  //     path: "/product/:id",
  //     component: Product,
  //   },
  //   {
  //     path: "/checkout",
  //     component: Checkout,
  //     private: true,
  //   },
  //   {
  //     path: "/profile",
  //     component: Profile,
  //     exact: true,
  //     private: true,
  //   },
  //   {
  //     path: "/profile/edit",
  //     component: EditProfile,
  //     exact: true,
  //     private: true,
  //   },
  //   {
  //     path: "/profile/address/edit",
  //     component: EditAddress,
  //     exact: true,
  //     private: true,
  //   },
  //   {
  //     path: "/profile/address/add",
  //     component: AddAddress,
  //     exact: true,
  //     private: true,
  //   },
  //   {
  //     path: "/order",
  //     component: Order,
  //     private: true,
  //   },
  //   {
  //     path: "/payment",
  //     private: true,
  //     component: Callback,
  //   },
  //   {
  //     path: "/help/order",
  //     component: Help,
  //   },
  //   {
  //     component: NotFound,
  //   },
];

export const renderRoutes = (routes: IRoute[]) => {
  return routes.map((route, key) => {
    if (route.private) {
      return <PrivateRoute {...route} key={key} />;
    } else {
      return (
        <Route
          key={key}
          {...route}
          component={undefined}
          render={(props) => {
            if (false) {
              return (
                <route.component {...props} routes={route.routes} key={key} />
              );
            } else {
              return (
                <route.component {...props} routes={route.routes} key={key} />
              );
            }
          }}
        />
      );
    }
  });
};
export default routes;
