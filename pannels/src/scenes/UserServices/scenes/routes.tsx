import { IRoute } from "../../routes";
import { lazy } from "react";

const Profile = lazy(() => import("./Profile"));
export const userServicesRoutes: IRoute[] = [
  {
    path: "/user-services/profile",
    component: Profile,
  },
];
