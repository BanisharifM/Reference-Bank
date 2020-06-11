import React from "react";
import FormLogin from "../../components/Login/FormLogin";
import GotoSignUp from "../../components/Login/GotoSignUp";

const index = () => {
  return (
    <div className="main_content">
      <div className="login_register_wrap section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-md-10">
              <div className="login_wrap">
                <div className="padding_eight_all bg-white">
                  <div className="heading_s1">
                    <h3>ورود</h3>
                  </div>
                  <FormLogin />
                  <GotoSignUp />
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
