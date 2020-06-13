// Render Prop
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { IForgotPassFormikState } from "./models";
import CustomeInputComponent from "../CustomeInputComponent";
import * as Yup from "yup";
import CustomeButton from "../CustomeButton";

const ForgotPassForm = () => {
  const [enterCode, setEnterCode] = useState(false);
  const [sendingCode, setSendingCode] = useState(false);

  const handleSendCode = () => {
    //axios call
    setTimeout(() => {
      setSendingCode(true);
    }, 1000);
    //then redirect to change password
  };
  return (
    <div>
      <Formik<IForgotPassFormikState>
        initialValues={{ username: "" }}
        validationSchema={Yup.object({
          username: Yup.number()
            .typeError("شماره موبایل نمیتواند حروف باشد")
            .required("لطفا شماره موبایل خود را وارد کنید"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            setEnterCode(true);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              type="text"
              name="username"
              placeholder="شماره موبایل"
              component={CustomeInputComponent}
              readOnly={enterCode}
            />
            {enterCode && (
              <>
                <Field
                  type="email"
                  name="code"
                  placeholder="کد ارسالی را وارد نمایید"
                  component={CustomeInputComponent}
                />
                <CustomeButton
                  type="submit"
                  text="تایید کد"
                  onClick={handleSendCode}
                />
              </>
            )}
            {!enterCode && (
              <CustomeButton
                disabled={isSubmitting}
                type="submit"
                text="ارسال کد تایید"
              />
              
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgotPassForm;
