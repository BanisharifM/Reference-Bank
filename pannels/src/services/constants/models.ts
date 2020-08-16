export interface IRulePermissionTypes {
  static: TPermissions[];
}
export interface IRules {
  user: IRulePermissionTypes;
  company: IRulePermissionTypes;
  admin: IRulePermissionTypes;
  [key: string]: IRulePermissionTypes;
}
interface IUserRules {}
interface ICompanyRules {}
interface IAdminRules {}

export type TPermissions =
  | "company:companylist"
  | "company:signup"
  | "company:create"
  | "company:edit"
  | "company:manage-site"
  | "main-site:edit"
  | "category:read"
  | "category:update"
  | "category:delete"
  | "category:create";
