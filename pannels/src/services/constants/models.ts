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
  | "company:signup"
  | "main-site:edit"
  | "company:create"
  | "category:read"
  | "category:update"
  | "category:delete"
  | "category:create";
