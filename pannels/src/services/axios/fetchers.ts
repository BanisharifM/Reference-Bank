import axios from "axios";
export const fetcherWithSearch = (apiUrl: string, toSearch: string) =>
  axios.get(`${apiUrl}?search=${toSearch}`).then((res) => res.data);
