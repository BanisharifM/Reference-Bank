import {IReqFunction, ICompanyRes} from "../models";

export interface ICompanyApi  {
	getMyCompany : IReqFunction<ICompanyRes[] >,
	editMyCompany: IReqFunction<
    ICompanyRes,
    { id: number } & Partial<ICompanyRes>
  >;
}
