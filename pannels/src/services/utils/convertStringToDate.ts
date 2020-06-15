import {  Day } from "react-modern-calendar-datepicker";
export const convertStringToDate = (date: string): Day=> {
  const splitedDate = date.split("/");
  return {
    day: Number(splitedDate[2]),
    month: Number(splitedDate[1]),
    year: Number(splitedDate[0]),
  };
};
