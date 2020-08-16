
import { IRoute } from "../../routes";
import { lazy } from "react";

const Slider = lazy(() => import("./Slider"));
export const companyPageManagerRoutes: IRoute[] = [
  {
    path: "/company-page-manager/slider",
    component: Slider,
  },
];
