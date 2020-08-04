import { IMyCompanyApi } from "./models";
import { axiosInstance } from "../../../axios/axios";

export const baseCompanyUrl = "/data_bank";

export const myCompanyApi: IMyCompanyApi = {
  getMyCompany: () => axiosInstance.get(`${baseCompanyUrl}/my_company/`),
  editMyCompany: ({ id, ...newData }) =>
    axiosInstance.patch(`${baseCompanyUrl}/my_company/${id}`, newData),
};
