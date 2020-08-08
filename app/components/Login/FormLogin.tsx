// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { IFormikLoginState } from "./models";
import CustomeInputComponent from "../CustomeInputComponent";
import GotoForgotPassword from "./GotoForgotPassword";
import * as Yup from "yup";
import api from "../../services/api";
import {axiosInstance} from "../../services/axios/axios";
import axios from 'axios'

const FormLogin = () => (
  <div>
    <Formik<IFormikLoginState>
      initialValues={{ username: "", password: "", email: "" }}
      validationSchema={Yup.object({
        // username: Yup.number().required(),
        username: Yup.string()
          .typeError("شماره موبایل نمیتواند حروف باشد")
          .required("لطفا شماره موبایل خود را وارد کنید"),
        password: Yup.string().required("لطفا رمز عبور خود را وارد کنید"),
      })}
      onSubmit={async (values, { setSubmitting }) => {
		const res = await api.apiAuth.login(values)
		window.location.href = 'http://185.206.92.24/pannel'
		
		//   fetch("/api/auth/login/", {
        //   method: "POST",
        //   body: JSON.stringify(values),
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // }).then((res) => console.log(res.json()));
		  // axiosInstance.post('/auth/login/',values).then((res)=>console.log(res))
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
