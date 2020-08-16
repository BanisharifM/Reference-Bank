import { IAuthApi } from "./models";
import {axiosInstance} from "../../axios/axios";



const baseAuthUrl = "/auth";
export const apiAuth: IAuthApi = {
  logout: () => axiosInstance.post(`${baseAuthUrl}/logout/`),
  login: (userData) => axiosInstance.post(`${baseAuthUrl}/login/`, userData ),
  register: (obj) => axiosInstance.post(`${baseAuthUrl}/registration/`, obj),
  getUser: () => axiosInstance.get(`${baseAuthUrl}/user/`),

}
