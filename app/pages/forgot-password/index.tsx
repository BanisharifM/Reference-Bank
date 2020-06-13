import React from "react";
import ForgotPassForm from "../../components/ForgotPassword/ForgotPassForm";
import AuthLayout from "../../components/AuthLayout";

const index = () => {
  return (
    <AuthLayout title="فراموشی رمز عبور">
      <ForgotPassForm />
    </AuthLayout>
  );
};

export default index;
