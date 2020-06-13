import React from "react";
import FormLogin from "../../components/Login/FormLogin";
import GotoSignUp from "../../components/Login/GotoSignUp";
import AuthLayout from "../../components/AuthLayout";

const index = () => {
  return (
    <AuthLayout title="ورود">
      <FormLogin />
      <GotoSignUp />
    </AuthLayout>
  );
};

export default index;
