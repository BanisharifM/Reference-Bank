import { IReqFunction } from './../models';
export interface ICategoryApi {
  createCategory: IReqFunction<{ id: number; name: string }>;
  deleteCategory: IReqFunction<number>;
  updateCategory: IReqFunction<{ id: number; name: string }>;
}

export interface ICategoryUrls {
  createCategory: string;
}
