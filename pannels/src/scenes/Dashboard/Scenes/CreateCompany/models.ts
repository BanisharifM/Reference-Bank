export interface IAdminCreateCompanyFormikState {
  name: string;
  phone_number: string;
  company_number: string;
  zip_code: string;
  start_date: string;
  end_date: string;
  location : string
  map_location :[number , number]
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
