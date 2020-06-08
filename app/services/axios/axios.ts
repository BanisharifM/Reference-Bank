import { axiosServerInterceptor } from "./axiosServerInterceptor";
import { axiosInterceptor } from "./axiosInterceptor";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.restino.ir/accounts/api/v1",
});

export const axiosInstanceNoAuth = axios.create({
  baseURL: "https://api.restino.ir/accounts/api/v1",
});
export const axiosInstanceServer = axios.create({
  baseURL: "https://api.restino.ir/accounts/api/v1",
});

// axiosInterceptor(axiosInstance , req);
axiosServerInterceptor(axiosInstanceServer);
