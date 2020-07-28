import React from 'react'
import {ICompanyEditFormikState} from './models';
import CompanyForm from '../../../../components/forms/CompanyForm';

const defaultValues: ICompanyEditFormikState = {
  name: "",
  phone_number: "",
  company_number: "",
  zip_code: "",
  location : "",
  map_location : [0,0]
};
export const index = () =>{
	return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card card-body">
          <h4 className="card-title">پروفایل</h4>
          <h5 className="card-subtitle">ازین قسمت میتوانید پروفایل خود را مشاهده و درصورت نیاز تغییر دهید</h5>
		  <CompanyForm<ICompanyEditFormikState> status="company-edit" initialValue={defaultValues} />
        </div>
      </div>
    </div>
	)

}
export default index
