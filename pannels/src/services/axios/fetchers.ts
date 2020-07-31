import axios from "axios";
export const fetcherWithParam = (apiUrl: string, param: string, paramValue:  number |string) =>
  axios.get(`${apiUrl}?${param}=${paramValue}`).then((res) => res.data);
