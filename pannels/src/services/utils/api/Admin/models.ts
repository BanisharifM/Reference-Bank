import { IReqFunction, ICompanyRes } from './../models';

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
  deleteCategorySlider : IReqFunction <undefined , number>
  addCategorySlider : IReqFunction<undefined ,  {category:number , image :File}  >
}
//Start GetCompanies
//ICompany Res moved to .. directory    

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
//Category_Slider 
export interface ICategorySlider {
	id : number , 
	category : number ,
	image : string
}
