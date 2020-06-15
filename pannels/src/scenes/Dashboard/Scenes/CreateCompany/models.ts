export interface IAdminCreateCompanyFormikState {
  name: string;
  phone_number: string;
  company_number: string;
  zip_code: string;
  start_date: string;
  end_date: string;
}
export interface ICompanyCreateCompanyFormikState {
  name: string;
  phone_number: string;
  company_number: string;
  zip_code: string;
}
export interface ICalanderDate {
  year: number;
  month: number;
  day: number;
}
