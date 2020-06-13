import React, { useState } from "react";
import FormSignUpCompany from "../../components/SignUp/FormSignUpCompany";
import FormSignUpUser from "../../components/SignUp/FormSignUpUser";
import GotoLogin from "../../components/SignUp/GotoLogin";
import CustomeRadioButtonComponent from "../../components/CustomeRadioButtonComponent";
import AuthLayout from "../../components/AuthLayout";

const index = () => {
  const [radioValue, setRadioValue] = useState("company");
  const handleChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(e.currentTarget.value);
  };
  return (
    <AuthLayout title="ثبت نام">
      <div
        className="d-flex justify-content-around pb-3"
        style={{ borderBottom: "1px solid #ddd" }}
      >
        <CustomeRadioButtonComponent
          value="company"
          label="شرکت"
          checked={radioValue === "company"}
          onChange={handleChangeRadio}
        />
        <CustomeRadioButtonComponent
          value="user"
          label="عادی"
          checked={radioValue === "user"}
          onChange={handleChangeRadio}
        />
      </div>
      <br />
      {radioValue === "company" && <FormSignUpCompany />}
      {radioValue === "user" && <FormSignUpUser />}
      <GotoLogin />
    </AuthLayout>
  );
};

export default index;
