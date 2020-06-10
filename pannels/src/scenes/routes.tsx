import { lazy } from "react";
import { Route } from "react-router-dom";
import React from "react";

import PrivateRoute from "../components/PrivateRoute";
import BaseLayout from "../components/BaseLayout";
import { dashboardRoutes } from "./Dashboard/Scenes/routes";
import { siteManagerRoutes } from "./siteManager/scenes/routes";
const Dashboard = lazy(() => import("./Dashboard"));
const Redirect = lazy(() => import("./Redirect"));
const SiteManager = lazy(() => import("./siteManager"));

export interface IRoute {
  path?: string | string[];
  component: React.FC<any>;
  exact?: boolean;
  routes?: IRoute[];
  private?: boolean;
  notHaveBaseLayout?: boolean;
}

const routes: IRoute[] = [
  {
    exact: true,
    path: "/",
    component: Redirect,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    routes: dashboardRoutes,
  },
  {
    path: "/site-manager",
    component: SiteManager,
    routes: siteManagerRoutes,
  },
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
            if (route.notHaveBaseLayout) {
              return (
                <route.component {...props} routes={route.routes} key={key} />
              );
            } else {
              return (
                // <BaseLayout>
                <route.component {...props} routes={route.routes} key={key} />
                // </BaseLayout>
              );
            }
          }}
        />
      );
    }
  });
};
export default routes;
