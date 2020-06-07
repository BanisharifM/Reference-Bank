// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CustomInputComponent from "../../../../../components/CustomeInputComponent";
import { ICreateCompanyFormikState } from "../models";
import * as Yup from "yup";

const CreateForm = () => (
  <div>
    <Formik<ICreateCompanyFormikState, {}>
      initialValues={{
        name: "",
        phone_number: "",
        company_number: "",
        zip_code: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("لطفا نام شرکت را وارد کنید"),
        phone_number: Yup.string()
          .typeError("شماره موبایل نمیتواند حروف باشد")
          .required("لطفا شماره موبایل خود را وارد کنید"),
        company_number: Yup.string()
          .typeError("شماره موبایل نمیتواند حروف باشد")
          .required("لطفا شماره موبایل خود را وارد کنید"),
        zip_code: Yup.string()
          .typeError("شماره موبایل نمیتواند حروف باشد")
          .required("لطفا شماره موبایل خود را وارد کنید"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
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
          <button type="submit" className="btn btn-success">
            {" "}
            <i className="fa fa-check"></i> ارسال درخواست ثبت شرکت
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default CreateForm;
