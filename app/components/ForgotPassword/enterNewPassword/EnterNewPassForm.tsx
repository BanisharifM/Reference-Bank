// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { IEnterNewPasswordFormikState } from "./models";
import CustomeInputComponent from "../../CustomeInputComponent";
import * as Yup from "yup";
import CustomeButton from "../../CustomeButton";

const EnterNewPassForm = () => (
  <div>
    <Formik<IEnterNewPasswordFormikState>
      initialValues={{ new_password: "" }}
      validationSchema={Yup.object({
        new_password: Yup.string().required("رمز عبور جدید خود را وارد کنید"),
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
            type="password"
            name="new_password"
            placeholder="رمز عبور جدید"
            component={CustomeInputComponent}
          />
          <Field
            type="password"
            name="passwordConfirm"
            placeholder="تکرار رمز عبور"
            component={CustomeInputComponent}
          />
          <CustomeButton
            disabled={isSubmitting}
            type="submit"
            text="تغییر رمز عبور"
          />
        </Form>
      )}
    </Formik>
  </div>
);

export default EnterNewPassForm;
