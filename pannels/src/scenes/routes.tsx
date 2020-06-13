import { lazy } from "react";
import { Route } from "react-router-dom";
import React from "react";

import PrivateRoute from "../components/PrivateRoute";
import BaseLayout from "../components/BaseLayout";
import { dashboardRoutes } from "./Dashboard/Scenes/routes";
import { siteManagerRoutes } from "./siteManager/scenes/routes";
import { TPermissions } from "../services/constants/models";
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
  toHavePermissions?: TPermissions[];
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
    private: true,
    toHavePermissions: ["main-site:edit"],
  },
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
