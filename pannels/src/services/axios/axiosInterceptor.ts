import { createTokenObj } from "../LocalStorage/localStorage";
import { IRefreshTokenResponse } from "./types";
import { LSService } from "../LocalStorage/localStorage";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { redirect } from "../navigation/navigation";

let isProfileReq = false;

export const axiosInterceptor = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = LSService.getAccessToken();
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      // config.headers["Content-type"] = "aapplication/json";
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      const originalRequest = error.config;
      if (originalRequest.url === "/accounts/api/v1/profile/") isProfileReq = true;

      if (
        error.response?.status === 401 &&
        originalRequest.url === "/accounts/api/v1/refresh-token/"
      ) {
        LSService.clearToken();
        !isProfileReq && redirect("/login");
        return Promise.reject(error);
      }

      if (
        error.response?.status === 401 &&
        !originalRequest._retry &&
        originalRequest.url !== "/accounts/api/v1/authenticate/" &&
        LSService.getRefreshToken()
      ) {
        originalRequest._retry = true;

        return axiosInstance
          .post<IRefreshTokenResponse>("/accounts/api/v1/refresh-token/", {
            refresh: LSService.getRefreshToken(),
          })
          .then((res) => {
            if (res.status === 200) {
              //1)save token in ls
              LSService.setToken(createTokenObj(res.data.access, LSService.getRefreshToken())); //res.data is an object {access , refresh}
              //2)Change Authoriazation Header
              axiosInstance.defaults.headers.common[
                "Authorization"
              ] = `Bearer ${LSService.getAccessToken()}`;
              return axiosInstance(originalRequest);
            }
            return;
          });
      }
      return Promise.reject(error);
    }
  );
};
