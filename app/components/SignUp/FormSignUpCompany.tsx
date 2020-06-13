// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { IFormikSignUpCompanyState, IFormikSignUpUserState } from "./models";
import CustomeInputComponent from "../CustomeInputComponent";
import * as Yup from "yup";
import CustomeRadioButtonComponent from "../CustomeRadioButtonComponent";

const FormSignUpCompany = () => (
  <div>
    <Formik<IFormikSignUpCompanyState>
      initialValues={{
        company_name: "",
        username: "",
        password: "",
      }}
      validationSchema={Yup.object({
        company_name: Yup.string()
          .typeError("نام شرکت نمیتواند عدد باشد")
          .required("نام شرکت را وارد کنید"),

        username: Yup.number()
          .typeError("شماره موبایل نمیتواند حروف باشد")
          .required("لطفا شماره موبایل خود را وارد کنید"),
        password: Yup.string().required("لطفا رمز عبور خود را وارد کنید"),
        passwordConfirm: Yup.string()
          .required("تکرار رمز عبور خود را را وارد کنید")
          .when("password", {
            is: (val) => !!(val && val.length > 0),
            then: Yup.string().oneOf(
              [Yup.ref("password")],
              "رمز عبور با تکرار آن باید برابر باشد"
            ),
          }),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field
            type="text"
            name="company_name"
            placeholder="نام شرکت"
            component={CustomeInputComponent}
          />
          <Field
            type="text"
            name="username"
            placeholder="شماره موبایل"
            component={CustomeInputComponent}
          />
          <Field
            type="password"
            name="password"
            placeholder="رمز عبور"
            component={CustomeInputComponent}
          />
          <Field
            type="password"
            name="passwordConfirm"
            placeholder="تکرار رمز عبور"
            component={CustomeInputComponent}
          />
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-fill-out btn-block"
              name="login"
              disabled={isSubmitting}
            >
              ثبت نام
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);

export default FormSignUpCompany;
