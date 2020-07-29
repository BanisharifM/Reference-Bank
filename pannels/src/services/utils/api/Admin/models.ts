import { IReqFunction } from './../models';
import {  NotRequire } from "../models";

//TODO :
//Put and patch for company
export interface IAdminApi {
  getCompanies: (
    params: ICompanyParams
  ) => ReturnType<
    IReqFunction<ICompanyRes[] | ICompanyPaginateRes, void, ICompanyParams>
  >;
  createCompany: IReqFunction<ICompanyRes, ICompanyCreate>;
  getCompany: IReqFunction<ICompanyRes, number>;
  editCompany: IReqFunction<
    ICompanyRes,
    { id: number } & Partial<ICompanyRes>
  >;
  deleteCompany: IReqFunction<undefined, number>;
  getCategories : (params :ICategoryParams) =>ReturnType<IReqFunction<ICategoryRes[], void , ICompanyParams>> ;
  deleteCategory : IReqFunction<undefined , number>
}
//Start GetCompanies
export interface ICompanyRes {
  id: number;
  user: number;
  username: string;
  email: string;
  mobile_number: string;
  name: string;
  manager_name: string;
  phone_number: string;
  website: string;
  address: string;
  location: string;
  logo: string | null;
  category: number | null;
  category_title: string;
  description: string;
  status: "s" | "a";
  [index : string] : string | number|null
}

export interface ICompanyPaginateRes {
  num_pages: number;
  count: number;
  next: string | null;
  previous: null | string;
  results: ICompanyRes[];
}
interface ICompanyParams {
  limit: number;
  offset: number;
  status: "s" | "a";
  category: number;
  search: string;
}
//End GetCompanies

//Start CreateCompany
interface ICompanyCreate {
  user: number;
  name: string;
  manager_name: string;
  phone_number: string;
}
//end CreateCompany

//start Category
export interface ICategoryRes {
  id : number ,
  title :string
	parent :number | null
	parent_title?: "" 
	children : ICategoryRes[]| []
}
interface ICategoryParams {
  search : string
}
//end Category
