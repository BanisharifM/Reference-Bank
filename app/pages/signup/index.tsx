import React, { useState } from "react";
import FormSignUpCompany from "../../components/SignUp/FormSignUpCompany";
import FormSignUpUser from "../../components/SignUp/FormSignUpUser";
import GotoLogin from "../../components/SignUp/GotoLogin";
import CustomeRadioButtonComponent from "../../components/CustomeRadioButtonComponent";

const index = () => {
  const [radioValue, setRadioValue] = useState("company");
  const handleChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(e.currentTarget.value);
  };
  return (
    <div className="main_content">
      <div className="login_register_wrap section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-md-10">
              <div className="login_wrap">
                <div className="padding_eight_all bg-white">
                  <div className="heading_s1">
                    <h3>ثبت نام</h3>
                  </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
