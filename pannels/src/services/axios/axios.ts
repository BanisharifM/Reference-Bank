import { axiosInterceptor } from "./axiosInterceptor";
import axios from "axios";

const baseURL = "";
export const axiosInstance = axios.create({
  baseURL,
});

// export const axiosInstanceNoAuth = axios.create({
//   baseURL: "https://api.restino.ir/accounts/api/v1",
// });

// axiosInterceptor(axiosInstance);
