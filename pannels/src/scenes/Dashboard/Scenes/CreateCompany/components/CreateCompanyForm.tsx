// Render Prop
import React from "react";
import { Formik, Form, Field } from "formik";
import CustomInputComponent from "../../../../../components/CustomeInputComponent";
import {
  IAdminCreateCompanyFormikState,
  ICompanyCreateCompanyFormikState,
} from "../models";
import * as Yup from "yup";
import { useCanPerform } from "../../../../../services/hooks/useCanPerform";
import CustomeCalanderComponent from "./CustomeCalanderComponent";
import { utils } from "react-modern-calendar-datepicker";
import { convertStringToDate } from "../../../../../services/utils/convertStringToDate";

declare function fromType<T extends boolean>(
  x: T
): T extends true
  ? IAdminCreateCompanyFormikState
  : ICompanyCreateCompanyFormikState;

const defaultValues: IAdminCreateCompanyFormikState = {
  name: "",
  phone_number: "",
  company_number: "",
  zip_code: "",
  start_date: "",
  end_date: "",
};
const CreaetCompanyForm = () => {
  return (
    <div>
      <Formik<IAdminCreateCompanyFormikState, {}>
        initialValues={defaultValues}
        validationSchema={Yup.object({
          name: Yup.string().required("لطفا نام شرکت را وارد کنید"),
          phone_number: Yup.number()
            .typeError("شماره موبایل نمیتواند حروف باشد")
            .required("لطفا شماره موبایل خود را وارد کنید"),
          company_number: Yup.number()
            .typeError("شماره تلفن شرکت نمیتواند حروف باشد")
            .required("شماره تلفن شرکت را وارد کنید"),
          zip_code: Yup.number()
            .typeError("کد پستی نمیتواند حروف باشد ")
            .required("کد پستی را وارد کنید"),
          end_date: Yup.string().required("تاریخ پایان را وارد کنید"),
          start_date: Yup.string()
            .required("تاریخ شروع را وارد کنید")
            .test(
              "isBefore",
              "تاریخ شروع باید قبل از تاریخ پایان باشد",
              function (value) {
                const endDate = this.parent.end_date as string;
                if (endDate) {
                  return utils("fa").isBeforeDate(
                    convertStringToDate(value),
                    convertStringToDate(endDate)
                  );
                }
                return true;
              }
            ),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting, values }) => (
          <Form className="form-horizontal mt-4">
            <Field
              label="نام شرکت"
              type="text"
              name="name"
              component={CustomInputComponent}
            />
            <Field
              label="شماره همراه"
              type="text"
              name="phone_number"
              component={CustomInputComponent}
            />
            <Field
              label="شماره تلفن شرکت"
              type="text"
              name="company_number"
              component={CustomInputComponent}
            />
            <Field
              label="کد پستی"
              type="text"
              name="zip_code"
              component={CustomInputComponent}
            />
            <div className="row">
              <div className="col-md-5">
                <Field
                  label="تاریخ شروع فعالیت:"
                  type="text"
                  name="start_date"
                  component={CustomeCalanderComponent}
                />
              </div>
              <div className="col-md-5">
                <Field
                  label="تاریخ پایان فعالیت:"
                  type="text"
                  name="end_date"
                  component={CustomeCalanderComponent}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-success">
              <i className="fa fa-check"/> ارسال درخواست ثبت شرکت
            </button>

            {/*{JSON.stringify(values, null, 2)}*/}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreaetCompanyForm;
