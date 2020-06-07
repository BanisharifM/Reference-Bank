import axios from "axios";
import Cookie from "js-cookie";
import { axiosInstance } from "../axios/axios";

export const getProfile = async (access: string = "") => {
  const accessHeader = access.length ? access : Cookie.get("access");
  return await axios.get("https://api.restino.ir/accounts/api/v1/profile/", {
    headers: {
      Authorization: "Bearer " + accessHeader,
    },
  });
};

export const loginUser = async (username: string, password: string) => {
  return await axiosInstance.post("/athenticate/");
};
