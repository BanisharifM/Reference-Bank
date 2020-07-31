import React from "react";
import { ICompanyEditFormikState } from "./models";
import CompanyForm from "../../../../components/forms/CompanyForm";
import { ICompanyRes } from "../../../../services/utils/api/models";
import useSWR from "swr";
import { baseCompanyUrl } from "../../../../services/utils/api/myCompany";
import Spinner from "../../../../components/Spinner";

export const Index = () => {
  const { data } = useSWR<ICompanyRes[]>(`${baseCompanyUrl}/my_company/`);
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card card-body">
          <h4 className="card-title">پروفایل</h4>
          <h5 className="card-subtitle">
            ازین قسمت میتوانید پروفایل خود را مشاهده و درصورت نیاز تغییر دهید
          </h5>
          {!data && <Spinner />}
          {data && (
            <CompanyForm<ICompanyRes>
              status="company-edit"
              initialValue={data[0]}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Index;
