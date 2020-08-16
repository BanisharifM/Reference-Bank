import React from "react";
import useSWR from "swr";
import CompanyForm from "../../../../components/forms/CompanyForm";
import Spinner from "../../../../components/Spinner";
import { ICompanyRes } from "../../../../services/utils/api/models";
import { baseCompanyUrl } from "../../../../services/utils/api/myCompany";
import { IEditCompany } from "../../../../services/utils/api/myCompany/models";

export const Index = () => {
  const { data } = useSWR<ICompanyRes[]>(`${baseCompanyUrl}/my_company/`);
  const handleSubmit = (values: IEditCompany) => {
    console.log(values);
  };
  return (
    <div className="row">
      <div className="card card-body">
        <h4 className="card-title">پروفایل</h4>
        <h5 className="card-subtitle">
          ازین قسمت میتوانید پروفایل خود را مشاهده و درصورت نیاز تغییر دهید
        </h5>
        {!data && <Spinner />}
        {data && (
          <CompanyForm<IEditCompany>
            status="company-edit"
            initialValue={data[0]}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
};
export default Index;
