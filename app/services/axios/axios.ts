import { axiosServerInterceptor } from "./axiosServerInterceptor";
import { axiosInterceptor } from "./axiosInterceptor";
import axios from "axios";

const baseURL = "/api";
export const axiosInstance = axios.create({
  baseURL,
});

// export const axiosInstanceNoAuth = axios.create({
//   baseURL: "https://api.restino.ir/accounts/api/v1",
// });
// export const axiosInstanceServer = axios.create({
//   baseURL: "https://api.restino.ir/accounts/api/v1",
// });

// axiosInterceptor(axiosInstance , req);
// axiosServerInterceptor(axiosInstanceServer);
