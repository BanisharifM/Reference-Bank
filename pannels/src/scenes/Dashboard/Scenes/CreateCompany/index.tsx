import React from "react";
import CreateForm from "./components/CreateCompanyForm";

const index = () => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card card-body">
          <h4 className="card-title">ثبت شرکت</h4>
          <h5 className="card-subtitle">برای ثبت شرکت فرم زیر را پر کنید.</h5>
          <CreateForm />
        </div>
      </div>
    </div>
  );
};

export default index;
