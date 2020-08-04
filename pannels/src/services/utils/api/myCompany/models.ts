import { IReqFunction, ICompanyRes } from "../models";

export interface IMyCompanyApi {
  getMyCompany: IReqFunction<ICompanyRes[]>;
  editMyCompany: IReqFunction<
    ICompanyRes,
    { id: number } & Partial<ICompanyRes>
  >;
}
