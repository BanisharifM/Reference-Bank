import { axiosInstance } from "./../../axios/axios";
import { IAuthApi } from "./models";

const baseAuthUrl = "/auth";

export const authApi: IAuthApi = {
  loginUser: ({ username, password, email }) => {
    return axiosInstance.post(`${baseAuthUrl}/login/`, {
      username,
      password,
      email,
    });
  },
  signUpUser: ({ username }) => {
    return axiosInstance.post(`${baseAuthUrl}/registration/`, { username });
  },
  logout: () => {
    return axiosInstance.post(`${baseAuthUrl}/logout/`);
  },
};
