export interface IAdminCreateCompanyFormikState {
  username: string;
  password1: string;
  password2: string;
  name: string;
  website:string
  category:number;
  manager_name:string
  phone_number: string;
  mobile_number :string
  address: string;
  description:string
  location: [number, number];
}
// export interface ICompanyikState {
//   name: string;
//   phone_number: string;
//   company_number: string;
//   zip_code: string;
// }
export interface ICalanderDate {
  year: number;
  month: number;
  day: number;
}
