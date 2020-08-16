import axios from "axios";
export const fetcherWithParam = (apiUrl: string, param: string, paramValue:  number |string) =>
  axios.get(`/api${apiUrl}?${param}=${paramValue}`).then((res) => res.data);
