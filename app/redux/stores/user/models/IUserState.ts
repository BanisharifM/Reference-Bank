export interface IUser {
  avatar: string;
  date_joined: string;
  description: string;
  email: string;
  first_name: string;
  national_code: string;
  last_name: string;
  username: string;
}

export interface IUserState extends IUser {
  isLoading: boolean;
  error: string;
  isAuth: boolean;
}
