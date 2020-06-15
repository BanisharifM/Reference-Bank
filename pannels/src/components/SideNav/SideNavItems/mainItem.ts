import { TPermissions } from "./../../../services/constants/models";
import { ISideNavItems, IMenuItem } from "./../types";
import { adminDashboardItems, siteManagementItems } from "./subItems";
import { flatten, isEmpty } from "lodash";

const calcOrChildPermission = (childIitem: IMenuItem[]): TPermissions[] => {
  /**
   *
   * map over childItems to get tohaveprmission items its make an array like [[categore : create] , [] , []]
   * so we have to flat this array .
   * we use item.toHavePermissions && item.toHavePermissions to keep in mind that IMuneItem could not have
   * tohavepermission and our array could be like [undefined , undefiend ,[]] so we wanna ignore undefiend
   * items
   *
   * */

  const childPermArray = childIitem
    .map((item) => item.toHavePermissions)
    .filter((item) => item !== undefined);
  console.log(childPermArray, " in calc or child permission");

  return childPermArray.some((item) => isEmpty(item))
    ? []
    : flatten(childPermArray);
};
export const menuItems: ISideNavItems[] = [
  {
    title: "داشبورد",
    news: 4,
    items: adminDashboardItems,
    icon: "icon-speedometer",
    toHavePermissions: calcOrChildPermission(adminDashboardItems),
  },
  {
    title: "مدیریت سایت اصلی",
    items: siteManagementItems,
    icon: "ti-layout-grid2",
    toHavePermissions: calcOrChildPermission(siteManagementItems),
  },
];
