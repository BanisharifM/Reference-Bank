import { ICompanyRes, IReqFunction } from "../models";

//TODO:
/***
 * should replace the {} with notify Interface
 */
export interface IMyCompanyApi {
  getMyCompany: IReqFunction<ICompanyRes[]>;
  editMyCompany: IReqFunction<{}, { id: number } & Partial<IEditCompany>>;
}

export interface IEditCompany {
  name: string;
  manager_name: string;
  phone_number: string;
  website: string;
  address: string;
  location: [number, number];
  logo: string | null;
  category: number | null;
  description: string;
  [index: string]: string | number | null | [number, number];
}
