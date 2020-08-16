import { ICategoryApi } from "./models";
import { axiosInstance } from "../../axios/axios";

const baseCategoryUrl = "/category";

export const apiCategory: ICategoryApi = {
  // createCategory: (obj) => {
  //   return axiosInstance.post(baseCategoryUrl, obj);
  // },
  // deleteCategory: (id) => {
  //   return axiosInstance.delete(`${baseCategoryUrl}/${id}`);
  // },
  // updateCategory: (obj) => {
  //   return axiosInstance.put(`${baseCategoryUrl}/${obj?.id}`, obj);
  // },
};
