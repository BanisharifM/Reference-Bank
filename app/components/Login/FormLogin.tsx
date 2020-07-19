// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { IFormikLoginState } from "./models";
import CustomeInputComponent from "../CustomeInputComponent";
import GotoForgotPassword from "./GotoForgotPassword";
import * as Yup from "yup";
import CustomeButton from "../CustomeButton";
import * as api from "../../services/api";

const FormLogin = () => (
  <div>
    <Formik<IFormikLoginState>
      initialValues={{ username: "", password: "", email: "" }}
      validationSchema={Yup.object({
        // username: Yup.number().required(),
		username: Yup.number()
		  .typeError("شماره موبایل نمیتواند حروف باشد")
		  .required("لطفا شماره موبایل خود را وارد کنید"),
        password: Yup.string().required("لطفا رمز عبور خود را وارد کنید"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const { data } = await api.authApi.loginUser({ ...values });
          console.log(data);
        } catch (e) {
          window.location.href = "http://localhost:3000";
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
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
            type="email"
            name="email"
            placeholder="ایمیل"
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
