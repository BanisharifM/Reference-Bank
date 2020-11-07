import React from "react";
import CreateCompanyForm from "./components/CreateCompanyForm";
import { IAdminCreateCompanyFormikState } from "./models";

const defaultValues: IAdminCreateCompanyFormikState = {
  username: "",
  password1: "",
  password2: "",
  name: "",
  website: "",
  category: 0,
  manager_name: "",
  phone_number: "",
  mobile_number: "",
  address: "",
  description: "",
  location: [35.64961, 51.166359],
};

const Index = () => {
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card card-body">
          <h4 className="card-title">ثبت شرکت</h4>
          <h5 className="card-subtitle">برای ثبت شرکت فرم زیر را پر کنید.</h5>
          <CreateCompanyForm initialValue={defaultValues} />
        </div>
      </div>
    </div>
  );
};

export default Index;
