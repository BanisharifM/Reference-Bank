import {  AxiosRequestConfig } from "axios";

export type IReqFunction<U, T = void, Y = void> = (
  t: T,
  params: Y
) => Promise<{
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: AxiosRequestConfig;
  request?: any;
}>;
export type NotRequire<T> = {
  [P in keyof T]?: T[P];
};

//     fetch('http://bank.pythonanywhere.com/auth/login/', {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify({username :'admin', password :'admin'}) // body data type must match "Content-Type" header
// }).then((res)=>res.json())

// const test : IReqFunction<string> = (a ,b ) => {
//     return axiosInstance.get('dagadgadg')
// }
