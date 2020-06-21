import { IReqFunction } from "./../model";
interface ILogin {
  username: string;
  password: string;
  email: string;
}
export interface IAuthApi {
  loginUser: (t: ILogin) => Promise<{data :any}>;
  signUpUser: IReqFunction<{ username: string }>; // todo
  logout: IReqFunction;
}
