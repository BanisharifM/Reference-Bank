import { IRoute } from "../../routes";
import { lazy } from "react";

const HomeSliderManager = lazy(() => import("./HomeSliderManager"));
const CategoryManager = lazy(() => import("./CategoryManager"));
export const siteManagerRoutes: IRoute[] = [
  {
    path: "/site-manager/slider",
    component: HomeSliderManager,
  },
  {
    path : '/site-manager/category-manager',
    component : CategoryManager
  }
];
