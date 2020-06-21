import { ICategoryApi } from './models';
import axios from "axios";

const baseCategoryUrl = "/category";

export const apiCategory: ICategoryApi = {
  createCategory: (obj) => {
    return axios.post(baseCategoryUrl, obj);
  },
  deleteCategory: (id) => {
    return axios.delete(`${baseCategoryUrl}/${id}`);
  },
  updateCategory: (obj) => {
    return axios.put(`${baseCategoryUrl}/${obj.id}`, obj);
  },
};
