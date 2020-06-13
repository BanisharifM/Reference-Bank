import React from "react";
import EnterNewPassForm from "../../../components/ForgotPassword/enterNewPassword/EnterNewPassForm";
import AuthLayout from "../../../components/AuthLayout";

const index = () => {
  return (
    <AuthLayout title="تغییر رمز عبور">
      <EnterNewPassForm />
    </AuthLayout>
  );
};

export default index;
