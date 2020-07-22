import { IReqFunction } from "../models";

export interface IAuthApi {
  login: IReqFunction<ILogin, ILogin>;
  logout: IReqFunction<null >;
  register: IReqFunction< IRegisterRes,IRegisterReq>;
  // changePassword: IReqFunction<IChangePassword, IChangePassword>;
  getUser: IReqFunction<IGetUserRes>;
}

//Start Registration
interface IRegisterReq {
  username: string;
  email: string;
  password1: string;
  password2: string;
  mobile_number: string;
}
interface IRegisterRes {
  email: string;
  user: string;
  user_id: number;
  mobile_number: string;
}
//End Registration

//Start Login
interface ILogin {
  username: string;
  password: string;
}
//End Login

//Start ChangePassword
interface IChangePassword {
  new_password1: string;
  new_password2: string;
}
//End ChangePassword

//Start GetUser
interface IGetUserRes {
  id: number;
  username: string;
  email: string;
}
//End GetUser
