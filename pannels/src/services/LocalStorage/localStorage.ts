// import { ICartForm } from "./../context/types";
// import { IInitialProduct } from "../context/types";

export interface ITokens {
  access: string;
  refresh: string;
}
export const createTokenObj = (access: string, refresh: string): ITokens => ({
  access,
  refresh,
});
const accessTokenKey = "access";
const refreshTokenKey = "refresh";
// const cartItemsKey = "cart";
// const formCartItemsKey = "form-cart";

export interface ILSService {
  setToken: (tokenObj: ITokens) => void;
  getAccessToken: () => string;
  getRefreshToken: () => string;
  clearToken: () => void;

  // setCart: (cartItems: IInitialProduct[]) => void;
  // getCart: () => IInitialProduct[];

  // setFormCartField: (formCartField: ICartForm[]) => void;
  // getFormCartField: () => ICartForm[];
}

export const LSService: ILSService = {
  setToken: (tokenObj: ITokens) => {
    localStorage.setItem(accessTokenKey, tokenObj.access);
    localStorage.setItem(refreshTokenKey, tokenObj.refresh);
    localStorage.setItem("user", "کاربر محترم");
  },
  getAccessToken: () => localStorage.getItem(accessTokenKey) as string,
  getRefreshToken: () => localStorage.getItem(refreshTokenKey) as string,
  clearToken: () => {
    localStorage.removeItem(accessTokenKey);
    localStorage.removeItem(refreshTokenKey);
    localStorage.removeItem("user");
  },
  // setCart: (cartItems: IInitialProduct[]) => {
  //   localStorage.setItem(cartItemsKey, JSON.stringify(cartItems));
  // },
  // getCart: () => JSON.parse(localStorage.getItem(cartItemsKey)!) as IInitialProduct[],
  // setFormCartField: (formCartField: ICartForm[]) => {
  //   localStorage.setItem(formCartItemsKey, JSON.stringify(formCartField));
  // },
  // getFormCartField: () => JSON.parse(localStorage.getItem(formCartItemsKey)!) as ICartForm[],
};
