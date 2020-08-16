import { IReqFunction } from "../models";

export interface IMyCompanySlider {
  deleteMyCompanySlider: IReqFunction<undefined, number>;
}

export interface IMyCompanySliderRes {
  id: number;
  company: number;
  company_name: string;
  image: string;
  status: string;
  description_admin: string;
}
