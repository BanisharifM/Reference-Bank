import { IRoute } from "../../routes";
import { lazy } from "react";

const Apps = lazy(() => import("./Apps"));
export const dashboardRoutes: IRoute[] = [
  {
    path: "/dashboard/apps",
    component: Apps,
  },
];
