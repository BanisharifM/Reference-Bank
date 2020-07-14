import { IMenuItem } from "../types";

const adminDashboardItems: IMenuItem[] = [
  {
    path: "/dashboard/create-company",
    title: "ثبت شرکت",
    toHavePermissions: ["company:create"],
  },
  // {
  //   path: "/felan",
  //   title: "Analytical",
  //   toHavePermissions: [],
  // },
  // {
  //   path: "/bisar",
  //   title: "Demographical",
  //   toHavePermissions: [],
  // },
  // {
  //   path: "/felanbisar",
  //   title: "Modern",
  //   toHavePermissions: [],
  // },
];

const siteManagementItems: IMenuItem[] = [
  {
    path: "/site-manager/slider",
    title: "اسلایدر اصلی",
    toHavePermissions: ["main-site:edit"],
  },
  {
    path: "/site-manager/category-manager",
    title: "دسته بندی‌ها",
    toHavePermissions: ["main-site:edit"],
  },
];

export { adminDashboardItems, siteManagementItems };
