import { IRoute } from "../../routes";
import { lazy } from "react";

const HomeSliderManager = lazy(() => import("./HomeSliderManager"));
export const siteMangaerRoutes: IRoute[] = [
  {
    path: "/site-manager/slider",
    component: HomeSliderManager,
  },
];
