import * as Yup from "yup";
import { utils } from "react-modern-calendar-datepicker";
import { convertStringToDate } from "../../../../services/utils/convertStringToDate";
export const companyEditValitionSchema= Yup.object({
  name: Yup.string().required("لطفا نام شرکت را وارد کنید"),
  location: Yup.string().required("لطفا آدرس را وارد کنید"),
  phone_number: Yup.number()
    .typeError("شماره موبایل نمیتواند حروف باشد")
    .required("لطفا شماره موبایل خود را وارد کنید"),
  company_number: Yup.number()
    .typeError("شماره تلفن شرکت نمیتواند حروف باشد")
    .required("شماره تلفن شرکت را وارد کنید"),
  zip_code: Yup.number()
    .typeError("کد پستی نمیتواند حروف باشد ")
    .required("کد پستی را وارد کنید"),
});
