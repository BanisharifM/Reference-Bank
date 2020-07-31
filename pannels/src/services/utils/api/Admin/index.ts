import { axiosInstance } from "./../../../axios/axios";
import { IAdminApi } from "./models";

export const baseAdminUrl = "/data_bank/admin";
const addCompanySliderConfigReq = {
  headers: {
    "content-type": "multipart/form-data",
  },
};
export const adminApi: IAdminApi = {
  getCompanies: (params) =>
    axiosInstance.get(`${baseAdminUrl}/companies/`, { params }),
  createCompany: (company) =>
    axiosInstance.post(`${baseAdminUrl}/companies/`, company),
  getCompany: (id) => axiosInstance.get(`${baseAdminUrl}/companies/${id}/`),
  editCompany: ({ id, ...newData }) =>
    axiosInstance.patch(`${baseAdminUrl}/companies/${id}/`, newData),
  deleteCompany: (id) =>
    axiosInstance.delete(`${baseAdminUrl}/companies/${id}/`),
  getCategories: ({ search }) =>
    axiosInstance.get(
      `${baseAdminUrl}/category/${search ? `?search=${search}` : ""}`
    ),
  deleteCategory: (id) =>
    axiosInstance.delete(`${baseAdminUrl}/category/${id}/`),
  deleteCategorySlider: (id) =>
    axiosInstance.delete(`${baseAdminUrl}/category_slider/${id}/`),
  addCategorySlider: ({ category, image }) =>
    axiosInstance.post(
      `${baseAdminUrl}/category_slider/`,
      { category, image },
      addCompanySliderConfigReq
    ),
  editCategory: ({ id, ...rest }) =>
    axiosInstance.patch(`${baseAdminUrl}/category/${id}/`, rest),
};
