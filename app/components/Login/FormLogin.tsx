// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { IFormikLoginState } from "./models";
import CustomeInputComponent from "../CustomeInputComponent";
import GotoForgotPassword from "./GotoForgotPassword";
import * as Yup from "yup";
import CustomeButton from "../CustomeButton";

const FormLogin = () => (
  <div>
    <Formik<IFormikLoginState>
      initialValues={{ username: "", password: "" }}
      validationSchema={Yup.object({
        username: Yup.number()
          .typeError("شماره موبایل نمیتواند حروف باشد")
          .required("لطفا شماره موبایل خود را وارد کنید"),
        password: Yup.string().required("لطفا رمز عبور خود را وارد کنید"),
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
            type="email"
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
          <GotoForgotPassword />
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-fill-out btn-block"
              name="login"
              disabled={isSubmitting}
            >
              وارد شوید
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);

export default FormLogin;
