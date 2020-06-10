import { IMenuItem } from "../types";

const dashboardItems: IMenuItem[] = [
  {
    path: "/dashboard/create-company",
    title: "ثبت شرکت",
  },
  { path: "/felan", title: "Analytical" },
  {
    path: "/bisar",
    title: "Demographical",
  },
  {
    path: "/felanbisar",
    title: "Modern",
  },
];

const siteManagementItems: IMenuItem[] = [
  {
    path: "/site-manager/slider",
    title: "اسلاید اصلی",
  },
];

export { dashboardItems, siteManagementItems };
