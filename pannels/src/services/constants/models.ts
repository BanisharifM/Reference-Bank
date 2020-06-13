interface IRulePermissionTypes {
  static: TPermissions[];
}
interface IRules {
  user: IRulePermissionTypes;
  company: IRulePermissionTypes;
  admin: IRulePermissionTypes;
  [key: string]: IRulePermissionTypes;
}
interface IUserRules {}
interface ICompanyRules {}
interface IAdminRules {}

type TPermissions =
  | "company:signup"
  | "main-site:edit"
  | "company:create"
  | "category:read"
  | "category:update"
  | "category:delete"
  | "category:create";
export { IRulePermissionTypes, IRules, TPermissions };
