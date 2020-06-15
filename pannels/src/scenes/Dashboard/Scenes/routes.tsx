import { IRoute } from "../../routes";
import { lazy } from "react";

const Apps = lazy(() => import("./Apps"));
const CreateCompany = lazy(() => import("./CreateCompany"));
export const dashboardRoutes: IRoute[] = [
  {
    path: "/dashboard/apps",
    component: Apps,
    
  },
  {
    path: "/dashboard/create-company",
    component: CreateCompany,
    private: true,
    toHavePermissions: ["company:create"],
  },
];
