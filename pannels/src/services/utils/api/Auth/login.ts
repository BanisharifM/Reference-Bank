import { ITokens } from "../../../LocalStorage/localStorage";
import { axiosInstance, axiosInstanceNoAuth } from "../../../axios/axios";

export const authenticateUser = async (
  url: string,
  username: string,
  password: string
) => {
  const res = await axiosInstanceNoAuth.post(url, { username, password });
  return res.data;
};

export const loginUser = async () => {
  return await axiosInstance.get("/profile/");
};
// .get("https://api.restino.ir/accounts/api/v1/profile/", {
//   headers: { authorization: `Bearer ${token}` },
// })
// .then((res) => {
//   dispatch(loginUserSuccess(res.data));
// })
// .catch((err) => {
//   dispatch(loginUserFail(err.data));
// });
